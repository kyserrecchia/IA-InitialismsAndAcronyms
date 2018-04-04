const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));


app.get('/', function (req, res) {
  res.sendFile('/index.html');
});

app.listen(PORT, function(){
	console.log("running on 8080!");
});

// app.post('/posted', function(req,res){
// 	const text = req.body.iaTextArea;
// 	const pattern = req.body.subjects;
// 	console.log(text);
// 	console.log(pattern);
// 	console.log("/////");
// 	const index = ss.boyer_moore(text, pattern, true);
// 	console.log(index);

// 	res.redirect('/');
// });

