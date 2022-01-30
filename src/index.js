const mongoose = require('mongoose');
const db = mongoose.connection;

db.on('error', () => {
  process.exit(1);
});
db.once('open', function () {
  console.log('connected');
});
console.log(db);

mongoose.connect('mongod://127.0.0.1:27017/testpd2021', {useUnifiedTopology = true}, function(err){
    if(err){ console.log('mongo connection error');
    } else{
        console.log('mongo connection success');
    }
});
