/*
{
    type: "Can be anything. I.e. Action 'Update this'"
    payload: "Contains the value/variable that the state should be updated too. Can be anything"
}
*/
//DEFAULT VALUE WHEN THE COMPONENT RUNS THE FIRST TIME
const INITIAL_STATE = {
    currentUser: null
}


//prevState = the CURRENT state when the action is fired. 
//INITIAL_STATE IS THE DEFAULT PARAMETER.
//IF prevState is ever undefnied, then use INITAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state, //EVERYTHING ELSE ON THE STATE PLUS THE VALUE WE WANT TO CHANGE ON THE PAYLOAD
                currentUser: action.payload
            }

        default: return state; //IF NO ACTION MATCHES. DO NOTHING TO THE STATE
    }
}

export default userReducer;