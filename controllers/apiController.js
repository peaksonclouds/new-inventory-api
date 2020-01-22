var InventoryItems = require('../models/inventoryItemModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.get('/api/inventoryItems/:partname', function(req, res) {
        
        InventoryItems.find({ partname: req.params.partname }, function(err, inventoryItems) {
            if (err) throw err;
            
            res.send(inventoryItems);
        });
        
    });
    
    app.get('/api/inventoryItem/:id', function(req, res) {
       
       InventoryItems.findById({ _id: req.params.id }, function(err, inventoryItem) {
           if (err) throw err;
           
           res.send(inventoryItem);
       });
        
    });
    
    app.post('/api/inventoryItem', function(req, res) {
        
        if (req.body.partname) {
            InventoryItems.findByIdAndUpdate(req.body.partname, { partname: req.body.partname, count: req.body.count }, function(err, inventoryItem) {
                if (err) throw err;
                
                res.send('Success');
            });
        }
        
        else {
           
           var newInventoryItem = InventoryItems({
               partname: req.body.partname,
               count: req.body.count
           });
           newInventoryItem.save(function(err) {
               if (err) throw err;
               res.send('Success');
           });
            
        }
        
    });
    
    app.delete('/api/inventoryItem', function(req, res) {
        
        inventoryItem.findByIdAndRemove(req.body.partname, function(err) {
            if (err) throw err;
            res.send('Success');
        })
        
    });
    
}