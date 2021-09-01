const PromotionalBanner = ({ onX }) => {
  return (
    <div className="promotionBanner">
      <div className="promotionBanner__container">
        <i class="fas fa-times" onClick={onX}></i>
        <div></div>
        <button className="btn-classic-blue">
          Contact us to claim your discount
        </button>
      </div>
    </div>
  );
};
export default PromotionalBanner;
