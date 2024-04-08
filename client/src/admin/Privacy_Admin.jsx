/* eslint-disable no-unused-vars */
import React from "react";
import { getTerms, updateTerms, deleteTerms, addTerms } from "./apiFunction";
import { Button } from "flowbite-react";
import { LuDot } from "react-icons/lu";
function Privacy_Admin() {
  const [term, setTerm] = React.useState([]);
  const [id, setId] = React.useState("");
  const [pp_title, setTitle] = React.useState("");
  const [pp_content, setContent] = React.useState("");

  React.useEffect(() => {
    getTerms().then((data) => {
      setTerm(data);
    });
  }, []);

  const handleUpdate = (id) => {
    updateTerms(id, title, content).then((data) => {
      console.log(data);
    });
  };

  const handleDelete = (id) => {
    deleteTerms(id).then((data) => {
      console.log(data);
    });
  };

  const handleAdd = () => {
    addTerms(title, content).then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-xl text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter the title"
            onChange={(e) => setTitle(e.target.value)}
            className=" text-xl border-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700">
            Content:
          </label>
          <textarea
            id="content"
            placeholder="Enter the content"
            onChange={(e) => setContent(e.target.value)}
            className="texr-xl w-1/2 border-2"
            rows="4"
          ></textarea>
        </div>
        <Button type="submit" className="">
          post your data
        </Button>
      </form>

      {term.map((data) =>
        term.pp_title != null && term.pp_content != null ? (
          <div key={term._id} className="pl-20  pr-10 flex flex-col">
            <div
              className="pl-10 pr-10 pt-10 "
              style={{
                fontFamily: "Abhaya Libre SemiBold",
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "28.31px",
                textAlign: "left",
              }}
            >
              <LuDot className="inline" />
              {data.pp_title}
            </div>
            <div
              className="pt-5 pl-16"
              style={{
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "21.94px",
                textAlign: "left",
              }}
            >
              {data.pp_content}
            </div>
            <Button onClick={() => setId(data._id)}>Edit</Button>
            <Button onClick={() => handleDelete(data._id)}>Delete</Button>
          </div>
        ) : null
      )}

      {id && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Update Entry</h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Title:
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="block text-gray-700">
                Content:
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                rows="4"
              ></textarea>
            </div>
            <Button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              update terms
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Privacy_Admin;
