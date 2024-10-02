/* Вопросы с ответами и изменение счета */
const questions = [
    [
        "Your favorite planet in the world of StarCraft",
        ["Slayn", "Aiur", "Char", "Mar Sara", "Zerus"],
        [
            "this.score.taldarim++",
            "this.score.protoss++",
            "this.score.zerg++",
            "this.score.terran++",
            "this.score.primal++"
        ]
    ],
    [
        "I am a river…",
        ["and I am a star hunter", "enemies are floating debris", "you are my sea"],
        [
            "this.score.protoss++; this.score.terran--",
            "this.score.primal++; this.score.protoss--; this.score.terran--",
            "this.score.terran++; this.score.protoss--"
        ]
    ],
    [
        "Who will you talk to at the Spear of Adun?",
        ["Abathur", "Swann", "Karax"],
        [
            "this.score.protoss--",
            "this.score.protoss--",
            "this.score.protoss++"
        ]
    ],

    [
        "There is a well-fortified Terran bunker in front of you",
        ["I am assimilating the essence of a Tyrannosaurus, that inhabits these places and evolving", "I will request an orbital strike if they show aggression first", "I'll approach the Marines to talk"],
        [
            "this.score.primal++; this.score.protoss--; this.score.terran--", 
            "this.score.protoss++; this.score.terran--", 
            "this.score.terran++; this.score.protoss--"
        ]
    ],
    [
        "How about you blowing this place off with me, cowboy?",
        ["Oh damn, it's just about time."],
        [
            "this.score.terran++"
        ]
    ],
    [
        "You were attacked",
        ["We need swarmers, spore-eaters and lashers", "You need to call in kaydarin monoliths and photon cannons", "Build a planetary fortress, bunkers and bring in siege tanks"],
        [
            "this.score.zerg+=2; this.score.protoss--; this.score.terran--", 
            "this.score.protoss++; this.score.terran--; this.score.zerg-=2", 
            "this.score.terran++; this.score.protoss--; this.score.zerg-=2"
        ]
    ],
    [
        "The Queen commands you to unleash your wrath upon the Dominion worlds",
        ["Must obey", "While she gathers, I follow", "Her psionic power has no effect on me."],
        [
            "this.score.zerg++; this.score.protoss--", 
            "this.score.primal++; this.score.protoss--", 
            "this.score.protoss++; this.score.zerg--"
        ]
    ],
    [
        "There is the High Templar in front of you",
        ["Powerful essence, but I can't collect it", "Destroy the Protoss", "Become an Archon", "Ask how Artanis is doing"],
        [
            "this.score.primal++; this.score.protoss--; this.score.terran--", 
            "this.score.zerg++; this.score.protoss--; this.score.terran--", 
            "this.score.protoss++; this.score.terran--; this.score.zerg--", 
            "this.score.terran++; this.score.protoss--; this.score.zerg--"
        ]
    ],
    [
        "You have noticed a Marine who is not obeying your order",
        ["Destroy the Mimic", "Reprimand him"],
        [
            "this.score.terran++", 
            "this.score.terran--"
        ]
    ],
    [
        "A swarm of locusts is moving towards you.",
        ["There is plenty of essence, that can be collected", "Order them to fly further", "Have a go at destroying them with phoenixes while they are in the air."],
        [
            "this.score.primal++; this.score.protoss--", 
            "this.score.zerg++; this.score.protoss--", 
            "this.score.protoss++; this.score.zerg--"
        ]
    ],
    [
        "You see the original whirlpool of birth, what will you do?",
        ["I will collect a lot of essence", "My body can't handle that kind of power", "I'll try to destroy this place"],
        [
            "this.score.primal++; this.score.protoss--", 
            "this.score.zerg++; this.score.protoss--", 
            "this.score.protoss++; this.score.zerg--"
        ]
    ],
    [
        "You are worn out today",
        ["I'm going to Joey's bar", "Roy doesn't know what fatigue is", "The weak will fall first"],
        [
            "this.score.terran++; this.score.zerg--", 
            "this.score.zerg++; this.score.terran--", 
            "this.score.taldarim++; this.score.terran--; this.score.zerg--"
        ]
    ],
    [
        "There is a hierarch of Protoss in front of you",
        ["To challenge to Rak-shir", "Greet with the phrase ^En Taro Tassadar^", "Send the swarm to attack"],
        [
            "this.score.taldarim++; this.score.zerg--", 
            "this.score.protoss++; this.score.zerg--", 
            "this.score.zerg++; this.score.protoss--"
        ]
    ],
    [
        "Zeratul and Vorazun",
        ["Bound by the Khala", "Husband and Wife", "Dark Templars", "New Zerg Species"],
        [
            "this.score.protoss--", 
            "this.score.protoss-=2", 
            "this.score.protoss++", 
            "this.score.protoss-=3"
        ]
    ],
    [
        "There are many sources of terrazine in these places",
        ["Protect the deposits from alien invaders", "Get as much as possible before these Tal'darim nerds have time to figure it out"],
        [
            "this.score.taldarim++; this.score.terran--", 
            "this.score.terran++"
        ]
    ],
    [
        "Brutalisk experiments are being held in a lab",
        ["Brutalisk is the Pinnacle of Evolution, needed by the swarm", "Ask the guys what they have found out", "Brutalisk is hazardous, it is better to destroy it along with the Terran lab"],
        [
            "this.score.zerg++; this.score.protoss--; this.score.terran--", 
            "this.score.terran++; this.score.protoss--; this.score.zerg--", 
            "this.score.protoss++; this.score.terran--; this.score.zerg--"
        ]
    ],
    [
        "What is Swann's name?",
        ["Gabriel", "James", "Rory"],
        [
            "this.score.terran--", 
            "this.score.terran--", 
            "this.score.terran++"
        ]
    ],
    [
        "Phoenix - ",
        ["Templar", "Nerazim", "Cleaner", "Taldarim"],
        [
            "this.score.protoss--", 
            "this.score.protoss--", 
            "this.score.protoss++", 
            "this.score.protoss--"
        ]
    ],
    [
        "You need to catch up with the Protoss mothership",
        ["I'm using hyperspace", "I'll intercept it by implanting a parasite", "I'll send a shuttle with a message"],
        [
            "this.score.terran++; this.score.zerg--; this.score.protoss--", 
            "this.score.zerg++; this.score.protoss--; this.score.terran--", 
            "this.score.protoss++; this.score.terran--; this.score.zerg--"
        ]
    ],
    [
        "Zerg have infected command centers with Virophages",
        ["We need to destroy everyone so that the epidemic doesn't spread", "Burn only the infected buildings and save as many people as possible"],
        [
            "this.score.protoss++; this.score.terran--", 
            "this.score.terran++; this.score.protoss--"
        ]
    ],
    [
        "Emptiness is…",
        ["Man's best friend", "Cold"],
        [
            "this.score.protoss--", 
            "this.score.protoss++"
        ]
    ],
    [
        "How do you greet James Raynor?",
        ["Fellow Raynor", "Hello, Cowboy", "I Need Your Essence"],
        [
            "this.score.protoss++; this.score.terran--", 
            "this.score.terran++; this.score.protoss--", 
            "this.score.primal++; this.score.protoss--; this.score.terran--"
        ]
    ],
    [
        "You have collected a lot of credits from selling terrazine",
        ["Hire the best Dominion thugs", "Improve technology", "Send them to the Mobius Foundation for hybrid research"],
        [
            "this.score.terran++", 
            "this.score.terran+=2", 
            "this.score.terran--"
        ]
    ],
    [
        "Amun is going to destroy Ayur",
        ["Help the Protoss in battle", "Send shuttles to Shakuras and request assistance from the Golden Armada", "Call in the Death Fleet and fight Amun"],
        [
            "this.score.terran++; this.score.protoss--", 
            "this.score.protoss++; this.score.zerg--", 
            "this.score.taldarim++; this.score.zerg--"
        ]
    ],
    [
        "Why did you come to Char??",
        ["Track down and kill the Queen of Blades", "Find Kerrigan and convince her to return to Mar Sara", "Bathe in slime"],
        [
            "this.score.protoss++; this.score.terran--; this.score.zerg-=2", 
            "this.score.terran++; this.score.protoss--; this.score.zerg-=2", 
            "this.score.zerg+=2; this.score.protoss--; this.score.terran--"
        ]
    ]
];
/* Данные для экранов резултата для каждой расы */
const results = {
    'zerg': {
        name: "Zerg",
        description: "You are a true Zerg, the purity of essence and service for the glory of the Swarm is your destiny. Your brood has captured many worlds and now the Swarm has become even stronger. The Queen of Blades is pleased with you, continue to serve her. You respect the Protoss, but do not think that they have a chance to survive as a species. After all, they cannot evolve and on the scale of the universe, their race is doomed to extinction. Therans are biomass, their essence can be assimilated and used for the benefit of the Swarm.",
        quote1: "-The concept of perfection is elastic. It can be strived for, but it is impossible to achieve. Perfection as a goal is meaningless.",
        quote2: "-Death doesn't matter, only the essence is that imperative.",
        author: "(Abathur)",
        points: "100"
    },
    'primal': {
        name: "Primal Zerg",
        description: "All you care about is Essence, the more of it, the better for you. You evolve, adapt and adjust to the environment. There are no problems that you cannot solve. Thanks to the constant collection of essence, you can change at any time. Essence is your way of life. So many types of essence. Hundreds of types. And every year more and more. You need to collect it all.",
        quote1: "-I need essence. Essence is life. I can't live without it.",
        quote2: "",
        author: "(Dehaka)",
        points: "120"
    },
    'terran': {
        name: "Terran",
        description: "You are not interested in the problems of the Protoss and Zerg, the eternal feud and devastation of worlds. The bloody trail that has been dragged from time immemorial by these warring races also affects the Terrans, no matter how hard you try not to interfere. It was not possible to avoid contact with the Protoss, but you can negotiate with them, unlike the Zerg. Simple human joys decorate your life. Communication with friends, going to a bar with good music, relaxing in nature. What else does a person need?",
        quote1: "-Don't mess with the guys from Mar-Sara.",
        quote2: "",
        author: "(Raynor)",
        points: "90"
    },
    'infested': {
        name: "Infested Terran",
        description: "Apparently you were infected by the Zerg, now you serve the Swarm. But this does not stop you from dreaming of revenge on the Zerg.",
        quote1: "-The infected always rise again.",
        quote2: "-When the United Earth Directorate returns to the sector, there will be nothing left of you.",
        author: "(Stukov)",
        points: "160"
    },
    'protoss': {
        name: "Protoss",
        description: "You are proud and pure. Honor guides you through the troubles that have befallen your people since the war with the Overmind. You are ready to fight to the death for Aiur. All protoss aspire to be like you. Your people have an eternal feud with the zerg, and to cleanse worlds of their filth and destroy hive after hive is your primary goal. Until the zerg are destroyed, the protoss will not sleep peacefully.",
        quote1: "-Our strength is in unity.",
        quote2: "",
        author: "(Artanis)",
        points: "80"
    },
    'taldarim': {
        name: "Taldarim",
        description: "Once serving Amon, the fallen Xel'Naga, your people have now found freedom. After Alarak became the lord of the Tal'darim by defeating Malash in the Rak'Shir duel, he not only changed his status in the chain of ascension, but also led the Tal'darim to peaceful coexistence with the other Protoss peoples. Now they can rebuild their worlds as one strong people. And your skills will be very useful in this difficult task.",
        quote1: "-You are talking to the lord.",
        quote2: "-How can you serve me?",
        author: "(Alarak)",
        points: "140"
    },
    'hybrid': {
        name: "Hybrid",
        description: "Purity of form and purity of essence are present in your body. You are one of the few beings that the Xel'Naga sought to create. Doctor Narud managed to bring all of the Xel'Naga's plans to life and now you are the perfect weapon. Despite the fact that you are a hybrid of Zerg and Protoss, you do not feel sympathy for these races, but consider the Hybrids to be the superior race.",
        quote1: "-It's just beginning. Amun whispered about it from the distant stars.",
        quote2: "",
        author: "(Narud)",
        points: "200"
    }
}