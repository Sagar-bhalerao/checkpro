import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Breadcrumb = () => {
  const {title} = useSelector((state:RootState)=>state.breadCrumb)
  return (
<ol className="ms-3 flex items-center whitespace-nowrap">
        <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
          Application 
          <svg className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </li>
        <li className="text-sm font-semibold dark:text-blue-500 text-blue-800 truncate " aria-current="page">
          {title}
        </li>
      </ol>
  )
}

export default Breadcrumb;
