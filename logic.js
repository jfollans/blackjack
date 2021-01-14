var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
var values = [1,2,3,4,5,6,7,8,9,10,11,12,13];

var deck = [];

var i;
var j;

function resetDeck()
{
	tempDeck = [];
	// create the cards
	for( i=0; i<suits.length; i++ )
	{
		for( j=0; j<values.length; j++ )
		{
			var card = {
				suit:suits[i],
				value:values[j]
			}
			tempDeck.push(card);
		}
	}
	
	// shuffle the deck
	for(i = 0; i<52 ; i++)
	{
		var ind = Math.floor(Math.random()*tempDeck.length); // pick element
		deck.push(tempDeck[ind]); // add random card to shuffled deck
		tempDeck.splice(ind, 1); // remove card from ordered deck
	}
	console.log(deck);
}





// ==================
//
//	The rules of blackjack:
//	1. You and dealer get dealt two cards each
//	2. You can hit until you bust or stand
//	3. If the dealer busts you win
//	4. ???
//	5. Profit
//
// ==================


var playerHand = [];
var dealerHand = [];

function hit()
{
	console.log('hit');
}

function stand()
{
	console.log('stand');
}

function startGame()
{
	console.log('started game');
	resetDeck();
	initialDeal();
}

function initialDeal()
{
	console.log('initial deal');

	playerHand.push(deck.pop());
	dealerHand.push(deck.pop());
	playerHand.push(deck.pop());
	dealerHand.push(deck.pop());
}