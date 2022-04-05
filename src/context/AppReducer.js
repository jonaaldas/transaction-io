export default function appReducer(state, action){
    const options = {
        'ADD_CLIENT': 'ADD_CLIENT',
        'DELETE_TASK': 'DELETE_TASK',
        'UPDATE_TASK': 'UPDATE_TASK' ,
        'CHANGE_CHECKED': 'CHANGE_CHECKED',
        'GET_PRICE': 'GET_PRICE' 
    }
    switch (action.type){
        case options.ADD_CLIENT:
            
            
            return [...state, action.payload]
        case options.DELETE_TASK:
            
            
            
            return  state.filter(client => client.id !== action.payload)
        case options.UPDATE_TASK:
            const updatedTask = action.payload;
            const clientUpdated = state.map((client) => {
                if(client.id === updatedTask.id){
                    client.transaction = updatedTask.transaction
                    client.name = updatedTask.name
                    client.phoneNumber = updatedTask.phoneNumber
                    client.email = updatedTask.email
                    client.address = updatedTask.address
                    client.price = updatedTask.price  
                }
                return client 
            })
            

            return state
        case options.CHANGE_CHECKED:
            const returning = action.payload
            
            const newUpdatedClient = state.map(client => {   
                if (client.id === returning[0] && client.transaction === 'Seller'){                 
                        client.Seller.map((question) => {
                            if(question.id === returning[1]){
                                question.checked = !question.checked 
                                return question
                            }
                        })
                } else if(client.id === returning[0] && client.transaction === 'Buyer'){
                    client.Buyer.map((question) => {
                        if(question.id === returning[1]){
                            question.checked = !question.checked 
                            return question
                        }
                    })
                }
                return client
            })
            return newUpdatedClient
            default:
                return state
    }
}