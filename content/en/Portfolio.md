---
title: Portfolio
---
**George | Unity Developer — Core & Gameplay**

**UTC+7 | 📍 Remote | Freelance / Project-based**
**✉️ Mail:** goset33pred@gmail.com
**💬 Telegram:** [t.me/GosetTM](https://t.me/GosetTM)
**🐙 GitHub:** [github.com/goset33](https://github.com/goset33)
**💼 Resume:** [[en/Resume|Resume]]

---
## TD100

**Client:** DreamShot
**Genre:** 3D Top-Down Tower Defense
**My Role:** Unity Developer
**Team:** Me + 1 modeler
**Timeline:** Jan 2026 – Apr 2026
**Stack:** Unity, C#, Git, Input System, UI Toolkit, VFX Graph, MessagePack, Unity Localization
**Platform:** Android (+ Windows build for testing)
**Content:** 15 levels / 3 towers / 6 enemies / RU-EN localization
**Build:** [drive.google.com](https://drive.google.com/drive/folders/1dp1mmjuPJf7RtdH54NF7bzIeThUr_yz8?usp=sharing)
**Code Examples:** [gist.github.com](https://gist.github.com/goset33/8e83d2b5f2bc19a86a7bcce194ab6761)
<br>
![[TD100 video.mp4]]<span class="caption">Gameplay of TD100</span>

<div class="showcase">

![[TD100 2.png]]
![[TD100 3.jpg]]
![[TD100 4.jpg]]
![[TD100 5.jpg]]
![[TD100 6.jpg]]
![[TD100 7.jpg]]
![[TD100 8.jpg]]
![[TD100 9.png]]

<img src="x" onerror="if(!window.scInit){ window.scInit=true; const script = document.querySelector('script[src*=prescript]'); const src = script ? script.getAttribute('src') : ''; const basePath = src.substring(0, src.lastIndexOf('/')); const s=document.createElement('script'); s.src=basePath + '/static/showcase.js'; document.head.appendChild(s); } this.remove();" style="display:none;">
</div>
<span class="caption">Screenshots of TD100</span>

### About the Game

A classic casual Tower Defense game—the player progresses through levels, defeats monsters, and defends their base. The difficulty of the levels increases non-linearly, so the player must upgrade their towers in the shop; otherwise, they won’t be able to advance further in the game. 

### What I Did

- Core gameplay: towers, enemies, wave system, levels
- Non-linear level difficulty progression + 3 difficulty levels per stage
- UI and interaction via the UI Toolkit
- Shop and tower upgrade system
- Local save system using MessagePack
- Visual effects and particles on VFX Graph
- Localization into Russian and English

###  Technical Solutions

#### Optimization
- **Problem:** The game would freeze during the first tower build of the session, the first shot, and the first rocket explosion.
- **Solution:** An Object Pooling system for towers, enemies, and rockets, as well as a Prewarmer to preload prefabs, shaders, and effects before the game starts.
- **Result:** Freezes were eliminated, and all subsequent spawns on the level occur without unnecessary memory allocation.
 
#### VFX
- **Problem:** Standard Particle Systems are calculated on the CPU, significantly impacting the game’s FPS.
- **Solution:** Effects on the VFX Graph are calculated and rendered directly on the GPU, which is better for performance. Additionally, it allows for the implementation of more complex effects. 

---
## Mega Quiz: Games

**Genre:** Trivia
**My role:** Unity Developer 
**Team:** Me + 1 game designer
**Year:** 2025
**Stack:** Unity, C#, Git, Unity Localization, UI Toolkit, PluginYG 2.0, R3, NPOI
**Platform:** WebGL
**Content:** 4 quizzes / 400+ questions / RU-EN localization
**Build:** [yandex.ru](https://yandex.ru/games/app/368479?draft=true)
**GitHub:** [github.com](https://github.com/goset33/Quiz-Template)
<br>
<div class="video-box">

![[MQG video.mp4]]

</div>
<span class="caption">Gameplay of Mega Quiz: Games</span>


<div class="showcase">

![[MQG 1.png]]
![[MQG 2.png]]
![[MQG 3.png]]
![[MQG 4.png]]
![[MQG 5.png]]
![[MQG 6.png]]
![[MQG 7.png]]

<img src="x" onerror="if(!window.scInit){ window.scInit=true; const script = document.querySelector('script[src*=prescript]'); const src = script ? script.getAttribute('src') : ''; const basePath = src.substring(0, src.lastIndexOf('/')); const s=document.createElement('script'); s.src=basePath + '/static/showcase.js'; document.head.appendChild(s); } this.remove();" style="display:none;">
</div>
<span class="caption">Screenshots of Mega Quiz: Games</span>

### About the Game

Mega Quiz: Games is an interactive casual trivia game. Players take quizzes on various featured games, earning currency and experience points in the process. Experience levels up the quiz, gradually increasing its level. The higher the quiz level, the more difficult the set of questions. Currency is used in the Yandex Games leaderboards to show how well a player has leveled up.

Quiz questions come in different difficulty levels. Various question types are also supported: standard, image-based, “counter,” and matching pairs. At higher difficulty levels, a timer appears: either a general timer for the entire quiz or an individual timer for each question. 

### What I Did

- Implemented core mechanics: question types, random questions from a list and random order, displaying the correct answer, and a life system
- System for reading and serializing questions from Excel spreadsheets
- Custom UI Toolkit elements for greater control over the UI
- Loading screen with a dynamic progress bar
- Used the Yandex Games SDK for displaying ads, leaderboards, and cloud saves
- Integrated Yandex Metrics for collecting game statistics
- Localization into Russian and English via Unity Localization

### Technical Solutions

#### Data Handling
- **Problem:** A good quiz should have hundreds of different questions with multiple-choice answers. Storing them all as ScriptableObjects is impractical due to the large volume of data. It’s easy to get lost in the configurations. 
- **Solution:** A system capable of parsing standard Excel spreadsheets using the NPOI library and immediately deserializing them into question objects. The spreadsheets themselves will be stored in the StreamingAssets folder of the build. 
- **Result:** The game parses the spreadsheets at runtime and loads the questions into memory. This approach is very convenient when scaling the game and increasing the number of questions.

---
## Castle Adventure

**Genre:** 2D Platformer
**My Role:** Unity Developer 
**Team:** Just me
**Year:** 2023
**Stack:** Unity, C#, Git, Unity uGUI, Unity Localization, SimpleLocalization, DOTween
**Platform:** Android, Windows
**Content:** 11 levels / 4 enemies / 1 boss / 2 attack types / RU-EN localization
**Build:** [drive.google.com](https://drive.google.com/drive/folders/1tFAty_pJaEos3kwiA5fYVRtzcansHPf0?usp=sharing)
<br>
![[CA video.mp4]]<span class="caption">Gameplay of Castle Adventure</span>

<div class="showcase">

![[CA 2.png]]
![[CA 3.png]]
![[CA 4.png]]
![[CA 5.png]]
![[CA 6.png]]
![[CA 7.png]]
![[CA 8.png]]
![[CA 9.png]]

<img src="x" onerror="if(!window.scInit){ window.scInit=true; const script = document.querySelector('script[src*=prescript]'); const src = script ? script.getAttribute('src') : ''; const basePath = src.substring(0, src.lastIndexOf('/')); const s=document.createElement('script'); s.src=basePath + '/static/showcase.js'; document.head.appendChild(s); } this.remove();" style="display:none;">
</div>
<span class="caption">Screenshots of Castle Adventure</span>

### About the Game

Castle Adventure is a classic 2D pixel-art platformer. The player controls a princess and progresses through level after level, defeating aggressive spiked cubes along the way. A boss battle awaits the player at the end of the final level.

The player has two types of attacks: a primary attack and a secondary attack. With the primary attack, the player shoots a green apple forward. The apple flies forward without gravity until it hits something. With the secondary attack, the player throws a red apple forward, which falls to the ground and explodes after a short delay, dealing damage to everything within a radius. 

### What I Did

- Player controller: movement, shooting, interaction with the world and enemies
- Adapting game controls across platforms — on-screen buttons for mobile devices and keyboard keys for PC
- Game UI and interaction with it via Unity uGUI
- Localization system based on the SimpleLocalization plugin localizes the game into Russian and English using tables from Google Sheets

### Technical Solutions

#### Optimization
- **Problem:** Unity does not have built-in Occlusion Culling for 2D games, so the game has to process unnecessary objects outside the player’s field of view.
- **Solution:** A custom OcclusionCulling2D system that searches for all enemies on the scene, checks which ones are not visible to the player (by intersecting their Bounding Box with the camera’s field of view), and disables them.

#### Artificial Intelligence
- **Problem:** Enemies need to detect the player from any direction in order to pursue them. We cannot calculate this based solely on the distance between objects, as that would not account for potential obstacles in the path between the player and the enemy.
- **Solution:** Create raycasts from the enemy in a circle at equal angular intervals. Each raycast checks for collisions with obstacles and the player. 
- **Effect:** Enemies gain a 360-degree field of view to detect the player, taking into account obstacles in their path.

#### Localization
- **Problem:** Storing game translation tables in builds is inconvenient; there is no way to dynamically change strings without recompiling the game.
- **Solution:** Integration of the SimpleLocalization plugin with Google Sheets. The system downloads CSV files from Google Sheets, parses them, and loads them into a dictionary. Localized strings can be changed directly from the website without recompiling.

### What I would Improve 

- Move all player, enemy, and boss parameters to ScriptableObject configurations. 
- Replace most uses of static variables with an event-based structure.
- Refactor the boss logic into an explicit state machine.
- Separate the UI and game logic into separate scripts and link them via events.

---
## A* and Map Generation Demo

**Demo Objective:** To develop mechanics for generating a 2D map using Perlin noise and pathfinding mechanics on that map using the A* Pathfinding algorithm
**Year:** 2024
**Stack:** Unity, C#, Cinemachine, Input System, procedural generation, Perlin noise, A* Pathfinding
**Build:** [drive.google.com](https://drive.google.com/drive/folders/1t_IaQLUcz2pj4T0MvW67OBcqunfc6yg8?usp=sharing)
<br>
![[MapGenPath video.mp4]]

### What's Been Implemented

- Camera tracking of the player using the Cinemachine plugin
- Procedural map generation based on Perlin noise
- Pathfinding and path construction using the A* algorithm
- Player movement along the constructed path