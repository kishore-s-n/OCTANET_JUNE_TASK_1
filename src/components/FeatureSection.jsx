import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div
      className='relative mt-10 border-b border-neutral-700 min-h-[800px]'
      id='Features'>
      <div className='text-center'>
        <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
          Feature
        </span>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-12 tracking-wide'>
          Easily Build
          <span className='bg-gradient-to-r from-orange-600 to-red-800 bg-clip-text text-transparent'>
            {" "}
            your code
          </span>
        </h2>
      </div>
      <div className='flex flex-wrap mt-10 lg:mt-12'>
        {features.map((feature, index) => (
          <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
            <div className='flex'>
              <div className='flex justify-center items-center rounded-full mx-6 h-10 p-2 bg-neutral-900 text-orange-700'>
                {feature.icon}
              </div>
              <div className='flex flex-col'>
                <h2 className='mt-1 mb-6 text-xl '>{feature.text}</h2>
                <p className='text-sm text-neutral-500 p-2 mb-20'>
                  {feature.description}
                </p>
              </div>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
