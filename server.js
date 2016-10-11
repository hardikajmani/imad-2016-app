var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
  'art-one': {
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
    
},
'art-two': {
    title: 'Article-two',
    heading: 'Aricle-two',
    content: `   <p>  This  shit is article two </p> ` 
                      
},
'art-three': {
    title: 'Article-three',
    heading: 'Aricle-three',
    content: `   <p>  This is article three </p>`
                   
}
    
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

app.get('/:artName',function(req,res){
    var artName = req.params.artName;
    res.send(createTemplate(articles[artName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
