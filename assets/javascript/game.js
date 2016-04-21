var hangman= {
	words:['ross' + 'geller', 'monicageller', 'rachelgreen', 'chandlerbing', 'joeytribbiani', 'phoebebuffay', 'gunther', 'pivot', 'centralperk', 'pictureframe', 'smellycat', 'howyoudoin', 'wewereonabreak'],
	currentWord:"",
	chosenWord:[],
	image: ['assets/images/ross.png', 'assets/images/monica.jpg', 'assets/images/rachel.jpg', 'assets/images/chandler.jpg', 'assets/images/joey.jpg', 'assets/images/phoebe.jpg', 'assets/images/gunther.jpg', 'assets/images/pivot.jpg', 'assets/images/central_perk.jpg', 'assets/images/frame.jpg', 'assets/images/cat.jpg', 'assets/images/doin.jpg', 'assets/images/break.jpg'],
	currentImage: 0,
	space: [],
	wins: 0,
	lettersGuessed: [],
	guesses: 12,

	startGame:function() {

		this.currentWord = this.words[Math.floor(Math.random()*this.words.length)];
		this.currentImage = this.words.indexOf(this.chosenWord);
		
	},

	placeHolder:function() {

		this.chosenWord=[];
		this.space =[];

		for (var i =0; i < this.currentWord.length; i++) {
			this.chosenWord.push(this.currentWord.charAt(i));
		}

		for (var i = 0; i < this.words.length; i++) {
			this.space.push("_");
		}

		document.getElementById("hidWord").innerHTML = this.space.join(" ");
		this.guesses = 12;

		document.getElementById("guessRemain").innerHTML = this.guesses;
		this.lettersGuessed = [];
		document.getElementById("letters").innerHTML = " ";
	},

	guessed:function(wrong) {
		if ((this.lettersGuessed.indexOf(wrong) >= -1) && (this.space.indexOf(wrong) >= -1)) {
			this.guesses--;
	 	 	document.getElementById("guessRemain").innerHTML = this.guesses;
			this.lettersGuessed.push(wrong);
			document.getElementById("letters").innerHTML = this.lettersGuessed.join(" ");
		}
	},
	
	answer: function(ind) {
	
 		this.space[ind] = this.chosenWord[ind];
 		this.chosenWord[ind] = "-";
 		document.getElementById("hidWord").innerHTML = this.space.join(" ");
 	},	

 	gameFinish:function() {
 
		if (this.space.indexOf("_") == -1) {

			this.wins++;

			document.getElementById("userWins").innerHTML = this.wins;
			document.getElementById("picture").innerHTML = this.currentImage[this.image];
			
			return true;

		}
		else if(this.guesses > 0){
		    return false;
		}
			
	},
	
};
	
	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		
	}



hangman.startGame();
hangman.placeHolder();
hangman.guessed();
hangman.answer();
hangman.gameFinish();

