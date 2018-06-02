import * as plist from 'plist';

import { writeFileSync } from 'fs';
import { join } from 'path';
import theme from '../src/nullSyntax';

const xml = plist.build(theme);
const themeDir = join(__dirname, '../themes');
const filePath = join(themeDir, `null-syntax.tmTheme`);

writeFileSync(filePath, xml);

console.info(`BUILT Theme`);
