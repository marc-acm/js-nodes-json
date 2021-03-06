const HTTP = require('http');
const URL = require('url');
const { jsonResponse } = require('./utils'); 

const server = HTTP.createServer((req, res) => {
	try {
		const urlComponents = URL.parse(req.url);
		switch (urlComponents.pathname) {
	
		case '/':
		 
	    jsonResponse(res, {
		 	example: true,
		 	random: Math.random(),
		 	time: (new Date()).toUTCString(),
		 });	
		
		break;

	 
		case '/error':
		null.somethingWrong();
		break;


	  default:
		res.writeHead(404);
		res.end('Page not found: ' + urlComponents.pathname);
		break;
	}

	}

	catch(error) {
	  console.error(error);
	  res.whiteHead(500);
	  res.end('Whoops!');	
	}

});


server.on('clientError', (err, socket) => {

//listen on port 30000

socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');

});

server.listen(3000, function() {
	console.log('Started on port', 3000);
});



  // 

