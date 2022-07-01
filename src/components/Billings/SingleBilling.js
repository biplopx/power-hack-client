import React from 'react';
import { toast } from 'react-toastify';

const SingleBilling = ({ setFetchAgain, setUpdateValues, billing }) => {

  const handleDelete = (id) => {
    fetch(`https://boxing-mountie-80750.herokuapp.com/api/delete-billing/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': localStorage.getItem('accessToken')
      },
    })
      .then(response => response.json())
      .then((result) => {
        setFetchAgain(true)
        toast.success("Delete Succesfull");
      });
  }
  return (
    <>
      <tr>
        <th>{billing._id || "Generating Id ..."}</th>
        <td>{billing.fullName}</td>
        <td>{billing.email}</td>
        <td>{billing.phone}</td>
        <td>{billing.paidAmount}</td>
        <td>
          <label htmlFor="addBilling-Modal" onClick={() => setUpdateValues(billing)} className="btn btn-success btn-xs text-white mr-1">Edit</label>
          <button onClick={() => handleDelete(billing._id)} className="btn bg-red-500 border-none btn-xs text-white">Delete</button>
        </td>
      </tr>

    </>
  );
};

export default SingleBilling;