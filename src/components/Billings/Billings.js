import React from 'react';

const Billings = () => {
  return (
    <section className='py-12'>
      <div className="container mx-auto px-6">
        <div className="border-2 rounded-t-md border-primary">
          <div className="navbar bg-base-100 rounded-md px-5">
            <div className="flex-1">
              <h3>Billing</h3>
            </div>
            <div className="flex-none">
              <div className="btn btn-primary text-white capitalize">Add Billing</div>
            </div>
          </div>
          {/* Billing Table */}
          <div className='p-6'>
            <div className="overflow-x-auto">
              <table className="table table-compact w-full">
                <thead>
                  <tr>
                    <th>Bill ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Paid Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Littel, Schaden and Vandervort</td>
                    <td>Canada</td>
                    <td>
                      <button className="btn btn-success btn-xs text-white mr-1">Edit</button>
                      <button className="btn bg-red-500 border-none btn-xs text-white">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Littel, Schaden and Vandervort</td>
                    <td>Canada</td>
                    <td>
                      <button className="btn btn-success btn-xs text-white mr-1">Edit</button>
                      <button className="btn bg-red-500 border-none btn-xs text-white">Delete</button>
                    </td>
                  </tr>

                </tbody>
                <tfoot>
                  <tr>
                    <th>Bill ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Paid Amount</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="btn-group mt-5">
              <button className="btn btn-sm">1</button>
              <button className="btn btn-sm btn-active">2</button>
              <button className="btn btn-sm">3</button>
              <button className="btn btn-sm">4</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billings;