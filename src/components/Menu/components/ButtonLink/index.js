import React from 'react';

function Buttonlink(props) {
    //props => {className: "o que aalguem passar", href: "/"}
    console.log(props)
    return(
        <a className = {props.className} href= {props.href}>
            Novo Vídeo
        </a>
    );
}

export default Buttonlink