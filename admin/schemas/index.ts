import page from './page'
import home from './home'

import linkObject from './Objects/LinkObject'
import objectSections from './Objects/objectSections'
import objectHero from './Objects/Sections/objectHero'
import objectText from './Objects/Sections/objectText'

import navigation from './Navigation'
import settingsMenus from './Settings/SettingsMenus'
import settingsSocial from './Settings/SettingsSocial'

const pages = [page, home]

const settings = [navigation, settingsMenus, settingsSocial]

const objects = [objectSections, linkObject, objectHero, objectText]

export const schemaTypes = [...pages, ...settings, ...objects]

export default schemaTypes
