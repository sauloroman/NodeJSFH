const users = [
  {
    id: 1,
    name: 'John Doe'
  }, 
  {
    id: 2,
    name: 'Jane Doe'
  }
]

const getUserById = function( id, callback ) {
  const userFound = users.find( user => user.id === id )

  if ( !userFound ) return callback(`User not found with id ${id}`)

  callback( null, userFound )
}

const id = 1
getUserById( id, function( error, user ) {
  if ( error ) throw new Error(error)

  getUserById( id + 1, function( error, user2 ) {
    if ( error ) throw new Error(error)
    console.table({ user, user2 })
  }) 
})

module.exports = {
  getUserById,
}