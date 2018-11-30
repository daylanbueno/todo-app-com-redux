import React from 'react';
import { Grid } from '../main/template/Grid';
import Botao from '../main/template/Botao';

import { connect } from 'react-redux'; // para fazer ligação    
import { bindActionCreators } from 'redux';
import { changeDescription, search, add, clear} from './TodoActions'


 class TodoForm  extends  React.Component {

     componentDidMount() {
        console.log('inciando')
       this.props.search();  
     }

     render() {
        const {search, add,clear, description } = this.props
        console.log(this.props.description)
        return(
            <div role='form' className='todoForm'> 
            <Grid cols='12 9 10'>
                    <input id='description' 
                           className='form-control'
                           placeholder='Adicione uma tarefa'
                           value={this.props.description}
                           onChange={this.props.changeDescription}>
                    </input>
            </Grid>
            <Grid cols='12 3 2'> 
                <Botao di style='primary' disabled={this.props.description === ''} onClick={()=>add(description)}  icon='plus'/>
                <Botao style='info'    onClick={() =>search()}    icon='search'/>
                <Botao style='default'disabled={this.props.description === ''} onClick={()=>clear()}      icon='close'/>
            </Grid>      
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps  = dispatch => bindActionCreators({ changeDescription,search,add,clear }, dispatch);
export default  connect(mapStateToProps, mapDispatchToProps)(TodoForm);