import {Card} from './Card.js';
import { Deck } from './Deck.js';
import { Player } from './Player.js';

const player = new Player('Mateusz')
const deck = new Deck();
console.log(deck.shuffle());

const card = new Card('A', 'hearts');
document.getElementById('playersCards').appendChild(card.render());