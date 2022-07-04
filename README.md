Middleware in nodejs
Middleware prevents a user from performing a certain operation or logging the path for an incoming request to your application.
Middleware functions in Express.js accept three arguments following the request, response, and next lifecycle methods. The first argument, req, is shorthand for the request object with built-in properties to access data from the client side and facilitate HTTP requests. The argument, next, is a function that tells Express.js to continue on to the following middleware you have configured for your application.
Middleware can process request objects multiple times before the server works for that request.
Middleware can be used to add logging and authentication functionality.
Middleware helps for Optimization and better performance.
