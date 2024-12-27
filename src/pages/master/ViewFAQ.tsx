import { CiEdit } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Loader from "../../comman/Loader";
import Paginations from "../../Helper/Pagination";
import { useEffect, useState } from "react";
import { GetAllQuestions } from "../../services/MasterApis";
import { useDispatch } from "react-redux";
import { setTitle } from "../../feature/BreadCrumbSlice";

const ViewFAQ = () => {
  const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleQuestionType = async (flag: string) => {
      let body = {
        flag: flag,
      };
      setLoading(true);
      const response = await GetAllQuestions(body);
      setData(response);
      setLoading(false);
    };
  
    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const filteredData = data.filter(
      (item: any) =>
        item.question
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.u_role.toString().toLowerCase().includes(searchTerm.toLowerCase),
      // item.email.toString().toLowerCase().includes(searchTerm.toLowerCase)
    );
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  
    const UserData: any = localStorage.getItem('userData');
    const roles: any = JSON.parse(UserData);
      useEffect(()=>{
          dispatch(setTitle({title:"Questions View"}))
       },[])
  return (
    <div className="h-screen">
         <span className="font-bold ">
        Select type <span className="text-meta-1">*</span>
      </span>
      <div className="flex justify-between mb-2">
        <div>
          <div className="inline-flex rounded-md shadow-sm" role="group mt-1">
            <button
              onClick={() => handleQuestionType('Admin')}
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium dark:bg-neutral-700 dark:text-white text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-primary   "
            >
              <svg
                className="w-3 h-3 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              Admin
            </button>

            <button
              type="button"
              onClick={() => handleQuestionType('Manager')}
              className="inline-flex items-center px-3 mr-3 py-2 text-sm font-medium dark:bg-neutral-700 dark:text-white text-gray-900 bg-transparent border border-gray-900 rounded-r-lg hover:bg-gray-600 hover:text-white  focus:z-10 focus:ring-2 focus:ring-primary   "
            >
              <svg
                className="w-3 h-3 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              Manager
            </button>
          </div>
        </div>
        </div>
    <div className="flex flex-col">
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="border rounded-lg divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
          <div className="py-3 px-4">
            <div className=" max-w-xs  sticky left-0 ">
              <label htmlFor="hs-table-search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search the questions"
                name="hs-table-search"
                id="hs-table-search"
                className=" bg-slate-100 py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              
              />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                <svg
                  className="size-4 text-gray-400 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
            </div>
          </div>
    
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
            <thead className="bg-gray-50 dark:bg-neutral-700">
                      <tr>
                        <th scope="col" className="py-3 px-4 pe-0">
                          <div className="flex items-center h-5">
                            <input
                              id="hs-table-search-checkbox-all"
                              type="checkbox"
                              className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-700 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            />
                            <label
                              htmlFor="hs-table-search-checkbox-all"
                              className="sr-only"
                            >
                              Checkbox
                            </label>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                             Q.No
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                          Week
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                         Status
                        </th>
                      
                       
                        {roles.userRole === 'Master' && (
                        <th
                          scope="col"
                          className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                          Action
                        </th>
                         )} 
                      </tr>
                      </thead>
                      {loading ? <Loader/>:(
                         <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                          {currentItems.map((item:any) => ( 
                           <tr key={item.id}>
                             <td className="py-3 ps-4">
                               <div className="flex items-center h-5">
                                 <input
                                   id="hs-table-search-checkbox-1"
                                   type="checkbox"
                                   className=" border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                 />
                                 <label
                                   htmlFor="hs-table-search-checkbox-1"
                                   className="sr-only"
                                 >
                                   Checkbox
                                 </label>
                               </div>
                             </td>
                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                             {item.seq_id}
                             </td>
                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                             {item.question}
                             </td>
                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                             {item.status}
                             </td>
                            
                               
                             <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                             <span className="inline-flex justify-center gap-2">
                                   <button
                                   type="button"
                                   aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-slide-down-animation-modal" data-hs-overlay="#hs-slide-down-animation-modal"
                                    //  onClick={() => handleEdit(item)}
                                     className="disabled:opacity-50 disabled:pointer-events-none"
                                   >
                                     <CiEdit size={23} />
                                   </button>
                                   <button
                                    // onClick={()=>handleView(item)} 
                                    className="hover:text-primary">
                                     <IoEyeOutline size={23} />
                                   </button>
                                 </span>
                             </td>
                               
                           </tr>
                           ))}  
                       </tbody>
                       )} 
             
            </table>
          </div>
  
        </div>
      </div>
    </div>
    {data.length > 0 && (
       <div className="mt-2">
       <Paginations currentPage={currentPage} handlePageChange={handlePageChange} data={data} itemperPage={itemsPerPage}/>            
       </div>
    ) }
   
  </div>
 
  </div>
  )
}

export default ViewFAQ;



