import { combineReducers } from 'redux';


const rootReducers = combineReducers({
    todo: () =>({
        descripton: 'Ler Livro',
        list:[
            {_id:1,description: 'Pagar fatura cartão',done: true},
            {_id:2,description: 'Reunião com equipe as 10:00',done: false},
            {_id:3,description: 'Consulta médica na hora do almoço',done: false},
        ]
    })
})

export default rootReducers;