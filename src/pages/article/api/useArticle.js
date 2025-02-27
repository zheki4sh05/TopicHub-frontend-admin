import { useDispatch, useSelector } from "react-redux";
import { getArticle, getArticleStatus, getFeed } from "../../articles/model/articleSlice";
import { findArticle } from "../../articles/api/request";

function useArticle(id) {
    const dispatch =  useDispatch()
    let article = useSelector(getArticle)
    const articleStatus = useSelector(getArticleStatus)
    if(!article){
        article = useSelector(getFeed).find(item=>item.id==id)
    }
    if(!article){
        dispatch(findArticle({articleId:id}))
    }

    return {article, articleStatus}
  }
  
  export default useArticle;