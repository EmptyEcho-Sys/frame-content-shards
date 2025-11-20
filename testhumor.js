//Dialogue changing
    if( page.path == '/local/ozo/' || page.path == '/local/beneath/embassy') {
		/*env.dialogues["dreammod"] = generateDialogueObject(`
loop
    basterminal
        ALTERED
        TEXEC::\`STARTING TENSION::'\${check("e3a2_tension") || 1}'\`
            AUTOADVANCE::
        TEXEC::\`STARTING HUMORS::'\${check("e3a2_newcomp") || "normal"}'\`
            AUTOADVANCE::
        TEXEC::\`STARTING SFER::'\${check("e3a2_sfer") || "0"}'\`
            AUTOADVANCE::
        TEXEC::\`FISH SPAWN RATE::'\${check("e3a2_fishchance") ? \`\${Number(check("e3a2_fishchance")) * 100}%\`: '10%'}'\`
            AUTOADVANCE::
            SHOWIF::"e3a2__fishy"

    RESPOBJ::basterminalResp

start
    sourceless
        the terminal displays various controls and settings for the dream.
    
    basterminal
        hi :b
        CURRENT SETTINGS
        TEXEC::\`STARTING TENSION::'\${check("e3a2_tension") || 1}'\`
        TEXEC::\`STARTING HUMORS::'\${check("e3a2_newcomp") || "normal"}'\`
        TEXEC::\`STARTING SFER::'\${check("e3a2_sfer") || "0"}'\`
        TEXEC::\`FISH SPAWN RATE::'\${check("e3a2_fishchance") ? \`\${Number(check("e3a2_fishchance")) * 100}%\`: '10%'}'\`
            SHOWIF::"e3a2__fishy"
    
    RESPOBJ::basterminalResp

tension
    basterminal
        select starting tension
        1 is default
    
    RESPONSES::self
        1<+>loop
            EXEC::change("e3a2_tension", 1)
            HIDEREAD::
        2<+>loop
            EXEC::change("e3a2_tension", 2)
            HIDEREAD::
        3<+>loop
            EXEC::change("e3a2_tension", 3)
            HIDEREAD::
        4<+>loop
            EXEC::change("e3a2_tension", 4)
            HIDEREAD::
        5<+>loop
            EXEC::change("e3a2_tension", 5)
            HIDEREAD::
        6<+>loop
            EXEC::change("e3a2_tension", 6)
            HIDEREAD::

humors
    basterminal
        select starting <span class="code">humor</span> set
        normal is default
    
    RESPONSES::self
        normal<+>loop
            EXEC::change("e3a2_newcomp", "normal")
            HIDEREAD::
        abundant<+>loop
            EXEC::change("e3a2_newcomp", "abundant")
            HIDEREAD::
        too many<+>loop
            EXEC::change("e3a2_newcomp", "too many")
            HIDEREAD::
        claws<+>loop
            EXEC::change("e3a2_newcomp", "claws")
            HIDEREAD::
        eyes<+>loop
            EXEC::change("e3a2_newcomp", "eyes")
            HIDEREAD::
        ichor<+>loop
            EXEC::change("e3a2_newcomp", "ichor")
            HIDEREAD::
        light<+>loop
            EXEC::change("e3a2_newcomp", "light")
            HIDEREAD::
        bone<+>loop
            EXEC::change("e3a2_newcomp", "bone")
            HIDEREAD::
        entropy<+>loop
            EXEC::change("e3a2_newcomp", "entropy")
            HIDEREAD::
        surging<+>loop
            EXEC::change("e3a2_newcomp", "surging")
            HIDEREAD::

fish
    basterminal
        select fish spawn rate
        10% is default
    
    RESPONSES::self
        normal (10%)<+>loop
            EXEC::change("e3a2_fishchance", "0.1")
            HIDEREAD::
        foolish (25%)<+>loop
            EXEC::change("e3a2_fishchance", "0.25")
            HIDEREAD::
        likely (50%)<+>loop
            EXEC::change("e3a2_fishchance", "0.5")
            HIDEREAD::
        guaranteed (100%)<+>loop
            EXEC::change("e3a2_fishchance", "1")
            HIDEREAD::

sfer
    basterminal
        select starting sfer
        none is default
    
    RESPONSES::self
        none (0)<+>loop
            EXEC::change("e3a2_sfer", "DELETE")
            HIDEREAD::

        some (20)<+>loop
            EXEC::change("e3a2_sfer", 20)
            HIDEREAD::

        abundant(40)<+>loop
            EXEC::change("e3a2_sfer", 40)
            HIDEREAD::

        a lot (99)<+>loop
            EXEC::change("e3a2_sfer", 99)
            HIDEREAD::

        mod tester's delight(999)<+>loop
            EXEC::change("e3a2_sfer", 999)
            HIDEREAD::
`)*/
if(!env.dialogues["dreammod"].humors.responses[0].replies.includes("test")) {
	env.dialogues["dreammod"].humors.responses[0].replies.push({
		"name":"test",
		"destination":"loop",
		"exec": Function('change("e3a2_newcomp","test")'),
		"hideRead":true
	})
	}

	if(!env.dialogues["dreammod"].sfer.responses[0].replies.includes("mod tester's delight (999)")) {
	env.dialogues["dreammod"].sfer.responses[0].replies.push({
		"name":"mod tester's delight (999)",
		"destination":"loop",
		"exec": Function('change("e3a2_sfer",999)'),
		"hideRead":true
	})
	}
	}

if(page.party){
		switch(check("e3a2_newcomp")) {
		case "too many":
			if (typeof page.flags.components == undefined){
                page.flags.components = {
                    ichor: 30,
                    claws: 30,
                    light: 30,
                    bone: 30,
                    eyes: 30
                }
            }
			page.flags.components.test = 30
			
			page.party[0].components["primary"] = "claws"
			page.party[0].components["secondary"] = "claws"
			page.party[0].components["utility"] = "eyes"

			page.party[1].components["primary"] = "light"
			page.party[1].components["secondary"] = "eyes"
			page.party[1].components["utility"] = "bone"

			page.party[2].components["primary"] = "eyes"
			page.party[2].components["secondary"] = "ichor"
			page.party[2].components["utility"] = "light"
				break

		case "abundant":
			if (typeof page.flags.components == undefined) {
				page.flags.components = {
					ichor: 3,
					claws: 3,
					light: 3,
					bone: 3,
					eyes: 3
				}
			}
			page.flags.components.entropy = 3
			page.flags.components.surging = 3
			page.flags.components.stupidhorrible = 3
			page.flags.components.smog = 3
			page.flags.components.steel = 3
			page.flags.components.life = 3
			
			page.party[0].components["primary"] = "claws"
			page.party[0].components["secondary"] = "claws"
			page.party[0].components["utility"] = "eyes"

			page.party[1].components["primary"] = "light"
			page.party[1].components["secondary"] = "eyes"
			page.party[1].components["utility"] = "bone"

			page.party[2].components["primary"] = "eyes"
			page.party[2].components["secondary"] = "ichor"
			page.party[2].components["utility"] = "light"
				break

		case "test":
			page.flags.components = { test: 12 }

			page.party.forEach(member=>{
				member.components["primary"] = "test"
				member.components["secondary"] = "test"
				member.components["utility"] = "test"
			})
			break
		}
	}
if (page.path == '/local/beneath/embassy/') {
	//CSS
	content.insertAdjacentHTML('beforeend', `<style>
	/* for making player cards not overflow offscreen */
	#ally-team .actor {
    	background-color: var(--dark-color);
    	margin-top: 50px;
	}

	#ally-team {
    	bottom: 5vh;
    	flex-wrap: wrap;
    	z-index: 29;
	}

	#crittaresult, #crittaresult * {
    	transition: transform 2s ease-in-out, opacity 2s ease-in-out;
    	text-align: center;
		z-index: 30;
	}


	/* humor styling */
	[component="test"] {
    	--background: url(https://corru.observer/img/textures/danger.gif);
    	--organelle-background: url(https://corru.observer/img/textures/danger.gif);    
    	--background-small:  url(https://corru.observer/img/textures/danger.gif);
    	--background-size: auto;
    	--background-position: center;
    	--background-color: var(--obesk-color);
    	--accent-color: var(--obesk-color);
    	--font-color: var(--neutral-color);
	}
	</style>`);
