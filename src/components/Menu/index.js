import React from 'react';
import './Menu.css'
import Skyflix from '../../assets/img/SKYFLIX.png';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Skyflix} alt='Logo Skyflix'/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video!
            </Button>            
        </nav>
    );
}

export default Menu;