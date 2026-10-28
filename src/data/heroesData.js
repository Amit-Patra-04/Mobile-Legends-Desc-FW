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
    "image": "/assets/images/heroes/miya.png",
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
                "icon": "/assets/images/skills/miya_0.png",
                "description": "Each time Miya hits an enemy with a Basic Attack, her Attack Speed increases by 5%. Stacks up to 5 times. At full stacks, summons a Moonlight Shadow."
        },
        {
                "id": "miya_s1",
                "name": "Moon Arrow",
                "type": "Skill 1",
                "cooldown": "11.0s",
                "cost": "50-75 Mana",
                "icon": "/assets/images/skills/miya_1.png",
                "description": "Miya shoots two extra arrows with each Basic Attack, dealing Physical Damage to primary and nearby targets."
        },
        {
                "id": "miya_s2",
                "name": "Arrow of Eclipse",
                "type": "Skill 2",
                "cooldown": "8.0s",
                "cost": "80-130 Mana",
                "icon": "/assets/images/skills/miya_2.png",
                "description": "Miya launches an empowered arrow on the target area, dealing damage and immobilizing enemies within for 1.2s."
        },
        {
                "id": "miya_ult",
                "name": "Hidden Moonlight",
                "type": "Ultimate",
                "cooldown": "38.0s",
                "cost": "120 Mana",
                "icon": "/assets/images/skills/miya_3.png",
                "description": "Miya immediately cleanses all debuffs on herself, entering concealment and gaining 65% bonus Movement Speed."
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
    "image": "/assets/images/heroes/balmond.png",
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
        "id": "balmond_p",
        "name": "Bloodthirst",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/balmond_0.png",
        "description": "Balmond recovers 5% {{link"
      },
      {
        "id": "balmond_s1",
        "name": "Soul Lock",
        "type": "Skill 1",
        "cooldown": "8.0 / 7.4 / 6.8 / 6.2 / 5.6 / 5.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/balmond_1.png",
        "description": "Balmond charges to the target direction for a set distance or until he hits an enemy hero, dealing {{scale"
      },
      {
        "id": "balmond_s2",
        "name": "Cyclone Sweep",
        "type": "Skill 2",
        "cooldown": "6.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/balmond_2.png",
        "description": "Balmond gains 15% Movement Speed that decays over time and spins his axe for 3 seconds, dealing {{scale"
      },
      {
        "id": "balmond_ult",
        "name": "Lethal Counter",
        "type": "Ultimate",
        "cooldown": "34.0/29.0/24.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/balmond_3.png",
        "description": "Balmond unleashes a huge strike in the target direction (this skill can only be interrupted by Suppression), dealing {{scale"
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
    "image": "/assets/images/heroes/saber.png",
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
                "id": "saber_p",
                "name": "Enemy's Bane",
                "type": "Passive",
                "cooldown": "Passive",
                "cost": "No Cost",
                "icon": "/assets/images/skills/saber_0.png",
                "description": "Saber's attacks reduce target's Physical Defense by 3-8 per hit for 5s (stacks up to 5 times)."
        },
        {
                "id": "saber_s1",
                "name": "Orbiting Swords",
                "type": "Skill 1",
                "cooldown": "9.0s",
                "cost": "75-125 Mana",
                "icon": "/assets/images/skills/saber_1.png",
                "description": "Saber shoots out 5 orbiting swords, dealing damage on release and when hitting targets with basic attacks."
        },
        {
                "id": "saber_s2",
                "name": "Charge",
                "type": "Skill 2",
                "cooldown": "7.0s",
                "cost": "70-45 Mana",
                "icon": "/assets/images/skills/saber_2.png",
                "description": "Saber dashes in the target direction, dealing physical damage and empowering his next Basic Attack."
        },
        {
                "id": "saber_ult",
                "name": "Triple Sweep",
                "type": "Ultimate",
                "cooldown": "44.0-36.0s",
                "cost": "100-140 Mana",
                "icon": "/assets/images/skills/saber_3.png",
                "description": "Saber charges at an enemy hero, knocking them airborne and unleashing 3 rapid devastating strikes."
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
    "image": "/assets/images/heroes/alice.png",
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
        "id": "alice_p",
        "name": "Crimson Blood Banquet",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/alice_0.png",
        "description": "When Alice's skills hit, she gains 1 stack(s) of {{link"
      },
      {
        "id": "alice_s1",
        "name": "Crimson Gleam",
        "type": "Skill 1",
        "cooldown": "12.0 / 11.2 / 10.4 / 9.6 / 8.8 / 8.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/alice_1.png",
        "description": "Alice fires blood energy forward, dealing {{scale"
      },
      {
        "id": "alice_s2",
        "name": "Throne of Ruin",
        "type": "Skill 2",
        "cooldown": "60.0 / 55.0 / 50.0s",
        "cost": "55 Mana",
        "icon": "/assets/images/skills/alice_2.png",
        "description": "Alice surrounds herself with blood, gaining Control Immunity and 50% Damage Reduction while slowing herself by 50%. After 1.5 seconds, she descends with force, dealing {{scale"
      },
      {
        "id": "alice_ult",
        "name": "Blood Ode",
        "type": "Ultimate",
        "cooldown": "2.0s",
        "cost": "Continuous",
        "icon": "/assets/images/skills/alice_3.png",
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
    "image": "/assets/images/heroes/nana.png",
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
                "id": "nana_p",
                "name": "Molina's Gift",
                "type": "Passive",
                "cooldown": "150.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/nana_0.png",
                "description": "Upon taking fatal damage, Nana transforms into Molina for 2s, gaining invulnerability, slow immunity, and 70% Movement Speed."
        },
        {
                "id": "nana_s1",
                "name": "Magic Boomerang",
                "type": "Skill 1",
                "cooldown": "5.5-4.0s",
                "cost": "50-75 Mana",
                "icon": "/assets/images/skills/nana_1.png",
                "description": "Nana hurls her Magical Boomerang in the target direction, dealing Magic Damage to enemies on hit and return."
        },
        {
                "id": "nana_s2",
                "name": "Molina Smooch",
                "type": "Skill 2",
                "cooldown": "14.5-12.0s",
                "cost": "80-105 Mana",
                "icon": "/assets/images/skills/nana_2.png",
                "description": "Nana sends Molina to chase the nearest enemy hero, morphing them, slowing them, and reducing Magic Defense."
        },
        {
                "id": "nana_ult",
                "name": "Molina Blitz",
                "type": "Ultimate",
                "cooldown": "36.0-28.0s",
                "cost": "135-165 Mana",
                "icon": "/assets/images/skills/nana_3.png",
                "description": "Nana summons Molina to strike the target area 3 times, each dealing massive Magic Damage and slowing/stunning enemies."
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
    "image": "/assets/images/heroes/tigreal.png",
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
        "id": "tigreal_p",
        "name": "Fearless",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/tigreal_0.png",
        "description": "Tigreal gains a stack of {{B"
      },
      {
        "id": "tigreal_s1",
        "name": "Attack Wave",
        "type": "Skill 1",
        "cooldown": "7.0 / 6.4 / 5.8 / 5.2 / 4.6 / 4.0s",
        "cost": "45",
        "icon": "/assets/images/skills/tigreal_1.png",
        "description": "Tigreal smashes the ground with his hammer and sends a shockwave forward that erupts 3 times, each time dealing {{Scale"
      },
      {
        "id": "tigreal_s2",
        "name": "Sacred Hammer",
        "type": "Skill 2",
        "cooldown": "12.5 / 12.0 / 11.5 / 11.0 / 10.5 / 10.0s",
        "cost": "70",
        "icon": "/assets/images/skills/tigreal_2.png",
        "description": "Tigreal charges in a target direction, dealing {{Scale"
      },
      {
        "id": "tigreal_ult",
        "name": "Implosion",
        "type": "Ultimate",
        "cooldown": "45.0 / 41.0 / 37.0s",
        "cost": "120 / 140 / 160",
        "icon": "/assets/images/skills/tigreal_3.png",
        "description": "Tigreal unleashes the power of his hammer, stunning and pulling nearby enemies to him for 2 seconds while dealing {{Scale"
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
    "image": "/assets/images/heroes/alucard.png",
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
        "id": "alucard_p",
        "name": "Pursuit",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/alucard_0.png",
        "description": "After each skill cast, Alucard's next Basic Attack allows him to dash to the target's location and deal {{Scale"
      },
      {
        "id": "alucard_s1",
        "name": "Groundsplitter",
        "type": "Skill 1",
        "cooldown": "8.5 / 8.1 / 7.7 / 7.3 / 6.9 / 6.5s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/alucard_1.png",
        "description": "Alucard [[Blink"
      },
      {
        "id": "alucard_s2",
        "name": "Whirling Smash",
        "type": "Skill 2",
        "cooldown": "6.0 / 5.6 / 5.2 / 4.8 / 4.4 / 4.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/alucard_2.png",
        "description": "Alucard launches a whirling slash, dealing {{Scale"
      },
      {
        "id": "alucard_ult",
        "name": "Fission Wave",
        "type": "Ultimate",
        "cooldown": "40.0 / 35.0 / 30.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/alucard_3.png",
        "description": "{{B"
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
        "id": "karina_p",
        "name": "Shadow Combo",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/karina_0.png",
        "description": "Karina's third consecutive attack on the same enemy deals extra {{b"
      },
      {
        "id": "karina_s1",
        "name": "Dance of Blades",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "icon": "/assets/images/skills/karina_1.png",
        "description": "Karina enters the {{b"
      },
      {
        "id": "karina_s2",
        "name": "Dance of Death",
        "type": "Skill 2",
        "cooldown": "6.0 / 5.7 / 5.4 / 5.1 / 4.8 / 4.5s",
        "cost": "60 / 68 / 76 / 84 / 92 / 100",
        "icon": "/assets/images/skills/karina_2.png",
        "description": "Karina launces a spinning slash, dealing {{Scale"
      },
      {
        "id": "karina_ult",
        "name": "Shadow Assault",
        "type": "Ultimate",
        "cooldown": "34.0 / 30.0 / 26.0s",
        "cost": "100 / 120 / 140",
        "icon": "/assets/images/skills/karina_3.png",
        "description": "Karina dashes to the target enemy hero, dealing {{Scale"
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
        "id": "akai_p",
        "name": "Tai Chi",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/akai_0.png",
        "description": "Akai gains a {{Scale"
      },
      {
        "id": "akai_s1",
        "name": "Headbutt",
        "type": "Skill 1",
        "cooldown": "13.0 / 12.4 / 11.8 / 11.2 / 10.6 / 10.0s",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "icon": "/assets/images/skills/akai_1.png",
        "description": "Akai [[blink"
      },
      {
        "id": "akai_s2",
        "name": "Body Slam",
        "type": "Skill 2",
        "cooldown": "7.0 / 6.7 / 6.4 / 6.1 / 5.8 / 5.5s",
        "cost": "70 / 75 / 80 / 85 / 90 / 95",
        "icon": "/assets/images/skills/akai_2.png",
        "description": "Akai smashes the ground with his body, dealing {{Scale"
      },
      {
        "id": "akai_ult",
        "name": "Heavy Spin",
        "type": "Ultimate",
        "cooldown": "40.0 / 36.0 / 32.0s",
        "cost": "120",
        "icon": "/assets/images/skills/akai_3.png",
        "description": "Akai removes all debuffs on him and spins for 4 seconds, gaining Slow Immunity while continuously dealing {{Scale"
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
    "image": "/assets/images/heroes/franco.png",
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
                "id": "franco_p",
                "name": "Wasteland Force",
                "type": "Passive",
                "cooldown": "Passive",
                "cost": "No Cost",
                "icon": "/assets/images/skills/franco_0.png",
                "description": "If Franco takes no damage within 5s, he gains 10% Movement Speed and recovers 1% max HP per second while stacking Wasteland Force."
        },
        {
                "id": "franco_s1",
                "name": "Iron Hook",
                "type": "Skill 1",
                "cooldown": "15.0-11.0s",
                "cost": "135-160 Mana",
                "icon": "/assets/images/skills/franco_1.png",
                "description": "Franco launches an iron hook in the target direction, snagging the first enemy unit hit and pulling them to himself."
        },
        {
                "id": "franco_s2",
                "name": "Fury Shock",
                "type": "Skill 2",
                "cooldown": "7.0-4.5s",
                "cost": "40-65 Mana",
                "icon": "/assets/images/skills/franco_2.png",
                "description": "Franco lashes out, slowing nearby enemies and dealing Physical Damage based on his max HP."
        },
        {
                "id": "franco_ult",
                "name": "Bloody Hunt",
                "type": "Ultimate",
                "cooldown": "62.0-45.0s",
                "cost": "110-140 Mana",
                "icon": "/assets/images/skills/franco_3.png",
                "description": "Franco suppresses the target enemy hero for 1.8 seconds and strikes them 6 times over the duration."
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
    "image": "/assets/images/heroes/fanny.png",
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
        "id": "fanny_p",
        "name": "Air Superiority",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/fanny_0.png",
        "description": "During fight, Fanny deals 10%&ndash;20% extra damage to enemies hit (scales with flying speed [''speed unknown''] ) and applies a stack of {{B"
      },
      {
        "id": "fanny_s1",
        "name": "Tornado Strike",
        "type": "Skill 1",
        "cooldown": "3.5 / 3.3 / 3.1 / 2.9 / 2.7 / 2.5s",
        "cost": "25 Energy",
        "icon": "/assets/images/skills/fanny_1.png",
        "description": "Fanny whirls her blades, dealing {{Scale"
      },
      {
        "id": "fanny_s2",
        "name": "Steel Cable",
        "type": "Skill 2",
        "cooldown": "0.0s",
        "cost": "18 Energy",
        "icon": "/assets/images/skills/fanny_2.png",
        "description": "Fanny shoots a cable in the target direction that pulls her to the first obstacle hit. She can cast this skill again within 2 seconds until her energy runs out. Each successive cast reduces the skill's energy cost by 2. Fanny automatically casts {{ai"
      },
      {
        "id": "fanny_ult",
        "name": "Cut Throat",
        "type": "Ultimate",
        "cooldown": "35.0 / 30.0 / 25.0s",
        "cost": "30 Energy",
        "icon": "/assets/images/skills/fanny_3.png",
        "description": "Fanny [[blink"
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
    "image": "/assets/images/heroes/layla.png",
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
        "id": "layla_p",
        "name": "Malefic Gun",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/layla_0.png",
        "description": "Layla deals increased damage to enemies farther away from her (starting at 100% and increasing to 130% at 6 units away). This does not include Turrets."
      },
      {
        "id": "layla_s1",
        "name": "Malefic Bomb",
        "type": "Skill 1",
        "cooldown": "6.0 / 5.6 / 5.2 / 4.8 / 4.4 / 4.0s",
        "cost": "40 / 45 / 50 / 55 / 60 / 65",
        "icon": "/assets/images/skills/layla_1.png",
        "description": "Layla fires a Malefic Bomb in the target direction, dealing {{scale"
      },
      {
        "id": "layla_s2",
        "name": "Void Projectile",
        "type": "Skill 2",
        "cooldown": "7.5 / 7.3 / 7.1 / 6.9 / 6.7 / 6.5s",
        "cost": "65 / 70 / 75 / 80 / 85 / 90",
        "icon": "/assets/images/skills/layla_2.png",
        "description": "Layla fires an orb of Malefic Energy that explodes on hit, dealing {{scale"
      },
      {
        "id": "layla_ult",
        "name": "Destruction Rush",
        "type": "Ultimate",
        "cooldown": "37.0 / 32.0 / 27.0s",
        "cost": "130 / 150 / 170",
        "icon": "/assets/images/skills/layla_3.png",
        "description": "Layla fires a blast of Malefic Energy in the target direction, dealing {{scale"
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
    "image": "/assets/images/heroes/zilong.png",
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
        "id": "zilong_p",
        "name": "Dragon Flurry",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/zilong_0.png",
        "description": "After dealing damage 3 time(s) with {{ii"
      },
      {
        "id": "zilong_s1",
        "name": "Spear Flip",
        "type": "Skill 1",
        "cooldown": "12.0 / 11.5 / 11.0 / 10.5 / 10.0 / 9.5s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/zilong_1.png",
        "description": "Zilong flings the target enemy over his head, dealing {{Scale"
      },
      {
        "id": "zilong_s2",
        "name": "Spear Strike",
        "type": "Skill 2",
        "cooldown": "12.0 / 11.4 / 10.8 / 10.2 / 9.6 / 9.0s",
        "cost": "40",
        "icon": "/assets/images/skills/zilong_2.png",
        "description": "Zilong lunges at the target enemy, dealing {{Scale"
      },
      {
        "id": "zilong_ult",
        "name": "Supreme Warrior",
        "type": "Ultimate",
        "cooldown": "35.0 / 31.0 / 27.0s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/zilong_3.png",
        "description": "Zilong removes all slow Effects on himself and gains 40% Movement Speed, 35%&ndash;55% Attack Speed, and Slow Immunity for 7.5 seconds. For the duration, he can trigger {{link"
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
    "image": "/assets/images/heroes/kagura.png",
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
                "id": "kagura_p",
                "name": "Yin Yang Gathering",
                "type": "Passive",
                "cooldown": "4.5s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/kagura_0.png",
                "description": "When Kagura retrieves the Seimei Umbrella, she gains a shield, stuns nearby enemies, and slows them."
        },
        {
                "id": "kagura_s1",
                "name": "Seimei Umbrella Open",
                "type": "Skill 1",
                "cooldown": "5.5-4.0s",
                "cost": "60-85 Mana",
                "icon": "/assets/images/skills/kagura_1.png",
                "description": "Kagura moves the Seimei Umbrella to target location, dealing Magic Damage and slowing enemies hit."
        },
        {
                "id": "kagura_s2",
                "name": "Rasho Umbrella Flee",
                "type": "Skill 2",
                "cooldown": "12.0-9.0s",
                "cost": "80-105 Mana",
                "icon": "/assets/images/skills/kagura_2.png",
                "description": "Kagura removes all debuffs and dashes in target direction, leaving the umbrella behind."
        },
        {
                "id": "kagura_ult",
                "name": "Yin Yang Overturn",
                "type": "Ultimate",
                "cooldown": "40.0-32.0s",
                "cost": "100-140 Mana",
                "icon": "/assets/images/skills/kagura_3.png",
                "description": "Kagura knocks back surrounding enemies and deals Magic Damage."
        },
        {
                "id": "kagura_s1_no",
                "name": "Seimei Umbrella Open (Shift)",
                "type": "Skill 1 (No Umbrella)",
                "cooldown": "5.5-4.0s",
                "cost": "60-85 Mana",
                "icon": "/assets/images/skills/kagura_4.png",
                "description": "Kagura commands the deployed umbrella to fly to a new target area, dealing damage and slowing enemies."
        },
        {
                "id": "kagura_s2_no",
                "name": "Rasho Umbrella Flee (Recall)",
                "type": "Skill 2 (No Umbrella)",
                "cooldown": "12.0-9.0s",
                "cost": "80-105 Mana",
                "icon": "/assets/images/skills/kagura_5.png",
                "description": "Kagura teleports directly to the Seimei Umbrella and picks it up, stunning and dealing damage to enemies hit."
        },
        {
                "id": "kagura_ult_no",
                "name": "Yin Yang Overturn (Pull)",
                "type": "Ultimate (No Umbrella)",
                "cooldown": "40.0-32.0s",
                "cost": "100-140 Mana",
                "icon": "/assets/images/skills/kagura_6.png",
                "description": "The umbrella forms an arcane tether, slowing tethered enemies and pulling them to its center after 1.5s."
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
    "image": "/assets/images/heroes/chou.png",
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
        "id": "chou_p",
        "name": "Only Fast",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/chou_0.png",
        "description": "After travelling 5 units, Chou's deals 180% damage on his next Basic Attack (cannot Crit), briefly slows the target by 80% and reduces their Physical Defense by 10(+1*Hero Level) for 3s (up to 2 stacks)."
      },
      {
        "id": "chou_s1",
        "name": "Jeet Kune Do",
        "type": "Skill 1",
        "cooldown": "9.5 / 9.2 / 8.9 / 8.6 / 8.3 / 8.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/chou_1.png",
        "description": "Chou strikes in the target direction, dealing {{scale"
      },
      {
        "id": "chou_s2",
        "name": "Shunpo",
        "type": "Skill 2",
        "cooldown": "5.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/chou_2.png",
        "description": "Chou charges in the target direction gaining Control Immunity and a {{scale"
      },
      {
        "id": "chou_ult",
        "name": "The Way of Dragon",
        "type": "Ultimate",
        "cooldown": "34.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/chou_3.png",
        "description": "Chou strikes the target enemy hero with a roundhouse kick at the target enemy hero, dealing them {{scale"
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
    "image": "/assets/images/heroes/gusion.png",
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
        "id": "gusion_p",
        "name": "Dagger Specialist",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/gusion_0.png",
        "description": "Each skill cast adds a rune to Gusion's dagger (stacks up to 4 times). Each stack enhances Gusion's next {{ai"
      },
      {
        "id": "gusion_s1",
        "name": "Sword Spike",
        "type": "Skill 1",
        "cooldown": "9.0 / 8.4 / 7.8 / 7.2 / 6.6 / 6.0s",
        "cost": "70",
        "icon": "/assets/images/skills/gusion_1.png",
        "description": "Gusion throws a dagger in the target direction, dealing {{Scale"
      },
      {
        "id": "gusion_s2",
        "name": "Shadowblade Slaughter",
        "type": "Skill 2",
        "cooldown": "11.0 / 10.6 / 10.2 / 9.8 / 9.4 / 9.0s",
        "cost": "65 / 75 / 85 / 95 / 105 / 115",
        "icon": "/assets/images/skills/gusion_2.png",
        "description": "Gusion throws a volley of [five] daggers in the target direction, each dealing {{Scale"
      },
      {
        "id": "gusion_ult",
        "name": "Incandescence",
        "type": "Ultimate",
        "cooldown": "28.0 / 24.0 / 20.0s",
        "cost": "100 / 50 / 0",
        "icon": "/assets/images/skills/gusion_3.png",
        "description": "Gusion dashes to the target location, resetting the cooldown of {{ai"
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
    "image": "/assets/images/heroes/hayabusa.png",
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
        "id": "hayabusa_p",
        "name": "Ninjutsu: Trace of Shadow",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/hayabusa_0.png",
        "description": "Hayabusa's attacks apply a stack of {{B"
      },
      {
        "id": "hayabusa_s1",
        "name": "Ninjutsu: Phantom Shuriken",
        "type": "Skill 1",
        "cooldown": "4.0s",
        "cost": "30",
        "icon": "/assets/images/skills/hayabusa_1.png",
        "description": "Hayabusa throws three returning shurikens in the target direction, each dealing {{scale"
      },
      {
        "id": "hayabusa_s2",
        "name": "Ninjutsu: Quad Shadow",
        "type": "Skill 2",
        "cooldown": "20.0 / 19.2 / 18.4 / 17.6 / 16.8 / 16.0s",
        "cost": "25",
        "icon": "/assets/images/skills/hayabusa_2.png",
        "description": "Hayabusa dashes in the target direction and releases four phantoms that travel in separate directions. The phantoms will remain at the end of their paths or attach themselves to the first enemy hero hit, dealing {{scale"
      },
      {
        "id": "hayabusa_ult",
        "name": "Ougi: Shadow Kill",
        "type": "Ultimate",
        "cooldown": "50.0s",
        "cost": "40 Energy",
        "icon": "/assets/images/skills/hayabusa_3.png",
        "description": "Hayabusa blends into the shadows and launches 6 single-target attacks on enemies in the area, each dealing {{scale"
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
    "image": "/assets/images/heroes/lancelot.png",
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
        "id": "lancelot_p",
        "name": "Soul Cutter",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/lancelot_0.png",
        "description": "Each time Lancelot [ [[Blink and charge"
      },
      {
        "id": "lancelot_s1",
        "name": "Puncture",
        "type": "Skill 1",
        "cooldown": "14.0 / 13.6 / 13.2 / 12.8 / 12.4 / 12.0s",
        "cost": "50 / 48 / 46 / 44 / 42 / 40",
        "icon": "/assets/images/skills/lancelot_1.png",
        "description": "Lancelot [[Blink"
      },
      {
        "id": "lancelot_s2",
        "name": "Thorned Rose",
        "type": "Skill 2",
        "cooldown": "10 / 9.4 / 8.8 / 8.2 / 7.6 / 7.0s",
        "cost": "120 / 112 / 104 / 96 / 88 / 80",
        "icon": "/assets/images/skills/lancelot_2.png",
        "description": "Lancelot strikes in the target direction 3 times, each time dealing {{scale"
      },
      {
        "id": "lancelot_ult",
        "name": "Phantom Execution",
        "type": "Ultimate",
        "cooldown": "27.0 / 24.0 / 21.0s",
        "cost": "100 / 125 / 150",
        "icon": "/assets/images/skills/lancelot_3.png",
        "description": "After a short period [''how long?''] of charging, Lancelot [[Blink"
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
    "image": "/assets/images/heroes/granger.png",
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
        "id": "granger_p",
        "name": "Capriccio",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/granger_0.png",
        "description": "Granger's unique Demon Hunting {{link"
      },
      {
        "id": "granger_s1",
        "name": "Rhapsody",
        "type": "Skill 1",
        "cooldown": "0.3s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/granger_1.png",
        "description": "Granger rapidly fires 6 shot(s) with his {{link"
      },
      {
        "id": "granger_s2",
        "name": "Rondo",
        "type": "Skill 2",
        "cooldown": "12.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/granger_2.png",
        "description": "Granger uses his Demon Hunter agility to dash in the target direction, instantly restoring 15%-25% Energy for his {{link"
      },
      {
        "id": "granger_ult",
        "name": "Death Sonata",
        "type": "Ultimate",
        "cooldown": "0.6s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/granger_3.png",
        "description": "Granger fires his {{link"
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
    "image": "/assets/images/heroes/beatrix.png",
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
                "id": "beatrix_p",
                "name": "Mechanical Genius",
                "type": "Passive",
                "cooldown": "Passive",
                "cost": "No Cost",
                "icon": "/assets/images/skills/beatrix_0.png",
                "description": "Beatrix wields 4 advanced weapons: Renner (Sniper), Bennett (Grenade), Wesker (Shotgun), and Nibiru (SMG)."
        },
        {
                "id": "beatrix_s1",
                "name": "Masterful Gunner",
                "type": "Skill 1",
                "cooldown": "0.6s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/beatrix_1.png",
                "description": "Beatrix swaps between her primary and secondary equipped weapons."
        },
        {
                "id": "beatrix_s2",
                "name": "Tactical Reposition",
                "type": "Skill 2",
                "cooldown": "8.0-6.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/beatrix_2.png",
                "description": "Beatrix dashes in target direction, reloading her current weapon instantly."
        },
        {
                "id": "beatrix_ult_renner",
                "name": "Renner's Apathy",
                "type": "Ultimate (Renner)",
                "cooldown": "32.0-24.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/beatrix_3.png",
                "description": "Beatrix aims Renner calmly and snipes a devastating ultra-long range shot."
        },
        {
                "id": "beatrix_ult_bennett",
                "name": "Bennett's Rage",
                "type": "Ultimate (Bennett)",
                "cooldown": "40.0-32.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/beatrix_4.png",
                "description": "Beatrix bombards the target area with 5 carpet airstrikes, slowing and damaging enemies."
        },
        {
                "id": "beatrix_ult_wesker",
                "name": "Wesker's Elation",
                "type": "Ultimate (Wesker)",
                "cooldown": "40.0-32.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/beatrix_5.png",
                "description": "Beatrix fires an overwhelming spread of shotgun shells in front, shredding close-range targets."
        },
        {
                "id": "beatrix_ult_nibiru",
                "name": "Nibiru's Passion",
                "type": "Ultimate (Nibiru)",
                "cooldown": "40.0-32.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/beatrix_6.png",
                "description": "Beatrix pulls the trigger to unleash a volley of 6 rapid-fire SMG shots over an area."
        },
        {
                "id": "beatrix_s4",
                "name": "Need Backup",
                "type": "Special",
                "cooldown": "3.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/beatrix_7.png",
                "description": "Beatrix can switch her secondary weapon from her weapon arsenal while out of combat."
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
    "image": "/assets/images/heroes/yuzhong.png",
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
                "id": "yuzhong_p",
                "name": "Cursing Touch",
                "type": "Passive",
                "cooldown": "Passive",
                "cost": "No Cost",
                "icon": "/assets/images/skills/yuzhong_0.png",
                "description": "Yu Zhong applies Sha Residue with attacks. At max stacks, eruptions restore HP and grant Movement Speed."
        },
        {
                "id": "yuzhong_s1",
                "name": "Dragon Tail",
                "type": "Skill 1",
                "cooldown": "7.0-5.5s",
                "cost": "50-75 Sha",
                "icon": "/assets/images/skills/yuzhong_1.png",
                "description": "Yu Zhong infuses his power into his cloak, dealing physical damage to nearby enemies with extra outer edge damage."
        },
        {
                "id": "yuzhong_s2",
                "name": "Soul Grip",
                "type": "Skill 2",
                "cooldown": "12.0-8.0s",
                "cost": "60-85 Sha",
                "icon": "/assets/images/skills/yuzhong_2.png",
                "description": "Yu Zhong unleashes Dragon Soul forward, slowing targets hit and empowering his next Basic Attack."
        },
        {
                "id": "yuzhong_s3",
                "name": "Furious Dive",
                "type": "Skill 3",
                "cooldown": "10.5-8.5s",
                "cost": "60-85 Sha",
                "icon": "/assets/images/skills/yuzhong_3.png",
                "description": "Yu Zhong leaps towards the target area, knocking enemies airborne after a brief delay."
        },
        {
                "id": "yuzhong_ult",
                "name": "Black Dragon Form",
                "type": "Ultimate",
                "cooldown": "85.0-65.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/yuzhong_4.png",
                "description": "Yu Zhong transforms into the Black Dragon, gaining crowd control immunity, terrain traversal, and entering Dragonoid form."
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
    "image": "/assets/images/heroes/ling.png",
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
        "id": "ling_p",
        "name": "Cloud Walker",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/ling_0.png",
        "description": "Ling's superb Lightness Skill helps him leap among walls. When resting on the wall, He gains 4 [[Energy"
      },
      {
        "id": "ling_s1",
        "name": "Finch Poise",
        "type": "Skill 1",
        "cooldown": "20.0s",
        "cost": "35 Lightness",
        "icon": "/assets/images/skills/ling_1.png",
        "description": "{{b"
      },
      {
        "id": "ling_s2",
        "name": "Defiant Sword",
        "type": "Skill 2",
        "cooldown": "2.5s",
        "cost": "40 Lightness",
        "icon": "/assets/images/skills/ling_2.png",
        "description": "Ling charges in a designated direction and stabs the nearby enemies at his destination, dealing {{Scale"
      },
      {
        "id": "ling_ult",
        "name": "Tempest of Blades",
        "type": "Ultimate",
        "cooldown": "52.0 / 49.0 / 46.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/ling_3.png",
        "description": "Ling leaps into the air, becoming invincible and gaining 10% extra Movement Speed for 1.5 seconds. He can move freely when in the air. He then lands on the ground, dealing {{Scale"
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
    "image": "/assets/images/heroes/claude.png",
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
        "id": "claude_p",
        "name": "Battle Side-by-side",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/claude_0.png",
        "description": "{{AVC1"
      },
      {
        "id": "claude_s1",
        "name": "Art of Thievery",
        "type": "Skill 1",
        "cooldown": "5.0s",
        "cost": "65 / 70 / 75 / 80 / 85 / 90",
        "icon": "/assets/images/skills/claude_1.png",
        "description": "Claude attacks enemies in a fan-shaped area ahead, dealing {{Scale"
      },
      {
        "id": "claude_s2",
        "name": "Battle Mirror Image",
        "type": "Skill 2",
        "cooldown": "11.0 / 10.5 / 10.0 / 9.5 / 9.0 / 8.5s",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "icon": "/assets/images/skills/claude_2.png",
        "description": "Claude leaves a mirror image of Dexter at a designated location. Dexter’s mirror image automatically attacks enemies. Lasts 5.5 seconds. Claude can activate this skill again to switch places with the mirror image. Dexter's {{Ai"
      },
      {
        "id": "claude_ult",
        "name": "Blazing Duet",
        "type": "Ultimate",
        "cooldown": "50.0 / 45.0 / 40.0s",
        "cost": "150 / 175 / 200",
        "icon": "/assets/images/skills/claude_3.png",
        "description": "Claude and Dexter rapidly fire at the enemies nearby over 3 seconds, dealing {{Scale"
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
    "image": "/assets/images/heroes/lesley.png",
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
        "id": "lesley_p",
        "name": "Lethal Shot",
        "type": "Passive",
        "cooldown": "5.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/lesley_0.png",
        "description": "If Lesley doesn't take damage for 5 seconds, her next Basic Attack gains extra range and 50% [[Critical Chance"
      },
      {
        "id": "lesley_s1",
        "name": "Master of Camouflage",
        "type": "Skill 1",
        "cooldown": "5.0 / 4.4 / 3.8 / 3.2 / 2.6 / 2.0s",
        "cost": "30 Energy",
        "icon": "/assets/images/skills/lesley_1.png",
        "description": "Lesley enters the Camouflage state, gaining double [[Energy"
      },
      {
        "id": "lesley_s2",
        "name": "Tactical Grenade",
        "type": "Skill 2",
        "cooldown": "10.0 / 9.4 / 8.8 / 8.2 / 7.6 / 7.0s",
        "cost": "40 Energy",
        "icon": "/assets/images/skills/lesley_2.png",
        "description": "Lesley throws a tactical grenade in the target direction while slightly [[Blink"
      },
      {
        "id": "lesley_ult",
        "name": "Ultimate Snipe",
        "type": "Ultimate",
        "cooldown": "40.0s",
        "cost": "0",
        "icon": "/assets/images/skills/lesley_3.png",
        "description": "Lesley [gains vision to nearby enemies and can lock] onto the target enemy hero and fires 4 {{B"
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
        "name": "Mecha Legs",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/bruno_0.png",
        "description": "Bruno gains 2.5% extra [[Critical chance"
      },
      {
        "id": "bruno_s1",
        "name": "Volley Shot",
        "type": "Skill 1",
        "cooldown": "10.0 / 9.5 / 9.0 / 8.5 / 8.0 / 7.5s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/bruno_1.png",
        "description": "Bruno kicks a Powerball on his next Basic Attack, dealing {{scale"
      },
      {
        "id": "bruno_s2",
        "name": "Slide",
        "type": "Skill 2",
        "cooldown": "{{sl",
        "cost": "90",
        "icon": "/assets/images/skills/bruno_2.png",
        "description": "Bruno slides in the target direction, briefly stunning enemies along the way for 0.1 seconds, and gaining a {{link"
      },
      {
        "id": "bruno_ult",
        "name": "Worldie",
        "type": "Ultimate",
        "cooldown": "38.0 / 33.0 / 28.0s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/bruno_3.png",
        "description": "Bruno kicks an Energy Ball at a target hero, dealing {{scale"
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
        "name": "Double Shot",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/clint_0.png",
        "description": "After each skill cast, Clint's next Basic Attack within 4 seconds penetrates a line of enemies, dealing {{scale"
      },
      {
        "id": "clint_s1",
        "name": "Quick Draw",
        "type": "Skill 1",
        "cooldown": "8.0 / 7.4 / 6.8 / 6.2 / 5.6 / 5.0s",
        "cost": "50",
        "icon": "/assets/images/skills/clint_1.png",
        "description": "Clint fires 5 bullets in quick succession in the target direction, each dealing {{scale"
      },
      {
        "id": "clint_s2",
        "name": "Trapping Recoil",
        "type": "Skill 2",
        "cooldown": "10.0 / 9.6 / 9.2 / 8.8 / 8.4 / 8.0s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/clint_2.png",
        "description": "Clint shoots a trap net in the target direction, [[Blink"
      },
      {
        "id": "clint_ult",
        "name": "Grenade Bombardment",
        "type": "Ultimate",
        "cooldown": "1.5 / 1.0 / 0.5s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/clint_3.png",
        "description": "Clint launches a grenade in the target direction that explodes in the first enemy hit, dealing {{scale"
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
        "name": "Divine Resurrection",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/rafaela_0.png",
        "description": "At regular intervals, Rafaela can use a special skill to instantly resurrect a fallen allied hero after a brief channeling. The resurrected allied hero will respawn at the base and is granted increased Movement Speed. This skill's cooldown is determined by both its base cooldown and the remaining respawn time of the revived hero. It is not affected by Cooldown Reduction."
      },
      {
        "id": "rafaela_s1",
        "name": "Light of Retribution",
        "type": "Skill 1",
        "cooldown": "4.0s",
        "cost": "70 / 85 / 100 / 115 / 130 / 145",
        "icon": "/assets/images/skills/rafaela_1.png",
        "description": "Rafaela strikes the three nearest enemies With Light of Retribution, dealing them {{scale"
      },
      {
        "id": "rafaela_s2",
        "name": "Holy Healing",
        "type": "Skill 2",
        "cooldown": "10.5 / 10.1 / 9.7 / 9.3 / 8.9 / 8.5s",
        "cost": "100 / 110 / 120 / 130 / 140 / 150",
        "icon": "/assets/images/skills/rafaela_2.png",
        "description": "Rafaela calls upon {{B"
      },
      {
        "id": "rafaela_ult",
        "name": "Holy Baptism",
        "type": "Ultimate",
        "cooldown": "42.0 / 38.0 / 34.0s",
        "cost": "150 / 175 / 200",
        "icon": "/assets/images/skills/rafaela_3.png",
        "description": "Rafaela unleashes the true power of {{B"
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
        "name": "Superconductor",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/eudora_0.png",
        "description": "Eudora's skills inflict {{ai"
      },
      {
        "id": "eudora_s1",
        "name": "Forked Lightning",
        "type": "Skill 1",
        "cooldown": "7.0 / 6.6 / 6.2 / 5.8 / 5.4 / 5.0s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/eudora_1.png",
        "description": "Eudora casts Forked Lightning in a fan-shaped area, dealing {{scale"
      },
      {
        "id": "eudora_s2",
        "name": "Ball Lightning",
        "type": "Skill 2",
        "cooldown": "11.0 / 10.5 / 10.0 / 9.5 / 9.0 / 8.5s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/eudora_2.png",
        "description": "Eudora hurls an orb of lightning at the target enemy, [[Defense Reduction"
      },
      {
        "id": "eudora_ult",
        "name": "Thunder's Wrath",
        "type": "Ultimate",
        "cooldown": "32.0 / 29.0 / 26.0s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/eudora_3.png",
        "description": "Eudora calls down a blast of lightning on the target area, dealing {{scale"
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
        "name": "Rage Incarnate",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/minotaur_0.png",
        "description": "When Minotaur uses a skill, he will gain {{AVC1"
      },
      {
        "id": "minotaur_s1",
        "name": "Despair Stomp",
        "type": "Skill 1",
        "cooldown": "12.0/ 11.5 / 11.0 / 10.5 / 10.0 / 9.5s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/minotaur_1.png",
        "description": "Minotaur [[Blink"
      },
      {
        "id": "minotaur_s2",
        "name": "Motivation Roar",
        "type": "Skill 2",
        "cooldown": "10.0 / 9.5 / 9.0 / 8.5 / 8.0 / 7.5s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/minotaur_2.png",
        "description": "Minotaur motivates himself and nearby most wounded hero, restoring {{scale"
      },
      {
        "id": "minotaur_ult",
        "name": "Minoan Fury",
        "type": "Ultimate",
        "cooldown": "60.0 / 55.0 / 50.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/minotaur_3.png",
        "description": "Minotaur enters {{b"
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
                "name": "Noumenon Energy Core",
                "type": "Passive",
                "cooldown": "Passive",
                "cost": "No Cost",
                "icon": "/assets/images/skills/lolita_0.png",
                "description": "Lolita periodically grants shields to herself and nearby allied heroes."
        },
        {
                "id": "lolita_s1",
                "name": "Power Charge",
                "type": "Skill 1",
                "cooldown": "10.0-7.5s",
                "cost": "70-95 Mana",
                "icon": "/assets/images/skills/lolita_1.png",
                "description": "Lolita dashes in target direction, empowering her next basic attack into a long-range stun hammer smash."
        },
        {
                "id": "lolita_s2",
                "name": "Guardian's Reflection",
                "type": "Skill 2",
                "cooldown": "15.0-12.5s",
                "cost": "80-110 Mana",
                "icon": "/assets/images/skills/lolita_2.png",
                "description": "Lolita raises her shield to block and reflect incoming ranged projectile attacks back at enemies."
        },
        {
                "id": "lolita_ult",
                "name": "Noumenon Blast",
                "type": "Ultimate",
                "cooldown": "48.0-38.0s",
                "cost": "120-160 Mana",
                "icon": "/assets/images/skills/lolita_3.png",
                "description": "Lolita channels a colossal cone shield charge, slowing enemies before slamming down for a massive AoE stun."
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
        "name": "Power of Einherjar",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/freya_0.png",
        "description": "Freya gains 1 {{link"
      },
      {
        "id": "freya_s1",
        "name": "Leap of Faith",
        "type": "Skill 1",
        "cooldown": "8.0 / 7.6 / 7.2 / 6.8 / 6.4 / 6.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/freya_1.png",
        "description": "Freya [[blink"
      },
      {
        "id": "freya_s2",
        "name": "Valkyrie Slash",
        "type": "Skill 2",
        "cooldown": "0.4s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/freya_2.png",
        "description": "Freya charges forward and slashes, dealing {{scale"
      },
      {
        "id": "freya_ult",
        "name": "Valkyrie Descent",
        "type": "Ultimate",
        "cooldown": "34.0 / 30.0 / 26.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/freya_3.png",
        "description": "Freya selects a target area and [[blink"
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
        "name": "Mystic Favor",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/gord_0.png",
        "description": "After Gord hits an enemy 4 times with Basic Attacks or skills within a short period of time, the next attack on the target will deal an additional {{Scale"
      },
      {
        "id": "gord_s1",
        "name": "Mystic Projectile",
        "type": "Skill 1",
        "cooldown": "10.0 / 9.5 / 9.0 / 8.5 / 8.0 / 7.5s",
        "cost": "90 / 100 / 110 / 120 / 130 / 140",
        "icon": "/assets/images/skills/gord_1.png",
        "description": "Gord conjures a Mystic Orb that bounces in the target direction and explodes on the first enemy hit, dealing {{scale"
      },
      {
        "id": "gord_s2",
        "name": "Mystic Injunction",
        "type": "Skill 2",
        "cooldown": "8.0 / 7.6 / 7.2 / 6.8 / 6.4 / 6.0s",
        "cost": "55 / 65 / 75 / 85 / 95 / 105",
        "icon": "/assets/images/skills/gord_2.png",
        "description": "Gord create an energy field in the target area, dealing {{scale"
      },
      {
        "id": "gord_ult",
        "name": "Mystic Gush",
        "type": "Ultimate",
        "cooldown": "44.0 / 40.0 / 36.0s",
        "cost": "150 / 170 / 190",
        "icon": "/assets/images/skills/gord_3.png",
        "description": "Gord unleashes an energy beam in the target direction, dealing {{scale"
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
        "name": "Assassin Instinct",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/natalia_0.png",
        "description": "If Natalia stays in a bush without taking damage for 1 second, she will enter Camouflage state and gain 15% Movement Speed. In this state, Natalia's next Basic Attack will teleport her behind her target and deal {{scale"
      },
      {
        "id": "natalia_s1",
        "name": "Claw Dash",
        "type": "Skill 1",
        "cooldown": "10.0 / 9.2 / 8.4 / 7.6 / 6.8 / 6.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/natalia_1.png",
        "description": "Natalia dashes in the target direction, dealing {{scale"
      },
      {
        "id": "natalia_s2",
        "name": "Smoke Bomb",
        "type": "Skill 2",
        "cooldown": "12.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/natalia_2.png",
        "description": "Natalia releases a Smoke Bomb at her location, slowing enemies within by 25%&ndash;75% while Natalia becomes immune to enemy Basic Attacks for 4 seconds."
      },
      {
        "id": "natalia_ult",
        "name": "The Hunt",
        "type": "Ultimate",
        "cooldown": "3.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/natalia_3.png",
        "description": "{{B"
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
        "name": "Simian God",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/sun_0.png",
        "description": "Enemies hit by Sun and his Doppelgangers will have their Physical Defense reduced by 5% (stacks up to 6 times). Sun recovers {{b"
      },
      {
        "id": "sun_s1",
        "name": "Endless Variety",
        "type": "Skill 1",
        "cooldown": "10.0 / 9.6 / 9.2 / 8.8 / 8.4 / 8.0s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/sun_1.png",
        "description": "Sun hurls his {{link"
      },
      {
        "id": "sun_s2",
        "name": "Swift Exchange",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "70/80/90/100/110/120",
        "icon": "/assets/images/skills/sun_2.png",
        "description": "Sun hurls his {{link"
      },
      {
        "id": "sun_ult",
        "name": "Instantaneous Move",
        "type": "Ultimate",
        "cooldown": "4.0s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/sun_3.png",
        "description": "Sun commands his Doppelgangers to strike at the target enemy with him, dealing {{scale"
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
        "name": "Beta, Advance!",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/alpha_0.png",
        "description": "When Alpha uses a skill, Beta will be summoned to attack. [Non-minion enemies] that are hit by Beta 2 time(s) will be {{b"
      },
      {
        "id": "alpha_s1",
        "name": "Rotary Impact",
        "type": "Skill 1",
        "cooldown": "4.0s",
        "cost": "50",
        "icon": "/assets/images/skills/alpha_1.png",
        "description": "Alpha unleashes an energy wave in the target direction, dealing {{scale"
      },
      {
        "id": "alpha_s2",
        "name": "Force Swing",
        "type": "Skill 2",
        "cooldown": "6.0 / 5.6 / 5.2 / 4.8 / 4.4 / 4.0s",
        "cost": "45 / 50 / 55 / 60 / 65 / 70",
        "icon": "/assets/images/skills/alpha_2.png",
        "description": "After a short delay, Alpha swings his blade in the target direction, dealing {{scale"
      },
      {
        "id": "alpha_ult",
        "name": "Spear of Alpha",
        "type": "Ultimate",
        "cooldown": "20.0 / 18.0 / 16.0s",
        "cost": "70 / 80 / 90",
        "icon": "/assets/images/skills/alpha_3.png",
        "description": "Beta dives into target location, dealing {{scale"
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
        "name": "Let's Dance!",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/ruby_0.png",
        "description": "Ruby gains 6%-20% Spell Vamp (based on level) and inherits 125% Spell Vamp Ratio (Basic Attacks cannot trigger Lifesteal). After each skill cast, Ruby can dash to another location, gaining {{scale"
      },
      {
        "id": "ruby_s1",
        "name": "Be Good!",
        "type": "Skill 1",
        "cooldown": "4.0s",
        "cost": "25",
        "icon": "/assets/images/skills/ruby_1.png",
        "description": "Ruby swings her scythe, dealing {{scale"
      },
      {
        "id": "ruby_s2",
        "name": "Don't Run, Wolf King!",
        "type": "Skill 2",
        "cooldown": "7.0s",
        "cost": "50 / 55 / 60 / 65 / 70 / 75",
        "icon": "/assets/images/skills/ruby_2.png",
        "description": "Ruby swings her scythe herself twice, each swing dealing {{scale"
      },
      {
        "id": "ruby_ult",
        "name": "I'm Offended!",
        "type": "Ultimate",
        "cooldown": "26.0 / 23.0 / 20.0s",
        "cost": "80 / 100 / 120",
        "icon": "/assets/images/skills/ruby_3.png",
        "description": "Ruby sweeps scythe in the target direction, dealing {{scale"
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
        "name": "Heavenly Vow",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/yisunshin_0.png",
        "description": "Yi Sun-shin attacks with his {{ai"
      },
      {
        "id": "yisunshin_s1",
        "name": "Traceless",
        "type": "Skill 1",
        "cooldown": "12.0 / 11.0 / 10.0 / 9.0 / 8.0 / 7.0s",
        "cost": "50 / 55 / 60 / 65 / 70 / 75",
        "icon": "/assets/images/skills/yisunshin_1.png",
        "description": "Yi Sun-shin dashes forward and slashes with his glaive, dealing {{scale"
      },
      {
        "id": "yisunshin_s2",
        "name": "Blood Floods",
        "type": "Skill 2",
        "cooldown": "11.0s",
        "cost": "60 / 65 / 70 / 75 / 80 / 85",
        "icon": "/assets/images/skills/yisunshin_2.png",
        "description": "{{link"
      },
      {
        "id": "yisunshin_ult",
        "name": "Mountain Shocker",
        "type": "Ultimate",
        "cooldown": "60.0s",
        "cost": "150 / 180 / 210",
        "icon": "/assets/images/skills/yisunshin_3.png",
        "description": "Yi Sun-shin summons a turtle ship and gains sight of the whole map for 5 seconds. The turtle ship lasts for up to 15 seconds, during which Yi Sun-shin gains 70% burst Movement Speed (decay to 20% over 2 seconds). When cast again, Yi Sun-shin commands the turtle ship to ram towards the target area, dealing {{scale"
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
        "name": "Spear of Quiescence",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/moskov_0.png",
        "description": "Moskov's Basic Attacks can penetrate the target and deal [(+{{scale"
      },
      {
        "id": "moskov_s1",
        "name": "Abyss Walker",
        "type": "Skill 1",
        "cooldown": "10.0 /  9.6 / 9.2 / 8.8 / 8.4 / 8.0s",
        "cost": "45 / 50 / 55 / 60 / 65/ 70",
        "icon": "/assets/images/skills/moskov_1.png",
        "description": "Moskov teleports to the target location, increasing his Attack Speed to 1.15&ndash;1.5 times for 3 seconds. Meanwhile, his Basic Attack deals 10% more damage to enemies behind the primary target."
      },
      {
        "id": "moskov_s2",
        "name": "Spear of Misery",
        "type": "Skill 2",
        "cooldown": "12.0 / 11.5 / 11.0 / 10.5 / 10.0 / 9.5s",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "icon": "/assets/images/skills/moskov_2.png",
        "description": "Moskov launches a powerful strike at the target enemy hero or Creep, dealing {{scale"
      },
      {
        "id": "moskov_ult",
        "name": "Spear of Destruction",
        "type": "Ultimate",
        "cooldown": "55.0 / 50.0 / 45.0s",
        "cost": "130 / 150 / 170",
        "icon": "/assets/images/skills/moskov_3.png",
        "description": "After a short delay, Moskov throws the {{B"
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
        "name": "Electro Airbag",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/johnson_0.png",
        "description": "When Johnson's {{B"
      },
      {
        "id": "johnson_s1",
        "name": "Impact Wrench",
        "type": "Skill 1",
        "cooldown": "8.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/johnson_1.png",
        "description": "Johnson throws his wrench toward the target location, dealing {{scale"
      },
      {
        "id": "johnson_s2",
        "name": "Electromagnetic Waves",
        "type": "Skill 2",
        "cooldown": "10.0 / 9.6 / 9.2 / 8.8 / 8.4 / 8.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/johnson_2.png",
        "description": "Johnson raises his shield, continuously dealing {{scale"
      },
      {
        "id": "johnson_ult",
        "name": "Nitrous",
        "type": "Ultimate",
        "cooldown": "0.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/johnson_3.png",
        "description": "Hold the \"Nitrous\" skill to increase speed for up to 5 seconds, the acceleration stopping immediately once released."
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
        "name": "Starlit Hourglass",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/cyclops_0.png",
        "description": "Each time Cyclops hits an enemy with his skills, all his skill cooldowns are reduced by 0.5s."
      },
      {
        "id": "cyclops_s1",
        "name": "Stardust Shock",
        "type": "Skill 1",
        "cooldown": "9.0s",
        "cost": "100",
        "icon": "/assets/images/skills/cyclops_1.png",
        "description": "Cyclops casts two Stardust Disks, each dealing {{Scale"
      },
      {
        "id": "cyclops_s2",
        "name": "Planets Attack",
        "type": "Skill 2",
        "cooldown": "14 / 13.5 / 13 / 12.5 / 11 / 10.5s",
        "cost": "60 / 66 / 72 / 78 / 84 / 90",
        "icon": "/assets/images/skills/cyclops_2.png",
        "description": "Cyclops conjures Starlit Spheres around himself while gaining 30% Movement Speed for 2s. The spheres will automatically seek and attack nearby enemies (prioritizes enemy heroes), exploding on collision and dealing {{Scale"
      },
      {
        "id": "cyclops_ult",
        "name": "Star Power Lockdown",
        "type": "Ultimate",
        "cooldown": "43.0s",
        "cost": "160 / 180 / 200",
        "icon": "/assets/images/skills/cyclops_3.png",
        "description": "Cyclops creates a Planetary Sphere and sends it after target enemy hero or Creep, dealing {{Scale"
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
        "name": "Scripture of the Moon Elf",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/estes_0.png",
        "description": "Slowly charges the Code of Moon Elves. When fully charged, his next basic attack is enhanced and bounces to nearby enemies."
      },
      {
        "id": "estes_s1",
        "name": "Moonlight Immersion",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/estes_1.png",
        "description": "Restores HP to the target champion immediately and links with them for 3s to continually heal."
      },
      {
        "id": "estes_s2",
        "name": "Domain of Moon Goddess",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/estes_2.png",
        "description": "Floods moonlight into a designated area, dealing magic damage and slowing enemies who touch the boundary."
      },
      {
        "id": "estes_ult",
        "name": "Blessing of Moon Goddess",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/estes_3.png",
        "description": "Casts enhanced Moonlight Immersion on all nearby allied champions, continuously healing the entire team."
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
                "name": "Blessing of Wilderness",
                "type": "Passive",
                "cooldown": "Passive",
                "cost": "No Cost",
                "icon": "/assets/images/skills/hilda_0.png",
                "description": "Hilda enters bushes to gain bonus Movement Speed, a regenerating shield, and HP regeneration."
        },
        {
                "id": "hilda_s1",
                "name": "Combat Ritual",
                "type": "Skill 1",
                "cooldown": "8.5-6.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/hilda_1.png",
                "description": "Hilda gains 60% decaying Movement Speed and empowers her next Basic Attack to leap and smash the target."
        },
        {
                "id": "hilda_s2",
                "name": "Art of Hunting",
                "type": "Skill 2",
                "cooldown": "9.0-6.5s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/hilda_2.png",
                "description": "Hilda unleashes a 3-stage heavy axe combo, knocking back the target on the final strike."
        },
        {
                "id": "hilda_ult",
                "name": "Power of Wildness",
                "type": "Ultimate",
                "cooldown": "35.0-25.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/hilda_3.png",
                "description": "Hilda leaps toward target enemy, dealing massive Physical Damage and executing foes with high stacks."
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
        "name": "Pride of Ice",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/aurora_0.png",
        "description": "Upon taking fatal damage, Aurora [[freeze"
      },
      {
        "id": "aurora_s1",
        "name": "Hailstone Blast",
        "type": "Skill 1",
        "cooldown": "6.0 / 5.6 / 5.2 / 4.8 / 4.4 / 4.0s",
        "cost": "55 / 65 / 75 / 85 / 95 / 105",
        "icon": "/assets/images/skills/aurora_1.png",
        "description": "Aurora summons an icy meteorite to strike at the target location, dealing {{scale"
      },
      {
        "id": "aurora_s2",
        "name": "Frosty Breeze",
        "type": "Skill 2",
        "cooldown": "13.0s",
        "cost": "110 / 110 / 120 / 130 / 140 / 150",
        "icon": "/assets/images/skills/aurora_2.png",
        "description": "Aurora blows Frosty Breeze in a fan-shaped area in the target direction, dealing {{scale"
      },
      {
        "id": "aurora_ult",
        "name": "Frigid Glacier",
        "type": "Ultimate",
        "cooldown": "50.0 / 45.0 / 40.0s",
        "cost": "150 / 175 / 200",
        "icon": "/assets/images/skills/aurora_3.png",
        "description": "Aurora creates a frost path in the target direction, dealing {{scale"
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
                "name": "Homeland Defender",
                "type": "Passive",
                "cooldown": "Passive",
                "cost": "No Cost",
                "icon": "/assets/images/skills/lapulapu_0.png",
                "description": "Lapu-Lapu gains Bravery Blessing from hitting skills. At full stacks, next basic attack grants a shield and dashes to target."
        },
        {
                "id": "lapulapu_s1",
                "name": "Justice Blades",
                "type": "Skill 1 (Twin Blade)",
                "cooldown": "7.5-5.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/lapulapu_1.png",
                "description": "Lapu-Lapu throws two bladed boomerangs forward, dealing physical damage to enemies along the path."
        },
        {
                "id": "lapulapu_s2",
                "name": "Jungle Warrior",
                "type": "Skill 2 (Twin Blade)",
                "cooldown": "8.0-6.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/lapulapu_2.png",
                "description": "Lapu-Lapu slashes his twin blades and charges forward, dealing physical damage to enemies."
        },
        {
                "id": "lapulapu_ult",
                "name": "Bravest Fighter",
                "type": "Ultimate (Twin Blade)",
                "cooldown": "20.0-15.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/lapulapu_3.png",
                "description": "Lapu-Lapu leaps into the air and combines his twin blades into a Heavy Sword, dealing damage and entering Heavy Sword Stance."
        },
        {
                "id": "lapulapu_s1_heavy",
                "name": "Land Shaker",
                "type": "Skill 1 (Heavy Sword)",
                "cooldown": "6.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/lapulapu_4.png",
                "description": "Lapu-Lapu charges his heavy sword and slashes forward, stunning enemies hit for 1s."
        },
        {
                "id": "lapulapu_s2_heavy",
                "name": "Storm Sword",
                "type": "Skill 2 (Heavy Sword)",
                "cooldown": "6.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/lapulapu_5.png",
                "description": "Lapu-Lapu whirls his heavy sword around, dealing physical damage and gaining damage reduction per hero hit."
        },
        {
                "id": "lapulapu_ult_heavy",
                "name": "Raging Slash",
                "type": "Ultimate (Heavy Sword)",
                "cooldown": "30.0-24.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/lapulapu_6.png",
                "description": "Lapu-Lapu unleashes 3 massive heavy sword slashes while immune to crowd control, dealing immense physical damage."
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
        "name": "Nether Touch",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/vexana_0.png",
        "description": "Vexana and the {{Link"
      },
      {
        "id": "vexana_s1",
        "name": "Deathly Grasp",
        "type": "Skill 1",
        "cooldown": "14.0/13.4/12.88/12.2/11.6/11.0s",
        "cost": "80/90/100/110/120/130",
        "icon": "/assets/images/skills/vexana_1.png",
        "description": "Vexana unleashes a {{Link"
      },
      {
        "id": "vexana_s2",
        "name": "Cursed Blast",
        "type": "Skill 2",
        "cooldown": "7.0/6.7/6.4/6.1/5.8/5.5s",
        "cost": "80/90/100/110/120/130",
        "icon": "/assets/images/skills/vexana_2.png",
        "description": "Vexana marks the target area with the power of the undead, striking it after 0.8 seconds delay and dealing {{Scale"
      },
      {
        "id": "vexana_ult",
        "name": "Eternal Guard",
        "type": "Ultimate",
        "cooldown": "60.0/53.0/46.0s",
        "cost": "120 / 160 / 200",
        "icon": "/assets/images/skills/vexana_3.png",
        "description": "Vexana summons an {{Link"
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
        "name": "Full Moon Curse",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/roger_0.png",
        "description": "In human form, Basic Attacks slow enemies by 10%. In wolf form, Basic Attacks deal extra physical damage equal to 5% of target's lost HP."
      },
      {
        "id": "roger_h_s1",
        "name": "Open Fire",
        "type": "Skill 1",
        "form": "Human Form",
        "cooldown": "7.0s",
        "cost": "70 Mana",
        "icon": "/assets/images/skills/roger_1.png",
        "description": "Roger fires two quick shots in target direction, dealing damage and heavily slowing affected enemies."
      },
      {
        "id": "roger_h_s2",
        "name": "Hunter's Steps",
        "type": "Skill 2",
        "form": "Human Form",
        "cooldown": "10.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/roger_2.png",
        "description": "Roger gains 40% Movement Speed and Attack Speed for 2.5 seconds to reposition rapidly."
      },
      {
        "id": "roger_h_ult",
        "name": "Wolf Transformation",
        "type": "Ultimate",
        "form": "Human Form",
        "cooldown": "6.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/roger_3.png",
        "description": "Roger pounces forward, transforming into a Wolf, dealing physical damage and gaining 40 Physical & Magic Defense."
      },
      {
        "id": "roger_w_s1",
        "name": "Lycan Pounce",
        "type": "Skill 1",
        "form": "Wolf Form",
        "cooldown": "6.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/roger_4.png",
        "description": "Roger leaps toward target enemy, becoming untargetable and dealing burst physical damage to up to 3 enemies."
      },
      {
        "id": "roger_w_s2",
        "name": "Bloodthirsty Howl",
        "type": "Skill 2",
        "form": "Wolf Form",
        "cooldown": "10.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/roger_5.png",
        "description": "Roger howls, increasing his Attack Speed by 50% and doubling movement speed when hunting low-HP champions."
      },
      {
        "id": "roger_w_ult",
        "name": "Restore Human Form",
        "type": "Ultimate",
        "form": "Wolf Form",
        "cooldown": "6.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/roger_6.png",
        "description": "Roger rolls in target direction and transforms back into Human Form, gaining a 200 HP shield."
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
        "name": "Lightwheel Mark",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/karrie_0.png",
        "description": "Karrie's Basic Attacks and skills apply a stack of Lightwheel Mark on hit. Once a target has 5 stacks of Lightwheel Marks, the marks will turn into a lightwheel, dealing True Damage equal to 6%-8% of the target's [[Health point"
      },
      {
        "id": "karrie_s1",
        "name": "Spinning Lightwheel",
        "type": "Skill 1",
        "cooldown": "8.0s",
        "cost": "40 / 45 / 50 / 55 / 60 / 65",
        "icon": "/assets/images/skills/karrie_1.png",
        "description": "Karrie releases a sphere of surging energy in the target direction, dealing {{scale"
      },
      {
        "id": "karrie_s2",
        "name": "Phantom Step",
        "type": "Skill 2",
        "cooldown": "4.5 / 4.1 / 3.7 / 3.3 / 2.9 / 2.5s",
        "cost": "35 / 40 / 45 / 50 / 55 / 60",
        "icon": "/assets/images/skills/karrie_2.png",
        "description": "Karrie dashes in the target direction while throwing a lightwheel at the nearest enemy, dealing {{scale"
      },
      {
        "id": "karrie_ult",
        "name": "Speedy Lightwheel",
        "type": "Ultimate",
        "cooldown": "35.0s",
        "cost": "70 / 80 / 90",
        "icon": "/assets/images/skills/karrie_3.png",
        "description": "Karrie enters Dual Wield state for 6s, during which she gains 20% Movement Speed and throws two lightwheels with each Basic Attack, each dealing 50-70% Basic Attack damage annd inheriting a portion of Attack Effects."
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
        "name": "Steel Bones",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/gatotkaca_0.png",
        "description": "Gatotkaca gains [1] Physical Defense equal to 2% of his [[HP"
      },
      {
        "id": "gatotkaca_s1",
        "name": "Blast Iron Fist",
        "type": "Skill 1",
        "cooldown": "8.0 / 7.6 / 7.2 / 6.8 / 6.4 / 6.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/gatotkaca_1.png",
        "description": "Gatotkaca slams the ground, creating a shattered zone in the target direction while dealing {{scale"
      },
      {
        "id": "gatotkaca_s2",
        "name": "Unbreakable",
        "type": "Skill 2",
        "cooldown": "12.0 / 11.6 / 11.2 / 10.8 / 10.4 / 10.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/gatotkaca_2.png",
        "description": "Gatotkaca begins channeling, then [[blink"
      },
      {
        "id": "gatotkaca_ult",
        "name": "Avatar of the Guardian",
        "type": "Ultimate",
        "cooldown": "54.0 / 50.0 / 46.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/gatotkaca_3.png",
        "description": "Gatotkaca [[blink"
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
                "name": "Magic Master",
                "type": "Passive",
                "cooldown": "Passive",
                "cost": "No Cost",
                "icon": "/assets/images/skills/harley_0.png",
                "description": "Harley deals Magic Damage with Basic Attacks, and his damage shreds enemy Magic Defense."
        },
        {
                "id": "harley_s1",
                "name": "Poker Trick",
                "type": "Skill 1",
                "cooldown": "6.0-4.0s",
                "cost": "60-85 Mana",
                "icon": "/assets/images/skills/harley_1.png",
                "description": "Harley fires multiple rounds of magic cards in target direction, gaining attack speed per hit."
        },
        {
                "id": "harley_s2",
                "name": "Space Escape",
                "type": "Skill 2",
                "cooldown": "8.5-6.5s",
                "cost": "60-85 Mana",
                "icon": "/assets/images/skills/harley_2.png",
                "description": "Harley teleports forward leaving a magical hat behind, gaining bonus movement speed and able to recall back."
        },
        {
                "id": "harley_ult",
                "name": "Deadly Magic",
                "type": "Ultimate",
                "cooldown": "36.0-26.0s",
                "cost": "120-160 Mana",
                "icon": "/assets/images/skills/harley_3.png",
                "description": "Harley casts a fire ring on target hero that explodes after 4s, dealing damage plus a percentage of damage taken during the ring."
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
        "name": "Jungle Heart",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/irithel_0.png",
        "description": "Irithel and Leo's immaculate teamwork allows her to shoot while moving. Each Basic Attack will shoot 2 crossbow bolt(s) (but takes longer to refill) that deal {{scale"
      },
      {
        "id": "irithel_s1",
        "name": "Strafe",
        "type": "Skill 1",
        "cooldown": "10.0s",
        "cost": "0",
        "icon": "/assets/images/skills/irithel_1.png",
        "description": "Irithel launches a volley of arrows on the target area, dealing {{Scale"
      },
      {
        "id": "irithel_s2",
        "name": "Force of the Queen",
        "type": "Skill 2",
        "cooldown": "10.0 / 9.4 / 8.8 / 8.2 / 7.6 / 7.0s",
        "cost": "0",
        "icon": "/assets/images/skills/irithel_2.png",
        "description": "Leo lets out a piercing roar, dealing {{Scale"
      },
      {
        "id": "irithel_ult",
        "name": "Heavy Crossbow",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/irithel_3.png",
        "description": "Irithel order Leo to [[Blink"
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
        "name": "Bastion of Stone",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/grock_0.png",
        "description": "Grock gains a Shield equal to 10% of his Max HP and empowers the next Basic Attack to deal {{scale"
      },
      {
        "id": "grock_s1",
        "name": "Mighty Swing",
        "type": "Skill 1",
        "cooldown": "8.0 / 7.6 / 7.2 / 6.8 / 6.4 / 6.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/grock_1.png",
        "description": "Grock strikes forward with massive force, dealing {{scale"
      },
      {
        "id": "grock_s2",
        "name": "Earthen Rampart",
        "type": "Skill 2",
        "cooldown": "14.0 / 13.2 / 12.4 / 11.6 / 10.8 / 10.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/grock_2.png",
        "description": "After a brief delay, Grock summons a stone wall in the target area, dealing {{scale"
      },
      {
        "id": "grock_ult",
        "name": "Tectonic Charge",
        "type": "Ultimate",
        "cooldown": "55.0 / 50.0 / 45.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/grock_3.png",
        "description": "Grock charges forward, dealing {{scale"
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
        "name": "Warmonger",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/argus_0.png",
        "description": "{{B"
      },
      {
        "id": "argus_s1",
        "name": "Demonic Grip",
        "type": "Skill 1",
        "cooldown": "12.0 / 11.6 / 11.2 / 10.8 / 10.4 / 10.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/argus_1.png",
        "description": "Argus streches out a demonic hand in the target direction, dealing {{scale"
      },
      {
        "id": "argus_s2",
        "name": "Meteoric Sword",
        "type": "Skill 2",
        "cooldown": "8.0 / 7.6 / 7.2 / 6.8 / 6.4 / 6.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/argus_2.png",
        "description": "After a short charge, Argus thrusts his Demonic Blade in the target direction, dealing {{scale"
      },
      {
        "id": "argus_ult",
        "name": "Eternal Evil",
        "type": "Ultimate",
        "cooldown": "42.0 / 38.0 / 35.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/argus_3.png",
        "description": "Argus removes all debuffs (excluding Suppression) on himself, deals{{scale"
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
        "name": "Lakeshore Ambience",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/odette_0.png",
        "description": "After each skill cast, Odette's next {{ai"
      },
      {
        "id": "odette_s1",
        "name": "Avian Authority",
        "type": "Skill 1",
        "cooldown": "6.0 / 5.8 / 5.6 / 5.4 / 5.2 / 5.0s",
        "cost": "90 / 100 / 110 / 120 / 130 / 140",
        "icon": "/assets/images/skills/odette_1.png",
        "description": "Odette concentrates energy to summon a swan to attack enemies, dealing {{Scale"
      },
      {
        "id": "odette_s2",
        "name": "Blue Nova",
        "type": "Skill 2",
        "cooldown": "12.0 / 11.6 / 11.2 / 10.8 / 10.4 / 10.0s",
        "cost": "90 / 95 / 100 / 105 / 100 / 115",
        "icon": "/assets/images/skills/odette_2.png",
        "description": "Odette releases a set of magic energy balls forward, dealing {{Scale"
      },
      {
        "id": "odette_ult",
        "name": "Swan Song",
        "type": "Ultimate",
        "cooldown": "50.0 / 45.0 / 40.0s",
        "cost": "160 / 190 / 220",
        "icon": "/assets/images/skills/odette_3.png",
        "description": "Odette gathers energy and began channeling, gaining a {{Scale"
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
        "name": "Young Again",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/diggie_0.png",
        "description": "Upon death, Diggie reverses time and turns to egg form, in which he can continue to move around and gains a new set of skills. He cannot be targeted in egg form and will revive after a period of time."
      },
      {
        "id": "diggie_s1",
        "name": "Auto Alarm Bomb",
        "type": "Skill 1",
        "cooldown": "8.0 / 7.4 / 6.8 / 6.2 / 5.6 / 5.0s",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "icon": "/assets/images/skills/diggie_1.png",
        "description": "Diggie flings an owl alarm to the target location. The alarm will then remain stationary for 25 seconds or until it reacts to the first enemy in range, chasing them and exploding upon collision. The explosion deals {{Scale"
      },
      {
        "id": "diggie_s2",
        "name": "Disdain",
        "type": "Skill 2",
        "cooldown": "5.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/diggie_2.png",
        "description": "Diggie displays serious disdain for the enemy, dealing a small amount of damage to surrounding enemies while venting anger."
      },
      {
        "id": "diggie_ult",
        "name": "Reverse Time",
        "type": "Ultimate",
        "cooldown": "15.0 / 14.0 / 13.0 / 12.0 / 11.0 / 10.0s",
        "cost": "90",
        "icon": "/assets/images/skills/diggie_3.png",
        "description": "Diggie marks a target enemy hero for 4 seconds and pulls them back to their previous location after the duration ends, dealing {{Scale"
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
        "name": "Thickened Blood",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/hylos_0.png",
        "description": "Hylos gains 1.5 extra {{B"
      },
      {
        "id": "hylos_s1",
        "name": "Law and Order",
        "type": "Skill 1",
        "cooldown": "12.0 / 11.2 / 10.4 / 9.6 / 8.8 / 8.0s",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "icon": "/assets/images/skills/hylos_1.png",
        "description": "Hylos gains 50% Movement Speed and causes his next Basic Attack within 3 seconds to deal {{scale"
      },
      {
        "id": "hylos_s2",
        "name": "Ring of Punishment",
        "type": "Skill 2",
        "cooldown": "1.0s",
        "cost": "30 / 40 / 60 / 90 / 120 / 150",
        "icon": "/assets/images/skills/hylos_2.png",
        "description": "Hylos releases the {{b"
      },
      {
        "id": "hylos_ult",
        "name": "Glorious Pathway",
        "type": "Ultimate",
        "cooldown": "40.0 / 36.0 / 32.0s",
        "cost": "150 / 300 / 450",
        "icon": "/assets/images/skills/hylos_3.png",
        "description": "Hylos creates a huge pathway in the target direction, reducing enemies' Movement by 75% for 1 second. The pathway lasts 6 seconds. When on the pathway, Hylos gains Slow Immunity and recovers 3% of his {{B"
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
        "name": "Decimation",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/zhask_0.png",
        "description": "When Zhask dies, he commands the Nightmaric Spawn to self-destruct, dealing true damage to surrounding enemies."
      },
      {
        "id": "zhask_s1",
        "name": "Nightmaric Spawn",
        "type": "Skill 1",
        "cooldown": "11.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/zhask_1.png",
        "description": "Zhask summons a Nightmaric Spawn at target location that auto-attacks nearby enemies with death rays."
      },
      {
        "id": "zhask_s2",
        "name": "Mind Eater",
        "type": "Skill 2",
        "cooldown": "8.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/zhask_2.png",
        "description": "Zhask fires penetrating mental energy beams, stunning enemies caught in the crossfire."
      },
      {
        "id": "zhask_s3",
        "name": "Hive Clones",
        "type": "Skill 3",
        "cooldown": "10.0s",
        "cost": "60 Mana",
        "icon": "/assets/images/skills/zhask_3.png",
        "description": "Zhask scatters a cluster of nightmaric clonal mines that explode upon enemy contact, slowing targets."
      },
      {
        "id": "zhask_ult",
        "name": "Dominator's Descent",
        "type": "Ultimate",
        "cooldown": "60.0s",
        "cost": "160 Mana",
        "icon": "/assets/images/skills/zhask_4.png",
        "description": "Zhask fuses directly into his Nightmaric Spawn, massively amplifying its size, attributes, and granting invulnerability frames."
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
        "name": "Shadow of Styx",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/helcurt_0.png",
        "description": "Helcurt remains in the {{B"
      },
      {
        "id": "helcurt_s1",
        "name": "Hidden Terror",
        "type": "Skill 1",
        "cooldown": "15.0 / 14.0 / 13.0 / 12.0 / 11.0 / 10.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/helcurt_1.png",
        "description": "{{B"
      },
      {
        "id": "helcurt_s2",
        "name": "Deadly Stinger",
        "type": "Skill 2",
        "cooldown": "4.0 / 3.7 / 3.4 / 3.1 / 2.8 / 2.5s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/helcurt_2.png",
        "description": "{{b"
      },
      {
        "id": "helcurt_ult",
        "name": "Dark Night Falls",
        "type": "Ultimate",
        "cooldown": "60.0 / 55.0 / 50.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/helcurt_3.png",
        "description": "Helcurt summons the {{B"
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
                "name": "Spiritual Unity",
                "type": "Passive",
                "cooldown": "8.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/pharsa_0.png",
                "description": "Periodically, Verri strikes alongside Pharsa upon dealing damage, dealing extra Magic Damage and slowing target."
        },
        {
                "id": "pharsa_s1",
                "name": "Curse of Crow",
                "type": "Skill 1",
                "cooldown": "9.0-6.5s",
                "cost": "70-95 Mana",
                "icon": "/assets/images/skills/pharsa_1.png",
                "description": "Pharsa casts a spell on target area, marking enemies hit. Damaging marked enemies stuns them."
        },
        {
                "id": "pharsa_s2",
                "name": "Energy Impact",
                "type": "Skill 2",
                "cooldown": "6.5-5.0s",
                "cost": "70-95 Mana",
                "icon": "/assets/images/skills/pharsa_2.png",
                "description": "Pharsa releases magic energy in target direction, dealing Magic Damage to enemies in a line."
        },
        {
                "id": "pharsa_ult",
                "name": "Feathered Air Strike",
                "type": "Ultimate",
                "cooldown": "36.0-28.0s",
                "cost": "90-120 Mana",
                "icon": "/assets/images/skills/pharsa_3.png",
                "description": "Pharsa takes flight and targets up to 4 aerial bombardments over 8 seconds, dealing colossal AoE Magic Damage."
        },
        {
                "id": "pharsa_s4",
                "name": "Wings by Wings",
                "type": "Special",
                "cooldown": "23.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/pharsa_4.png",
                "description": "Pharsa becomes a mist around Verri, flying over terrain with 80% increased Movement Speed until hit by crowd control or attacking."
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
        "name": "Mecha Suppression",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/jawhead_0.png",
        "description": "Jawhead's attacks apply a stack of {{b"
      },
      {
        "id": "jawhead_s1",
        "name": "Smart Missiles",
        "type": "Skill 1",
        "cooldown": "5.0s",
        "cost": "60 / 65 / 70 / 75 / 80 / 85",
        "icon": "/assets/images/skills/jawhead_1.png",
        "description": "Jawhead launches up to 12 missiles at random nearby enemies over 5 seconds, each missile dealing {{scale"
      },
      {
        "id": "jawhead_s2",
        "name": "Ejector",
        "type": "Skill 2",
        "cooldown": "15.0 / 14.4 / 13.8 / 13.2 / 12.6 / 12.0s",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "icon": "/assets/images/skills/jawhead_2.png",
        "description": "Jawhead gains 30% Movement Speed and a {{scale"
      },
      {
        "id": "jawhead_ult",
        "name": "Unstoppable Force",
        "type": "Ultimate",
        "cooldown": "35.0 / 30.0 / 25.0s",
        "cost": "120 / 150 / 180",
        "icon": "/assets/images/skills/jawhead_3.png",
        "description": "Jawhead [[blink"
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
        "name": "Smart Heart",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/angela_0.png",
        "description": "Angela gains 7.5% extra Movement Speed for 4 seconds each time she casts a skill (up to 30%). When she's attached to an allied hero, the Movement Speed boost is transferred to the allied hero."
      },
      {
        "id": "angela_s1",
        "name": "Love Waves",
        "type": "Skill 1",
        "cooldown": "2.0s",
        "cost": "60 / 70 / 80 / 90 / 100 / 110",
        "icon": "/assets/images/skills/angela_1.png",
        "description": "Angela sends {{B"
      },
      {
        "id": "angela_s2",
        "name": "Puppet-on-a-String",
        "type": "Skill 2",
        "cooldown": "13.0 / 12.4 / 11.8 / 11.2 / 10.6 / 10.0s",
        "cost": "90 / 100 / 110 / 120 / 130 / 140",
        "icon": "/assets/images/skills/angela_2.png",
        "description": "Angela launches a {{b"
      },
      {
        "id": "angela_ult",
        "name": "Heartguard",
        "type": "Ultimate",
        "cooldown": "60.0s",
        "cost": "100 / 150 / 200",
        "icon": "/assets/images/skills/angela_3.png",
        "description": "Angela begins channeling [for 2 seconds], applying a {{Scale"
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
        "name": "Ashing",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/valir_0.png",
        "description": "Valir's skills apply a stack of Ablaze to enemies hit, dealing them Magic Damage equal to 0.6% of their Max HP per second for 4s. At 3 stacks, the fire detonates, dealing Magic Damage euqal to 6% of the target's Max HP to the enemy and stunning them for 1s (the same target can only be stunned by Valir's skills once every 7s.)"
      },
      {
        "id": "valir_s1",
        "name": "Burst Fireball",
        "type": "Skill 1",
        "cooldown": "1.5s",
        "cost": "50 / 58 / 66 / 74/ 82 / 90",
        "icon": "/assets/images/skills/valir_1.png",
        "description": "Valir launches a fireball that explodes upon hitting the first target, dealing {{Scale"
      },
      {
        "id": "valir_s2",
        "name": "Searing Torrent",
        "type": "Skill 2",
        "cooldown": "13 / 12.4 / 11.8 / 11.2 / 10.6 / 10.0s",
        "cost": "80 / 86 / 92 / 98 / 104 / 110",
        "icon": "/assets/images/skills/valir_2.png",
        "description": "Valir unleashes a torrent of flames in the target direction, dealing {{Scale"
      },
      {
        "id": "valir_ult",
        "name": "Vengeance Flame",
        "type": "Ultimate",
        "cooldown": "36.0 / 33.0 / 30.0s",
        "cost": "100 / 125 / 150",
        "icon": "/assets/images/skills/valir_3.png",
        "description": "Valir removes all debuffs on himself and conjures 4 Vengeance Flames that last 9s. Each of his subsequent skillls consumes 1 Vengeance Flam to deal 30% extra base damage. The effects of both Burst Fireball and Searing Torrent can be enhanced. Meanwhile, Valir gains 40% extra Movement Speed that decays over 3s."
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
        "name": "Asura's Wrath",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/martis_0.png",
        "description": "Each time Martis uses a skill, his Attack Speed will be increased by 30%, 120% maximum. Lasts 4 seconds. He gains (6*Hero Level) extra Attack at full stacks."
      },
      {
        "id": "martis_s1",
        "name": "Asura Aura",
        "type": "Skill 1",
        "cooldown": "7.0 / 6.6 / 6.2 / 5.8 / 5.4 / 5.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/martis_1.png",
        "description": "Martis {{AVC1"
      },
      {
        "id": "martis_s2",
        "name": "Mortal Coil",
        "type": "Skill 2",
        "cooldown": "8.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/martis_2.png",
        "description": "Martis {{AVC1"
      },
      {
        "id": "martis_ult",
        "name": "Decimation",
        "type": "Ultimate",
        "cooldown": "36.0 / 32.0 / 28.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/martis_3.png",
        "description": "Martis lunges at a designated enemy hero, dealing {{scale"
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
        "name": "Radiance",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/uranus_0.png",
        "description": "Uranus absorbs the energy generated by incoming attacks to strengthen theirself, regenerating a certain amount of HP every 0.8s. Each stack lasts 10s. When at max stacks (20), Uranus regenerates 48-224 HP (scales with level)."
      },
      {
        "id": "uranus_s1",
        "name": "Ionic Edge",
        "type": "Skill 1",
        "cooldown": "4.0s",
        "cost": "60 / 65 / 70 / 75 / 80 / 85",
        "icon": "/assets/images/skills/uranus_1.png",
        "description": "Uranus releases two energy blades that orbit around them, dealing {{Scale"
      },
      {
        "id": "uranus_s2",
        "name": "Transcendent Ward",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "icon": "/assets/images/skills/uranus_2.png",
        "description": "Uranus charges to the target location, dealing {{Scale"
      },
      {
        "id": "uranus_ult",
        "name": "Consecration",
        "type": "Ultimate",
        "cooldown": "42.0 / 39.0 / 36.0s",
        "cost": "100 / 125 / 150",
        "icon": "/assets/images/skills/uranus_3.png",
        "description": "Uranus unleashes the energy stored within their body, removing slow effects on himself, recovering 200-400 HP, and gaining 60% Movement Speed for 8s (decays over time). Uranus directly gains 5-15 stacks of Radiance, increasing shields received and HP Regen by 20% for 8s."
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
        "name": "Ninjutsu: Petal Barrage",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/hanabi_0.png",
        "description": "Hanabi's Basic Attacks and Skills will launch Petal Blades after hitting a target, bouncing up to 4 times to nearby enemies (the first bounce deals 40% of the damage, and subsequent bounces deal 85% of the previous). Bounces from her Basic Attacks inherit a portion of Attack Effects."
      },
      {
        "id": "hanabi_s1",
        "name": "Ninjutsu: Equinox",
        "type": "Skill 1",
        "cooldown": "14.0 / 13.6 / 13.2 / 12.8 / 12.4 / 12.0s",
        "cost": "35 / 40 / 45 / 50 / 55 / 60",
        "icon": "/assets/images/skills/hanabi_1.png",
        "description": "{{B"
      },
      {
        "id": "hanabi_s2",
        "name": "Ninjutsu: Soul Scroll",
        "type": "Skill 2",
        "cooldown": "8.0 / 7.6 / 7.2 / 6.8 / 6.4 / 6.0s",
        "cost": "35 / 40 / 45 / 50 / 55 / 60",
        "icon": "/assets/images/skills/hanabi_2.png",
        "description": "Hanabi fires the energy Kunai in the targeted direction, dealing {{scale"
      },
      {
        "id": "hanabi_ult",
        "name": "Forbidden Jutsu: Higanbana",
        "type": "Ultimate",
        "cooldown": "40.0 / 35.0 / 30.0s",
        "cost": "120 / 160 / 200",
        "icon": "/assets/images/skills/hanabi_3.png",
        "description": "Hanabi throws Higanbana in the targeted direction, dealing {{scale"
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
        "name": "Trouble Maker",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/change_0.png",
        "description": "Each time Chang'e deals damage to an enemy, she leaves a mark on them. Each mark reduces the target's Movement Speed by 1%, stacking up to 20%."
      },
      {
        "id": "change_s1",
        "name": "Starmoon Shockwave",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "70 / 75 / 80 / 85 / 90 / 95",
        "icon": "/assets/images/skills/change_1.png",
        "description": "Chang'e sends an energy sphere in the target direction, dealing {{Scale"
      },
      {
        "id": "change_s2",
        "name": "Crescent Moon",
        "type": "Skill 2",
        "cooldown": "12.0 / 11.5 / 11.0 / 10.5 / 10.0 / 9.5s",
        "cost": "60 / 70 / 80 / 90 / 100 / 110",
        "icon": "/assets/images/skills/change_2.png",
        "description": "Chang'e summons the {{Link"
      },
      {
        "id": "change_ult",
        "name": "Meteor Shower",
        "type": "Ultimate",
        "cooldown": "36.0 / 33.0 / 30.0s",
        "cost": "150 / 200 / 250",
        "icon": "/assets/images/skills/change_3.png",
        "description": "Chang'e fires 30 meteors in the target direction over 4 seconds, each dealing {{scale"
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
        "name": "Ring of Order",
        "type": "Passive",
        "cooldown": "7.0",
        "cost": "No Cost",
        "icon": "/assets/images/skills/kaja_0.png",
        "description": "Kaja summons a ring of Primal Lightning that expands and returns to him. Enemies hit take {{scale"
      },
      {
        "id": "kaja_s1",
        "name": "Soaring Wings",
        "type": "Skill 1",
        "cooldown": "14.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/kaja_1.png",
        "description": "Kaja dashes to the target area, gaining Control Immunity during the dash. On arrival, he deals {{scale"
      },
      {
        "id": "kaja_s2",
        "name": "Divine Binding",
        "type": "Skill 2",
        "cooldown": "70.0 / 65.0 / 60.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/kaja_2.png",
        "description": "Kaja hurls a {{link"
      },
      {
        "id": "kaja_ult",
        "name": "Divine Judgment",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/kaja_3.png",
        "description": "Suppresses a target enemy champion and drags them along with him, disabling their actions and reducing magic defense."
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
        "name": "Symbiosis",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/selena_0.png",
        "description": "Selena can freely switch between forms. In Elven form, attacks inflict Abyssal Marks; in Abyssal form, attacks consume marks to deal burst magic damage."
      },
      {
        "id": "selena_e_s1",
        "name": "Abyssal Trap",
        "type": "Skill 1",
        "form": "Elven Form",
        "cooldown": "6.0s",
        "cost": "60 Mana",
        "icon": "/assets/images/skills/selena_1.png",
        "description": "Summons an Abyssal Devil that attaches to oncoming enemies, granting vision, slowing them, and exploding."
      },
      {
        "id": "selena_e_s2",
        "name": "Abyssal Arrow",
        "type": "Skill 2",
        "form": "Elven Form",
        "cooldown": "12.0s",
        "cost": "70 Mana",
        "icon": "/assets/images/skills/selena_2.png",
        "description": "Fires a demonic arrow forward that stuns the first enemy hit for up to 3 seconds based on flight distance."
      },
      {
        "id": "selena_e_ult",
        "name": "Primal Darkness",
        "type": "Ultimate",
        "form": "Elven Form",
        "cooldown": "4.5s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/selena_3.png",
        "description": "Selena merges with the Abyss, transforming into Abyssal Form, gaining 30% movement speed and melee assassin skills."
      },
      {
        "id": "selena_a_s1",
        "name": "Soul Eater",
        "type": "Skill 1",
        "form": "Abyssal Form",
        "cooldown": "6.0s",
        "cost": "60 Mana",
        "icon": "/assets/images/skills/selena_4.png",
        "description": "Selena empowers her claws, making her next basic attack deal burst magic damage and granting a shield."
      },
      {
        "id": "selena_a_s2",
        "name": "Garotte",
        "type": "Skill 2",
        "form": "Abyssal Form",
        "cooldown": "12.0s",
        "cost": "70 Mana",
        "icon": "/assets/images/skills/selena_5.png",
        "description": "Selena charges forward, slashing enemies. Hitting an enemy with Abyssal Mark instantly resets this cooldown."
      },
      {
        "id": "selena_a_ult",
        "name": "Blessing of the Moon Goddess",
        "type": "Ultimate",
        "form": "Abyssal Form",
        "cooldown": "4.5s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/selena_6.png",
        "description": "Selena calls upon the Moon Goddess, restoring her Elven Form and gaining bonus movement speed."
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
        "name": "Contract: Transform",
        "type": "Passive",
        "cooldown": "5.0",
        "cost": "No Cost",
        "icon": "/assets/images/skills/aldous_0.png",
        "description": "After every 2 {{ai"
      },
      {
        "id": "aldous_s1",
        "name": "Contract: Soul Steal",
        "type": "Skill 1",
        "cooldown": "4.0 / 4.0 / 4.0 / 4.0 / 4.0 / 4.0s",
        "cost": "60 / 65 / 70 / 75 / 80 / 85",
        "icon": "/assets/images/skills/aldous_1.png",
        "description": "Aldous unleashes his inner energy to enhance his next Basic Attack to kill enemies and absorb their soul each stack gives to deal {{b"
      },
      {
        "id": "aldous_s2",
        "name": "Contract: Explosion",
        "type": "Skill 2",
        "cooldown": "12.0 / 11.5 / 11.0 / 10.5 / 10.0 / 9.5s",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "icon": "/assets/images/skills/aldous_2.png",
        "description": "Aldous assumes a defensive stance, gaining 30% Damage Reduction and 20% extra Movement Speed for 2 seconds or until manual cancellation. He then deals {{Scale"
      },
      {
        "id": "aldous_ult",
        "name": "Contract: Chase Fate",
        "type": "Ultimate",
        "cooldown": "60.0 / 55.0 / 50.0s",
        "cost": "150 / 200 / 250",
        "icon": "/assets/images/skills/aldous_3.png",
        "description": "Aldous gains vision of all enemy heroes for 5 seconds. During this time, if Aldous uses this skill again, he can dash toward an enemy hero [of choice]. When Aldous hits that enemy hero, he will deal {{scale"
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
        "name": "Windtalk",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/vale_0.png",
        "description": "Vale gains 1 stack of {{B"
      },
      {
        "id": "vale_s1",
        "name": "Wind Blade",
        "type": "Skill 1",
        "cooldown": "6.0 / 5.6 / 5.2 / 4.8 / 4.4 / 4.0s",
        "cost": "60 / 65 / 70 / 75 / 80 / 85",
        "icon": "/assets/images/skills/vale_1.png",
        "description": "Vale unleashes two wind blades toward the left and right of a target area. each dealing {{Scale"
      },
      {
        "id": "vale_s2",
        "name": "Windblow",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "90 / 95 / 100 / 105 / 110 / 115",
        "icon": "/assets/images/skills/vale_2.png",
        "description": "Vale sends a whirlwind in the target direction, dealing {{Scale"
      },
      {
        "id": "vale_ult",
        "name": "Windstorm",
        "type": "Ultimate",
        "cooldown": "40.0 / 36.0 / 32.0s",
        "cost": "150 / 200 / 250",
        "icon": "/assets/images/skills/vale_3.png",
        "description": "Vale summons a windstorm at the target location, dealing a total of [{{Scale"
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
        "name": "The Oath Keeper",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/leomord_0.png",
        "description": "Leomord's {{ii"
      },
      {
        "id": "leomord_s1",
        "name": "Momentum",
        "type": "Skill 1",
        "cooldown": "6.0 / 5.7 / 5.4 / 5.1 / 4.8 / 4.5s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/leomord_1.png",
        "description": "Leomord begins channeling [for 1 second], slowing enemies in the target direction by 25%. When the channeling is complete or interrupted, he thrusts his sword in the same direction, dealing up to {{Scale"
      },
      {
        "id": "leomord_s2",
        "name": "Phantom Stomp",
        "type": "Skill 2",
        "cooldown": "5.0 / 4.8 / 4.5 / 4.3 / 4.0 / 3.8s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/leomord_2.png",
        "description": "Barbiel leaps forward, dealing {{Scale"
      },
      {
        "id": "leomord_ult",
        "name": "Decimation Assault",
        "type": "Ultimate",
        "cooldown": "12.0 / 11.6 / 11.2 / 10.8 / 10.4 / 10.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/leomord_3.png",
        "description": "Leomord [[blink"
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
                "name": "Dreamland Twist",
                "type": "Passive",
                "cooldown": "Passive",
                "cost": "No Cost",
                "icon": "/assets/images/skills/lunox_0.png",
                "description": "Lunox converts Cooldown Reduction into Magic Penetration (Chaos) or Physical & Magic Defense (Order)."
        },
        {
                "id": "lunox_s1",
                "name": "Starlight Pulse",
                "type": "Order Skill",
                "cooldown": "2.0s",
                "cost": "50-80 Mana",
                "icon": "/assets/images/skills/lunox_1.png",
                "description": "Lunox summons rain of starlight, dealing magic damage and healing herself based on targets hit."
        },
        {
                "id": "lunox_s2",
                "name": "Chaos Assault",
                "type": "Chaos Skill",
                "cooldown": "2.0s",
                "cost": "50-80 Mana",
                "icon": "/assets/images/skills/lunox_2.png",
                "description": "Lunox unleashes chaos energy forward, dealing Magic Damage plus percentage of target max HP."
        },
        {
                "id": "lunox_s3",
                "name": "Cosmic Fission",
                "type": "Skill 3",
                "cooldown": "10.0-8.0s",
                "cost": "70-95 Mana",
                "icon": "/assets/images/skills/lunox_3.png",
                "description": "Lunox fuses energy to slow and damage enemies in a path."
        },
        {
                "id": "lunox_ult_order",
                "name": "Power of Order: Brilliance",
                "type": "Ultimate (Order)",
                "cooldown": "25.0-17.0s",
                "cost": "120 Mana",
                "icon": "/assets/images/skills/lunox_4.png",
                "description": "Lunox enters the Light barrier, becoming invulnerable while continuously dealing magic damage to surrounding enemies."
        },
        {
                "id": "lunox_ult_chaos",
                "name": "Power of Chaos: Darkening",
                "type": "Ultimate (Chaos)",
                "cooldown": "25.0-17.0s",
                "cost": "120 Mana",
                "icon": "/assets/images/skills/lunox_5.png",
                "description": "Lunox blinks forward and enters Darkening state, removing cooldown on Chaos Assault for 4s."
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
                "name": "Ame no Habakiri",
                "type": "Passive",
                "cooldown": "Passive",
                "cost": "No Cost",
                "icon": "/assets/images/skills/hanzo_0.png",
                "description": "When units die near Hanzo, he absorbs their demonic blood to feed his Demon Blood gauge."
        },
        {
                "id": "hanzo_s1",
                "name": "Ninjutsu: Demon Feast",
                "type": "Skill 1",
                "cooldown": "9.0-6.5s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/hanzo_1.png",
                "description": "Unlocks after 5 basic attacks. Hanzo devours target jungle creep or minion, converting it to Demon Blood."
        },
        {
                "id": "hanzo_s2",
                "name": "Ninjutsu: Dark Mist",
                "type": "Skill 2",
                "cooldown": "7.5-5.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/hanzo_2.png",
                "description": "Hanzo opens a demonic zone, dealing physical damage over time and slowing enemies while collecting Demon Blood."
        },
        {
                "id": "hanzo_ult",
                "name": "Kinjutsu: Pinnacle Ninja",
                "type": "Ultimate",
                "cooldown": "35.0-25.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/hanzo_3.png",
                "description": "Hanzo projects Hanekage (Supreme Demon Ninja) forward across obstacles while leaving his physical body hidden behind."
        },
        {
                "id": "hanzo_s1_demon",
                "name": "Forbidden Ninjutsu: Soul Snatch",
                "type": "Demon Skill 1",
                "cooldown": "3.0s",
                "cost": "Demon Blood",
                "icon": "/assets/images/skills/hanzo_4.png",
                "description": "Hanekage vaults forward and delivers a wide claw swipe dealing physical damage based on target max HP."
        },
        {
                "id": "hanzo_s2_demon",
                "name": "Forbidden Ninjutsu: Black Mist",
                "type": "Demon Skill 2",
                "cooldown": "6.0s",
                "cost": "Demon Blood",
                "icon": "/assets/images/skills/hanzo_5.png",
                "description": "Hanekage transforms into dark mist and strikes enemies in the target area multiple times with invulnerability."
        },
        {
                "id": "hanzo_ult_recall",
                "name": "Ninjutsu: Flee Return",
                "type": "Demon Form Recall",
                "cooldown": "1.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/hanzo_6.png",
                "description": "Hanzo immediately recedes Hanekage back to his body or pulls his body to Hanekage location."
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
                "name": "Deadly Thorns",
                "type": "Passive",
                "cooldown": "0.4s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/belerick_0.png",
                "description": "Belerick gains 30% extra HP from equipment. Whenever he takes damage, he has a chance to shoot thorns at nearby enemies."
        },
        {
                "id": "belerick_s1",
                "name": "Ancient Seed",
                "type": "Skill 1",
                "cooldown": "8.0-6.0s",
                "cost": "60-85 Mana",
                "icon": "/assets/images/skills/belerick_1.png",
                "description": "Belerick releases vines forward, dealing magic damage and taunting enemies trapped in the path after a delay."
        },
        {
                "id": "belerick_s2",
                "name": "Nature's Strike",
                "type": "Skill 2",
                "cooldown": "8.0-5.5s",
                "cost": "50-75 Mana",
                "icon": "/assets/images/skills/belerick_2.png",
                "description": "Belerick gains 80% bonus Movement Speed and heals HP on his next empowered Basic Attack."
        },
        {
                "id": "belerick_ult",
                "name": "Wrath of Dryad",
                "type": "Ultimate",
                "cooldown": "40.0-30.0s",
                "cost": "100-140 Mana",
                "icon": "/assets/images/skills/belerick_3.png",
                "description": "Belerick erupts ancient vines in a wide expanding circle, taunting all nearby enemies and dealing Magic Damage."
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
        "name": "Aerial Dominance",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/kimmy_0.png",
        "description": "Kimmy can move and aim in different directions when using her Spray Gun, but cannot lock on to a specific enemy. Kimmy's Spray Gun attack deals {{scale"
      },
      {
        "id": "kimmy_s1",
        "name": "Anti-Grav Thruster",
        "type": "Skill 1",
        "cooldown": "14.0 / 13.0 / 12.0 / 11.0 / 10.0 / 9.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/kimmy_1.png",
        "description": "Kimmy uses her jetpack to take flight, removing and becoming immune to Slow Effects. She can pass through terrain and gains 90% Movement Speed for 1 second. During the flight, she fires 4 Chemical Bolts at nearby enemies, each dealing {{scale"
      },
      {
        "id": "kimmy_s2",
        "name": "Starlium Beam",
        "type": "Skill 2",
        "cooldown": "10.0 / 9.6 / 9.2 / 8.8 / 8.4 / 8.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/kimmy_2.png",
        "description": "Kimmy fires a Starlium Beam in the target direction that immobilizes enemies in its path and deals {{scale"
      },
      {
        "id": "kimmy_ult",
        "name": "Traction Pulse",
        "type": "Ultimate",
        "cooldown": "40.0 / 35.0 / 30.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/kimmy_3.png",
        "description": "Kimmy charges and fires a Traction Pulse in a target direction. Upon hitting an enemy or reaching its max range, it explodes to deal {{scale"
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
        "name": "Grand Lord Lava",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/thamuz_0.png",
        "description": "Thamuz's {{ii"
      },
      {
        "id": "thamuz_s1",
        "name": "Molten Scythes",
        "type": "Skill 1",
        "cooldown": "3.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/thamuz_1.png",
        "description": "Thamuz tosses {{Link"
      },
      {
        "id": "thamuz_s2",
        "name": "Chasm Trample",
        "type": "Skill 2",
        "cooldown": "8.0 /7.6 / 7.2 / 6.8 / 6.4 / 6.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/thamuz_2.png",
        "description": "Thamuz [[Blink"
      },
      {
        "id": "thamuz_ult",
        "name": "Cauterant Inferno",
        "type": "Ultimate",
        "cooldown": "38.0 / 34.0 / 30.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/thamuz_3.png",
        "description": "Thamuz spouts the lava stored in his body, dealing {{scale"
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
        "name": "Key Insight",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/harith_0.png",
        "description": "Harith gains insight from his Key. He gains 7% Hybrid Lifesteal for each nearby enemy hero, stacking up to 35%."
      },
      {
        "id": "harith_s1",
        "name": "Synchro Fission",
        "type": "Skill 1",
        "cooldown": "5.0s",
        "cost": "50 / 55 / 60 / 65 / 70 / 75",
        "icon": "/assets/images/skills/harith_1.png",
        "description": "Harith creates a phantom of himself in a distant location. Harith and his phantom will then release {{ai"
      },
      {
        "id": "harith_s2",
        "name": "Chrono Dash",
        "type": "Skill 2",
        "cooldown": "9.3s",
        "cost": "40 / 43 / 46/ 49 / 52 / 55",
        "icon": "/assets/images/skills/harith_2.png",
        "description": "Harith dashes towards the target direction. When he arrives, he steals Magic power from enemy heroes, generates a shield that absorbs at least {{scale"
      },
      {
        "id": "harith_ult",
        "name": "Zaman Force",
        "type": "Ultimate",
        "cooldown": "40.0 / 35.0 / 30.0s",
        "cost": "120 / 160 /200",
        "icon": "/assets/images/skills/harith_3.png",
        "description": "Harith uses his Key to summon the {{ai"
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
        "name": "Mark of the King",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/minsitthar_0.png",
        "description": "Minsitthar's Basic Attacks and skills apply a stack of {{b"
      },
      {
        "id": "minsitthar_s1",
        "name": "Spear of Glory",
        "type": "Skill 1",
        "cooldown": "13.0 / 12.2 / 11.4 / 10.6 / 9.8 / 9.0s",
        "cost": "95 / 105 / 115 / 125 / 135 / 145",
        "icon": "/assets/images/skills/minsitthar_1.png",
        "description": "Minsitthar thrusts forward with the Spear of Glory, dealing {{scale"
      },
      {
        "id": "minsitthar_s2",
        "name": "Shield Assault",
        "type": "Skill 2",
        "cooldown": "7.0 / 6.6 / 6.2 / 5.8 / 5.4 / 5.0s",
        "cost": "50 / 55 / 60 / 65 / 70 / 75",
        "icon": "/assets/images/skills/minsitthar_2.png",
        "description": "Minsitthar awakens the power in his shield and releases it, dealing {{scale"
      },
      {
        "id": "minsitthar_ult",
        "name": "King's Calling",
        "type": "Ultimate",
        "cooldown": "60.0 / 55.0 / 50.0s",
        "cost": "150 / 200 / 250",
        "icon": "/assets/images/skills/minsitthar_3.png",
        "description": "Minsitthar [[Blink"
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
        "name": "Thalassophobia",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/kadita_0.png",
        "description": "Kadita gains the {{b"
      },
      {
        "id": "kadita_s1",
        "name": "Ocean Ode",
        "type": "Skill 1",
        "cooldown": "9.0 / 8.5 / 8.0 / 7.5 / 7.0 / 6.5s",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "icon": "/assets/images/skills/kadita_1.png",
        "description": "Kadita summons an ocean wave to carry herself in the target direction and back, dealing {{scale"
      },
      {
        "id": "kadita_s2",
        "name": "Breath of the Ocean",
        "type": "Skill 2",
        "cooldown": "8.0s",
        "cost": "90 / 100 / 110 / 120 / 130 / 140",
        "icon": "/assets/images/skills/kadita_2.png",
        "description": "After a short delay, Kadita summons an ocean wave to erupt at the target location, dealing {{Scale"
      },
      {
        "id": "kadita_ult",
        "name": "Rough Waves",
        "type": "Ultimate",
        "cooldown": "40.0 / 36.0 / 32.0s",
        "cost": "200 / 240 / 280",
        "icon": "/assets/images/skills/kadita_3.png",
        "description": "Kadita dives into the ground and sends ocean waves in all directions, each dealing {{scale"
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
        "name": "Vicious Retrieval",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/faramis_0.png",
        "description": "Every 4 seconds, Faramis's next skill against enemy heroes and summoned objects generates a soul fragment on the spot. Faramis can absorb the soul fragment to restore {{Scale"
      },
      {
        "id": "faramis_s1",
        "name": "Shadow Stampede",
        "type": "Skill 1",
        "cooldown": "15.0s",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "icon": "/assets/images/skills/faramis_1.png",
        "description": "Faramis enters the Shadow state for 3 seconds, gaining 70% extra Movement Speed, 25 extra [[Physical defense"
      },
      {
        "id": "faramis_s2",
        "name": "Ghost Bursters",
        "type": "Skill 2",
        "cooldown": "6.0 / 5.8 / 5.6 / 5.4 / 5.2 / 5.0s",
        "cost": "75 / 85 / 95 / 105 / 115 / 125",
        "icon": "/assets/images/skills/faramis_2.png",
        "description": "Faramis gathers Nether energy in a fan-shaped area ahead, dealing {{Scale"
      },
      {
        "id": "faramis_ult",
        "name": "Nether Realm",
        "type": "Ultimate",
        "cooldown": "80.0 / 75.0 / 70.0s",
        "cost": "150 / 250 / 350",
        "icon": "/assets/images/skills/faramis_3.png",
        "description": "Faramis turns his surroundings into the {{b"
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
        "name": "Chivalry Fist",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/badang_0.png",
        "description": "After every 4 {{ai"
      },
      {
        "id": "badang_s1",
        "name": "Fist Wind",
        "type": "Skill 1",
        "cooldown": "10.4 / 9.8 / 9.2 / 8.6 / 8.0 / 7.2s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/badang_1.png",
        "description": "Badang unleashes a gust of {{ai"
      },
      {
        "id": "badang_s2",
        "name": "Fist Break",
        "type": "Skill 2",
        "cooldown": "9.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/badang_2.png",
        "description": "Badang [[blink"
      },
      {
        "id": "badang_ult",
        "name": "Fist Crack",
        "type": "Ultimate",
        "cooldown": "30.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/badang_3.png",
        "description": "Badang throws a flurry of punches in the target direction, dealing {{scale"
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
        "name": "Super Magic",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/guinevere_0.png",
        "description": "Guinevere deals 25% extra damage to airborne enemies and deals {{Scale"
      },
      {
        "id": "guinevere_s1",
        "name": "Energy Wave",
        "type": "Skill 1",
        "cooldown": "4.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/guinevere_1.png",
        "description": "Guinevere releases an energy orb in the target direction, dealing {{Scale"
      },
      {
        "id": "guinevere_s2",
        "name": "Spatial Migration",
        "type": "Skill 2",
        "cooldown": "17.0 / 16.4 / 15.8 / 15.2 / 14.6 / 14.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/guinevere_2.png",
        "description": "Guinevere leaps to the target location, dealing {{Scale"
      },
      {
        "id": "guinevere_ult",
        "name": "Violet Requiem",
        "type": "Ultimate",
        "cooldown": "52.0 / 46.0 / 40.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/guinevere_3.png",
        "description": "Guinevere creates a force field around her [for 2 seconds], attacking nearby enemies 11 times within 2 seconds, dealing {{Scale"
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
        "name": "Starmoon Casket",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/esmeralda_0.png",
        "description": "Esmeralda manipulates Stardust and Frostmoon: Stardust deals Physical Damage while Frostmoon deals Magic Damage and gives the target a shield equal to 135% of Frostmoon's damage dealt. Each Basic Attack deals {{scale"
      },
      {
        "id": "esmeralda_s1",
        "name": "Frostmoon Shield",
        "type": "Skill 1",
        "cooldown": "8s",
        "cost": "60 / 70 / 80 / 90 / 100 / 110",
        "icon": "/assets/images/skills/esmeralda_1.png",
        "description": "Esmeralda gains {{scale"
      },
      {
        "id": "esmeralda_s2",
        "name": "Stardust Dance",
        "type": "Skill 2",
        "cooldown": "4.5 / 4.3 / 4.1 / 3.9 / 3.7 / 3.5s",
        "cost": "75 / 80 / 85 / 90 / 95 / 100",
        "icon": "/assets/images/skills/esmeralda_2.png",
        "description": "Esmeralda waves Stardust and Frostmoon, dealing {{scale"
      },
      {
        "id": "esmeralda_ult",
        "name": "Falling Starmoon",
        "type": "Ultimate",
        "cooldown": "32.0 / 28.0 / 24.0s",
        "cost": "150 / 200 / 250",
        "icon": "/assets/images/skills/esmeralda_3.png",
        "description": "Esmeralda coheres the power of Astrospace into her two weapons - Stardust and Frostmoon. The longer this skill is channeled, the longer the cast range. {{B"
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
        "name": "Body of Smith",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/terizla_0.png",
        "description": "Terizla gains 1% extra Damage Reduction (up to {{scale"
      },
      {
        "id": "terizla_s1",
        "name": "Revenge Strike",
        "type": "Skill 1",
        "cooldown": "8.5s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/terizla_1.png",
        "description": "Terizla cracks the ground with his hammer and the fissure will spread out, dealing {{scale"
      },
      {
        "id": "terizla_s2",
        "name": "Execution Strike",
        "type": "Skill 2",
        "cooldown": "9.0 / 8.0 / 7.0 / 6.0 / 5.0 / 4.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/terizla_2.png",
        "description": "Terizla swings his hammer in a fan-shaped area ahead. This skill can be cast up to 3 times. The first two attacks deal {{Scale"
      },
      {
        "id": "terizla_ult",
        "name": "Penalty Zone",
        "type": "Ultimate",
        "cooldown": "50.0 / 43.0 / 36.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/terizla_3.png",
        "description": "Terizla [[blink"
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
        "name": "Firaga Armor",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/xborg_0.png",
        "description": "X.Borg's [HP inherits {{scale"
      },
      {
        "id": "xborg_s1",
        "name": "Fire Missiles",
        "type": "Skill 1",
        "cooldown": "4.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/xborg_1.png",
        "description": "X.Borg sprays fire, dealing {{scale"
      },
      {
        "id": "xborg_s2",
        "name": "Fire Stake",
        "type": "Skill 2",
        "cooldown": "12 / 11.4 / 10.8 / 10.2 / 9.6 / 9s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/xborg_2.png",
        "description": "X.Borg shoots 5 Fire Stakes at the edge of the fan-shaped indicator and retrieves them after 1.7 seconds, each dealing {{scale"
      },
      {
        "id": "xborg_ult",
        "name": "Last Insanity",
        "type": "Ultimate",
        "cooldown": "30.0 / 27.0 / 24.0s",
        "cost": "100",
        "icon": "/assets/images/skills/xborg_3.png",
        "description": "X.Borg [[Blink"
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
        "name": "Wrath of the Abyss",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/dyrroth_0.png",
        "description": "When Dyrroth's {{B"
      },
      {
        "id": "dyrroth_s1",
        "name": "Burst Strike",
        "type": "Skill 1",
        "cooldown": "5.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/dyrroth_1.png",
        "description": "Dyrroth releases a burst strike in a designated direction. Each burst deals {{Scale"
      },
      {
        "id": "dyrroth_s2",
        "name": "Spectre Step",
        "type": "Skill 2",
        "cooldown": "8.0 / 7.2 / 6.4 / 5.6 / 4.8 / 4.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/dyrroth_2.png",
        "description": "Dyrroth dashes in the designated direction. He will stop when he hits a [non-minion] target, dealing {{Scale"
      },
      {
        "id": "dyrroth_ult",
        "name": "Abysm Strike",
        "type": "Ultimate",
        "cooldown": "36.0 / 32.0 / 28.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/dyrroth_3.png",
        "description": "After a short delay, Dyrroth launches a destrucive strike in the target direction (cannot be interrupted), dealing {{Scale"
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
        "name": "Angry Gloom",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/lylia_0.png",
        "description": "Lylia gets power from {{b"
      },
      {
        "id": "lylia_s1",
        "name": "Magic Shockwave",
        "type": "Skill 1",
        "cooldown": "4.0s",
        "cost": "50 / 55 / 60 / 65 / 70 / 75",
        "icon": "/assets/images/skills/lylia_1.png",
        "description": "Lylia sends out {{b"
      },
      {
        "id": "lylia_s2",
        "name": "Shadow Energy",
        "type": "Skill 2",
        "cooldown": "1.0s",
        "cost": "40 / 50 / 60 / 70 / 80 / 90 / 100",
        "icon": "/assets/images/skills/lylia_2.png",
        "description": "Lylia condenses {{b"
      },
      {
        "id": "lylia_ult",
        "name": "Black Shoes",
        "type": "Ultimate",
        "cooldown": "45.0 / 40.0 / 35.0s",
        "cost": "120 / 60 / 0",
        "icon": "/assets/images/skills/lylia_3.png",
        "description": "Lylia {{b"
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
        "name": "Baxia Mark",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/baxia_0.png",
        "description": "Baxia activates the {{ai"
      },
      {
        "id": "baxia_s1",
        "name": "Baxia-Shield Unity",
        "type": "Skill 1",
        "cooldown": "15.0 / 14.4 / 13.8 / 13.2 / 12.6 / 12.0s",
        "cost": "100 / 110 / 120 / 130 / 140 / 150",
        "icon": "/assets/images/skills/baxia_1.png",
        "description": "Baxia retracts himself into his shield and accelerates forward [for 9 seconds]. When hitting an enemy unit, he will deal {{scale"
      },
      {
        "id": "baxia_s2",
        "name": "Shield of Spirit",
        "type": "Skill 2",
        "cooldown": "10.0 / 9.4 / 8.8 / 8.2 / 7.6 / 7.0s",
        "cost": "25 / 30 / 35 / 40 / 45 / 50",
        "icon": "/assets/images/skills/baxia_2.png",
        "description": "Baxia throws his shield forward that will disappear upon hitting an enemy hero or creeps, dealing {{scale"
      },
      {
        "id": "baxia_ult",
        "name": "Tortoise's Puissance",
        "type": "Ultimate",
        "cooldown": "40.0 / 37.5 / 35.0s",
        "cost": "150 / 175 / 200",
        "icon": "/assets/images/skills/baxia_3.png",
        "description": "Baxia holds his shield to the front and begins sprinting frantically, gaining 30% extra Movement Speed for 10 seconds while leaving a lava path behind. Enemies on the path will take {{scale"
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
        "name": "Primal Pact",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/masha_0.png",
        "description": "{{link"
      },
      {
        "id": "masha_s1",
        "name": "Feral Swipe",
        "type": "Skill 1",
        "cooldown": "8.0 / 7.6 / 7.2 / 6.8 / 6.4 / 6.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/masha_1.png",
        "description": "Masha releases energy foward, dealing {{scale"
      },
      {
        "id": "masha_s2",
        "name": "Claw Strike",
        "type": "Skill 2",
        "cooldown": "9.0 / 8.6 / 8.2 / 7.8 / 7.4 / 7.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/masha_2.png",
        "description": "Masha dashes in the target direction, dealing {{scale"
      },
      {
        "id": "masha_ult",
        "name": "Savage Maul",
        "type": "Ultimate",
        "cooldown": "42.0 / 38.0 / 34.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/masha_3.png",
        "description": "Masha charges toward an enemy hero, dealing {{scale"
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
        "name": "Tiger Pace",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/wanwan_0.png",
        "description": "Enemy heroes hit by Wanwan's attacks will have their weakness[es] exposed and position revealed for 5 seconds. When hitting an enemy's weakness, Wanwan deals {{scale"
      },
      {
        "id": "wanwan_s1",
        "name": "Swallow's Path",
        "type": "Skill 1",
        "cooldown": "10.0 / 9.6 / 9.2 / 8.8 / 8.4 / 8.0s",
        "cost": "85 / 90 / 95 / 100 / 105 / 110",
        "icon": "/assets/images/skills/wanwan_1.png",
        "description": "Wanwan throws a Fire Swallow in the target direction, triggering {{ai"
      },
      {
        "id": "wanwan_s2",
        "name": "Needles in Flowers",
        "type": "Skill 2",
        "cooldown": "24.0 / 23.2 / 22.4 / 21.6 / 20.8 / 20.0s",
        "cost": "100 / 95 / 90 / 85 / 80 / 75",
        "icon": "/assets/images/skills/wanwan_2.png",
        "description": "Wanwan removes all control effects on herself and triggers {{ai"
      },
      {
        "id": "wanwan_ult",
        "name": "Crossbow of Tang",
        "type": "Ultimate",
        "cooldown": "50.0 / 46.0 / 42.0s",
        "cost": "130 / 150 / 170",
        "icon": "/assets/images/skills/wanwan_3.png",
        "description": "Wanwan leaps into the air and fires arrows at the target enemy hero for 2.5 seconds in rapid succession, dealing {{scale"
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
        "name": "Knightess' Resolve",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/silvanna_0.png",
        "description": "Silvanna's Basic Attacks deal {{scale"
      },
      {
        "id": "silvanna_s1",
        "name": "Cometic Lance",
        "type": "Skill 1",
        "cooldown": "11.0 / 10.6 / 10.2 / 9.8 / 9.4 / 9.0s",
        "cost": "70 / 78 / 86 / 94 / 102 / 110",
        "icon": "/assets/images/skills/silvanna_1.png",
        "description": "Strikes with her lance, stunning the first enemy hero hit and granting bonus movement speed."
      },
      {
        "id": "silvanna_s2",
        "name": "Spiral Strangling",
        "type": "Skill 2",
        "cooldown": "5.5 / 5.3 / 5.1 / 4.9 / 4.7 / 4.5s",
        "cost": "35 / 40 / 45 / 50 / 55 / 60",
        "icon": "/assets/images/skills/silvanna_2.png",
        "description": "Silvanna thrusts her lance in the target direction and spins it 6 times while gaining a {{scale"
      },
      {
        "id": "silvanna_ult",
        "name": "Imperial Justice",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/silvanna_3.png",
        "description": "Leaps into a designated area, creating the Circle of Light which restrains the enemy within for 3.5s and boosts attack speed."
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
        "name": "Overflowing",
        "type": "Passive",
        "cooldown": "1.0",
        "cost": "No Cost",
        "icon": "/assets/images/skills/cecilion_0.png",
        "description": "Cecilion increases his {{b"
      },
      {
        "id": "cecilion_s1",
        "name": "Bat Impact",
        "type": "Skill 1",
        "cooldown": "1.5s",
        "cost": "75",
        "icon": "/assets/images/skills/cecilion_1.png",
        "description": "Cecilion orders a giant bat to dive in a designated direction, dealing {{Scale"
      },
      {
        "id": "cecilion_s2",
        "name": "Sanguine Claws",
        "type": "Skill 2",
        "cooldown": "12.0 / 11.2 / 10.4 / 9.6 / 8.8 / 8.0s",
        "cost": "95 / 100 / 105 / 110 / 115 / 120",
        "icon": "/assets/images/skills/cecilion_2.png",
        "description": "Cecilion summons a pair of claws in a designated location. After a short delay, the claws will move toward each other and {{b"
      },
      {
        "id": "cecilion_ult",
        "name": "Bats Feast",
        "type": "Ultimate",
        "cooldown": "44.0 / 41.0 / 38.0s",
        "cost": "150 / 200 / 250",
        "icon": "/assets/images/skills/cecilion_3.png",
        "description": "Cecilion unleashes Blood Demon power [for 6 seconds], increasing his {{b"
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
        "name": "Vampire Pact",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/carmilla_0.png",
        "description": "Each time Carmilla deals damage to an enemy hero, she steals 7&ndash;11 Physical Defense & Magic Defense (scales with level) from them. The stolen Physical and Magic Defense can stack up to 5 times and last 5 seconds. However, Carmilla can only steal defense from the same enemy hero once every 5 seconds."
      },
      {
        "id": "carmilla_s1",
        "name": "Crimson Flower",
        "type": "Skill 1",
        "cooldown": "9.0s",
        "cost": "50 / 58 / 66 / 74 / 82 / 90",
        "icon": "/assets/images/skills/carmilla_1.png",
        "description": "Carmilla summons two Crimson Flowers that circle around her for 5 seconds dealing {{Scale"
      },
      {
        "id": "carmilla_s2",
        "name": "Bloodbath",
        "type": "Skill 2",
        "cooldown": "12.0 / 11.2 / 10.4 / 9.6 / 8.8 / 8.0s",
        "cost": "85 / 100 / 115 / 130 / 145 / 160",
        "icon": "/assets/images/skills/carmilla_2.png",
        "description": "Carmilla accumulates Bloodbath Energy, gaining 70% Movement Speed that decays over 4.5 seconds. {{Link"
      },
      {
        "id": "carmilla_ult",
        "name": "Curse of Blood",
        "type": "Ultimate",
        "cooldown": "60.0/52.0/44.0s",
        "cost": "150 / 175 / 200",
        "icon": "/assets/images/skills/carmilla_3.png",
        "description": "Carmilla casts Curse of Blood on the target location, slowing enemies hit by 50%. After 0.8 seconds, enemies still within the area will take {{scale"
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
        "name": "Frigid Breath",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/atlas_0.png",
        "description": "Atlas generates {{ai"
      },
      {
        "id": "atlas_s1",
        "name": "Annihilate",
        "type": "Skill 1",
        "cooldown": "7.0 / 6.5 / 6.0 / 5.5 / 5.0 / 4.5s",
        "cost": "60 / 66 / 72 / 78 / 84 / 90",
        "icon": "/assets/images/skills/atlas_1.png",
        "description": "Atlas smashes the ground and causes 3 explosions. Each explosion deals {{Scale"
      },
      {
        "id": "atlas_s2",
        "name": "Perfect Match",
        "type": "Skill 2",
        "cooldown": "15.0 / 14.0 / 13.0 / 12.0 / 11.0 / 10.0s",
        "cost": "75 / 80 / 85 / 90 / 95 / 100",
        "icon": "/assets/images/skills/atlas_2.png",
        "description": "Atlas enters {{b"
      },
      {
        "id": "atlas_ult",
        "name": "Fatal Links",
        "type": "Ultimate",
        "cooldown": "55.0 / 50.0 / 45.0s",
        "cost": "130 / 150 / 170",
        "icon": "/assets/images/skills/atlas_3.png",
        "description": "Atlas hurls chains around and starts to channel (can only be interrupted by {{b"
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
        "id": "popol_p",
        "name": "We Are Friends",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/popolandkupa_0.png",
        "description": "Popol fights alongside his companion Kupa. When Kupa falls, Popol can pray to resurrect Kupa."
      },
      {
        "id": "popol_s1",
        "name": "Bite 'em, Kupa!",
        "type": "Skill 1",
        "cooldown": "6.5s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/popolandkupa_1.png",
        "description": "Popol throws a spear and commands Kupa to bite the target, dealing damage and stunning for 1s."
      },
      {
        "id": "popol_s2",
        "name": "Kupa, Help!",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "60 Mana",
        "icon": "/assets/images/skills/popolandkupa_2.png",
        "description": "Popol summons Kupa back to his side immediately, gaining a defensive shield and knocking up nearby foes."
      },
      {
        "id": "popol_s3",
        "name": "Popol's Surprise",
        "type": "Skill 3",
        "cooldown": "18.0s",
        "cost": "70 Mana",
        "icon": "/assets/images/skills/popolandkupa_3.png",
        "description": "Popol sets a hidden trap that provides vision, immobilizes, and reduces target movement speed."
      },
      {
        "id": "popol_ult",
        "name": "We Are Angry!",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/popolandkupa_4.png",
        "description": "Popol and Kupa enter an enraged battle fury, granting Kupa increased attack speed, movement speed, and empowering all companion skills."
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
        "name": "Duality",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/luoyi_0.png",
        "description": "Luo Yi's skills create {{b"
      },
      {
        "id": "luoyi_s1",
        "name": "Dispersion",
        "type": "Skill 1",
        "cooldown": "1.2s",
        "cost": "50 / 58 / 66 / 74 / 82 / 90",
        "icon": "/assets/images/skills/luoyi_1.png",
        "description": "Luo Yi casts the energy of {{B"
      },
      {
        "id": "luoyi_s2",
        "name": "Rotation",
        "type": "Skill 2",
        "cooldown": "12.0s",
        "cost": "120 / 130 / 140 / 150 / 160 / 170",
        "icon": "/assets/images/skills/luoyi_2.png",
        "description": "Luo Yi summons {{B"
      },
      {
        "id": "luoyi_ult",
        "name": "Diversion",
        "type": "Ultimate",
        "cooldown": "55.0 / 50.0 / 45.0s",
        "cost": "0",
        "icon": "/assets/images/skills/luoyi_3.png",
        "description": "{{b"
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
        "name": "Elapsed Daytime",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/benedetta_0.png",
        "description": "When holding down the Basic Attack button, Benedetta enters the {{b"
      },
      {
        "id": "benedetta_s1",
        "name": "Phantom Slash",
        "type": "Skill 1",
        "cooldown": "10.0 / 9.3 / 8.6 / 7.9 / 7.2 / 6.5s",
        "cost": "55 / 61 / 67 / 73 / 79 / 85",
        "icon": "/assets/images/skills/benedetta_1.png",
        "description": "Benedetta withdraws swiftly and leaves a shadow in front. After a short delay, her shadow slashes forward in a fan-shaped area, dealing {{Scale"
      },
      {
        "id": "benedetta_s2",
        "name": "An Eye for An Eye",
        "type": "Skill 2",
        "cooldown": "15.0 / 14.4 / 13.8 / 13.2 / 12.6 / 12.0s",
        "cost": "100 / 105 / 110 / 115 / 120 / 125",
        "icon": "/assets/images/skills/benedetta_2.png",
        "description": "Benedetta raises her weapon to defend, gaining Control Immunity and [[damage immunity"
      },
      {
        "id": "benedetta_ult",
        "name": "Alecto: Final Blow",
        "type": "Ultimate",
        "cooldown": "45.0 / 40.0 / 35.0s",
        "cost": "110 / 135 / 160",
        "icon": "/assets/images/skills/benedetta_3.png",
        "description": "Benedetta clenches Alecto, dashes forward (Benedetta is untargetable during the dash), and performs a slash after a short delay, [''duration needed''] detonating the Sword Intent along the path. For 2.5 seconds, the Sword Intent deals up to a total of {{Scale"
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
        "name": "Sand Walk",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/khaleed_0.png",
        "description": "Khaleed accumulates Desert Power while moving. After Desert Power is fully charged, he will glide on sand, increasing Movement Speed by 35%, making his next {{ai"
      },
      {
        "id": "khaleed_s1",
        "name": "Desert Tornado",
        "type": "Skill 1",
        "cooldown": "6.5 / 6.0 / 5.5 / 5.0 / 4.5 / 4.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/khaleed_1.png",
        "description": "Khaleed whirls his scimitar, dealing {{scale"
      },
      {
        "id": "khaleed_s2",
        "name": "Quicksand Guard",
        "type": "Skill 2",
        "cooldown": "22.0 / 21.0 / 20.0 / 19.0 / 18.0 / 17.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/khaleed_2.png",
        "description": "Khaleed protects himself with the power of the quicksand, restoring 60-135 plus 5%-10% of his lost HP and 10 Desert Power every 0.5 seconds, reducing damage taken by 35%-50% for up to 4 seconds. While channeling, quicksand appears under his feet, [[slow"
      },
      {
        "id": "khaleed_ult",
        "name": "Raging Sandstorm",
        "type": "Ultimate",
        "cooldown": "46.0 / 42.0 / 38.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/khaleed_3.png",
        "description": "Khaleed rides the sandstorm and [[blink"
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
        "name": "Big Guy",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/barats_0.png",
        "description": "Detona gains a stack of {{b"
      },
      {
        "id": "barats_s1",
        "name": "So-Called Teamwork",
        "type": "Skill 1",
        "cooldown": "7.0 / 6.6 / 6.2 / 5.8 / 5.4 / 5.0s",
        "cost": "25 / 30 / 35 / 40 / 45 / 50",
        "icon": "/assets/images/skills/barats_1.png",
        "description": "Detona spits contaminated oil in the target direction, dealing {{scale"
      },
      {
        "id": "barats_s2",
        "name": "Missile \"Expert\"",
        "type": "Skill 2",
        "cooldown": "11.0 / 10.4 / 9.8 / 9.2 / 8.6 / 8.0s",
        "cost": "70 / 76 / 82 / 88 / 94 / 100",
        "icon": "/assets/images/skills/barats_2.png",
        "description": "Barats fires two missiles at the target location, dealing {{scale"
      },
      {
        "id": "barats_ult",
        "name": "Detona's Welcome",
        "type": "Ultimate",
        "cooldown": "60.0 / 55.0 / 50.0s",
        "cost": "100 / 120 / 140",
        "icon": "/assets/images/skills/barats_3.png",
        "description": "After a short delay, Detona charges in the target direction, dealing {{scale"
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
        "name": "Abyss Corrosion",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/brody_0.png",
        "description": "With his Basic Attacks resonated with the Abyss Power within his body, Brody is able to move while winding up his {{ai"
      },
      {
        "id": "brody_s1",
        "name": "Abyss Impact",
        "type": "Skill 1",
        "cooldown": "4.0s",
        "cost": "40 / 50 / 60 / 70 / 80 / 90",
        "icon": "/assets/images/skills/brody_1.png",
        "description": "Brody launches a shock wave in the designated direction, dealing {{Scale"
      },
      {
        "id": "brody_s2",
        "name": "Corrosive Strike",
        "type": "Skill 2",
        "cooldown": "8.0 / 7.6 / 7.2 / 6.8 / 6.4 / 6.0s",
        "cost": "75 / 80 / 85 / 90 / 95 / 100",
        "icon": "/assets/images/skills/brody_2.png",
        "description": "Brody dashes to an enemy, dealing {{Scale"
      },
      {
        "id": "brody_ult",
        "name": "Torn-Apart Memory",
        "type": "Ultimate",
        "cooldown": "24.0 / 21.0 / 19.0s",
        "cost": "120 / 160 / 200",
        "icon": "/assets/images/skills/brody_3.png",
        "description": "Brody locks on all the targets within 8 yard(s), dealing {{Scale"
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
        "name": "Galactic Power",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/yve_0.png",
        "description": "Yve gains a stack of {{b"
      },
      {
        "id": "yve_s1",
        "name": "Void Blast",
        "type": "Skill 1",
        "cooldown": "5.0 / 4.5 / 4.0 / 3.5 / 3.0 / 2.5s",
        "cost": "65 / 70 / 75 / 80 / 85 / 90",
        "icon": "/assets/images/skills/yve_1.png",
        "description": "Yve detonates {{b"
      },
      {
        "id": "yve_s2",
        "name": "Void Crystal",
        "type": "Skill 2",
        "cooldown": "14.0 / 13.6 / 13.2 / 12.8 / 12.4 / 12.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/yve_2.png",
        "description": "Yve summons a {{b"
      },
      {
        "id": "yve_ult",
        "name": "Real World Manipulation",
        "type": "Ultimate",
        "cooldown": "60.0s",
        "cost": "180 / 220 / 260",
        "icon": "/assets/images/skills/yve_3.png",
        "description": "Yve creates a {{b"
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
        "name": "Ancestral Guidance",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/mathilda_0.png",
        "description": "Mathilda gains {{ai"
      },
      {
        "id": "mathilda_s1",
        "name": "Soul Bloom",
        "type": "Skill 1",
        "cooldown": "7.5s",
        "cost": "60 / 70 / 80 / 90 / 100 / 110",
        "icon": "/assets/images/skills/mathilda_1.png",
        "description": "Mathilda resonates with the power of her ancestors for 4 seconds, attracting wisps that as her movement distance increases (up to 6 wisps). At the end of the skill's duration, or when Mathilda cast this skill again, the wisps will seek the attack nearby enemies, each dealing {{Scale"
      },
      {
        "id": "mathilda_s2",
        "name": "Guiding Wind",
        "type": "Skill 2",
        "cooldown": "12.0 / 11.8 / 11.6 / 11.4 / 11.2 / 11.0s",
        "cost": "75 / 80 / 85 / 90 / 95 / 100",
        "icon": "/assets/images/skills/mathilda_2.png",
        "description": "Mathilda [[blink"
      },
      {
        "id": "mathilda_ult",
        "name": "Circling Eagle",
        "type": "Ultimate",
        "cooldown": "40.0s",
        "cost": "150 / 180 / 210",
        "icon": "/assets/images/skills/mathilda_3.png",
        "description": "Mathilda applies a {{b"
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
        "name": "Champ Stance",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/paquito_0.png",
        "description": "After every 3 skill casts, Paquito enters {{b"
      },
      {
        "id": "paquito_s1",
        "name": "Heavy Left Punch",
        "type": "Skill 1",
        "cooldown": "8.0 / 7.6 / 7.2 / 6.8 / 6.4 / 6.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/paquito_1.png",
        "description": "Paquito throws a punch in the target direction, dealing {{Scale"
      },
      {
        "id": "paquito_s2",
        "name": "Jab",
        "type": "Skill 2",
        "cooldown": "8.0 / 7.5 / 7.0 / 6.5 / 6.0 / 5.5s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/paquito_2.png",
        "description": "Paquito dashes in the target direction and throws a jab, dealing {{Scale"
      },
      {
        "id": "paquito_ult",
        "name": "Knockout Strike",
        "type": "Ultimate",
        "cooldown": "18.0 / 16.5 / 15.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/paquito_3.png",
        "description": "Paquito launches an [[Blink"
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
        "name": "Stick, Stick",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/gloo_0.png",
        "description": "Enemies gain a stack of {{link"
      },
      {
        "id": "gloo_s1",
        "name": "Slam, Slam",
        "type": "Skill 1",
        "cooldown": "10.0 / 9.2 / 8.4 / 7.6 / 6.8 / 6.0s",
        "cost": "25 / 30 / 35 / 40 / 45 / 50",
        "icon": "/assets/images/skills/gloo_1.png",
        "description": "Gloo reaches out and slams the ground, dealing {{scale"
      },
      {
        "id": "gloo_s2",
        "name": "Spread, Spread",
        "type": "Skill 2",
        "cooldown": "12.0 / 11.6 / 11.2 / 10.8 / 10.4 / 10.0s",
        "cost": "80 / 88 / 96 / 104 / 112 / 120",
        "icon": "/assets/images/skills/gloo_2.png",
        "description": "Gloo splits into Goos, dealing {{scale"
      },
      {
        "id": "gloo_ult",
        "name": "Grab, Grab",
        "type": "Ultimate",
        "cooldown": "50.0s",
        "cost": "150",
        "icon": "/assets/images/skills/gloo_3.png",
        "description": "Unlocked when any enemy hero has full Sticky stacks. Gloo attaches itself to the target enemy hero for up to 9 seconds, recovering 25%-30% of its {{AVC1"
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
        "name": "Demonic Force",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/phoveus_0.png",
        "description": "Phoveus' next {{ai"
      },
      {
        "id": "phoveus_s1",
        "name": "Demonic Impact",
        "type": "Skill 1",
        "cooldown": "6.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/phoveus_1.png",
        "description": "Phoveus slams his monolith into the ground, dealing {{scale"
      },
      {
        "id": "phoveus_s2",
        "name": "Dark Wave",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/phoveus_2.png",
        "description": "Phoveus drops the stone and releases his demonic power in the target direction, [[airborne"
      },
      {
        "id": "phoveus_ult",
        "name": "Infernal Pursuit",
        "type": "Ultimate",
        "cooldown": "38.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/phoveus_3.png",
        "description": "{{b"
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
        "name": "Theory of Everything",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/natan_0.png",
        "description": "Natan gains a stack of Entanglement each time he or his Reverse-Clone hits an enemy with a skill (up to 6 stacks). Each stack lasts 2.5 seconds and grants 7.5% [[Attack Speed"
      },
      {
        "id": "natan_s1",
        "name": "Superposition",
        "type": "Skill 1",
        "cooldown": "8.0 / 7.4/ 6.8 / 6.2 / 5.6 / 5.0s",
        "cost": "50 / 55 / 60 / 65 / 70 / 75",
        "icon": "/assets/images/skills/natan_1.png",
        "description": "Natan shoots a dense mass of energy, dealing {{Scale"
      },
      {
        "id": "natan_s2",
        "name": "Interference!",
        "type": "Skill 2",
        "cooldown": "12.0 / 11.6 / 11.2 / 10.8 / 10.4 / 10.0s",
        "cost": "60 / 65 / 70 / 75 / 80 / 85",
        "icon": "/assets/images/skills/natan_2.png",
        "description": "Natan launches a Gravitational Attractor which carries enemies on contact along the path and deals {{Scale"
      },
      {
        "id": "natan_ult",
        "name": "Entropy?",
        "type": "Ultimate",
        "cooldown": "24.0 / 20.0 / 16.0s",
        "cost": "100 / 50 / 0",
        "icon": "/assets/images/skills/natan_3.png",
        "description": "Natan summons a {{b"
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
        "name": "Fighting Spirit",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/aulus_0.png",
        "description": "After dealing skill damage to any unit, Aulus gains 2 seconds of {{link"
      },
      {
        "id": "aulus_s1",
        "name": "Aulus, Charge!",
        "type": "Skill 1",
        "cooldown": "14.0 / 13.6 / 13.2 / 12.8 / 12.4 / 12.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/aulus_1.png",
        "description": "Aulus removes all slow effects and gains 30% extra Movement Speed for 5 seconds. If Aulus does not take high-level [[cc"
      },
      {
        "id": "aulus_s2",
        "name": "The Power of Axe",
        "type": "Skill 2",
        "cooldown": "{{sl",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/aulus_2.png",
        "description": "Aulus swings his axe, dealing {{scale"
      },
      {
        "id": "aulus_ult",
        "name": "Cleaving Axe",
        "type": "Ultimate",
        "cooldown": "50.0 / 45.0 / 40.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/aulus_3.png",
        "description": "Aulus repeatedly swings his axe at nearby enemies, dealing {{scale"
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
        "name": "Invisible Armor",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/aamon_0.png",
        "description": "Aamon enters the {{AVC1"
      },
      {
        "id": "aamon_s1",
        "name": "Soul Shards",
        "type": "Skill 1",
        "cooldown": "9.0 / 8.5 / 8.0 / 7.5 / 7.0 / 6.5s",
        "cost": "60 / 66 / 72 / 78 / 84 / 90",
        "icon": "/assets/images/skills/aamon_1.png",
        "description": "{{AVC1"
      },
      {
        "id": "aamon_s2",
        "name": "Slayer Shards",
        "type": "Skill 2",
        "cooldown": "15.0 / 14.5 / 14.0 / 13.5 / 13.0 / 12.5s",
        "cost": "110 / 104 / 98 / 92 / 86 / 80",
        "icon": "/assets/images/skills/aamon_2.png",
        "description": "Aamon throws a shard forward, dealing 120-220 {{AVC1"
      },
      {
        "id": "aamon_ult",
        "name": "Endless Shards",
        "type": "Ultimate",
        "cooldown": "46.0 / 42.0 / 38.0s",
        "cost": "150 / 170 / 190",
        "icon": "/assets/images/skills/aamon_3.png",
        "description": "Aamon throws all shards at a designated enemy and slows them by 30% for 1.5 seconds. After a short delay, the shards will fly to the enemy's location again, each dealing {{scale"
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
        "name": "Primal Force",
        "type": "Passive",
        "cooldown": "2.0",
        "cost": "No Cost",
        "icon": "/assets/images/skills/valentina_0.png",
        "description": "Valentina gains 8&ndash;50 extra EXP each time she deals damage to an enemy hero. Cooldown: 2 seconds. If the enemy hero's level isn't higher than Valentina's, 30% of the damage dealt is converted into her HP. The EXP scales with Valentina's level."
      },
      {
        "id": "valentina_s1",
        "name": "Shadow Strike",
        "type": "Skill 1",
        "cooldown": "7.0 / 6.6 / 6.2 / 5.8 / 5.4 / 5.0s",
        "cost": "70 / 75 / 80 / 85 / 90 / 95",
        "icon": "/assets/images/skills/valentina_1.png",
        "description": "Valentina casts Shadow Strike in the target direction, dealing {{scale"
      },
      {
        "id": "valentina_s2",
        "name": "Arcane Shade",
        "type": "Skill 2",
        "cooldown": "12.0s",
        "cost": "45 / 50 / 55 / 60 / 65 / 70",
        "icon": "/assets/images/skills/valentina_2.png",
        "description": "Valentina [[Blink"
      },
      {
        "id": "valentina_ult",
        "name": "I Am You",
        "type": "Ultimate",
        "cooldown": "Varying (>= 10 seconds)",
        "cost": "Varying",
        "icon": "/assets/images/skills/valentina_3.png",
        "description": "Valentina slows the target enemy hero by 70% for 0.5 seconds and gains the ability to cast their Ultimate. Casting the enemy's Ultimate turns Valentina into the enemy hero's form and allows her to inherit their Basic Attack type for up to 12 seconds. Her regular skills remain unchanged, unless the enemy's Ultimate has a Morph effect. The stolen Ultimate's level will be equal to Valentina's level and the cooldown will be 120%&ndash;100% of the target's cooldown (but not lower than 10 seconds). Valentina gains {{scale"
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
        "name": "Overload",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/edith_0.png",
        "description": "After casting a skill, Edith's basic attacks trigger chain lightning for 3s, hitting up to 4 enemies."
      },
      {
        "id": "edith_p_s1",
        "name": "Earth Shatter",
        "type": "Skill 1",
        "form": "Phylax Armor",
        "cooldown": "8.5s",
        "cost": "60 Mana",
        "icon": "/assets/images/skills/edith_1.png",
        "description": "Phylax charges power and slams the earth, airborne knocking enemies in a front sector for 1 second."
      },
      {
        "id": "edith_p_s2",
        "name": "Onward",
        "type": "Skill 2",
        "form": "Phylax Armor",
        "cooldown": "10.0s",
        "cost": "70 Mana",
        "icon": "/assets/images/skills/edith_2.png",
        "description": "Phylax charges forward, throwing the first enemy champion hit over its shoulder."
      },
      {
        "id": "edith_p_ult",
        "name": "Primal Wrath",
        "type": "Ultimate",
        "form": "Phylax Armor",
        "cooldown": "40.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/edith_3.png",
        "description": "Edith ejects from Phylax into flight, converting extra defense into Magic Power and Attack Speed."
      },
      {
        "id": "edith_f_s1",
        "name": "Divine Retribution",
        "type": "Skill 1",
        "form": "Edith Flight",
        "cooldown": "4.5s",
        "cost": "40 Mana",
        "icon": "/assets/images/skills/edith_4.png",
        "description": "Edith summons divine retribution on target area, dealing continuous magic damage to enemies."
      },
      {
        "id": "edith_f_s2",
        "name": "Lightning Bolt",
        "type": "Skill 2",
        "form": "Edith Flight",
        "cooldown": "8.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/edith_5.png",
        "description": "Edith shoots a lightning bolt forward, paralyzing and immobilizing the first enemy struck for 0.8s."
      },
      {
        "id": "edith_f_ult",
        "name": "Return to Phylax",
        "type": "Ultimate",
        "form": "Edith Flight",
        "cooldown": "40.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/edith_6.png",
        "description": "Edith re-enters Phylax armor, restoring her massive tank defenses and crowd control kit."
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
        "name": "Dew",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/floryn_0.png",
        "description": "Dew's [[Lantern of Hope"
      },
      {
        "id": "floryn_s1",
        "name": "Sow",
        "type": "Skill 1",
        "cooldown": "9.0 / 8.7 / 8.4 / 8.1 / 7.8 / 7.5s",
        "cost": "90 / 100 / 110 / 120 / 130 / 140",
        "icon": "/assets/images/skills/floryn_1.png",
        "description": "Floryn tosses an Energy Seed at a target enemy, dealing {{Scale"
      },
      {
        "id": "floryn_s2",
        "name": "Sprout",
        "type": "Skill 2",
        "cooldown": "13.0 / 12.4 / 11.8 / 11.2 / 10.6 / 10.0s",
        "cost": "100 / 110 / 120 / 130 / 140 / 150",
        "icon": "/assets/images/skills/floryn_2.png",
        "description": "Floryn casts a blob of energy ahead that explodes upon hitting an enemy, dealing {{Scale"
      },
      {
        "id": "floryn_ult",
        "name": "Bloom",
        "type": "Ultimate",
        "cooldown": "70.0s",
        "cost": "150 / 175 / 200",
        "icon": "/assets/images/skills/floryn_3.png",
        "description": "Floryn resonates with Dew's power, recovering {{Scale"
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
                "name": "Leave It to Me",
                "type": "Passive",
                "cooldown": "Passive",
                "cost": "No Cost",
                "icon": "/assets/images/skills/yin_0.png",
                "description": "When there are no allied heroes nearby, Yin gains increased damage and physical penetration."
        },
        {
                "id": "yin_s1",
                "name": "Charged Punch",
                "type": "Skill 1",
                "cooldown": "8.0-6.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/yin_1.png",
                "description": "Yin gains 60% Movement Speed and empowers his Basic Attack to strike forward with a charged punch."
        },
        {
                "id": "yin_s2",
                "name": "Instant Blast",
                "type": "Skill 2",
                "cooldown": "12.0-9.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/yin_2.png",
                "description": "Yin dashes forward, leaving golden rings behind that stun enemies they touch and reduce skill cooldown."
        },
        {
                "id": "yin_ult",
                "name": "My Turn",
                "type": "Ultimate",
                "cooldown": "60.0-45.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/yin_3.png",
                "description": "Yin pulls target enemy hero into his Domain for an isolated 1v1 duel, turning into Lieh with enhanced skills."
        },
        {
                "id": "yin_s1_lieh",
                "name": "Frenzy Strike",
                "type": "Lieh Form Skill 1",
                "cooldown": "6.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/yin_4.png",
                "description": "As Lieh, strikes the ground repeatedly with devastating shockwaves while immune to crowd control."
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
        "name": "Doll Buster",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/melissa_0.png",
        "description": "\"My tailor shop excels at \"fixing\" dolls and \"fixing\" dolls. Am I right?, {{AVC1"
      },
      {
        "id": "melissa_s1",
        "name": "Falling!",
        "type": "Skill 1",
        "cooldown": "7.5/7.0/6.5/6.0/5.5/5.0s",
        "cost": "30/35/40/45/50/55",
        "icon": "/assets/images/skills/melissa_1.png",
        "description": "\"Watch me slide forward and increase my {{AVC1"
      },
      {
        "id": "melissa_s2",
        "name": "Eyes on You!",
        "type": "Skill 2",
        "cooldown": "9.0/8.6/8.2/7.8/7.4/7.0s",
        "cost": "60/50/40/30/20/10",
        "icon": "/assets/images/skills/melissa_2.png",
        "description": "\"The plan's like this: Throw Muddles out to hold the bad guys, and then&#8230; I come on stage!\" \"I puncture the bad guys, while Giggles hit Muddles to punish the bad guys! Hee, fantastic!\" (Muddles deals {{Scale"
      },
      {
        "id": "melissa_ult",
        "name": "Go Away!",
        "type": "Ultimate",
        "cooldown": "50.0/45.0/40.0s",
        "cost": "120 / 150 / 180",
        "icon": "/assets/images/skills/melissa_3.png",
        "description": "\" Cuddles , protect me! For 4 seconds, let no bad guys come close. Unless I say otherwise!\" (When activated, the field knocks back Melissa creates a dome that continuously damages and repels enemies in the area and deals {{Scale"
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
        "name": "Transcendence",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/xavier_0.png",
        "description": "Xavier enhances his subsequent skills each time his skill hits an enemy hero. {{b"
      },
      {
        "id": "xavier_s1",
        "name": "Infinite Extension",
        "type": "Skill 1",
        "cooldown": "6.5 / 6.4 / 6.3 / 6.2 / 6.1 / 6.0s",
        "cost": "50 / 55 / 60 / 65 / 70 / 75",
        "icon": "/assets/images/skills/xavier_1.png",
        "description": "Xavier fires a Mystic Bullet that deals {{Scale"
      },
      {
        "id": "xavier_s2",
        "name": "Mystic Field",
        "type": "Skill 2",
        "cooldown": "13.0s",
        "cost": "80 / 88 / 96 / 104 / 112 / 120",
        "icon": "/assets/images/skills/xavier_2.png",
        "description": "Xavier conjures a {{b"
      },
      {
        "id": "xavier_ult",
        "name": "Dawning Light",
        "type": "Ultimate",
        "cooldown": "56.0s",
        "cost": "120 / 160 / 200",
        "icon": "/assets/images/skills/xavier_3.png",
        "description": "Xavier unleashes a beam of Mystic magic that deals {{Scale"
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
        "name": "Smith's Legacy",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/julian_0.png",
        "description": "Julian has no traditional ultimate; casting any skill as his 3rd ability empowers that skill with cataclysmic effects."
      },
      {
        "id": "julian_b_s1",
        "name": "Scythe",
        "type": "Skill 1",
        "form": "Base Form",
        "cooldown": "7.0s",
        "cost": "30 Mana",
        "icon": "/assets/images/skills/julian_1.png",
        "description": "Hurls a flying scythe forward, dealing magic damage and slowing enemies."
      },
      {
        "id": "julian_b_s2",
        "name": "Sword",
        "type": "Skill 2",
        "form": "Base Form",
        "cooldown": "7.0s",
        "cost": "30 Mana",
        "icon": "/assets/images/skills/julian_2.png",
        "description": "Summons flying swords and dashes forward, becoming invulnerable during the dash."
      },
      {
        "id": "julian_b_s3",
        "name": "Chain",
        "type": "Skill 3",
        "form": "Base Form",
        "cooldown": "7.0s",
        "cost": "30 Mana",
        "icon": "/assets/images/skills/julian_3.png",
        "description": "Casts chains in target direction, dealing damage and immobilizing enemies after a brief delay."
      },
      {
        "id": "julian_e_s1",
        "name": "Enhanced Scythe",
        "type": "Enhanced 1",
        "form": "Enhanced Form",
        "cooldown": "10.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/julian_4.png",
        "description": "Hurls an enhanced scythe that hovers in place, continuously pulling and slicing enemies."
      },
      {
        "id": "julian_e_s2",
        "name": "Enhanced Sword",
        "type": "Enhanced 2",
        "form": "Enhanced Form",
        "cooldown": "10.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/julian_5.png",
        "description": "Dashes forward while completely untargetable, delivering 9 rapid strikes to enemies along the path."
      },
      {
        "id": "julian_e_s3",
        "name": "Enhanced Chain",
        "type": "Enhanced 3",
        "form": "Enhanced Form",
        "cooldown": "10.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/julian_6.png",
        "description": "Casts massive heavy chains that entangle and airborne knock up all enemies in the area."
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
        "id": "fred_p",
        "name": "Crystalline Armor",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/fredrinn_0.png",
        "description": "Fredrinn stores damage received as Crystal Energy and can convert it back into HP through skill damage."
      },
      {
        "id": "fred_s1",
        "name": "Piercing Strike",
        "type": "Skill 1",
        "cooldown": "7.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/fredrinn_1.png",
        "description": "Fredrinn thrusts his broadsword forward, dealing physical damage and slowing enemies."
      },
      {
        "id": "fred_s2",
        "name": "Brave Assault",
        "type": "Skill 2",
        "cooldown": "8.5s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/fredrinn_2.png",
        "description": "Fredrinn dashes forward, dealing physical damage and airborne knocking the first enemy hero hit."
      },
      {
        "id": "fred_s3",
        "name": "Energy Eruption",
        "type": "Skill 3",
        "cooldown": "5.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/fredrinn_3.png",
        "description": "Fredrinn erupts crystal energy, dealing physical damage and taunting all surrounding enemies for 1 second."
      },
      {
        "id": "fred_ult",
        "name": "Appraiser's Wrath",
        "type": "Ultimate",
        "cooldown": "20.0s",
        "cost": "No Cost",
        "icon": "/assets/images/skills/fredrinn_4.png",
        "description": "Fredrinn slams his broadsword down in an arc, converting stored Crystal Energy into cataclysmic burst physical damage."
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
        "name": "Humph, Joy's Angry!",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/joy_0.png",
        "description": "Joy becomes {{b"
      },
      {
        "id": "joy_s1",
        "name": "Look, Leonin Crystal!",
        "type": "Skill 1",
        "cooldown": "4.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/joy_1.png",
        "description": "Joy summons a {{b"
      },
      {
        "id": "joy_s2",
        "name": "Meow, Rhythm of Joy!",
        "type": "Skill 2",
        "cooldown": "8.0s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/joy_2.png",
        "description": "Joy dashes in the target direction, dealing {{scale"
      },
      {
        "id": "joy_ult",
        "name": "Ha, Electrifying Beats!",
        "type": "Ultimate",
        "cooldown": "28.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/joy_3.png",
        "description": "Joy increases her Physical & Magic Defense by {{scale"
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
        "name": "Demon Gaze",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/arlott_0.png",
        "description": "Arlott possesses a demonic eye that will {{b"
      },
      {
        "id": "arlott_s1",
        "name": "Dauntless Strike",
        "type": "Skill 1",
        "cooldown": "8.0 / 7.4 / 6.8 / 6.2 / 5.6 / 5.0s",
        "cost": "- / - / - / - / - / -",
        "icon": "/assets/images/skills/arlott_1.png",
        "description": "Arlott swings his lance forward, dealing {{scale"
      },
      {
        "id": "arlott_s2",
        "name": "Vengeance",
        "type": "Skill 2",
        "cooldown": "10.0 / 9.6 / 9.2 / 8.8 / 8.4 / 8.0s",
        "cost": "- / - / - / - / - / -",
        "icon": "/assets/images/skills/arlott_2.png",
        "description": "Arlott charges at an enemy and deals {{scale"
      },
      {
        "id": "arlott_ult",
        "name": "Final Slash",
        "type": "Ultimate",
        "cooldown": "24.0 / 21.0 / 18.0s",
        "cost": "100 / 120 / 140",
        "icon": "/assets/images/skills/arlott_3.png",
        "description": "Arlott cleaves in front of him, dealing {{scale"
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
        "name": "Star Trail",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/novaria_0.png",
        "description": "{{B"
      },
      {
        "id": "novaria_s1",
        "name": "Astral Meteor",
        "type": "Skill 1",
        "cooldown": "8.0 / 7.6 / 7.2 / 6.8 / 6.4 / 6.0s",
        "cost": "60 / 68 / 76 / 84 / 92 / 100",
        "icon": "/assets/images/skills/novaria_1.png",
        "description": "Novaria summons an {{B"
      },
      {
        "id": "novaria_s2",
        "name": "Astral Recall",
        "type": "Skill 2",
        "cooldown": "8.0s",
        "cost": "60 / 70 / 80 / 90 / 100 / 110",
        "icon": "/assets/images/skills/novaria_2.png",
        "description": "Novaria summons an {{B"
      },
      {
        "id": "novaria_ult",
        "name": "Astral Echo",
        "type": "Ultimate",
        "cooldown": "45.0 / 40.0 / 35.0s",
        "cost": "100",
        "icon": "/assets/images/skills/novaria_3.png",
        "description": "Novaria scatters Astral Echo in the target direction, briefly slowing enemy heroes hit by 50% (for approximately 0.8 seconds) while applying {{B"
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
        "name": "Siphon Starlium",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/ixia_0.png",
        "description": "Ixia's Basic Attacks and skills apply a stack of {{B"
      },
      {
        "id": "ixia_s1",
        "name": "Dual Beam",
        "type": "Skill 1",
        "cooldown": "8.0 / 7.2 / 6.4 / 5.6 / 4.8 / 4.0s",
        "cost": "40 / 45 / 50 / 55 / 60 / 65",
        "icon": "/assets/images/skills/ixia_1.png",
        "description": "Ixia fires 2 Starlium-charged energy beams along the ground in the target direction, dealing {{scale"
      },
      {
        "id": "ixia_s2",
        "name": "Star Helix",
        "type": "Skill 2",
        "cooldown": "11.0 / 10.6 / 10.2 / 9.8 / 9.4 / 9.0s",
        "cost": "75 / 80 / 85 / 90 / 95 / 100",
        "icon": "/assets/images/skills/ixia_2.png",
        "description": "Ixia launches a canister of Starlium energy in the target direction, knocking back nearby enemies, and pulling enemies in range to the center line after a short delay (approximately 0.5 seconds) and dealing {{scale"
      },
      {
        "id": "ixia_ult",
        "name": "Full Barrage",
        "type": "Ultimate",
        "cooldown": "54.0 / 48.0 / 42.0s",
        "cost": "75 / 90 / 105",
        "icon": "/assets/images/skills/ixia_3.png",
        "description": "Ixia disassembles her weapon into 6 smaller weapons and enters the {{B"
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
        "name": "Dimensional Rift",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/nolan_0.png",
        "description": "Nolan's skills will leave a {{B"
      },
      {
        "id": "nolan_s1",
        "name": "Expansion",
        "type": "Skill 1",
        "cooldown": "2.0/1.8/1.6/1.4/1.2/1.0s",
        "cost": "25",
        "icon": "/assets/images/skills/nolan_1.png",
        "description": "Nolan cuts a rectangular area in front of him with his cosmic gauge, dealing {{scale"
      },
      {
        "id": "nolan_s2",
        "name": "Gauge",
        "type": "Skill 2",
        "cooldown": "2.0/1.8/1.6/1.4/1.2/1.0s",
        "cost": "25",
        "icon": "/assets/images/skills/nolan_2.png",
        "description": "Nolan [[blink"
      },
      {
        "id": "nolan_ult",
        "name": "Fracture",
        "type": "Ultimate",
        "cooldown": "21.0 / 18.0 / 15.0s",
        "cost": "0",
        "icon": "/assets/images/skills/nolan_3.png",
        "description": "Nolan slashes the target location 3 times, {{scale"
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
        "name": "Performer's Delight",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/cici_0.png",
        "description": "Cici generates a stack of {{link"
      },
      {
        "id": "cici_s1",
        "name": "Yo-Yo Blitz",
        "type": "Skill 1",
        "cooldown": "6.5s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/cici_1.png",
        "description": "Cici uses Yoyo to continuously attack the nearest enemy within range (prioritizing heroes) for 3.5 seconds, hitting them up to 10 times and dealing {{scale"
      },
      {
        "id": "cici_s2",
        "name": "Buoyant Bounce",
        "type": "Skill 2",
        "cooldown": "9.5 / 9.1 / 8.7 / 8.3 / 7.9 / 7.5s",
        "cost": "65 Mana",
        "icon": "/assets/images/skills/cici_2.png",
        "description": "Cici leaps to a target location. If she lands on any unit (not including Turrets and Base), she can leap again in the Joystick's direction. If she lands on an enemy with the first leap, she deals {{scale"
      },
      {
        "id": "cici_ult",
        "name": "Curtain Call",
        "type": "Ultimate",
        "cooldown": "40.0 / 36.0 / 32.0s",
        "cost": "100 Mana",
        "icon": "/assets/images/skills/cici_3.png",
        "description": "Cici throws Yoyo at the target enemy hero and links them with another nearby enemy hero, dealing {{scale"
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
        "name": "Snack Time!",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/chip_0.png",
        "description": "Chip starts eating potato chips once every 2 seconds when out of combat, regenerating HP equal to 300 plus 45% of lost HP after finishing a whole bag (requires 4 bites). After eating a bag of chips, Chip will be full and cannot eat again for 5 seconds. (The bite count will be saved if he enters combat before finishing a whole bag)"
      },
      {
        "id": "chip_s1",
        "name": "Crash Course",
        "type": "Skill 1",
        "cooldown": "5.5 / 5.2 / 4.9 / 4.6 / 4.3 / 4.0s",
        "cost": "40 / 45 / 50 / 55 / 60 / 65",
        "icon": "/assets/images/skills/chip_1.png",
        "description": "Chip rams his hovercraft into the ground, dealing {{b"
      },
      {
        "id": "chip_s2",
        "name": "Overtime",
        "type": "Skill 2",
        "cooldown": "13.0 / 12.4 / 11.8 / 11.2 / 10.6 / 10.0s",
        "cost": "75 / 80 / 85 / 85 / 90 / 95 / 100",
        "icon": "/assets/images/skills/chip_2.png",
        "description": "Chip rushes for 2 seconds, gaining up to 65% extra {{b"
      },
      {
        "id": "chip_ult",
        "name": "Shortcut",
        "type": "Ultimate",
        "cooldown": "70.0 / 60.0 / 50.0s",
        "cost": "110",
        "icon": "/assets/images/skills/chip_3.png",
        "description": "Chip drops the Main Portal on an enemy hero, dealing {{scale"
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
        "name": "Crimson Butterflies",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/zhuxin_0.png",
        "description": "Every time Zhuxin channels {{Link"
      },
      {
        "id": "zhuxin_s1",
        "name": "Fluttering Grace",
        "type": "Skill 1",
        "cooldown": "12.0 / 11.6 / 11.2 / 10.8 / 10.4 / 10.0s",
        "cost": "100",
        "icon": "/assets/images/skills/zhuxin_1.png",
        "description": "Zhuxin deals {{scale"
      },
      {
        "id": "zhuxin_s2",
        "name": "Lantern Flare",
        "type": "Skill 2",
        "cooldown": "0.5s",
        "cost": "90",
        "icon": "/assets/images/skills/zhuxin_2.png",
        "description": "{{Link"
      },
      {
        "id": "zhuxin_ult",
        "name": "Crimson Beacon",
        "type": "Ultimate",
        "cooldown": "60.0 / 55.0 / 50.0s",
        "cost": "200",
        "icon": "/assets/images/skills/zhuxin_3.png",
        "description": "Zhuxin blinks to the target location while gaining a {{scale"
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
        "name": "Transient Immortal",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/suyou_0.png",
        "description": "Suyou switches between agile Mortal Form (Tap skills) and destructive Immortal Form (Hold skills)."
      },
      {
        "id": "suyou_m_s1",
        "name": "Blade Surge",
        "type": "Skill 1",
        "form": "Mortal (Tap)",
        "cooldown": "8.0s",
        "cost": "40 Mana",
        "icon": "/assets/images/skills/suyou_1.png",
        "description": "Throws weapon forward and swiftly dashes to it, dealing physical damage along the trajectory."
      },
      {
        "id": "suyou_m_s2",
        "name": "Soul Sever",
        "type": "Skill 2",
        "form": "Mortal (Tap)",
        "cooldown": "6.0s",
        "cost": "45 Mana",
        "icon": "/assets/images/skills/suyou_2.png",
        "description": "Performs two swift sweeping slashes, dealing damage and executing wounded enemies."
      },
      {
        "id": "suyou_m_s3",
        "name": "Evil Queller",
        "type": "Skill 3",
        "form": "Mortal (Tap)",
        "cooldown": "12.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/suyou_3.png",
        "description": "Leaps backward and shoots phantom arrows, dealing damage and kiting enemies."
      },
      {
        "id": "suyou_i_s1",
        "name": "Immortal Blade Surge",
        "type": "Skill 1",
        "form": "Immortal (Hold)",
        "cooldown": "8.0s",
        "cost": "40 Mana",
        "icon": "/assets/images/skills/suyou_4.png",
        "description": "Charges deity strength to dash forward, knocking back enemies and gaining 30% damage reduction."
      },
      {
        "id": "suyou_i_s2",
        "name": "Immortal Soul Sever",
        "type": "Skill 2",
        "form": "Immortal (Hold)",
        "cooldown": "6.0s",
        "cost": "45 Mana",
        "icon": "/assets/images/skills/suyou_5.png",
        "description": "Channels 3 colossal cleaves that heal Suyou for a portion of damage dealt."
      },
      {
        "id": "suyou_i_s3",
        "name": "Immortal Evil Queller",
        "type": "Skill 3",
        "form": "Immortal (Hold)",
        "cooldown": "12.0s",
        "cost": "50 Mana",
        "icon": "/assets/images/skills/suyou_6.png",
        "description": "Smashes the ground with colossal deity force, dealing massive area physical damage and slowing."
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
                "name": "Hero's Resolve",
                "type": "Passive",
                "cooldown": "Passive",
                "cost": "No Cost",
                "icon": "/assets/images/skills/lukas_0.png",
                "description": "Lukas accumulates sacred beast energy during combat, empowering his physical combat abilities."
        },
        {
                "id": "lukas_s1",
                "name": "Flash Combo",
                "type": "Skill 1",
                "cooldown": "7.0-5.0s",
                "cost": "40-60 Energy",
                "icon": "/assets/images/skills/lukas_1.png",
                "description": "Lukas strikes forward in rapid succession, dealing Physical Damage to enemies in front."
        },
        {
                "id": "lukas_s2",
                "name": "Flash Step",
                "type": "Skill 2",
                "cooldown": "8.0-6.0s",
                "cost": "40-60 Energy",
                "icon": "/assets/images/skills/lukas_2.png",
                "description": "Lukas dashes toward target location, gaining a protective shield and physical penetration."
        },
        {
                "id": "lukas_ult",
                "name": "Unleash the Beast",
                "type": "Ultimate",
                "cooldown": "45.0-35.0s",
                "cost": "100 Energy",
                "icon": "/assets/images/skills/lukas_3.png",
                "description": "Lukas transforms into his sacred beast form, gaining massive HP, resistance, and enhanced abilities."
        },
        {
                "id": "lukas_s4",
                "name": "Shockwave Blast",
                "type": "Transformed Skill",
                "cooldown": "6.0s",
                "cost": "No Cost",
                "icon": "/assets/images/skills/lukas_4.png",
                "description": "In beast form, Lukas unleashes a seismic roar dealing devastating area physical damage."
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
        "name": "Spell Curse",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/khufra_0.png",
        "description": "Khufra activates the Spell Curse left by Esmeralda every 12 seconds, enhancing his next Basic Attack. The enhanced Basic Attack gains extra attack range [Cast Range: 4.9] and deals [ {{scale"
      },
      {
        "id": "khufra_s1",
        "name": "Tyrant's Revenge",
        "type": "Skill 1",
        "cooldown": "15.0 / 14.0 / 13.0 / 12.0 / 11.0 / 10.0s",
        "cost": "80 / 85 / 90 / 95 / 100 / 105",
        "icon": "/assets/images/skills/khufra_1.png",
        "description": "Khufra pulls the bandage on his arms to [[blink"
      },
      {
        "id": "khufra_s2",
        "name": "Bouncing Ball",
        "type": "Skill 2",
        "cooldown": "10.0s",
        "cost": "70 / 75 / 80 / 85 / 90 / 95",
        "icon": "/assets/images/skills/khufra_2.png",
        "description": "Khufra uses bandage to wrap himself into a magic bouncing ball, increasing his own [[Physical defense"
      },
      {
        "id": "khufra_ult",
        "name": "Tyrant's Rage",
        "type": "Ultimate",
        "cooldown": "50.0 / 45.0 / 40.0s",
        "cost": "150 / 200 / 250",
        "icon": "/assets/images/skills/khufra_3.png",
        "description": "Khufra [[displacement"
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
        "name": "Shark Bite",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/bane_0.png",
        "description": "Bane infuses his weapon with a stack of {{b"
      },
      {
        "id": "bane_s1",
        "name": "Crab Claw Cannon",
        "type": "Skill 1",
        "cooldown": "8.0 / 7.6 / 7.2 / 6.8 / 6.4 / 6.0s",
        "cost": "30",
        "icon": "/assets/images/skills/bane_1.png",
        "description": "Bane fires his Crab Claw Cannon in the target direction, dealing {{scale"
      },
      {
        "id": "bane_s2",
        "name": "Ale",
        "type": "Skill 2",
        "cooldown": "7.5 / 6.9 / 6.3 / 5.7 / 5.1 / 4.5s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/bane_2.png",
        "description": "Bane chugs his ale, recovering {{scale"
      },
      {
        "id": "bane_ult",
        "name": "Deadly Catch",
        "type": "Ultimate",
        "cooldown": "40.0 / 35.0 / 30.0s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/bane_3.png",
        "description": "Bane summons a school of sharks to charge in a target direction, dealing {{scale"
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
        "name": "Surge of Life",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/kalea_0.png",
        "description": "After casting a skill, Kalea creates a {{Link"
      },
      {
        "id": "kalea_s1",
        "name": "Wavebreaker",
        "type": "Skill 1",
        "cooldown": "4.0s",
        "cost": "60 Mana",
        "icon": "/assets/images/skills/kalea_1.png",
        "description": "Kalea slams her fist into the ground, creating a wave that deals {{scale"
      },
      {
        "id": "kalea_s2",
        "name": "Tidal Strike",
        "type": "Skill 2",
        "cooldown": "13.0 / 12.6 / 12.2 / 11.8 / 11.4 / 11.0s",
        "cost": "75 Mana",
        "icon": "/assets/images/skills/kalea_2.png",
        "description": "Kalea charges forward and body slams the first enemy hero she encounters, knocking them airborne for 0.6s while dealing {{scale"
      },
      {
        "id": "kalea_ult",
        "name": "Tsunami Slam",
        "type": "Ultimate",
        "cooldown": "55.0 / 50.0 / 45.0s",
        "cost": "120 Mana",
        "icon": "/assets/images/skills/kalea_3.png",
        "description": "Kalea grabs an enemy hero with her tail and slams them down in the Joystick's direction, dealing {{scale"
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
        "name": "Celestial Armament",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/zetian_0.png",
        "description": "{{link"
      },
      {
        "id": "zetian_s1",
        "name": "Phoenix Strike",
        "type": "Skill 1",
        "cooldown": "7.0 / 6.6 / 6.2 / 5.8 / 5.4 / 5.0s",
        "cost": "70 / 80 / 90 / 100 / 110 / 120",
        "icon": "/assets/images/skills/zetian_1.png",
        "description": "Zetian unleashes a {{link"
      },
      {
        "id": "zetian_s2",
        "name": "Phoenix Descent",
        "type": "Skill 2",
        "cooldown": "15.0s",
        "cost": "80 / 90 / 100 / 110 / 120 / 130",
        "icon": "/assets/images/skills/zetian_2.png",
        "description": "Zetian summons a {{link"
      },
      {
        "id": "zetian_ult",
        "name": "Fury of the Phoenix",
        "type": "Ultimate",
        "cooldown": "90.0 / 80.0 / 70.0s",
        "cost": "150 / 180 / 210",
        "icon": "/assets/images/skills/zetian_3.png",
        "description": "Zetian calls upon her divine mandate and the hearts of her people, granting all allied heroes 60% Movement Speed that gradually decays over 3s, while bringing divine retribution upon all enemy heroes, dealing {{scale"
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
        "name": "Return to Bone",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/obsidia_0.png",
        "description": "When Obsidia deals damage to enemies, she gains Bone Energy (Basic Attacks against non-hero units grant 1 Energy, against hero units grant 2 Energy, and skills grant 3 times the Energy. No Energy is gained from hitting creeps). When Bone Energy reaches 30, it forms a Bone Shard, up to 25 shards. When Obsidia uses Basic Attacks, all Bone Shards strike the target, each dealing (7% Total Physical Attack) Physical Damage and inheriting 7% Attack Effects."
      },
      {
        "id": "obsidia_s1",
        "name": "Abyssal Bone Needle",
        "type": "Skill 1",
        "cooldown": "4.5 / 4.2 / 3.9 / 3.6 / 3.3 / 3.0s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/obsidia_1.png",
        "description": "Obsidia launches an {{link"
      },
      {
        "id": "obsidia_s2",
        "name": "Phantom Shadowmeld",
        "type": "Skill 2",
        "cooldown": "4.5 / 4.2 / 3.9 / 3.6 / 3.3 / 3.0s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/obsidia_2.png",
        "description": "Obsidia descends into the Abyss and enters {{link"
      },
      {
        "id": "obsidia_ult",
        "name": "Hunt of Bone",
        "type": "Ultimate",
        "cooldown": "40.0 / 35.0 /30.0s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/obsidia_3.png",
        "description": "Obsidia shoots {{link"
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
        "name": "Mystic Surge",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/sora_0.png",
        "description": "Sora can ascend to {{link"
      },
      {
        "id": "sora_s1",
        "name": "Sundering Strike",
        "type": "Skill 1",
        "cooldown": "5.0s",
        "cost": "45 Energy",
        "icon": "/assets/images/skills/sora_1.png",
        "description": "Sora strikes twice, dealing {{scale"
      },
      {
        "id": "sora_s2",
        "name": "Sundering Strike - Thunderflash",
        "type": "Skill 2",
        "cooldown": "5.0s",
        "cost": "55 Energy",
        "icon": "/assets/images/skills/sora_2.png",
        "description": "Sora strikes four times, dealing {{scale"
      },
      {
        "id": "sora_ult",
        "name": "Sundering Strike - Overwhelm",
        "type": "Ultimate",
        "cooldown": "5.0s",
        "cost": "80 Energy",
        "icon": "/assets/images/skills/sora_3.png",
        "description": "Sora strikes twice, dealing {{scale"
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
        "name": "Platinum Snap",
        "type": "Passive",
        "cooldown": "12.0",
        "cost": "No Cost",
        "icon": "/assets/images/skills/marcel_0.png",
        "description": "Marcel's split soul, {{link"
      },
      {
        "id": "marcel_s1",
        "name": "Framed Moment",
        "type": "Skill 1",
        "cooldown": "12.5 / 12.0 / 11.5 / 11.0 / 10.5 / 10.0s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/marcel_1.png",
        "description": "{{link"
      },
      {
        "id": "marcel_s2",
        "name": "Tracking Shot",
        "type": "Skill 2",
        "cooldown": "12.5 / 12.0 / 11.5 / 11.0 / 10.5 / 10.0s",
        "cost": "{{sl",
        "icon": "/assets/images/skills/marcel_2.png",
        "description": "Artist inspiration time! Marcel enters {{link"
      },
      {
        "id": "marcel_ult",
        "name": "Golden Hour",
        "type": "Ultimate",
        "cooldown": "74.0 / 68.0 / 62.0s",
        "cost": "150",
        "icon": "/assets/images/skills/marcel_3.png",
        "description": "Marcel and {{link"
      }
    ]
  },
  {
    "id": "hirara",
    "name": "Hirara",
    "title": "The Fallen Scarlet",
    "role": "Assassin",
    "secondaryRole": "None",
    "speciality": "Chase / Burst",
    "lane": "Jungler",
    "faction": "Scarlet Shadow",
    "region": "Cadia Riverlands / Scarlet Shadow Sect",
    "difficulty": 85,
    "difficultyLabel": "Hard",
    "attributes": {
      "offense": 96,
      "durability": 36,
      "abilityEffects": 88,
      "difficulty": 85
    },
    "winRate": "53.2%",
    "popularity": "Rank S+",
    "image": "/assets/images/heroes/hirara.png",
    "themeColor": "#e11d48",
    "voiceQuote": "Shadows dance when the Ukifune unfolds.",
    "loreQuote": "Blood petals in the wind; those who stray from the Scarlet path shall find no sanctuary.",
    "lore": "The legendary 133rd champion of the Land of Dawn, Hirara was hailed as the finest fan-blade assassin in the secret annals of the Scarlet Shadow. Wielding the twin ceremonial war-fans Ukifune, she vanished into the shadow realm to master ancient wind-cleaving techniques, returning to reclaim her clan's lost honor.",
    "relationships": [
      {
        "name": "Hayabusa",
        "role": "Shadow Sect Grandmaster",
        "type": "Clan Peer"
      },
      {
        "name": "Hanabi",
        "role": "Scarlet Shadow Leader",
        "type": "Rival"
      },
      {
        "name": "Kagura",
        "role": "Seimei Umbrella Mistress",
        "type": "Allied Contact"
      }
    ],
    "abilities": [
      {
        "id": "hirara_p",
        "name": "Twin Fans: Ukifune",
        "type": "Passive",
        "cooldown": "Passive",
        "cost": "No Cost",
        "icon": "/assets/images/skills/hirara_0.png",
        "description": "Hirara has only two skills, representing her two weapons: {{ai"
      },
      {
        "id": "hirara_s1",
        "name": "Meisen-e",
        "type": "Skill 1",
        "cooldown": "9.0 / 8.5 / 8.0 / 7.5 / 7.0 / 6.5 / 6.0 / 5.5s",
        "cost": "45 Energy",
        "icon": "/assets/images/skills/hirara_1.png",
        "description": "Hirara rides the waves using {{ai"
      },
      {
        "id": "hirara_s2",
        "name": "Kaerazu",
        "type": "Skill 2",
        "cooldown": "5.0s",
        "cost": "50 Energy",
        "icon": "/assets/images/skills/hirara_2.png",
        "description": "Hirara uses {{ai"
      },
      {
        "id": "hirara_ult",
        "name": "Infernal Torrent",
        "type": "Ultimate",
        "cooldown": "0.0s",
        "cost": "90 Energy",
        "icon": "/assets/images/skills/hirara_3.png",
        "description": "Hirara enhances {{link"
      }
    ],
    "portrait": "/assets/images/heroes/hirara.png"
  }
];
