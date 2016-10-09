var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var artone={
    title: 'Article-one',
    heading: 'Aricle-one',
    content: `   <p>
            bla abla jffvbvalvb bla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvb
        </p>
        <p>
            bla abla jffvbvalvb bla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvb
        </p>
        <p>
            bla abla jffvbvalvb bla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvbbla abla jffvbvalvb
        </p>`
    
};


function createTemplate(data){ 
 
 var title   =   data.title;
 var heading =   data.heading;
 var content =   data.content;
 var template=
   ` <html>
<head>
    <title>
        ${title}
    </title>
    <meta name="viewport" content="widt=device-width, initial-scale=1"/>
     <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
   <div class="cont">
    <div>
        <a href="/"> Home </a>
    </div>
        <hr/>
        <h3>
            This is ${heading} 
        </h3>
        ${content}
    </div>
</body>
</html>`;
return template;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/art-one',function(req,res){
    res.send(createTemplate(artone));
});

app.get('/art-two',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'art-two.html'));
});

app.get('/art-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'art-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
