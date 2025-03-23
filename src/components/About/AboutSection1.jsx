import React from "react";
import "../../css/allCss.css";
import Banner1 from "../../assets/Images/aboutus1.webp";
import Banner2 from "../../assets/Images/aboutus2.webp";
import Banner3 from "../../assets/Images/aboutus3.webp";

const AboutSection1 = () => {
  const imageData = [Banner1, Banner2, Banner3];

  return (
    <section className='mx-auto mb-[12%] max-h-[22rem] w-11/12 text-white'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-center text-3xl font-bold'>
          Driving Innovation in Online Education for a <br />
          <p className='text1-gradient'>Brighter Future</p>
        </h1>

        <p className='w-[80%] text-center text-sm text-richblack-200'>
          Studynotion is at the forefront of driving innovation in online
          education. We're passionate about creating a brighter future by
          offering cutting-edge courses, leveraging emerging technologies, and
          nurturing a vibrant learning community.
        </p>

        <div className='flex flex-row gap-4 p-2'>
          {imageData.map((item, index) => {
            return (
              <img
                src={item}
                key={index}
                alt={"banner"}
                className='aspect-square w-[33%] object-contain'
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;
