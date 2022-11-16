const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: "reaction",
      maxlength: 280,
    },
    username: {
      type: String,
      required: "username",
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timeStamp) =>
        moment(timeStamp).format("MMMM DD, YYYY [at] hh:mm:ss a"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const ThoughtSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    thoughtText: {
      type: String,
      required: "thoughts",
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timeStamp) =>
        moment(timeStamp).format("MMMM DD, YYYY [at] hh:mm:ss a"),
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
