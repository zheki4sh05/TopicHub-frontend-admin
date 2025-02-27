import { useDispatch, useSelector } from "react-redux";
import { getComplaints } from "../../complaints/model/complaintSlice";
import { useNavigate, useParams } from "react-router";
import { PathConstants } from "../../../app/constants/pathConstants";
import { useEffect } from "react";
import { getFindArticleStatus, manageArticleFindStatus } from "../../articles/model/articleSlice";
import statusTypes from "../../../app/util/statusTypes";
import { findArticle } from "../../articles/api/request";
import Pagination from './../../../shared/pagination/ui/Pagination';
import { deleteComplaint } from "../../complaints/api/request";

function Complaint() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const complaint = useSelector(getComplaints).find(item=>item.id==id)
    const navigate = useNavigate()
 const findStatus = useSelector(getFindArticleStatus)
    const handleDelete=()=>{
        dispatch(deleteComplaint({id:id}))
        navigate(PathConstants.COMPLAINTS)
    }

    const handleOpenArticle=(id)=>{
        dispatch(findArticle({ articleId: id }));
        
      }

     useEffect(()=>{
    if(findStatus==statusTypes.succeeded){
      dispatch(manageArticleFindStatus(statusTypes.idle))
      
      navigate(`${PathConstants.ARTICLE}/${complaint.targetId}/status`)
    }
  },[findStatus])

  

    return ( 

        <div className="container">
<button className="btn btn-primary mt-2" onClick={(event)=>navigate(-1)}>Назад</button>
<div className="mt-4">
      <div className="border p-3">
        <div className="mb-3">
          <h4>Жалоба</h4>
        </div>

        <div className="mb-3">
          <h5>{complaint.title || 'Название жалобы'}</h5>
        </div>

        <div className="mb-3">
          <strong>ID:</strong> {complaint.id || '12345'}
        </div>
      
        <div className="mb-3">
          <strong>Дата:</strong> {new Date(complaint.date).toLocaleDateString() || '01-01-2025'}
        </div>
        <div className="mb-3">
          <strong>Целевой ID:</strong> {complaint.targetId || 'A'}
        </div>
        <div className="mb-3">
          <strong>Описание:</strong> {complaint.body || 'Содержимое жалобы'}
        </div>
        <div className="mb-3">
          <strong>Логин пользователя:</strong> {complaint.userDto?.login || 'Имя пользователя'}
        </div>
        <div className="mb-3">
          <strong>Email пользователя:</strong> {complaint.userDto?.email || 'Имя пользователя'}
        </div>

        <div className="d-flex justify-content-between">
          <button
            variant="primary"
            className="btn btn-primary"
            style={{ marginRight: '10px' }}
            onClick={() =>
              
            
                handleOpenArticle(complaint.targetId)
            }
          >
            Ресурс
          </button>

          <button variant="danger" onClick={handleDelete} className="btn btn-danger">
            Удалить
          </button>
        </div>
      </div>
    </div>
    {findStatus ==statusTypes.loading ?
    <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  :
  null


    
    }

  

        </div>
     );
}

export default Complaint;