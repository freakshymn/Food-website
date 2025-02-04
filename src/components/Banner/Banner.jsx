import React from "react";
import BannerImg from "../../assets/2.png";

const Banner = () => {
  return (
    <>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* img section */}
          <div className="flex justify-center items-center">
            <img src={BannerImg} alt="" />
          </div>
          {/* text section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold">Food Is Always Good</h1>
            <p className="py-4 font-semibold">
            Savor the taste of freshly prepared dishes crafted to delight your senses. Your next delicious meal is just a bite away—come and enjoy!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
