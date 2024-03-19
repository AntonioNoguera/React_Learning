import React from "react";
import { Component } from "react";

const styles = {
    titleStyles : {
        color : '#0A283E',
        textAlign : 'center',
        fontSize : '24px'
    }
}

class Title extends Component {

    render(){
        return(
            <p style={styles.titleStyles}>{this.props.children}</p>
        )
    }
}

export default Title;