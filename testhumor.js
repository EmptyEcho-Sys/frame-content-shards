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
            EXEC::change("e3a2_newcomp", "test")
            HIDEREAD::
        test<+>loop

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
			page.flags.components.test = 3
			
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

//HUMORS
	env.COMBAT_COMPONENTS.test = {
    	name: " nåI? ádd ¤É²‘t",
    	slug: "test",
    	description: "'W WRONG LEAVE LEAVE LEVAE';'LEAVE HERE'",
    	help: "'[CANT]';'{YOU] ';(LEAVE].'",

    	primary: { //windup teamwave stun
        	alterations: [["primary", "test_stop"]],     
        	stats: {
            	maxhp: 8
        	},
    	},

    	secondary: { //flail but stun
        	alterations: [["secondary", "test_leave"]],
        	stats: {
            	maxhp: 8
        	}
    	},

    	utility: { //invoke STUN
        	alterations: [["evade", "test_innert"]],
        	stats: {
            	maxhp: 8
        	}
    	},
    	combatModifiers: ["test_innert", "test_nostatus", "test_status"]
	}
//HUMORS END

//AUGMENTS
	env.ACTOR_AUGMENTS.generic.test_degrade = {
		slug: "test_degrade",
		name: "%USER STOPS YOU STOP YOU STOⁿ&P ⁵ST■¥°ŕ90qv⅚ł",
		image: "/img/textures/danger.gif",
		description: "'can you not stop yourself?;;'itW ill come to be your end'",
		alterations: [["test_stop", "test_degrade"]],
		component: ["primary", "test"],
		cost: 2
	}

	env.ACTOR_AUGMENTS.generic.test_own = {
		slug: "tets-own",
		name: "¿¿?¿¿¿¿??¿¿¿?¿",
		image: "/img/textures/danger.gif",
		description: "'MINE MINE MINE MINE MINE';';;I KEEP IT ALL TO MYSELF",
		alterations: [["test_leave", "test_own"]],
		component: ["secondary", "test"],
		cost: 2
	}

	env.ACTOR_AUGMENTS.generic.test_away = {
    	slug: "test_away",
    	name: "½ï.S STAY STAY AY STA YË÷ MV£~",
    	image: "/img/textures/danger.gif",
    	description: "'WHY? WHY ? HY?'",
    	alterations: [["test_innert", "test_away"]],
   		component: ["utility", "test"],
    	cost: 2
	}
	//END OF AUGMENTS

	//STAGE MODIFIERS
	env.MODIFIERS.test_innert = {
		name: "■■■■■■■■",
		getHelp: ()=> {return env.STATUS_EFFECTS.test_innert.help},
		alterations:{
			all: [["STATUS", "test_innert"]]
		}
	}

	env.MODIFIERS.test_nostatus = {
		name: "■■■■■■■■",
		getHelp: ()=> {return env.STATUS_EFFECTS.test_nostatus.help},
		alterations:{
			all: [["STATUS", "test_nostatus"]]
		}
	}
		env.MODIFIERS.test_status = {
		name: "■■■■■■■■",
		getHelp: ()=> {return env.STATUS_EFFECTS.test_status.help},
		alterations:{
			all: [["STATUS", "test_status"]]
		}
	}
	//END OF STAGE MODIFIERS

	env.STATUS_EFFECTS.test_innert = {
		slug: "test_innert",
		name: "■■■■■■■■",
		passive: true,
		infinite: true,
		icon: "https://corru.observer/img/textures/memoryhaze5.gif",
		impulse: {type: "common", component: "test"},
		events: {
			onBeforeAction: function(context) {
			
				if(Math.random() < 0.35 && !context.settings.action.itemAction) {
					let ActionSwap = ["test_innert"]
					let ChosenAction = ActionSwap.sample()
					context.settings.action = env.ACTIONS[ChosenAction]
					let subject = context.settings.user

					sendFloater({
						target: subject,
						type: "arbitrary",
						arbitraryString: "INNERT.",
						beneficial: false,
						size: 2,
					})

					readoutAdd({
						message: `ÊÀÀ×LW${subject.name}÷7ÿŒtÆizTã‡¾¥ bœ4gM! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
						name: "sourceless", 
						type: "sourceless combat minordetail",
						show: false,
						sfx: false
					})
				}
			}
		},
		help: "'yS ºŸ.iò÷7ÿŒtÆizTã‡¾¥ bœ4gMb• uË9+k `tËV TÀ ¤ÈL1ãv)—°'"
	},

	env.STATUS_EFFECTS.test_nostatus = {
		slug: "test_nostatus",
		name: "■■■■■■■■",
		passive: true,
		infinite: true,
		events: {
			onBeforeAddStatus: function(context) {
				context.noAdd = true
			}
		},
		help: "403"
	},

	env.STATUS_EFFECTS.test_status = {
		slug: "test_status",
		name: "■■■■■■■■",
		passive: true,
		infinite: true,
		events: {

		}
	},

	env.STATUS_EFFECTS.test_404 = { //Return to this later, main thing is fixing up the text in spots to make it fit for the 404
		slug: "test_404",
		name: "ACTION::404",
		passive: true,
		infinite: true,
		impulse: {type: "action", component: "test"},
		events: {
            GLOBAL_onEvade: function({subject, target, attack, runEvents, originalEventTarget}) {
                let user = this.status.affecting
                if( 
                    target.state == "dead" ||
                    user.state == "dead" ||
                    subject == user
                ) return;
				
                let secondary = env.ACTIONS[this.status.affecting.actions[1]]

                setTimeout(()=>{
					if (user.team.members.includes(target)) {
						let Hitted = target
						let Hitter = subject
					} else {
						let Hitted = subject
						let Hitter = target
					}
                    useAction(this.status.affecting, secondary, secondary.beneficial ? Hitted : Hitter, {triggerActionUseEvent: false, beingUsedAsync: true, reason: "support"})

                    sendFloater({
                        target: this.status.affecting,
                        type: "arbitrary",
                        specialClass: "action",
                        arbitraryString: `SUPPORT::${secondary.name.toUpperCase()}`,
                        size: 1.5,
                    })
                
                    readoutAdd({
                        message: `${this.status.affecting.name} provides support alongside ${subject.name}'s attack on ${target.name}! (<span definition="${processHelp(this.status, {caps: true})}">${this.status.name}</span>)`, 
                        name: "sourceless", 
                        type: "sourceless combat minordetail",
                        show: false,
                        sfx: false
                    })
                }, env.ADVANCE_RATE * 0.5)
            }
        },

		help: `if alive, when an ally crits a foe, use secondary\nif secondary is beneficial, used on ally\nif secondary is offensive, used on foe`
	},

	env.STATUS_EFFECTS.test_fated = {
		slug: "test_fated",
		name: "Fated::)<@^÷=4",
		events: {

		}
	}

//end of status effects

//actions
	env.ACTIONS.test_stop = {
    	slug: "test_stop",
    	name: "WINDUP::%USER STOPS YOU STOP YOU STOⁿ&P ⁵ST■¥°ŕ90qv⅚ł",
    	type: 'special',
    	desc: "'¬i *þ is there so‡÷Ü£ s o sommethin g  you were lo  ²ooking °<fÝ for? 7ËÿÌfo r   fo r or ?';'S Ëö= T = O ëL   P »dX .'",
    	help: "FOES::[STAT::amt] [STAT::stun], ON CRIT::EXTRA [STAT::amt] [STAT::stun]",
    	anim: "basic-attack",
    	details: {
			flavor: "'forced to contiue, they marh on to death;;' you knw how it alwas ends, so why do you continue?'",
			onUse: `'STRIE'`,
			onHit: `R UIN'; THE GOOD`,
		},
		stats: {
			autohit: true,
			accuracy: .4,
			crit: .1,
			amt: 3,
			status: {
				stun: {
					name:"stun",
					length:"1"
				}
			}
		},
    	usage: {
        	act: "%USER IS ALIVE AND YOU AR E FORCING THEM TO ENDURE TH IS.",
			hit: ";%USERV IS AN UNILLING PASENGER AND YET YOU STILL DRIVE'",
			crit: "%TARGET IS NN EXT",
			miss: "YOU ARE AT FAULY T, %TRUEUSER.'"
    	},
		exec: function(user, target) {
			let action = this;
			return env.GENERIC_ACTIONS.singleTarget({
				action, 
				user, 
				target,

				critExec: ()=> env.GENERIC_ACTIONS.teamWave({
					team: user.enemyTeam,
					exec: (actor, i) => {
						env.GENERIC_ACTIONS.singleTarget({
							action, 
							user, 
							target: actor,
							hitStatus: this.stats.status.stun,
							canCrit: false
						})
                    }
                })
			})
		}
	}	

	env.ACTIONS.test_leave = { 
		slug: "test_leave",
		name: "BB e GONE",
		type: 'target',
		anim: "basic-attack",
		verb: "STR I kES",
		details: {
			flavor: "'STRI K E'",
			onHit: "'++ BE G GONE'",
			onCrit: "'+W HH Y DO YOU R REM  M MAIN'",
		},
		usage: {
			act: "%USER  'S B  ODY	CO NTO RTS",
			crit: "%USER'S AGO NY  MUST   C ONTINUE",
			hit: "%USER IS  R E  LEAS ED ",
			miss: "%TARGET IS S  S PA RED"
		},
		stats:{
			accuracy: .7,
			crit: 0.1,
			amt: 2,
			status: {
				stun: {
					name:"stun",
					length:"1"
				}
			}
		},
		exec: function(user, target) { //yeah this is just frenzied flail
			let action = this
			let targetTeam
			switch(user.team.name) {
				case "ally": targetTeam = env.rpg.enemyTeam; break;
				case "enemy": targetTeam = env.rpg.allyTeam; break;
			}
			let validTargets = targetTeam.members.filter(member => member.state != "dead" && member.state != "lastStand")
			if(validTargets.length) for (let i = 0; i < 1; i++) {
				if (validTargets) {
					let target = validTargets.sample()
					setTimeout(()=>{
						env.GENERIC_ACTIONS.singleTarget({
							action,
							user,
							target,
							critExec: ({target})=> {
								if(target.hp > 0 && target.state != "lastStand") {
									env.setTimeout(()=>{
										useAction(user, this, target, {beingUsedAsync: true, reason: "test_leave"})
									}, 200)
								}
							}
						})
					}, 200)
				}
			}
		}
	}
}

