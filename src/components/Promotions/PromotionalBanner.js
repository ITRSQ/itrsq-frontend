const PromotionalBanner = ({ onX, onContact }) => {
  return (
    <div className="promotionBanner">
      <div className="promotionBanner__container">
        <i class="fas fa-times promotionBanner__x " onClick={onX}></i>
        <h1 className="promotionBanner__message">
          10% off for New Customers !
        </h1>
        <h2 className="promotionBanner__instructions">
          Enter <span>PROMO111</span> as Reference Number when Contacting us
        </h2>
        <button className="btn-classic" onClick={onContact}>
          Contact
        </button>
      </div>
    </div>
  );
};
export default PromotionalBanner;
