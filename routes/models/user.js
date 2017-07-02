/**
 * Created by Bubun on 6/30/2017.
 */
var mongoose     = require('mongoose');
mongoose.Promise = global.Promise;
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    userEmail: {type: String, unique: true, required: true},
    userPassword: {type:String, require:true}
});
module.exports = mongoose.model('User', UserSchema);