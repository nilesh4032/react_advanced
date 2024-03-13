export const reducer=(state,action)=>{
  const newItems=[...state.people,action.payload];
  if(action.type === 'ADD_ITEM'){
    return{...state, people:newItems,showModal:true,modalContent:'item added'}
  } if(action.type === 'NO_VALUE'){
      return{...state, showModal:true, modalContent:'no value'};
  }
  if(action.type === 'CLOSE_MODAL'){
    return{...state, showModal:false}
  } 
  if(action.type === 'REMOVE_ITEM'){
    const newList=state.people.filter((person)=>person.id !==action.payload);
      return{...state,people:newList,showModal:true,modalContent:'item removed'}
  }
  throw new Error('no matching action')
}