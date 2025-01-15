import React, { useState, useEffect } from "react";

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const URL = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setTotalPages(Math.ceil(data.length / perPage));
      });
  }, []);

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

  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const itemToDisplay = posts.slice(startIndex, endIndex);
  return (
    <>
      {itemToDisplay && itemToDisplay.length > 0
        ? itemToDisplay.map((item, index) => {
            return (
              <h3 key={item.id}>
                {item.id} {item.title}
              </h3>
            );
          })
        : ""}
      <button onClick={handlePrevClick} disabled={prevDisabled}>Prev</button>
      {Array.from({ length: perPage }, (_, i) => {
        return (
          <button key={i} onClick={() => handlePageChange(i + 1)}
          disabled = {i+1 === currentPage}
          >
            {i + 1}
          </button>
        );
      })}
      <button onClick={handleNextClick} disabled={nextDisabled}>Next</button>
    </>
  );
};

export default Pagination;
