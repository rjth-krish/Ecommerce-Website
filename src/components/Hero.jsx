import { Link } from "react-router-dom";

import HeroImage from "../img/Hero.jpg";

function Hero() {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="flex font-semibold items-center uppercase">
            <div className="w-10 bg-black h-[2px] mr-3"></div>New Trend
            <h1 className="text-[70px] leading-[1.1] font-light mb-4">
              AUTUMN SALE STYLISH <br />
              <span className="font-semibold">MENS</span>
            </h1>
            <Link
              to={"/"}
              className="self-start uppercase font-semibold border-b-2 border-primary"
            >
              Discover More
            </Link>
          </div>
          <div className="hidden lg:block">
            <img src={HeroImage} alt="heroImage" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
