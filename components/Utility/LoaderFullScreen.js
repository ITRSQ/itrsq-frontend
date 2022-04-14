// Img
import q from "../../public/img/Q.png";
import Image from "next/image";
const LoaderFullScreen = () => {
  return (
    <div className="loader-fullscreen">
      <Image src={q} alt={q} />
    </div>
  );
};

export default LoaderFullScreen;
