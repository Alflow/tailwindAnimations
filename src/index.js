import createPlugin from 'tailwindcss/plugin.js'
import theme from './theme.js'

/** @type {import ('tailwindcss/types/config').PluginCreator}} */
const pluginCreator = api => {
    console.log("Plugin creator")
}

/** @type {import ('tailwindcss/types/config').Config}  */
const pluginConfig = {theme}


export default createPlugin(pluginCreator, pluginConfig)