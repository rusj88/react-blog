import { useEffect, useState } from "react";
import { useGetArticlesQuery } from "../store/blog/blog.api";
import ArticlePreview from "./ArticlePreview";
import "antd/dist/antd.css";
import { Pagination } from "antd";

function ArticlesList() {
  const [page, setPage] = useState(1);
  const { isLoading, isError, data } = useGetArticlesQuery(page);
  useEffect(() => console.log(data), [data]);

  return (
    <>
      <div className="pt-10 mx-auto h-screen w-3/5">
        {isError && (
          <p className="text-center text-red-600">Something went wrong...</p>
        )}
        {isLoading && <p className="text-center text-blue-600">Loading...</p>}
        <div className="flex flex-col items-center gap-[26px]">
          {data?.articles?.map((ele) => {
            return <ArticlePreview key={ele.slug} {...ele} />;
          })}
          <Pagination
            current={page}
            showSizeChanger={false}
            defaultPageSize={5}
            hideOnSinglePage
            total={data?.articlesCount}
            onChange={setPage}
          />
        </div>
      </div>
    </>
  );
}

export default ArticlesList;
