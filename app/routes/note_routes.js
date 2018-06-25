module.exports = function( app, db) {

  //This code executes when a post request is made to the notes endpoint
  app.post('/notes', (req, res) =>{
    //You'l create your note here.

    //Request Json body from Api
    console.log(req.body)

    //Send Hello to endpoint
    res.send('Hello')
  })

};
