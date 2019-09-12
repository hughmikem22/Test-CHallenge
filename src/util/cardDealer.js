const assert = require('assert');
const Game = require('../models/Game');

/**
 * TODO: Test Engineering Open Code Challenge
 * Deal as many cards as possible to the players provided.
 * @param {Player[]} players List of Players to be dealt cards
 * @param {Deck} deck The Deck of Cards to be used
 * @return {Game} comprised of the Players and their individual Cards
 * along with any undealt Cards that would remain
 */
const dealAll = (players, deck) => {
    assert(players != null, 'Players cannot be null');
    assert(deck != null, 'Deck cannot be null');

     
    // TODO: this is where the work goes
    let Game = [];
    while(hand.length < 16){
        hand.push(this.deck.pop());
    }
    // TODO: this is NOT the correct solution, it is simply returning the input values
    return new Game(players, deck.getCards());
};

/**
 * TODO: Test Engineering Open Code Challenge
 * Deal the specified number of cards to the players provided.
 * @param {PLayer[]} players List of Players to be dealt cards
 * @param {Deck} deck The Deck of Cards to be used
 * @param {number} numberOfCardsPerPlayer The number of cards to deal to each player.
 * @return {Game} comprised of the Players and their individual Cards
 * along with any undealt Cards that would remain
 */
const dealSome = (players, deck, numberOfCardsPerPlayer) => {
    assert(players != null, 'players cannot be null');
    assert(deck != null, 'deck cannot be null');
    assert(numberOfCardsPerPlayer != null, 'numberOfCardsPerPlayer cannot be null');


    // TODO: this is where the work goes
    let cards = []

        for (let i = 0; i < numberOfCardsPerPlayer; i++ ){
            let dealt_card = this.deck.shift()
            cards.push(dealt_card)
            this.dealt_cards.push(dealt_card)
        }
        
    // TODO: this is NOT th correct solution, it is simply returning the input values
    return new Game(players, deck.getCards());
};

/**
 * TODO: Test Engineering Open Code Challenge
 * Shuffle/randomize the provided Deck.
 * @param {Deck} deck The Deck to shuffle
 * @return {Deck} the shuffled deck
 */
const shuffleDeck = (deck) => {
    assert(deck != null, 'Deck cannot be null');

    // TODO: this is where the work goes
   
    let counter = this.deck.length, temp, l;

    while(counter){
        l = Math.floor(Math.random() * counter--){
            temp = this.deck[counter];
            this.deck[counter] = this.deck[l];
            this.deck[l] = temp;
        }
    }
   
   
    // TODO: this is NOT the correct solution, it is simply returning the input deck without being shuffled
    return deck;
};

/**
 * TODO: Test Engineering Open Code Challenge
 * Shuffle/randomize the provided list of Cards.
 * @param {Card[]} cards List of Cards to shuffle
 * @return {Card[]} the shuffled cards
 */
const shuffleCards = (cards) => {
    assert(cards != null, 'cards cannot be null');

   
    // TODO: this is where the work goes
     shuffleCards (deck){
        for(let i = 0; i < deck.length; i++){
            let swapIdx = Math.trunc(Math.random() * deck.length);
            let temp = deck[swapIdx];
            deck[swapIdx] = deck[i];
            deck[i] = temp;
        }
    }
    // TODO: this is NOT the correct solution, it is simply returning the input deck without being shuffled
    return cards;
};

module.exports = { dealAll, dealSome, shuffleDeck, shuffleCards };
