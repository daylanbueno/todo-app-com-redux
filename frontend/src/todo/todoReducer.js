const INICIAL_STATE = {
    description: 'Ler Livro',
    list:[
        {_id:1,description: 'Pagar fatura cartão',done: true},
        {_id:2,description: 'Reunião com equipe as 10:00',done: false},
        {_id:3,description: 'Consulta médica na hora do almoço',done: false},
    ]
}

export default (state = INICIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state;
    }
}