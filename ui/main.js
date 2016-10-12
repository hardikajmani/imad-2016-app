//code to use counter using java script
var button = document.getElementById('counter');



button.onclick=  function(){
     // Make the request 
     
      var request = new XMLHttpRequest();
     
     //grab the response 
     rquest.onreadystatechange = function(){
         if(request.ReadyState === XMLHttpRequest.DONE){
             if(requst.response === 200)
             var counter = request.responseText;
              var span =  document.getElementById('count');
            span.innerHTML = counter.toString();  
         }
     }; 
     
     //Render the response
     
};