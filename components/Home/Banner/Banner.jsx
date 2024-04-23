import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
          <div className="hero-banner">
            <div className="content">
            
                <div className="text-content">
                    <h1>Crystal Sound</h1>
                    <p>Welcome to the world of bass-boosted audio experience with our top-rated Bluetooth headphones.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Explore</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                
                <img className="banner-img" src={BannerImg} alt=""/>
            </div>
          </div>
    );
};

export default Banner;
