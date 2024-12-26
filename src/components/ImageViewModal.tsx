interface ImageViewProp {
    imageSrc: string;
    showModal: boolean;
    setShowModal: any;
  }
const ImageViewModal = ({ showModal, setShowModal, imageSrc}:ImageViewProp) => { 
    if (!showModal) return null;  

  return (

<>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white dark:bg-neutral-800 p-4 rounded-md shadow-lg">
      
          <img
          src={imageSrc}
          alt="Large view"
          loading="lazy"            
          className="h-[500px] w-[500px] rounded-xl"
        />      
      
      <button
        onClick={() => setShowModal(false)}
        className="py-2 mt-1 float-end hover:bg-neutral-600 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-800 text-gray-900 hover:border-gray-500 hover:text-gray-500 focus:outline-none focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-white dark:hover:border-neutral-300"
      >
        Close
      </button>
    </div>
  </div>
  </> )
}

export default ImageViewModal
