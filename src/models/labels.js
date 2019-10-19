const { mongoose } = require('./index');
const Schema = mongoose.Schema;

var labelsSchema = new Schema({
  name:  { type: String, unique: false, index: true, required: false },
  creator_id : { type: String, unique : false, index: true, required : true },
  created_at: { type: Date,  unique : false,  index: false, default : new Date() }
});

module.exports = mongoose.model('Labels', labelsSchema);