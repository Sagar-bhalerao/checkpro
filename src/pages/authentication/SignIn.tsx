import { FormEvent, useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { storeUserData } from "../../feature/authSlice";
import { Login } from "../../services/Auth.Apis";

const SignIn = () => {
  const dispatch = useDispatch();  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const navigate = useNavigate();


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let body = {
      email: email,
      password: password,
    };
    const {status,data}:any = await Login(body);
    if (status === 200) {
      navigate("/");
        dispatch(storeUserData({data:data}));
        
    }
  };
  const [showPass, setShowPass] = useState(false);

  const handletogglePass = () => {
    setShowPass(!showPass);
  }


  
  return (
    <>
      {/* <!-- Hero --> */}
      <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="inline-block text-5xl font-semibold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                Welcome to Malpani Sargam Mart
              </p>

              {/* <!-- Title --> */}
              <div className="mt-4 md:mb-12 max-w-2xl">
                <h1 className="mb-4 font-semibold text-gray-800 text-2xl lg:text-2xl dark:text-neutral-200">
                  Your Trusted Destination for Quality Groceries and Daily Essentials
                </h1>
                <p className="text-gray-600 dark:text-neutral-400">
                  At Malpani Sargam Mart, we are committed to providing our customers with a superior shopping experience. With multiple locations across Nashik, Kopargaon, Pathardi, and Rahuri, we offer a wide range of high-quality products to meet all your household needs.
                </p>
              </div>
              {/* <!-- End Title --> */}

            </div>
            {/* <!-- End Col --> */}

            <div>
              {/* <!-- Form --> */}
              <form onSubmit={handleSubmit}>
                <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                  {/* <!-- Card --> */}
                  <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                    <div className="text-center">
                      <h1 className="inline-block text-2xl font-semibold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">Welcome back! Please log in to continue.
                      </h1>
                      <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                        Already have an account?
                        <Link className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" to="/auth/sign-up">
                          Sign in here
                        </Link>
                      </p>
                    </div>

                    <div className="mt-5">
                      <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                        <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                          <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"></path>
                          <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"></path>
                          <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"></path>
                          <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"></path>
                        </svg>
                        Sign up with Google
                      </button>

                      <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-700 dark:after:border-neutral-700">Or</div>

                      {/* <!-- Grid --> */}
                      <div className="grid grid-cols-2 gap-4">
                        {/* <!-- Input Group --> */}
                        <div className="col-span-full">
                          {/* <!-- Floating Input --> */}
                          <label
                            htmlFor="password"
                            className="block text-sm text-gray-700 dark:text-white mb-1"
                          >
                            Email <span className="text-red-600 text-xl">*</span>
                          </label>
                          <div className="relative">
                            <input onChange={(e)=>setEmail(e.target.value)} type="text" id="email" placeholder="Enter Email" className="peer p-4 block w-full border-gray-200 rounded-lg text-sm  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 bg-slate-100" />
                          </div>
                          {/* <!-- End Floating Input --> */}
                        </div>
                        {/* <!-- End Input Group --> */}
                        {/* <!-- Input Group --> */}
                        <div className="relative col-span-full">
                          {/* <!-- Floating Input --> */}
                          <div className="relative w-full">
                            <label
                              htmlFor="password"
                              className="block text-sm text-gray-700 dark:text-white mb-1"
                            >
                              Password <span className="text-red-600 text-xl">*</span>
                            </label>
                            <div className="relative">
                              <input
                                type={showPass ? "text" : "password"}
                                onChange={(e)=>setPassword(e.target.value)}
                                id="password"
                                className="peer bg-slate-100 p-4 block w-full border-gray-200 rounded-lg text-sm  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600 bg-slate-"
                                placeholder="Enter Password"
                              />
                              <button
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 dark:text-neutral-400"
                                type="button"
                                onClick={handletogglePass}
                              >
                                {!showPass ? <FiEye /> : <FiEyeOff />}
                              </button>
                            </div>
                          </div>
                          {/* <!-- End Floating Input --> */}

                        </div>
                        {/* <!-- End Input Group --> */}


                      </div>
                      {/* <!-- End Grid --> */}

                      {/* <!-- Checkbox --> */}
                      <div className="mt-5 flex items-center">
                        <div className="flex">
                          <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                        </div>
                        <div className="ms-3">
                          <label htmlFor="remember-me" className="text-sm dark:text-white">I accept the <a className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="#">Terms and Conditions</a></label>
                        </div>
                      </div>
                      {/* <!-- End Checkbox --> */}

                      <div className="mt-5">
                        <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Log In</button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Card --> */}
                </div>
              </form>
              {/* <!-- End Form --> */}
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}


        </div>
        {/* <!-- End Clients Section --> */}
      </div>
      {/* <!-- End Hero --> */}
    </>
  )
}

export default SignIn