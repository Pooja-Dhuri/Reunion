import React from "react";
import Property from "./Property";
import styles from "./RentStyle.module.css";

const Rent = () => {
  return (
    <div>
      {/* heading */}
      <div className={styles.heading}>
        <div className={styles.image_div}>
          <img
            src="https://www.clipartmax.com/png/middle/212-2129953_our-services-house-rental-icon-png.png"
            alt=""
            className={styles.image}
          />
        </div>
        <div>
          <h1>Rent a Property</h1>
        </div>
    </div>
        {/* filter buttons */}
        <div className={styles.filter_div}>
            <div className={styles.filter_name}>
                <p>Location</p>
                <select>
                    <option value="Belgaum,India">Belgaum,India</option>
                    <option value="Banglore,India">Banglore,India</option>
                    <option value="Mumbai,India">Mumbai,India</option>
                    <option value="Goa,India">Goa,India</option>
                </select>
            </div>
            <div className={styles.filter_name}>
                <p>When</p>
                <input type="date"/>
                
            </div>
            <div className={styles.filter_name}>
            <p>Price</p>
                <select>
                    <option value="₹5000-₹10000">₹5000-₹10000</option>
                    <option value="₹10000-₹15000">₹10000-₹15000</option>
                    <option value="₹15000-₹25000">₹15000-₹25000</option>
                </select>
            </div>
            <div className={styles.filter_name}>
            <p>Property Type</p>
                <select>
                    <option value="Houses">Houses</option>
                    <option value="Apartements">Apartements</option>
                </select>
            </div>
            <div>
              <button className={styles.search_button}>Search</button>
            </div>
        </div>
        <div className={styles.property_div}>
          <Property/>
        </div>
    </div>
  );
};

export default Rent;
