import React from 'react';

const SingleBilling = ({ billing }) => {

  const handleDelete = (id) => {
    console.log(id)
  }
  return (
    <>
      <tr>
        <th>1</th>
        <td>{billing.fullName}</td>
        <td>Quality Control Specialist</td>
        <td>Littel, Schaden and Vandervort</td>
        <td>Canada</td>
        <td>
          <button className="btn btn-success btn-xs text-white mr-1">Edit</button>
          <button onClick={() => handleDelete(billing.id)} className="btn bg-red-500 border-none btn-xs text-white">Delete</button>
        </td>
      </tr>

    </>
  );
};

export default SingleBilling;