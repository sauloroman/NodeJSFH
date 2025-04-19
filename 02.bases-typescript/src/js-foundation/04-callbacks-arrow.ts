interface User {
  id: number,
  name: string
}

const users: User[] = [
  {
    id: 1,
    name: 'John Doe'
  }, 
  {
    id: 2,
    name: 'Jane Doe'
  }
]

export const getUserById = ( id: number, callback: ( error?: string, user?: User ) => void ) => {

  const user = users.find( user => user.id === id )

  if ( !user ) return callback(`User not found with id: ${id}`)

  callback(undefined, user)
}

const id = 1
getUserById( id, ( err, user ) => {

  if ( err ) throw new Error( err )
    
  getUserById( id + 1, (err, user2) => {
    if ( err ) throw new Error( err )
    
    console.table({ user, user2 })
  })

})