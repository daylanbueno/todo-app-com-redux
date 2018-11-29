import React from 'react';
import { Grid } from '../main/template/Grid';
import Botao from '../main/template/Botao';

import { connect } from 'react-redux'; // para fazer ligação    
import { bindActionCreators } from 'redux';
import { changeDescription, search, add } from './TodoActions'


 class TodoForm  extends  React.Component {

     componentDidMount() {
        console.log('inciando')
       this.props.search();  
     }

     keyHandler (e) {
        const {search, add ,description } =  this.props
        if (e.key === 'Enter') {
            this.search();
        } 
    }
    
     render() {
        const {search, add, description } = this.props
        console.log(this.props.description)
        return(
            <div role='form' className='todoForm'> 
            <Grid cols='12 9 10'>
                    <input id='description' 
                           className='form-control'
                           placeholder='Adicione uma tarefa'
                           value={this.props.description}
                           onChange={this.props.changeDescription}
                           onKeyUp={this.keyHandler}>
                    </input>
            </Grid>
            <Grid cols='12 3 2'> 
                <Botao style='primary' onClick={()=>add(description)}  icon='plus'/>
                <Botao style='info'    onClick={() =>search()}    icon='search'/>
                <Botao style='default' onClick={this.props.limpar}      icon='close'/>
            </Grid>      
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps  = dispatch => bindActionCreators({ changeDescription,search,add }, dispatch);
export default  connect(mapStateToProps, mapDispatchToProps)(TodoForm);