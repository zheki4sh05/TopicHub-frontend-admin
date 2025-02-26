import { useEffect, useState } from "react";
import statusTypes from "../../../app/util/statusTypes";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleStatus,
  getChangeArticleStatus,
  getFeed,
  getMaxPage,
  getPage,
} from "../model/articleSlice";
import { changeArtricleStatus, fetchArtricles } from "../api/request";
import "./style.css";
function Articles() {
  const articles = useSelector(getFeed);
  const page = useSelector(getPage);
  const maxPage = useSelector(getMaxPage);
  const dispatch = useDispatch();
  const statusArticle = useSelector(getArticleStatus);
  const [status, setStatus] = useState(statusTypes.moderation);
const chStatus = useSelector(getChangeArticleStatus)
  const makeRequest = (page, status) => {
    dispatch(
      fetchArtricles({
        status: status,
        page: 1,
      })
    );
  };
  const handleChangeStatus = (status) => {
    setStatus(status);
    makeRequest(0, status);
  };
  const handleArticleStatusChange = (articleId, event) => {
    dispatch(changeArtricleStatus({
        id:articleId,
        status:event.target.value,
        page:1
    }))
  };

  const handleFetchPrev = () => {
    makeRequest(page - 1, status);
  };
  const handleFetchCurrent = () => {
    makeRequest(page, status);
  };
  const handleFetchNext = () => {
    makeRequest(page + 1, status);
  };

  useEffect(() => {
    makeRequest(0, status);
  }, []);

  return (
    <div className="container mt-4">
      <div style={{ maxWidth: "250px" }}>
        <div>
          <h4>Выберите статус</h4>
          <div className="nav-links d-flex justify-content-start align-items-center">
            <button
              className={status === "MODERATION" ? "active" : ""}
              style={{ whiteSpace: "nowrap" }}
              onClick={() => handleChangeStatus(statusTypes.moderation)}
            >
              На модерации
            </button>
            <button
              className={status === "PUBLISH" ? "active" : ""}
              onClick={() => handleChangeStatus(statusTypes.publish)}
            >
              Опубликованы
            </button>
            <button
              className={status === "BLOCK" ? "active" : ""}
              onClick={() => handleChangeStatus(statusTypes.block)}
            >
              Заблокированы
            </button>
          </div>
        </div>
      </div>

      <h1>Article List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Theme</th>
            <th scope="col">Author</th>
            <th scope="col">Email</th>
            <th scope="col">Created</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>

            <>
              {articles.map((article) => (
                <tr key={article.id}>
                  <td>{article.id}</td>
                  <td>{article.theme}</td>
                  <td>{article.userDto.login}</td>
                  <td>{article.userDto.email}</td>
                  <td>{new Date(article.created).toLocaleString()}</td>
                  <td>
                    <div className="d-flex">
                      <button
                        className="btn btn-primary"
                        style={{ marginRight: "10px" }}
                        onClick={()=>handleOpenArticle(article.id)}
                      >
                        Open
                      </button>

                      <button className="btn btn-danger" type="submit">
                        Удалить
                      </button>

                      {status === "MODERATION" && (
                        <select
                          name="status"
                          onChange={(event) =>
                            handleArticleStatusChange(article.id, event)
                          }
                        >
                          <option value="">Выберите действие</option>
                          <option value="PUBLISH">Опубликовать</option>
                          <option value="BLOCK">Заблокировать</option>
                        </select>
                      )}
                      {status === "PUBLISH" && (
                        <select
                          name="status"
                          onChange={(event) =>
                            handleArticleStatusChange(article.id, event)
                          }
                        >
                          <option value="">Выберите действие</option>
                          <option value="MODERATION">На модерацию</option>
                          <option value="BLOCK">Заблокировать</option>
                        </select>
                      )}
                      {status === "BLOCK" && (
                        <select
                          name="status"
                          onChange={(event) =>
                            handleArticleStatusChange(article.id, event)
                          }
                        >
                          <option value="">Выберите действие</option>
                          <option value="PUBLISH">Опубликовать</option>
                          <option value="MODERATION">На модерацию</option>
                        </select>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </>
          
        </tbody>
      </table>
      {chStatus==statusTypes.loading ?
    <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  :
  null
    
    }
      {statusArticle == statusTypes.loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : statusArticle == statusTypes.failed ? (
            <span className="error-message">Ошибка: Что-то пошло не так!</span>
          ) : (
            null
          )}
      <span id="message" style={{ display: "none", marginTop: "10px" }}></span>
      <nav aria-label="Пагинация">
        <ul className="pagination">
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={handleFetchPrev}>
              Назад
            </button>
          </li>
          {Array.from({ length: maxPage }, (_, i) => i + 1).map((i) => (
            <li key={i} className={`page-item ${i === page ? "active" : ""}`}>
              <button className="page-link" onClick={handleFetchCurrent}>
                {i}
              </button>
            </li>
          ))}
          <li className={`page-item ${page === maxPage ? "disabled" : ""}`}>
            <button className="page-link" onClick={handleFetchNext}>
              Вперед
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Articles;
