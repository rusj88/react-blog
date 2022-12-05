import { Link } from "react-router-dom";
import { IArticle } from "../models/models";
import { Tag } from "antd";
import { HeartIcon } from "@heroicons/react/24/outline";

function ArticlePreview({
  title,
  description,
  slug,
  author,
  tagList,
  favoritesCount,
}: IArticle) {
  return (
    <div className="min-h-[140px]	p-4 bg-white rounded">
      <div className="flex justify-between gap-2">
        <div className="flex-grow-0">
          <div className="flex itemc-center">
            <Link
              className="text-clip overflow-hidden"
              to={`/articles/${slug}`}
            >
              <h2 className="font-bold mr-3">{title}</h2>
            </Link>
            <HeartIcon className="h-6 w-6" />
            {favoritesCount}
          </div>
          <div className="flex flex-grow-0">
            {tagList?.map((ele, ind) => (
              <Tag key={ind}>{ele}</Tag>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 gap-2">
          <div className="flex flex-col">
            <span>{author?.username}</span>
            <span>March 5, 2020</span>
          </div>
          <img
            src={author?.image}
            alt=""
            className="h-12 w-12 rounded-full
          "
          />
        </div>
      </div>
      <p className="mt-6 mb-0">{description}</p>
    </div>
  );
}
export default ArticlePreview;
