import { characters } from "../../src/js-foundation/02-destructuring"

describe('Tests in 02-destructuring', () => {

  test('characters should contain Flash and Superman', () => {
    expect( characters ).toContain('Flash')
    expect( characters ).toContain('Superman')
  })

  test('it should contain Batman at third position', () => {
    const [ , , batman ] = characters
    expect( batman ).toBe('Batman')
  })

})