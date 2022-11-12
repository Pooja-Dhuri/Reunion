import React from 'react'
import { useState } from 'react'
import styles from "./Property.module.css";
const Property = ({e}) => {
  return (    
            <div key={e.id}className={styles.single_property_div}>
                <div className={styles.property_image_div}><img src={e.image} className={styles.property_image}/></div>
                <div className={styles.min_max_div}><p>₹{e.price}/month</p></div>
                <div className={styles.min_max_div}><p>{e.type}</p></div>
                <div className={styles.min_max_div}><p>{e.address}</p></div>
                <div className={styles.min_max_div}><p>{e.move_in_date}</p></div>
            </div>
  )
}

export default Property