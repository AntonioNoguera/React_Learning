import React from "react";
import { Component } from "react";

const styles = {
    addCartStyle : {
        width : '100%',
        border : 'solid 1px #000',
        borderRadius: '20px',
        backgroundColor : '#FFF',
        cursor : 'pointer'
    }
}


class Button extends Component{
    render(){
        return(
        <button {...this.props} style={styles.addCartStyle}/>    
        )
    }
}

export default Button;