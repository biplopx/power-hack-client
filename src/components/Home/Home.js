import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero min-h-screen bg-slate-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Please Login First</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary text-white"><Link to="/login">Login</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Home;