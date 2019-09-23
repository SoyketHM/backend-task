const Stringstore   	= require('../models/stringstore');

// save strings
exports.addStrings = async (req, res) => {
	let data;
	// split strA & strB
	let stra = req.body.strA.split('');
	let strb = req.body.strB.split('');

	// call fun function
	const funFunc = fun(stra, strb);
	
	if (strb.length <= 0){
		req.body.strB = '';
	}	
	// save strings.
	if (funFunc) {
		data = await Stringstore.create(req.body);
	}

	if (!data) {
		res.status(200).json({ result: false });
		return;
	}
	if (data) {
		res.status(200).json({ result: true, data });
		return;
	}
	res.status(500);
};

// fun function for compare between strA & strB
function fun(stra, strb) {
	if (strb.length <= 0){
		stra = '';
		strb = '';
	}else {
		for (let i = 0; i < stra.length; i++) {
			if (!strb.includes(stra[i]) ) {
				stra.splice(i, 1);
                i--;
			}
		}
		stra = stra.join('');
		strb = strb.join('');
	}

	// compare stra & strb
	if (stra === strb) {
		return true;
	}
	return false;
}

// get all pairs of strings
exports.getStrings = async (req, res) => {

	// get all pairs of saved strings
	const list = await Stringstore.find({});

	if (!list) {
		res.status(404).json({ message: 'strings not found!' });
		return;
	}
	// send response
	res.status(200).json({ list	});
};
