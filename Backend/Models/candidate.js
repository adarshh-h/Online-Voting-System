const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  party: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    require: true,
  },

  votes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },

      votedAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],

  voteCount: {
    type: Number,
    default: 0,
  },
});

const Candidate = mongoose.model("candidate", candidateSchema);
module.exports = Candidate;
