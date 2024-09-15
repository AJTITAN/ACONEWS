import React from "react";
const Pagination = ({ currentPage, totalPages, setPage }) => {
    console.log("Current Page:", currentPage, "Total Pages:", totalPages);
  const handleNextPage = () => {
    if (currentPage < totalPages) setPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setPage(currentPage - 1);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        className={`mr-4 px-4 py-2 text-sm ${
          currentPage === 1 ? "text-gray-500 cursor-not-allowed" : "text-blue-600"
        }`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className={`ml-4 px-4 py-2 text-sm ${
          currentPage === totalPages ? "text-gray-500 cursor-not-allowed" : "text-blue-600"
        }`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
