//code to use counter using java script
var button = document.getElementById('counter');
button.onclick=  function(){
     // Accept the response from the counter 
     
     //grab the response 
     
     //Render the response
     counter = counter + 1;
     var count =  document.getElementById('count');
     count.InnerHTML = counter.toString();
}