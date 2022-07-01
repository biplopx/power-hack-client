import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import useStore from "../../store/store";
import Loading from '../Loading/Loading';
import AddBilling from './AddBilling';
import SingleBilling from './SingleBilling';
import UpdateBilling from './UpdateBilling';


const Billings = () => {
  const setTotalPaidAmount = useStore((state) => state.setTotalPaidAmount);
  const [isLoading, setIsLoading] = useState(false)
  const [fetchAgain, setFetchAgain] = useState(false)
  const [updateValues, setUpdateValues] = useState()
  const [searchTerm, setSearchTerm] = useState("")
  let location = useLocation();
  const [pagerState, setPagerState] = useState({
    pager: {},
    pageOfItems: []
  })
  const params = new URLSearchParams(location.search);
  const page = parseInt(params.get('page')) || 1;

  const getTotalPaid = () => {
    if (!fetchAgain) {
      setIsLoading(true)
    }
    fetch(`https://boxing-mountie-80750.herokuapp.com/api/billing-total`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': localStorage.getItem('accessToken')
      },
    })
      .then(response => response.json())
      .then(({ total }) => {
        console.log(total)
        setTotalPaidAmount(total)
        setIsLoading(false)
      });
  }

  const fetchData = () => {
    if (!fetchAgain) {
      setIsLoading(true)
    }
    if (page !== pagerState.pager.currentPage || fetchAgain) {
      fetch(`https://boxing-mountie-80750.herokuapp.com/api/billing-list?page=${page}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'authorization': localStorage.getItem('accessToken')
        },
      })
        .then(response => response.json())
        .then(({ pager, pageOfItems }) => {
          setPagerState({ pager, pageOfItems });
          setFetchAgain(false)
          setIsLoading(false)
        });
    }
  }

  const searchData = () => {
    setIsLoading(true)
    fetch(`https://boxing-mountie-80750.herokuapp.com/api/billing-search?search=${searchTerm}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': localStorage.getItem('accessToken')
      },
    })
      .then(response => response.json())
      .then(({ pager, pageOfItems }) => {
        setPagerState({ pager, pageOfItems });
        setIsLoading(false)
      });
  }

  useEffect(() => {
    fetchData();
    getTotalPaid()
  }, [page, fetchAgain])


  return (
    <>
      <section className='py-12'>
        <div className="container mx-auto px-6">
          <div className="border-2 rounded-t-md border-primary">
            <div className="navbar bg-base-100 rounded-md px-5">
              <div className="flex-1">
                <h3 className="mr-8">Billing</h3>
                <input type="text" placeholder="Search .." className="input input-bordered w-full max-w-xs" onChange={(e) => setSearchTerm(e.target.value)} />
                <button className="btn ml-8" onClick={searchData}>Search</button>
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
                      <th>Paid Amount </th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      isLoading ? <Loading /> :
                        pagerState.pageOfItems.map(billing => <SingleBilling key={billing._id} setFetchAgain={setFetchAgain} setUpdateValues={setUpdateValues} billing={billing}></SingleBilling>)
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
      <AddBilling pagerState={pagerState} setPagerState={setPagerState} setFetchAgain={setFetchAgain}></AddBilling>
      <UpdateBilling updateValues={updateValues} pagerState={pagerState} setPagerState={setPagerState} setFetchAgain={setFetchAgain}></UpdateBilling>
    </>
  )
}

export default Billings