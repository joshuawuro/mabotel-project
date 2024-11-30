const PopupMessage = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[--dark-gray] bg-opacity-50">
      <div className="bg-[white] rounded-lg shadow-lg p-6 w-96 text-center">
        <p className="text-lg font-medium">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-[--orange-light] hover:bg-[--orange] text-[white] font-medium py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupMessage;
