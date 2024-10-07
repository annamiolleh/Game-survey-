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
        totalGames: localStorage.getItem('sc2TotalGames') ? localStorage.getItem
        ('sc2TotalGames') : 0,
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
                this.endGame();
            } else {
                this.number++
            }
            eval(answer)
        },
        endGame() {
            this.totalGames++;
            localStorage.setItem('sc2TotalGames', this.totalGames)
            //zerg
            if (this.score.zerg > this.score.protoss && this.score.zerg > this.score.terran && 
                this.score.primal < 8 && Math.abs(this.score.protoss - this.score.zerg) > 3) {
                    this.goToResult('zerg');
                    this.totalGame.zerg++;
                }
            //primal zerg
            else if (this.score.primal > this.score.protoss && 
                this.score.primal > this.score.terran &&
                this.score.primal == 8) {
                    this.goToResult('primal');
                    this.totalGame.primal++;
                }
            //protoss
            else if (this.score.protoss > this.score.zerg && 
                this.score.protoss > this.score.terran &&
                this.score.taldarim < 5 &&
                Math.abs(this.scrore.protoss - this.score.zerg) > 3) {
                    this.goToResult('protoss');
                    this.totalGame.protoss++;
                }
            //taldarim
            else if (this.score.protoss > this.score.zerg && 
                this.score.protoss > this.score.terran &&
                this.score.taldarim == 5) {
                    this.goToResult('taldarim');
                    this.totalGame.taldarim++;
                }
            //terran
            else if (this.score.terran > this.score.zerg && 
                this.score.terran > this.score.protoss) {
                    this.goToResult('terran');
                    this.totalGame.terran++;
                }
            //hybrid
            else if (Math.abs(this.score.protoss - this.score.zerg) <=3) {
                    this.goToResult('hybrid');
                    this.totalGame.hybrid++;
                }
            // infested
            else {
                this.goToResult('infested');
                this.totalGame.infested++;
            }
            
            localStorage.setItem('sc2TotalGame', JSON.stringify(this.totalGame));
        }
    }
})