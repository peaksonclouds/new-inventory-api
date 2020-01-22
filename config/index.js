var configValues = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb+srv://basecamp:'+configValues.pwd+'@clustermfe-9k4jt.mongodb.net/test?retryWrites=true&w=majority';
    }
    
}