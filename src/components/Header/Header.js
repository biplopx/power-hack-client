import React from 'react';
import { Link } from 'react-router-dom';
import useStore from "../../store/store";

const Header = ({isBilling}) => {
  const totalPaidAmount = useStore((state) => state.totalPaidAmount);
  return (
    <header className='bg-green-200'>
      <div className="container mx-auto px-10">
        <div className="navbar">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl">Power-Hack</Link>
          </div>
          <div className="flex-none">
            {
              isBilling ? <p className="text-black font-bold">Paid Total: {totalPaidAmount}</p> : <button className="btn btn-primary text-white"><Link to="/login">Login</Link></button>
            }
          </div>
        </div>
      </div>
    </header>

  );
};

export default Header;