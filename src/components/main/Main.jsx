import React, { useState } from "react";
import css from './Main.module.css';

export default function Main() {
  const [activeBtn, setActiveBtn] = useState(false);
  const [carData, setCarData] = useState([]);

  const handleButtonClick = (index) => {
    setActiveBtn(index);
    fetchData(index);
  };

  const fetchData = (brandIndex) => {
    const brands = ['Chery', 'Haval', 'Geely', 'Exeed', 'Audi', 'Kia', 'Hyundai'];
    const brand = brands[brandIndex];
    fetch(`https://maximum.expert/api/stock-test?brand=${brand}`)
      .then((response) => response.json())
      .then((data) => {
        setCarData(data.list);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className={css.main}>
      <h1 className={css.title}>Автомобили Chery в СПб</h1>
      <div className={css.main_container}>
        <div className={css.filter_container}>
          <div className={css.filter_blocks}>
            <h1 className={css.filter_title}>Бренд</h1>
            <div className={css.btns_container}>
              <button type="submit" className={activeBtn === 0 ? `${css.active_btn}` : css.btn} onClick={() => handleButtonClick(0)}>Chery</button>
              <button type="submit" className={activeBtn === 1 ? `${css.active_btn}` : css.btn} onClick={() => handleButtonClick(1)}>Haval</button>
              <button type="submit" className={activeBtn === 2 ? `${css.active_btn}` : css.btn} onClick={() => handleButtonClick(2)}>Geely</button>
            </div>
            <div className={css.btns_container}>
              <button type="submit" className={activeBtn === 3 ? `${css.active_btn}` : css.btn} onClick={() => handleButtonClick(3)}>Exeed</button>
              <button type="submit" className={activeBtn === 4 ? `${css.active_btn}` : css.btn} onClick={() => handleButtonClick(4)}>Audi</button>
              <button type="submit" className={activeBtn === 5 ? `${css.active_btn}` : css.btn} onClick={() => handleButtonClick(5)}>Kia</button>
              <button type="submit" className={activeBtn === 6 ? `${css.active_btn}` : css.btn} onClick={() => handleButtonClick(6)}>Hyundai</button>
            </div>
          </div>
          <div className={css.filter_blocks}>
            <h1 className={css.filter_title}>Объем двигателя</h1>
            <div className={css.btns_container}>
              <button type="submit" className={css.btn}>1,5 л.</button>
              <button type="submit" className={css.btn}>1,6 л.</button>
              <button type="submit" className={css.btn}>2,0 л.</button>
            </div>
          </div>
          <div className={css.filter_blocks}>
            <h1 className={css.filter_title}>Комплектация</h1>
            <div className={css.btns_container}>
              <button type="submit" className={css.btn}>Action</button>
              <button type="submit" className={css.btn}>Techno</button>
              <button type="submit" className={css.btn}>Travel</button>
              <button type="submit" className={css.btn}>Luxury</button>
            </div>
            <div className={css.btns_container}>
              <button type="submit" className={css.btn}>Cosmo</button>
              <button type="submit" className={css.btn}>Trek</button>
              <button type="submit" className={css.btn}>Comfort</button>
              <button type="submit" className={css.btn}>Family</button>
            </div>
            <div className={css.btns_container}>
              <button type="submit" className={css.btn}>Prestige</button>
              <button type="submit" className={css.btn}>Elite</button>
              <button type="submit" className={css.btn}>Dreamline</button>
            </div>
            <div className={css.btns_container}>
              <button type="submit" className={css.btn}>Speedline</button>
              <button type="submit" className={css.btn}>Ultimate</button>
            </div>
          </div>
        </div>
        <div className={css.showroom}>
          {carData.map((car, index) => (
            <div key={index} className={css.car_block}>
              <img src={car.photobank.imgs[0].urlThumb} className={css.car_image} alt={`brand`}/>
              <div className={css.car_title}>{car.feedData.brandName} {car.feedData.modelName}</div>
              <div className={css.car_options}>{car.feedData.equipmentName} {car.feedData.equipmentVariantTransmission}</div>
              <div className={css.car_technique}>{car.feedData.engine.engineCapacity} / {car.feedData.engine.enginePower} / {car.feedData.engine.engineTransmission}</div>
              <button className={css.card_btn}>Подробнее</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}