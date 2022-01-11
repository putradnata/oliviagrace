import React from "react";
import About from "../images/about1.png";
import Card from "../components/Card";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";
// images
import servicePack1 from "../images/servicepackage1.png";
import servicePack2 from "../images/servicepackage2.png";
import servicePack3 from "../images/servicepackage3.png";
import workTogether from "../images/worktogether.png";
import backImage from "../images/image1.png";

const Home = () => {
  return (
    <div className="gap-10 my-10">
      <div className="container lg:flex mx-auto lg:gap-10">
        <div className="px-6 lg:px-0 w-full lg:w-1/2">
          <img src={About} />
        </div>
        <div className="flex flex-col gap-5 lg:flex lg:gap-5 justify-center items-center mx-6 lg:mx-0 py-10 px-4 bg-cream lg:w-1/2">
          <h2 className="lg:w-full text-2xl text-center font-semibold tracking-widest">
            ABOUT ME
          </h2>
          <p className="text-center lg:w-full lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mauris
            enim, nisi, eget vivamus pellentesque fermentum. eget vivamus
            pellentesque fermentum.
          </p>
          <Buttons buttonText={"Let's Chat"} />
        </div>
      </div>
      <div className="container my-10 lg:my-14 lg:flex lg:gap-10 mx-auto">
        <Card
          CardImage={servicePack1}
          CardTitle={"SERVICE PACKAGE 1"}
          CardDescription={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl malesuada orci vitae."
          }
          CardPrice={"STARTING PRICE OF $100"}
        />
        <Card
          CardImage={servicePack2}
          CardTitle={"SERVICE PACKAGE 2"}
          CardDescription={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl malesuada orci vitae."
          }
          CardPrice={"STARTING PRICE OF $150"}
        />
        <Card
          CardImage={servicePack3}
          CardTitle={"SERVICE PACKAGE 3"}
          CardDescription={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl malesuada orci vitae."
          }
          CardPrice={"STARTING PRICE OF $200"}
        />
      </div>
      <div className="bg-cream my-10 lg:my-28">
        <div className="container flex mx-auto lg:gap-20 lg:justify-center lg:items-center py-11">
          <div className="bg-white flex flex-col text-center p-16 lg:w-1/2 z-10 lg:flex lg:flex-col gap-5 items-center">
            <h2 className="text-2xl text-center font-semibold tracking-widest">
              LET'S WORK TOGETHER
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
              malesuada orci vitae.
            </p>
            <Buttons buttonText={"Let's Chat"} />
          </div>
          <img className="absolute hidden lg:block" src={backImage} />
          <div className="lg:w-1/3 bg-white py-6 px-6 z-10 hidden lg:flex lg:justify-center ">
            <img src={workTogether} />
          </div>
        </div>
      </div>
      <div className="my-14 lg:my-28 lg:pt-20">
        <div className="container mx-auto flex flex-col gap-10 px-6 lg:flex lg:flex-col lg:gap-6">
          <h2 className="text-2xl text-center font-semibold tracking-widest">
            WHAT MY CLIENTS ARE SAYING
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mauris
            enim, nisi, eget vivamus pellentesque fermentum. eget vivamus
            pellentesque fermentum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vel mauris enim, nisi, eget vivamus pellentesque
            fermentum. eget vivamus pellentesque fermentum.
          </p>
        </div>
      </div>
      <div className="bg-cream my-10 lg:my-20">
        <div className="container mx-auto px-10 py-10 flex flex-col gap-10 lg:py-16 lg:flex lg:flex-col lg:gap-16">
          <h2 className="text-2xl text-center font-semibold tracking-widest">
            FOLLOW ME @OLIVAGRACE
          </h2>
          <div className="flex flex-col justify-center items-center lg:flex lg:flex-row gap-8">
            <img src={About} className="w-64 h-64" />
            <img src={servicePack1} className="w-64 h-64" />
            <img src={servicePack2} className="w-64 h-64" />
            <img src={servicePack3} className="w-64 h-64" />
            <img src={workTogether} className="w-64 h-64" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
