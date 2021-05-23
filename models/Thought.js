const { Schema , model, Types } = require('mongoose');


// reaction subdocument
const ReactionSchema = new Schema(
    {
        reactionId: {
             type: Schema.Types.ObjectId,
             default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280

        },
        username:{
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
          }
    },
    {
      toJSON: {
        getters: true
      },
      id: false
    }
);

const ThoughtSchema = new Schema(
  {
      thoughtText: {
          type: String,
          required: true,
          minLength: 1,
          maxLength: 280
      },
      createdAt: {
          type: Date,
          default: Date.now
          // get: createdAtVal => dateFormat(createdAtVal)
        },
      username:{
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      // use ReactionSchema
      reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
})
const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;