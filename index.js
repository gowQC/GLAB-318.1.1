const http = require("http");
const PORT = 3000;

http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write(
      "The above H1 was written through the server instead of through an HTML file! This is my G-LAB submission."
    );
    res.end();
  })
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
