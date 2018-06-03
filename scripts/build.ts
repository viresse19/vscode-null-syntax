import { writeFileSync } from 'fs';
import { join } from 'path';
import theme from '../src/nullSyntax';

const file = JSON.stringify(theme);
const themeDir = join(__dirname, '../themes');
const filePath = join(themeDir, `null-syntax.json`);

writeFileSync(filePath, file);

console.info(`BUILT Theme`);
