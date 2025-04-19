import { getID } from "../../src/plugins"

describe('Tests in get-id.plugin', () => {

  test('it should return an id with 36 characters', () => {
    const uuid = getID()
    expect( uuid ).toEqual( expect.any( String ) )
    expect( uuid.length ).toBe(36)
  })

})