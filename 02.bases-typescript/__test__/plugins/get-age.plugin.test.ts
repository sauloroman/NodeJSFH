import { getAge } from "../../src/plugins"

describe('Tests in get-age.plugin', () => {

  test('getAge should return the age of the person', () => {
    const age = getAge('1998-12-08')
    expect( typeof age ).toBe('number')
    expect( age ).toEqual( expect.any(Number) )
  })

  test('getAge should return current age', () => {
    const birthdate = '1998-12-08'
    const age = getAge( birthdate )
    const calculatedAge = new Date().getFullYear() - new Date( birthdate ).getFullYear()
    expect( age ).toBe( calculatedAge )
  })

  test('getAge should return zero years', () => {
    const spy = jest.spyOn( Date.prototype, 'getFullYear' ).mockReturnValue(1995)
    const birthdate = '1995-10-21'
    const age = getAge( birthdate )
    expect( age ).toBe(0)
    expect( spy ).toHaveBeenCalled()
  })

})