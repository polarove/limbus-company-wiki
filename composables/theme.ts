export enum THEMES {
  SYSTEM = 'system',
  LIGHT = 'light',
  DARK = 'dark'
}

export const isThemeLight = () => {
  return useColorMode().preference === THEMES.LIGHT
}

export const isThemeDark = () => {
  return useColorMode().preference === THEMES.DARK
}

export const toggleTheme = () => {
  const colorMode = useColorMode()
  if (colorMode.preference === THEMES.LIGHT) colorMode.preference = THEMES.DARK
  else if (colorMode.preference === THEMES.DARK)
    colorMode.preference = THEMES.LIGHT
  else colorMode.preference = THEMES.SYSTEM
}
