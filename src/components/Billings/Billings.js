import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Loading from '../Loading/Loading';
import AddBilling from './AddBilling';
import SingleBilling from './SingleBilling';


const Billings = () => {
  const [isLoading, setIsLoading] = useState(false)
  let location = useLocation();
  const [pagerState, setPagerState] = useState({
    pager: {},
    pageOfItems: []
  })
  const params = new URLSearchParams(location.search);
  const page = parseInt(params.get('page')) || 1;

  const fetchData = () => {
    setIsLoading(true)
    if (page !== pagerState.pager.currentPage) {
      fetch(`http://localhost:5000/api/billing-list?page=${page}`, { method: 'GET' })
        .then(response => response.json())
        .then(({ pager, pageOfItems }) => {
          setPagerState({ pager, pageOfItems });
          setIsLoading(false)
        });
    }
  }

  useEffect(() => {
    fetchData();
  }, [page])


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
                <label htmlFor="addBilling-Modal" className="btn btn-primary text-white btn-sm">Add New Bill</label>
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
                      isLoading ? <Loading /> :
                        pagerState.pageOfItems.map(billing => <SingleBilling key={billing._id} billing={billing}></SingleBilling>)
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
                {
                  pagerState.pager?.pages?.map(page =>
                  (
                    <Link to={{ search: `?page=${page}` }} key={page} className={`btn btn-sm ${pagerState.pager?.currentPage === page ? 'btn-active' : ''}`}>{page}</Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <AddBilling></AddBilling>
    </>
  )
}

export default Billings