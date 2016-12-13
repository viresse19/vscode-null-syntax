import fs from 'fs'
import path from 'path'
import plist from 'plist'

const themeDir = path.join(__dirname, '../themes')
const themes   = ['null-syntax']

for (const theme of themes) {
  const config = require(`./themes/${theme}`).default

  fs.writeFileSync(
    path.join(themeDir, `${theme}.tmTheme`),
    plist.build(config)
  )

  console.info(`[BUILT] ${theme}`)
}

process.exit()
