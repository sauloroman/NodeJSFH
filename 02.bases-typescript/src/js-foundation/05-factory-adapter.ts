interface BuildMakePersonOptions {
  getID: () => string,
  getAge: ( birthdate: string ) => number
}

interface PersonOptions {
  name: string,
  birthdate: string
}

export const buildMakePerson = ({ getID, getAge }: BuildMakePersonOptions) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getID(),
      name,
      birthdate,
      age: getAge( birthdate ),
    }
  }
}

