const mongoose = require('mongoose');
const { Schema } = mongoose;

const historySchema = new Schema(
    {
        collectionName: String,
        collectionId: Schema.Types.ObjectId,
        diff: {},
        oldDocument: {},
        newDocument: {},
        user: {},
        reason: String,
        version: { type: Number, min: 0 }
    },
    {
        timestamps: true,
        collection: 'internals.histories'
    }
);

module.exports = { model: mongoose.model('History', historySchema), schema: historySchema };
