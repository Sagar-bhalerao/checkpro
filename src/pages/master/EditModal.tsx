import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { BsPersonGear } from "react-icons/bs";
import { GetLocations } from "../../services/Auth.Apis";
import { EditMember } from "../../services/MasterApis";

const EditModal = ({showModal,setShowModal,  selectedMember, onSave}:any) => {
    const [Inputs, setInputs] = useState({
        name: '',
        email: '',
        status: '',
        location: '',
      });
      const [Locations, SetLocations] = useState([]);
      const [loading, setloading] = useState(false);
      //api req for get locations
      useEffect(() => {
        const fetchData = async () => {
          const response = await GetLocations();
          SetLocations(response);
        };
        fetchData();
      }, []);
    
      //handling user inputs
      const handleInputs = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
      ) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
      };
    
      const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        let body = {
          id: selectedMember.id,
          name: Inputs.name,
          email: Inputs.email,
          status: Inputs.status,
          loc_id: Inputs.location,
        };
        setloading(true);
        await EditMember(body);
        setTimeout(() => {
          setloading(false);
          onSave();
          setShowModal(false);
        }, 500);
      };
    
      if (!showModal) return null;
    if (!showModal) return null;  
  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
  <div className="bg-white dark:bg-neutral-800 p-4 w-full sm:w-11/12 md:w-3/4 lg:w-1/3 xl:w-1/4 2xl:w-1/4 rounded-md shadow-lg">
    <h3 id="hs-slide-down-animation-modal-label" className="font-bold text-gray-800 dark:text-white flex gap-1">
      Edit Member <BsPersonGear size={20} className="mt-[2px]" />
    </h3>
    <div className="p-4 overflow-y-auto">
      <form onSubmit={handleSubmit}>
        <div className="w-full mb-3">
          <label htmlFor={`input-label-with-helper-text`} className="block text-sm font-medium mb-2 dark:text-white">
            Member Name <span className="text-red-600">*</span>
          </label>
          <input
            defaultValue={selectedMember.name}
            onChange={handleInputs}
            name="name"
            type="text"
            id={`input-label-with-helper-text`}
            className="bg-slate-100 py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-400 dark:focus:ring-neutral-600"
            placeholder="Member Name"
          />
        </div>

        <div className="w-full mb-3">
          <label htmlFor={`input-label-with-helper-text`} className="block text-sm font-medium mb-2 dark:text-white">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            defaultValue={selectedMember.email}
            onChange={handleInputs}
            name="email"
            type="email"
            id={`input-label-with-helper-text`}
            className="bg-slate-100 py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-400 dark:focus:ring-neutral-600"
            placeholder="Member Email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor={`hs-select-label`} className="block text-sm font-medium mb-2 dark:text-white">
            Status <span className="text-red-600">*</span>
          </label>
          <select
            defaultValue={selectedMember.status}
            onChange={handleInputs}
            name="status"
            id={`hs-select-label`}
            className="bg-slate-100 py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-400 dark:focus:ring-neutral-600"
          >
            <option>Select The Status</option>
            <option>Active</option>
            <option>InActive</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor={`hs-select-label`} className="block text-sm font-medium mb-2 dark:text-white">
            Location <span className="text-red-600">*</span>
          </label>
          <select
            defaultValue={selectedMember.loc_name}
            onChange={handleInputs}
            name="location"
            id={`hs-select-label`}
            className="bg-slate-100 py-2 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-400 dark:focus:ring-neutral-600"
          >
            {Locations?.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between mt-4 space-x-2">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-800 text-gray-900 hover:border-gray-500 hover:text-gray-500 focus:outline-none focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-white dark:hover:border-neutral-300"
          >
            Close
          </button>

          <button
            type="submit"
            className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-300 text-teal-800 hover:bg-teal-200 focus:outline-none focus:bg-teal-200 disabled:opacity-50 disabled:pointer-events-none dark:text-teal-500 dark:bg-teal-800/30 dark:hover:bg-teal-800/20 dark:focus:bg-teal-800/20"
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default EditModal;
