import React from "react";

export default function Pagination({ nPerPage, nTotal, currPage, paginate }) {
  // Init page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(nTotal / nPerPage); i++) {
    pageNumbers.push(i);
  }

  // Return pagination
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => {
          return (
            <li className={pageNumber == currPage ? "waves-effect active" : "waves-effect"}>
              <a href="#!" onClick={() => paginate(pageNumber)}>
                {pageNumber}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
