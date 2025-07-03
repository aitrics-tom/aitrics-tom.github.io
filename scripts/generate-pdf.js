const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto(`file://${path.join(__dirname, '../assets/html/cv_template.html')}`, {
    waitUntil: 'networkidle0'
  });
  
  await page.pdf({
    path: 'assets/pdf/Sunguk_Jang_CV.pdf',
    format: 'A4',
    margin: {
      top: '0.5in',
      bottom: '0.5in',
      left: '0.5in',
      right: '0.5in'
    }
  });
  
  await browser.close();
  console.log('PDF generated successfully!');
})(); 