const {User} = require("../models");

module.exports = {
	async register (req, res) {
		try{
			console.log(req.body);
			const user = await User.create(req.body);
			res.send(user.toJSON());
		}catch(err) {
			console.log(err);
			res.status(400).send({
				error: "This email is taken"
			});
		}
	}
};