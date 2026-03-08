const fs = require('fs');
const path = require('path');

fs.readdirSync(__dirname).filter(f => f.endsWith('.html')).forEach(f => {
    const file = path.join(__dirname, f);
    let c = fs.readFileSync(file, 'utf8');
    // only add if not already present
    if (!c.includes('id="menu-toggle"')) {
        c = c.replace(/<div class="container">/, '<div class="container">\n            <div id="menu-toggle" class="menu-toggle">&#9776;</div>');
        fs.writeFileSync(file, c);
        console.log('Updated', f);
    }
});
