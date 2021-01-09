const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const app = express();
//initializations 

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
//----------------------
//Variable declarations
let questionName;
let urlObject = {};

let qObjects ={
    "response_code": 0,
    "results": [
        {
            "category": "Entertainment: Musicals & Theatres",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of these musicals won the Tony Award for Best Musical?",
            "correct_answer": "Rent",
            "incorrect_answers": [
                "The Color Purple",
                "American Idiot",
                "Newsies"
            ]
        },
        {
            "category": "Entertainment: Musicals & Theatres",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What play is the quote &quot;Hell is other people&quot; from?",
            "correct_answer": "No Exit",
            "incorrect_answers": [
                "The Devil and the Good Lord",
                "The Condemned of Altona",
                "The Flies"
            ]
        },
        {
            "category": "Entertainment: Musicals & Theatres",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of the following is not a piece from the 1950&#039;s musical West Side Story?",
            "correct_answer": "The Back Alley",
            "incorrect_answers": [
                "Maria",
                "Tonight",
                "Mambo"
            ]
        },
        {
            "category": "Entertainment: Musicals & Theatres",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The World Chess Championship in Chess, Act 1 is set in which Italian city?",
            "correct_answer": "Merano",
            "incorrect_answers": [
                "Venice",
                "Milan",
                "Rome"
            ]
        },
        {
            "category": "Entertainment: Musicals & Theatres",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The Andrew Lloyd Webber musical &quot;Cats&quot; is based off a book of poems written by which author?",
            "correct_answer": "T.S. Elliot",
            "incorrect_answers": [
                "Andrew Lloyd Webber",
                "Emily Dickenson",
                "Robert Frost"
            ]
        }
    ]
}; // This is the object that would populate the list
const url = "https://opentdb.com/api.php?amount=2&category=13&difficulty=easy&type=multiple";
let port = +3000; //localhost port

// let p = new Promise((resolve, reject) =>{

//     res.render('main', {qObjectsEJS: qObjects});
// };

// end variable declarations
//---------------------

https.get(url, function(response){
    
    console.log("response is " +response.statusCode);
    
    response.on("data",function(data){
        qObjects  =JSON.parse(data);
    });
    
});


app.get("/", function(req, res){
    // res.write("<h1>Hi</h1>");
    // res.sendFile(__dirname + "/index.html");
    // res.send(parse);

//  console.log("hey" );
    //this is for EJS

    // console.log();
   res.render('main', {qObjectsEJS: qObjects}); // { var name in ejs: var name in server}

    
    


    
} );
let qExtract = {};

 for (var i; i < qObjects.results.length;i++){
qExtract[i] = qObjects.results[i]["category"];
console.log(qObjects.results[i]);

}
console.log(qObjects.results.length);

app.listen(process.env.PORT || port, function(){
    console.log("listening on port 2000");
    
    });
;
