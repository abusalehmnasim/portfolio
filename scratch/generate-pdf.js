const { chromium } = require('playwright');
const path = require('path');

(async () => {
  let browser;
  try {
    console.log('Launching browser...');
    browser = await chromium.launch();
    const page = await browser.newPage();
    
    console.log('Navigating to http://localhost:3000/cv ...');
    await page.goto('http://localhost:3000/cv', { waitUntil: 'networkidle' });
    
    // Allow any dynamic animations/icons to load
    await page.waitForTimeout(2000);
    
    const pdfPath = path.resolve(__dirname, '../public/cv.pdf');
    console.log(`Generating PDF at ${pdfPath} ...`);
    
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.4in',
        right: '0.4in',
        bottom: '0.4in',
        left: '0.4in'
      }
    });
    
    console.log('PDF generated successfully!');
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();
