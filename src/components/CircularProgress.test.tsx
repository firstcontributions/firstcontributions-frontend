import { polarToCartesian, getArcAttributes } from './CircularProgress'

describe('CircularProgress', () => {
  describe('convert polar to cartesian co-ordinates', () => {
    it('converts angle in degrees to radians', () => {
      expect(polarToCartesian(50, 50, 30, 120)).toEqual({
        x: 75.98076211353316,
        y: 65,
      })
    })

    it('converts angle in degrees to radians', () => {
      expect(polarToCartesian(50, 50, 30, 30)).toEqual({
        x: 65,
        y: 24.019237886466843,
      })
    })
  })

  describe('getArcAttributes', () => {
    it('provides svg path attributes', () => {
      expect(getArcAttributes(50, 50, 30, 0, 50)).toEqual(
        'M 72.98133329356934 30.716371709403823 A 30 30 0 0 0 50 20'
      )
    })

    it('provides svg path attributes', () => {
      expect(getArcAttributes(50, 50, 30, 0, 75)).toEqual(
        'M 78.97777478867205 42.235428646924376 A 30 30 0 0 0 50 20'
      )
    })
  })
})
