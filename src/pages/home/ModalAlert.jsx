const ModalAlert = ({ onModalAlert, item }) => {
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-10 text-center">
      <div className="bg-white rounded w-10/12 md:w-1/3 h-max">
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="font-extrabold">상세보기</h3>
          <span onClick={onModalAlert}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </span>
        </div>
        <div className="text-gray-500 text-sm px-4 py-8">
          <p>거래명 : {item.name}</p>
          <p>가격 : {item.amount}원</p>
          <p>메모 :{item.memo}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalAlert;
