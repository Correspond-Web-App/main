const mongoose = require('../index.js');

const roomSchema = mongoose.Schema({
  userOneID: String,
  userTwoID: String,
  messages: { type: Array, default: [] } // array of objects with senderID, body, timestamp
}, { minimize: false });

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  profilePicture: String,
  email: String,
  bio: String,
  country: String,
  gender: String,
  pronouns: String,
  birthdate: Date,
  pendingConnections: { type: Object, default: {} }, // object of userIds as keys and 0 (pending), 1 (approved), or 2 (reject) as value
  rooms: { type: Object, default: {} }, // object of roomIds and value as userID of connection
  requestedConnections: { type: Object, default: {} }, // object of userIds as keys and 0 (pending), 1 (approved), or 2 (reject) as value
}, { minimize: false });

module.exports.Room = mongoose.model('Room', roomSchema);
module.exports.User = mongoose.model('User', userSchema);
