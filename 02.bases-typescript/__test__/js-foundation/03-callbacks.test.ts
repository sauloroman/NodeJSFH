import { getUserById } from "../../src/js-foundation/03-callbacks"

describe('Tests in 03-callbacks', () => {

  test('getUserById should return an error if user does not exist', ( done ) => {

    const id = 10

    getUserById( id, (err, user) => {
      expect( user ).toBeUndefined()
      expect( err ).toBe(`User not found with id ${id}`)
      done()
    })

  })

  test('getUserById should return an user if exists', ( done ) => {

    const id = 1
    // const username = 'John Doe'
    
    getUserById( id, ( err, user ) => {
      expect( err ).toBeUndefined()
      // expect( user?.id ).toBe(id)
      // expect( user?.name ).toBe(username)

      expect( user ).toEqual( {
        id: 1,
        name: expect.any( String )
      })

      done()
    })

  })

})