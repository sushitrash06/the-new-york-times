import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {
  return (
    <div className="flex justify-between p-5">
      <div>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
      </div>
      <div className="flex justify-between">
        <button
          className="text-white p-2 mx-3  rounded-md disabled:bg-slate-300 disabled:text-gray-600 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
          onClick={onPrevPage}
          disabled={currentPage === 1}
        >
          <GrPrevious />
        </button>
        <button
          className="text-white p-2  rounded-md bg-violet-500 disabled:bg-slate-300 disabled:text-gray-600 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
          onClick={onNextPage}
          disabled={currentPage === totalPages}
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
