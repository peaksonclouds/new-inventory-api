var InventoryItems = require('../models/inventoryItemsModel');

module.exports = function(app) {
    
   app.get('/api/setupInventoryItems', function(req, res) {
       
       // seed database
       var starterInventoryItems = [
           {
               partname: 'rocket',
               count: 24
           },
           {
            partname: 'parachute',
            count: 3000
           },
           {
            partname: 'drone',
            count: 450
           }
       ];
       InventoryItem.create(starterInventoryItems, function(err, results) {
           res.send(results);
       }); 
   });
    
}