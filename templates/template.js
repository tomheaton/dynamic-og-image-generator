module.exports = ({title, description, style}) => {
  return (
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Generated Image</title>
      <style>
        html, body { width: 500px; height: 500px }
        * { border: red solid 1px; }
        "${style}"
      </style>
    </head>
    <body >
      <div>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
    </body>
    </html>
    `
  );
}
