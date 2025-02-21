const http = require("http");

const server = http.createServer(async (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    const data = await fetch("https://fakestoreapi.com/products");
    const jsonData = await data.json();

    const symbol = `
    <html>
    <head>
        <title>My Product</title>
        <style></style>
    </head>
    <body>
        <h1>Product</h1>
        ${jsonData.map((product) => {
            return `
            <div>
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <img src="${product.image}" height="200" width="100" alt="${product.title}">
                <p>${product.price}</p>
                <br>
            </div>
            `;
        }).join('')}
    </body>
    </html>
    `;

    res.end(symbol);
});

server.listen(9000, (err) => {
    if (err)
        throw err;
    console.log("Server is running at http://localhost:9000");
});
