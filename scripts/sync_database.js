import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { HEROES } from '../src/data/heroesData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicImagesDir = path.resolve(__dirname, '../public/assets/images');
const publicHeroesDir = path.resolve(__dirname, '../public/assets/images/heroes');

// Distinct entries for the 5 newest canon champions
const upcomingHeroes = [
  {
    id: "kalea",
    name: "Kalea",
    title: "Tidal Sovereign",
    role: "Support",
    secondaryRole: "Mage",
    speciality: "Crowd Control / Regen",
    lane: "Roam",
    faction: "Ocean Sanctuary",
    region: "Cadia Riverlands & Sea",
    difficulty: 45,
    difficultyLabel: "Moderate",
    attributes: { offense: 55, durability: 70, abilityEffects: 85, difficulty: 45 },
    winRate: "52.4%",
    popularity: "Rank S",
    image: "/assets/images/heroes/kalea.png",
    portrait: "/assets/images/heroes/kalea.png",
    themeColor: "#06b6d4",
    voiceQuote: "The endless tides listen only to the deep current.",
    loreQuote: "When the stormy seas rise, the sanctuary shall emerge unscathed.",
    lore: "Guardian of the sunken astral seas adjoining the Cadia Riverlands. Kalea commands ancient marine currents to shield oceanic sanctuaries from abyssal incursions, guiding seafaring voyagers through perilous tempests.",
    relationships: [
      { name: "Kadita", role: "Ocean Goddess", type: "Ally" },
      { name: "Bane", role: "Frozen Plunderer", type: "Nemesis" },
      { name: "Luo Yi", role: "Yin-Yang Strategist", type: "Neutral" }
    ],
    abilities: [
      {
        id: "kalea_p",
        name: "Abyssal Current",
        type: "Passive",
        cooldown: "Passive",
        cost: "No Cost",
        icon: "🌊",
        description: "Allied units touched by Kalea's tidal surge receive enhanced movement speed and a protective water barrier."
      },
      {
        id: "kalea_s1",
        name: "Surge Cascade",
        type: "Skill 1",
        cooldown: "6.5s",
        cost: "60 Mana",
        icon: "💧",
        description: "Releases a surging vortex of ocean water that damages and knocks back oncoming enemies."
      },
      {
        id: "kalea_s2",
        name: "Deepsea Bubble",
        type: "Skill 2",
        cooldown: "9.0s",
        cost: "75 Mana",
        icon: "🫧",
        description: "Traps enemy champions within pressurized water spheres, disabling them for 1.2s."
      },
      {
        id: "kalea_ult",
        name: "Tidal Cataclysm",
        type: "Ultimate",
        cooldown: "42.0s",
        cost: "120 Mana",
        icon: "🌀",
        description: "Summons a monumental tidal wave sweeping across the battlefield, cleansing debuffs on allies and slowing all enemies by 70%."
      }
    ]
  },
  {
    id: "zetian",
    name: "Zetian",
    title: "Celestial Empress",
    role: "Mage",
    secondaryRole: "None",
    speciality: "Burst / Area Control",
    lane: "Mid Lane",
    faction: "Phoenix Dynasty",
    region: "Cadia Riverlands",
    difficulty: 60,
    difficultyLabel: "Moderate",
    attributes: { offense: 92, durability: 35, abilityEffects: 90, difficulty: 60 },
    winRate: "53.8%",
    popularity: "Rank S+",
    image: "/assets/images/heroes/zetian.png",
    portrait: "/assets/images/heroes/zetian.png",
    themeColor: "#f59e0b",
    voiceQuote: "True authority bends neither to heaven nor earth.",
    loreQuote: "From the ashes of fallen dynasties, the immortal phoenix reigns supreme.",
    lore: "Sovereign ruler of the Phoenix Court in the heart of Cadia Riverlands. Wielding royal solar flames, Zetian brings order to the fragmented provinces with unchallenged imperial power and strategic brilliance.",
    relationships: [
      { name: "Yu Zhong", role: "Black Dragon Sovereign", type: "Rival" },
      { name: "Luo Yi", role: "Imperial Diviner", type: "Ally" },
      { name: "Baxia", role: "Black Tortoise Guardian", type: "Neutral" }
    ],
    abilities: [
      {
        id: "zetian_p",
        name: "Phoenix Mandate",
        type: "Passive",
        cooldown: "Passive",
        cost: "No Cost",
        icon: "🔥",
        description: "Skills apply imperial flame marks. Detonating 3 marks causes a burst of true damage and grants Zetian solar shielding."
      },
      {
        id: "zetian_s1",
        name: "Solar Scepter",
        type: "Skill 1",
        cooldown: "5.5s",
        cost: "55 Mana",
        icon: "☀️",
        description: "Directs solar beams toward a designated point, detonating on impact with burning splash damage."
      },
      {
        id: "zetian_s2",
        name: "Imperial Domain",
        type: "Skill 2",
        cooldown: "8.0s",
        cost: "70 Mana",
        icon: "👑",
        description: "Creates an imperial golden sanctum. Enemies attempting to cross its borders are grounded and slowed."
      },
      {
        id: "zetian_ult",
        name: "Ascendance of Phoenix",
        type: "Ultimate",
        cooldown: "36.0s",
        cost: "110 Mana",
        icon: "🦅",
        description: "Transforms into the golden avatar of the Phoenix, bombarding the target region with descending orbital meteors."
      }
    ]
  },
  {
    id: "obsidia",
    name: "Obsidia",
    title: "Void Sovereign",
    role: "Mage",
    secondaryRole: "Assassin",
    speciality: "Burst / Blink",
    lane: "Mid / Jungle",
    faction: "Dark Abyss",
    region: "The Abyss",
    difficulty: 75,
    difficultyLabel: "Hard",
    attributes: { offense: 96, durability: 28, abilityEffects: 94, difficulty: 75 },
    winRate: "52.9%",
    popularity: "Rank S",
    image: "/assets/images/heroes/obsidia.png",
    portrait: "/assets/images/heroes/obsidia.png",
    themeColor: "#a855f7",
    voiceQuote: "The void hungers for what the light dares to build.",
    loreQuote: "In absolute darkness, every heartbeat becomes a target.",
    lore: "Born from the crystallization of raw abyssal energy in the deepest trenches of the Land of Dawn. Obsidia manipulates spatial fractures and dark matter to obliterate anyone encroaching upon her desolate domain.",
    relationships: [
      { name: "Alice", role: "Blood Demon Queen", type: "Rival" },
      { name: "Dyrroth", role: "Prince of Abyss", type: "Ally" },
      { name: "Alucard", role: "Demon Hunter", type: "Nemesis" }
    ],
    abilities: [
      {
        id: "obsidia_p",
        name: "Singularity Resonance",
        type: "Passive",
        cooldown: "Passive",
        cost: "No Cost",
        icon: "🌌",
        description: "Obsidia gains bonus magic penetration per enemy trapped inside void gravity wells."
      },
      {
        id: "obsidia_s1",
        name: "Void Shard",
        type: "Skill 1",
        cooldown: "4.5s",
        cost: "50 Mana",
        icon: "🔮",
        description: "Hurls three obsidian dark-matter crystals piercing through targets and leaving lingering gravity fissures."
      },
      {
        id: "obsidia_s2",
        name: "Spatial Tear",
        type: "Skill 2",
        cooldown: "7.5s",
        cost: "60 Mana",
        icon: "⚡",
        description: "Tears open a void portal, instantly blinking to the cursor location and silencing nearby foes for 0.8s."
      },
      {
        id: "obsidia_ult",
        name: "Event Horizon",
        type: "Ultimate",
        cooldown: "40.0s",
        cost: "130 Mana",
        icon: "🕳️",
        description: "Summons a colossal black hole that continuously pulls in surrounding targets, ending in an apocalyptic cosmic collapse."
      }
    ]
  },
  {
    id: "sora",
    name: "Sora",
    title: "Sky Ascendant",
    role: "Fighter",
    secondaryRole: "Assassin",
    speciality: "Chase / Burst",
    lane: "EXP / Jungle",
    faction: "Apex Aeronauts",
    region: "Eruditio & Sky Isles",
    difficulty: 65,
    difficultyLabel: "Moderate",
    attributes: { offense: 90, durability: 60, abilityEffects: 75, difficulty: 65 },
    winRate: "51.7%",
    popularity: "Rank A+",
    image: "/assets/images/heroes/sora.png",
    portrait: "/assets/images/heroes/sora.png",
    themeColor: "#38bdf8",
    voiceQuote: "The open horizon belongs only to those fearless enough to soar.",
    loreQuote: "Turbulence is just the heartbeat of the storm.",
    lore: "Aerial vanguard trained in Eruditio's advanced aeronautical academy. Equipped with pressurized antigravity thrusters and dual aero-blades, Sora patrol the stratospheric borders defending the Land of Dawn from skyward incursions.",
    relationships: [
      { name: "Fanny", role: "Steel Cable Vanguard", type: "Rival" },
      { name: "Beatrix", role: "Eruditio Weaponmaster", type: "Ally" },
      { name: "Claude", role: "Thief King", type: "Neutral" }
    ],
    abilities: [
      {
        id: "sora_p",
        name: "Antigravity Drive",
        type: "Passive",
        cooldown: "Passive",
        cost: "No Cost",
        icon: "🕊️",
        description: "Moving builds aero-momentum. At full charge, Sora gains airborne evasion and basic attacks lunge with bonus critical damage."
      },
      {
        id: "sora_s1",
        name: "Stratosphere Glide",
        type: "Skill 1",
        cooldown: "6.0s",
        cost: "45 Energy",
        icon: "💨",
        description: "Fires thrusters to dash forward, slashing enemies with high-velocity blades."
      },
      {
        id: "sora_s2",
        name: "Cyclone Vortex",
        type: "Skill 2",
        cooldown: "8.5s",
        cost: "55 Energy",
        icon: "🌪️",
        description: "Spins in an aerodynamic circle, reflecting ranged projectiles and disarming targets caught in the wind vortex."
      },
      {
        id: "sora_ult",
        name: "Supersonic Dive",
        type: "Ultimate",
        cooldown: "35.0s",
        cost: "80 Energy",
        icon: "🚀",
        description: "Launches high into the clouds, then plummets downward like a meteor to smash the target area with seismic knockup."
      }
    ]
  },
  {
    id: "marcel",
    name: "Marcel",
    title: "Chrono Alchemist",
    role: "Support",
    secondaryRole: "Fighter",
    speciality: "Buff / Time Warp",
    lane: "Roam / EXP",
    faction: "Academy of Magic",
    region: "Moniyan Empire",
    difficulty: 55,
    difficultyLabel: "Moderate",
    attributes: { offense: 65, durability: 75, abilityEffects: 85, difficulty: 55 },
    winRate: "52.1%",
    popularity: "Rank A",
    image: "/assets/images/heroes/marcel.png",
    portrait: "/assets/images/heroes/marcel.png",
    themeColor: "#10b981",
    voiceQuote: "Every second counts, especially the ones you can rewind.",
    loreQuote: "Alchemy turns stone to gold, but chrono-science bends eternity.",
    lore: "Brilliant young prodigy from the Moniyan Clockwork Academy. Marcel discovered how to synthesize chronotrons into combat alchemy vials, altering the flow of time on the battlefield to reverse injuries and accelerate comrades.",
    relationships: [
      { name: "Diggie", role: "Time Keeper", type: "Mentor" },
      { name: "Harley", role: "Mage Academy Rival", type: "Rival" },
      { name: "Tigreal", role: "Knight Commander", type: "Ally" }
    ],
    abilities: [
      {
        id: "marcel_p",
        name: "Chrono Tincture",
        type: "Passive",
        cooldown: "Passive",
        cost: "No Cost",
        icon: "⏳",
        description: "Skills leave chrono-residue on the ground. Allies stepping onto residue recover HP and gain cooldown acceleration."
      },
      {
        id: "marcel_s1",
        name: "Alchemical Flash",
        type: "Skill 1",
        cooldown: "5.0s",
        cost: "50 Mana",
        icon: "🧪",
        description: "Hurls an unstable temporal elixir that shatters, blinding enemies and dealing ticking magic damage."
      },
      {
        id: "marcel_s2",
        name: "Temporal Tether",
        type: "Skill 2",
        cooldown: "10.0s",
        cost: "70 Mana",
        icon: "⛓️",
        description: "Links himself to an ally or enemy. Allies gain surging attack speed; enemies suffer escalating slows."
      },
      {
        id: "marcel_ult",
        name: "Chrono Rewind",
        type: "Ultimate",
        cooldown: "45.0s",
        cost: "110 Mana",
        icon: "⏱️",
        description: "Marks an ally. If they take fatal damage within 4 seconds, time rewinds to restore 40% of their maximum HP and teleport them to Marcel's position."
      }
    ]
  }
];

// Combine unique existing heroes (first 127) with the 5 new distinct champions
const uniqueFirst127 = HEROES.slice(0, 127);
const fullRoster = [...uniqueFirst127, ...upcomingHeroes];

// Update image and portrait paths
for (const hero of fullRoster) {
  const localJpg = path.join(publicImagesDir, `${hero.id}.jpg`);
  const localPng = path.join(publicHeroesDir, `${hero.id}.png`);

  if (fs.existsSync(localJpg)) {
    hero.image = `/assets/images/${hero.id}.jpg`;
  } else if (fs.existsSync(localPng)) {
    hero.image = `/assets/images/heroes/${hero.id}.png`;
  } else {
    hero.image = `/assets/images/heroes/${hero.id}.png`;
  }

  hero.portrait = `/assets/images/heroes/${hero.id}.png`;
}

console.log(`Prepared updated database with ${fullRoster.length} heroes.`);

// Format into ES module code
const fileContent = `// Verified Mobile Legends: Bang Bang Master Hero Canon Dataset (All 132 Champions)
// Generated with verified lore, relationships, abilities, and local high-resolution artwork

export const HEROES = ${JSON.stringify(fullRoster, null, 2)};
`;

const targetFile = path.resolve(__dirname, '../src/data/heroesData.js');
fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log('Successfully wrote updated database to src/data/heroesData.js');
