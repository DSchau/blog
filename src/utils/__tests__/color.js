import * as color from '../color'

describe('getColorFromString', () => {
  const { getColorFromString } = color
  it('returns an HSL string from a string', () => {
    expect(getColorFromString('hello world')).toMatch(/hsl\(.+\)/)
  })

  it('can modify lightness', () => {
    expect(getColorFromString('hello world', 100)).toMatch('100%')
  })

  it('can modify saturation', () => {
    expect(getColorFromString('hello world', 0, 100)).toMatch('100%')
  })

  it('matches snapshot', () => {
    const strings = [
      `hello world`,
      `about`,
      `front end frameworks`,
      `getting started`,
      `hola`
    ].map(string => [string, getColorFromString(string)])

    expect(strings).toMatchSnapshot()
  })
})
