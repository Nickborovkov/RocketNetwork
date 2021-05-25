import React from 'react';
import styles from './header.module.css'
import logo from './../../assets/images/rocket.png'
import { NavLink } from 'react-router-dom';
import defaultAvatar from './../../assets/images/defaultAvatar.jpg'
import PreloaderSmall from '../common/preloaderSmall/preloaderSmall';

let Header = (props) => {
        return (
        <div className={styles.header}>
            <img className={styles.header__logo} src={logo} alt="logo"/>
            <p className={styles.header__name}>Rocket Network</p>
            {!props.currentUser ? <PreloaderSmall /> : <div className={styles.loginBlock}>
                <div className={styles.header__photoWrapper}>
                    <img className={styles.header__avatar} src={!props.currentUser.photos.small ? defaultAvatar : props.currentUser.photos.small} alt="avatar" />
                </div>                
                <NavLink className={styles.loginLink} to={'/login'}>{props.isAuth ? props.login : `Sign in`}</NavLink>
            </div>}
            
        </div>
    )   
}

export default Header