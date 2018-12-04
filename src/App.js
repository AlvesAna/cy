import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';

class App extends Component {
  render() {
    return (
<div id="layout">
    
    <a href="#menu" id="menuLink" className="menu-link">
        
        <span></span>
    </a>

    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Cy</a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Tarefas</a></li>
                
            </ul>
        </div>
    </div>

        <div id="main">
            <div className="header">
              <h1>Cadastro de Tarefas</h1>
            </div>
            <div className="content" id="content">
              <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned">
                  <div className="pure-control-group">
                    <label htmlFor="titulo">Titulo</label> 
                    <input id="titulo" type="text" name="titulo" value=""  />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="desc">Descricao</label> 
                    <input id="desc" type="text" name="desc" value=""  />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="data">Data</label> 
                    <input id="data" type="date" name="data"  />                                      
                  </div>
                  <div className="pure-control-group">                                  
                    <label></label> 
                    <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
                  </div>
                </form>             

              </div>  
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
                      <td>Tomar remedio</td>                
                      <td>Tomar trimedal por 5 dias</td>                
                      <td>14/05/2018 a 19/05/2018</td>                
                    </tr>
                    <tr>
                      <td>Academia</td>                
                      <td>Ir para a academia</td>                
                      <td>Todos os dias as 06:00</td>                
                    </tr>
                    <tr>
                      <td>Estudo</td>                
                      <td>Estudar para a prova</td>                
                      <td>05/10/2018</td>                
                    </tr>
                  </tbody>
                </table> 
              </div>             
            </div>
          </div>            


</div>     
    );
  }
}

export default App;
