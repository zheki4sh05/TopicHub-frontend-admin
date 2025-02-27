import { useEffect, useState } from "react";
import statusTypes from "../../../app/util/statusTypes";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthors } from "../api/request";
import { getAuthorsPage } from "../model/authorsSlice";
import { getMaxPage } from "../../articles/model/articleSlice";
import Pagination from './../../../shared/pagination/ui/Pagination';

function Authors() {
  const [status, setState] = useState(statusTypes.active);
  const [email,setEmail] = useState("")
  const [login, setLogin] = useState("")

    const page = useSelector(getAuthorsPage)
    const maxPage = useSelector(getMaxPage)

    const dispatch = useDispatch()
    const getStatusName=(name)=>{
        switch(name){
            case statusTypes.active:{
                return "Активные"
            }
            case statusTypes.block:{
                return "Заблокированные"
            }
        }
    }

    const handleStatusChange=(name)=>{
        setState(name)
        makeRequest(1,name)
    }

    const handleSearch=()=>{
       
    }
    const makeRequest=(page,status)=>{
        dispatch(fetchAuthors({
            status:status,
            page:page
        }))
    }

    const handleFetchPrev = (page, status) => {
        makeRequest(page - 1, status);
      };
      const handleFetchCurrent = (page, status) => {
        makeRequest(page, status);
      };
      const handleFetchNext = (page, status) => {
        makeRequest(page + 1, status);
      };

      useEffect(()=>{
        makeRequest(page,status)
      },[])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1000px",
        margin: "0 auto",
        marginTop: "30px",
      }}
    >
        <div className="d-flex justify-content-center align-items-center " >
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Выбрать
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <button className="dropdown-item" onClick={(event)=>handleStatusChange(statusTypes.active)} >Активные</button>
            </li>
            <li>
              <button className="dropdown-item" onClick={(event)=>handleStatusChange(statusTypes.block)} >Заблокированные</button>
            </li>
          </ul>
      </div>
      <span style={{marginLeft:"20px"}}>Выбрано: {getStatusName(status)}</span>
            
        </div>
        <div className="container ">
      <div className="row justify-content-center mt-2">
        <div className="col-md-6">
          <div className="card  shadow-sm">
            <div className="card-body">
              <h4 className="card-title text-center">Найти пользователя</h4>
              
              <div className="mb-1">
                <label htmlFor="login" className="form-label">Login:</label>
                <input
                  type="text"
                  id="login"
                  name="login"
                  className="form-control"
                  placeholder="Enter login"
                  value={login}
                  onChange={(event)=>setLogin(event.target.value)}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event)=>setEmail(event.target.value)}
                />
              </div>
              
              <div className="text-center">
                <button disabled={login.length==0 && email.length==0} type="submit" className="btn btn-primary"
                onClick={handleSearch}
                
                >Найти</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination
        handleFetchNext={handleFetchNext}
        handleFetchPrev={handleFetchPrev}
        handleFetchCurrent={handleFetchCurrent}
        page={page}
        maxPage={maxPage}
        status={status}
    />
 
    </div>
  );
}

export default Authors;
