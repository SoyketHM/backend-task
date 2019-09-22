const mongoose = require('mongoose');

const dbUrl = process.env.MONGODB_URI;
if(!dbUrl) {
	return new Error('Mongo url not set in env file');
}
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, error => {
	if (error) {
		console.log(`FAILED to connect using mongoose. ${error}`);
	} else {
		console.log('Connected to DB server.');
	}
});

module.exports = mongoose;
