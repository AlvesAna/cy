import React, {Component} from 'react';

class Tarefas extends Component{

    constructor(){

        super();
        this.state = {
                
                tarefa : [titulo = '', descricao = '', data='']
        }
    }

    enviaForm(titulo, descricao, data){

        const bt = documen.getElementById("button-grava");

        if(bt != null){

            tarefa.pull(this.titulo = titulo, this.descricao = descricao, this.data = data)

        }

    }

    mostraTabela(){

        return(

            <div>            
                <table className="pure-table">
                  <thead>
                    <tr>
                      <th>Titulo</th>
                      <th>Descricao</th>
                      <th>Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.tarefa.titulo}</td>                
                      <td>{this.tarefa.descricao}</td>
                      <td>{this.tarefa.data}</td>                
                    </tr>
                  </tbody>
                </table> 
            </div>        

        )

    }

    render(){
        
        const data = '';
        const titulo ='';
        const desc = '';
        return(

            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned">
                  <div className="pure-control-group">
                    <label htmlFor="titulo">Titulo</label> 
                    <input id="titulo" type="text" name="titulo" value={titulo}/>                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="desc">Descricao</label> 
                    <input id="desc" type="text" name="desc" value={desc}  />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="data">Data</label> 
                    <input id="data" type="date" name="data"  value={data}/>                                      
                  </div>
                  <div className="pure-control-group">                                  
                    <label></label> 
                    <button id="button-grava" type="submit" className="pure-button pure-button-primary" onClick={(e) => this.enviaForm(titulo,desc,data)}> Salvar Tarefa </button>                                    
                  </div>
                </form>             

              {this.mostraTabela()}
              </div>  


        )
    }

    
}