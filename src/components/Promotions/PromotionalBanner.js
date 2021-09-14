const PromotionalBanner = ({ onX, onContact }) => {
  return (
    <div className="promotionBanner">
      <div className="promotionBanner__container">
        <i class="fas fa-times promotionBanner__x " onClick={onX}></i>
        <h1 className="promotionBanner__message">10% off for new customers</h1>
        <h2 className="promotionBanner__instructions">
          enter <span>PROMO111</span> reference number
        </h2>
        <button className="promotionBanner__btn" onClick={onContact}>
          Contact
        </button>
      </div>
    </div>
  );
};
export default PromotionalBanner;
