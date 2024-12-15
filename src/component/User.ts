
export type UserType = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: string,
    phone: string,
}
export type Action = {
    type: 'ADD' | 'REMOVE'|'UPDATE'|'GET',
    data:UserType
}

export const userReducer = (state:UserType, action:Action) =>{
    
    switch (action.type) {
        case 'ADD':
            localStorage.setItem('user', JSON.stringify(action.data));
           return {...action.data};
        case 'REMOVE':
            localStorage.removeItem('user');
            return null;
        case 'UPDATE':
        //    const updateUser={...state,...action.data};
           localStorage.setItem('user', JSON.stringify(action.data)); 
           return action.data; 
        case 'GET':
            const userFromLocal=localStorage.getItem('user');
            return userFromLocal? JSON.parse(userFromLocal) : state;  
        default:
            return state
    }
}