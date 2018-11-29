import React, { Component } from 'react';
import axios from 'axios';
import PageHeader  from '../../src/main/template/pageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:3000api/todos';

export default class Todo extends React.Component  {
    
    constructor(props) {
        super(props);
        this.state = { description: '', list:[] }
        this.atualiza();

    }

    atualiza(description = '') {
        const pesquisa = description ? `&description__regex=/${description}/` : '';
        axios.get(`${URL}?sort=-createAt${pesquisa}`)
        .then(resp => {
           this.setState({...this.state, description: description, list: resp.data})
        });
    }

    render() {
        return (
            <div>
                <PageHeader nome='Tarefas ' small='cadastro'> </PageHeader>
                <TodoForm />
                <TodoList />
             </div>
        );
    }
}