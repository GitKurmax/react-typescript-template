interface Person {
    name: string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
    homeworld: string
    films: string[]
    species: any[]
    vehicles: string[]
    starships?: string[]
    created: Date
    edited?: Date
    url?: string
}

interface IState {
    count1: Boolean | null
    count2: Boolean | null
    inputRedux: string
}
