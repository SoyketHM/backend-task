
const mongoose 		= require('mongoose');
const { Schema } 	= mongoose;
mongoose.Promise 	= global.Promise;

const stringstoreSchema = new Schema({
	strA: {
		type: String,
		trim: true
	},
	strB: {
		type: String,
		trim: true
	}
}, { timestamps: true });

module.exports = mongoose.model('Stringstore', stringstoreSchema);



