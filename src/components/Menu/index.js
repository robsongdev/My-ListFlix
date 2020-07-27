import React from 'react';
import Robflix from '../../assets/img/Robflix.png'
import './Menu.css'
import Button from '../Button/index'


function Menu(){
    return(
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Robflix} alt = 'Robflix logo'/>
            </a>

            
            <Button className='ButtonLink' href='/'>
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;