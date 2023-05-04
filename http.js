const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h4>HOME PAGE</h4>");
    res.end();
  } else if (req.url === "/about") {
    res.write(`<h4>ABOUT PAGE</h4> <a href="/">Go Back Home</a>`);
    res.end();
  } else {
    res.write(
      `<h4>Oops We can't seem to find the page you are looking for<h4> <a href="/">Go Back Home</a>`
    );
    res.end();
  }
});

server.listen(5000);
