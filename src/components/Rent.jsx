import React from "react";
import { useState } from "react";
import Property from "./Property";
import styles from "./RentStyle.module.css";
import Propertys from "./db.json";

const Rent = () => {
  const [form, setForm] = useState({});
  let arr = Propertys.Propertys;
  const [data, setData] = useState(arr);
  // setData(data.Propertys)
  const [filter_data, setFilterData] = useState();
  console.log(data);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    // location
    let rentdata = data.filter(function (event) {
      return event.address === form.address;
    });
    //  console.log(rentdata)
    if (form.address) {
      setFilterData(rentdata);
    }

    let rentdatatype = rentdata.filter(function (event) {
      return event.type === form.type;
    });
    //  console.log(rentdatatype)
    //  setData(rentdatatype)
    if (form.type) {
      setFilterData(rentdatatype);
    }

    let rentdataprice = [];
    for (let k = 0; k < rentdatatype.length; k++) {
      if (
        form.min_price <= Number(rentdatatype[k].price) &&
        form.max_price >= Number(rentdatatype[k].price)
      ) {
        rentdataprice.push(rentdatatype[k]);
      }
    }
    //  console.log(rentdataprice)
    if (form.min_price && form.max_price) {
      setFilterData(rentdataprice);
    }

    const date = new Date(form.date);
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    //  console.log(unixTimestamp);

    let movedate = [];
    for (let k = 0; k < rentdataprice.length; k++) {
      const date1 = new Date(data[k].move_in_date);
      let unixTimestamp1 = Math.floor(date1.getTime() / 1000);
      //  console.log(unixTimestamp,unixTimestamp1);
      if (unixTimestamp1 >= unixTimestamp) {
        movedate.push(data[k]);
        console.log(movedate);
      }
    }
    if (form.date) {
      setFilterData(movedate);
    }
    setForm({});
  };

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
        <form action="">
          <div className={styles.filter_name}>
            <p>Location</p>
            <select onChange={handleChange} name="address">
              <option value="">location</option>
              <option value="Belgaum">Belgaum</option>
              <option value="Banglore">Banglore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Goa">Goa</option>
            </select>
          </div>
          <div className={styles.filter_name}>
            <p>When</p>
            <input
              type="date"
              onChange={handleChange}
              name="date"
              value={form.date || ""}
            />
          </div>
          <div className={styles.filter_name}>
            <p>Price</p>
            <div className={styles.min_max_div}>
              <span>min:</span>
              <select onChange={handleChange} name="min_price">
              <option value="">min</option>
                <option value="5000">₹5000</option>
                <option value="7000">₹7000</option>
                <option value="9000">₹9000</option>
                <option value="10000">₹10000</option>
              </select>
              <span>max:</span>
              <select onChange={handleChange} name="max_price">
              <option value="">max</option>
                <option value="11000">₹11000</option>
                <option value="15000">₹15000</option>
                <option value="20000">₹20000</option>
                <option value="24000">₹24000</option>
              </select>
            </div>
          </div>
          <div className={styles.filter_name}>
            <p>Property Type</p>
            <select onChange={handleChange} name="type">
            <option value="">property type</option>
              <option value="Houses">Houses</option>
              <option value="Apartements">Apartements</option>
              <option value="Banglow">Banglow</option>
            </select>
          </div>
          <div>
            <button className={styles.search_button} onClick={handleSearch}>
              Search
            </button>
          </div>
        </form>
      </div>
      <div className={styles.property_div}>
        {filter_data
          ? filter_data.map((e) => <Property e={e} key={e.id} />)
          : data.map((e) => <Property e={e} key={e.id} />)}
      </div>
    </div>
  );
};

export default Rent;
