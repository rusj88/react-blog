import { Link } from "react-router-dom";
import { IArticle } from "../models/models";
import { Tag } from "antd";

function ArticlePreview({
  title,
  description,
  slug,
  author,
  tagList,
}: IArticle) {
  return (
    <div className="min-h-[140px]	w-full p-4 bg-white drop-shadow-xl rounded">
      <div className="flex justify-between">
        <Link to={`/articles/${slug}`}>
          <h2 className="font-bold">{title}</h2>
        </Link>
        <div className="flex gap-2">
          <div className="flex flex-col">
            <span>{author.username}</span>
            <span>March 5, 2020</span>
          </div>
          <img
            src={author.image}
            alt=""
            className="max-h-[46px] max-w-[46px] rounded-full
          "
          />
        </div>
      </div>
      <div>
        {tagList.map((ele, ind) => (
          <Tag key={ind}>{ele}</Tag>
        ))}
      </div>

      <p>{description}</p>
    </div>
  );
}
export default ArticlePreview;
