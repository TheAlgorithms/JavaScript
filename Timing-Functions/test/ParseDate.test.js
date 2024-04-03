import { parseDate } from '../ParseDate'

describe('parseDate', () => {
  it.each([
    ['18/03/2024', { year: 2024, month: 3, day: 18 }],
    ['29/02/2024', { year: 2024, month: 2, day: 29 }],
    ['28/02/2023', { year: 2023, month: 2, day: 28 }],
    ['01/12/2024', { year: 2024, month: 12, day: 1 }],
    ['1/12/2024', { year: 2024, month: 12, day: 1 }],
    ['10/1/2024', { year: 2024, month: 1, day: 10 }]
  ])('Returns correct output for %s', (dateString, expected) => {
    expect(parseDate(dateString)).toStrictEqual(expected)
  })

  it.each([
    '18-03-2024',
    '18.03.2024',
    '03/2024',
    '01/02/03/2024',
    '123/03/2024'
  ])('Throws for %s', (wrongDateString) => {
    expect(() => {
      parseDate(wrongDateString)
    }).toThrow()
  })

  it.each([
    '40/03/2024',
    '30/02/2024',
    '29/02/2023',
    '31/04/2023',
    '00/01/2024',
    '01/00/2024',
    '01/13/2024'
  ])('Throws for %s', (wrongDateString) => {
    expect(() => {
      parseDate(wrongDateString)
    }).toThrow()
  })
})
