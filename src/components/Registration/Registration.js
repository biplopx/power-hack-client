import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Registration = () => {
  let signupError;
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit, reset } = useForm();


  // const [token] = useToken(user || gUser);


  // if user exits and get token
  // useEffect(() => {
  //   if (token) {
  //     toast('Registration successful')
  //     navigate('/');
  //   }
  // }, [navigate, token])



  // hanle user registration
  const onSubmit = async data => {
    console.log(data)
    fetch('http://localhost:5000/api/registration', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.status === 401) {
          toast.error("Email Already used");
          reset();
        }
        else {
          toast.success("Registration Successful");
          reset();
        }

      })
  }
  return (
    <>
      <section className='py-12 p-5'>
        <div className="flex h-screen justify-center items-start">
          <div className="w-96 bg-white border-2 rounded-md border-primary p-5">
            <h2 className='text-center text-2xl font-bold'>Please Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Ful name Input */}
              <div className="form-control w-full">
                <label className="label font-semibold">
                  <span className="label-text">Name</span>
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
                  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
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
              {/* Pass Input */}
              <div className="form-control w-full">
                <label className="label font-semibold">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: 'Password is Required'
                    },
                    minLength: {
                      value: 6,
                      message: 'Password must be 6 characters or longer'
                    }
                  })}
                  placeholder="Your password" className="input input-bordered w-full" />
                <label className="label">
                  {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                  {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                </label>
              </div>
              <div>{signupError}</div>
              <input className='btn btn-primary w-full text-white' type="submit" value="Register" />
            </form>
            <p className='mt-4'>Already have an account <Link className='text-primary' to="/login">Login here</Link></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;