import React from "react";
import { Component } from "react";

const styles = {
    navbar : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        position : 'relative',
        height : '100px',
        justifyContent : 'space-between',
        padding : '0 20px',
        boxShadow  : '0 2px 3px rgb(0,0,0,.2)'
    }
}

class Navbar extends Component {
    render(){
        return (
            <nav style={styles.navbar}>
                <p>Intented Logo</p>
                <p>Carro de Compra</p>
            </nav>
        )
    }
}


export default Navbar;