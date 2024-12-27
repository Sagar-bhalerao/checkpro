import { FC, useState } from "react";
import ImageViewModal from "./ImageViewModal";
import Loader from "../comman/Loader";
import { MdOutlineDownloadDone, MdOutlineSyncProblem } from "react-icons/md";
import QueryModal from "./QueryModal";
import Paginations from "../Helper/Pagination";

interface Data {  user_name: any;
  date: string;
  u_id: number;
  q_id: number;
  q_flag: string;
  description: string;
  question: string;
  location_name: string;
  image: any;
}
interface FilledDataProp {
  checkdata: Data[];  
  loading: boolean;
}

const Table: FC<FilledDataProp> = ({ checkdata, loading }) => {
  const [showModal, setShowModal] = useState(false);
  const [showQModal, setShowQModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const handleImageClick = (imageSrc: string) => {    
    
    if (imageSrc === null) {
      setShowModal(false);
      return;
    }
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredData = checkdata.filter(
    (item: any) =>
      item.q_id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.question.toString().toLowerCase().includes(searchTerm.toLowerCase) 
      
  );
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <>
      {/* <!-- Table Section --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
  {/* Card */}
  <div className="flex flex-col">
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
          {/* Header */}
          <div className=" sticky left-0 px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                Progress View
              </h2>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Raise Query, edit and more.
              </p>
            </div>

            <div>
              <div className="inline-flex gap-x-2 flex-wrap">
                <a
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-700 text-white hover:bg-green-800 focus:outline-none focus:bg-green-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  <MdOutlineDownloadDone size={17} />
                  Approve
                </a>

                <button
                  onClick={() => setShowQModal(true)}
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <MdOutlineSyncProblem size={17} />
                  Raise Query
                </button>
              </div>
            </div>
          </div>
          {/* End Header */}

          {/* Table */}
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead className="bg-gray-50 dark:bg-neutral-700">
                <tr>
                  <th scope="col" className="py-3 px-4 pe-0">
                    <div className="flex items-center h-5">
                      <input
                        onChange={(e) => setSearchTerm(e.target.value)}
                        id="hs-table-search-checkbox-all"
                        type="checkbox"
                        className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-700 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                      <label htmlFor="hs-table-search-checkbox-all" className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Q.NO.
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Question
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Description
                  </th>
                </tr>
              </thead>

              {loading ? (
                <Loader />
              ) : (
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {currentItems?.map((item) => (
                    <tr key={item.q_id}>
                      <td className="py-3 ps-4">
                        <div className="flex items-center h-5">
                          <input
                            id="hs-table-search-checkbox-1"
                            type="checkbox"
                            className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          />
                          <label htmlFor="hs-table-search-checkbox-1" className="sr-only">
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                        <div className="flex-shrink-0 w-20 h-20">
                          <img
                            src={item.image || ""}
                            onClick={() => handleImageClick(item.image)}
                            srcSet={`${item.image}?w=100 100w, ${item.image}?w=200 200w, ${item.image}?w=400 400w`}
                            alt="Task Not Completed"
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        {item.q_id}
                      </td>
                      <td className="px-auto py-4 whitespace-normal text-sm text-gray-800 dark:text-neutral-200 break-words">
  {item.question}
</td>

                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span
                            className={`py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium rounded-full 
                            ${item.q_flag === "Completed"
                              ? "bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500"
                              : item.q_flag === "InProgress"
                              ? "bg-teal-100 text-amber-400 dark:bg-amber-500/10 dark:text-amber-500"
                              : item.q_flag === "InCompleted"
                              ? "text-red-400 dark:bg-red-500/10 dark:text-red-500"
                              : ""}`}
                          >
                            <svg
                              className="size-2.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            {item.q_flag}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
          {/* End Table */}

          {/* Footer */}
          <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
            <div>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                <span className="font-semibold text-gray-800 dark:text-neutral-200">
                  {checkdata.length}
                </span>{" "}
                results
              </p>
            </div>
          </div>
          {/* End Footer */}
        </div>
      </div>
    </div>
    <div className="mt-2">
      <Paginations currentPage={currentPage} handlePageChange={handlePageChange} data={checkdata} itemperPage={itemsPerPage} />
    </div>
  </div>
  {/* End Card */}

  <ImageViewModal showModal={showModal} setShowModal={setShowModal} imageSrc={selectedImage} />
  <QueryModal showQModal={showQModal} setShowQModal={setShowQModal} />
</div>

    </>
  );
};

export default Table;
