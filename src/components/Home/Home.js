import React from 'react';
import { Link } from 'react-router-dom';
import useStore from "../../store/store";

const Home = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  return (
    <div className="hero min-h-screen bg-slate-100">
      <div className="hero-content text-center">
        {
          isLoggedIn ? (
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Welcome To Power-Hack</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary text-white"><Link to="/billings">Got to Billings</Link></button>
            </div>
          ) : (
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Please Login First</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary text-white"><Link to="/login">Login</Link></button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Home;