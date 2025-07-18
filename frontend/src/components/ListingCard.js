"use client";

import Img from "react-cool-img";

export default function ListingCard({
  header,
  description,
  image = null,
  bgcolour = "from-red-700",
  textcolour = "white",
  isImageRight = true,
  imgSource = "",
}) {
  let bgGradientDirn = isImageRight ? "bg-gradient-to-r" : "bg-gradient-to-l"; //helps determine the direction the gradient is to be applied to based on prop value indicating position of image
  let bgGradientColour = bgcolour; // `from-${bgcolour}`; //helps create tailwind classname for the background colour that (by default) gradients into transparent if to- colour is supplied
  let leftContent, rightContent;
  console.log(bgGradientDirn, bgGradientColour);
  return (
    <div
      className={`${bgGradientDirn} ${bgGradientColour} my-10 max-w-[1440px] p-10 w-screen h-auto mx-auto `}
    >
      <div className="">
        {isImageRight && (
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="space-y-4 flex flex-col justify-center">
              <h2 className="font-semibold text-4xl">{header}</h2>
              <div id="leftDescriptionBox" className="text-gray-900 text-lg">
                {description}
              </div>
            </div>

            <div
              id="rightImageBox"
              className="mx-auto flex  p-4 mr-4 rounded-lg object-cover transform transition hover:scale-105 ease-in-out duration-150"
            >
              <Img src={imgSource} alt="Prop Image" />
            </div>
          </div>
        )}
        {!isImageRight && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div
                id="leftImageBox"
                className="mx-auto flex  p-4 mr-4 rounded-lg object-cover transform transition hover:scale-105 ease-in-out duration-150"
              >
                <Img src={imgSource} alt="Prop Image" />
              </div>
              <div className="space-y-4 flex flex-col justify-center">
                <h2 className="font-semibold text-4xl">{header}</h2>
                <div id="rightDescriptionBox" className="text-gray-900 text-lg">
                  {description}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

//
