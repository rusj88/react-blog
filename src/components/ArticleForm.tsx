//import { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { IArticle } from "../models/models";

function ArticleForm({ title, body, description, tagList, slug }: IArticle) {
  //const getPreloadedValues = (arr) => arr.map((currentValue) => ({ tag: currentValue }));

  const { register, control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });
  //const { errors } = formState;

  //   const generateArticleObject = (formData) => {
  //     const tagsArr = formData.tags.map((item) => item.tag);
  //     const myObject = {
  //       article: {
  //         title: formData.title,
  //         description: formData.description,
  //         body: formData.body,
  //         tagList: tagsArr,
  //       },
  //     };
  //     return myObject;
  //   };

  //   const onSubmit = (data) => {
  //     const artObj = generateArticleObject(data);
  //     if (action === 'edit') {
  //      edit article
  //     } else {
  //      create article
  //     }
  //   };

  //   useEffect(() => {
  //     reset({
  //       tags: getPreloadedValues(tagList),
  //     });
  //   }, [tagList, reset]);

  return (
    <form onSubmit={handleSubmit(() => console.log("test"))}>
      <h2>{title ? "Edit article" : "Create new article"}</h2>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          defaultValue={title}
          {...register("title", {
            required: "title is required",
          })}
        />

        <label htmlFor="description">Short description</label>
        <input
          type="text"
          id="description"
          placeholder="Description"
          defaultValue={description}
          {...register("description", {
            required: "description is required",
          })}
        />

        <label htmlFor="article-txt">Text</label>
        <textarea
          id="article-txt"
          placeholder="Text"
          defaultValue={body}
          {...register("body", {
            required: "text is required",
          })}
        />

        <div>
          {fields.map((item, index) => {
            const fieldName = `tags[${index}]`;
            return (
              <div key={fieldName}>
                <input
                  type="text"
                  id="tag-input"
                  {...register(`${fieldName}.tag`)}
                />
                <button type="button" onClick={() => remove(index)}>
                  Delete
                </button>
              </div>
            );
          })}

          <button
            type="button"
            onClick={() => {
              append({ tag: "" });
            }}
          >
            Add Tag
          </button>
        </div>

        <input type="submit" value="Send" />
      </div>
    </form>
  );
}

export default ArticleForm;
