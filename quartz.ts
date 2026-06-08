import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()

if (config.plugins) {
  const footerPlugin = config.plugins.find(p => p.source.includes("plugins/Footer"))
  
  if (footerPlugin) {
    footerPlugin.options = footerPlugin.options || {}
    
    footerPlugin.options.text = `
      <div class="language-switcher" style="margin-top: 1.5rem; font-weight: bold; text-align: center;">
        🌐 Язык / Language: 
        <a href="/ru/" onclick="localStorage.setItem('user-language', 'ru')" style="text-decoration: underline; margin: 0 5px;">RU</a> | 
        <a href="/en/" onclick="localStorage.setItem('user-language', 'en')" style="text-decoration: underline; margin: 0 5px;">EN</a>
      </div>
    `
  }
}

export default config
export const layout = await loadQuartzLayout()
