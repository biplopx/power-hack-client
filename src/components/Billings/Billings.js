import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddBilling from './AddBilling';
import SingleBilling from './SingleBilling';
const Billings = () => {
  // const [openModal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [pagerState, setPagerState] = useState({
    pager: {},
    pageOfItems: []
  })
  const { page } = useParams();

  const fetchData = () => {
    setIsLoading(true)
    const pageNumber = parseInt(page) || 1;
    console.log(pageNumber)
    if (pageNumber !== pagerState.pager.currentPage) {
      fetch(`http://localhost:5000/api/billing-list?page=${pageNumber}`, { method: 'GET' })
        .then(response => response.json())
        .then(({ pager, pageOfItems }) => {
          setPagerState({ pager, pageOfItems });
          setIsLoading(false)
        });
    }
  }

  useEffect(() => {
    // fetchData();
    console.log("Useeffect")
  }, [])



  // if (isLoading) {
  //   return (
  //     <div>
  //       Loading.........
  //     </div>
  //   )

  // } else {
  const { pager, pageOfItems } = pagerState;
  console.log(pagerState)
  return (
    <>
      <section className='py-12'>
        <div className="container mx-auto px-6">
          <div className="border-2 rounded-t-md border-primary">
            <div className="navbar bg-base-100 rounded-md px-5">
              <div className="flex-1">
                <h3>Billing</h3>
              </div>
              <div className="flex-none">
                <label for="addBilling-Modal" class="btn btn-primary text-white btn-sm">Add New Bill</label>
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
                    {
                      pageOfItems.map(billing => <SingleBilling billing={billing}></SingleBilling>)
                    }

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
                {pager?.pages.map(page =>
                  <div key={page} className={`btn btn-sm ${pager.currentPage === page ? 'btn-active' : ''}`}>
                    <Link to={{ search: `?page=${page}` }} className="page-link">{page}</Link>
                  </div>
                )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <AddBilling></AddBilling>
    </>

  );


};

export default Billings;