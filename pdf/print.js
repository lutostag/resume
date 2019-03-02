const puppeteer = require('puppeteer');
const path = require('path');
const filename = 'file://' + path.dirname(__dirname) + path.sep + 'build' + path.sep + 'resume.html';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(filename, {waitUntil: 'networkidle2'});
  await page.pdf({path: 'build/GregLutostanski.pdf', format: 'A4'});
  await browser.close();
})();
