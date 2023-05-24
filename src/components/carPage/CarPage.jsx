import React from 'react';
import { useLocation } from 'react-router-dom';
import css from './CarPage.module.css';

export default function CarPage() {
  const location = useLocation();
  const { car } = location.state || {};
  if (!car) {
    return (
      <div className={css.car_page}>
        <p>Car not found.</p>
      </div>
    );
  }
  return (
      <>
        <div className={css.car_page}>
          <div className={css.car_info}>
            <p className={css.car_title}>{car.feedData.brandName} {car.feedData.modelName} {car.feedData.modelYear} года</p>
            <p className={css.vin}>{car.feedData.vin}</p>
            <div className={css.price_container}>
              <p>{car.feedData.dealerPrice} <span className={css.rub}>₽</span></p>
            </div>
            <div className={css.guarantee_container}>
              <div className={css.guarantee_img}></div>
              <p>Гарантия юр. чистоты</p>
            </div>
            <p className={css.char}>Характеристики</p>
            <div className={css.tech_container}>
              <div className={css.info_tech_container}>
                <div className={css.year_img}></div>
                <p className={css.tech_info}>{car.feedData.modelYear} год выпуска</p>
              </div>
              <div className={css.info_tech_container}>
                <div className={css.technique_img}></div>
                <p className={css.tech_info}>{car.feedData.engine.engineCapacity} / {car.feedData.engine.enginePower} / {car.feedData.engine.engineTransmission}</p>
              </div>
              <div className={css.info_tech_container}>
                <div className={css.transmission_img}></div>
                <p className={css.tech_info}>КП - {car.feedData.equipmentVariantTransmissionType}</p>
              </div>
            </div>
          </div>
          <div className={css.car_photo_container}>
            <img src={car.photobank.imgs[0].url} className={css.car_image} alt={`brand`}/>
          </div>
        </div>
        <div className={css.sale_container}>
          <div className={css.sale_info_container}>
            <h1 className={css.sale_title}>Кредит на новый Chery Tiggo</h1>
            <p className={css.sale_info}>Оформите кредит на любой автомобиль ассортимента дилерского центра «Максимум»</p>
            <button className={css.sale_btn}>Оформить</button>
          </div>
          <div className={css.car_container}>
            <div className={css.car_img}></div>
          </div>
        </div>
      </>
  );
}