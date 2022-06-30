import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <section className='py-10 px-5'>
        <div className="containe mx-auto">
          <div className="flex">
            <div className="mx-auto bg-white text-center">
              <img src='https://i.postimg.cc/gj1BX2gK/404-not-found.png' className='max-w-md' alt='page not found' />
              <Link className="btn btn-primary text-white my-3" to="/" role="button">Back To Home</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;