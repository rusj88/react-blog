import { useGetArticleQuery } from "../store/blog/blog.api";
import { useParams } from "react-router-dom";
import ArticlePreview from "./ArticlePreview";

function ArticlePage() {
  const { slug } = useParams();
  const { isLoading, isError, data } = useGetArticleQuery(slug);

  return (
    <div className="min-h-[90vh] mt-6 mx-auto w-3/5 py-4 bg-white drop-shadow-xl rounded">
      {isError && (
        <p className="text-center text-red-600">Something went wrong...</p>
      )}
      {isLoading && <p className="text-center text-blue-600">Loading...</p>}
      <ArticlePreview {...data} />
      <div className="p-4">{data?.body}</div>
    </div>
  );
}

export default ArticlePage;
