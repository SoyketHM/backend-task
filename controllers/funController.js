const Stringstore   	= require('../models/stringstore');

exports.addString = async (req, res) => {
	let data;
	let stra = req.body.strA.split('');
	let strb = req.body.strB.split('');
	// call fun function
	const funFunc = fun(stra, strb);
	console.log(stra, strb);
	if (funFunc) {
		data = await Stringstore.create(req.body);
	}

	if (!data) {
		res.status(404).json({
			success: false,
			message: "String store failed"
		});
		return;
	}
	// send response
	res.status(200).json({
		'content-type': req.headers["content-type"],
		message: "String store successfully",
		data,
	});
};

// fun function for compare between strA & strB
function fun(stra, strb) {
	if (strb.length <= 0){
		stra = [];
		// strB = [' '];
	}else {
		const strlen = stra.length;
		for (let i = 0;i<strlen; i++) {
			if (strb[i] !== stra[i]) {
				stra.splice(i,1);
			}
		}
		stra = stra.join('');
		strb = strb.join('');
		console.log(stra, strb);
	}

	if (stra === strb) {
		return true;
	}
}
