import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-800 text-orange-500 rounded-full h-6 text-sm lg:text-3xl font-medium px-4 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily organize{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your event
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap m-10  lg:mt-20 ">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-3  ">
            <div className="flex bg-neutral-800 border-b border-l backdrop-blur-lg bg-neutral-800/50 border-blue-400 w-full h-full rounded-lg ">
              <div className="flex mx-6 my-6 h-10 w-10 p-2 bg-neutral-750 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 p-4 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 mx-2 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
