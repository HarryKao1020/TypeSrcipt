let deck = {
    suits : ["hearts","spades","clubs","diamonds"],
    cards:Array(52),
    createCardPicker : function(){
        // let _this = this;  寫法一
        // return function(){
        //     let pickCard = Math.floor(Math.random()*52);
        //     let pickSuits = Math.floor(pickCard/13);

        //     return {suit: _this.suits[pickSuits], card:pickCard % 13 }
        // }

        // ---- 寫法2
        return ()=>{
            let pickCard = Math.floor(Math.random()*52);
            let pickSuits = Math.floor(pickCard/13);

            return {suit: this.suits[pickSuits], card:pickCard % 13 }
        }

    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log(pickedCard);

