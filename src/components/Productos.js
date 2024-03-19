import { Component } from "react";
import Producto from './Producto'

const styles  = {
    producto_style:{
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
    }
}

class Productos extends Component{

    render(){
        const { productos, agregarAlCarro} = this.props

        return(
            <div style ={styles.producto_style}>
                {productos.map(product=>
                    <Producto
                    agregarAlCarro={agregarAlCarro}
                    key = {product.name}
                    producto = {product}
                    />
                )}
            </div>
        )
    }
}

export default Productos