const fs = require('fs')
const path = './src/devextreme-license.js';

if (!fs.existsSync(path)) {
    fs.writeFileSync(path, `export const licenseKey = '<LICENSE_KEY>';`);
}
