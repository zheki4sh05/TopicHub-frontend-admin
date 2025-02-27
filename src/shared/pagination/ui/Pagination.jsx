function Pagination({
    handleFetchPrev,
    handleFetchCurrent,
    handleFetchNext,
    page,
    maxPage,
    status
}) {

    const prevHandle=()=>{
        handleFetchPrev(page-1, status)
    }
    const nextHandle=()=>{
        handleFetchNext(page+1, status)
    }
    const handleCurrent=()=>{
        handleFetchCurrent(page, status)
    }

    return ( 

        <nav aria-label="Пагинация">
        <ul className="pagination">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={prevHandle}>
              Назад
            </button>
          </li>
          {Array.from({ length: maxPage }, (_, i) => i + 1).map((i) => (
            <li key={i} className={`page-item ${i === page ? "active" : ""}`}>
              <button className="page-link" onClick={handleCurrent}>
                {i}
              </button>
            </li>
          ))}
          <li className={`page-item ${page === maxPage ? "disabled" : ""}`}>
            <button className="page-link" onClick={nextHandle}>
              Вперед
            </button>
          </li>
        </ul>
      </nav>

     );
}

export default Pagination;