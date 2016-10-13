//code to use counter using java script
var button = document.getElementById('counter');



button.onclick=  function(){
     // Make the request 
     
      var request = new XMLHttpRequest();
     
     //grab the response 
     request.onreadystatechange = function(){
         if(request.readyState === XMLHttpRequest.DONE){
             if(request.status === 200){
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

//submit namae

var submit = document.getElementById('submit_btn');

submit.onclick = function(){
   

     // Make the request 
     
      var request = new XMLHttpRequest();
     
     //grab the response 
     request.onreadystatechange = function(){
         if(request.readyState === XMLHttpRequest.DONE){
             if(request.status === 200){
                //render the request 
            var names = request.responseText;
            names = JSON.parse(names);
            var list = '';
            for(var i=0; i<names.length; i++){
                 list += '<li>' + names[i] + '</li>';
                 }
            var ul = document.getElementById('namelist');
            ul.innerHTML =  list;

         }     
        }
     };
    
    var nameInput = document.getElementById('name');
   var name = nameInput.value;    
  // Making the request
  request.open('GET','http://hardikajmani.imad.hasura-app.io/submit-name?name' + name,true);
  request.send(null);
     

};