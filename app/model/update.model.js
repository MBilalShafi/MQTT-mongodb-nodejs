const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UpdateSchema = new Schema({
  player1Name: {
    type: String,
  },
  player1Score: {
    type: String
  },
  player1Sets: {
    type: String
  },
  player2Name: {
    type: String,
  },
  player2Score: {
    type: String
  },
  player2Sets: {
    type: String
  },
  commentry: {
    type: String
  },
});

const Update = mongoose.model('update', UpdateSchema);

module.exports=Update;
