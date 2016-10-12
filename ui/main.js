//code to use counter using java script
var button = document.getElementById('counter');

var counter = 0;

button.onclick=  function(){
     // Accept the response from the counter 
     
     //grab the response 
     
     //Render the response
     counter = counter + 1;
     var count =  document.getElementById('count');
     count.InnerHTML = counter.toString();
}