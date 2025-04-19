import { buildMakePerson } from "../../src/js-foundation/05-factory-adapter"

describe('Tests in 05-factory-adapter', () => {

  const getID = () => '1234'
  const getAge = () => 35

  test('buildMakePerson should return a function', () => {

    const makePerson = buildMakePerson({
      getAge,
      getID
    })

    expect( typeof makePerson ).toBe('function')

  })

  test('makePerson should return a person', () => {
    
    const makePerson = buildMakePerson({
      getAge,
      getID
    })

    const roman = makePerson({ name: 'Roman Nava', birthdate: '1998-12-08'})

    expect( roman ).toEqual({
      id: getID(),
      name: 'Roman Nava',
      birthdate: '1998-12-08',
      age: getAge(),
    })

  })
    
})