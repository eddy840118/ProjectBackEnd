var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var gameModel = new Schema({
    name: {
        type: String
    },
    category: {type: String},
    platform: {type: String},
    publisher: {type: String}
});

module.exports= mongoose.model('Game', gameModel);