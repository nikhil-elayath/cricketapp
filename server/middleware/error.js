module.exports = (err, req, res, next) => {
	res.status(err.statusCode ? err.statusCode : 500).send(
		err.errorMessage ? err.errorMessage : "Please contact the admin"
	);
};
