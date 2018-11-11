var mongoose = require('mongoose');

module.exports = {
  conn: function(){
    mongoose.connect('mongodb://localhost/updatedb'),
    mongoose.Promise = global.Promise;
  }
}
