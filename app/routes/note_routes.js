module.exports = function( app, db) {

  //This code executes when a post request is made to the notes endpoint
  app.post('/notes', (req, res) =>{
    //You'l create your note here.

    //Request Json body from Api
    console.log(req.body)
    console.log("Does it come from here?")

    prompt('Whats your name?', function (input) {
    console.log(input);
    //process.exit();
    });
    //Send Hello to endpoint
    //res.send('Hello')
  })

};

//This function is used to perform text I/O
function prompt(question, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question);

    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}
