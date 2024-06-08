import React from 'react';
import "./Menu.css"
import {Link} from "react-router-dom";

function Menu(props) {
    return (
        <div id='menu'>
            <div className='menu-item'>
                <Link className='link' to='/'>Главная</Link>
            </div>
            <div className='menu-item'>
                <Link className='link' to='/tasks'>Задачи</Link>
            </div>
            <div className='menu-item'>
                <Link className='link' to='/'>Пользователи</Link>
            </div>
            <div className='menu-item'>
                <Link className='link' to='/'>Настройки приложения</Link>
            </div>
            <div className='menu-item'>
                <Link className='link' to='/'>Настройки уведомлений</Link>
            </div>
            {/*<div className='menu-item'>*/}
            {/*    <Link className='link' to='/'></Link>*/}
            {/*</div>*/}
            {/*<div className='menu-item'>*/}
            {/*    <Link className='link' to='/'></Link>*/}
            {/*</div>*/}
        </div>
    );
}

export default Menu;