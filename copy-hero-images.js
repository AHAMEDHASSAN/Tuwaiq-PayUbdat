const fs = require('fs');
const path = require('path');

const sourcePhone = 'C:\\Users\\Win 10 Pro\\.gemini\\antigravity\\brain\\2302b6f6-7487-49e2-9af3-54ed528d3737\\heroarpic_phone_clean_1770298248223.png';
const sourceNotif = 'C:\\Users\\Win 10 Pro\\.gemini\\antigravity\\brain\\2302b6f6-7487-49e2-9af3-54ed528d3737\\notification_card_isolated_1770298304757.png';

const destPhone = path.join(__dirname, 'public', 'HeroArpic_Phone.png');
const destNotif = path.join(__dirname, 'public', 'HeroArpic_Notif.png');

try {
    if (fs.existsSync(sourcePhone)) {
        fs.copyFileSync(sourcePhone, destPhone);
        console.log('✓ Copied HeroArpic_Phone.png');
    } else {
        console.error('✗ Source phone image not found');
    }
    
    if (fs.existsSync(sourceNotif)) {
        fs.copyFileSync(sourceNotif, destNotif);
        console.log('✓ Copied HeroArpic_Notif.png');
    } else {
        console.error('✗ Source notification image not found');
    }
    
    console.log('\n✅ Files copied successfully!');
} catch (error) {
    console.error('❌ Error copying files:', error.message);
}
