import page from './page'
import home from './home'

import linkObject from './Objects/LinkObject'
import objectSections from './Objects/objectSections'
import objectHero from './Objects/Sections/objectHero'
import objectText from './Objects/Sections/objectText'
import objectTextColumns from './Objects/Sections/objectTextColumns'
import objectTags from './Objects/Sections/objectTags'
import objectFeatured from './Objects/Sections/objectFeatured'
import featuredObject from './Objects/Sections/objectFeaturedObject'
import objectFeaturedCarousel from './Objects/Sections/objectFeaturedCarousel'

import navigation from './Navigation'
import settingsMenus from './Settings/SettingsMenus'
import settingsSocial from './Settings/SettingsSocial'

const pages = [page, home]

const settings = [navigation, settingsMenus, settingsSocial]

const objects = [
  objectFeatured,
  featuredObject,
  objectFeaturedCarousel,
  objectSections,
  linkObject,
  objectHero,
  objectText,
  objectTextColumns,
  objectTags,
]

export const schemaTypes = [...pages, ...settings, ...objects]

export default schemaTypes
