import { useState, useEffect } from "react";
import { GetAllMembers } from "../../services/MasterApis";
import { CiEdit } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FcApprove, FcDisapprove } from "react-icons/fc";
import Paginations from "../../Helper/Pagination";
import Loader from "../../comman/Loader";
import EditModal from "./EditModal";

const MemberView = () => {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [ViewModal, setViewModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState({});
  
    const handlePageChange = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const filteredData = data.filter(
      (item: any) =>
        item.name.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.loc_name.toString().toLowerCase().includes(searchTerm.toLowerCase) ||
        item.email.toString().toLowerCase().includes(searchTerm.toLowerCase),
    );
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  
    const fetchData = async () => {
      setloading(true);
      const response = await GetAllMembers();
      setData(response);
      setloading(false);
    };
    useEffect(() => {
      fetchData();
    }, []);
  
    //  if (currentItems.length === 0) {
    //    return <h1>no data found</h1>
    //  }
    const UserData: any = localStorage.getItem('userData');
    const roles: any = JSON.parse(UserData);
  
    const handleEdit = (item: any) => {
      setSelectedMember(item);
      setShowModal(true);
    };
    const handleView = (item:any)=>{
      setSelectedMember(item);
      setViewModal(true);
    }
   
  return (
    <div className="h-[80vh]">
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
                placeholder="Search the members"
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
                           Member Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                          Location
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                          Mobile
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                        >
                        Email
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
                           <tr>
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
                               {item.name}
                             </td>
                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                             {item.loc_name}
                             </td>
                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                             {item.mobile}
                             </td>
                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                             {item.email}
                             </td>
                             <td className="size-px whitespace-nowrap">
                                   <div className="px-6 py-3">
                                     <span className={`py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium  ${item.status === "A" ? 'bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500':'text-red-800 dark:text-red-500 dark:bg-red-500/10'} `}>
                                      {item.status === "A" ?<FcApprove size={18} /> :<FcDisapprove size={18} />}
                                       {item.status === 'A'? 'Active':'InActive' }
                                     </span>
                                   </div>
                                 </td>
                                 {roles.userRole === 'Master' && (
                             <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                             <span className="inline-flex justify-center gap-2">
                                   <button
                                   type="button"
                                   aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-slide-down-animation-modal" data-hs-overlay="#hs-slide-down-animation-modal"
                                     onClick={() => handleEdit(item)}
                                     className="disabled:opacity-50 disabled:pointer-events-none"
                                   >
                                     <CiEdit size={23} />
                                   </button>
                                   <button onClick={()=>handleView(item)} className="hover:text-primary">
                                     <IoEyeOutline size={23} />
                                   </button>
                                 </span>
                             </td>
                                 )}
                           </tr>
                          ))} 
                       </tbody>
                      )}
             
            </table>
          </div>
          <Paginations currentPage={currentPage} handlePageChange={handlePageChange} data={data} itemperPage={itemsPerPage}/>
          <EditModal showModal={showModal} setShowModal={setShowModal} selectedMember= {selectedMember} onSave={fetchData}/>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default MemberView;
