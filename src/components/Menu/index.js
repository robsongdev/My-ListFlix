import React from 'react';
import {} from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button/index';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'; //SPA


function Menu(){
    return(
        <nav className='Menu'>
            <Link to ='/'>
                <img className='Logo' src={Logo} alt = 'My Listflix logo'/>
            </Link>

            
            <Button as= {Link} className='ButtonLink' to='/cadastro/video'>
                Novo Filme
            </Button>
        </nav>
    );
}

export default Menu;