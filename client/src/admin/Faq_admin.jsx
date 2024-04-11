/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { LuDot } from "react-icons/lu";
import { getTerms, updateTerms, deleteTerms, addTerms } from "./apiFunction";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

function Privacy_Admin() {
  const createMarkup = (text) => ({ __html: text });
  const [terms, setTerms] = useState([]);
  const [id, setId] = useState("");
  const [faq_title, setTitle] = useState("");
  const [faq_content, setContent] = useState("");

  useEffect(() => {
    fetchTerms();
  }, [terms]);

  const fetchTerms = async () => {
    try {
      const data = await getTerms();
      setTerms(data);
    } catch (error) {
      console.error("Error fetching terms:", error);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const newData = { faq_title: faq_title, faq_content: faq_content };
    try {
      await addTerms(newData);
      await fetchTerms();
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error adding term:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedData = { faq_title, faq_content }; // Using object shorthand notation

    try {
      await updateTerms(id, updatedData);
      await fetchTerms(); // Fetch updated terms after the update operation
      setId(""); // Clear the id state
      setTitle(""); // Clear the faq_title state
      setContent(""); // Clear the faq_content state
    } catch (error) {
      console.error("Error updating term:", error);
      // Handle error appropriately in your component
    }
  };

  const handleDelete = async (termId) => {
    console.log(termId);
    try {
      await deleteTerms(termId);
      await fetchTerms();
    } catch (error) {
      console.error("Error deleting term:", error);
    }
  };

  return (
    <div>
      <div className="flex  justify-center m-10 ">
        <div className="flex flex-col text-4xl">Terms and Conditions</div>
      </div>
      <div className="flex justify-center items-center  bg-[#aadfaa]">
        <form
          onSubmit={handleAdd}
          className="w-full  p-8  rounded-lg bg-#FAFFFA shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="title" className="block text-xl text-gray-700">
              Title:
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter the title"
              onChange={(e) => setTitle(e.target.value)}
              className="text-xl border-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700">
              Content:
            </label>
            <ReactQuill
              theme="snow"
              onChange={setContent}
              className="bg-gray-200"
            />
            ;
          </div>
          <Button type="submit" className="w-60">
            Post your data
          </Button>
        </form>
      </div>

      {terms.map((term) =>
        term.faq_title && term.faq_content ? (
          <div key={term._id} className="ml-20 mr-10 flex flex-col">
            <div className="flex flex-row justify-between">
              <div
                className="ml-10 mr-10 mt-10"
                style={{
                  fontFamily: "Abhaya Libre SemiBold",
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "28.31px",
                  textAlign: "left",
                }}
              >
                <LuDot className="inline" />
                {term.faq_title}
              </div>
              <div className=" inline-block  ">
                <Button
                  className="inline-block m-5"
                  onClick={() => {
                    setId(term._id);
                    setTitle(term.faq_title);
                    setContent(term.faq_content);
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(term._id)}
                  className="inline-block m-5"
                >
                  Delete
                </Button>
              </div>
            </div>
            <div
              className="mt-5 ml-16 text-[#828282]"
              style={{
                fontFamily: "Montserrat",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "21.94px",
                textAlign: "left",
              }}
            >
              <div dangerouslySetInnerHTML={createMarkup(term.faq_content)} />
            </div>

            {term._id === id && (
              <div className="flex w-3/4 justify-center items-center   bg-[#aadfaa]">
                <form
                  onSubmit={handleUpdate}
                  className="  p-8 w-full rounded-lg bg-#FAFFFA shadow-lg"
                >
                  <div className="mb-4">
                    <label
                      htmlFor="title"
                      className="block text-xl text-gray-700"
                    >
                      Title:
                    </label>
                    <input
                      type="text"
                      id="title"
                      placeholder="Enter the title"
                      value={faq_title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="text-xl border-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700">
                      Content:
                    </label>
                    <ReactQuill
                      theme="snow"
                      value={faq_content}
                      onChange={setContent}
                      className="bg-gray-200"
                    />
                  </div>
                  <Button type="submit" className="w-60">
                    Update data
                  </Button>
                </form>
              </div>
            )}
          </div>
        ) : null
      )}
    </div>
  );
}

export default Privacy_Admin;
