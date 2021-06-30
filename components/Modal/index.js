const Modal = ({ show, toggle }) => {
  if (!show) {
    return null;
  }
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-gray-500 p-44"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7" }}
    >
      <div className="mx-auto relative w-3/4 h-1/2 flex flex-col justify-center fixed border bg-white border-gray-300 rounded-lg shadow-lg">
        <div className="h-16 p-4 border-b border-gray-200">Modal Title</div>
        <div className="flex-1 p-8">
          <div>Body</div>
        </div>
        <div className="h-16 p-8 border-t border-gray-200 flex justify-end items-center gap-2">
          <button
            className="bg-red-600 hover:bg-red-800 text-white px-2 py-1 rounded-sm shadow-sm"
            onClick={() => toggle(false)}
          >
            CANCEL
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white px-2 py-1 rounded-sm shadow-sm"
            onClick={() => console.log("Save")}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
