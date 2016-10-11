console.log('Loaded!');

// change text
var elem = document.getElementById('main');

elem.innerHTML = ' NEw changes BLA bla bla bla ';

//To move the picture
var elem2 = document.getElementById('main2');

var marginleft = 0;
function moveright(){
    marginleft = marginleft + 5;
    main2.style.marginLeft = marginleft + 'px';
    
}

main2.onclick = function(){
    var int = setInterval(moveright,25);
};
