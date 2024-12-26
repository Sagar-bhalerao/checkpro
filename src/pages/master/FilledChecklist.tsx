import { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";
import { GetFilledChecklist } from "../../services/MasterApis";
import Nodata from "../../images/FallBack.png";
import Table from "../../components/Table";

const FilledChecklist = () => {
  const { loc_id } = useParams();
  let currentDate = new Date().toISOString().slice(0, 10);
  let [year, month, day] = currentDate.split("-");
  let formattedDate = `${day}-${month}-${year}`;

  const [date, setDate] = useState(formattedDate);
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  
  if (data === undefined || null) {
    return (
      <div className="flex-row justify-center items-center font-bold text-2xl">
        <Link
          to={"/"}
          className="inline-flex items-center h-3 justify-center gap-2.5 rounded-full bg-bodydark  py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <span>
            <IoArrowBackSharp size={20} />
          </span>
          Go Back
        </Link>
        {/* <button className="inline-flex">Go Back</button> */}
        <div className="flex justify-center animate-pulse mt-3">
          <img
            src={Nodata}
            className=" h-[400px] w-[400px] flex justify-center rounded-2xl"
          />
        </div>
      </div>
    );
  }
  const handleSubmit = async () => {
    let body = {
      loc_id: loc_id,
      date: date,
    };
    setloading(true);
    const response = await GetFilledChecklist(body);
    setData(response);
    setloading(false);
  };
  console.log(data);
 
  return (
    <>

<div className="p-4">
        
  <div className="flex flex-col md:flex-row justify-between gap-4">
    <div className="w-full md:w-1/2 lg:w-1/3">
      <label
        htmlFor="input-label"
        className="block text-sm font-medium mb-2 dark:text-white"
      >
        Select Date <span className="text-red-600">*</span>
      </label>
      <input
      value={date}
      type="date"
      onChange={(e) => setDate(e.target.value)}        
        id="input-label"
        className="py-3 px-4 block w-full bg-slate-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        placeholder="Select Date"
      />
    </div>
    <div className="w-full lg:mt-6 md:w-auto">
      <button
        type="button"
        disabled={date.length === 0}
        onClick={handleSubmit}
        className="py-3 px-4 justify-center  inline-flex w-full md:w-auto text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:bg-blue-800/30 dark:hover:bg-blue-800/20 dark:focus:bg-blue-800/20"
      >
        {loading ?  <span className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
    <span className="sr-only">Loading...</span>
  </span> : 'Submit'}
      </button>
    </div>
  </div>
  {data?.length === 0 ? (
        <h1 className="flex justify-center font-semibold text-meta-1 text-xl animate-bounce mt-5">
         Select Date first!
        </h1>
      ) : (
        <Table         
              checkdata={data}
              loading={loading}     />
      )}
      
</div>


</>
  );
};

export default FilledChecklist;
