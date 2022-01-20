import React,{useState} from 'react'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import Hamburger from './Hamburger'

export default function Header(props) {
    const [openMenu,setOpenMenu]=useState(false);
  function handleOpen() {
      setOpenMenu(!openMenu)
  }
    return (
        <div className='header'>
            <div className={styles.logo}>
                <img 
                    className={styles.logoimg}
                    src="/images/logo.png"
                    alt="logo"
                    width={201}
                    height={42}
                />
            </div>
            <div style={openMenu ? {display:"block"} : {display:'none'}} className={styles.overlay}onClick={()=>setOpenMenu(!openMenu)}></div>
            <div className={styles.menu} onClick={()=>setOpenMenu(!openMenu)}>Menu</div>
           
            <Hamburger closeMenu={handleOpen} checkOpen={openMenu} />
        </div>
    )}