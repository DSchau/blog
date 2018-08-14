import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import 'typeface-montserrat'
import 'typeface-bitter'

const options = {
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  bodyFontFamily: ['Bitter', 'Georgia', 'serif'],
  headerFontFamily: ['Montserrat', 'Helvetica', 'sans-serif'],
  scaleRatio: 2.25,
  plugins: [new CodePlugin()],
  overrideStyles: () => ({
    [MOBILE_MEDIA_QUERY]: {
      // Make baseFontSize on mobile 16px.
      html: {
        fontSize: `${16 / 16 * 100}%`
      }
    }
  })
}

const typography = new Typography(options)
const { rhythm } = typography;

export { rhythm }
export default typography
