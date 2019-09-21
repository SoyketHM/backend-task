exports.addString = async (req, res) => {
	// console.log(req.headers["content-type"]);
	const data = req.body;

	if (!data) {
		res.status(404).json({
			success: false,
			message: "Service creation failed"
		});
		return;
	}

	res.status(200).json({
		'content-type': req.headers["content-type"],
		message: "Service created successfully",
		data,
	});
};
