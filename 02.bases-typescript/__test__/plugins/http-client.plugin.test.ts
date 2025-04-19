import { httpClient } from "../../src/plugins"

describe('Tests in http-client.plugin', () => {

  test('httpClient.get() should return a result of an endpoint', async () => {

    const data = await httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
    expect( data ).toEqual({
      "userId": 1,
      "id": 1,
      "title": expect.any( String ),
      "completed": expect.any( Boolean )
    })

  })

  test('httpClientPlugin should have POST, DELETE, PUT methods', () => {

    expect( httpClient.get ).toEqual( expect.any(Function) )
    expect( httpClient.post ).toEqual( expect.any(Function) )
    expect( httpClient.delete ).toEqual( expect.any(Function) )
    expect( httpClient.put ).toEqual( expect.any(Function) )

  })

})