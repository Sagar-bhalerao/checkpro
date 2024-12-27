import React, { useState, useRef, useEffect } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
import { GetQuestions, GetQuestionStatus } from "../../../services/Transactions.Apis";
import { toast } from "react-toastify";
import axios from "axios";
import { FaRegCheckCircle } from "react-icons/fa";
import Loader from "../../../comman/Loader";
import QuestionsCard from "../../../components/QuestionsCard";
import NoData from '../../../images/FallBack.png';
import { setTitle } from "../../../feature/BreadCrumbSlice";
import { useDispatch } from "react-redux";

const ManagerFAQ = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const questionRefs: any = useRef([]);
  const [questionStatus, setQuestionStatus] = useState<any>([]);
  const [weekNumber, setWeekNumber] = useState(0);

  const userData: any = localStorage.getItem('userData');
  const name = JSON.parse(userData);
  const navigate = useNavigate();

  let week = '';

  const handleGetQuestions = async (flag: string) => {
    try {
      if (flag === 'Regular') {
        let body = {
          u_role: name.userRole,
          week: 'Regular',
        };
        setLoading(true);
        const response = await GetQuestions(body);
        setData(response);
        setLoading(false);
        questionRefs.current = response.map(
          (_: any, index: any) =>
            questionRefs.current[index] || React.createRef(),
        );
      } else {
        let body = {
          u_role: name.userRole,
          week: week,
        };
        setLoading(true);
        const response = await GetQuestions(body);
        setData(response);
        setLoading(false);
      }
    } catch (error: any) {
     toast.error(error.response.data.message);
    }
  };



  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await GetQuestions();
  //     setData(response);
  //     questionRefs.current = response.map(
  //       (_: any, i: any) => questionRefs.current[i] || React.createRef(),
  //     );
  //   };
  //   fetchData();
  // }, []);

  const handleAnswerChange = (
    id: any,
    status: any,
    description: any,
    image: any,
  ) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: { status, description, image },
    }));
  };

  const handleQuestionClick = (index: any) => {
    questionRefs?.current[index - 1].current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    Object.entries(answers).forEach(
      ([id, { status, description, image }]: any) => {
        formData.append('status', status);
        formData.append('description', description);
        formData.append('u_id', name.userId);
        formData.append('q_id', id);
        if (image) {
          if (Array.isArray(image)) {
            image.forEach((file) => {
              formData.append('images', file);
            });
          } else {
            formData.append('images', image);
          }
        } else {
          formData.append('images', 'null');
        }
      },
    );

    try {
      const response = await axios.post(
        'http://192.168.179.23:5172/transactions',
        formData,
      );
      if (response.status === 200) {
        toast.success(response.data.message);
        navigate('/');
      }
    } catch (error: any) {
      toast.error(
        error.response
          ? error.response.data.message
          : 'Error submitting transaction',
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await GetQuestionStatus(name.userId);
      setQuestionStatus(response);
    };
    fetchData();
  }, []);

  // let status: string[] = questionStatus.map(({ q_id }: any) => q_id);
  

  // fweek
  // const getWeekNumber = (date: any) => {
  //   const currentDate: any = new Date(date);
  //   const startOfMonth: any = new Date(
  //     currentDate.getFullYear(),
  //     currentDate.getMonth(),
  //     1,
  //   );
  //   const days = Math.floor(
  //     (currentDate - startOfMonth) / (24 * 60 * 60 * 1000),
  //   );
  //   const weekNumber = Math.ceil((days + startOfMonth.getDay() + 1) / 7);
  //   return weekNumber;
  // };

  // Example usage
  // const currentDate = new Date().toISOString().slice(0, 10);
  // const weekNum: any = getWeekNumber(currentDate);

  if (data === undefined || data === null) {
    return (
      <div className="flex-row justify-center items-center font-bold text-2xl">
        <Link
          to={'/master/viewprogress'}
          className="inline-flex items-center h-3 justify-center gap-2.5 rounded-full bg-bodydark  py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <span>
            <IoArrowBackSharp size={20} />
          </span>
          Go Back
        </Link>
        <button className="inline-flex">Go Back</button>
        <div className="flex justify-center animate-pulse mt-3">
          <img
            src={NoData}
            className=" h-[400px] w-[400px] flex justify-center rounded-2xl"
          />
        </div>
      </div>
    );
  }


  useEffect(() => {
    const getWeekNumber = (date: any) => {
      const currentDate: any = new Date(date);
      const startOfMonth: any = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1,
      );
      const days = Math.floor(
        (currentDate - startOfMonth) / (24 * 60 * 60 * 1000),
      );
      const weekNumber = Math.ceil((days + startOfMonth.getDay() + 1) / 7);
      return weekNumber;
    };

    const currentDate = new Date().toISOString().slice(0, 10);
    const weekNum: any = getWeekNumber(currentDate);
    setWeekNumber(weekNum);
  }, []);

  if (weekNumber === 1) {
    week = 'First';
  } else if (weekNumber === 2) {
    week = 'Second';
  } else if (weekNumber === 3) {
    week = 'Third';
  } else {
    week = 'regular';
  }

  useEffect(()=>{
        dispatch(setTitle({title:"Manager FAQ"}))
     },[])
  return (
    <>
    <div className={`${data.length === 0 ? 'h-screen':'h-auto'}`}>
      {/* toggle the week  */}
      <h1 className="flex justify-center mb-2  font-semibold">
        Select Question Type :-
      </h1>
      <div className="flex justify-center mb-3">
        <button
          onClick={() => handleGetQuestions('Regular')}
          className={`h-7 mr-2 inline-flex items-center justify-center gap-2.5 rounded-lg border text-primary border-primary py-4 px-5 text-center font-medium  hover:bg-opacity-90 lg:px-8 xl:px-10`}
        >
          <span></span>
          Regular
        </button>
        <button
          onClick={() => handleGetQuestions('week')}
          className=" h-7  inline-flex items-center justify-center gap-2.5 rounded-lg border  border-primary py-4 px-5 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <span></span>
          {week} Week
        </button>
      </div>
       
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-wrap mb-4 gap-1">
            {data?.map((item: any, index) => {
              const status: any = questionStatus.find((q: any) => q.q_id === item.id)?.q_flag;             
              
              return (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(index)}
                  className={`py-1 px-2  inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 focus:outline-none focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300"
              ${
                status === 'InCompleted'
                  ? 'bg-red-600'
                  : status === 'InProgress'
                  ? 'bg-amber-500'
                  : status === 'Completed'
                  ? 'bg-green-600'
                  : 'bg-body'
              } 
               rounded`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data?.map((item: any, index: any) => {
              const status:any = questionStatus.find((q:any)=> q.q_id === item.id)?.q_flag
              return (
                <div
                  key={item.id}
                  ref={questionRefs.current[index]}
                  className={` ${status === "Completed" ? "cursor-not-allowed opacity-50" : "cursor-pointer"} p-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden `}
                >
                  <QuestionsCard
                  statusQ = {status}
                    Qstatus={questionStatus}
                    id={item.id}
                    index={index + 1}
                    question={item.question}
                    onAnswerChange={handleAnswerChange}
                  />
                </div>
              );
            })}

            {data?.length > 0 && (
              <div className="">
                <button
                  className="rounded-lg inline-flex items-center justify-center gap-2.5 bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                  onClick={handleSubmit}
                >
                  <span>
                    <FaRegCheckCircle size={20} />
                  </span>
                  Submit
                </button>
              </div>
            )}
          </div>
        </>
      )}
</div>
    </>
  )
}

export default ManagerFAQ;
