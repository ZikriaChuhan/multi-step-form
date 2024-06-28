'use client'

import { useState } from 'react';


const MultiStepForm = () => {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        budget: '',
        name: '',
        email: '',
        phone: '',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const returnhome = () => {
        setStep(1);
    };

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            budget: '',
            name: '',
            email: '',
            phone: '',
            additionalInfo: ''
          });
        nextStep();
    };

    const handleBudgetSelect = (budget) => {
        setFormData({
          ...formData,
          budget
        });
        nextStep();
      };

    return (
        <>
            {step === 1 && (
                <div className="flex flex-col items-center justify-center h-screen bg-gray-100  p-24">
                    <h1 className="text-3xl font-bold text-black  pb-10">Multi Step Form</h1>
                    <button className="text-sm font-semibold leading-6 text-black border-2 p-2 rounded-md" onClick={nextStep} >Get Started <span aria-hidden="true">→</span></button>
                </div>
            )}

{step > 1 && step < 4 && (

            <div className="">
                <form onSubmit={submitForm}>

                {step === 2 && (
                    <>
                    <div className=" flex justify-between px-10 bg-gray-100 py-4">
                    <button type="button" className="text-sm font-semibold leading-6 text-black " onClick={prevStep}> <span aria-hidden="true">←</span> Go Back</button>
                    <button type="button" className="text-sm font-semibold leading-6 text-black " onClick={returnhome}>Exit <span aria-hidden="true" className='font-light'> X</span></button>
                  </div>
                  <div className='bg-gray-200  justify-start'><div className='w-1/3 bg-green-600 pt-3'></div></div>
                    <div className='flex  flex-col items-center bg-gray-100  h-screen '>
              <div className='max-w-md p-8 text-center'>
                <h2 className="text-2xl mt-20 font-bold mb-11">Step #1</h2>
                <p className="mb-8 text-2xl font-semibold">What is your monthly digital marketing budget?</p>
                <div className="flex flex-col space-y-2">
                  {['< $1,000/mo', '$1,000 - $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000 +'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`bg-white  text-black px-4 py-2 border-2 border-slate-200 ${formData.budget === option ? 'border border-yellow-500' : ''}`}
                      onClick={() => handleBudgetSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              
              </div>
              </div>
              </>
            )}

                    {step === 3 && (
                        <>
                         <div className=" flex justify-between px-10 bg-gray-100 py-4">
                    <button type="button" className="text-sm font-semibold leading-6 text-black " onClick={prevStep}> <span aria-hidden="true">←</span> Go Back</button>
                    <button type="button" className="text-sm font-semibold leading-6 text-black " onClick={returnhome}>Exit <span aria-hidden="true" className='font-light'> X</span></button>
                  </div>
                  <div className='bg-gray-200  justify-start'><div className='w-2/3 bg-green-600 pt-3'></div></div>

                       <div className='flex  flex-col items-center justify-center bg-gray-100  h-screen '>
              <div className='max-w-2xl p-8 text-center'>
                <h2 className="text-2xl font-bold mb-2">Step #2</h2>
                <p className="mb-3 text-2xl font-semibold">Detail</p>
                            <p >We're thrilled at the opportunity to help you grow your business online.</p>
                            <p className="mb-4 ">Please let us know the best way to reach you.</p>
                            <div className="mb-4">
                                <label className="block mb-1 text-left"><strong>Name</strong></label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border"
                                    required
                                />
                            </div>
                            <div className='flex justify-between '>
                            <div className="mb-4 justify-start ">
                                <label className="block mb-1 text-left"><strong>Email</strong></label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-half  px-4 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-left"><strong>Phone Number</strong></label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-half px-4 py-2 border rounded"
                                    required
                                />
                            </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-left"><strong>Anything else you'd like to share?</strong></label>
                                <textarea
                                    name="additionalInfo"
                                    value={formData.additionalInfo}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded"
                                />
                            </div>
                            <div className="mt-4 flex justify-center">
                                <button type="submit" className="bg-green-500 text-white px-4 py-2" >Send Request</button>
                            </div>
                        </div>
                        </div>
                        </>
                    )}

                   
                    
                </form>
            </div>
            

            )}

            {step === 4 && (
                <>
                 <div className=" flex justify-between px-10 bg-gray-100 py-4">
                    <button type="button" className="text-sm font-semibold leading-6 text-black " onClick={prevStep}> <span aria-hidden="true">←</span> Go Back</button>
                    <button type="button" className="text-sm font-semibold leading-6 text-black " onClick={returnhome}>Exit <span aria-hidden="true" className='font-light'> X</span></button>
                  </div>
                  <div className='bg-gray-200  justify-start'><div className='w-full bg-green-600 pt-3'></div></div>


                <div className='flex  flex-col items-center justify-center bg-gray-100  h-screen '>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center">
                <div className="mb-4">
                  <img
                    className="w-16 h-16 mx-auto mb-4 text-green-500"
                    src='https://icons.veryicon.com/png/o/miscellaneous/8atour/submit-successfully.png'
                  />
                   
                </div>
                <h2 className="text-2xl font-semibold mb-4">Your Request for a Proposal Has Been Submitted!</h2>
                <p className="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices dis gravida parturient urna tristique congue.
                  Curabitur volutpat nulla convallis eget pellentesque. Luctus tellus eu ultrices egestas.
                </p>
                
                  <button className="bg-green-500 text-white px-6 py-2 rounded-md" onClick={returnhome}>Return Home</button>
                
              </div>
              </div>
</>
            )}
        </>
    );
};

export default MultiStepForm;
