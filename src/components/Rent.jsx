import React from "react";
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
            <div>
                <p>Location</p>
                <select value="">
                    <option value="Belgaum,India">Belgaum,India</option>
                    <option value="Banglore,India">Banglore,India</option>
                    <option value="Mumbai,India">Mumbai,India</option>
                    <option value="Goa,India">Goa,India</option>
                </select>
            </div>
            <div>
                <p>When</p>
                <select>

                </select>
            </div>
            <div>
            <p>Price</p>
                <select>
                    <option value="">₹500-₹2500</option>
                    <option value="">₹3000-₹8000</option>
                    <option value="">₹10000-₹12000</option>
                    <option value="">₹12000-₹18000</option>
                </select>
            </div>
            <div>
            <p>Property Type</p>
                <select>
                    <option value="Houses">Houses</option>
                    <option value="Apartements">Apartements</option>
                </select>
            </div>
        </div>
    </div>
  );
};

export default Rent;
