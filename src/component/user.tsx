export type User = {
    name: string,
    password: string,
   
}

type Action = {
    type: 'CREATE' | 'DELETE' | 'UPDATE' | 'GET',
    data: Partial<User> | number
}

export const userReducer = (
    state: User, action: Action
): User => {
    switch (action.type) {
        case 'ADD':
            const { name, password } = action.data as Partial<User>
            return new User(name, password)
        case 'REMOVE':
            return [...(state.filter((p) => p.id !== action.data))]
        default:
            return state
    }
}