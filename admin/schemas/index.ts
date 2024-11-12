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
import objectContact from './Objects/Sections/objectContact'
import carouselObject from './Objects/Sections/objectCarouselObject'
import categoryObject from './Objects/categoryObject'
import objectWeather from './Objects/Sections/objectWeather'

import navigation from './Navigation'
import settingsMenus from './Settings/SettingsMenus'
import settingsSocial from './Settings/SettingsSocial'
import settingsNotFound from './Settings/SettingsNotFound'
import SettingsMaintenance from './Settings/SettingsMaintenance'
import flexibleLink from './Objects/flexibleLink'
import objectCTA from './Objects/Sections/objectCTA'
import InternalObject from './Objects/InternalObject'
import textColumnObject from './Objects/textColumnObject'

const pages = [page, home]

const settings = [navigation, settingsMenus, settingsSocial, settingsNotFound, SettingsMaintenance]

const objects = [
  flexibleLink,
  featuredObject,
  objectSections,
  linkObject,
  carouselObject,
  InternalObject,
  categoryObject,
  textColumnObject,
]

const sections = [
  objectHero,
  objectText,
  objectTextColumns,
  objectTags,
  objectFeaturedCarousel,
  objectFeatured,
  objectContact,
  objectCTA,
  objectWeather,
]

export const schemaTypes = [...pages, ...settings, ...sections, ...objects]

export default schemaTypes
