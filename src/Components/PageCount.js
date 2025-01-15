import React from "react";

export default function PageCount({
  perPage,
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <button onClick={handlePrevClick} disabled={prevDisabled}>
        Prev
      </button>
      {Array.from({ length: perPage }, (_, i) => {
        return (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            disabled={i + 1 === currentPage}
          >
            {i + 1}
          </button>
        );
      })}
      <button onClick={handleNextClick} disabled={nextDisabled}>
        Next
      </button>
    </div>
  );
}
