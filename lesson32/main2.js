// var input = document.getElementById('input_id');
// var button = document.getElementById('btn_id');
// var text = document.getElementById('teksti_id');

//button.onclick = function(){
//text innerHTML = input.value;
//}

var input1 = document.querySelector('#input_id');
var input2 = document.querySelector('#input2_id');
var ans = document.querySelector('#answer');


//Button.addEventListener('click', function(){
  //ans.innerHTML = input1.value + input2.value;// gabim
 // ans.innerHTML = parseInt(input1.value) + parseInt(input2.value); //e sakt
//})

var text = "The best club in the world is Real Madrid";
var result = text.search('Real Madrid')
document.getElementById('result1').innerHTML = result;

var text = "The best club in the world is Real Madrid";
var result = text.replace('Real Madrid', 'Real Madrid')
document.getElementById('result1').innerHTML = result;

var text2 = "abcdef";
var regex = new RegExp('abc')
document.getElementById('result3').innerHTML = regex.test(text2);

var text3 = "My club is the best club in the world!";
var regex = /l/g;
document.getElementById('result4').innerHTML = text3.match(regex)

var text4 = "Real Madrid is the best club in the world!!";
var regex = /[abc]/g;
document.getElementById('result5').innerHTML = text.match(regex)

var text5 = "Real Madrid is in the top 1 best clubs in the world!";
var regex = /[0-9]/g;
document.getElementById('result6').innerHTML = text5.match(regex)

var text6 = "100 percent in ifhn vbfh bnfuj!";
var regex = /\s/g
document.getElementById('result7').innerHTML = text6.match(regex)



