import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div id='Testimonials' className='mt-20 tracking-wide'>
      <h1 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8'>
        What People Are Saying
      </h1>
      <div className='flex flex-wrap justify-center'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
            <div className='bg-neutral rounded-lg p-6 text-md border border-neutral-700 font-thin'>
              {testimonial.text}
              <div className='flex mt-8 items-start'>
                <img
                  src={testimonial.image}
                  alt={testimonial.user}
                  className='w-12 h-12 rounded-full border border-neutral-600 mr-5'
                />
                <div className='flex flex-col mr-4'>
                  <h6 className='test-sm font-normal italic'>
                    {testimonial.user}
                  </h6>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
