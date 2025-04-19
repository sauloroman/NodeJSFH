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

const getUserById = ( id, callback ) => {

  const user = users.find( user => user.id === id )

  if ( !user ) return callback(`User not found with id: ${id}`)

  callback(null, user)
}

const id = 1
getUserById( id, ( err, user ) => {

  if ( err ) throw new Error( err )
    
  getUserById( id + 1, (err, user2) => {
    if ( err ) throw new Error( err )
    
    console.table({ user, user2 })
  })

})

module.exports = {
  getUserById
}