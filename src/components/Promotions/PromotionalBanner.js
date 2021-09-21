const PromotionalBanner = ({ onX, onContact }) => {
  return (
    <div className="promotionBanner">
      <div className="promotionBanner__container bg-gradient-orange">
        <i class="fas fa-times promotionBanner__x " onClick={onX}></i>
        <div class="promotionBanner__number">
          10% OFF<span>NEW CUSTOMER DISCOUNT</span>
          <span>LIMITED-TIME OFFER !</span>
        </div>
        <div className="promotionBanner__textContainer">
          <h1 className="promotionBanner__message">NEW CUSTOMER DISCOUNT</h1>
          <h2 className="promotionBanner__instructions">
            ENTER <span>PROMO111</span> AS A REFERENCE NUMBER WHEN CONTACTING US
          </h2>
          <div className="promotionBanner__btnContainer">
            or simply click here{" "}
            <button
              className="btn-classic-blue promotionBanner__btn"
              onClick={onContact}
            >
              {" "}
              Contact
            </button>
          </div>
        </div>

        {/* <h1 className="promotionBanner__message">10% off for new customers</h1>
        <h2 className="promotionBanner__instructions">
          enter <span>PROMO111</span> reference number
        </h2>
        <button className="promotionBanner__btn" onClick={onContact}>
          Contact
        </button> */}
      </div>
    </div>
  );
};
export default PromotionalBanner;
