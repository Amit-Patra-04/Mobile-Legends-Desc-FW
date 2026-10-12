// Verified Mobile Legends: Bang Bang Master Hero Canon Dataset (All 132 Champions)
// Generated with verified lore, relationships, abilities, and local high-resolution artwork

export const HEROES = [
  {
    "id": "miya",
    "name": "Miya",
    "title": "Moonlight Archer",
    "role": "Marksman",
    "secondaryRole": "None",
    "speciality": "Reap / Damage",
    "lane": "Gold Lane",
    "faction": "Moon Temple",
    "region": "Azyreus / Moonlit Forest",
    "difficulty": 30,
    "difficultyLabel": "Easy",
    "attributes": {
      "offense": 95,
      "durability": 25,
      "abilityEffects": 45,
      "difficulty": 30
    },
    "winRate": "51.8%",
    "popularity": "Rank S+",
    "image": "/assets/images/miya.jpg",
    "themeColor": "#38bdf8",
    "voiceQuote": "May the Moon Goddess bless our arrows.",
    "loreQuote": "In the sacred silence of the silver woods, no enemy escapes my sight.",
    "lore": "High Priestess of the Moonlit Temple and protector of the Moon Elves. When human shadow forces invaded their sacred forests, Miya took up the Moon Gods bow to rally her people and safeguard their ancient heritage.",
    "relationships": [
      {
        "name": "Estes",
        "role": "Moon Elf King",
        "type": "Sovereign"
      },
      {
        "name": "Alucard",
        "role": "Allied Demon Hunter",
        "type": "Ally"
      },
      {
        "name": "Alice",
        "role": "Blood Demon Invader",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "miya_p",
        "name": "Moon Blessing",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🌙",
        "description": "Basic attacks grant stacking attack speed. At max stacks, summons a moonlight shadow clone to aid in firing."
      },
      {
        "id": "miya_s1",
        "name": "Moon Arrow",
        "type": "Skill 1",
        "cooldown": "9.0s",
        "cost": "60 Mana",
        "icon": "🏹",
        "description": "Splits basic attacks to hit multiple nearby enemies simultaneously for 4s."
      },
      {
        "id": "miya_s2",
        "name": "Arrow of Eclipse",
        "type": "Skill 2",
        "cooldown": "8.0s",
        "cost": "80 Mana",
        "icon": "🌑",
        "description": "Fires an arrow cluster that immobilizes enemies in the center and slows those around it."
      },
      {
        "id": "miya_ult",
        "name": "Hidden Moonlight",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "120 Mana",
        "icon": "✨",
        "description": "Immediately cleanses all debuffs and grants complete concealment and bonus movement speed."
      }
    ],
    "portrait": "/assets/images/heroes/miya.png"
  },
  {
    "id": "balmond",
    "name": "Balmond",
    "title": "Bloody Beast",
    "role": "Fighter",
    "secondaryRole": "Tank",
    "speciality": "Damage / Regen",
    "lane": "EXP / Jungle",
    "faction": "Orc Tribe",
    "region": "Barren Lands",
    "difficulty": 25,
    "difficultyLabel": "Easy",
    "attributes": {
      "offense": 85,
      "durability": 80,
      "abilityEffects": 50,
      "difficulty": 25
    },
    "winRate": "50.9%",
    "popularity": "Rank A",
    "image": "/assets/images/balmond.jpg",
    "themeColor": "#ef4444",
    "voiceQuote": "My axe is thirsty for blood!",
    "loreQuote": "The orc horde shall never kneel before chains.",
    "lore": "Leader of the nomadic Orc clans in the desolate Barren Lands. Bound into servitude by the Blood Demons, Balmond rebelled with fury, cleaving through legions of demonic oppressors to win freedom for his kin.",
    "relationships": [
      {
        "name": "Alice",
        "role": "Blood Demon Tyrant",
        "type": "Nemesis"
      },
      {
        "name": "Thamuz",
        "role": "Lord of Lava",
        "type": "Rival"
      }
    ],
    "abilities": [
      {
        "id": "bal_p",
        "name": "Bloodthirst",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🩸",
        "description": "Recovers HP upon eliminating minions, creeps, and enemy champions."
      },
      {
        "id": "bal_s1",
        "name": "Soul Lock",
        "type": "Skill 1",
        "cooldown": "8.0s",
        "cost": "No Cost",
        "icon": "💨",
        "description": "Charges forward with his battle axe, dealing damage and slowing targets."
      },
      {
        "id": "bal_s2",
        "name": "Cyclone Sweep",
        "type": "Skill 2",
        "cooldown": "6.0s",
        "cost": "No Cost",
        "icon": "🌀",
        "description": "Spins his heavy battle axe continuously, dealing increasing physical damage per spin."
      },
      {
        "id": "bal_ult",
        "name": "Lethal Counter",
        "type": "Ultimate",
        "cooldown": "32.0s",
        "cost": "No Cost",
        "icon": "🪓",
        "description": "Slams his gigantic axe into the earth, executing foes based on their missing HP."
      }
    ],
    "portrait": "/assets/images/heroes/balmond.png"
  },
  {
    "id": "saber",
    "name": "Saber",
    "title": "Wandering Sword",
    "role": "Assassin",
    "secondaryRole": "None",
    "speciality": "Charge / Burst",
    "lane": "Jungle / Roam",
    "faction": "Laboratory 1718 Exile",
    "region": "Eruditio Outskirts",
    "difficulty": 35,
    "difficultyLabel": "Easy",
    "attributes": {
      "offense": 96,
      "durability": 30,
      "abilityEffects": 70,
      "difficulty": 35
    },
    "winRate": "51.4%",
    "popularity": "Rank S",
    "image": "/assets/images/saber.jpg",
    "themeColor": "#3b82f6",
    "voiceQuote": "Kill at all costs.",
    "loreQuote": "A cybernetic body cannot erase the soul of the blade.",
    "lore": "A master swordsman genetically augmented and transformed into a cybernetic cyborg assassin by Laboratory 1718. Breaking free from mind control, Saber roams the Land of Dawn seeking worthy blade masters.",
    "relationships": [
      {
        "name": "Alpha",
        "role": "Fellow Cybernetic Cyborg",
        "type": "Rival"
      },
      {
        "name": "Dr. Rooney",
        "role": "Eruditio Scientist",
        "type": "Observer"
      }
    ],
    "abilities": [
      {
        "id": "sbr_p",
        "name": "Enemy's Bane",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "⚔️",
        "description": "Attacks reduce the physical defense of target champions."
      },
      {
        "id": "sbr_s1",
        "name": "Orbiting Swords",
        "type": "Skill 1",
        "cooldown": "8.0s",
        "cost": "75 Mana",
        "icon": "🗡️",
        "description": "Releases 5 flying swords that orbit around him and fly toward basic attack targets."
      },
      {
        "id": "sbr_s2",
        "name": "Charge",
        "type": "Skill 2",
        "cooldown": "12.0s",
        "cost": "70 Mana",
        "icon": "⚡",
        "description": "Dashes forward, empowering his next basic attack."
      },
      {
        "id": "sbr_ult",
        "name": "Triple Sweep",
        "type": "Ultimate",
        "cooldown": "44.0s",
        "cost": "100 Mana",
        "icon": "💥",
        "description": "Locks onto target enemy, knocking them into the air and delivering 3 devastating slashes."
      }
    ],
    "portrait": "/assets/images/heroes/saber.png"
  },
  {
    "id": "alice",
    "name": "Alice",
    "title": "Queen of Blood",
    "role": "Mage",
    "secondaryRole": "Tank",
    "speciality": "Regen / Charge",
    "lane": "Mid / EXP",
    "faction": "Lords of the Abyss",
    "region": "Barren Lands",
    "difficulty": 65,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 80,
      "durability": 88,
      "abilityEffects": 85,
      "difficulty": 65
    },
    "winRate": "52.1%",
    "popularity": "Rank A",
    "image": "/assets/images/alice.jpg",
    "themeColor": "#9333ea",
    "voiceQuote": "Watch your back!",
    "loreQuote": "Eternal youth requires the sweetest blood of mortals.",
    "lore": "The sinister matriarch of the Blood Demon Clan. Deep within the volcanic abyssal chasms, Alice weaves manipulative dark curses, enslaving orcs and mortal kingdoms to feast on life essence.",
    "relationships": [
      {
        "name": "Dyrroth",
        "role": "Corrupted Prince of Moniyan",
        "type": "Protégé"
      },
      {
        "name": "Thamuz",
        "role": "Abyssal Warlord",
        "type": "Ally"
      },
      {
        "name": "Alucard",
        "role": "Sworn Nemesis",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "alc_p",
        "name": "Blood Ancestry",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🍷",
        "description": "Absorbs blood orbs dropped by dying minions to permanently increase max HP and Mana."
      },
      {
        "id": "alc_s1",
        "name": "Flowing Blood",
        "type": "Skill 1",
        "cooldown": "6.0s",
        "cost": "50 Mana",
        "icon": "🩸",
        "description": "Fires a sphere of blood forward. Can reactivate to teleport to the sphere’s location."
      },
      {
        "id": "alc_s2",
        "name": "Blood Awe",
        "type": "Skill 2",
        "cooldown": "7.0s",
        "cost": "55 Mana",
        "icon": "🦇",
        "description": "Unleashes dark blood energy, immobilizing nearby enemies for 1.2s."
      },
      {
        "id": "alc_ult",
        "name": "Blood Ode",
        "type": "Ultimate",
        "cooldown": "2.0s",
        "cost": "Continuous",
        "icon": "😈",
        "description": "Enters blood-draining state, continuously leeching HP from all surrounding enemies."
      }
    ],
    "portrait": "/assets/images/heroes/alice.png"
  },
  {
    "id": "nana",
    "name": "Nana",
    "title": "Sweet Leonin",
    "role": "Mage",
    "secondaryRole": "Support",
    "speciality": "Poke / Crowd Control",
    "lane": "Mid Lane",
    "faction": "Leonin Forest Sanctuary",
    "region": "Moonlit Forest",
    "difficulty": 30,
    "difficultyLabel": "Easy",
    "attributes": {
      "offense": 82,
      "durability": 35,
      "abilityEffects": 92,
      "difficulty": 30
    },
    "winRate": "52.0%",
    "popularity": "Rank S+",
    "image": "/assets/images/nana.jpg",
    "themeColor": "#f43f5e",
    "voiceQuote": "Do you want to be friends with Nana?",
    "loreQuote": "Magic is fun, but transforming grumps into little critters is even better!",
    "lore": "A gifted young Leonin with innate spirit magic. Accompanied by her magical pet Molina, Nana was born with unpredictable bursts of mystic force, journeying into the Land of Dawn with innocent curiosity.",
    "relationships": [
      {
        "name": "Molina",
        "role": "Spirit Guardian Companion",
        "type": "Bond"
      },
      {
        "name": "Miya",
        "role": "Forest Elder Protector",
        "type": "Mentor"
      },
      {
        "name": "Harith",
        "role": "Fellow Leonin Scholar",
        "type": "Friend"
      }
    ],
    "abilities": [
      {
        "id": "na_p",
        "name": "Molina's Blessing",
        "type": "Passive",
        "cooldown": "150s",
        "cost": "No Cost",
        "icon": "🐾",
        "description": "Upon taking fatal damage, transforms into untargetable Molina form with bonus speed."
      },
      {
        "id": "na_s1",
        "name": "Magic Boomerang",
        "type": "Skill 1",
        "cooldown": "5.5s",
        "cost": "65 Mana",
        "icon": "🪃",
        "description": "Throws a boomerang that pierces enemies on forward and return paths."
      },
      {
        "id": "na_s2",
        "name": "Molina Smooch",
        "type": "Skill 2",
        "cooldown": "14.5s",
        "cost": "80 Mana",
        "icon": "🐱",
        "description": "Summons Molina to chase down nearest enemy champion and transform them into a critter."
      },
      {
        "id": "na_ult",
        "name": "Molina Blitz",
        "type": "Ultimate",
        "cooldown": "36.0s",
        "cost": "135 Mana",
        "icon": "🌸",
        "description": "Summons 3 giant spirit paws slamming down in sequence, stunning struck enemies."
      }
    ],
    "portrait": "/assets/images/heroes/nana.png"
  },
  {
    "id": "tigreal",
    "name": "Tigreal",
    "title": "Warrior of Dawn",
    "role": "Tank",
    "secondaryRole": "Support",
    "speciality": "Crowd Control / Initiator",
    "lane": "Roam",
    "faction": "Imperial Knights of Dawn",
    "region": "Moniyan Empire",
    "difficulty": 35,
    "difficultyLabel": "Easy",
    "attributes": {
      "offense": 50,
      "durability": 98,
      "abilityEffects": 82,
      "difficulty": 35
    },
    "winRate": "53.8%",
    "popularity": "Rank S+",
    "image": "/assets/images/tigreal.jpg",
    "themeColor": "#f59e0b",
    "voiceQuote": "A real warrior never hides in a bush! For Moniyan!",
    "loreQuote": "I will remain the unyielding wall upon which chaos breaks.",
    "lore": "Grand Commander of the Imperial Knights, Tigreal has stood as the shield of the Moniyan Empire across multiple Abyssal crusades. With sacred armor and towering lion shield, he anchors the frontlines.",
    "relationships": [
      {
        "name": "Fanny",
        "role": "Younger Sister & Scout",
        "type": "Family"
      },
      {
        "name": "Alucard",
        "role": "Former Knight Cadet",
        "type": "Ally"
      },
      {
        "name": "Silvanna",
        "role": "Crown Princess",
        "type": "Sovereign"
      }
    ],
    "abilities": [
      {
        "id": "tig_p",
        "name": "Fearless",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🛡️",
        "description": "Gains blessing stacks on attacks or skill hits; at 4 stacks, immunizes next basic attack."
      },
      {
        "id": "tig_s1",
        "name": "Attack Wave",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "45 Mana",
        "icon": "🌊",
        "description": "Fires holy shockwaves slowing enemies."
      },
      {
        "id": "tig_s2",
        "name": "Sacred Hammer",
        "type": "Skill 2",
        "cooldown": "12.5s",
        "cost": "70 Mana",
        "icon": "🔨",
        "description": "Charges forward pushing enemies, then knocks them airborne."
      },
      {
        "id": "tig_ult",
        "name": "Implosion",
        "type": "Ultimate",
        "cooldown": "42.0s",
        "cost": "120 Mana",
        "icon": "🌟",
        "description": "Pulls all surrounding enemies into center vortex and stuns them for 1.5s."
      }
    ],
    "portrait": "/assets/images/heroes/tigreal.png"
  },
  {
    "id": "alucard",
    "name": "Alucard",
    "title": "The Demon Hunter",
    "role": "Fighter",
    "secondaryRole": "Assassin",
    "speciality": "Chase / Lifesteal",
    "lane": "Jungle / EXP",
    "faction": "Monastery of Light",
    "region": "Moniyan Empire",
    "difficulty": 45,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 90,
      "durability": 65,
      "abilityEffects": 55,
      "difficulty": 45
    },
    "winRate": "52.4%",
    "popularity": "Rank S+",
    "image": "/assets/images/alucard.jpg",
    "themeColor": "#ef4444",
    "voiceQuote": "Demons shall bathe in their own blood.",
    "loreQuote": "I will never become their chess piece again.",
    "lore": "Orphaned by the demonic wars and subjected to dark experiments that grafted a demonic claw to his arm, Alucard took the greatsword to exterminate every demon in the Land of Dawn.",
    "relationships": [
      {
        "name": "Tigreal",
        "role": "Commander & Mentor",
        "type": "Ally"
      },
      {
        "name": "Granger",
        "role": "Monastery Brother",
        "type": "Ally"
      },
      {
        "name": "Alice",
        "role": "Queen of the Abyss",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "alu_p",
        "name": "Pursuit",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "⚔️",
        "description": "Dashes to target on basic attack after skill cast with 1.2x damage and lifesteal."
      },
      {
        "id": "alu_s1",
        "name": "Groundsplitter",
        "type": "Skill 1",
        "cooldown": "8.0s",
        "cost": "No Cost",
        "icon": "💥",
        "description": "Leaps forward slamming greatsword into the ground."
      },
      {
        "id": "alu_s2",
        "name": "Whirling Smash",
        "type": "Skill 2",
        "cooldown": "5.0s",
        "cost": "No Cost",
        "icon": "🌀",
        "description": "360-degree blade spin slicing all nearby targets."
      },
      {
        "id": "alu_ult",
        "name": "Fission Wave",
        "type": "Ultimate",
        "cooldown": "30.0s",
        "cost": "No Cost",
        "icon": "⚡",
        "description": "Absorbs energy increasing lifesteal, releasing an immense shockwave slash."
      }
    ],
    "portrait": "/assets/images/heroes/alucard.png"
  },
  {
    "id": "karina",
    "name": "Karina",
    "title": "Shadow Blade",
    "role": "Assassin",
    "secondaryRole": "None",
    "speciality": "Reap / Burst",
    "lane": "Jungle",
    "faction": "Dark Elf Enclave",
    "region": "Shadow Abyss Borderlands",
    "difficulty": 50,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 94,
      "durability": 35,
      "abilityEffects": 85,
      "difficulty": 50
    },
    "winRate": "51.7%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/karina.png",
    "themeColor": "#a855f7",
    "voiceQuote": "There are beautiful things in the world, worth fighting for.",
    "loreQuote": "Twin shadow blades carved through blood to protect my sister.",
    "lore": "A deadly Dark Elf assassin armed with twin curved crescent blades. When her sister Selena was chosen as a sacrifice to the Abyss, Karina broke clan law to rescue her, battling both darkness and kin.",
    "relationships": [
      {
        "name": "Selena",
        "role": "Beloved Younger Sister",
        "type": "Family"
      },
      {
        "name": "Alice",
        "role": "Corruptor of Dark Elves",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "kar_p",
        "name": "Shadow Combo",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🗡️",
        "description": "Third consecutive attack deals bonus true damage equal to percentage of missing HP."
      },
      {
        "id": "kar_s1",
        "name": "Dance of Blades",
        "type": "Skill 1",
        "cooldown": "6.0s",
        "cost": "60 Mana",
        "icon": "🌀",
        "description": "Blocks basic attacks, gaining movement speed and reflecting ranged fire."
      },
      {
        "id": "kar_s2",
        "name": "Dance of Death",
        "type": "Skill 2",
        "cooldown": "4.5s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Spins dual blades dealing magic damage to all surrounding enemies."
      },
      {
        "id": "kar_ult",
        "name": "Shadow Assault",
        "type": "Ultimate",
        "cooldown": "34.0s",
        "cost": "100 Mana",
        "icon": "⚡",
        "description": "Dashes at target enemy; resets cooldown instantly if target dies."
      }
    ],
    "portrait": "/assets/images/heroes/karina.png"
  },
  {
    "id": "akai",
    "name": "Akai",
    "title": "Panda Warrior",
    "role": "Tank",
    "secondaryRole": "Fighter",
    "speciality": "Control / Crowd Disruption",
    "lane": "Roam / Jungle",
    "faction": "Bamboo Forest Village",
    "region": "Cadia Riverlands",
    "difficulty": 45,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 60,
      "durability": 95,
      "abilityEffects": 80,
      "difficulty": 45
    },
    "winRate": "51.3%",
    "popularity": "Rank A",
    "image": "/assets/images/heroes/akai.png",
    "themeColor": "#10b981",
    "voiceQuote": "Let's roll! Nothing can stop my bamboo pole!",
    "loreQuote": "A clumsy panda can still become the greatest martial guardian.",
    "lore": "A chubby, good-natured panda living in the Eastern bamboo groves. Training under the frog master Po, Akai turned his clumsy rolls into an invincible bamboo spinning technique that knocks back evil.",
    "relationships": [
      {
        "name": "Sun",
        "role": "Monkey King Comrade",
        "type": "Ally"
      },
      {
        "name": "Chou",
        "role": "Fellow Cadia Martial Artist",
        "type": "Friend"
      }
    ],
    "abilities": [
      {
        "id": "ak_p",
        "name": "Tai Chi",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "☯️",
        "description": "Gains a protective shield every time a skill is cast."
      },
      {
        "id": "ak_s1",
        "name": "Headbutt",
        "type": "Skill 1",
        "cooldown": "11.0s",
        "cost": "70 Mana",
        "icon": "💨",
        "description": "Charges forward headbutting the first enemy hit."
      },
      {
        "id": "ak_s2",
        "name": "Body Slam",
        "type": "Skill 2",
        "cooldown": "7.5s",
        "cost": "60 Mana",
        "icon": "💥",
        "description": "Slams his bamboo rod into the ground, marking enemies with frog seals."
      },
      {
        "id": "ak_ult",
        "name": "Heavy Spin",
        "type": "Ultimate",
        "cooldown": "40.0s",
        "cost": "120 Mana",
        "icon": "🌪️",
        "description": "Spins continuously for 4s, knocking back and pinning enemies against terrain."
      }
    ],
    "portrait": "/assets/images/heroes/akai.png"
  },
  {
    "id": "franco",
    "name": "Franco",
    "title": "Frozen Warrior",
    "role": "Tank",
    "secondaryRole": "Support",
    "speciality": "Initiator / Hook Control",
    "lane": "Roam",
    "faction": "Norse Sea Marauders",
    "region": "Northern Vale",
    "difficulty": 60,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 55,
      "durability": 90,
      "abilityEffects": 88,
      "difficulty": 60
    },
    "winRate": "51.9%",
    "popularity": "Rank S+",
    "image": "/assets/images/franco.jpg",
    "themeColor": "#0284c7",
    "voiceQuote": "One shot, one kill! Come to daddy!",
    "loreQuote": "The icy depths fear nothing, but pirates fear my hook.",
    "lore": "A hearty Norse warrior hailing from the frozen seas of Northern Vale. Wielding an iron grappling hook and heavy frost hammer, Franco hunts pirate raiders like Bane across glacial fjords.",
    "relationships": [
      {
        "name": "Bane",
        "role": "Dread Pirate Rival",
        "type": "Nemesis"
      },
      {
        "name": "Freya",
        "role": "Valkyrie of the North",
        "type": "Ally"
      }
    ],
    "abilities": [
      {
        "id": "fr_p",
        "name": "Wasteland Force",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "❄️",
        "description": "Regenerates HP and gains bonus movement speed when out of combat."
      },
      {
        "id": "fr_s1",
        "name": "Iron Hook",
        "type": "Skill 1",
        "cooldown": "15.0s",
        "cost": "105 Mana",
        "icon": "🪝",
        "description": "Fires his iron hook forward, pulling the first enemy struck straight to Franco."
      },
      {
        "id": "fr_s2",
        "name": "Fury Shock",
        "type": "Skill 2",
        "cooldown": "7.0s",
        "cost": "40 Mana",
        "icon": "⚡",
        "description": "Slams the earth with his frost hammer, dealing physical damage and slowing enemies."
      },
      {
        "id": "fr_ult",
        "name": "Bloody Hunt",
        "type": "Ultimate",
        "cooldown": "45.0s",
        "cost": "110 Mana",
        "icon": "🔨",
        "description": "Suppresses target enemy hero for 1.8s, hacking them repeatedly."
      }
    ],
    "portrait": "/assets/images/heroes/franco.png"
  },
  {
    "id": "fanny",
    "name": "Fanny",
    "title": "Blade Dancer",
    "role": "Assassin",
    "secondaryRole": "Fighter",
    "speciality": "Chase / Aerial Mobility",
    "lane": "Jungle",
    "faction": "Imperial Vanguard",
    "region": "Moniyan Empire",
    "difficulty": 98,
    "difficultyLabel": "Extreme",
    "attributes": {
      "offense": 92,
      "durability": 40,
      "abilityEffects": 75,
      "difficulty": 98
    },
    "winRate": "50.6%",
    "popularity": "Rank S",
    "image": "/assets/images/fanny.jpg",
    "themeColor": "#0284c7",
    "voiceQuote": "Sir, whats your command? Flight is pure freedom.",
    "loreQuote": "Never cage an eagle that dreams of the canyon skies.",
    "lore": "Younger sister of Tigreal who engineered steam-tensioned grappling cables. Soaring between fortress walls at supersonic speeds, she cuts down enemies before they can react.",
    "relationships": [
      {
        "name": "Tigreal",
        "role": "Grand Commander & Brother",
        "type": "Family"
      },
      {
        "name": "Claude",
        "role": "Master Thief",
        "type": "Rival"
      }
    ],
    "abilities": [
      {
        "id": "fa_p",
        "name": "Air Superiority",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🦅",
        "description": "Damage increases up to 20% while flying based on flight momentum."
      },
      {
        "id": "fa_s1",
        "name": "Tornado Strike",
        "type": "Skill 1",
        "cooldown": "3.5s",
        "cost": "25 Energy",
        "icon": "🌪️",
        "description": "Spins blades slicing nearby enemies."
      },
      {
        "id": "fa_s2",
        "name": "Steel Cable",
        "type": "Skill 2",
        "cooldown": "No CD",
        "cost": "18 Energy",
        "icon": "🪝",
        "description": "Fires cables to terrain; flying triggers automatic Tornado Strikes."
      },
      {
        "id": "fa_ult",
        "name": "Cut Throat",
        "type": "Ultimate",
        "cooldown": "28.0s",
        "cost": "30 Energy",
        "icon": "🗡️",
        "description": "Aerial execution dive dealing massive burst damage."
      }
    ],
    "portrait": "/assets/images/heroes/fanny.png"
  },
  {
    "id": "layla",
    "name": "Layla",
    "title": "Energy Gunner",
    "role": "Marksman",
    "secondaryRole": "Sniper",
    "speciality": "Reap / Long Range",
    "lane": "Gold Lane",
    "faction": "Eruditio Vanguard",
    "region": "Eruditio",
    "difficulty": 30,
    "difficultyLabel": "Easy",
    "attributes": {
      "offense": 98,
      "durability": 28,
      "abilityEffects": 70,
      "difficulty": 30
    },
    "winRate": "51.1%",
    "popularity": "Rank S+",
    "image": "/assets/images/layla.jpg",
    "themeColor": "#06b6d4",
    "voiceQuote": "Keep it up, until youre as brilliant as me!",
    "loreQuote": "Malefic energy in the hands of justice is a beacon of hope.",
    "lore": "Raised in Eruditio, Layla wields the experimental Malefic Gun created by her father, firing colossal starlight beams to defend scholars from evil.",
    "relationships": [
      {
        "name": "Beatrix",
        "role": "Eruditio Weapons Comrade",
        "type": "Ally"
      },
      {
        "name": "Dr. Rooney",
        "role": "Inventor Mentor",
        "type": "Mentor"
      }
    ],
    "abilities": [
      {
        "id": "la_p",
        "name": "Malefic Gun",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🎯",
        "description": "Basic attacks deal increasing damage based on distance up to 135%."
      },
      {
        "id": "la_s1",
        "name": "Malefic Bomb",
        "type": "Skill 1",
        "cooldown": "6.0s",
        "cost": "40 Mana",
        "icon": "💣",
        "description": "Fires energy bomb granting movement speed."
      },
      {
        "id": "la_s2",
        "name": "Void Projectile",
        "type": "Skill 2",
        "cooldown": "7.5s",
        "cost": "65 Mana",
        "icon": "🌐",
        "description": "Detonating orb marking and slowing foes."
      },
      {
        "id": "la_ult",
        "name": "Destruction Rush",
        "type": "Ultimate",
        "cooldown": "35.0s",
        "cost": "130 Mana",
        "icon": "⚡",
        "description": "Colossal laser beam fired across the entire battlefield lane."
      }
    ],
    "portrait": "/assets/images/heroes/layla.png"
  },
  {
    "id": "zilong",
    "name": "Zilong",
    "title": "Son of the Dragon",
    "role": "Fighter",
    "secondaryRole": "Assassin",
    "speciality": "Chase / Damage / Push",
    "lane": "EXP Lane / Jungle",
    "faction": "Disciples of the Great Dragon",
    "region": "Cadia Riverlands",
    "difficulty": 40,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 92,
      "durability": 60,
      "abilityEffects": 50,
      "difficulty": 40
    },
    "winRate": "51.5%",
    "popularity": "Rank S",
    "image": "/assets/images/zilong.jpg",
    "themeColor": "#eab308",
    "voiceQuote": "Heroes never fade! Dragon spear, pierce the sky!",
    "loreQuote": "Where the dragon spear strikes, darkness shall yield to dawn.",
    "lore": "Adopted and trained by the Great Dragon of Cadia Riverlands, Zilong swore an oath to defend peace with his fiery dragon spear.",
    "relationships": [
      {
        "name": "Chou",
        "role": "Cadia Martial Brother",
        "type": "Ally"
      },
      {
        "name": "Ling",
        "role": "Fierce Dragon Rival",
        "type": "Rival"
      }
    ],
    "abilities": [
      {
        "id": "zi_p",
        "name": "Dragon Flurry",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🐉",
        "description": "Multi-thrust attack every 3 hits healing HP."
      },
      {
        "id": "zi_s1",
        "name": "Spear Flip",
        "type": "Skill 1",
        "cooldown": "9.0s",
        "cost": "80 Mana",
        "icon": "🔄",
        "description": "Flips enemy over head and reduces defense."
      },
      {
        "id": "zi_s2",
        "name": "Spear Strike",
        "type": "Skill 2",
        "cooldown": "5.0s",
        "cost": "40 Mana",
        "icon": "⚡",
        "description": "Charges enemy; resets on kill."
      },
      {
        "id": "zi_ult",
        "name": "Supreme Warrior",
        "type": "Ultimate",
        "cooldown": "35.0s",
        "cost": "120 Mana",
        "icon": "🔥",
        "description": "Ignites speed and immunity to slows."
      }
    ],
    "portrait": "/assets/images/heroes/zilong.png"
  },
  {
    "id": "kagura",
    "name": "Kagura",
    "title": "Onmyouji Master",
    "role": "Mage",
    "secondaryRole": "Support",
    "speciality": "Poke / Crowd Control",
    "lane": "Mid Lane",
    "faction": "Cadia Onmyouji Shrine",
    "region": "Cadia Riverlands",
    "difficulty": 80,
    "difficultyLabel": "High",
    "attributes": {
      "offense": 84,
      "durability": 42,
      "abilityEffects": 96,
      "difficulty": 80
    },
    "winRate": "53.1%",
    "popularity": "Rank S",
    "image": "/assets/images/kagura.jpg",
    "themeColor": "#ec4899",
    "voiceQuote": "A thought can cross mountains and rivers.",
    "loreQuote": "In the gentle rhythm of cherry blossom rain, balance will be found.",
    "lore": "Grandmaster of Yin-Yang Onmyouji arts and master of the Seimei Umbrella, traveling into the mortal realm to preserve cosmic balance.",
    "relationships": [
      {
        "name": "Hayabusa",
        "role": "Shadow Ninja & Companion",
        "type": "Bond"
      },
      {
        "name": "Hanabi",
        "role": "Scarlet Shadow Rival",
        "type": "Rival"
      }
    ],
    "abilities": [
      {
        "id": "ka_p",
        "name": "Yin Yang Gathering",
        "type": "Passive",
        "cooldown": "4.5s",
        "cost": "No Cost",
        "icon": "🌸",
        "description": "Gains shield and stuns nearby foes when reclaiming umbrella."
      },
      {
        "id": "ka_s1",
        "name": "Seimei Umbrella Open",
        "type": "Skill 1",
        "cooldown": "5.0s",
        "cost": "60 Mana",
        "icon": "☂️",
        "description": "Hurls umbrella to target location slowing foes."
      },
      {
        "id": "ka_s2",
        "name": "Rasho Umbrella Flee",
        "type": "Skill 2",
        "cooldown": "12.0s",
        "cost": "80 Mana",
        "icon": "💧",
        "description": "Cleanses CC and teleports."
      },
      {
        "id": "ka_ult",
        "name": "Yin Yang Overturn",
        "type": "Ultimate",
        "cooldown": "35.0s",
        "cost": "100 Mana",
        "icon": "☯️",
        "description": "Vortex pulling tethered enemies inward."
      }
    ],
    "portrait": "/assets/images/heroes/kagura.png"
  },
  {
    "id": "chou",
    "name": "Chou",
    "title": "Kung Fu Boy",
    "role": "Fighter",
    "secondaryRole": "Tank",
    "speciality": "Control / Chase",
    "lane": "EXP / Roam",
    "faction": "Dragon Martial Sanctuary",
    "region": "Cadia Riverlands",
    "difficulty": 70,
    "difficultyLabel": "High",
    "attributes": {
      "offense": 82,
      "durability": 75,
      "abilityEffects": 78,
      "difficulty": 70
    },
    "winRate": "52.0%",
    "popularity": "Rank S+",
    "image": "/assets/images/chou.jpg",
    "themeColor": "#eab308",
    "voiceQuote": "Wipe out all evil with a single kick!",
    "loreQuote": "The dragon within awakens only for the righteous.",
    "lore": "Slum martial artist who rescued a dying master and inherited the secret dragon fist discipline to defend the vulnerable.",
    "relationships": [
      {
        "name": "Lancelot",
        "role": "Sparring Companion",
        "type": "Rival"
      },
      {
        "name": "Bruno",
        "role": "Vanguard Athlete",
        "type": "Ally"
      }
    ],
    "abilities": [
      {
        "id": "ch_p",
        "name": "Only Fast",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "👊",
        "description": "Empowered kick every 8 yards moved."
      },
      {
        "id": "ch_s1",
        "name": "Jeet Kune Do",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "No Cost",
        "icon": "🥋",
        "description": "3-hit punch sequence with airborne knockup."
      },
      {
        "id": "ch_s2",
        "name": "Shunpo",
        "type": "Skill 2",
        "cooldown": "5.0s",
        "cost": "No Cost",
        "icon": "⚡",
        "description": "Dash granting CC immunity and shield."
      },
      {
        "id": "ch_ult",
        "name": "The Way of Dragon",
        "type": "Ultimate",
        "cooldown": "34.0s",
        "cost": "No Cost",
        "icon": "🐉",
        "description": "Roundhouse dragon kick followed by aerial combo."
      }
    ],
    "portrait": "/assets/images/heroes/chou.png"
  },
  {
    "id": "gusion",
    "name": "Gusion",
    "title": "Holy Blade",
    "role": "Assassin",
    "secondaryRole": "Mage",
    "speciality": "Burst / Mobility",
    "lane": "Mid / Jungle",
    "faction": "House Paxley",
    "region": "Moniyan Empire",
    "difficulty": 85,
    "difficultyLabel": "High",
    "attributes": {
      "offense": 88,
      "durability": 35,
      "abilityEffects": 95,
      "difficulty": 85
    },
    "winRate": "51.8%",
    "popularity": "Rank S",
    "image": "/assets/images/gusion.jpg",
    "themeColor": "#a855f7",
    "voiceQuote": "The perfect combination of might and magic.",
    "loreQuote": "Magic is meant to carve one’s own destiny, not obey rituals.",
    "lore": "Fourth son of House Paxley who rebelled against ceremonial magic, crafting an art of blinding daggers and lightning blinks.",
    "relationships": [
      {
        "name": "Aamon",
        "role": "Elder Brother & Duke",
        "type": "Complex"
      },
      {
        "name": "Lesley",
        "role": "Vanguard Sharpshooter",
        "type": "Bond"
      }
    ],
    "abilities": [
      {
        "id": "gu_p",
        "name": "Dagger Specialist",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🗡️",
        "description": "Rune stacks heal HP on empowered basic attack."
      },
      {
        "id": "gu_s1",
        "name": "Sword Spike",
        "type": "Skill 1",
        "cooldown": "6.0s",
        "cost": "50 Mana",
        "icon": "🎯",
        "description": "Throws dagger; blinks behind tagged target."
      },
      {
        "id": "gu_s2",
        "name": "Shadowblade Slaughter",
        "type": "Skill 2",
        "cooldown": "6.0s",
        "cost": "65 Mana",
        "icon": "✨",
        "description": "Hurls 5 daggers in fan shape and recalls them."
      },
      {
        "id": "gu_ult",
        "name": "Incandescence",
        "type": "Ultimate",
        "cooldown": "24.0s",
        "cost": "100 Mana",
        "icon": "🌌",
        "description": "Dashes forward, resetting all dagger cooldowns."
      }
    ],
    "portrait": "/assets/images/heroes/gusion.png"
  },
  {
    "id": "hayabusa",
    "name": "Hayabusa",
    "title": "Crimson Shadow",
    "role": "Assassin",
    "secondaryRole": "Ninja",
    "speciality": "Chase / Burst / Clones",
    "lane": "Jungle",
    "faction": "Shadow Sect of Iga",
    "region": "Cadia Riverlands",
    "difficulty": 90,
    "difficultyLabel": "High",
    "attributes": {
      "offense": 95,
      "durability": 35,
      "abilityEffects": 88,
      "difficulty": 90
    },
    "winRate": "52.7%",
    "popularity": "Rank S+",
    "image": "/assets/images/hayabusa.jpg",
    "themeColor": "#dc2626",
    "voiceQuote": "Shadows will pierce the moonlight.",
    "loreQuote": "The shadow never betrays its master; it simply waits for the kill.",
    "lore": "Supreme ninja of the Iga clan hunting down traitorous shadow master Hanzo across the Land of Dawn.",
    "relationships": [
      {
        "name": "Kagura",
        "role": "Childhood Companion",
        "type": "Bond"
      },
      {
        "name": "Hanzo",
        "role": "Traitorous Demon Ninja",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "ha_p",
        "name": "Trace of Shadow",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "👤",
        "description": "Shadow Marks increase damage."
      },
      {
        "id": "ha_s1",
        "name": "Phantom Shuriken",
        "type": "Skill 1",
        "cooldown": "4.0s",
        "cost": "30 Energy",
        "icon": "🗡️",
        "description": "Cone shuriken burst restoring energy."
      },
      {
        "id": "ha_s2",
        "name": "Quad Shadow",
        "type": "Skill 2",
        "cooldown": "14.0s",
        "cost": "25 Energy",
        "icon": "👥",
        "description": "Releases 4 shadow clones to teleport between."
      },
      {
        "id": "ha_ult",
        "name": "Shadow Kill",
        "type": "Ultimate",
        "cooldown": "40.0s",
        "cost": "40 Energy",
        "icon": "🌑",
        "description": "Untargetable multi-slash execution."
      }
    ],
    "portrait": "/assets/images/heroes/hayabusa.png"
  },
  {
    "id": "lancelot",
    "name": "Lancelot",
    "title": "Blade of Roses",
    "role": "Assassin",
    "secondaryRole": "Duelist",
    "speciality": "Chase / Burst / Invulnerability",
    "lane": "Jungle",
    "faction": "House Baroque",
    "region": "Moniyan Empire",
    "difficulty": 92,
    "difficultyLabel": "High",
    "attributes": {
      "offense": 94,
      "durability": 36,
      "abilityEffects": 92,
      "difficulty": 92
    },
    "winRate": "52.3%",
    "popularity": "Rank S+",
    "image": "/assets/images/lancelot.jpg",
    "themeColor": "#3b82f6",
    "voiceQuote": "Time to witness handsome! In the name of the rose!",
    "loreQuote": "Artistry in swordsmanship is written between the petals of roses.",
    "lore": "Baroque fencing heir whose life was saved by Princess Odette, pledging his rapier to justice and chivalry.",
    "relationships": [
      {
        "name": "Odette",
        "role": "Swan Lake Princess",
        "type": "Bond"
      },
      {
        "name": "Guinevere",
        "role": "Beloved Younger Sister",
        "type": "Family"
      }
    ],
    "abilities": [
      {
        "id": "la_p",
        "name": "Soul Cutter",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🌹",
        "description": "Dashing increases damage by 7.5% up to 30%."
      },
      {
        "id": "la_s1",
        "name": "Puncture",
        "type": "Skill 1",
        "cooldown": "14.0s",
        "cost": "50 Mana",
        "icon": "💨",
        "description": "Charges applying Sword Marks; resets on new targets."
      },
      {
        "id": "la_s2",
        "name": "Thorned Rose",
        "type": "Skill 2",
        "cooldown": "8.0s",
        "cost": "70 Mana",
        "icon": "⚔️",
        "description": "Triangular invincible sword flourish."
      },
      {
        "id": "la_ult",
        "name": "Phantom Execution",
        "type": "Ultimate",
        "cooldown": "27.0s",
        "cost": "100 Mana",
        "icon": "✨",
        "description": "Invincible execution charge forward."
      }
    ],
    "portrait": "/assets/images/heroes/lancelot.png"
  },
  {
    "id": "granger",
    "name": "Granger",
    "title": "Death Chanter",
    "role": "Marksman",
    "secondaryRole": "Assassin",
    "speciality": "Burst / Reap",
    "lane": "Gold / Jungle",
    "faction": "Monastery of Light",
    "region": "Moniyan Empire",
    "difficulty": 55,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 95,
      "durability": 38,
      "abilityEffects": 70,
      "difficulty": 55
    },
    "winRate": "51.9%",
    "popularity": "Rank S+",
    "image": "/assets/images/granger.jpg",
    "themeColor": "#ef4444",
    "voiceQuote": "Listen to this symphony of destruction.",
    "loreQuote": "A solitary violin echoes best when demons fall silent.",
    "lore": "Silent orphan of the Monastery carrying guns disguised as a violin case, hunting demons with deadly music.",
    "relationships": [
      {
        "name": "Alucard",
        "role": "Demon Hunter Comrade",
        "type": "Ally"
      },
      {
        "name": "Silvanna",
        "role": "Imperial Princess",
        "type": "Ally"
      }
    ],
    "abilities": [
      {
        "id": "gr_p",
        "name": "Capriccio",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🎼",
        "description": "6-bullet chamber; 6th bullet is guaranteed critical."
      },
      {
        "id": "gr_s1",
        "name": "Rhapsody",
        "type": "Skill 1",
        "cooldown": "8.0s",
        "cost": "No Cost",
        "icon": "🔫",
        "description": "Unloads all 6 bullets while moving."
      },
      {
        "id": "gr_s2",
        "name": "Rondo",
        "type": "Skill 2",
        "cooldown": "4.0s",
        "cost": "No Cost",
        "icon": "💨",
        "description": "Dash empowering next 2 basic attacks."
      },
      {
        "id": "gr_ult",
        "name": "Death Sonata",
        "type": "Ultimate",
        "cooldown": "36.0s",
        "cost": "No Cost",
        "icon": "🎻",
        "description": "Fires 3 exploding Super Bullets from cannon."
      }
    ],
    "portrait": "/assets/images/heroes/granger.png"
  },
  {
    "id": "beatrix",
    "name": "Beatrix",
    "title": "Dawnbreak Soldier",
    "role": "Marksman",
    "secondaryRole": "Assassin",
    "speciality": "Arsenal Adaptability",
    "lane": "Gold Lane",
    "faction": "Eruditio Union of Scholars",
    "region": "Eruditio",
    "difficulty": 88,
    "difficultyLabel": "High",
    "attributes": {
      "offense": 96,
      "durability": 32,
      "abilityEffects": 85,
      "difficulty": 88
    },
    "winRate": "51.4%",
    "popularity": "Rank S",
    "image": "/assets/images/beatrix.jpg",
    "themeColor": "#06b6d4",
    "voiceQuote": "My weapons are calibrated to absolute perfection!",
    "loreQuote": "Invention is the bridge between imagination and victory.",
    "lore": "Eruditio engineer wielding four adaptable firearm systems: Renner, Bennett, Wesker, and Nibiru.",
    "relationships": [
      {
        "name": "Layla",
        "role": "Eruditio Sister in Arms",
        "type": "Ally"
      },
      {
        "name": "Dr. Rooney",
        "role": "Chief Inventor Mentor",
        "type": "Mentor"
      }
    ],
    "abilities": [
      {
        "id": "be_p",
        "name": "Mechanical Genius",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "⚙️",
        "description": "Equips 2 of 4 tactical weapons at any time."
      },
      {
        "id": "be_s1",
        "name": "Masterful Gunner",
        "type": "Skill 1",
        "cooldown": "0.6s",
        "cost": "No Cost",
        "icon": "🔄",
        "description": "Swaps between primary and secondary weapon."
      },
      {
        "id": "be_s2",
        "name": "Tactical Reposition",
        "type": "Skill 2",
        "cooldown": "8.0s",
        "cost": "No Cost",
        "icon": "🏃‍♀️",
        "description": "Dashes and reloads weapon."
      },
      {
        "id": "be_ult",
        "name": "Dawnbreak Arsenal",
        "type": "Ultimate",
        "cooldown": "24.0s",
        "cost": "No Cost",
        "icon": "🚀",
        "description": "Unleashes active weapon’s ultimate skill."
      }
    ],
    "portrait": "/assets/images/heroes/beatrix.png"
  },
  {
    "id": "yuzhong",
    "name": "Yu Zhong",
    "title": "Black Dragon",
    "role": "Fighter",
    "secondaryRole": "Mage",
    "speciality": "Damage / Regen / Transform",
    "lane": "EXP Lane",
    "faction": "Disciples of the Great Dragon (Exile)",
    "region": "Cadia Riverlands",
    "difficulty": 75,
    "difficultyLabel": "High",
    "attributes": {
      "offense": 90,
      "durability": 85,
      "abilityEffects": 82,
      "difficulty": 75
    },
    "winRate": "52.6%",
    "popularity": "Rank S+",
    "image": "/assets/images/yuzhong.jpg",
    "themeColor": "#9333ea",
    "voiceQuote": "I would rather betray the world than let the world betray me!",
    "loreQuote": "Only through supreme strength shall the Cadia Riverlands find true order.",
    "lore": "Reincarnation of the primordial Black Dragon who sought the Reverse Scale to awaken draconic supremacy and unify Cadia.",
    "relationships": [
      {
        "name": "Luo Yi",
        "role": "Devoted High Priestess Ally",
        "type": "Ally"
      },
      {
        "name": "Baxia",
        "role": "Former Sworn Martial Brother",
        "type": "Nemesis"
      },
      {
        "name": "Great Dragon",
        "role": "Former Celestial Master",
        "type": "Rival"
      }
    ],
    "abilities": [
      {
        "id": "yz_p",
        "name": "Cursing Touch",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🐉",
        "description": "Sha Residue stacks trigger eruption, healing Yu Zhong."
      },
      {
        "id": "yz_s1",
        "name": "Dragon Tail",
        "type": "Skill 1",
        "cooldown": "5.5s",
        "cost": "50 Sha",
        "icon": "🗡️",
        "description": "Spins cloak dealing AoE edge damage."
      },
      {
        "id": "yz_s2",
        "name": "Soul Grip",
        "type": "Skill 2",
        "cooldown": "12.0s",
        "cost": "60 Sha",
        "icon": "✋",
        "description": "Unleashes dragon soul slowing enemies."
      },
      {
        "id": "yz_ult",
        "name": "Black Dragon Form",
        "type": "Ultimate",
        "cooldown": "65.0s",
        "cost": "No Cost",
        "icon": "🐲",
        "description": "Transforms into giant airborne Black Dragon ignoring terrain."
      }
    ],
    "portrait": "/assets/images/heroes/yuzhong.png"
  },
  {
    "id": "ling",
    "name": "Ling",
    "title": "Cyan Finch",
    "role": "Assassin",
    "secondaryRole": "None",
    "speciality": "Chase / Burst / Wall Jump",
    "lane": "Jungle",
    "faction": "Finch Clan (Cadia Riverlands)",
    "region": "Cadia Riverlands",
    "difficulty": 95,
    "difficultyLabel": "Extreme",
    "attributes": {
      "offense": 96,
      "durability": 32,
      "abilityEffects": 78,
      "difficulty": 95
    },
    "winRate": "52.1%",
    "popularity": "Rank S+",
    "image": "/assets/images/ling.jpg",
    "themeColor": "#06b6d4",
    "voiceQuote": "Only the sky is my limit.",
    "loreQuote": "A solitary finch needs neither praise nor throne.",
    "lore": "Peerless swordsman who mastered the Lightness Skill, leaping effortlessly across fortress walls and mountain peaks.",
    "relationships": [
      {
        "name": "Zilong",
        "role": "Great Dragon Temple Rival",
        "type": "Rival"
      },
      {
        "name": "Great Dragon",
        "role": "Master of the Dragon Peak",
        "type": "Judge"
      }
    ],
    "abilities": [
      {
        "id": "li_p",
        "name": "Cloud Walker",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🪶",
        "description": "Generates Lightness points and high critical chance."
      },
      {
        "id": "li_s1",
        "name": "Finch Poise",
        "type": "Skill 1",
        "cooldown": "2.0s",
        "cost": "35 Lightness",
        "icon": "🧗",
        "description": "Leaps onto walls, traversing terrain."
      },
      {
        "id": "li_s2",
        "name": "Defiant Sword",
        "type": "Skill 2",
        "cooldown": "2.5s",
        "cost": "40 Lightness",
        "icon": "🗡️",
        "description": "Thrusts forward dealing critical damage."
      },
      {
        "id": "li_ult",
        "name": "Tempest of Blades",
        "type": "Ultimate",
        "cooldown": "48.0s",
        "cost": "No Cost",
        "icon": "⚔️",
        "description": "Leaps into air becoming invincible, dropping 4 field swords."
      }
    ],
    "portrait": "/assets/images/heroes/ling.png"
  },
  {
    "id": "claude",
    "name": "Claude",
    "title": "Master Thief",
    "role": "Marksman",
    "secondaryRole": "None",
    "speciality": "Burst / Mobility",
    "lane": "Gold Lane",
    "faction": "Los Pecados Outlaws",
    "region": "Agelta Drylands",
    "difficulty": 80,
    "difficultyLabel": "High",
    "attributes": {
      "offense": 92,
      "durability": 35,
      "abilityEffects": 85,
      "difficulty": 80
    },
    "winRate": "51.8%",
    "popularity": "Rank S",
    "image": "/assets/images/claude.jpg",
    "themeColor": "#f59e0b",
    "voiceQuote": "Hey, Dexter, give me a hand!",
    "loreQuote": "The best treasure is the thrill of taking it.",
    "lore": "The greatest thief in the desert metropolis of Los Pecados. Alongside his clever monkey companion Dexter, Claude steals from ruthless crime bosses.",
    "relationships": [
      {
        "name": "Dexter",
        "role": "Faithful Simian Partner",
        "type": "Bond"
      },
      {
        "name": "Fanny",
        "role": "High-Flying Imperial Rival",
        "type": "Rival"
      }
    ],
    "abilities": [
      {
        "id": "cl_p",
        "name": "Battle Sidekick",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🐒",
        "description": "Dexter attacks alongside Claude on every shot."
      },
      {
        "id": "cl_s1",
        "name": "Art of Thievery",
        "type": "Skill 1",
        "cooldown": "5.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Steals enemy movement and attack speed in a fan shape."
      },
      {
        "id": "cl_s2",
        "name": "Battle Mirror Image",
        "type": "Skill 2",
        "cooldown": "11.0s",
        "cost": "70 Mana",
        "icon": "🪞",
        "description": "Summons mirror hologram; can swap locations with it."
      },
      {
        "id": "cl_ult",
        "name": "Blazing Duet",
        "type": "Ultimate",
        "cooldown": "50.0s",
        "cost": "150 Mana",
        "icon": "🔥",
        "description": "Continuous barrage firing at all nearby targets with bonus shields."
      }
    ],
    "portrait": "/assets/images/heroes/claude.png"
  },
  {
    "id": "lesley",
    "name": "Lesley",
    "title": "Deadly Sniper",
    "role": "Marksman",
    "secondaryRole": "Assassin",
    "speciality": "Reap / True Damage",
    "lane": "Gold Lane",
    "faction": "House Vance / Paxley",
    "region": "Moniyan Empire",
    "difficulty": 40,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 98,
      "durability": 26,
      "abilityEffects": 65,
      "difficulty": 40
    },
    "winRate": "52.3%",
    "popularity": "Rank S+",
    "image": "/assets/images/lesley.jpg",
    "themeColor": "#3b82f6",
    "voiceQuote": "One shot, one kill.",
    "loreQuote": "A bullet unseen carries the purest verdict.",
    "lore": "Daughter of the captain of the Vance family guards. Adopted into the nobility, Lesley protects young Harley and House Vance with her deadly sniper rifle.",
    "relationships": [
      {
        "name": "Harley",
        "role": "Adoptive Younger Brother",
        "type": "Family"
      },
      {
        "name": "Gusion",
        "role": "Paxley Ally / Mysterious Bond",
        "type": "Bond"
      }
    ],
    "abilities": [
      {
        "id": "le_p",
        "name": "Lethal Shot",
        "type": "Passive",
        "cooldown": "5.0s",
        "cost": "No Cost",
        "icon": "🎯",
        "description": "Gains camouflage and converts critical damage to True Damage."
      },
      {
        "id": "le_s1",
        "name": "Master of Camouflage",
        "type": "Skill 1",
        "cooldown": "4.0s",
        "cost": "30 Energy",
        "icon": "👤",
        "description": "Enters camouflage state gaining speed and physical attack."
      },
      {
        "id": "le_s2",
        "name": "Tactical Grenade",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "40 Energy",
        "icon": "💣",
        "description": "Throws grenade knocking enemies back and jumping away."
      },
      {
        "id": "le_ult",
        "name": "Ultimate Snipe",
        "type": "Ultimate",
        "cooldown": "40.0s",
        "cost": "No Cost",
        "icon": "🔭",
        "description": "Locks onto target enemy, firing 4 fatal lethal sniper bullets."
      }
    ],
    "portrait": "/assets/images/heroes/lesley.png"
  },
  {
    "id": "bruno",
    "name": "Bruno",
    "title": "The Protector",
    "role": "Marksman",
    "secondaryRole": "None",
    "speciality": "Reap / Damage",
    "lane": "Gold Lane",
    "faction": "City Defense",
    "region": "Eruditio",
    "difficulty": 53,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 90,
      "durability": 40,
      "abilityEffects": 94,
      "difficulty": 62
    },
    "winRate": "50.5%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/bruno.png",
    "themeColor": "#06b6d4",
    "voiceQuote": "For Eruditio, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Bruno, renowned as The Protector, is a celebrated warrior originating from Eruditio. Sworn to City Defense, their tactical prowess and signature Reap / Damage make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Beatrix",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "bruno_p",
        "name": "Bruno's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Bruno's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "bruno_s1",
        "name": "Bruno's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "bruno_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "bruno_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of The Protector, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/bruno.png"
  },
  {
    "id": "clint",
    "name": "Clint",
    "title": "West Justice",
    "role": "Marksman",
    "secondaryRole": "None",
    "speciality": "Burst / Reap",
    "lane": "Gold Lane",
    "faction": "Sheriffs of the West",
    "region": "Los Pecados",
    "difficulty": 62,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 87,
      "durability": 57,
      "abilityEffects": 89,
      "difficulty": 78
    },
    "winRate": "52.5%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/clint.png",
    "themeColor": "#06b6d4",
    "voiceQuote": "For Los Pecados, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Clint, renowned as West Justice, is a celebrated warrior originating from Los Pecados. Sworn to Sheriffs of the West, their tactical prowess and signature Burst / Reap make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Claude",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "clint_p",
        "name": "Clint's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Clint's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "clint_s1",
        "name": "Clint's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "clint_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "clint_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of West Justice, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/clint.png"
  },
  {
    "id": "rafaela",
    "name": "Rafaela",
    "title": "Wings of Heaven",
    "role": "Support",
    "secondaryRole": "None",
    "speciality": "Regen / Speed",
    "lane": "Roam",
    "faction": "Angels of Light",
    "region": "Celestial Palace",
    "difficulty": 64,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 97,
      "durability": 57,
      "abilityEffects": 76,
      "difficulty": 40
    },
    "winRate": "53.4%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/rafaela.png",
    "themeColor": "#10b981",
    "voiceQuote": "For Celestial Palace, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Rafaela, renowned as Wings of Heaven, is a celebrated warrior originating from Celestial Palace. Sworn to Angels of Light, their tactical prowess and signature Regen / Speed make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Argus",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "rafaela_p",
        "name": "Rafaela's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Rafaela's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "rafaela_s1",
        "name": "Rafaela's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "rafaela_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "rafaela_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Wings of Heaven, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/rafaela.png"
  },
  {
    "id": "eudora",
    "name": "Eudora",
    "title": "Lightning Weaver",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Burst / Control",
    "lane": "Mid Lane",
    "faction": "Academy of Magic",
    "region": "Moniyan Empire",
    "difficulty": 35,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 72,
      "durability": 74,
      "abilityEffects": 65,
      "difficulty": 56
    },
    "winRate": "52.1%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/eudora.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Moniyan Empire, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Eudora, renowned as Lightning Weaver, is a celebrated warrior originating from Moniyan Empire. Sworn to Academy of Magic, their tactical prowess and signature Burst / Control make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Gord",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "eudora_p",
        "name": "Eudora's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Eudora's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "eudora_s1",
        "name": "Eudora's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "eudora_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "eudora_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Lightning Weaver, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/eudora.png"
  },
  {
    "id": "minotaur",
    "name": "Minotaur",
    "title": "Son of Minos",
    "role": "Tank",
    "secondaryRole": "None",
    "speciality": "Crowd Control",
    "lane": "Roam",
    "faction": "Minoan Labyrinth",
    "region": "Agelta Drylands",
    "difficulty": 75,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 88,
      "durability": 95,
      "abilityEffects": 93,
      "difficulty": 57
    },
    "winRate": "51.4%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/minotaur.png",
    "themeColor": "#f59e0b",
    "voiceQuote": "For Agelta Drylands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Minotaur, renowned as Son of Minos, is a celebrated warrior originating from Agelta Drylands. Sworn to Minoan Labyrinth, their tactical prowess and signature Crowd Control make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Aldous",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "minotaur_p",
        "name": "Minotaur's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Minotaur's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "minotaur_s1",
        "name": "Minotaur's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "minotaur_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "minotaur_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Son of Minos, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/minotaur.png"
  },
  {
    "id": "lolita",
    "name": "Lolita",
    "title": "Steel Elf",
    "role": "Support",
    "secondaryRole": "None",
    "speciality": "Guard / Crowd Control",
    "lane": "Roam",
    "faction": "City Defense",
    "region": "Eruditio",
    "difficulty": 56,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 75,
      "durability": 67,
      "abilityEffects": 73,
      "difficulty": 50
    },
    "winRate": "51.6%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/lolita.png",
    "themeColor": "#10b981",
    "voiceQuote": "For Eruditio, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Lolita, renowned as Steel Elf, is a celebrated warrior originating from Eruditio. Sworn to City Defense, their tactical prowess and signature Guard / Crowd Control make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Bruno",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "lolita_p",
        "name": "Lolita's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Lolita's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "lolita_s1",
        "name": "Lolita's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "lolita_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "lolita_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Steel Elf, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/lolita.png"
  },
  {
    "id": "freya",
    "name": "Freya",
    "title": "Valkyrie",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Chase / Damage",
    "lane": "EXP Lane",
    "faction": "Valkyrie Wardens",
    "region": "Northern Vale",
    "difficulty": 71,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 86,
      "durability": 58,
      "abilityEffects": 83,
      "difficulty": 46
    },
    "winRate": "51.3%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/freya.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Northern Vale, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Freya, renowned as Valkyrie, is a celebrated warrior originating from Northern Vale. Sworn to Valkyrie Wardens, their tactical prowess and signature Chase / Damage make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Franco",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "freya_p",
        "name": "Freya's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Freya's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "freya_s1",
        "name": "Freya's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "freya_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "freya_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Valkyrie, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/freya.png"
  },
  {
    "id": "gord",
    "name": "Gord",
    "title": "Professor of the Mystic",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Poke / Burst",
    "lane": "Mid Lane",
    "faction": "Academy of Magic",
    "region": "Eruditio / Magic Academy",
    "difficulty": 69,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 89,
      "durability": 71,
      "abilityEffects": 66,
      "difficulty": 77
    },
    "winRate": "52.3%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/gord.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Eruditio / Magic Academy, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Gord, renowned as Professor of the Mystic, is a celebrated warrior originating from Eruditio / Magic Academy. Sworn to Academy of Magic, their tactical prowess and signature Poke / Burst make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Valir",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "gord_p",
        "name": "Gord's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Gord's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "gord_s1",
        "name": "Gord's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "gord_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "gord_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Professor of the Mystic, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/gord.png"
  },
  {
    "id": "natalia",
    "name": "Natalia",
    "title": "Brightclaw",
    "role": "Assassin",
    "secondaryRole": "None",
    "speciality": "Chase / Conceal",
    "lane": "Roam / Jungle",
    "faction": "Monastery Shadow Envoys",
    "region": "Moniyan Empire",
    "difficulty": 80,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 81,
      "durability": 52,
      "abilityEffects": 71,
      "difficulty": 57
    },
    "winRate": "50.5%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/natalia.png",
    "themeColor": "#8b5cf6",
    "voiceQuote": "For Moniyan Empire, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Natalia, renowned as Brightclaw, is a celebrated warrior originating from Moniyan Empire. Sworn to Monastery Shadow Envoys, their tactical prowess and signature Chase / Conceal make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Tigreal",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "natalia_p",
        "name": "Natalia's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Natalia's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "natalia_s1",
        "name": "Natalia's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "natalia_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "natalia_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Brightclaw, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/natalia.png"
  },
  {
    "id": "sun",
    "name": "Sun",
    "title": "Monkey King",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Push / Doppelganger",
    "lane": "EXP / Jungle",
    "faction": "Dragon Peak",
    "region": "Cadia Riverlands",
    "difficulty": 42,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 76,
      "durability": 41,
      "abilityEffects": 66,
      "difficulty": 69
    },
    "winRate": "51.8%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/sun.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Cadia Riverlands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Sun, renowned as Monkey King, is a celebrated warrior originating from Cadia Riverlands. Sworn to Dragon Peak, their tactical prowess and signature Push / Doppelganger make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Akai",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "sun_p",
        "name": "Sun's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Sun's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "sun_s1",
        "name": "Sun's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "sun_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "sun_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Monkey King, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/sun.png"
  },
  {
    "id": "alpha",
    "name": "Alpha",
    "title": "Blade of Enmity",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Charge / Damage",
    "lane": "Jungle / EXP",
    "faction": "Lab 1718",
    "region": "Eruditio Outskirts",
    "difficulty": 78,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 84,
      "durability": 44,
      "abilityEffects": 66,
      "difficulty": 65
    },
    "winRate": "51.7%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/alpha.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Eruditio Outskirts, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Alpha, renowned as Blade of Enmity, is a celebrated warrior originating from Eruditio Outskirts. Sworn to Lab 1718, their tactical prowess and signature Charge / Damage make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Saber",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "alpha_p",
        "name": "Alpha's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Alpha's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "alpha_s1",
        "name": "Alpha's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "alpha_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "alpha_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Blade of Enmity, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/alpha.png"
  },
  {
    "id": "ruby",
    "name": "Ruby",
    "title": "Little Red Hood",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Control / Lifesteal",
    "lane": "EXP / Roam",
    "faction": "Hunters of the Snow",
    "region": "Northern Vale",
    "difficulty": 64,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 71,
      "durability": 77,
      "abilityEffects": 65,
      "difficulty": 43
    },
    "winRate": "51.3%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/ruby.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Northern Vale, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Ruby, renowned as Little Red Hood, is a celebrated warrior originating from Northern Vale. Sworn to Hunters of the Snow, their tactical prowess and signature Control / Lifesteal make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Roger",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "ruby_p",
        "name": "Ruby's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Ruby's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "ruby_s1",
        "name": "Ruby's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "ruby_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "ruby_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Little Red Hood, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/ruby.png"
  },
  {
    "id": "yisunshin",
    "name": "Yi Sun-shin",
    "title": "Paenlong Legend",
    "role": "Assassin",
    "secondaryRole": "None",
    "speciality": "Reap / Global",
    "lane": "Jungle",
    "faction": "Dragon Navy",
    "region": "Cadia Riverlands",
    "difficulty": 78,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 84,
      "durability": 53,
      "abilityEffects": 84,
      "difficulty": 61
    },
    "winRate": "50.6%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/yisunshin.png",
    "themeColor": "#8b5cf6",
    "voiceQuote": "For Cadia Riverlands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Yi Sun-shin, renowned as Paenlong Legend, is a celebrated warrior originating from Cadia Riverlands. Sworn to Dragon Navy, their tactical prowess and signature Reap / Global make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Zilong",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "yisunshin_p",
        "name": "Yi Sun-shin's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Yi Sun-shin's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "yisunshin_s1",
        "name": "Yi Sun-shin's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "yisunshin_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "yisunshin_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Paenlong Legend, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/yisunshin.png"
  },
  {
    "id": "moskov",
    "name": "Moskov",
    "title": "Spear of Quiescence",
    "role": "Marksman",
    "secondaryRole": "None",
    "speciality": "Reap / Chase",
    "lane": "Gold Lane",
    "faction": "Wildsand Tribe",
    "region": "Shadow Abyss",
    "difficulty": 42,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 71,
      "durability": 60,
      "abilityEffects": 75,
      "difficulty": 47
    },
    "winRate": "50.7%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/moskov.png",
    "themeColor": "#06b6d4",
    "voiceQuote": "For Shadow Abyss, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Moskov, renowned as Spear of Quiescence, is a celebrated warrior originating from Shadow Abyss. Sworn to Wildsand Tribe, their tactical prowess and signature Reap / Chase make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Khufra",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "moskov_p",
        "name": "Moskov's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Moskov's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "moskov_s1",
        "name": "Moskov's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "moskov_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "moskov_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Spear of Quiescence, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/moskov.png"
  },
  {
    "id": "johnson",
    "name": "Johnson",
    "title": "Mustang",
    "role": "Tank",
    "secondaryRole": "None",
    "speciality": "Support / Crash",
    "lane": "Roam",
    "faction": "City Defense",
    "region": "Eruditio",
    "difficulty": 45,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 89,
      "durability": 95,
      "abilityEffects": 90,
      "difficulty": 78
    },
    "winRate": "50.8%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/johnson.png",
    "themeColor": "#f59e0b",
    "voiceQuote": "For Eruditio, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Johnson, renowned as Mustang, is a celebrated warrior originating from Eruditio. Sworn to City Defense, their tactical prowess and signature Support / Crash make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Layla",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "johnson_p",
        "name": "Johnson's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Johnson's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "johnson_s1",
        "name": "Johnson's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "johnson_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "johnson_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Mustang, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/johnson.png"
  },
  {
    "id": "cyclops",
    "name": "Cyclops",
    "title": "Starsoul Magician",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Poke / Control",
    "lane": "Mid Lane",
    "faction": "Planetary Astronomers",
    "region": "Celestial / Space",
    "difficulty": 78,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 70,
      "durability": 57,
      "abilityEffects": 84,
      "difficulty": 79
    },
    "winRate": "52.6%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/cyclops.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Celestial / Space, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Cyclops, renowned as Starsoul Magician, is a celebrated warrior originating from Celestial / Space. Sworn to Planetary Astronomers, their tactical prowess and signature Poke / Control make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Gord",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "cyclops_p",
        "name": "Cyclops's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Cyclops's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "cyclops_s1",
        "name": "Cyclops's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "cyclops_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "cyclops_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Starsoul Magician, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/cyclops.png"
  },
  {
    "id": "estes",
    "name": "Estes",
    "title": "Moon Elf King",
    "role": "Support",
    "secondaryRole": "None",
    "speciality": "Regen / Guard",
    "lane": "Roam",
    "faction": "Moon Temple",
    "region": "Moonlit Forest",
    "difficulty": 55,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 76,
      "durability": 73,
      "abilityEffects": 85,
      "difficulty": 60
    },
    "winRate": "51.7%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/estes.png",
    "themeColor": "#10b981",
    "voiceQuote": "For Moonlit Forest, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Estes, renowned as Moon Elf King, is a celebrated warrior originating from Moonlit Forest. Sworn to Moon Temple, their tactical prowess and signature Regen / Guard make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Miya",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "estes_p",
        "name": "Estes's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Estes's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "estes_s1",
        "name": "Estes's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "estes_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "estes_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Moon Elf King, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/estes.png"
  },
  {
    "id": "hilda",
    "name": "Hilda",
    "title": "Power of Megalith",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Damage / Regen",
    "lane": "Roam / EXP",
    "faction": "Megalith Clan",
    "region": "Northern Vale",
    "difficulty": 65,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 74,
      "durability": 60,
      "abilityEffects": 79,
      "difficulty": 65
    },
    "winRate": "52.4%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/hilda.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Northern Vale, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Hilda, renowned as Power of Megalith, is a celebrated warrior originating from Northern Vale. Sworn to Megalith Clan, their tactical prowess and signature Damage / Regen make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Franco",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "hilda_p",
        "name": "Hilda's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Hilda's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "hilda_s1",
        "name": "Hilda's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "hilda_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "hilda_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Power of Megalith, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/hilda.png"
  },
  {
    "id": "aurora",
    "name": "Aurora",
    "title": "Frost Maiden",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Crowd Control",
    "lane": "Mid Lane",
    "faction": "Queen of Winter",
    "region": "Northern Vale",
    "difficulty": 63,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 89,
      "durability": 64,
      "abilityEffects": 72,
      "difficulty": 75
    },
    "winRate": "50.3%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/aurora.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Northern Vale, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Aurora, renowned as Frost Maiden, is a celebrated warrior originating from Northern Vale. Sworn to Queen of Winter, their tactical prowess and signature Crowd Control make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Tobias",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "aurora_p",
        "name": "Aurora's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Aurora's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "aurora_s1",
        "name": "Aurora's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "aurora_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "aurora_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Frost Maiden, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/aurora.png"
  },
  {
    "id": "lapulapu",
    "name": "Lapu-Lapu",
    "title": "Great Chief",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Chase / Burst",
    "lane": "EXP Lane",
    "faction": "Island Tribes",
    "region": "Vonetis Islands",
    "difficulty": 78,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 82,
      "durability": 61,
      "abilityEffects": 89,
      "difficulty": 74
    },
    "winRate": "50.5%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/lapulapu.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Vonetis Islands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Lapu-Lapu, renowned as Great Chief, is a celebrated warrior originating from Vonetis Islands. Sworn to Island Tribes, their tactical prowess and signature Chase / Burst make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Kadita",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "lapulapu_p",
        "name": "Lapu-Lapu's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Lapu-Lapu's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "lapulapu_s1",
        "name": "Lapu-Lapu's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "lapulapu_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "lapulapu_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Great Chief, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/lapulapu.png"
  },
  {
    "id": "vexana",
    "name": "Vexana",
    "title": "Shimmer Hope",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Poke / Control",
    "lane": "Mid Lane",
    "faction": "Royal Necrokeep",
    "region": "Necrokeep",
    "difficulty": 35,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 86,
      "durability": 66,
      "abilityEffects": 87,
      "difficulty": 61
    },
    "winRate": "51.8%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/vexana.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Necrokeep, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Vexana, renowned as Shimmer Hope, is a celebrated warrior originating from Necrokeep. Sworn to Royal Necrokeep, their tactical prowess and signature Poke / Control make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Faramis",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "vexana_p",
        "name": "Vexana's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Vexana's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "vexana_s1",
        "name": "Vexana's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "vexana_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "vexana_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Shimmer Hope, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/vexana.png"
  },
  {
    "id": "roger",
    "name": "Roger",
    "title": "Dire Wolf Hunter",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Reap / Transform",
    "lane": "Jungle / Gold",
    "faction": "Hunters",
    "region": "Dark Forest",
    "difficulty": 71,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 96,
      "durability": 60,
      "abilityEffects": 81,
      "difficulty": 58
    },
    "winRate": "51.5%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/roger.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Dark Forest, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Roger, renowned as Dire Wolf Hunter, is a celebrated warrior originating from Dark Forest. Sworn to Hunters, their tactical prowess and signature Reap / Transform make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Ruby",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "roger_p",
        "name": "Roger's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Roger's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "roger_s1",
        "name": "Roger's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "roger_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "roger_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Dire Wolf Hunter, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/roger.png"
  },
  {
    "id": "karrie",
    "name": "Karrie",
    "title": "Lost Star",
    "role": "Marksman",
    "secondaryRole": "None",
    "speciality": "Reap / True Damage",
    "lane": "Gold Lane",
    "faction": "Yason Tribe",
    "region": "Alaghat",
    "difficulty": 41,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 94,
      "durability": 60,
      "abilityEffects": 76,
      "difficulty": 61
    },
    "winRate": "50.4%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/karrie.png",
    "themeColor": "#06b6d4",
    "voiceQuote": "For Alaghat, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Karrie, renowned as Lost Star, is a celebrated warrior originating from Alaghat. Sworn to Yason Tribe, their tactical prowess and signature Reap / True Damage make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Moskov",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "karrie_p",
        "name": "Karrie's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Karrie's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "karrie_s1",
        "name": "Karrie's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "karrie_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "karrie_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Lost Star, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/karrie.png"
  },
  {
    "id": "gatotkaca",
    "name": "Gatotkaca",
    "title": "Iron Bone",
    "role": "Tank",
    "secondaryRole": "None",
    "speciality": "Crowd Control",
    "lane": "Roam / EXP",
    "faction": "Celestial Champions",
    "region": "Arpada (Mythic)",
    "difficulty": 80,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 72,
      "durability": 95,
      "abilityEffects": 75,
      "difficulty": 62
    },
    "winRate": "51.4%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/gatotkaca.png",
    "themeColor": "#f59e0b",
    "voiceQuote": "For Arpada (Mythic), victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Gatotkaca, renowned as Iron Bone, is a celebrated warrior originating from Arpada (Mythic). Sworn to Celestial Champions, their tactical prowess and signature Crowd Control make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Martis",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "gatotkaca_p",
        "name": "Gatotkaca's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Gatotkaca's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "gatotkaca_s1",
        "name": "Gatotkaca's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "gatotkaca_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "gatotkaca_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Iron Bone, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/gatotkaca.png"
  },
  {
    "id": "harley",
    "name": "Harley",
    "title": "Mage Genius",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Burst / Escape",
    "lane": "Jungle / Mid",
    "faction": "House Vance",
    "region": "Moniyan Empire",
    "difficulty": 54,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 86,
      "durability": 44,
      "abilityEffects": 92,
      "difficulty": 69
    },
    "winRate": "51.3%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/harley.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Moniyan Empire, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Harley, renowned as Mage Genius, is a celebrated warrior originating from Moniyan Empire. Sworn to House Vance, their tactical prowess and signature Burst / Escape make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Lesley",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "harley_p",
        "name": "Harley's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Harley's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "harley_s1",
        "name": "Harley's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "harley_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "harley_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Mage Genius, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/harley.png"
  },
  {
    "id": "irithel",
    "name": "Irithel",
    "title": "Jungle Heart",
    "role": "Marksman",
    "secondaryRole": "None",
    "speciality": "Reap / Mobile",
    "lane": "Gold Lane",
    "faction": "Smilodon Riders",
    "region": "Moonlit Forest",
    "difficulty": 74,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 73,
      "durability": 70,
      "abilityEffects": 80,
      "difficulty": 43
    },
    "winRate": "52.8%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/irithel.png",
    "themeColor": "#06b6d4",
    "voiceQuote": "For Moonlit Forest, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Irithel, renowned as Jungle Heart, is a celebrated warrior originating from Moonlit Forest. Sworn to Smilodon Riders, their tactical prowess and signature Reap / Mobile make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Leo",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "irithel_p",
        "name": "Irithel's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Irithel's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "irithel_s1",
        "name": "Irithel's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "irithel_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "irithel_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Jungle Heart, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/irithel.png"
  },
  {
    "id": "grock",
    "name": "Grock",
    "title": "Fortress Titan",
    "role": "Tank",
    "secondaryRole": "None",
    "speciality": "Crowd Control",
    "lane": "Roam / EXP",
    "faction": "Ancient Titans",
    "region": "Celestial Foothills",
    "difficulty": 48,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 87,
      "durability": 95,
      "abilityEffects": 82,
      "difficulty": 56
    },
    "winRate": "53.5%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/grock.png",
    "themeColor": "#f59e0b",
    "voiceQuote": "For Celestial Foothills, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Grock, renowned as Fortress Titan, is a celebrated warrior originating from Celestial Foothills. Sworn to Ancient Titans, their tactical prowess and signature Crowd Control make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Hylos",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "grock_p",
        "name": "Grock's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Grock's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "grock_s1",
        "name": "Grock's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "grock_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "grock_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Fortress Titan, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/grock.png"
  },
  {
    "id": "argus",
    "name": "Argus",
    "title": "Nightstalker",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Charge / Immortality",
    "lane": "EXP Lane",
    "faction": "Fallen Celestials",
    "region": "Abyssal Domain",
    "difficulty": 84,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 71,
      "durability": 51,
      "abilityEffects": 89,
      "difficulty": 43
    },
    "winRate": "53.3%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/argus.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Abyssal Domain, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Argus, renowned as Nightstalker, is a celebrated warrior originating from Abyssal Domain. Sworn to Fallen Celestials, their tactical prowess and signature Charge / Immortality make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Rafaela",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "argus_p",
        "name": "Argus's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Argus's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "argus_s1",
        "name": "Argus's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "argus_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "argus_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Nightstalker, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/argus.png"
  },
  {
    "id": "odette",
    "name": "Odette",
    "title": "Swan Princess",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Burst / Poke",
    "lane": "Mid Lane",
    "faction": "House Regina",
    "region": "Swan Lake",
    "difficulty": 39,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 78,
      "durability": 73,
      "abilityEffects": 93,
      "difficulty": 76
    },
    "winRate": "51.9%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/odette.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Swan Lake, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Odette, renowned as Swan Princess, is a celebrated warrior originating from Swan Lake. Sworn to House Regina, their tactical prowess and signature Burst / Poke make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Lancelot",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "odette_p",
        "name": "Odette's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Odette's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "odette_s1",
        "name": "Odette's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "odette_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "odette_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Swan Princess, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/odette.png"
  },
  {
    "id": "diggie",
    "name": "Diggie",
    "title": "Timekeeper",
    "role": "Support",
    "secondaryRole": "None",
    "speciality": "Guard / CC Immune",
    "lane": "Roam",
    "faction": "Scholars Union",
    "region": "Eruditio",
    "difficulty": 72,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 94,
      "durability": 42,
      "abilityEffects": 82,
      "difficulty": 50
    },
    "winRate": "52.5%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/diggie.png",
    "themeColor": "#10b981",
    "voiceQuote": "For Eruditio, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Diggie, renowned as Timekeeper, is a celebrated warrior originating from Eruditio. Sworn to Scholars Union, their tactical prowess and signature Guard / CC Immune make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Dr. Rooney",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "diggie_p",
        "name": "Diggie's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Diggie's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "diggie_s1",
        "name": "Diggie's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "diggie_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "diggie_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Timekeeper, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/diggie.png"
  },
  {
    "id": "hylos",
    "name": "Hylos",
    "title": "Grand Warden",
    "role": "Tank",
    "secondaryRole": "None",
    "speciality": "Guard / Charge",
    "lane": "Roam",
    "faction": "Centaurs of Light",
    "region": "Misty Mountains",
    "difficulty": 54,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 88,
      "durability": 95,
      "abilityEffects": 80,
      "difficulty": 45
    },
    "winRate": "51.6%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/hylos.png",
    "themeColor": "#f59e0b",
    "voiceQuote": "For Misty Mountains, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Hylos, renowned as Grand Warden, is a celebrated warrior originating from Misty Mountains. Sworn to Centaurs of Light, their tactical prowess and signature Guard / Charge make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Grock",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "hylos_p",
        "name": "Hylos's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Hylos's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "hylos_s1",
        "name": "Hylos's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "hylos_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "hylos_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Grand Warden, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/hylos.png"
  },
  {
    "id": "zhask",
    "name": "Zhask",
    "title": "Planes Dominator",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Push / Summon",
    "lane": "Mid Lane",
    "faction": "Kastiyan Swarm",
    "region": "Kastiya (Alien)",
    "difficulty": 50,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 82,
      "durability": 68,
      "abilityEffects": 70,
      "difficulty": 44
    },
    "winRate": "50.7%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/zhask.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Kastiya (Alien), victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Zhask, renowned as Planes Dominator, is a celebrated warrior originating from Kastiya (Alien). Sworn to Kastiyan Swarm, their tactical prowess and signature Push / Summon make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Yve",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "zhask_p",
        "name": "Zhask's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Zhask's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "zhask_s1",
        "name": "Zhask's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "zhask_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "zhask_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Planes Dominator, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/zhask.png"
  },
  {
    "id": "helcurt",
    "name": "Helcurt",
    "title": "Shadowbringer",
    "role": "Assassin",
    "secondaryRole": "None",
    "speciality": "Silence / Burst",
    "lane": "Jungle",
    "faction": "Shadow Monsters",
    "region": "Abyssal Abyss",
    "difficulty": 73,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 79,
      "durability": 66,
      "abilityEffects": 74,
      "difficulty": 53
    },
    "winRate": "50.8%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/helcurt.png",
    "themeColor": "#8b5cf6",
    "voiceQuote": "For Abyssal Abyss, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Helcurt, renowned as Shadowbringer, is a celebrated warrior originating from Abyssal Abyss. Sworn to Shadow Monsters, their tactical prowess and signature Silence / Burst make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Alice",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "helcurt_p",
        "name": "Helcurt's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Helcurt's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "helcurt_s1",
        "name": "Helcurt's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "helcurt_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "helcurt_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Shadowbringer, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/helcurt.png"
  },
  {
    "id": "pharsa",
    "name": "Pharsa",
    "title": "Wings of Vengeance",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Burst / Long Range",
    "lane": "Mid Lane",
    "faction": "Crow People",
    "region": "Askati Forest",
    "difficulty": 44,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 82,
      "durability": 47,
      "abilityEffects": 71,
      "difficulty": 70
    },
    "winRate": "51.2%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/pharsa.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Askati Forest, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Pharsa, renowned as Wings of Vengeance, is a celebrated warrior originating from Askati Forest. Sworn to Crow People, their tactical prowess and signature Burst / Long Range make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Verri",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "pharsa_p",
        "name": "Pharsa's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Pharsa's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "pharsa_s1",
        "name": "Pharsa's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "pharsa_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "pharsa_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Wings of Vengeance, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/pharsa.png"
  },
  {
    "id": "jawhead",
    "name": "Jawhead",
    "title": "Steel Sweetheart",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Control / Throw",
    "lane": "Roam / EXP",
    "faction": "Lab 1718 Exiles",
    "region": "Eruditio",
    "difficulty": 55,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 96,
      "durability": 42,
      "abilityEffects": 84,
      "difficulty": 57
    },
    "winRate": "52.0%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/jawhead.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Eruditio, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Jawhead, renowned as Steel Sweetheart, is a celebrated warrior originating from Eruditio. Sworn to Lab 1718 Exiles, their tactical prowess and signature Control / Throw make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Alice",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "jawhead_p",
        "name": "Jawhead's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Jawhead's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "jawhead_s1",
        "name": "Jawhead's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "jawhead_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "jawhead_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Steel Sweetheart, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/jawhead.png"
  },
  {
    "id": "angela",
    "name": "Angela",
    "title": "Bunnylove",
    "role": "Support",
    "secondaryRole": "None",
    "speciality": "Guard / Possess",
    "lane": "Roam",
    "faction": "Dr. Baker Creation",
    "region": "Eruditio",
    "difficulty": 37,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 91,
      "durability": 73,
      "abilityEffects": 68,
      "difficulty": 46
    },
    "winRate": "50.2%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/angela.png",
    "themeColor": "#10b981",
    "voiceQuote": "For Eruditio, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Angela, renowned as Bunnylove, is a celebrated warrior originating from Eruditio. Sworn to Dr. Baker Creation, their tactical prowess and signature Guard / Possess make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Dr. Baker",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "angela_p",
        "name": "Angela's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Angela's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "angela_s1",
        "name": "Angela's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "angela_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "angela_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Bunnylove, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/angela.png"
  },
  {
    "id": "valir",
    "name": "Valir",
    "title": "Son of Flames",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Damage / CC",
    "lane": "Mid Lane",
    "faction": "Flame Masters",
    "region": "Volcanic Caldera",
    "difficulty": 84,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 75,
      "durability": 77,
      "abilityEffects": 79,
      "difficulty": 63
    },
    "winRate": "50.9%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/valir.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Volcanic Caldera, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Valir, renowned as Son of Flames, is a celebrated warrior originating from Volcanic Caldera. Sworn to Flame Masters, their tactical prowess and signature Damage / CC make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Vale",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "valir_p",
        "name": "Valir's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Valir's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "valir_s1",
        "name": "Valir's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "valir_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "valir_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Son of Flames, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/valir.png"
  },
  {
    "id": "martis",
    "name": "Martis",
    "title": "Ashura King",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Control / Reap",
    "lane": "Jungle / EXP",
    "faction": "Ashura Clan",
    "region": "Shura World",
    "difficulty": 75,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 96,
      "durability": 66,
      "abilityEffects": 88,
      "difficulty": 74
    },
    "winRate": "50.5%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/martis.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Shura World, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Martis, renowned as Ashura King, is a celebrated warrior originating from Shura World. Sworn to Ashura Clan, their tactical prowess and signature Control / Reap make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Gatotkaca",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "martis_p",
        "name": "Martis's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Martis's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "martis_s1",
        "name": "Martis's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "martis_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "martis_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Ashura King, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/martis.png"
  },
  {
    "id": "uranus",
    "name": "Uranus",
    "title": "Aethereal Defender",
    "role": "Tank",
    "secondaryRole": "None",
    "speciality": "Regen / Sustain",
    "lane": "EXP Lane",
    "faction": "Celestial Sentinels",
    "region": "Celestial Palace",
    "difficulty": 61,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 92,
      "durability": 95,
      "abilityEffects": 82,
      "difficulty": 49
    },
    "winRate": "52.9%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/uranus.png",
    "themeColor": "#f59e0b",
    "voiceQuote": "For Celestial Palace, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Uranus, renowned as Aethereal Defender, is a celebrated warrior originating from Celestial Palace. Sworn to Celestial Sentinels, their tactical prowess and signature Regen / Sustain make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Kaja",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "uranus_p",
        "name": "Uranus's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Uranus's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "uranus_s1",
        "name": "Uranus's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "uranus_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "uranus_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Aethereal Defender, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/uranus.png"
  },
  {
    "id": "hanabi",
    "name": "Hanabi",
    "title": "Scarlet Flower",
    "role": "Marksman",
    "secondaryRole": "None",
    "speciality": "Reap / Bounce",
    "lane": "Gold Lane",
    "faction": "Scarlet Shadow",
    "region": "Cadia Riverlands",
    "difficulty": 78,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 89,
      "durability": 66,
      "abilityEffects": 89,
      "difficulty": 70
    },
    "winRate": "53.3%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/hanabi.png",
    "themeColor": "#06b6d4",
    "voiceQuote": "For Cadia Riverlands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Hanabi, renowned as Scarlet Flower, is a celebrated warrior originating from Cadia Riverlands. Sworn to Scarlet Shadow, their tactical prowess and signature Reap / Bounce make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Hayabusa",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "hanabi_p",
        "name": "Hanabi's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Hanabi's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "hanabi_s1",
        "name": "Hanabi's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "hanabi_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "hanabi_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Scarlet Flower, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/hanabi.png"
  },
  {
    "id": "change",
    "name": "Chang'e",
    "title": "Moon Palace Immortal",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Poke / Continuous",
    "lane": "Mid Lane",
    "faction": "Great Dragon Disciples",
    "region": "Cadia Riverlands",
    "difficulty": 36,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 79,
      "durability": 61,
      "abilityEffects": 93,
      "difficulty": 52
    },
    "winRate": "50.0%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/change.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Cadia Riverlands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Chang'e, renowned as Moon Palace Immortal, is a celebrated warrior originating from Cadia Riverlands. Sworn to Great Dragon Disciples, their tactical prowess and signature Poke / Continuous make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Zilong",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "change_p",
        "name": "Chang'e's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Chang'e's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "change_s1",
        "name": "Chang'e's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "change_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "change_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Moon Palace Immortal, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/change.png"
  },
  {
    "id": "kaja",
    "name": "Kaja",
    "title": "Nazar Commander",
    "role": "Support",
    "secondaryRole": "None",
    "speciality": "Control / Suppress",
    "lane": "Roam",
    "faction": "Nazar Guardians",
    "region": "Celestial Palace",
    "difficulty": 37,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 83,
      "durability": 75,
      "abilityEffects": 76,
      "difficulty": 51
    },
    "winRate": "51.8%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/kaja.png",
    "themeColor": "#10b981",
    "voiceQuote": "For Celestial Palace, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Kaja, renowned as Nazar Commander, is a celebrated warrior originating from Celestial Palace. Sworn to Nazar Guardians, their tactical prowess and signature Control / Suppress make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Uranus",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "kaja_p",
        "name": "Kaja's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Kaja's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "kaja_s1",
        "name": "Kaja's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "kaja_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "kaja_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Nazar Commander, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/kaja.png"
  },
  {
    "id": "selena",
    "name": "Selena",
    "title": "Abyssal Witch",
    "role": "Assassin",
    "secondaryRole": "None",
    "speciality": "Stun / Burst",
    "lane": "Mid / Roam",
    "faction": "Lords of the Abyss",
    "region": "The Abyss",
    "difficulty": 53,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 77,
      "durability": 78,
      "abilityEffects": 82,
      "difficulty": 51
    },
    "winRate": "50.6%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/selena.png",
    "themeColor": "#8b5cf6",
    "voiceQuote": "For The Abyss, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Selena, renowned as Abyssal Witch, is a celebrated warrior originating from The Abyss. Sworn to Lords of the Abyss, their tactical prowess and signature Stun / Burst make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Karina",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "selena_p",
        "name": "Selena's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Selena's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "selena_s1",
        "name": "Selena's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "selena_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "selena_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Abyssal Witch, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/selena.png"
  },
  {
    "id": "aldous",
    "name": "Aldous",
    "title": "Soul Contractor",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Burst / Global",
    "lane": "EXP / Jungle",
    "faction": "Labyrinth Guardians",
    "region": "Agelta Drylands",
    "difficulty": 42,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 77,
      "durability": 78,
      "abilityEffects": 75,
      "difficulty": 51
    },
    "winRate": "52.8%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/aldous.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Agelta Drylands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Aldous, renowned as Soul Contractor, is a celebrated warrior originating from Agelta Drylands. Sworn to Labyrinth Guardians, their tactical prowess and signature Burst / Global make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Minotaur",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "aldous_p",
        "name": "Aldous's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Aldous's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "aldous_s1",
        "name": "Aldous's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "aldous_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "aldous_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Soul Contractor, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/aldous.png"
  },
  {
    "id": "vale",
    "name": "Vale",
    "title": "Windtalker",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Burst / Crowd Control",
    "lane": "Mid Lane",
    "faction": "Wind Masters",
    "region": "Wind Valleys",
    "difficulty": 40,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 97,
      "durability": 60,
      "abilityEffects": 74,
      "difficulty": 57
    },
    "winRate": "52.5%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/vale.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Wind Valleys, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Vale, renowned as Windtalker, is a celebrated warrior originating from Wind Valleys. Sworn to Wind Masters, their tactical prowess and signature Burst / Crowd Control make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Valir",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "vale_p",
        "name": "Vale's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Vale's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "vale_s1",
        "name": "Vale's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "vale_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "vale_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Windtalker, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/vale.png"
  },
  {
    "id": "leomord",
    "name": "Leomord",
    "title": "Sworn Sword",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Chase / Burst",
    "lane": "Jungle / EXP",
    "faction": "Necrokeep Knights",
    "region": "Necrokeep",
    "difficulty": 49,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 91,
      "durability": 40,
      "abilityEffects": 84,
      "difficulty": 63
    },
    "winRate": "52.0%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/leomord.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Necrokeep, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Leomord, renowned as Sworn Sword, is a celebrated warrior originating from Necrokeep. Sworn to Necrokeep Knights, their tactical prowess and signature Chase / Burst make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Vexana",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "leomord_p",
        "name": "Leomord's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Leomord's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "leomord_s1",
        "name": "Leomord's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "leomord_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "leomord_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Sworn Sword, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/leomord.png"
  },
  {
    "id": "lunox",
    "name": "Lunox",
    "title": "Twilight Goddess",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Burst / Invulnerable",
    "lane": "Mid / Jungle",
    "faction": "Order & Chaos",
    "region": "Celestial Twilight",
    "difficulty": 63,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 90,
      "durability": 57,
      "abilityEffects": 85,
      "difficulty": 69
    },
    "winRate": "52.7%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/lunox.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Celestial Twilight, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Lunox, renowned as Twilight Goddess, is a celebrated warrior originating from Celestial Twilight. Sworn to Order & Chaos, their tactical prowess and signature Burst / Invulnerable make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Belerick",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "lunox_p",
        "name": "Lunox's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Lunox's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "lunox_s1",
        "name": "Lunox's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "lunox_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "lunox_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Twilight Goddess, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/lunox.png"
  },
  {
    "id": "hanzo",
    "name": "Hanzo",
    "title": "Akuma Ninja",
    "role": "Assassin",
    "secondaryRole": "None",
    "speciality": "Reap / Ghost",
    "lane": "Jungle",
    "faction": "Ame no Habakiri",
    "region": "Cadia Riverlands",
    "difficulty": 83,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 76,
      "durability": 51,
      "abilityEffects": 84,
      "difficulty": 41
    },
    "winRate": "52.6%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/hanzo.png",
    "themeColor": "#8b5cf6",
    "voiceQuote": "For Cadia Riverlands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Hanzo, renowned as Akuma Ninja, is a celebrated warrior originating from Cadia Riverlands. Sworn to Ame no Habakiri, their tactical prowess and signature Reap / Ghost make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Hayabusa",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "hanzo_p",
        "name": "Hanzo's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Hanzo's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "hanzo_s1",
        "name": "Hanzo's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "hanzo_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "hanzo_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Akuma Ninja, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/hanzo.png"
  },
  {
    "id": "belerick",
    "name": "Belerick",
    "title": "Guardians of Nature",
    "role": "Tank",
    "secondaryRole": "None",
    "speciality": "Crowd Control",
    "lane": "Roam",
    "faction": "Ancient Spirits",
    "region": "Tree of Life",
    "difficulty": 43,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 87,
      "durability": 95,
      "abilityEffects": 85,
      "difficulty": 53
    },
    "winRate": "51.0%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/belerick.png",
    "themeColor": "#f59e0b",
    "voiceQuote": "For Tree of Life, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Belerick, renowned as Guardians of Nature, is a celebrated warrior originating from Tree of Life. Sworn to Ancient Spirits, their tactical prowess and signature Crowd Control make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Lunox",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "belerick_p",
        "name": "Belerick's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Belerick's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "belerick_s1",
        "name": "Belerick's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "belerick_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "belerick_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Guardians of Nature, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/belerick.png"
  },
  {
    "id": "kimmy",
    "name": "Kimmy",
    "title": "Jetpack Rebel",
    "role": "Marksman",
    "secondaryRole": "None",
    "speciality": "Continuous Fire",
    "lane": "Gold / Mid",
    "faction": "Eruditio Military",
    "region": "Eruditio",
    "difficulty": 83,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 92,
      "durability": 42,
      "abilityEffects": 88,
      "difficulty": 53
    },
    "winRate": "51.9%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/kimmy.png",
    "themeColor": "#06b6d4",
    "voiceQuote": "For Eruditio, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Kimmy, renowned as Jetpack Rebel, is a celebrated warrior originating from Eruditio. Sworn to Eruditio Military, their tactical prowess and signature Continuous Fire make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "General Vance",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "kimmy_p",
        "name": "Kimmy's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Kimmy's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "kimmy_s1",
        "name": "Kimmy's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "kimmy_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "kimmy_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Jetpack Rebel, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/kimmy.png"
  },
  {
    "id": "thamuz",
    "name": "Thamuz",
    "title": "Lord Lava",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Continuous / True DMG",
    "lane": "EXP / Jungle",
    "faction": "Lava Scythes",
    "region": "The Abyss",
    "difficulty": 63,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 86,
      "durability": 71,
      "abilityEffects": 79,
      "difficulty": 49
    },
    "winRate": "50.4%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/thamuz.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For The Abyss, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Thamuz, renowned as Lord Lava, is a celebrated warrior originating from The Abyss. Sworn to Lava Scythes, their tactical prowess and signature Continuous / True DMG make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Dyrroth",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "thamuz_p",
        "name": "Thamuz's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Thamuz's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "thamuz_s1",
        "name": "Thamuz's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "thamuz_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "thamuz_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Lord Lava, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/thamuz.png"
  },
  {
    "id": "harith",
    "name": "Harith",
    "title": "Time Traveler",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Chase / Burst",
    "lane": "Gold / Mid",
    "faction": "Imperial Magic Master",
    "region": "Moniyan Empire",
    "difficulty": 54,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 79,
      "durability": 65,
      "abilityEffects": 65,
      "difficulty": 48
    },
    "winRate": "51.5%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/harith.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Moniyan Empire, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Harith, renowned as Time Traveler, is a celebrated warrior originating from Moniyan Empire. Sworn to Imperial Magic Master, their tactical prowess and signature Chase / Burst make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Alucard",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "harith_p",
        "name": "Harith's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Harith's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "harith_s1",
        "name": "Harith's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "harith_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "harith_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Time Traveler, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/harith.png"
  },
  {
    "id": "minsitthar",
    "name": "Minsitthar",
    "title": "Courageous Warrior",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Control / Anti-Blink",
    "lane": "Roam / EXP",
    "faction": "Royal Guards",
    "region": "Mahar Pura",
    "difficulty": 45,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 91,
      "durability": 72,
      "abilityEffects": 79,
      "difficulty": 62
    },
    "winRate": "50.5%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/minsitthar.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Mahar Pura, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Minsitthar, renowned as Courageous Warrior, is a celebrated warrior originating from Mahar Pura. Sworn to Royal Guards, their tactical prowess and signature Control / Anti-Blink make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Badang",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "minsitthar_p",
        "name": "Minsitthar's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Minsitthar's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "minsitthar_s1",
        "name": "Minsitthar's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "minsitthar_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "minsitthar_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Courageous Warrior, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/minsitthar.png"
  },
  {
    "id": "kadita",
    "name": "Kadita",
    "title": "Ocean Goddess",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Burst / Invulnerable",
    "lane": "Mid / Roam",
    "faction": "Ocean Realm",
    "region": "Southern Seas",
    "difficulty": 62,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 97,
      "durability": 52,
      "abilityEffects": 72,
      "difficulty": 52
    },
    "winRate": "50.8%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/kadita.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Southern Seas, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Kadita, renowned as Ocean Goddess, is a celebrated warrior originating from Southern Seas. Sworn to Ocean Realm, their tactical prowess and signature Burst / Invulnerable make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Lapu-Lapu",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "kadita_p",
        "name": "Kadita's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Kadita's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "kadita_s1",
        "name": "Kadita's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "kadita_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "kadita_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Ocean Goddess, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/kadita.png"
  },
  {
    "id": "faramis",
    "name": "Faramis",
    "title": "Soul Binder",
    "role": "Support",
    "secondaryRole": "None",
    "speciality": "Guard / Revive",
    "lane": "Mid / Roam",
    "faction": "Necrokeep Court",
    "region": "Necrokeep",
    "difficulty": 59,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 87,
      "durability": 43,
      "abilityEffects": 88,
      "difficulty": 56
    },
    "winRate": "51.3%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/faramis.png",
    "themeColor": "#10b981",
    "voiceQuote": "For Necrokeep, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Faramis, renowned as Soul Binder, is a celebrated warrior originating from Necrokeep. Sworn to Necrokeep Court, their tactical prowess and signature Guard / Revive make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Vexana",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "faramis_p",
        "name": "Faramis's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Faramis's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "faramis_s1",
        "name": "Faramis's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "faramis_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "faramis_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Soul Binder, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/faramis.png"
  },
  {
    "id": "badang",
    "name": "Badang",
    "title": "Tribal Champion",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Burst / Wall Trap",
    "lane": "EXP Lane",
    "faction": "Ray Tribe",
    "region": "Southern Islands",
    "difficulty": 39,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 97,
      "durability": 50,
      "abilityEffects": 81,
      "difficulty": 61
    },
    "winRate": "53.2%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/badang.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Southern Islands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Badang, renowned as Tribal Champion, is a celebrated warrior originating from Southern Islands. Sworn to Ray Tribe, their tactical prowess and signature Burst / Wall Trap make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Minsitthar",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "badang_p",
        "name": "Badang's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Badang's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "badang_s1",
        "name": "Badang's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "badang_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "badang_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Tribal Champion, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/badang.png"
  },
  {
    "id": "guinevere",
    "name": "Guinevere",
    "title": "Ms. Violet",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Burst / Knockup",
    "lane": "EXP / Roam",
    "faction": "House Baroque",
    "region": "Moniyan Empire",
    "difficulty": 40,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 87,
      "durability": 62,
      "abilityEffects": 91,
      "difficulty": 51
    },
    "winRate": "53.3%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/guinevere.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Moniyan Empire, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Guinevere, renowned as Ms. Violet, is a celebrated warrior originating from Moniyan Empire. Sworn to House Baroque, their tactical prowess and signature Burst / Knockup make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Lancelot",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "guinevere_p",
        "name": "Guinevere's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Guinevere's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "guinevere_s1",
        "name": "Guinevere's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "guinevere_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "guinevere_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Ms. Violet, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/guinevere.png"
  },
  {
    "id": "esmeralda",
    "name": "Esmeralda",
    "title": "Astrologer",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Shield Steal / Sustain",
    "lane": "EXP / Jungle",
    "faction": "Starmoon Order",
    "region": "Western Desert",
    "difficulty": 83,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 80,
      "durability": 40,
      "abilityEffects": 71,
      "difficulty": 52
    },
    "winRate": "52.9%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/esmeralda.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Western Desert, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Esmeralda, renowned as Astrologer, is a celebrated warrior originating from Western Desert. Sworn to Starmoon Order, their tactical prowess and signature Shield Steal / Sustain make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Khufra",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "esmeralda_p",
        "name": "Esmeralda's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Esmeralda's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "esmeralda_s1",
        "name": "Esmeralda's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "esmeralda_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "esmeralda_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Astrologer, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/esmeralda.png"
  },
  {
    "id": "terizla",
    "name": "Terizla",
    "title": "Executioner",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Damage / Crowd Control",
    "lane": "EXP Lane",
    "faction": "Free Blacksmiths",
    "region": "Moniyan Empire (Prison)",
    "difficulty": 74,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 79,
      "durability": 51,
      "abilityEffects": 90,
      "difficulty": 67
    },
    "winRate": "52.3%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/terizla.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Moniyan Empire (Prison), victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Terizla, renowned as Executioner, is a celebrated warrior originating from Moniyan Empire (Prison). Sworn to Free Blacksmiths, their tactical prowess and signature Damage / Crowd Control make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Julian",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "terizla_p",
        "name": "Terizla's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Terizla's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "terizla_s1",
        "name": "Terizla's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "terizla_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "terizla_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Executioner, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/terizla.png"
  },
  {
    "id": "xborg",
    "name": "X.Borg",
    "title": "Firaga Armor",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "True DMG / Fire Armor",
    "lane": "EXP / Jungle",
    "faction": "Firaga Rebels",
    "region": "Eruditio Outskirts",
    "difficulty": 35,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 73,
      "durability": 65,
      "abilityEffects": 72,
      "difficulty": 74
    },
    "winRate": "50.2%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/xborg.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Eruditio Outskirts, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "X.Borg, renowned as Firaga Armor, is a celebrated warrior originating from Eruditio Outskirts. Sworn to Firaga Rebels, their tactical prowess and signature True DMG / Fire Armor make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Dr. Rooney",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "xborg_p",
        "name": "X.Borg's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers X.Borg's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "xborg_s1",
        "name": "X.Borg's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "xborg_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "xborg_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Firaga Armor, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/xborg.png"
  },
  {
    "id": "dyrroth",
    "name": "Dyrroth",
    "title": "Prince of the Abyss",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Armor Break / Burst",
    "lane": "EXP / Jungle",
    "faction": "Abyssal Royalty",
    "region": "The Abyss",
    "difficulty": 48,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 72,
      "durability": 47,
      "abilityEffects": 89,
      "difficulty": 75
    },
    "winRate": "51.0%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/dyrroth.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For The Abyss, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Dyrroth, renowned as Prince of the Abyss, is a celebrated warrior originating from The Abyss. Sworn to Abyssal Royalty, their tactical prowess and signature Armor Break / Burst make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Silvanna",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "dyrroth_p",
        "name": "Dyrroth's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Dyrroth's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "dyrroth_s1",
        "name": "Dyrroth's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "dyrroth_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "dyrroth_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Prince of the Abyss, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/dyrroth.png"
  },
  {
    "id": "lylia",
    "name": "Lylia",
    "title": "Little Witch",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Poke / Time Rewind",
    "lane": "Mid Lane",
    "faction": "Black Magicians",
    "region": "Magic Academy",
    "difficulty": 45,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 93,
      "durability": 66,
      "abilityEffects": 87,
      "difficulty": 78
    },
    "winRate": "51.2%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/lylia.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Magic Academy, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Lylia, renowned as Little Witch, is a celebrated warrior originating from Magic Academy. Sworn to Black Magicians, their tactical prowess and signature Poke / Time Rewind make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Gloom",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "lylia_p",
        "name": "Lylia's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Lylia's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "lylia_s1",
        "name": "Lylia's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "lylia_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "lylia_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Little Witch, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/lylia.png"
  },
  {
    "id": "baxia",
    "name": "Baxia",
    "title": "Black Tortoise",
    "role": "Tank",
    "secondaryRole": "None",
    "speciality": "Anti-Heal / Roll",
    "lane": "Jungle / Roam",
    "faction": "Great Dragon Disciples",
    "region": "Cadia Riverlands",
    "difficulty": 60,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 72,
      "durability": 95,
      "abilityEffects": 70,
      "difficulty": 75
    },
    "winRate": "52.4%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/baxia.png",
    "themeColor": "#f59e0b",
    "voiceQuote": "For Cadia Riverlands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Baxia, renowned as Black Tortoise, is a celebrated warrior originating from Cadia Riverlands. Sworn to Great Dragon Disciples, their tactical prowess and signature Anti-Heal / Roll make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Yu Zhong",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "baxia_p",
        "name": "Baxia's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Baxia's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "baxia_s1",
        "name": "Baxia's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "baxia_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "baxia_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Black Tortoise, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/baxia.png"
  },
  {
    "id": "masha",
    "name": "Masha",
    "title": "Wild-Oats Hunter",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Multi-HP / Burst",
    "lane": "EXP / Roam",
    "faction": "Bear Tribe",
    "region": "Northern Vale",
    "difficulty": 72,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 99,
      "durability": 47,
      "abilityEffects": 80,
      "difficulty": 47
    },
    "winRate": "52.2%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/masha.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Northern Vale, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Masha, renowned as Wild-Oats Hunter, is a celebrated warrior originating from Northern Vale. Sworn to Bear Tribe, their tactical prowess and signature Multi-HP / Burst make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Franco",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "masha_p",
        "name": "Masha's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Masha's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "masha_s1",
        "name": "Masha's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "masha_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "masha_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Wild-Oats Hunter, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/masha.png"
  },
  {
    "id": "wanwan",
    "name": "Wanwan",
    "title": "Agile Tiger",
    "role": "Marksman",
    "secondaryRole": "None",
    "speciality": "Reap / Invulnerable",
    "lane": "Gold Lane",
    "faction": "Four Symbols",
    "region": "Cadia Riverlands",
    "difficulty": 75,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 95,
      "durability": 64,
      "abilityEffects": 89,
      "difficulty": 79
    },
    "winRate": "51.2%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/wanwan.png",
    "themeColor": "#06b6d4",
    "voiceQuote": "For Cadia Riverlands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Wanwan, renowned as Agile Tiger, is a celebrated warrior originating from Cadia Riverlands. Sworn to Four Symbols, their tactical prowess and signature Reap / Invulnerable make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Zilong",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "wanwan_p",
        "name": "Wanwan's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Wanwan's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "wanwan_s1",
        "name": "Wanwan's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "wanwan_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "wanwan_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Agile Tiger, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/wanwan.png"
  },
  {
    "id": "silvanna",
    "name": "Silvanna",
    "title": "Imperial Knightess",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Initiator / Magic DPS",
    "lane": "EXP / Roam",
    "faction": "Imperial Crown",
    "region": "Moniyan Empire",
    "difficulty": 58,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 99,
      "durability": 58,
      "abilityEffects": 91,
      "difficulty": 74
    },
    "winRate": "51.1%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/silvanna.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Moniyan Empire, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Silvanna, renowned as Imperial Knightess, is a celebrated warrior originating from Moniyan Empire. Sworn to Imperial Crown, their tactical prowess and signature Initiator / Magic DPS make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Dyrroth",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "silvanna_p",
        "name": "Silvanna's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Silvanna's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "silvanna_s1",
        "name": "Silvanna's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "silvanna_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "silvanna_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Imperial Knightess, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/silvanna.png"
  },
  {
    "id": "cecilion",
    "name": "Cecilion",
    "title": "Embrace of Night",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Burst / Late Scale",
    "lane": "Mid Lane",
    "faction": "Blood Demon Nobility",
    "region": "Castle Aberleen",
    "difficulty": 48,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 76,
      "durability": 66,
      "abilityEffects": 92,
      "difficulty": 45
    },
    "winRate": "52.0%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/cecilion.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Castle Aberleen, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Cecilion, renowned as Embrace of Night, is a celebrated warrior originating from Castle Aberleen. Sworn to Blood Demon Nobility, their tactical prowess and signature Burst / Late Scale make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Carmilla",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "cecilion_p",
        "name": "Cecilion's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Cecilion's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "cecilion_s1",
        "name": "Cecilion's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "cecilion_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "cecilion_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Embrace of Night, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/cecilion.png"
  },
  {
    "id": "carmilla",
    "name": "Carmilla",
    "title": "Shadow of Twilight",
    "role": "Support",
    "secondaryRole": "None",
    "speciality": "Crowd Link / Defense",
    "lane": "Roam",
    "faction": "House Ansaac",
    "region": "Castle Aberleen",
    "difficulty": 60,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 91,
      "durability": 69,
      "abilityEffects": 92,
      "difficulty": 53
    },
    "winRate": "53.4%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/carmilla.png",
    "themeColor": "#10b981",
    "voiceQuote": "For Castle Aberleen, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Carmilla, renowned as Shadow of Twilight, is a celebrated warrior originating from Castle Aberleen. Sworn to House Ansaac, their tactical prowess and signature Crowd Link / Defense make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Cecilion",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "carmilla_p",
        "name": "Carmilla's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Carmilla's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "carmilla_s1",
        "name": "Carmilla's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "carmilla_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "carmilla_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Shadow of Twilight, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/carmilla.png"
  },
  {
    "id": "atlas",
    "name": "Atlas",
    "title": "Ocean Gladiator",
    "role": "Tank",
    "secondaryRole": "None",
    "speciality": "Crowd Pull / Initiator",
    "lane": "Roam",
    "faction": "Iron Mecha",
    "region": "Abyssal Ocean Trench",
    "difficulty": 57,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 89,
      "durability": 95,
      "abilityEffects": 77,
      "difficulty": 64
    },
    "winRate": "52.3%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/atlas.png",
    "themeColor": "#f59e0b",
    "voiceQuote": "For Abyssal Ocean Trench, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Atlas, renowned as Ocean Gladiator, is a celebrated warrior originating from Abyssal Ocean Trench. Sworn to Iron Mecha, their tactical prowess and signature Crowd Pull / Initiator make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Bane",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "atlas_p",
        "name": "Atlas's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Atlas's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "atlas_s1",
        "name": "Atlas's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "atlas_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "atlas_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Ocean Gladiator, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/atlas.png"
  },
  {
    "id": "popolandkupa",
    "name": "Popol and Kupa",
    "title": "Icefield Companions",
    "role": "Marksman",
    "secondaryRole": "None",
    "speciality": "Push / Traps",
    "lane": "Gold / Roam",
    "faction": "Frost Wolves",
    "region": "Northern Vale",
    "difficulty": 55,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 86,
      "durability": 52,
      "abilityEffects": 82,
      "difficulty": 45
    },
    "winRate": "50.2%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/popolandkupa.png",
    "themeColor": "#06b6d4",
    "voiceQuote": "For Northern Vale, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Popol and Kupa, renowned as Icefield Companions, is a celebrated warrior originating from Northern Vale. Sworn to Frost Wolves, their tactical prowess and signature Push / Traps make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Masha",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "popolandkupa_p",
        "name": "Popol and Kupa's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Popol and Kupa's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "popolandkupa_s1",
        "name": "Popol and Kupa's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "popolandkupa_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "popolandkupa_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Icefield Companions, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/popolandkupa.png"
  },
  {
    "id": "luoyi",
    "name": "Luo Yi",
    "title": "Yin-Yang Geomancer",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Crowd Reaction / Teleport",
    "lane": "Mid Lane",
    "faction": "Black Dragon Cult",
    "region": "Cadia Riverlands",
    "difficulty": 44,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 79,
      "durability": 46,
      "abilityEffects": 82,
      "difficulty": 51
    },
    "winRate": "53.4%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/luoyi.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Cadia Riverlands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Luo Yi, renowned as Yin-Yang Geomancer, is a celebrated warrior originating from Cadia Riverlands. Sworn to Black Dragon Cult, their tactical prowess and signature Crowd Reaction / Teleport make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Yu Zhong",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "luoyi_p",
        "name": "Luo Yi's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Luo Yi's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "luoyi_s1",
        "name": "Luo Yi's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "luoyi_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "luoyi_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Yin-Yang Geomancer, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/luoyi.png"
  },
  {
    "id": "benedetta",
    "name": "Benedetta",
    "title": "Shadow Ranger",
    "role": "Assassin",
    "secondaryRole": "None",
    "speciality": "Invulnerable Dash / Reap",
    "lane": "EXP / Jungle",
    "faction": "Desolate Rangers",
    "region": "Moniyan Border",
    "difficulty": 70,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 78,
      "durability": 45,
      "abilityEffects": 82,
      "difficulty": 51
    },
    "winRate": "51.8%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/benedetta.png",
    "themeColor": "#8b5cf6",
    "voiceQuote": "For Moniyan Border, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Benedetta, renowned as Shadow Ranger, is a celebrated warrior originating from Moniyan Border. Sworn to Desolate Rangers, their tactical prowess and signature Invulnerable Dash / Reap make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Tigreal",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "benedetta_p",
        "name": "Benedetta's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Benedetta's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "benedetta_s1",
        "name": "Benedetta's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "benedetta_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "benedetta_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Shadow Ranger, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/benedetta.png"
  },
  {
    "id": "khaleed",
    "name": "Khaleed",
    "title": "Desert Scimitar",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Sand Wave / Heal",
    "lane": "EXP Lane",
    "faction": "Artha Clan",
    "region": "Agelta Drylands",
    "difficulty": 75,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 82,
      "durability": 56,
      "abilityEffects": 87,
      "difficulty": 47
    },
    "winRate": "52.4%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/khaleed.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Agelta Drylands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Khaleed, renowned as Desert Scimitar, is a celebrated warrior originating from Agelta Drylands. Sworn to Artha Clan, their tactical prowess and signature Sand Wave / Heal make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Moskov",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "khaleed_p",
        "name": "Khaleed's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Khaleed's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "khaleed_s1",
        "name": "Khaleed's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "khaleed_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "khaleed_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Desert Scimitar, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/khaleed.png"
  },
  {
    "id": "barats",
    "name": "Barats",
    "title": "Dino Rider",
    "role": "Tank",
    "secondaryRole": "None",
    "speciality": "Giant Grow / Suppress",
    "lane": "Jungle / EXP",
    "faction": "Desert Scavengers",
    "region": "Agelta Drylands",
    "difficulty": 52,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 81,
      "durability": 95,
      "abilityEffects": 72,
      "difficulty": 79
    },
    "winRate": "50.9%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/barats.png",
    "themeColor": "#f59e0b",
    "voiceQuote": "For Agelta Drylands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Barats, renowned as Dino Rider, is a celebrated warrior originating from Agelta Drylands. Sworn to Desert Scavengers, their tactical prowess and signature Giant Grow / Suppress make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Detona",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "barats_p",
        "name": "Barats's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Barats's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "barats_s1",
        "name": "Barats's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "barats_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "barats_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Dino Rider, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/barats.png"
  },
  {
    "id": "brody",
    "name": "Brody",
    "title": "Lone Star",
    "role": "Marksman",
    "secondaryRole": "None",
    "speciality": "Heavy Burst / Mobile",
    "lane": "Gold Lane",
    "faction": "Memory Seekers",
    "region": "Abyssal Volcano",
    "difficulty": 55,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 77,
      "durability": 44,
      "abilityEffects": 83,
      "difficulty": 62
    },
    "winRate": "51.6%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/brody.png",
    "themeColor": "#06b6d4",
    "voiceQuote": "For Abyssal Volcano, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Brody, renowned as Lone Star, is a celebrated warrior originating from Abyssal Volcano. Sworn to Memory Seekers, their tactical prowess and signature Heavy Burst / Mobile make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Benedetta",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "brody_p",
        "name": "Brody's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Brody's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "brody_s1",
        "name": "Brody's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "brody_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "brody_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Lone Star, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/brody.png"
  },
  {
    "id": "yve",
    "name": "Yve",
    "title": "Astrowarden",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Grid Control / Slow",
    "lane": "Mid Lane",
    "faction": "Cosmic Wardens",
    "region": "Deep Cosmos",
    "difficulty": 62,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 74,
      "durability": 54,
      "abilityEffects": 88,
      "difficulty": 53
    },
    "winRate": "50.8%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/yve.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Deep Cosmos, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Yve, renowned as Astrowarden, is a celebrated warrior originating from Deep Cosmos. Sworn to Cosmic Wardens, their tactical prowess and signature Grid Control / Slow make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Zhask",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "yve_p",
        "name": "Yve's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Yve's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "yve_s1",
        "name": "Yve's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "yve_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "yve_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Astrowarden, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/yve.png"
  },
  {
    "id": "mathilda",
    "name": "Mathilda",
    "title": "Swift Plume",
    "role": "Support",
    "secondaryRole": "None",
    "speciality": "Flight Guide / Burst",
    "lane": "Roam / Mid",
    "faction": "Native Tribes",
    "region": "Agelta Drylands",
    "difficulty": 78,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 89,
      "durability": 79,
      "abilityEffects": 68,
      "difficulty": 78
    },
    "winRate": "52.3%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/mathilda.png",
    "themeColor": "#10b981",
    "voiceQuote": "For Agelta Drylands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Mathilda, renowned as Swift Plume, is a celebrated warrior originating from Agelta Drylands. Sworn to Native Tribes, their tactical prowess and signature Flight Guide / Burst make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Clint",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "mathilda_p",
        "name": "Mathilda's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Mathilda's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "mathilda_s1",
        "name": "Mathilda's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "mathilda_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "mathilda_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Swift Plume, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/mathilda.png"
  },
  {
    "id": "paquito",
    "name": "Paquito",
    "title": "Heavenly Fist",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Combo Boxing / Burst",
    "lane": "EXP / Jungle",
    "faction": "Moniyan Champion",
    "region": "Moniyan South",
    "difficulty": 57,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 89,
      "durability": 55,
      "abilityEffects": 86,
      "difficulty": 67
    },
    "winRate": "51.4%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/paquito.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Moniyan South, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Paquito, renowned as Heavenly Fist, is a celebrated warrior originating from Moniyan South. Sworn to Moniyan Champion, their tactical prowess and signature Combo Boxing / Burst make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Chou",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "paquito_p",
        "name": "Paquito's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Paquito's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "paquito_s1",
        "name": "Paquito's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "paquito_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "paquito_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Heavenly Fist, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/paquito.png"
  },
  {
    "id": "gloo",
    "name": "Gloo",
    "title": "Swamp Spirits",
    "role": "Tank",
    "secondaryRole": "None",
    "speciality": "Attach / Split",
    "lane": "EXP / Roam",
    "faction": "Goo Symbiote",
    "region": "Shadow Swamp",
    "difficulty": 69,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 90,
      "durability": 95,
      "abilityEffects": 73,
      "difficulty": 44
    },
    "winRate": "51.1%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/gloo.png",
    "themeColor": "#f59e0b",
    "voiceQuote": "For Shadow Swamp, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Gloo, renowned as Swamp Spirits, is a celebrated warrior originating from Shadow Swamp. Sworn to Goo Symbiote, their tactical prowess and signature Attach / Split make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Nana",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "gloo_p",
        "name": "Gloo's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Gloo's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "gloo_s1",
        "name": "Gloo's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "gloo_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "gloo_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Swamp Spirits, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/gloo.png"
  },
  {
    "id": "phoveus",
    "name": "Phoveus",
    "title": "Chains of Sin",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Anti-Dash / Shield",
    "lane": "EXP Lane",
    "faction": "Astaros Cult",
    "region": "Moniyan Dungeons",
    "difficulty": 64,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 71,
      "durability": 65,
      "abilityEffects": 76,
      "difficulty": 46
    },
    "winRate": "52.7%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/phoveus.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Moniyan Dungeons, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Phoveus, renowned as Chains of Sin, is a celebrated warrior originating from Moniyan Dungeons. Sworn to Astaros Cult, their tactical prowess and signature Anti-Dash / Shield make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Astaros",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "phoveus_p",
        "name": "Phoveus's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Phoveus's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "phoveus_s1",
        "name": "Phoveus's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "phoveus_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "phoveus_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Chains of Sin, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/phoveus.png"
  },
  {
    "id": "natan",
    "name": "Natan",
    "title": "Spacetime Walker",
    "role": "Marksman",
    "secondaryRole": "None",
    "speciality": "Magic Marksman / Clone",
    "lane": "Gold Lane",
    "faction": "Time Institute",
    "region": "Eruditio Future",
    "difficulty": 49,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 72,
      "durability": 42,
      "abilityEffects": 77,
      "difficulty": 40
    },
    "winRate": "52.4%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/natan.png",
    "themeColor": "#06b6d4",
    "voiceQuote": "For Eruditio Future, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Natan, renowned as Spacetime Walker, is a celebrated warrior originating from Eruditio Future. Sworn to Time Institute, their tactical prowess and signature Magic Marksman / Clone make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Beatrix",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "natan_p",
        "name": "Natan's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Natan's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "natan_s1",
        "name": "Natan's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "natan_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "natan_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Spacetime Walker, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/natan.png"
  },
  {
    "id": "aulus",
    "name": "Aulus",
    "title": "Warrior of Ferocity",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Battle Axe / Scaling",
    "lane": "Jungle / EXP",
    "faction": "Leonin Dwarves",
    "region": "Lantis Mountains",
    "difficulty": 43,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 90,
      "durability": 65,
      "abilityEffects": 70,
      "difficulty": 63
    },
    "winRate": "52.6%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/aulus.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Lantis Mountains, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Aulus, renowned as Warrior of Ferocity, is a celebrated warrior originating from Lantis Mountains. Sworn to Leonin Dwarves, their tactical prowess and signature Battle Axe / Scaling make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Benedetta",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "aulus_p",
        "name": "Aulus's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Aulus's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "aulus_s1",
        "name": "Aulus's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "aulus_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "aulus_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Warrior of Ferocity, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/aulus.png"
  },
  {
    "id": "aamon",
    "name": "Aamon",
    "title": "Duke of Shards",
    "role": "Assassin",
    "secondaryRole": "None",
    "speciality": "Camouflage / Shards",
    "lane": "Jungle",
    "faction": "House Paxley",
    "region": "Moniyan Empire",
    "difficulty": 64,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 95,
      "durability": 56,
      "abilityEffects": 74,
      "difficulty": 59
    },
    "winRate": "51.5%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/aamon.png",
    "themeColor": "#8b5cf6",
    "voiceQuote": "For Moniyan Empire, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Aamon, renowned as Duke of Shards, is a celebrated warrior originating from Moniyan Empire. Sworn to House Paxley, their tactical prowess and signature Camouflage / Shards make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Gusion",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "aamon_p",
        "name": "Aamon's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Aamon's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "aamon_s1",
        "name": "Aamon's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "aamon_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "aamon_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Duke of Shards, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/aamon.png"
  },
  {
    "id": "valentina",
    "name": "Valentina",
    "title": "Matriarch of Shadows",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Ultimate Steal / Terror",
    "lane": "Mid Lane",
    "faction": "House Paxley",
    "region": "Moniyan Empire",
    "difficulty": 49,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 85,
      "durability": 53,
      "abilityEffects": 69,
      "difficulty": 69
    },
    "winRate": "52.9%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/valentina.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Moniyan Empire, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Valentina, renowned as Matriarch of Shadows, is a celebrated warrior originating from Moniyan Empire. Sworn to House Paxley, their tactical prowess and signature Ultimate Steal / Terror make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Aamon & Gusion",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "valentina_p",
        "name": "Valentina's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Valentina's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "valentina_s1",
        "name": "Valentina's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "valentina_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "valentina_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Matriarch of Shadows, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/valentina.png"
  },
  {
    "id": "edith",
    "name": "Edith",
    "title": "Forsaken Warden",
    "role": "Tank",
    "secondaryRole": "None",
    "speciality": "Mecha / Ranged Lightning",
    "lane": "EXP / Roam",
    "faction": "Phylax Mecha",
    "region": "Sanctuary of Primal Gods",
    "difficulty": 71,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 82,
      "durability": 95,
      "abilityEffects": 78,
      "difficulty": 50
    },
    "winRate": "51.3%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/edith.png",
    "themeColor": "#f59e0b",
    "voiceQuote": "For Sanctuary of Primal Gods, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Edith, renowned as Forsaken Warden, is a celebrated warrior originating from Sanctuary of Primal Gods. Sworn to Phylax Mecha, their tactical prowess and signature Mecha / Ranged Lightning make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Uranus",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "edith_p",
        "name": "Edith's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Edith's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "edith_s1",
        "name": "Edith's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "edith_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "edith_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Forsaken Warden, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/edith.png"
  },
  {
    "id": "floryn",
    "name": "Floryn",
    "title": "Budding Hope",
    "role": "Support",
    "secondaryRole": "None",
    "speciality": "Global Heal / Lantern",
    "lane": "Roam",
    "faction": "Life Spirits",
    "region": "Oasis of Life",
    "difficulty": 49,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 90,
      "durability": 57,
      "abilityEffects": 77,
      "difficulty": 77
    },
    "winRate": "52.2%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/floryn.png",
    "themeColor": "#10b981",
    "voiceQuote": "For Oasis of Life, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Floryn, renowned as Budding Hope, is a celebrated warrior originating from Oasis of Life. Sworn to Life Spirits, their tactical prowess and signature Global Heal / Lantern make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Belerick",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "floryn_p",
        "name": "Floryn's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Floryn's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "floryn_s1",
        "name": "Floryn's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "floryn_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "floryn_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Budding Hope, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/floryn.png"
  },
  {
    "id": "yin",
    "name": "Yin",
    "title": "Martial Genius",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Domain Duel / Lieh",
    "lane": "EXP / Jungle",
    "faction": "Forsaken Light",
    "region": "Cadia Riverlands",
    "difficulty": 83,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 87,
      "durability": 52,
      "abilityEffects": 92,
      "difficulty": 61
    },
    "winRate": "50.1%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/yin.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Cadia Riverlands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Yin, renowned as Martial Genius, is a celebrated warrior originating from Cadia Riverlands. Sworn to Forsaken Light, their tactical prowess and signature Domain Duel / Lieh make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Lieh",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "yin_p",
        "name": "Yin's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Yin's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "yin_s1",
        "name": "Yin's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "yin_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "yin_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Martial Genius, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/yin.png"
  },
  {
    "id": "melissa",
    "name": "Melissa",
    "title": "Cursed Needle",
    "role": "Marksman",
    "secondaryRole": "None",
    "speciality": "Doll Link / Shield",
    "lane": "Gold Lane",
    "faction": "Forsaken Light",
    "region": "Lumina Slums",
    "difficulty": 68,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 80,
      "durability": 58,
      "abilityEffects": 94,
      "difficulty": 70
    },
    "winRate": "52.0%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/melissa.png",
    "themeColor": "#06b6d4",
    "voiceQuote": "For Lumina Slums, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Melissa, renowned as Cursed Needle, is a celebrated warrior originating from Lumina Slums. Sworn to Forsaken Light, their tactical prowess and signature Doll Link / Shield make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Yin",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "melissa_p",
        "name": "Melissa's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Melissa's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "melissa_s1",
        "name": "Melissa's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "melissa_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "melissa_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Cursed Needle, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/melissa.png"
  },
  {
    "id": "xavier",
    "name": "Xavier",
    "title": "Defier of Light",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Global Laser / Snare",
    "lane": "Mid Lane",
    "faction": "Forsaken Light",
    "region": "Monastery of Light",
    "difficulty": 74,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 83,
      "durability": 69,
      "abilityEffects": 76,
      "difficulty": 53
    },
    "winRate": "53.3%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/xavier.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Monastery of Light, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Xavier, renowned as Defier of Light, is a celebrated warrior originating from Monastery of Light. Sworn to Forsaken Light, their tactical prowess and signature Global Laser / Snare make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Julian",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "xavier_p",
        "name": "Xavier's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Xavier's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "xavier_s1",
        "name": "Xavier's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "xavier_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "xavier_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Defier of Light, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/xavier.png"
  },
  {
    "id": "julian",
    "name": "Julian",
    "title": "Scarlet Raven",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Multi-Skill / Enhanced",
    "lane": "Jungle / Mid",
    "faction": "Forsaken Light",
    "region": "Ravens of Moniyan",
    "difficulty": 49,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 70,
      "durability": 57,
      "abilityEffects": 68,
      "difficulty": 45
    },
    "winRate": "51.4%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/julian.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Ravens of Moniyan, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Julian, renowned as Scarlet Raven, is a celebrated warrior originating from Ravens of Moniyan. Sworn to Forsaken Light, their tactical prowess and signature Multi-Skill / Enhanced make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Terizla",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "julian_p",
        "name": "Julian's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Julian's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "julian_s1",
        "name": "Julian's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "julian_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "julian_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Scarlet Raven, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/julian.png"
  },
  {
    "id": "fredrinn",
    "name": "Fredrinn",
    "title": "Rogue Appraiser",
    "role": "Tank",
    "secondaryRole": "None",
    "speciality": "Taunt / Crystal Burst",
    "lane": "Jungle / EXP",
    "faction": "Aberleen Outcasts",
    "region": "Los Pecados",
    "difficulty": 65,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 77,
      "durability": 95,
      "abilityEffects": 65,
      "difficulty": 62
    },
    "winRate": "51.1%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/fredrinn.png",
    "themeColor": "#f59e0b",
    "voiceQuote": "For Los Pecados, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Fredrinn, renowned as Rogue Appraiser, is a celebrated warrior originating from Los Pecados. Sworn to Aberleen Outcasts, their tactical prowess and signature Taunt / Crystal Burst make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Claude",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "fredrinn_p",
        "name": "Fredrinn's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Fredrinn's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "fredrinn_s1",
        "name": "Fredrinn's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "fredrinn_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "fredrinn_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Rogue Appraiser, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/fredrinn.png"
  },
  {
    "id": "joy",
    "name": "Joy",
    "title": "Flash of Miracle",
    "role": "Assassin",
    "secondaryRole": "None",
    "speciality": "Rhythm Dash / CC Immune",
    "lane": "EXP / Jungle",
    "faction": "Leonin Music Tribe",
    "region": "Leonin Homeland",
    "difficulty": 76,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 79,
      "durability": 44,
      "abilityEffects": 83,
      "difficulty": 60
    },
    "winRate": "52.8%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/joy.png",
    "themeColor": "#8b5cf6",
    "voiceQuote": "For Leonin Homeland, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Joy, renowned as Flash of Miracle, is a celebrated warrior originating from Leonin Homeland. Sworn to Leonin Music Tribe, their tactical prowess and signature Rhythm Dash / CC Immune make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Harith",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "joy_p",
        "name": "Joy's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Joy's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "joy_s1",
        "name": "Joy's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "joy_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "joy_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Flash of Miracle, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/joy.png"
  },
  {
    "id": "arlott",
    "name": "Arlott",
    "title": "Lone Lancer",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Demon Eye / Dash",
    "lane": "EXP / Roam",
    "faction": "Exiled Half-Demon",
    "region": "Abyssal Border",
    "difficulty": 51,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 92,
      "durability": 47,
      "abilityEffects": 73,
      "difficulty": 77
    },
    "winRate": "52.9%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/arlott.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Abyssal Border, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Arlott, renowned as Lone Lancer, is a celebrated warrior originating from Abyssal Border. Sworn to Exiled Half-Demon, their tactical prowess and signature Demon Eye / Dash make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Mila",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "arlott_p",
        "name": "Arlott's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Arlott's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "arlott_s1",
        "name": "Arlott's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "arlott_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "arlott_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Lone Lancer, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/arlott.png"
  },
  {
    "id": "novaria",
    "name": "Novaria",
    "title": "Star Rebel",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Long Range / Reveal",
    "lane": "Mid Lane",
    "faction": "Astral Weavers",
    "region": "Astral Plane",
    "difficulty": 78,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 94,
      "durability": 48,
      "abilityEffects": 80,
      "difficulty": 58
    },
    "winRate": "50.3%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/novaria.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Astral Plane, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Novaria, renowned as Star Rebel, is a celebrated warrior originating from Astral Plane. Sworn to Astral Weavers, their tactical prowess and signature Long Range / Reveal make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Lunox",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "novaria_p",
        "name": "Novaria's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Novaria's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "novaria_s1",
        "name": "Novaria's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "novaria_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "novaria_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Star Rebel, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/novaria.png"
  },
  {
    "id": "ixia",
    "name": "Ixia",
    "title": "Arclight Gunner",
    "role": "Marksman",
    "secondaryRole": "None",
    "speciality": "Radial Fan / Burst",
    "lane": "Gold Lane",
    "faction": "Eruditio Reclaimers",
    "region": "Sandstorm Outpost",
    "difficulty": 41,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 98,
      "durability": 73,
      "abilityEffects": 73,
      "difficulty": 46
    },
    "winRate": "52.5%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/ixia.png",
    "themeColor": "#06b6d4",
    "voiceQuote": "For Sandstorm Outpost, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Ixia, renowned as Arclight Gunner, is a celebrated warrior originating from Sandstorm Outpost. Sworn to Eruditio Reclaimers, their tactical prowess and signature Radial Fan / Burst make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Layla",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "ixia_p",
        "name": "Ixia's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Ixia's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "ixia_s1",
        "name": "Ixia's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "ixia_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "ixia_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Arclight Gunner, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/ixia.png"
  },
  {
    "id": "nolan",
    "name": "Nolan",
    "title": "Cosmic Wayfarer",
    "role": "Assassin",
    "secondaryRole": "None",
    "speciality": "Rift Slash / Energy",
    "lane": "Jungle",
    "faction": "Rift Pioneers",
    "region": "Multiverse Rift",
    "difficulty": 39,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 83,
      "durability": 62,
      "abilityEffects": 93,
      "difficulty": 44
    },
    "winRate": "52.0%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/nolan.png",
    "themeColor": "#8b5cf6",
    "voiceQuote": "For Multiverse Rift, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Nolan, renowned as Cosmic Wayfarer, is a celebrated warrior originating from Multiverse Rift. Sworn to Rift Pioneers, their tactical prowess and signature Rift Slash / Energy make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Layla",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "nolan_p",
        "name": "Nolan's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Nolan's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "nolan_s1",
        "name": "Nolan's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "nolan_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "nolan_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Cosmic Wayfarer, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/nolan.png"
  },
  {
    "id": "cici",
    "name": "Cici",
    "title": "Buoyant Performer",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Yoyo Jump / Regen",
    "lane": "EXP Lane",
    "faction": "Traveling Circus",
    "region": "Whimsical Carnival",
    "difficulty": 48,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 85,
      "durability": 65,
      "abilityEffects": 76,
      "difficulty": 76
    },
    "winRate": "51.5%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/cici.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Whimsical Carnival, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Cici, renowned as Buoyant Performer, is a celebrated warrior originating from Whimsical Carnival. Sworn to Traveling Circus, their tactical prowess and signature Yoyo Jump / Regen make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Aamon",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "cici_p",
        "name": "Cici's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Cici's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "cici_s1",
        "name": "Cici's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "cici_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "cici_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Buoyant Performer, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/cici.png"
  },
  {
    "id": "chip",
    "name": "Chip",
    "title": "Phase Commander",
    "role": "Tank",
    "secondaryRole": "None",
    "speciality": "Portal / Snack Bar",
    "lane": "Roam",
    "faction": "Lazy Cyborgs",
    "region": "Eruditio Lab Zero",
    "difficulty": 74,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 97,
      "durability": 95,
      "abilityEffects": 91,
      "difficulty": 72
    },
    "winRate": "53.0%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/chip.png",
    "themeColor": "#f59e0b",
    "voiceQuote": "For Eruditio Lab Zero, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Chip, renowned as Phase Commander, is a celebrated warrior originating from Eruditio Lab Zero. Sworn to Lazy Cyborgs, their tactical prowess and signature Portal / Snack Bar make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Dr. Rooney",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "chip_p",
        "name": "Chip's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Chip's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "chip_s1",
        "name": "Chip's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "chip_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "chip_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Phase Commander, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/chip.png"
  },
  {
    "id": "zhuxin",
    "name": "Zhuxin",
    "title": "Crimson Butterfly",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Lantern Pull / Levitate",
    "lane": "Mid Lane",
    "faction": "Soul Butterfly",
    "region": "Cadia Riverlands",
    "difficulty": 79,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 78,
      "durability": 62,
      "abilityEffects": 76,
      "difficulty": 60
    },
    "winRate": "51.3%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/zhuxin.png",
    "themeColor": "#ec4899",
    "voiceQuote": "For Cadia Riverlands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Zhuxin, renowned as Crimson Butterfly, is a celebrated warrior originating from Cadia Riverlands. Sworn to Soul Butterfly, their tactical prowess and signature Lantern Pull / Levitate make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Suyou",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "zhuxin_p",
        "name": "Zhuxin's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Zhuxin's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "zhuxin_s1",
        "name": "Zhuxin's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "zhuxin_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "zhuxin_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Crimson Butterfly, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/zhuxin.png"
  },
  {
    "id": "suyou",
    "name": "Suyou",
    "title": "Mask of Immortal",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Mortal / Immortal Stance",
    "lane": "Jungle / EXP",
    "faction": "Immortal Mask Cult",
    "region": "Cadia Riverlands",
    "difficulty": 66,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 94,
      "durability": 66,
      "abilityEffects": 79,
      "difficulty": 50
    },
    "winRate": "52.1%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/suyou.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Cadia Riverlands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Suyou, renowned as Mask of Immortal, is a celebrated warrior originating from Cadia Riverlands. Sworn to Immortal Mask Cult, their tactical prowess and signature Mortal / Immortal Stance make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Zhuxin",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "suyou_p",
        "name": "Suyou's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Suyou's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "suyou_s1",
        "name": "Suyou's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "suyou_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "suyou_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Mask of Immortal, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/suyou.png"
  },
  {
    "id": "lukas",
    "name": "Lukas",
    "title": "Sacred Beast",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Beast Roar / Pounce",
    "lane": "EXP / Jungle",
    "faction": "Highland Guardians",
    "region": "Moniyan Highlands",
    "difficulty": 53,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 76,
      "durability": 66,
      "abilityEffects": 89,
      "difficulty": 60
    },
    "winRate": "52.1%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/lukas.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Moniyan Highlands, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Lukas, renowned as Sacred Beast, is a celebrated warrior originating from Moniyan Highlands. Sworn to Highland Guardians, their tactical prowess and signature Beast Roar / Pounce make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Tigreal",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "lukas_p",
        "name": "Lukas's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Lukas's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "lukas_s1",
        "name": "Lukas's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "lukas_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "lukas_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Sacred Beast, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/lukas.png"
  },
  {
    "id": "khufra",
    "name": "Khufra",
    "title": "Desert Tyrant",
    "role": "Tank",
    "secondaryRole": "None",
    "speciality": "Anti-Dash / Bouncing Ball",
    "lane": "Roam",
    "faction": "Ancient Pharaohs",
    "region": "Western Desert",
    "difficulty": 53,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 72,
      "durability": 95,
      "abilityEffects": 82,
      "difficulty": 63
    },
    "winRate": "52.9%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/khufra.png",
    "themeColor": "#f59e0b",
    "voiceQuote": "For Western Desert, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Khufra, renowned as Desert Tyrant, is a celebrated warrior originating from Western Desert. Sworn to Ancient Pharaohs, their tactical prowess and signature Anti-Dash / Bouncing Ball make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Esmeralda",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "khufra_p",
        "name": "Khufra's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Khufra's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "khufra_s1",
        "name": "Khufra's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "khufra_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "khufra_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Desert Tyrant, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/khufra.png"
  },
  {
    "id": "bane",
    "name": "Bane",
    "title": "Lord of the Seven Seas",
    "role": "Fighter",
    "secondaryRole": "None",
    "speciality": "Push / Magic Splash",
    "lane": "EXP / Jungle",
    "faction": "Frozen Sea Pirates",
    "region": "Northern Vale",
    "difficulty": 57,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 90,
      "durability": 56,
      "abilityEffects": 82,
      "difficulty": 57
    },
    "winRate": "50.9%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/bane.png",
    "themeColor": "#ef4444",
    "voiceQuote": "For Northern Vale, victory is inevitable!",
    "loreQuote": "Destiny honors those who stand steadfast in the crucible of battle.",
    "lore": "Bane, renowned as Lord of the Seven Seas, is a celebrated warrior originating from Northern Vale. Sworn to Frozen Sea Pirates, their tactical prowess and signature Push / Magic Splash make them an indispensable legend across the Land of Dawn.",
    "relationships": [
      {
        "name": "Franco",
        "role": "Battle Comrade",
        "type": "Ally"
      },
      {
        "name": "Abyssal Darkness",
        "role": "Invading Threat",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "bane_p",
        "name": "Bane's Awakening",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "✨",
        "description": "Empowers Bane's basic attacks and skill rotation based on combat momentum."
      },
      {
        "id": "bane_s1",
        "name": "Bane's Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "⚔️",
        "description": "Delivers a precise combat strike dealing physical or magical damage to enemies along the path."
      },
      {
        "id": "bane_s2",
        "name": "Tactical Maneuver",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "💨",
        "description": "Repositions swiftly while granting crowd control disruption or defensive barrier."
      },
      {
        "id": "bane_ult",
        "name": "Apex Sovereign",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "🌟",
        "description": "Unleashes the full potential of Lord of the Seven Seas, dealing monumental AoE damage and dictating the teamfight."
      }
    ],
    "portrait": "/assets/images/heroes/bane.png"
  },
  {
    "id": "kalea",
    "name": "Kalea",
    "title": "Tidal Sovereign",
    "role": "Support",
    "secondaryRole": "Mage",
    "speciality": "Crowd Control / Regen",
    "lane": "Roam",
    "faction": "Ocean Sanctuary",
    "region": "Cadia Riverlands & Sea",
    "difficulty": 45,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 55,
      "durability": 70,
      "abilityEffects": 85,
      "difficulty": 45
    },
    "winRate": "52.4%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/kalea.png",
    "portrait": "/assets/images/heroes/kalea.png",
    "themeColor": "#06b6d4",
    "voiceQuote": "The endless tides listen only to the deep current.",
    "loreQuote": "When the stormy seas rise, the sanctuary shall emerge unscathed.",
    "lore": "Guardian of the sunken astral seas adjoining the Cadia Riverlands. Kalea commands ancient marine currents to shield oceanic sanctuaries from abyssal incursions, guiding seafaring voyagers through perilous tempests.",
    "relationships": [
      {
        "name": "Kadita",
        "role": "Ocean Goddess",
        "type": "Ally"
      },
      {
        "name": "Bane",
        "role": "Frozen Plunderer",
        "type": "Nemesis"
      },
      {
        "name": "Luo Yi",
        "role": "Yin-Yang Strategist",
        "type": "Neutral"
      }
    ],
    "abilities": [
      {
        "id": "kalea_p",
        "name": "Abyssal Current",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🌊",
        "description": "Allied units touched by Kalea's tidal surge receive enhanced movement speed and a protective water barrier."
      },
      {
        "id": "kalea_s1",
        "name": "Surge Cascade",
        "type": "Skill 1",
        "cooldown": "6.5s",
        "cost": "60 Mana",
        "icon": "💧",
        "description": "Releases a surging vortex of ocean water that damages and knocks back oncoming enemies."
      },
      {
        "id": "kalea_s2",
        "name": "Deepsea Bubble",
        "type": "Skill 2",
        "cooldown": "9.0s",
        "cost": "75 Mana",
        "icon": "🫧",
        "description": "Traps enemy champions within pressurized water spheres, disabling them for 1.2s."
      },
      {
        "id": "kalea_ult",
        "name": "Tidal Cataclysm",
        "type": "Ultimate",
        "cooldown": "42.0s",
        "cost": "120 Mana",
        "icon": "🌀",
        "description": "Summons a monumental tidal wave sweeping across the battlefield, cleansing debuffs on allies and slowing all enemies by 70%."
      }
    ]
  },
  {
    "id": "zetian",
    "name": "Zetian",
    "title": "Celestial Empress",
    "role": "Mage",
    "secondaryRole": "None",
    "speciality": "Burst / Area Control",
    "lane": "Mid Lane",
    "faction": "Phoenix Dynasty",
    "region": "Cadia Riverlands",
    "difficulty": 60,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 92,
      "durability": 35,
      "abilityEffects": 90,
      "difficulty": 60
    },
    "winRate": "53.8%",
    "popularity": "Rank S+",
    "image": "/assets/images/heroes/zetian.png",
    "portrait": "/assets/images/heroes/zetian.png",
    "themeColor": "#f59e0b",
    "voiceQuote": "True authority bends neither to heaven nor earth.",
    "loreQuote": "From the ashes of fallen dynasties, the immortal phoenix reigns supreme.",
    "lore": "Sovereign ruler of the Phoenix Court in the heart of Cadia Riverlands. Wielding royal solar flames, Zetian brings order to the fragmented provinces with unchallenged imperial power and strategic brilliance.",
    "relationships": [
      {
        "name": "Yu Zhong",
        "role": "Black Dragon Sovereign",
        "type": "Rival"
      },
      {
        "name": "Luo Yi",
        "role": "Imperial Diviner",
        "type": "Ally"
      },
      {
        "name": "Baxia",
        "role": "Black Tortoise Guardian",
        "type": "Neutral"
      }
    ],
    "abilities": [
      {
        "id": "zetian_p",
        "name": "Phoenix Mandate",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🔥",
        "description": "Skills apply imperial flame marks. Detonating 3 marks causes a burst of true damage and grants Zetian solar shielding."
      },
      {
        "id": "zetian_s1",
        "name": "Solar Scepter",
        "type": "Skill 1",
        "cooldown": "5.5s",
        "cost": "55 Mana",
        "icon": "☀️",
        "description": "Directs solar beams toward a designated point, detonating on impact with burning splash damage."
      },
      {
        "id": "zetian_s2",
        "name": "Imperial Domain",
        "type": "Skill 2",
        "cooldown": "8.0s",
        "cost": "70 Mana",
        "icon": "👑",
        "description": "Creates an imperial golden sanctum. Enemies attempting to cross its borders are grounded and slowed."
      },
      {
        "id": "zetian_ult",
        "name": "Ascendance of Phoenix",
        "type": "Ultimate",
        "cooldown": "36.0s",
        "cost": "110 Mana",
        "icon": "🦅",
        "description": "Transforms into the golden avatar of the Phoenix, bombarding the target region with descending orbital meteors."
      }
    ]
  },
  {
    "id": "obsidia",
    "name": "Obsidia",
    "title": "Void Sovereign",
    "role": "Mage",
    "secondaryRole": "Assassin",
    "speciality": "Burst / Blink",
    "lane": "Mid / Jungle",
    "faction": "Dark Abyss",
    "region": "The Abyss",
    "difficulty": 75,
    "difficultyLabel": "Hard",
    "attributes": {
      "offense": 96,
      "durability": 28,
      "abilityEffects": 94,
      "difficulty": 75
    },
    "winRate": "52.9%",
    "popularity": "Rank S",
    "image": "/assets/images/heroes/obsidia.png",
    "portrait": "/assets/images/heroes/obsidia.png",
    "themeColor": "#a855f7",
    "voiceQuote": "The void hungers for what the light dares to build.",
    "loreQuote": "In absolute darkness, every heartbeat becomes a target.",
    "lore": "Born from the crystallization of raw abyssal energy in the deepest trenches of the Land of Dawn. Obsidia manipulates spatial fractures and dark matter to obliterate anyone encroaching upon her desolate domain.",
    "relationships": [
      {
        "name": "Alice",
        "role": "Blood Demon Queen",
        "type": "Rival"
      },
      {
        "name": "Dyrroth",
        "role": "Prince of Abyss",
        "type": "Ally"
      },
      {
        "name": "Alucard",
        "role": "Demon Hunter",
        "type": "Nemesis"
      }
    ],
    "abilities": [
      {
        "id": "obsidia_p",
        "name": "Singularity Resonance",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🌌",
        "description": "Obsidia gains bonus magic penetration per enemy trapped inside void gravity wells."
      },
      {
        "id": "obsidia_s1",
        "name": "Void Shard",
        "type": "Skill 1",
        "cooldown": "4.5s",
        "cost": "50 Mana",
        "icon": "🔮",
        "description": "Hurls three obsidian dark-matter crystals piercing through targets and leaving lingering gravity fissures."
      },
      {
        "id": "obsidia_s2",
        "name": "Spatial Tear",
        "type": "Skill 2",
        "cooldown": "7.5s",
        "cost": "60 Mana",
        "icon": "⚡",
        "description": "Tears open a void portal, instantly blinking to the cursor location and silencing nearby foes for 0.8s."
      },
      {
        "id": "obsidia_ult",
        "name": "Event Horizon",
        "type": "Ultimate",
        "cooldown": "40.0s",
        "cost": "130 Mana",
        "icon": "🕳️",
        "description": "Summons a colossal black hole that continuously pulls in surrounding targets, ending in an apocalyptic cosmic collapse."
      }
    ]
  },
  {
    "id": "sora",
    "name": "Sora",
    "title": "Sky Ascendant",
    "role": "Fighter",
    "secondaryRole": "Assassin",
    "speciality": "Chase / Burst",
    "lane": "EXP / Jungle",
    "faction": "Apex Aeronauts",
    "region": "Eruditio & Sky Isles",
    "difficulty": 65,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 90,
      "durability": 60,
      "abilityEffects": 75,
      "difficulty": 65
    },
    "winRate": "51.7%",
    "popularity": "Rank A+",
    "image": "/assets/images/heroes/sora.png",
    "portrait": "/assets/images/heroes/sora.png",
    "themeColor": "#38bdf8",
    "voiceQuote": "The open horizon belongs only to those fearless enough to soar.",
    "loreQuote": "Turbulence is just the heartbeat of the storm.",
    "lore": "Aerial vanguard trained in Eruditio's advanced aeronautical academy. Equipped with pressurized antigravity thrusters and dual aero-blades, Sora patrol the stratospheric borders defending the Land of Dawn from skyward incursions.",
    "relationships": [
      {
        "name": "Fanny",
        "role": "Steel Cable Vanguard",
        "type": "Rival"
      },
      {
        "name": "Beatrix",
        "role": "Eruditio Weaponmaster",
        "type": "Ally"
      },
      {
        "name": "Claude",
        "role": "Thief King",
        "type": "Neutral"
      }
    ],
    "abilities": [
      {
        "id": "sora_p",
        "name": "Antigravity Drive",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "🕊️",
        "description": "Moving builds aero-momentum. At full charge, Sora gains airborne evasion and basic attacks lunge with bonus critical damage."
      },
      {
        "id": "sora_s1",
        "name": "Stratosphere Glide",
        "type": "Skill 1",
        "cooldown": "6.0s",
        "cost": "45 Energy",
        "icon": "💨",
        "description": "Fires thrusters to dash forward, slashing enemies with high-velocity blades."
      },
      {
        "id": "sora_s2",
        "name": "Cyclone Vortex",
        "type": "Skill 2",
        "cooldown": "8.5s",
        "cost": "55 Energy",
        "icon": "🌪️",
        "description": "Spins in an aerodynamic circle, reflecting ranged projectiles and disarming targets caught in the wind vortex."
      },
      {
        "id": "sora_ult",
        "name": "Supersonic Dive",
        "type": "Ultimate",
        "cooldown": "35.0s",
        "cost": "80 Energy",
        "icon": "🚀",
        "description": "Launches high into the clouds, then plummets downward like a meteor to smash the target area with seismic knockup."
      }
    ]
  },
  {
    "id": "marcel",
    "name": "Marcel",
    "title": "Chrono Alchemist",
    "role": "Support",
    "secondaryRole": "Fighter",
    "speciality": "Buff / Time Warp",
    "lane": "Roam / EXP",
    "faction": "Academy of Magic",
    "region": "Moniyan Empire",
    "difficulty": 55,
    "difficultyLabel": "Moderate",
    "attributes": {
      "offense": 65,
      "durability": 75,
      "abilityEffects": 85,
      "difficulty": 55
    },
    "winRate": "52.1%",
    "popularity": "Rank A",
    "image": "/assets/images/heroes/marcel.png",
    "portrait": "/assets/images/heroes/marcel.png",
    "themeColor": "#10b981",
    "voiceQuote": "Every second counts, especially the ones you can rewind.",
    "loreQuote": "Alchemy turns stone to gold, but chrono-science bends eternity.",
    "lore": "Brilliant young prodigy from the Moniyan Clockwork Academy. Marcel discovered how to synthesize chronotrons into combat alchemy vials, altering the flow of time on the battlefield to reverse injuries and accelerate comrades.",
    "relationships": [
      {
        "name": "Diggie",
        "role": "Time Keeper",
        "type": "Mentor"
      },
      {
        "name": "Harley",
        "role": "Mage Academy Rival",
        "type": "Rival"
      },
      {
        "name": "Tigreal",
        "role": "Knight Commander",
        "type": "Ally"
      }
    ],
    "abilities": [
      {
        "id": "marcel_p",
        "name": "Chrono Tincture",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "⏳",
        "description": "Skills leave chrono-residue on the ground. Allies stepping onto residue recover HP and gain cooldown acceleration."
      },
      {
        "id": "marcel_s1",
        "name": "Alchemical Flash",
        "type": "Skill 1",
        "cooldown": "5.0s",
        "cost": "50 Mana",
        "icon": "🧪",
        "description": "Hurls an unstable temporal elixir that shatters, blinding enemies and dealing ticking magic damage."
      },
      {
        "id": "marcel_s2",
        "name": "Temporal Tether",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "70 Mana",
        "icon": "⛓️",
        "description": "Links himself to an ally or enemy. Allies gain surging attack speed; enemies suffer escalating slows."
      },
      {
        "id": "marcel_ult",
        "name": "Chrono Rewind",
        "type": "Ultimate",
        "cooldown": "45.0s",
        "cost": "110 Mana",
        "icon": "⏱️",
        "description": "Marks an ally. If they take fatal damage within 4 seconds, time rewinds to restore 40% of their maximum HP and teleport them to Marcel's position."
      }
    ]
  }
];
