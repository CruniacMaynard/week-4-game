$(document).ready(function(){
 

  var wins = 0;

  var losses = 0;

  var currentNumber;

  var randomGameNumber = 0;

  var randomPink = 0;

  var randomPurple = 0; 

  var randomGreen = 0;

  var randomBlue = 0;
  
  
  function randomValue(maxValue, minValue){
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  }
  
  
  function newGame(){
    
    randomGameNumber = randomValue(79, 29);
    
   
    randomPink = randomValue(13, 1);

    randomPurple = randomValue(13, 1);

    randomGreen = randomValue(13, 1);
    
    randomBlue = randomValue(13, 1);
    
   
    $('#game-number').html(randomGameNumber);

    $('#current-number').html(currentNumber);
    
    $('#wins').html(wins);
    
    $('#losses').html(losses);
    
    currentNumber = 0;
  };
 
  function scoreChecker(){
    
    
    if(currentNumber === randomGameNumber){
      wins++;
      $('#game-results').text('You Saved The Galaxy!');
      newGame();
    }
   
    else if(currentNumber > randomGameNumber){
      losses++;
      $('#game-results').text('The Galaxy Has Been Destroyed!');
      newGame();
    }
  }
  
  newGame();
  
  
  $('#Pink').on('click', function(){
    
    if(currentNumber < randomGameNumber){
      currentNumber += randomPink;
      $('#current-number').html(currentNumber);
      $('#game-results').text('');
      scoreChecker();
    }
    
  });
  
  $('#Purple').on('click', function(){
    
    if(currentNumber < randomGameNumber){
      currentNumber += randomPurple;
      $('#current-number').html(currentNumber);
      $('#game-results').text('');
      scoreChecker();
    }
    
  });
  

  $('#Green').on('click', function(){
    
    if(currentNumber < randomGameNumber){
      currentNumber += randomGreen;
      $('#current-number').html(currentNumber);
      $('#game-results').text('');
      scoreChecker();
    }
    
  })
  
  
  $('#Blue').on('click', function(){
    
    if(currentNumber < randomGameNumber){
      currentNumber += randomBlue;
      $('#current-number').html(currentNumber);
      $('#game-results').text('');
      scoreChecker();
    }
    
  });
});