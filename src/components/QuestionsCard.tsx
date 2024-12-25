import { FC, useState } from "react";
import imageCompression from 'browser-image-compression';

interface QuestionProp {
    id: string;
    question: string;
    Qstatus: any;
    index: number;
    onAnswerChange: (
      id: string,
      status: string,
      description: string,
      image?: File | null,
    ) => void;
  }
const QuestionsCard: FC<QuestionProp> = ({ id, question, onAnswerChange, Qstatus, index}) => {
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
  
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setStatus(value);
      onAnswerChange(id, value, description);
    };
  
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      setDescription(value);
      onAnswerChange(id, status, value);
    };
  
    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files ? e.target.files[0] : null;
      if (file) {
        setIsLoading(true);
        const compressedFile = await imageCompression(file, {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        });
        setImage(compressedFile);
        await onAnswerChange(id, status, description, compressedFile);
        setIsLoading(false);
      }
    };
  return (
    <div className="flex flex-col border-2 hover:font-semibold hover:border-blue-500 duration-300 dark:hover:border-blue-600 bg-red-100  shadow-sm rounded-xl dark:bg-red-100 dark:border-red-100 dark:shadow-red-700/70">
    <div className="p-4 md:p-5">
    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-900">
    {index}. {''}
    {question}
      </h3>
      <form action="#">
          <div className="p-6.5">
            <div className="mb-2">
              <label className="mb-2.5 block text-black dark:text-white">
                Status
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input ">
                <select
                  className="h-12 relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  value={status}
                  onChange={handleStatusChange}
                >
                  <option value="">Select Status</option>
                  <option className="text-success" value="Completed">
                    Completed
                  </option>
                  <option className="text-danger" value="InCompleted">
                    InCompleted
                  </option>
                  <option className="text-warning" value="InProgress">
                    InProgress
                  </option>
                </select>
                <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                        fill=""
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-2">
              <label className="mb-2.5 block text-black dark:text-white">
                Description
              </label>
              <textarea
                rows={1}
                placeholder="Type your message"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>

            {status === 'Completed' && (
              <div>
                <label className="mb-3 block text-black dark:text-white ">
                  Attach Image
                </label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  capture="environment"            
                  className="h-12 w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                />
                {isLoading && <div>Loading...</div>}
              </div>
            )}
          </div>
        </form>
    </div>
  </div>
  )
}

export default QuestionsCard;
