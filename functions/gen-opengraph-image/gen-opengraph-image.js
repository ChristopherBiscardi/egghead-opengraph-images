const playwright = require("playwright-aws-lambda");
const fs = require("fs");
const script = fs.readFileSync("./image.js", "utf-8");

exports.handler = async function(event, ctx) {
  const browser = await playwright.launchChromium();
  const context = await browser._defaultContext;
  const page = await context.newPage();
  await page.setContent(`<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
    </head>
  
    <body>
      <div id="corgi"><div>CORGIIIS</div></div>
    </body>
  </html>
  `);
  await page.addScriptTag({ content: script });
  const boundingRect = await page.evaluate(() => {
    const corgi = document.getElementById("corgi");
    const { x, y, width, height } = corgi.children[0].getBoundingClientRect();
    return { x, y, width, height };
  });

  const screenshotBuffer = await page.screenshot({ clip: boundingRect });
  await browser.close();
  return {
    isBase64Encoded: true,
    statusCode: 200,
    headers: {
      "Content-Type": "image/png",
      "Content-Length": screenshotBuffer.length.toString()
    },
    body: screenshotBuffer.toString("base64")
  };
};
