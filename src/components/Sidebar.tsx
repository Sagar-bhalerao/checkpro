
import { FaRegEdit, FaRegQuestionCircle } from 'react-icons/fa';
import { GrTransaction } from 'react-icons/gr';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdGroups, MdLeaderboard } from 'react-icons/md';
import { TbProgressCheck } from 'react-icons/tb';
import { Link, NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <div
        id="hs-application-sidebar"
        className="hs-overlay  [--auto-close:lg]
    hs-overlay-open:translate-x-0
    -translate-x-full transition-all duration-300 transform
    w-[260px] h-full
    hidden
    fixed inset-y-0 start-0 z-[60]
    bg-white border-e border-gray-200
    lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
    dark:bg-neutral-800 dark:border-neutral-700"
        role="dialog"
        tabIndex={-1}
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full">
          <div className="px-6 pt-4">
            {/* <!-- Logo --> */}
            <Link
              className="flex-none text-black rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              to="/"              
            >
                <p className="inline-block ml-4  text-2xl font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                  CheckPro
                    </p>
            </Link>
            {/* <!-- End Logo --> */}
          </div>

          {/* <!-- Content --> */}
          <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <nav
              className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open
            >
              <ul className="flex flex-col space-y-1">
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-white"
                    href="#"
                  >
                    <svg
                      className="shrink-0 size-4"
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
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Dashboard
                  </a>
                </li>

                         {/* Master */}
                <li className="hs-accordion" id="master-accordion">
                  <button
                    type="button"
                    className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                    aria-expanded="true"
                    aria-controls="account-accordion-child"
                  >
                 <MdLeaderboard />
                   Master
                    <svg
                      className="hs-accordion-active:block ms-auto hidden size-4"
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
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:hidden ms-auto block size-4"
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
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    id="master-accordion-child"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="account-accordion"
                  >
                    <ul className="ps-8 pt-1 space-y-1">
                      <li>
                        <NavLink
                           className={({isActive})=>`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300
                           ${isActive ? "font-bold dark:text-blue-700 dark:bg-neutral-700  !text-blue-500"
                                      : "hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300"
                           }
                          `}
                          to="/master/questionview"
                        >
                        <FaRegEdit /> FAQ
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({isActive})=>`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300
                          ${isActive ? "font-bold dark:text-blue-700 dark:bg-neutral-700  !text-blue-500"
                                     : "hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300"
                          }
                         `}
                         to="/master/memberview"
                        >                                                 
                          <MdGroups/> Members
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({isActive})=>`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300
                          ${isActive ? "font-bold dark:text-blue-700 dark:bg-neutral-700  !text-blue-500"
                                     : "hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300"
                          }
                         `}
                          to="/master/viewprogress"
                        >                                                                                        
                        <TbProgressCheck size={20} /> View Progress
                        </NavLink>
                      </li>
                    </ul>
                  </div>                  
                </li>
                {/* master end here */}

                {/* Transaction */}

                <li className="hs-accordion" id="transaction-accordion">
                  <button
                    type="button"
                    className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                    aria-expanded="true"
                    aria-controls="projects-accordion-child"
                  >
                      <GrTransaction /> Transactions                    
                    <svg
                      className="hs-accordion-active:block ms-auto hidden size-4"
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
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:hidden ms-auto block size-4"
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
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    id="transaction-accordion-child"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="projects-accordion"
                  >
                    <ul className="ps-8 pt-1 space-y-1">
                      <li>
                        <NavLink
                          className={({isActive})=>`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300
                          ${isActive ? "font-bold dark:text-blue-700 dark:bg-neutral-700  !text-blue-500"
                                     : "hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300"
                          }
                         `}
                          to= "/transaction/managerfaq"
                        >
                           
                      <FaRegQuestionCircle/> Manager FAQ
                              
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className={({isActive})=>`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300
                          ${isActive ? "font-bold dark:text-blue-700 dark:bg-neutral-700  !text-blue-500"
                                     : "hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300"
                          }
                         `}
                          to="/transaction/adminfaq"
                        >
                        
                          <FaRegQuestionCircle /> Admin FAQ
                        </NavLink>
                      </li>
                     
                    </ul>
                  </div>
                </li>

                {/* transation End Here */}
                  

                  {/* profile */}
                <li>
                  <NavLink
                  to="/profile"
                    className={({isActive})=>`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300
                     ${isActive ? "font-bold dark:text-blue-700 dark:bg-neutral-700  !text-blue-500"
                                : "hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300"
                     }
                    `}
                   
                  >
                       <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
                      fill=""
                    />
                    <path
                      d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z"
                      fill=""
                    />
                  </svg>
                  Profile
                  </NavLink>
                </li>

               {/* logout */}
                <li className=''>
                  <NavLink
                  to="/settings"
                    className={({isActive})=>`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300
                     ${isActive ? "font-bold dark:text-blue-700 dark:bg-neutral-700  !text-blue-500"
                                : "hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300"
                     }
                    `}
                   
                  >
                  <IoSettingsOutline size={18} />
                Settings
                  </NavLink>
                </li>
                {/* logout end here */}

              
              </ul>
            </nav>
          </div>
          {/* <!-- End Content --> */}
        </div>
      </div>
      {/* <!-- End Sidebar --> */}
    </>
  )
}

export default Sidebar;