const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNumber: { type: String, required: true, unique: true },
    roomNumber: String,
    pendingBill: {
        messFee: { type: Number, default: 0 },
        fines: { type: Number, default: 0 }
    },
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', studentSchema);