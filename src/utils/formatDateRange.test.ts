import { formatDateRange } from './formatDateRange'

describe('formatDateRange', () => {
  it('formats date ranges', () => {
    expect(formatDateRange('29-12-2020-11-01-2020')).toEqual('Dec 29 - Jan 11')
  })
  it('formats date ranges', () => {
    expect(formatDateRange('12-01-2020-25-01-2020')).toEqual('Jan 12 - Jan 25')
  })
  it('formats date ranges', () => {
    expect(formatDateRange('08-03-2020-21-03-2020')).toEqual('Mar 8 - Mar 21')
  })
})
