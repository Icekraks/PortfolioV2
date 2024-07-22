import page from './page'
import home from './home'
import linkObject from './Objects/LinkObject'
import navigation from './Navigation'
import settingsMenus from './Settings/SettingsMenus'
import settingsSocial from './Settings/SettingsSocial'

const pages = [page, home]

const settings = [navigation, settingsMenus, settingsSocial]

const objects = [linkObject]

export const schemaTypes = [...pages, ...settings, ...objects]
