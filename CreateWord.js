var CreateWord = function (){
    this.wordArray = ["television", "couch","light", "lotion", "cupboard", "baseball", "restaurant", "dragon", "thrones", "queen", "football"];
    this.selectWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)];
}


module.exports = CreateWord;

