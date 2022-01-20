import React from 'react'
import styles from '../styles/Hamburger.module.scss'


export default function Hamburger(props) {
    return (
        

        <div className={styles.hamburger} className={props.checkOpen ? 'hamburger open-hamburger' : 'hamburger'}>
<div onClick={props.closeMenu} className='close-menu'>X</div>
<ul className='navigation'>
    <li className={styles.navItem}>Home</li>
    <li className={styles.navItem}>About us</li>
    <li className={styles.navItem}>Web development</li>
    <li className={styles.navItem}>App development</li>
    <li className={styles.navItem}>Design</li>
    <li className={styles.navItem}>Marketing</li>
    <li className={styles.navItem}>Web development</li>
    <li className={styles.navItem}>Bussines2bussines</li>
    <li className={styles.navItem}>Web Shop</li>
    <li className={styles.navItem}>Logistic</li>
    <li className={styles.navItem}>Contact us</li>
</ul>     
        </div>
        
    )
}
