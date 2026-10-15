import json
import os
import re
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_133_heroes_mosaic():
    with open('./src/data/heroesData.js', 'r', encoding='utf-8') as f:
        content = f.read()

    match = re.search(r'export const HEROES = (\[.*?\]);', content, re.DOTALL)
    if not match:
        print("Could not find HEROES array")
        return

    heroes = json.loads(match.group(1))
    print(f"Loaded {len(heroes)} heroes from dataset.")

    # Validate image files for each hero
    hero_images = []
    for h in heroes:
        hid = h['id']
        name = h['name']
        role = h.get('role', 'Hero')
        
        # Primary candidate paths
        candidates = [
            os.path.join('public', 'assets', 'images', 'heroes', f"{hid}.png"),
            os.path.join('public', 'assets', 'images', 'heroes', f"{hid}.jpg"),
            os.path.join('public', h['image'].lstrip('/')) if h.get('image') else None,
            os.path.join('public', 'assets', 'images', f"{hid}.jpg"),
            os.path.join('public', 'assets', 'images', f"{hid}.png"),
        ]
        
        found_path = None
        for p in candidates:
            if p and os.path.exists(p):
                found_path = p
                break
                
        if found_path:
            hero_images.append({
                'id': hid,
                'name': name,
                'role': role,
                'path': found_path
            })
        else:
            print(f"WARNING: Image not found for hero {hid} ({name})")

    print(f"Total verified hero images: {len(hero_images)}")

    # We have exactly 133 heroes!
    # Layout: 19 columns x 7 rows = exactly 133 heroes!
    cols = 19
    rows = 7
    tile_w = 200
    tile_h = 260
    gap = 6
    padding = 24
    
    total_w = padding * 2 + cols * tile_w + (cols - 1) * gap
    total_h = padding * 2 + rows * tile_h + (rows - 1) * gap
    
    print(f"Generating mosaic canvas: {total_w} x {total_h} pixels ({cols} x {rows} grid)...")
    
    # Create master image with dark arcane gradient background
    mosaic = Image.new('RGB', (total_w, total_h), (5, 8, 15))
    draw = ImageDraw.Draw(mosaic)
    
    # Subtle dark gradient/noise on background
    for y in range(total_h):
        ratio = y / total_h
        r = int(5 + ratio * 8)
        g = int(8 + ratio * 10)
        b = int(15 + ratio * 18)
        draw.line([(0, y), (total_w, y)], fill=(r, g, b))

    # Font setup
    try:
        font_name = ImageFont.truetype("arialbd.ttf", 15)
        font_role = ImageFont.truetype("arial.ttf", 11)
        font_title = ImageFont.truetype("arialbd.ttf", 26)
    except:
        font_name = ImageFont.load_default()
        font_role = ImageFont.load_default()
        font_title = ImageFont.load_default()

    role_colors = {
        'Tank': (59, 130, 246),
        'Fighter': (239, 68, 68),
        'Assassin': (168, 85, 247),
        'Mage': (56, 189, 248),
        'Marksman': (245, 158, 11),
        'Support': (16, 185, 129),
    }

    # Render each hero
    for idx, h in enumerate(hero_images):
        col = idx % cols
        row = idx // cols
        
        x = padding + col * (tile_w + gap)
        y = padding + row * (tile_h + gap)
        
        # Open and crop/resize hero image to fit tile_w x (tile_h - 40)
        img_h = tile_h - 42
        try:
            with Image.open(h['path']) as img:
                # Convert to RGB if needed
                if img.mode != 'RGB':
                    img = img.convert('RGB')
                
                # Aspect crop to fill (tile_w, img_h)
                iw, ih = img.size
                target_ratio = tile_w / img_h
                src_ratio = iw / ih
                
                if src_ratio > target_ratio:
                    new_w = int(ih * target_ratio)
                    left = (iw - new_w) // 2
                    img_cropped = img.crop((left, 0, left + new_w, ih))
                else:
                    new_h = int(iw / target_ratio)
                    top = (ih - new_h) // 4 # bias towards upper portion for face
                    img_cropped = img.crop((0, top, iw, top + new_h))
                    
                img_resized = img_cropped.resize((tile_w, img_h), Image.Resampling.LANCZOS)
                mosaic.paste(img_resized, (x, y))
        except Exception as e:
            print(f"Error processing {h['id']}: {e}")
            # Placeholder fill if error
            draw.rectangle([x, y, x + tile_w, y + img_h], fill=(20, 24, 36))

        # Bottom label bar
        label_y = y + img_h
        draw.rectangle([x, label_y, x + tile_w, y + tile_h], fill=(9, 13, 22))
        
        # Role color stripe at bottom of image
        rcolor = role_colors.get(h['role'].split(' / ')[0].split('/')[0].strip(), (234, 179, 8))
        draw.rectangle([x, label_y - 2, x + tile_w, label_y], fill=rcolor)
        
        # Hero Name text (truncated if too long)
        name_text = h['name']
        if len(name_text) > 13:
            name_text = name_text[:12] + '…'
            
        draw.text((x + 8, label_y + 4), name_text, font=font_name, fill=(245, 245, 250))
        draw.text((x + 8, label_y + 22), h['role'].upper(), font=font_role, fill=rcolor)
        
        # Hero number badge (e.g. #001 ... #133)
        num_str = f"#{idx+1:03d}"
        draw.text((x + tile_w - 38, label_y + 22), num_str, font=font_role, fill=(130, 140, 160))

        # Outer luxury border for tile
        draw.rectangle([x, y, x + tile_w, y + tile_h], outline=(40, 50, 70), width=1)
        # Golden inner corner markers
        draw.point([(x, y), (x + tile_w, y), (x, y + tile_h), (x + tile_w, y + tile_h)], fill=(234, 179, 8))

    # Outer border of entire mosaic
    draw.rectangle([0, 0, total_w - 1, total_h - 1], outline=(234, 179, 8), width=3)
    
    # Save the master composite image
    out_dir = os.path.join('public', 'assets', 'images')
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, 'all_133_heroes_mosaic.jpg')
    
    # Save high quality JPEG
    mosaic.save(out_path, 'JPEG', quality=90, optimize=True)
    size_mb = os.path.getsize(out_path) / (1024 * 1024)
    print(f"SUCCESS! Master 133 heroes mosaic saved to: {out_path} ({size_mb:.2f} MB)")

if __name__ == '__main__':
    create_133_heroes_mosaic()
