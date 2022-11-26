function CreateArticle() {
  return (
    <form>
      <div className="mt-6 mx-auto w-3/5 py-4 bg-white drop-shadow-xl rounded">
        <div className="flex flex-col py-12 px-8">
          <h1 className="text-2xl self-center mb-5">Create new article</h1>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="h-10 py-2 px-3 border border-gray-400 rounded mb-3"
          />
          <label htmlFor="description">Short description</label>
          <input
            type="text"
            id="description"
            placeholder="Short description"
            className="h-10 py-2 px-3 border border-gray-400 rounded mb-3"
          />
          <label htmlFor="description">Text</label>
          <textarea
            id="text"
            placeholder="Text"
            className="h-40 py-2 px-3 border border-gray-400 rounded mb-3 resize-none"
          />

          <button className="h-10 w-80 py-2 px-4 bg-sky-500 text-white rounded mb-2">
            Send
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateArticle;
