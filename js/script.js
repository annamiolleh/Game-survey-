let app = new Vue({
    el: '.main',
    data: {
        showMain: true,
        showSocial: false,
        showAchievements: false,
        showQuestions: false,
        showResults: false,
        number: 0,
        score: {
            'zerg': 0,
            'primal': 0,
            'protoss': 0,
            'taldarim': 0,
            'terran': 0,
        },
        totalGame: localStorage.getItem('sc2TotalGame') ? JSON.parse(localStorage.getItem
        ('sc2TotalGame')) : {
            'zerg': 0,
            'primal': 0,
            'protoss': 0,
            'taldarim': 0,
            'terran': 0,
            'infested': 0,
            'hybrid': 0,
        },
        totalGames: localStorage.getItem('sc2TotalGame') ? localStorage.getItem
        ('sc2TotalGame') : 0,
        questions: questions,
        results: results,
        resultRace: 'infested',
    },
    methods: {
        goToMain() {
            this.showMain = true
            this.showSocial = false
            this.showAchievements = false
            this.showQuestions = false
            this.showResults = false
        },
        goToSocial() {
            this.showMain = false
            this.showSocial = true
            this.showAchievements = false
            this.showQuestions = false
            this.showResults = false
        },
        goToAchievements() {
            if(this.totalGames > 0) {
                this.showMain = false
                this.showSocial = false
                this.showAchievements = true
                this.showQuestions = false
                this.showResults = false
            } else {
                this.goToOuestions()
            }
        },
        goToOuestions(){
            this.score = {
                'zerg': 0,
                'primal': 0,
                'protoss': 0,
                'taldarim': 0,
                'terran': 0,
            }
            this.showMain = false
            this.showSocial = false
            this.showAchievements = false
            this.showQuestions = true
            this.showResults = false
        },
        goToResult(race) {
            this.showMain = false
            this.showSocial = false
            this.showAchievements = false
            this.showQuestions = false
            this.showResults = true
            this.resultRace = race 
        },
        nextQuestions(answer) {
            if(this.number == 24) {
                this.number = 0
                //this.endGame();
            } else {
                this.number++
            }
            eval(answer)
        }
    }
})