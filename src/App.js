import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'


class App extends Component {
  state = {
    productos: [
      {name:"Tomate",price:1500,img: "/productos/tomate.jpg"},
      {name:"Arbejas",price:100,img: "/productos/arbejas.jpg"},
      {name:"Lechiga",price:100,img: "/productos/lechuga.jpg"}
    ]
  }



  render(){
      return (
        <div>
          <Navbar/>
          
          <Layout>
            <Title>Tienda</Title>
            <Productos
              agregarAlCarro={()=> console.log("Log Carro")}
              productos = {this.state.productos}
            />
          </Layout>
        </div>
    )
  }
}
 

export default App;
