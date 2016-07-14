var mongoose = require("mongoose");

var memberSchema = new mongoose.Schema({
  name: String,
  image_url: String,
  profile_url: String,
  short_desc: String,
  fb_url: String,
});

module.exports = mongoose.model("Member",memberSchema);
