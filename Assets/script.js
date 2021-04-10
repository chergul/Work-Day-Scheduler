var clockNow = moment().format('dddd, MMMM Do YYYY');
var currentNow = moment().format('h');
var currentNow24= parseInt(moment().format('HH'));
var currentNowInt = parseInt(currentNow);
var Timer;

var current1 = $('#clock1').text();
var current2 = $('#clock2').text();
var current3 = $('#clock3').text();
var current4 = $('#clock4').text();
var current5 = $('#clock5').text();
var current6 = $('#clock6').text();
var current7 = $('#clock7').text();
var current8 = $('#clock8').text();
var current9 = $('#clock9').text();

var currentInt = parseInt(current1);
var current2Int = parseInt(current2);
var current3Int = parseInt(current3);
var current4Int = parseInt(current4);
var current5Int = parseInt(current5);
var current6Int = parseInt(current6);
var current7Int = parseInt(current7);
var current8Int = parseInt(current8);
var current9Int = parseInt(current9);
    
     $(".btn-info").on("click", function(event) {
       console.log(event.target.previousElementSibling.id);
       console.log(event);
       var textKey = event.target.previousElementSibling.id;
       var textAreaValue = event.target.previousElementSibling.value;
       localStorage.setItem(textKey, textAreaValue);
     })
    

$('#currentDay').append(clockNow);

colorChange();

function colorChange() {

  TIMER = setInterval(colorChange, 1000);
  
  if(currentNow24 >= 9 && currentNow24 <= 17) {

    for (var i =1; i<=9 ; i++) { 
     var currentInInt = parseInt($('#clock'+i).text());

      if (currentInInt < 9) {
        currentInInt = currentInInt + 12;
      }
      
      if (currentInInt == currentNow24) {
        $('#text'+i).css('background-color', '#ff6961');
        continue;
      }
      
      if (currentInInt < currentNow24) {
        $('#text'+i).css('background-color', 'lightgray');
      } 
      else {
        $('#text'+i).css('background-color', 'lightgreen');
      }
    }

  }
  else {
    clearInterval(TIMER);
    $('textarea').css('background-color', 'pink');
  }
}

 
