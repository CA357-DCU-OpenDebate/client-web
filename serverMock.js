const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router(require('./db.js')());
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
//Route alias
server.use(jsonServer.rewriter({}))

server.post('/login', function (req, res, next) {
	res.header({
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Credentials": true,
		"Access-Control-Expose-Headers": "Location, Authorization",
		"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJodWdvIiwidXNlcklkIjozNTgyNjkzLCJleHAiOjE1ODUzMjAzODl9.1pyakV78bGGuVCEod1NWInAMyEhm4lK42Mj0_nJC0f0eL7E-6llix_ZGMe_R-osHVzoUBdxvSR8B0BqAlh8_Ow"
	})
	res.status(200).send(
		{ "salope": "salope" }
	)
});
server.use(middlewares);
server.use(router);
server.listen(3000, function () {
	console.log('JSON Server is running');
});

function getRandId() {
	return new Date().getUTCMilliseconds().toString();
}
