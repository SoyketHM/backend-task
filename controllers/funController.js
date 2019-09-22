const Stringstore   	= require('../models/stringstore');

exports.addString = async (req, res) => {
	const data = await Stringstore.create(req.body);

	if (!data) {
		res.status(404).json({
			success: false,
			message: "String store failed"
		});
		return;
	}

	res.status(200).json({
		'content-type': req.headers["content-type"],
		message: "String store successfully",
		data,
	});
};
