import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
export const Header = () => {
    return (
        <div className='header'>
            <div className="header__body">
                <Link to='/' className="header__logo">
                    <i className="pe pe-7s-shield"></i>
                    <div className="header__logo-text">
                            Трейдеры
                        <span>Инвестиционный фонд Solution</span>
                    </div>
                </Link>
                <div className="header__info">
                    <span>Панель Управления</span>
                    <span>Solution</span>
                    <small>v.0.2</small>
                </div>
            </div>
            <hr />
        </div>
    )
}
