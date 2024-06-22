import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const WorkFlow = () => {
  return (
    <div id='Workflow'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mt-12 mb-20 '>
        Accelerate Your{" "}
        <span className='bg-gradient-to-r from-orange-600 to-red-800 bg-clip-text text-transparent'>
          Coding Workflow
        </span>
      </h2>
      <div className='flex flex-wrap justify-center'>
        <div className='lg:w-1/2  w-full p-2 '>
          <img src={codeImg} alt='Code workflow' />
        </div>
        <div className='w-full lg:w-1/2 pt-12'>
          {checklistItems.map((item, index) => (
            <div key={index} className='flex mb-12'>
              <div className='text-green-600 bg-neutral-900 h-10 w-10 flex rounded-full justify-center items-center'>
                <CheckCircle2 />
              </div>
              <div>
                <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                <p className='text-md text-neutral-500'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
