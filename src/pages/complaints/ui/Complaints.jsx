import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { complaintArticle, deleteComplaint } from "../api/request";
import { getComplaintMaxPage, getComplaintPage, getComplaints } from "../model/complaintSlice";
import { PathConstants } from "../../../app/constants/pathConstants";
import { useNavigate } from "react-router";
import Pagination from "../../../shared/pagination/ui/Pagination";

function Complaints() {
    const list  = useSelector(getComplaints)
    const page = useSelector(getComplaintPage)
    const maxPage = useSelector(getComplaintMaxPage)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const makeRequest = (page) => {
        dispatch(complaintArticle({
            page:1
        }))
      };
    useEffect(()=>{
        makeRequest(1)
    },[])

    if(list.length==0){
        return (
            <div className="d-flex justify-content-center mt-4">
                <span>Список жалоб пуст</span>
            </div>
        )
    }

 
  
    const handleFetchPrev = (page, status) => {
      makeRequest(page - 1);
    };
    const handleFetchCurrent = (page, status) => {
      makeRequest(page);
    };
    const handleFetchNext = (page, status) => {
      makeRequest(page + 1);
    };

    const handleDelete=(id)=>{
        dispatch(deleteComplaint({
            id:id
        }))
    }

  return (
    <div className="container mt-4">
      <div style={{ maxWidth: '500px',margin:"10px auto" }}>
        {list.map((complaint) => (
          <div key={complaint.id} className="mb-3 mt-2 border p-3">
            <div className="d-flex justify-content-between">
              <h6 className="text-muted">{new Date(complaint.date).toLocaleDateString()}</h6>
              <h6 className="text-muted">Статья</h6>
            </div>

            <h5>{complaint.title || 'Название статьи'}</h5>
            <h6>{complaint.userDto.login || 'Пользователь'}</h6>

            <div className="d-flex justify-content-between">
              <button
                variant="primary"
                  className="btn btn-primary"
                onClick={() =>
                  navigate(`${PathConstants.COMPLAINT}/${complaint.id}`)
                }
              >
                Открыть
              </button>

              <button
                variant="danger"
                  className="btn btn-danger"
                onClick={() => handleDelete(complaint.id)}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        handleFetchNext={handleFetchNext}
        handleFetchPrev={handleFetchPrev}
        handleFetchCurrent={handleFetchCurrent}
        page={page}
        maxPage={maxPage}
        status={""}
    />
    </div>
  );
}

export default Complaints;
