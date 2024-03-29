const { mongoose } = require('./index');
const Schema = mongoose.Schema;

var foldersSchema = new Schema({
  name:  { type: String, unique : false, required : false },
  creator_id : { type: String, unique : false, index: true, required : true },
  created_at: { type: Date,  unique : false,  index: false, default : new Date() },
  label: { type: String, default: '' },
  team: { type: String, default: '' }
});

module.exports = mongoose.model('Folders', foldersSchema);