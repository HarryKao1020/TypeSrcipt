var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // let _this = this;  寫法一
        // return function(){
        //     let pickCard = Math.floor(Math.random()*52);
        //     let pickSuits = Math.floor(pickCard/13);
        var _this = this;
        //     return {suit: _this.suits[pickSuits], card:pickCard % 13 }
        // }
        // ---- 寫法2
        return function () {
            var pickCard = Math.floor(Math.random() * 52);
            var pickSuits = Math.floor(pickCard / 13);
            return { suit: _this.suits[pickSuits], card: pickCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log(pickedCard);
