const objectives = [
        "Deathmatch",
        "Sabotage",
        "Daring Escape",
        "Hold the Fort",
        "Waves of Bad Guys",
        "Escort",
        "Base Defense",
        "Yoink and Skedaddle",
        "Peace Makers",
        "The Arrest"
      ];

      const combatTypes = [
        "Skirmish",
        "Ambush",
        "Targeted Strike",
        "Horde of Bad Guys",
        "Elite Team",
        "Stomping Ground",
        "Boss Battle",
        "Puzzle"
      ];

      const obstacles = [
        "Red Barrels",
        "Siege Weapons",
        "Ammo Boxes",
        "Big Drops",
        "Doors",
        "Interactables",
        "Terrain",
        "Platforms"
      ];

      const enemyTypes = [
        "Ambusher",
        "Artillery",
        "Brute",
        "Controller",
        "Support",
        "Soldier",
        "Skirmisher"
      ];

      const creatureTypes = [
        "Aberration",
        "Beast",
        "Celestial",
        "Construct",
        "Dragon",
        "Elemental",
        "Fey",
        "Fiend",
        "Giant",
        "Humanoid",
        "Monstrosity",
        "Ooze",
        "Plant",
        "Undead"
      ];

      const damageTypes = [
        "Acid",
        "Bludgeoning",
        "Cold",
        "Fire",
        "Force",
        "Lightning",
        "Necrotic",
        "Piercing",
        "Poison",
        "Psychic",
        "Radiant",
        "Slashing",
        "Thunder"
      ];

      const descriptions = {
        // Objectives
        "Deathmatch":         "The players need to destroy the opposition.",
        "Sabotage":           "The players need to remove someone or something from the equation, preferable before the enemy uses it in their ritual.",
        "Daring Escape":      "The players need to get to a safe point.",
        "Hold the Fort":      "The players need to keep enemies out until reinforcements arrive.",
        "Waves of Bad Guys":  "The players need to survive as long as possible as a new wave of monsters arrive every round.",
        "Escort":             "The players need to defend another (player) character, probably until it can do it's thing to change the tides of battle.",
        "Base Defense":       "The players need to defend an item in their home or some other place from being stolen or otherwise removed.",
        "Yoink and Skedaddle":"The players need to grab a specific item and get out, preferably before the enemies notices them.",
        "Peace Makers":       "The players need to make sure that two parties do not come to blows.",
        "The Arrest":         "The players need to incapacitate and capture one of the enemies.",
        // Combat Types
        "Skirmish":           "The enemy is here to kill the players, easy as that.",
        "Ambush":             "The enemy is (partly) hidden at the start of combat, and will use that fact to skew the combat in their favor.",
        "Targeted Strike":    "The enemy is too strong, therefore the players are here to weaken, not kill them.",
        "Horde of Bad Guys":  "The enemy is a very big group of weak creatures, do the players burn through their resources so as to quickly move to the next problem.",
        "Elite Team":         "The enemy is a small group of iconic enemies banded together to go toe to toe with the players.",
        "Stomping Ground":    "The enemy is weak but doesn't know it yet, make the players feel way stronger than they are.",
        "Boss Battle":        "The enemy is a single large threat, sometimes with a few underlings.",
        "Puzzle":             "The enemy can not be brought down in a simple war of attrition, there is a trick to it.",
        // Obstacles
        "Red Barrels":        "The environment features containers that will explode when interacted with.",
        "Siege Weapons":      "The environment features large siege weapons that reload slowly, luckily they are ready to be fired with once.",
        "Ammo Boxes":         "The environment features limited-use items.",
        "Big Drops":          "The environment features cliffs or similar drops that both players or their enemies can be pushed off of.",
        "Doors":              "The environment features chokepoints or even a number of closed doors that, when unlocked, can change the layout of the battlefield.",
        "Interactables":      "The environment features levers or buttons that change aspects of the battlefield.",
        "Terrain":            "The environment features regions that are more difficult to traverse or deal environmental damage.",
        "Platforms":          "The environment features differences in height",
        // Enemy Types
        "Ambusher":           "This enemy can hide, become invisible, or otherwise disappear from sight.",
        "Artillery":          "This enemy is great at long range. Most are weak in melee and will try to move away from any foes within 30 feet.",
        "Brute":              "This enemy's damage cannot be ignored. It hits hard and has a lot of hit points.",
        "Controller":         "This enemy has the ability to debuff, hamper, and move players.",
        "Support":            "This enemy can summon reinforcements, buff their allies, and grand allies extra movement and actions.",
        "Soldier":            "This enemy engages those who are strong in melee to protect their weaker allies.",
        "Skirmisher":         "This enemy prefers to bother those weaker in melee and can outrun and outmaneuver most player characters."
      };
