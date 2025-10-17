---
title: End of Session
description: Awarding Experience and Character Development
date: 2025-10-06 10:00:00 +0600
categories: [Core Rules, Experience]
tags: [experience, end-of-session]
pin: true
---

<style>
table {
  border-collapse: collapse;
  width: 100%;
}

.markdown-table td {
    white-space: normal !important;
    word-wrap: break-word;
}

.markdown-table th {
  text-align: center
}

.totals-table td {
  text-align: center
}

/* Fix width and height of the header cells */
.player-name {
  width: 40px;
  position: relative;
  padding: 0;
  rowspan: "4"
}

/* Rotated text positioned manually inside the header cell */
.rotated-text {
  transform: rotate(-90deg);
  transform-origin: left top;
  position: absolute;
  top: 400%;
  left: 100%;
  white-space: nowrap;
  font-size: 14px;
  /* Shift the rotated text back into view */
  translate: -50% ;
  font-size: 150%
}
</style>

[Back to Main Page](/)

## Experience Points
At the end of each game session, the players and the Game Master move on to distributing experience points according to the following rules

<div class="markdown-table" markdown="1">

<table>
  <tbody>
    <tr>
      <td><strong> Base Exp Gain </strong></td>
      <td>The base amount of experience depends on participation and the length of the session. As a guideline, the Game Master should award around 5 experience points per hour of gameplay, which forms the foundation of the session's EXP. </td>
    </tr>
    <tr>
      <td><strong> P2P Bonus </strong></td>
      <td>Each player then assigns 5 experience points to another player of their choice and explains out loud why they are granting those points. The Game Master cannot modify these choices, as long as the points are not given to oneself or to someone who was not present during the session. </td>
    </tr>
    <tr>
      <td><strong> GM Bonus </strong></td>
      <td>0–10 XP granted individually at the GM’s discretion. </td>
    </tr>
    <tr>
      <td><strong> Archetype bonus </strong></td>
      <td>The final component of experience distribution is the Archetype Reward, granted at the end of the session based on the player’s Archetype. Ticks should be recorded in real time during the game, and an additional tick may be added only if the GM allows it after the session ends. Each tick grants the player 5 extra experience points. Only the highest number of ticks among all applicable Archetypes is considered; ticks are not cumulative across multiple Archetypes. </td>
    </tr>
  </tbody>
</table>

### Archetype Bonus

> <button class="clear-all-btn" style="width: 100%;">Clear All Checkboxes</button>
{: .prompt-danger }

<table>
<!-- ROLEPLAYER -->
  <thead>
    <tr>
      <th colspan="2">ROLEPLAYER</th>
      <th class="player-name">
        <div class="rotated-text">PRINCE</div>
      </th>
      <th class="player-name">
        <div class="rotated-text">PIKACZ</div>
      </th>
<!--      <th class="player-name">
        <div class="rotated-text">PUNIEK</div>
      </th> -->
      <th class="player-name">
        <div class="rotated-text">BJODRO</div>
      </th>
      <th class="player-name">
        <div class="rotated-text">WOJTAS</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Core Drive</td>
      <td>Embodying their character authentically.</td>
    </tr>
    <tr>
      <td>Focuses On</td>
      <td>Motivations, flaws, drama, in-character decisions.</td>
    </tr>
    <tr>
      <td>Contribution</td>
      <td>Deepens immersion and gives the party emotional stakes.</td>
    </tr>
    <tr>
      <th colspan="10"></th>
    </tr>
    <tr>
      <th colspan="2"> Questions to Answer </th>
      <th data-player="prince" data-archetype="ROLEPLAYER"> 0 </th>
      <th data-player="pikacz" data-archetype="ROLEPLAYER"> 0 </th>
   <!--   <th data-player="puniek" data-archetype="ROLEPLAYER"> 0 </th> -->
      <th data-player="bjodro" data-archetype="ROLEPLAYER"> 0 </th>
      <th data-player="wojtas" data-archetype="ROLEPLAYER"> 0 </th>
    </tr>
    <tr>
      <td><strong> 1 </strong></td>
      <td> Did they make a choice that reflected their character’s virtue, vice or backstory? </td>
      <td> <input type="checkbox" id="prince_1_1"> </td>
      <td> <input type="checkbox" id="pikacz_1_1"> </td>
    <!--  <td> <input type="checkbox" id="puniek_1_1"> </td> -->
      <td> <input type="checkbox" id="bjodro_1_1"> </td>
      <td> <input type="checkbox" id="wojtas_1_1"> </td>
    </tr>
    <tr>
      <td><strong> 2 </strong></td>
      <td> Did they stay true to their character even when it wasn’t optimal mechanically? </td>
      <td> <input type="checkbox" id="prince_1_2"> </td>
      <td> <input type="checkbox" id="pikacz_1_2"> </td>
 <!--     <td> <input type="checkbox" id="puniek_1_2"> </td> -->
      <td> <input type="checkbox" id="bjodro_1_2"> </td>
      <td> <input type="checkbox" id="wojtas_1_2"> </td>
    </tr>
    <tr>
      <td><strong> 3 </strong></td>
      <td> Did they roleplay interactions with NPCs or PCs in a way that felt authentic? </td>
      <td> <input type="checkbox" id="prince_1_3"> </td>
      <td> <input type="checkbox" id="pikacz_1_3"> </td>
  <!--    <td> <input type="checkbox" id="puniek_1_3"> </td> -->
      <td> <input type="checkbox" id="bjodro_1_3"> </td>
      <td> <input type="checkbox" id="wojtas_1_3"> </td>
    </tr>
    <tr>
      <td><strong> 4 </strong></td>
      <td> Did they bring out their character’s voice, mannerisms, or unique perspective? </td>
      <td> <input type="checkbox" id="prince_1_4"> </td>
      <td> <input type="checkbox" id="pikacz_1_4"> </td>
  <!--    <td> <input type="checkbox" id="puniek_1_4"> </td> -->
      <td> <input type="checkbox" id="bjodro_1_4"> </td>
      <td> <input type="checkbox" id="wojtas_1_4"> </td>
    </tr>
    <tr>
      <td><strong> 5 </strong></td>
      <td> Did they create drama or tension that deepened immersion in the story? </td>
      <td> <input type="checkbox" id="prince_1_5"> </td>
      <td> <input type="checkbox" id="pikacz_1_5"> </td>
  <!--    <td> <input type="checkbox" id="puniek_1_5"> </td> -->
      <td> <input type="checkbox" id="bjodro_1_5"> </td>
      <td> <input type="checkbox" id="wojtas_1_5"> </td>
    </tr>
  </tbody>
  <!-- END ROLEPLAYER -->
  <!-- WARRIOR -->
  <thead>
    <tr>
      <th colspan="2">WARRIOR</th>
      <th class="player-name">
        <div class="rotated-text">PRINCE</div>
      </th>
      <th class="player-name">
        <div class="rotated-text">PIKACZ</div>
      </th>
  <!--    <th class="player-name">
        <div class="rotated-text">PUNIEK</div>
      </th> -->
      <th class="player-name">
        <div class="rotated-text">BJODRO</div>
      </th>
      <th class="player-name">
        <div class="rotated-text">WOJTAS</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Core Drive</td>
      <td>Overcoming direct challenges.</td>
    </tr>
    <tr>
      <td>Focuses On</td>
      <td>Combat, daring risks, victory through action.</td>
    </tr>
    <tr>
      <td>Contribution</td>
      <td>Pushes the story forward by doing and keeps high-stakes tension alive.</td>
    </tr>
    <tr>
      <th colspan="10"></th>
    </tr>
    <tr>
      <th colspan="2"> Questions to Answer </th>
      <th data-player="prince" data-archetype="WARRIOR"> 0 </th>
      <th data-player="pikacz" data-archetype="WARRIOR"> 0 </th>
<!--      <th data-player="puniek" data-archetype="WARRIOR"> 0 </th> -->
      <th data-player="bjodro" data-archetype="WARRIOR"> 0 </th>
      <th data-player="wojtas" data-archetype="WARRIOR"> 0 </th>
    </tr>
    <tr>
      <td><strong> 1 </strong></td>
      <td> Did they take initiative in combat or a dangerous situation? </td>
      <td> <input type="checkbox" id="prince_2_1"> </td>
      <td> <input type="checkbox" id="pikacz_2_1"> </td>
<!--      <td> <input type="checkbox" id="puniek_2_1"> </td> -->
      <td> <input type="checkbox" id="bjodro_2_1"> </td>
      <td> <input type="checkbox" id="wojtas_2_1"> </td>
    </tr>
    <tr>
      <td><strong> 2 </strong></td>
      <td> Did they help the group achieve a concrete session objective through direct action? </td>
      <td> <input type="checkbox" id="prince_2_2"> </td>
      <td> <input type="checkbox" id="pikacz_2_2"> </td>
<!--      <td> <input type="checkbox" id="puniek_2_2"> </td>-->
      <td> <input type="checkbox" id="bjodro_2_2"> </td>
      <td> <input type="checkbox" id="wojtas_2_2"> </td>
    </tr>
    <tr>
      <td><strong> 3 </strong></td>
      <td> Did they use their abilities or tactics to overcome a serious challenge? </td>
      <td> <input type="checkbox" id="prince_2_3"> </td>
      <td> <input type="checkbox" id="pikacz_2_3"> </td>
<!--      <td> <input type="checkbox" id="puniek_2_3"> </td>-->
      <td> <input type="checkbox" id="bjodro_2_3"> </td>
      <td> <input type="checkbox" id="wojtas_2_3"> </td>
    </tr>
    <tr>
      <td><strong> 4 </strong></td>
      <td> Did they show bravery by risking themselves for victory or the party? </td>
      <td> <input type="checkbox" id="prince_2_4"> </td>
      <td> <input type="checkbox" id="pikacz_2_4"> </td>
 <!--     <td> <input type="checkbox" id="puniek_2_4"> </td>-->
      <td> <input type="checkbox" id="bjodro_2_4"> </td>
      <td> <input type="checkbox" id="wojtas_2_4"> </td>
    </tr>
    <tr>
      <td><strong> 5 </strong></td>
      <td> Did their actions change the tide of a battle or physical conflict? </td>
      <td> <input type="checkbox" id="prince_2_5"> </td>
      <td> <input type="checkbox" id="pikacz_2_5"> </td>
 <!--     <td> <input type="checkbox" id="puniek_2_5"> </td> -->
      <td> <input type="checkbox" id="bjodro_2_5"> </td>
      <td> <input type="checkbox" id="wojtas_2_5"> </td>
    </tr>
  </tbody>
  <!-- END WARRIOR -->
  <!-- EXPLORER -->
  <thead>
    <tr>
      <th colspan="2">THE EXPLORER</th>
      <th class="player-name">
        <div class="rotated-text">PRINCE</div>
      </th>
      <th class="player-name">
        <div class="rotated-text">PIKACZ</div>
      </th>
 <!--     <th class="player-name">
        <div class="rotated-text">PUNIEK</div>
      </th> -->
      <th class="player-name">
        <div class="rotated-text">BJODRO</div>
      </th>
      <th class="player-name">
        <div class="rotated-text">WOJTAS</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Core Drive</td>
      <td>Discovery and curiosity.</td>
    </tr>
    <tr>
      <td>Focuses On</td>
      <td>Investigating mysteries, traveling, learning about the world.</td>
    </tr>
    <tr>
      <td>Contribution</td>
      <td>Expands the campaign’s scope, giving the GM reasons to reveal lore and locations.</td>
    </tr>
    <tr>
      <th colspan="10"></th>
    </tr>
    <tr>
      <th colspan="2"> Questions to Answer </th>
      <th data-player="prince" data-archetype="EXPLORER"> 0 </th>
      <th data-player="pikacz" data-archetype="EXPLORER"> 0 </th>
  <!--    <th data-player="puniek" data-archetype="EXPLORER"> 0 </th>-->
      <th data-player="bjodro" data-archetype="EXPLORER"> 0 </th>
      <th data-player="wojtas" data-archetype="EXPLORER"> 0 </th>
    </tr>
    <tr>
      <td><strong> 1 </strong></td>
      <td> Did they investigate something new or push into the unknown? </td>
      <td> <input type="checkbox" id="prince_3_1"> </td>
      <td> <input type="checkbox" id="pikacz_3_1"> </td>
  <!--    <td> <input type="checkbox" id="puniek_3_1"> </td>-->
      <td> <input type="checkbox" id="bjodro_3_1"> </td>
      <td> <input type="checkbox" id="wojtas_3_1"> </td>
    </tr>
    <tr>
      <td><strong> 2 </strong></td>
      <td> Did they uncover useful information, lore, or a secret? </td>
      <td> <input type="checkbox" id="prince_3_2"> </td>
      <td> <input type="checkbox" id="pikacz_3_2"> </td>
  <!--    <td> <input type="checkbox" id="puniek_3_2"> </td>-->
      <td> <input type="checkbox" id="bjodro_3_2"> </td>
      <td> <input type="checkbox" id="wojtas_3_2"> </td>
    </tr>
    <tr>
      <td><strong> 3 </strong></td>
      <td> Did they meaningfully engage with the setting (e.g., asking about cultures, places, or history)? </td>
      <td> <input type="checkbox" id="prince_3_3"> </td>
      <td> <input type="checkbox" id="pikacz_3_3"> </td>
   <!--   <td> <input type="checkbox" id="puniek_3_3"> </td>-->
      <td> <input type="checkbox" id="bjodro_3_3"> </td>
      <td> <input type="checkbox" id="wojtas_3_3"> </td>
    </tr>
    <tr>
      <td><strong> 4 </strong></td>
      <td> Did they solve a problem using exploration-related skills (awarness, survival, natural world, etc.)? </td>
      <td> <input type="checkbox" id="prince_3_4"> </td>
      <td> <input type="checkbox" id="pikacz_3_4"> </td>
  <!--    <td> <input type="checkbox" id="puniek_3_4"> </td>-->
      <td> <input type="checkbox" id="bjodro_3_4"> </td>
      <td> <input type="checkbox" id="wojtas_3_4"> </td>
    </tr>
    <tr>
      <td><strong> 5 </strong></td>
      <td> Did they encourage the party to go somewhere or learn something they otherwise might have missed? </td>
      <td> <input type="checkbox" id="prince_3_5"> </td>
      <td> <input type="checkbox" id="pikacz_3_5"> </td>
  <!--    <td> <input type="checkbox" id="puniek_3_5"> </td> -->
      <td> <input type="checkbox" id="bjodro_3_5"> </td>
      <td> <input type="checkbox" id="wojtas_3_5"> </td>
    </tr>
  </tbody>
  <!-- END EXPLORER -->
  <!-- STORYTELLER -->
  <thead>
    <tr>
      <th colspan="2">STORYTELLER</th>
      <th class="player-name">
        <div class="rotated-text">PRINCE</div>
      </th>
      <th class="player-name">
        <div class="rotated-text">PIKACZ</div>
      </th>
<!--      <th class="player-name">
        <div class="rotated-text">PUNIEK</div>
      </th> -->
      <th class="player-name">
        <div class="rotated-text">BJODRO</div>
      </th>
      <th class="player-name">
        <div class="rotated-text">WOJTAS</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Core Drive</td>
      <td>Shaping the group’s narrative.</td>
    </tr>
    <tr>
      <td>Focuses On</td>
      <td>Spotlight-sharing, memorable moments, collaborative arcs.</td>
    </tr>
    <tr>
      <td>Contribution</td>
      <td>Makes the game fun for everyone by guiding the collective experience.</td>
    </tr>
    <tr>
      <th colspan="10"></th>
    </tr>
    <tr>
      <th colspan="2"> Questions to Answer </th>
      <th data-player="prince" data-archetype="STORYTELLER"> 0 </th>
      <th data-player="pikacz" data-archetype="STORYTELLER"> 0 </th>
  <!--    <th data-player="puniek" data-archetype="STORYTELLER"> 0 </th>-->
      <th data-player="bjodro" data-archetype="STORYTELLER"> 0 </th>
      <th data-player="wojtas" data-archetype="STORYTELLER"> 0 </th>
    </tr>
    <tr>
      <td><strong> 1 </strong></td>
      <td> Did they set up or encourage another character’s spotlight moment? </td>
      <td> <input type="checkbox" id="prince_4_1"> </td>
      <td> <input type="checkbox" id="pikacz_4_1"> </td>
   <!--   <td> <input type="checkbox" id="puniek_4_1"> </td>-->
      <td> <input type="checkbox" id="bjodro_4_1"> </td>
      <td> <input type="checkbox" id="wojtas_4_1"> </td>
    </tr>
    <tr>
      <td><strong> 2 </strong></td>
      <td> Did they propose an idea that moved the group’s story forward? </td>
      <td> <input type="checkbox" id="prince_4_2"> </td>
      <td> <input type="checkbox" id="pikacz_4_2"> </td>
  <!--    <td> <input type="checkbox" id="puniek_4_2"> </td>-->
      <td> <input type="checkbox" id="bjodro_4_2"> </td>
      <td> <input type="checkbox" id="wojtas_4_2"> </td>
    </tr>
    <tr>
      <td><strong> 3 </strong></td>
      <td> Did they help create a memorable or cinematic moment during play? </td>
      <td> <input type="checkbox" id="prince_4_3"> </td>
      <td> <input type="checkbox" id="pikacz_4_3"> </td>
  <!--    <td> <input type="checkbox" id="puniek_4_3"> </td>-->
      <td> <input type="checkbox" id="bjodro_4_3"> </td>
      <td> <input type="checkbox" id="wojtas_4_3"> </td>
    </tr>
    <tr>
      <td><strong> 4 </strong></td>
      <td> Did they resolve or contribute to party drama in a way that improved the narrative? </td>
      <td> <input type="checkbox" id="prince_4_4"> </td>
      <td> <input type="checkbox" id="pikacz_4_4"> </td>
  <!--    <td> <input type="checkbox" id="puniek_4_4"> </td>-->
      <td> <input type="checkbox" id="bjodro_4_4"> </td>
      <td> <input type="checkbox" id="wojtas_4_4"> </td>
    </tr>
    <tr>
      <td><strong> 5 </strong></td>
      <td> Did they demonstrate an effort to keep the table’s fun and cohesion in mind? </td>
      <td> <input type="checkbox" id="prince_4_5"> </td>
      <td> <input type="checkbox" id="pikacz_4_5"> </td>
   <!--   <td> <input type="checkbox" id="puniek_4_5"> </td>-->
      <td> <input type="checkbox" id="bjodro_4_5"> </td>
      <td> <input type="checkbox" id="wojtas_4_5"> </td>
    </tr>
  </tbody>
  <!-- END STORYTELLER -->
  <!-- TACTICIAN -->
  <thead>
    <tr>
      <th colspan="2">TACTICIAN</th>
      <th class="player-name">
        <div class="rotated-text">PRINCE</div>
      </th>
      <th class="player-name">
        <div class="rotated-text">PIKACZ</div>
      </th>
 <!--     <th class="player-name">
        <div class="rotated-text">PUNIEK</div>
      </th> -->
      <th class="player-name">
        <div class="rotated-text">BJODRO</div>
      </th> 
      <th class="player-name">
        <div class="rotated-text">WOJTAS</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Core Drive</td>
      <td>Clever problem-solving and mastery of systems.</td>
    </tr>
    <tr>
      <td>Focuses On</td>
      <td>Strategy, optimization, puzzles, planning.</td>
    </tr>
    <tr>
      <td>Contribution</td>
      <td>Finds smart solutions, squeezes efficiency from mechanics, and helps the party survive impossible odds.</td>
    </tr>
    <tr>
      <th colspan="10"></th>
    </tr>
    <tr>
      <th colspan="2"> Questions to Answer </th>
      <th data-player="prince" data-archetype="TACTICIAN"> 0 </th>
      <th data-player="pikacz" data-archetype="TACTICIAN"> 0 </th>
  <!--    <th data-player="puniek" data-archetype="TACTICIAN"> 0 </th> -->
      <th data-player="bjodro" data-archetype="TACTICIAN"> 0 </th>
      <th data-player="wojtas" data-archetype="TACTICIAN"> 0 </th>
    </tr>
    <tr>
      <td><strong> 1 </strong></td>
      <td> Did they create or suggest a clever plan or strategy that helped the group? </td>
      <td> <input type="checkbox" id="prince_5_1"> </td>
      <td> <input type="checkbox" id="pikacz_5_1"> </td>
  <!--    <td> <input type="checkbox" id="puniek_5_1"> </td> -->
      <td> <input type="checkbox" id="bjodro_5_1"> </td>
      <td> <input type="checkbox" id="wojtas_5_1"> </td>
    </tr>
    <tr>
      <td><strong> 2 </strong></td>
      <td> Did they use the rules or mechanics in a smart or inventive way? </td>
      <td> <input type="checkbox" id="prince_5_2"> </td>
      <td> <input type="checkbox" id="pikacz_5_2"> </td>
   <!--   <td> <input type="checkbox" id="puniek_5_2"> </td> -->
      <td> <input type="checkbox" id="bjodro_5_2"> </td>
      <td> <input type="checkbox" id="wojtas_5_2"> </td>
    </tr>
    <tr>
      <td><strong> 3 </strong></td>
      <td> Did they optimize resources (gear, talents, positioning, timing) to give the party an edge? </td>
      <td> <input type="checkbox" id="prince_5_3"> </td>
      <td> <input type="checkbox" id="pikacz_5_3"> </td>
   <!--   <td> <input type="checkbox" id="puniek_5_3"> </td> -->
      <td> <input type="checkbox" id="bjodro_5_3"> </td>
      <td> <input type="checkbox" id="wojtas_5_3"> </td>
    </tr>
    <tr>
      <td><strong> 4 </strong></td>
      <td> Did they solve a puzzle, trap, or challenge through clever thinking? </td>
      <td> <input type="checkbox" id="prince_5_4"> </td>
      <td> <input type="checkbox" id="pikacz_5_4"> </td>
   <!--   <td> <input type="checkbox" id="puniek_5_4"> </td> -->
      <td> <input type="checkbox" id="bjodro_5_4"> </td>
      <td> <input type="checkbox" id="wojtas_5_4"> </td>
    </tr>
    <tr>
      <td><strong> 5 </strong></td>
      <td> Did their planning or foresight prevent a major setback? </td>
      <td> <input type="checkbox" id="prince_5_5"> </td>
      <td> <input type="checkbox" id="pikacz_5_5"> </td>
    <!--  <td> <input type="checkbox" id="puniek_5_5"> </td> -->
      <td> <input type="checkbox" id="bjodro_5_5"> </td>
      <td> <input type="checkbox" id="wojtas_5_5"> </td>
    </tr>
  </tbody>
  <!-- END TACTICIAN -->
</table>

#### Totals
<div class="totals-table" markdown="1">

<table>
  <thead>
    <tr>
      <th></th>
      <th> PRINCE </th>
      <th> PIKACZ </th>
  <!--    <th> PUNIEK </th> -->
      <th> BJODRO </th>
      <th> WOJTAS </th> 
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:right"> ROLEPLAYER </td>
      <td data-player="prince" data-archetype="ROLEPLAYER"> 0 </td>
      <td data-player="pikacz" data-archetype="ROLEPLAYER"> 0 </td>
  <!--    <td data-player="puniek" data-archetype="ROLEPLAYER"> 0 </td> -->
      <td data-player="bjodro" data-archetype="ROLEPLAYER"> 0 </td>
      <td data-player="wojtas" data-archetype="ROLEPLAYER"> 0 </td>
    </tr>
    <tr>
      <td style="text-align:right"> WARRIOR </td>
      <td data-player="prince" data-archetype="WARRIOR"> 0 </td>
      <td data-player="pikacz" data-archetype="WARRIOR"> 0 </td>
 <!--     <td data-player="puniek" data-archetype="WARRIOR"> 0 </td> -->
      <td data-player="bjodro" data-archetype="WARRIOR"> 0 </td>
      <td data-player="wojtas" data-archetype="WARRIOR"> 0 </td>
    </tr>
    <tr>
      <td style="text-align:right"> EXPLORER </td>
      <td data-player="prince" data-archetype="EXPLORER"> 0 </td>
      <td data-player="pikacz" data-archetype="EXPLORER"> 0 </td>
<!--      <td data-player="puniek" data-archetype="EXPLORER"> 0 </td> -->
      <td data-player="bjodro" data-archetype="EXPLORER"> 0 </td>
      <td data-player="wojtas" data-archetype="EXPLORER"> 0 </td>
    </tr>
    <tr>
      <td style="text-align:right"> STORYTELLER </td>
      <td data-player="prince" data-archetype="STORYTELLER"> 0 </td>
      <td data-player="pikacz" data-archetype="STORYTELLER"> 0 </td>
  <!--    <td data-player="puniek" data-archetype="STORYTELLER"> 0 </td> -->
      <td data-player="bjodro" data-archetype="STORYTELLER"> 0 </td>
      <td data-player="wojtas" data-archetype="STORYTELLER"> 0 </td>
    </tr>
    <tr>
      <td style="text-align:right"> TACTICIAN </td>
      <td data-player="prince" data-archetype="TACTICIAN"> 0 </td>
      <td data-player="pikacz" data-archetype="TACTICIAN"> 0 </td>
 <!--     <td data-player="puniek" data-archetype="TACTICIAN"> 0 </td> -->
      <td data-player="bjodro" data-archetype="TACTICIAN"> 0 </td>
      <td data-player="wojtas" data-archetype="TACTICIAN"> 0 </td>
    </tr>
  </tbody>
</table>

</div>

<script src="{{ '/js/end-of-session.js' | relative_url }}"></script>

> <button class="clear-all-btn" style="width: 100%;">Clear All Checkboxes</button>
{: .prompt-danger }

## Character Development

<!-- > How to spend experience points you ask? Well, let me give a pro tip! Shove it up your ass! ROFLO LMFAO XDXDXDXDXDXXDXXXXXXXDDDDDDDDDDD YOLO BYTCH
{: .prompt-tip }
-->

### Skill Advancement

During gameplay, players must record the degree of success achieved on every Skill or Weapon Skill check. These notes are reviewed during the post-session feedback phase to determine which skills improve.

At the end of the session, each skill increases based on the highest degree of success achieved with it during play:

| Type of Success | Amount to Increase |
|-----------------|:--------------------:|
| Simple (x1) | +1 Point |
| Normal (x3/4)| +2 Points | 
| Hard (x1/2)| +3 Points |
| Extreme (x1/4)| +4 Points |

> Only the highest success level for each skill is applied. 
> 
> Example: 
> 
> If Luca Kim achieved a Simple and Normal Success on an Intimidation check (65), and noted it on his sheet, at the end of the session his Intimidation increases by 2 points (to 67) since we pick only the highest degree of success which is Normal. This value may still be further increased by spending Experience Points earned during the same session.
{: .prompt-warning }

### Experience

Players gain Experience Points (EXP) from several sources:

| | |
|-:|:-|
|Attendance|The base amount of experience depends on participation and the length of the session. As a guideline, the Game Master should award around 5 experience points per hour of gameplay, which forms the foundation of the session’s EXP.|
|GM Reward|0–10 XP granted individually at the GM’s discretion.|
|Archetype Reward|XP equal to the ticks earned in the character’s primary Archetype (typically 5–25 XP, depending on performance). Only the highest Archetype total applies.|
|Peer Reward|Each player grants 5 XP to another player of their choice.|

In practice, this means a player will typically earn between 30 XP (bare minimum attendance and one tick) and 75 XP (all ticks achieved in a single Archetype and favored by all peers in a 4-player group).

Experience can be spent in 3 ways, as stated below.

#### Characteristic Improvement

You can improve a characteristic by 1 Point for 20 EXP. You can do this to any characteristic of your choice. Remember, characteristic raised this way cannot exceed 100 points.

#### Skill Improvement

At the end of a session, a player may purchase only one point buy for a skill being improved. Even if enough XP is available for multiple purchases, only one skill buy per skill improvement per session is allowed. This is the sole limit on how players may spend XP. Remember skill cannot get higher than 120 points.

| | |
|-|:-:|
|+1 improvement point | 5 Exp |
|+2 improvement points | 10 Exp |
|+3 improvement points | 20 Exp |
|+4 improvement points | 40 Exp |

#### Buying Talents and Feats

Go to [TALENTS](/posts/talents) page to read more on talent acquisition.
