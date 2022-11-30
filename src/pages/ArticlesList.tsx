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
    <div className="p-10 mx-auto w-3/5">
      {isError && (
        <p className="text-center text-red-600">Something went wrong...</p>
      )}
      {isLoading && <p className="text-center text-blue-600">Loading...</p>}
      <div className="min-h-[90vh] flex flex-col justify-between items-center">
        <div className="flex flex-col gap-[26px] w-full pb-10">
          {data?.articles?.map((ele) => {
            return (
              <div key={ele.slug} className="w-full drop-shadow-xl rounded">
                <ArticlePreview {...ele} />
              </div>
            );
          })}
        </div>
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
  );
}

export default ArticlesList;
