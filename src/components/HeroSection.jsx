import Video1 from "../assets/video1.mp4";
import Video2 from "../assets/video2.mp4";
import Button from "../utils/Button";
const HeroSection = () => {
  return (
    <>
      <div className='flex flex-col mt-6 items-center lg:mt-20'>
        <h1 className='lg:text-7xl sm:text-6xl text-4xl text-center tracking-wide'>
          VirtualR Build tools{" "}
          <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
            for Developers
          </span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500  max-w-4xl '>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, est
          eveniet modi atque ad, necessitatibus ut velit nihil animi culpa
          sapiente reiciendis tempore! Vero numquam aliquid error magnam, quos
          labore!
        </p>
        <div className='flex justify-center mt-10 gap-5'>
          <Button content='Start for Free' />
          <Button content='Documentation' transparent={true} />
        </div>
        <div className='flex lg:flex-row gap-7 flex-col mt-10 justify-center'>
          <video
            autoPlay
            muted
            loop
            className='rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-orange-900'>
            <source src={Video1} type='video/mp4' />
            your browser doesnt support videos
          </video>
          <video
            autoPlay
            muted
            loop
            className='rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-orange-900'>
            <source src={Video2} type='video/mp4' />
            your browser doesnt support videos
          </video>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
