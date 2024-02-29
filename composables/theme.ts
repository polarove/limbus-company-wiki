enum THEMES {
  SYSTEM = 'system',
  LIGHT = 'light',
  DARK = 'dark'
}

const colorMode = useColorMode()

const isThemeLight = () => {
  return useColorMode().preference === THEMES.LIGHT
}

const isThemeDark = () => {
  return useColorMode().preference === THEMES.DARK
}

const toggleTheme = (theme: THEMES) => {
  colorMode.preference === theme
}
