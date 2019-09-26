/*
GAME RULES:

-The game has 2 players, playing in rounds
-In each turn, a player rolls a dice as many times as he wishes. Each result get added to his
 ROUND score
-BUT, if the player rolls a 1, all his round score gets lost. After that, it's the next player's
 turn 
-The player can choose to 'HOLD', which means that is round score gets added to his GLOBAL score.
 After that, it's the next player's turn
-The first player to reach 100 points on GLOBAL score win the game

*/ 

var scores,roundScore,activePlayer,dice,gamePlaying;


    init();
 

 /**
    //get Data 

    var x = document.querySelector('#score-0').textContent;
    console.log(x);

     //set Data
    document.querySelector('#current-'+activePlayer).textContent = dice;
  */

  

  
  //change css property
    document.querySelector('.dice').style.display = 'none';

    document.querySelector('.btn-roll').addEventListener('click',function(){
        if(gamePlaying)
        {
            // 1. Random Number
        dice= Math.floor(Math.random()*6)+1;

        // 2. Display the result
            var diceDOM = document.querySelector('.dice');
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-'+dice +'.png';


        // 3. Update the round score, If the roll number was not a 1
        if(dice !==1)
        {
            //Add score
            roundScore+=dice;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }else{
            //Next Player
            nextPlayer();
        }

        }
    });

    document.querySelector('.btn-hold').addEventListener('click',function(){
       if(gamePlaying)
       {
           
        //Add current score to GLOBAL score
        scores[activePlayer] +=roundScore;

        //Update the UI
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

        //check if the player won the game
        if(scores[activePlayer]>=20)
        {
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('Winner!');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            //Next Player
            nextPlayer();
        }
       }

    });

    function nextPlayer()
    {
        activePlayer ===0? activePlayer=1:activePlayer=0;
        roundScore = 0;
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';


        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
    }

    document.querySelector('.btn-new').addEventListener('click',init);

    function init()
    {
        scores = [0,0];
        roundScore = 0;
        activePlayer = 0;
        gamePlaying=true;

        document.getElementById('score-0').textContent    ='0';
        document.getElementById('score-1').textContent    ='0';
        document.getElementById('current-0').textContent  ='0';
        document.getElementById('current-1').textContent  ='0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 1';

        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');

        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');

        document.querySelector('.dice').style.display = 'none';
    }







