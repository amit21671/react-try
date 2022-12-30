export const is={records:[]};
export const reducer=(state,action)=>{
    let rcds;
    switch(action.type)
    {
        case "ADD" : rcds=[...state.records];
                     rcds.push(action.payload);
                     return {records:rcds};
        case "DEL" : rcds=[...state.records];
                     rcds.splice(action.payload,1);
                     return {records:rcds};
        default : return state;
    }
}
