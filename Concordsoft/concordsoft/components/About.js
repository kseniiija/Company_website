import React from 'react'
import styles from '../styles/About.module.scss'

export default function About() {
    return (
        <div className={styles.about}>
            <div className={styles.content}>
            <span className={styles.strike}>who are we</span>
               <span className={styles.aboutUs}>About us</span>
                <span>Making creative solutions was and will be always something that makes us compliant to your needs,and what makes us happy. We do that for 5 years now. Let's talk and see what we can do for you </span>
               <div className={styles.button}>
              <button className={styles.btn}>
                  Learn more
              </button>
           </div>
                </div>

            <div className={styles.image}>
                <img
                src="images/about_us.png"
                alt="about us"
                width={600}
                height={600}
           /></div>
          
        
            
            
        </div>
    )
}

