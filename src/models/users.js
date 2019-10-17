const { mongoose } = require('./index');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  email:  { type: String, unique : true, required : true },
  password: { type: String, unique : false, index: false, required : true },
  created_at: { type: Date,  unique : false,  index: false, default : new Date() },
  verified: { type: Boolean, default: false }
});

module.exports = mongoose.model('Users', userSchema);