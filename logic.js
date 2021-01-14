var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
var values = [1,2,3,4,5,6,7,8,9,10,11,12,13];

var deck = [];

function resetDeck()
{
	tempDeck = [];
	// create the cards
	var i = 0;
	var j = 0;
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
//	For now, just deal two cards and compare the value.
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

	compareHands();

}

function compareHands()
{
	var pSum = computeSum(playerHand);
	var dSum = computeSum(dealerHand);

	if(pSum > dSum)
	{
		// player win
	}
	else if(pSum < dSum)
	{
		// dealer win
	}
	else
	{
		// tie!
	}
}

function computeSum(hand)
{
	var i = 0;
	var sum = 0;
	var temp = 0;
	for( i=0 ; i < hand.length ; i++ )
	{
		temp = hand[i].value;	// get the card value
		if(temp >= 11)
		{
			temp = 10;			// if we have a face card, make the value 10
		}
		if(temp == 1)
		{
			temp = 11;			// if we have an ace, make the value 11
		}
		sum += temp;			// add the card value to the sum
	}
	return sum;					// return the sum of the cards in the hand
}




















function reverseString(str)
{
	var splitstr = str.split("")
	var retstr = "";

	for(i = splitstr.length - 1 ; i > -1 ; i--)
	{
		retstr = retstr + splitstr[i];
	}
	return retstr;
}