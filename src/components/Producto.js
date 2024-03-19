import { Component } from "react";
import Button from './Button'

const styles = {
    atom_product : {
        border : 'solid 1px #EEE',
        boxShadow : '0 5px 5px rgb(0,0,0,.1)',
        width : '30%',
        padding : '10px 15px',
        borderRadius : '5px',
        margin : '20px 40px'
    },
    img : {
        width : '100%'
    }
}

class Producto extends Component {

    render() {
        console.log(this.props)
        return(
            <div style={styles.atom_product}>
                <img style={styles.img} src={this.props.producto.img}></img>
                <p>Producto: {this.props.producto.name}</p>
                <p>Precio: {this.props.producto.price} $</p> 
                <Button 
                    onClick = { ()=> this.props.agregarAlCarro(this.props) }
                >
                    Agregar al carro
                </Button>
            </div>
        )

    }
}

export default Producto;