import { useGetArticleQuery } from "../store/blog/blog.api";
import { useParams } from "react-router-dom";

function ArticlePage() {
  const { slug } = useParams();
  const { isLoading, isError, data } = useGetArticleQuery(slug);

  return (
    <div>
      {isError && (
        <p className="text-center text-red-600">Something went wrong...</p>
      )}
      {isLoading && <p className="text-center text-blue-600">Loading...</p>}
      <div>{data?.body}</div>
    </div>
  );
}

export default ArticlePage;
