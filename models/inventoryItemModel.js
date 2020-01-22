var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var inventoryItemSchema = new Schema({
    partname: String,
    count: Number
});

var InventoryItems = mongoose.model('InventoryItems', inventoryItemSchema);

module.exports = InventoryItems;