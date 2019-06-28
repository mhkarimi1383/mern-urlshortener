# MERN URL Shortener

### Summary
This project takes User's URL and generates a shorter one. The original and shortened URL are stored in MongoDB database. The back-end creates an API endpoint to the new URL which redirects to the original. It is available here: https://mernurl.herokuapp.com/

### Responsive
![React Logo w/ Text](http://fromgaming.com/portfolio2/static/media/urlshortner-markup.fc5bb0b8.png)

### 1 Entry per Link
Function in server.js makes sure there's only 1 entry per link, e.g. http://google.com can only be shortened once. Rather than error, server sends the previously generated shortened URL. Otherwise, if the entry is a new unique one in the database, it will make a new entry.
```
...
 console.log('checking URL for validity');
  if (!urlRegex.test(newUrl)) {
    //send error message if invalid string
    res.send({error: "invalid URL"});
  } else {
    //check if the url is in the database already
    console.log('URL is valid');
    console.log('checking if URL already exist in database');
    var findExistingEntry = Links.findOne(
        { original_url: newUrl },
        { original_url: 1, short_url: 1}
    ).then(function(data) {
      //return the shortened URL if already in collection
      if (data) {
        console.log('already here');
        console.log(data);
        console.log(data.short_url);
        return res.send({original_url: data.original_url, short_url: data.short_url});
      } else {
...
```

### Entry count
Entry count is updated real-time.
![React Logo w/ Text](http://fromgaming.com/portfolio2/static/media/urlshortner-markup.fc5bb0b8.png)

### Users can visit their shortened URL
When user visits, for example, https://mernurl.herokuapp.com/5278, this is an api endpoint which redirects the user to the original URL, if the shortened URL exists.
```
// Get input from client - Route parameters 
app.get('/:shortened', function(req, res, next) {
      //check the database for the shortened url
      var findOneByFood = Links.findOne({short_url:parseInt(req.params.shortened)})
      .then(function (data) {
        if(!data) {
          console.log('got an error: ' + data);
          return null;
        } else {
          console.log('got some data: ' + JSON.stringify(data));
          res.redirect(data.original_url);
        }
      });
});
```
