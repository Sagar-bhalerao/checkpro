import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const LocationCard = ({item}:any) => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/master/filledchecklist/${item.id}`)}  className=" border-2 h-16 dark:hover:border-blue-500 hover:border-blue-600 transition-all duration-300 ease-in-out flex flex-col bg-white  shadow-xl rounded-xl dark:bg-neutral-800 dark:border-neutral-700 ">
    <div className="p-4 md:p-5">
      <div className="flex items-center gap-x-2 justify-center">
        <p><MdOutlineShoppingCart /></p>
        <p className="text-xs uppercase tracking-wide text-black dark:text-white ">
          {item.name}
        </p>
      </div>         
      
    </div>
  </div>
  )
}

export default LocationCard;
