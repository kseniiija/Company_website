import { userSetter } from 'core-js/fn/symbol'
import React from 'react'
import styles from '../styles/CompanyInformation.module.css'

export default function CompanyInformation() {
    return (
        <div className={styles.container}>


        <div className={styles.information}> 
        <h3 className={styles.h3}>Get in touch</h3>
        <a className={styles.email} href="Info@concordsoft.com">Info@concordsoft.com</a>
        <a className={styles.number} href="+381(0)64 292 07 90">tel: +381(0)64 292 07 90</a>  
        <address className={styles.adres}> adress: Adolfa Singera 12a</address>
        </div>


        <div className={styles.form}>
        <input className={styles.contact} placeholder="Name" type="text" />
        <input className={styles.contact} placeholder="Email" type="email" />
        <input className={styles.contact} placeholder="Subject" type="text" />
        <input className={styles.contact} placeholder="Your message" type="text" />
        </div>
        





    
    
       
        </div>
    )
}
