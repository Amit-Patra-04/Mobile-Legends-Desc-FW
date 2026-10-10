// Verified MLBB Land of Dawn World Lore & Regional Canon

export const REGIONS = [
  {
    id: 'moniyan',
    name: 'Moniyan Empire',
    title: 'The Bastion of Light & Imperial Honor',
    bannerColor: 'from-amber-600/40 via-yellow-500/20 to-transparent',
    themeHex: '#f59e0b',
    capital: 'Lumina City',
    crest: '🦁',
    summary:
      'The largest and most majestic human empire in the Land of Dawn. Ruled by the noble House of Vance and defended by the Imperial Knights and Monastery of Light, Moniyan stands as humanitys primary defensive wall against the abyssal darkness.',
    lore: `Centuries ago, when chaotic demonic legions poured from the cracked earth, legendary warriors gathered beneath the sacred banner of the Dawn to establish the Moniyan Empire. Through generations of righteous discipline, holy sorcery, and valiant steel, the knights of Moniyan repelled evil, building Lumina City into a gleaming citadel of golden spires and grand cathedral halls.`,
    factions: [
      'Imperial Knights of the Dawn',
      'Monastery of Light',
      'House Paxley',
      'Order of the Imperial Vanguard',
    ],
    heroes: ['Tigreal', 'Alucard', 'Fanny', 'Granger', 'Gusion'],
    landmarks: ['Imperial Sanctuary', 'Monastery of Light', 'Lumina Cathedral', 'Dragon Peak Passes'],
  },
  {
    id: 'cadia',
    name: 'Cadia Riverlands',
    title: 'The Mystic Realm of Martial Harmony',
    bannerColor: 'from-emerald-600/40 via-teal-500/20 to-transparent',
    themeHex: '#10b981',
    capital: 'Great Dragon Temple',
    crest: '🐉',
    summary:
      'A serene eastern sanctuary framed by sacred misty peaks, tranquil bamboo groves, and ancient waterways. Protected by the celestial Great Dragon, this land is the cradle of internal cultivation, yin-yang balance, and secret martial arts traditions.',
    lore: `Cut off from the western empires by towering mountain ridges, the Cadia Riverlands has cultivated peace through millenia of spiritual discipline. Here, martial artists harness the breath of dragons, Onmyouji masters harmonize with the spirits of cherry blossoms and rainfall, and shadow ninjas guard hidden clans in sacred darkness.`,
    factions: [
      'Disciples of the Great Dragon',
      'Cadia Onmyouji Shrine',
      'Scarlet Shadow Ninjas',
      'Dragon Martial Sanctuary',
    ],
    heroes: ['Chou', 'Kagura', 'Hayabusa', 'Hanabi', 'Zilong'],
    landmarks: ['Great Dragon Temple', 'Bamboo Sea of Mist', 'Aegis River Cascades', 'Yin-Yang Shrine'],
  },
  {
    id: 'eruditio',
    name: 'Eruditio',
    title: 'The Metropolis of Scholars & Clockwork Science',
    bannerColor: 'from-cyan-600/40 via-blue-500/20 to-transparent',
    themeHex: '#06b6d4',
    capital: 'City of Scholars',
    crest: '⚙️',
    summary:
      'A technological wonderland where intellect supersedes magic. Driven by steam turbines, clockwork cogwheels, and high-energy spark coils, Eruditio welcomes inventors and visionary thinkers from every corner of the world.',
    lore: `Rejecting ancient dogmas and the unpredictable perils of arcane witchcraft, the founders of Eruditio established an independent sanctuary dedicated solely to scientific advancement. Today, monumental gear towers pulse with clean kinetic power, while ingenious engineers develop groundbreaking weapon systems to secure the future.`,
    factions: [
      'Union of Scholars',
      'Omni-Tech Defense Corps',
      'Aeronautic Guild',
      'Laboratory 1718 Exiles',
    ],
    heroes: ['Beatrix', 'Layla', 'Bruno', 'Diggie', 'Lolita'],
    landmarks: ['Omni-Gear Central Tower', 'Aerostat Fleet Harbor', 'Apex Research Academy', 'Clockwork Plaza'],
  },
  {
    id: 'northern_vale',
    name: 'Northern Vale',
    title: 'The Frostbitten Fjord of Ancient Titans',
    bannerColor: 'from-sky-600/40 via-indigo-500/20 to-transparent',
    themeHex: '#38bdf8',
    capital: 'Megalith of Winter',
    crest: '❄️',
    summary:
      'A merciless frozen tundra carved by glacial winds and endless blizzards. Inhabited by fierce coastal clans, sea reavers, and descendants of northern storm gods who forge survival through unyielding iron and courage.',
    lore: `The Northern Vale has no mercy for weakness. Survival is a daily triumph earned against ice wolves and biting frost. Yet beneath the ice sheets lie dormant secrets of the ancient northern deities, waiting for the true stormborn to take up their war-hammers and claim destiny.`,
    factions: [
      'Clans of the Frozen Shore',
      'Valkyrie Wardens',
      'Pirates of the Northern Seas',
      'Bear-Totem Shamans',
    ],
    heroes: ['Franco', 'Freya', 'Bane', 'Aurora', 'Masha'],
    landmarks: ['Aegirs Stand', 'Glacier of the Frost Queen', 'Windtalker Caverns', 'Megalith of Winter'],
  },
  {
    id: 'abyss',
    name: 'Barren Lands & The Abyss',
    title: 'The Blighted Crucible of Demonic Corruption',
    bannerColor: 'from-rose-600/40 via-red-900/40 to-transparent',
    themeHex: '#ef4444',
    capital: 'The Abyssal Chasm',
    crest: '🔥',
    summary:
      'A catastrophic volcanic fissure leaking corrupting dark mana into the world. In its subterranean depths dwell the dreaded Lords of the Abyss, assembling demonic armies to engulf the Land of Dawn in eternal shadow.',
    lore: `Formed during the Great Calamity, the fissure of the Abyss severed the earth down to primordial core fire. Demons mutated by toxic darkness established sinister dominance, plotting to shatter the seal of the Moniyan Empire and reclaim the surface world.',`,
    factions: [
      'Lords of the Abyss',
      'Blood Demon Aristocracy',
      'Lava Orc Hordes',
      'Twilight Cult',
    ],
    heroes: ['Alice', 'Thamuz', 'Dyrroth', 'Helcurt', 'Selena'],
    landmarks: ['Magmas Maw', 'Obsidian Throne', 'The Rift of Lament', 'Sulfur Caverns'],
  },
  {
    id: 'celestial_palace',
    name: 'Celestial Palace',
    title: 'The Floating Sanctum of Divine Creators',
    bannerColor: 'from-violet-600/40 via-purple-500/20 to-transparent',
    themeHex: '#a855f7',
    capital: 'Sanctum of the Gods',
    crest: '✨',
    summary:
      'A mythical palace floating high above the clouds in the absolute center of the Land of Dawn. An ancient monument of divine architecture, it preserves the mysterious Twilight Orbs that regulate global cosmic energy.',
    lore: `Crafted by the primordial architects of the world, the Celestial Palace was once home to godlike beings who walked among constellations. Though its masters departed into deep cosmos, ancient automaton sentinels and winged guardians continue to preserve the celestial sanctuary.',`,
    factions: [
      'Guardians of the Twilight Orb',
      'Sanctum Sentinels',
      'Winged Knights of Kaja',
    ],
    heroes: ['Kaja', 'Uranus', 'Lunox'],
    landmarks: ['Throne of Eternity', 'Twilight Pillar', 'Aetherial Gate', 'Sky Cloud Amphitheater'],
  },
];

export const TIMELINE_EVENTS = [
  {
    year: 'Ancient Era',
    title: 'Creation of the Twilight Orbs',
    category: 'Cosmic Genesis',
    description:
      'The Ancient Gods forge the Twilight Orbs at the zenith of the Celestial Palace, establishing the delicate equilibrium between Light and Dark that sustains the Land of Dawn.',
    icon: '🌌',
  },
  {
    year: '1st Century BD',
    title: 'The Great Abyssal Rupture',
    category: 'Cataclysm',
    description:
      'A violent geological eruption tears open the Barren Lands. Dark corrosive mana floods outward as demonic entities breach the subterranean abyss.',
    icon: '🌋',
  },
  {
    year: 'Year 42 AD',
    title: 'Ascendance of the Moniyan Empire',
    category: 'Empire Building',
    description:
      'Human knight clans unite under the golden lion emblem to found the Moniyan Empire, consecrating the Monastery of Light to train the first holy demon hunters.',
    icon: '🏰',
  },
  {
    year: 'Year 380 AD',
    title: 'The Industrial Awakening of Eruditio',
    category: 'Innovation',
    description:
      'Scholars and free-thinkers break away from feudal monarchies, establishing the independent city of Eruditio powered by mechanical gears and electric conduits.',
    icon: '⚙️',
  },
  {
    year: 'Year 510 AD',
    title: 'The Fall of the Imperial Vanguard',
    category: 'Conflict',
    description:
      'A catastrophic ambush in the Abyssal borderlands claims the lives of noble Moniyan knight commanders, forging young Alucard into the vengeful Demon Hunter.',
    icon: '⚔️',
  },
  {
    year: 'Present Day',
    title: 'The Resonating Dawn Prophecy',
    category: 'Convergence',
    description:
      'The Twilight Orbs awaken across the Land of Dawn. Champions from Moniyan, Cadia Riverlands, and Eruditio mobilize for the definitive clash against the gathering Abyssal horde.',
    icon: '⚡',
  },
];
