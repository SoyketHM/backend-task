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
		// console.log(stra, strb)
    // let i = 0;
	if (strb.length <= 0){
		stra = '';
		strb = '';
		// console.log(stra, strb);
	}else {
		for (let i=0;i<stra.length; i++) {
		    console.log(strb.includes( stra[i]));
			if (!strb.includes( stra[i]) ) {
				stra.splice(i,1);
                i--;
			}
		}
		console.log(stra, strb);
		stra = stra.join('');
		strb = strb.join('');
	}

    console.log(stra, strb);
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

	// send response
	res.status(200).json({ list	});
};
