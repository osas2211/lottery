import React from 'react'

export const TicketNumberContext = React.createContext();
export const useTicketNumber = ()=>{
    return React.useContext(TicketNumberContext);
}

export const Actions = {
    FIX_NUM: "fix-ticket-number",
    GET_NUM: "get-ticket-number"
}

export const ticketReducer = ({ currentState, action })=>{
    switch(action){
        case Actions.GET_NUM: return currentState;
        case Actions.FIX_NUM: return action.payload
        default: return currentState
    }
}

export const TicketNumberProvider = ({ children })=>{
    const [state, dispatch] = React.useReducer(ticketReducer, [])

    return <TicketNumberContext.Provider value={[state, dispatch]}>
        { children }
    </TicketNumberContext.Provider>
}