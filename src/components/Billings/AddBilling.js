import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

const AddBilling = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = async data => {
    console.log(data)
  }

  return (
    <>
      <input type="checkbox" id="addBilling-Modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Add New Bill</h3>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Ful name Input */}
              <div className="form-control w-full">
                <label className="label font-semibold">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  {...register("fullName", {
                    required: {
                      value: true,
                      message: 'Please enter your full name'
                    }
                  })}
                  placeholder="Your name" className="input input-bordered w-full" />
                <label className="label">
                  {errors.fullName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.fullName.message}</span>}
                </label>
              </div>
              {/* Email Input */}
              <div className="form-control w-full ">
                <label className="label font-semibold">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: 'Please enter your email'
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid an Email'
                    }
                  })}
                  placeholder="Your email" className="input input-bordered w-full" />
                <label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                  {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>
              </div>
              {/* Phone Input */}
              <div className="form-control w-full">
                <label className="label font-semibold">
                  <span className="label-text">Phone</span>
                </label>
                <input type="phone"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: 'Please enter mobile number'
                    },
                    minLength: {
                      value: 11,
                      message: 'Phone number should be 11 digit'
                    }
                  })}
                  placeholder="Your password" className="input input-bordered w-full" />
                <label className="label">
                  {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                  {errors.phone?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                </label>
              </div>
              {/* Paid Amount Input */}
              <div className="form-control w-full">
                <label className="label font-semibold">
                  <span className="label-text">Paid Amount</span>
                </label>
                <input type="number"
                  {...register("paidAmount", {
                    required: {
                      value: true,
                      message: 'Please enter mobile number'
                    }
                  })}
                  placeholder="Your password" className="input input-bordered w-full" />
                <label className="label">
                  {errors.paidAmount?.type === 'required' && <span className="label-text-alt text-red-500">{errors.paidAmount.message}</span>}
                </label>
              </div>
              <input className='btn btn-primary w-full text-white' type="submit" value="Add New Bill" />
            </form>
          </div>
          <div class="modal-action">
            <label for="addBilling-Modal" class="btn btn-primary text-white btn-sm">Close</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBilling;