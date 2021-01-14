
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


var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
var values = [1,2,3,4,5,6,7,8,9,10,11,12,13];

var deck = [];

var playerHand = [];
var dealerHand = [];


function resetDeck()
{
	deck = [];
	tempDeck = [];
	playerHand = [];
	dealerHand = [];
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

function hitPlayer()
{
	playerHand.push(deck.pop());	// add card to player's deck

	newCard = document.createElement('div');	// add new card to table
	newCard.classList = 'card-disp';
	newCard.innerHTML = cardString(playerHand[playerHand.length-1]);
	document.getElementById('player-cards').appendChild(newCard);

	compareHands();					// check scores for bust, win, etc

	console.log('hit');
}

function stand()
{
	console.log('stand');
}

function startGame()
{
	console.log('started game');
	enableButtons();

	// remove all dealt cards from table
	document.getElementById('player-cards').innerHTML = '';
	document.getElementById('dealer-cards').innerHTML = '';

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

	updateDisplay();

	compareHands();

}

function updateDisplay()
{

	var i = 0;
	for( i = 0 ; i < playerHand.length ; i++)
	{
		newCard = document.createElement('div');
		newCard.classList = 'card-disp';
		newCard.innerHTML = cardString(playerHand[i]);
		document.getElementById('player-cards').appendChild(newCard);
	}

	for( i = 0 ; i < dealerHand.length ; i++)
	{
		newCard = document.createElement('div');
		newCard.classList = 'card-disp';
		newCard.innerHTML = cardString(dealerHand[i]);
		document.getElementById('dealer-cards').appendChild(newCard);
	}
}

function cardString(card)
{
	var retstring = "";
	if(card.value == 1)
	{
		retstring = "A";
	}
	if(card.value == 11)
	{
		retstring = "J";
	}
	if(card.value == 12)
	{
		retstring = "Q";
	}
	if(card.value == 13)
	{
		retstring = "K";
	}
	if(card.value > 1 && card.value < 11)
	{
		retstring = card.value;
	}
	retstring = retstring + " of " + card.suit + "";
	return retstring;
}


function compareHands()
{
	var pSum = computeSum(playerHand);
	var dSum = computeSum(dealerHand);
	var result_text = document.getElementById('results');

	if(pSum > 21)
	{
		// player bust
		result_text.innerHTML = "Player bust. "
		disableButtons();
		return;
	}
	if(dSum > 21)
	{
		// dealer bust
		result_text.innerHTML = result_text.innerHTML + "Dealer bust."
		disableButtons();
		return;
	}

	if(pSum > dSum)
	{
		// player win
		result_text.innerHTML = "Player win! "
		disableButtons();
		return;
	}
	else if(pSum < dSum)
	{
		// dealer win
		result_text.innerHTML = "Dealer win! "
	}
	else
	{
		// tie!
		result_text.innerHTML = "Tie! "
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



function disableButtons()
{
	document.getElementById('hit-button').disabled = true;
	document.getElementById('stand-button').disabled = true;
}
function enableButtons()
{
	document.getElementById('hit-button').disabled = false;
	document.getElementById('stand-button').disabled = false;
}