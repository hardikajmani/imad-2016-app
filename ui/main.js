//code to use counter using java script
var button = document.getElementById('counter');



button.onclick=  function(){
     // Make the request 
     
      var request = new XMLHttpRequest();
     
     //grab the response 
     request.onreadystatechange = function(){
         if(request.readyState === XMLHttpRequest.DONE){
             if(requst.response === 200){
             var counter = request.responseText;
              var span =  document.getElementById('count');
            span.innerHTML = counter.toString();  
         
             }     
        }
         
     }; 
        
  // Making the request
  request.open('GET','http://hardikajmani.imad.hasura-app.io/counter',true);
  request.send(null);
     
};