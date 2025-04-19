import axios from 'axios'

export const httpClientPlugin = {

  get: async ( url: string ) => {
    // const resp = await fetch( url )
    // const data = await resp.json()
    // return data

    const { data } = await axios.get( url )
    return data
  },

  post: async( url: string, body: any ) => {},
  put: async( url: string, body: any ) => {},
  delete: async( url: string ) => {}

}