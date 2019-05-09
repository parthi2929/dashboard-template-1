var request = require('request');

//call back function to be called when '/' route is called
exports.home = function (request, response) {
    //render the "home" view from ejs. note we are not explicitly specifying .ejs extension
    response.render("home",
        {
            title: "Your Dashboard Title"
        }
    );
}
