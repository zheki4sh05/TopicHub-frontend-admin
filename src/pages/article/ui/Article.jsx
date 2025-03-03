import { useDispatch, useSelector } from "react-redux";
import { getArticle, getFeed } from "../../articles/model/articleSlice";
import { useState } from "react";
import { changeArtricleStatus, deleteArtricle } from "../../articles/api/request";
import { useNavigate, useParams } from "react-router";
import { PathConstants } from "../../../app/constants/pathConstants";
import { getHubsList } from "../../hubs/model/hubsSlice";
import useArticle from "../api/useArticle";

function Article() {
  const { id, status } = useParams();
  const [articleStatus, setArticleStatus] = useState(status);
  //   const article = useSelector(getFeed).find((item) => item.id == id);
  const { article } = useArticle(id);
  const hubs = useSelector(getHubsList);
  const hub = !article.hub
    ? hubs[0]
    : hubs.find((item) => item.id == article.hub);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDeleteArticle = () => {

    dispatch(deleteArtricle({
      id:article.id
    }))
    navigate(-1)

  };
  const handleStatusChange = (name) => {
    setArticleStatus(name);
    dispatch(
      changeArtricleStatus({
        id: article.id,
        status: name,
        page: 1,
      })
    );
    navigate(-1);
  };

  return (
    <div className="container d-flex flex-column">
      <div>
        <button
          className="btn btn-primary mt-2"
          onClick={(event) => navigate(-1)}
        >
          Назад
        </button>

        <div className="mt-3">
          {articleStatus === "MODERATION" && (
            <div>
              <select
                name="status"
                onChange={(event) => handleStatusChange(event.target.value)}
              >
                <option value="">Выберите действие</option>
                <option value="PUBLISH">Опубликовать</option>
                <option value="BLOCK">Заблокировать</option>
              </select>
            </div>
          )}
          {articleStatus === "PUBLISH" && (
            <div>
              <select
                name="status"
                onChange={(event) => handleStatusChange(event.target.value)}
              >
                <option value="">Выберите действие</option>
                <option value="MODERATION">На модерацию</option>
                <option value="BLOCK">Заблокировать</option>
              </select>
            </div>
          )}
          {articleStatus === "BLOCK" && (
            <div>
              <select
                name="status"
                onChange={(event) => handleStatusChange(event.target.value)}
              >
                <option value="">Выберите действие</option>
                <option value="PUBLISH">Опубликовать</option>
                <option value="MODERATION">На модерацию</option>
              </select>
            </div>
          )}
        </div>
      </div>

      <div className="container mt-4">
        <div>
          <h1>{article.theme}</h1>
          <p>
            <strong>Created:</strong>{" "}
            {new Date(article.created).toLocaleString()}
          </p>
          <p>
            <strong>User:</strong> {article.userDto.login}
          </p>
          <p>
            <strong>Likes:</strong> {article.likes}
          </p>
          <p>
            <strong>Dislikes:</strong> {article.dislikes}
          </p>
          <p>
            <strong>Comments:</strong> {article.commentsCount}
          </p>

          <div>
            <strong>Hub:</strong>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>RU</th>
                  <th>EN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{hub.id}</td>
                  <td>{hub.ru}</td>
                  <td>{hub.en}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Like State:</strong> {article.likeState}
          </p>

          <div>
            <strong>Keywords:</strong>
            <ul>
              {article.keyWords.map((keyword, index) => (
                <li key={index}>{keyword}</li>
              ))}
            </ul>
          </div>

          <div>
            {article.list.map((part, index) => {
              if (part.type === "paragraph") {
                return <p key={index}>{part.value}</p>;
              } else if (part.type === "img") {
                return <img key={index} src={part.value} alt="Image Content" />;
              } else if (part.type === "chapter") {
                return <h3 key={index}>{part.value}</h3>;
              } else if (part.type === "img_load") {
                return (
                  <div className="container">
                    <img
                    style={{maxWidth:"60%",margin:'0 auto'}}
                      key={index}
                      src={`http://localhost:8080/api/v1/image?id=${part.value}`}
                      alt="Image Content"
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
      <span id="message" style={{ display: "none", marginTop: "10px" }}></span>
      <div>
        <hr></hr>
        <button
          className="btn btn-danger mt-1 mb-2"
          type="submit"
          onClick={handleDeleteArticle}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

export default Article;
