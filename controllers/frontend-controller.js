import { dirname, join } from "path";
import { fileURLToPath } from "url";

// stores __dirname for use within ES6 modules
const __dirname = dirname(fileURLToPath(import.meta.url));

// defines the static path to serve the React frontend
export const staticPath = join(__dirname, "..", "client", "dist", "index.html");

// reads the file at the static path, sends it back as a response to the client
function staticServe(res) {
	return res.sendFile(staticPath);
}

// main frontend views handler
export const appRoute = (req, res) => {
	staticServe(res);
};

// reset password page
export const resetPasswordPage = async (req, res) => {
	try {
		let { token } = req.query;
		console.log(token);
		if ((token.length === 0) || !token) {
			res.redirect("/login");
		} else {
			staticServe(res);
		}
	} catch (err) {
		res.status(404).send(err);
	}
}