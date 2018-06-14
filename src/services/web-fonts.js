/*
 * https://css-tricks.com/loading-web-fonts-with-the-web-font-loader/
 */
export default async function loadWebFonts() {
  const families = ['Montserrat:400,700', 'Bitter:400,700']
  if (sessionStorage.fonts === families.join(' ')) {
    document.documentElement.classList.add('wf-active')
  }

  const WebFonts = await import(/* webpackChunkName: "webfontloader" */ 'webfontloader')

  WebFonts.load({
    active() {
      sessionStorage.fonts = families.join(' ')
    },
    google: {
      families
    },
    timeout: 2000
  })
}
