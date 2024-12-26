import { ChangeEvent } from "react";

const AdminQCard = ({item,onAnswerChange}:any) => {
    const handleAmountChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        onAnswerChange(item.id,value);
    }
  return (
    <div  className="flex flex-col dark:hover:border-blue-500 border-2 hover:border-blue-600 transition-all duration-300 ease-in-out bg-white shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
    <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
      <p className="mt-1 text-sm text-black dark:text-white">
        <span className="inline-flex font-semibold text-lg"> {item.seq_id}{" "}{item.question}</span>
      </p>
    </div>
    <div className="p-4 md:p-5">
      <form className="space-y-4">
      

        <div className="w-full">
          <label htmlFor={`input-label-with-helper-text`} className="block text-sm font-medium mb-2 dark:text-white">Amount <span className="text-red-600">*</span></label>
          <input  onChange={handleAmountChange}
            placeholder="Enter Amount"  type="number" id={`input-label-with-helper-text`} className="bg-slate-100 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"  />
        </div>           
        
      </form>
    </div>
  </div>
  )
}

export default AdminQCard;