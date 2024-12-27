import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { GetLocations } from "../../../services/Auth.Apis";
import { GetAdminTransaction, GetQuestions, SubmitAdminFaq } from "../../../services/Transactions.Apis";
import { CiLocationOn } from "react-icons/ci";
import AdminQCard from "../../../components/AdminQCard";
import Loader from "../../../comman/Loader";
import { useDispatch } from "react-redux";
import { setTitle } from "../../../feature/BreadCrumbSlice";

const AdminFAQ = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [Questions, setQuestions] = useState([]);
  const [Answers, setAnswers] = useState({});
  const [locationID, setLocationID] = useState(0);
  const [show, setshow] = useState(false);
  const [adminData, setadminData] = useState([]);
  console.log(adminData);
  

  const User: any = localStorage.getItem("userData");
  const userData = JSON.parse(User);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await GetLocations();
      setData(response);
      setLoading(false);
    };
    fetchData();
  }, []);
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await GetAdminTransaction();
      setadminData(response)
    }
    fetchData();
  },[])

  const handleAnswerChange = (id: any, amount: any) => {
    setAnswers((prevAns) => ({ ...prevAns, [id]: { amount } }));
  };

  const handleClick = async (loc_id: number) => {
    setLocationID(loc_id);
    setshow(true)
    let body = {
      u_role: userData.userRole,
      week: "Regular",
    };
    setLoading(true);
    const response = await GetQuestions(body);
    setQuestions(response);
    setLoading(false);
  };
  const handleSubmit = async(e:FormEvent)=>{
    e.preventDefault();
    const formData = new FormData();
     Object.entries(Answers).forEach(([id,{Amount}]:any)=>
      formData.append(id,Amount)
    );
    
    let body = {
      u_id: userData.userId,
      loc_id: locationID,
      Answers:Answers     
    }
      setLoading(true);
   await SubmitAdminFaq(body);   
   setLoading(false);
   navigate('/master/viewprogress')        
  }    
  useEffect(()=>{
          dispatch(setTitle({title:"Admin FAQ"}))
       },[])
  return (
    <div className={`${Questions.length === 0 ? 'h-screen':'h-auto'}`}>
    {loading ? <Loader/>:(<div className="flex flex-wrap space-x-4 justify-center">
      {data?.map((item: any) => {
const isLocationFilled = adminData.some((adminItem:any) => adminItem.loc_id === item.id && adminItem.u_id !== null );

        return (
          <div key={item.id} className="mb-2">
            <div className="p-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden ">  
              <button      
                disabled={isLocationFilled}
                onClick={() => handleClick(item.id)}
                type="button"
                className={` ${isLocationFilled && " cursor-not-allowed text-green-600 bg-green-600  dark:bg-green-500 "} dark:hover:border-blue-500 border-2 hover:border-blue-700 transition-all duration-300 ease-in-out inline-flex items-center hover:translate-x-1 px-4 py-2 text-sm font-medium text-gray-800 dark:text-white bg-transparent border-gray-600 rounded-lg focus:z-10 focus:ring-2  `}
              >
                <CiLocationOn className="mr-1" />
                {item.name}
              </button>
            </div>
          </div>
        );
      })}
    </div>)}
    
    
     {loading ? <Loader/>:( 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 ">
        
      {Questions.map((item: any) => (
        <div className="p-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
        <AdminQCard key={item.id} item={item} onAnswerChange={handleAnswerChange}    />
        </div>
      ))}
    </div>)}
   
    {show && (
      <div className="mt-5 flex justify-end">
        <button onClick={handleSubmit} type="submit" className="bg-black px-6 py-3 text-white rounded-lg ">
         {loading ? "Loading... ":"Submit"} 
        </button>
      </div>
    )}
    </div>
  )
}

export default AdminFAQ;