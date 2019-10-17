const { mongoose } = require('./index');
const Schema = mongoose.Schema;

var teamSchema = new Schema({
  owner:  { type: String, index: true, required : true },
  name: { type: String, index: false, required : true },
  created_at: { type: Date,  unique : false,  index: false, default : new Date() },
  members: { type: Array, default: [] }
});

module.exports = mongoose.model('teams', teamSchema);