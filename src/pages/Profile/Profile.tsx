
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Profile = () => {
    const userData:any = localStorage.getItem("userData");
    const user = JSON.parse(userData);

  return (
    <>
    <div className="h-[80vh]">
    <div className="flex items-center gap-x-3 ">
      <div className="shrink-0">
      
        <img className="shrink-0 size-16 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="Avatar"/>
      </div>
    
      <div className="grow">
        <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
         {user?.userFName} {user?.userLName}
        </h1>
        <p className="text-sm text-gray-600 dark:text-neutral-400">
         {user?.userRole }
        </p>
      </div>
    </div>
    {/* <!-- End Profile --> */}
    
    {/* <!-- About --> */}
    <div className="mt-8">
      <p className="text-sm text-gray-600 dark:text-neutral-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et mollitia nobis quo eum culpa fuga optio consequuntur eligendi reprehenderit qui molestiae quod vel velit repellat repellendus dignissimos ipsa, itaque libero.
        
      </p>
    
      <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam ad earum velit reiciendis commodi harum, cum blanditiis repellat. Voluptates rem laborum consequuntur. Hic veniam consequatur omnis, harum facere repellat?
      </p>
    
      <ul className="mt-5 flex flex-col gap-y-3">
        <li className="flex items-center gap-x-2.5">
          <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
            {user?.userEmail}
          </a>
        </li>
    
        <li className="flex items-center gap-x-2.5">
        <MdOutlinePhoneInTalk />
          <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
            {user?.userMobile}
          </a>
        </li>
    
       
      </ul>
    </div>
    </div>
    {/* <!-- End About --> */}
    </>)
}

export default Profile