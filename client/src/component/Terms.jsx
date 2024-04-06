import { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

export default function Terms() {
  const [formData, setFormData] = useState([]);
  const [updateid, setupdateid] = useState("");
  const [title, setTitle] = useState("");
  const [submit, setSubmit] = useState();
  const [content, setContent] = useState("");
  useEffect(() => {
    const getTerms = async () => {
      try {
        const data = await fetch("api/terms", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!data.ok) {
          throw new Error("Failed to fetch terms");
        }
        const response = await data.json();
        console.log(response);
        setFormData(response);
      } catch (error) {
        console.error("Error fetching terms:", error);
      }
    };

    getTerms();
  }, [submit]);

  const handlesubmit = async (e) => {
    setSubmit(1);
    e.preventDefault();
    const data = {
      title: title,
      content: content,
    };
    try {
      const response = await fetch("api/terms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.log("Failed to add terms");
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error adding terms:", error);
    }
  };

  // Function to handle form submission
  const handleSubmitUpdate = async (e) => {
    setSubmit(1);
    e.preventDefault();
    // Use the title and content variables as needed
    console.log("Title:", title);
    console.log("Content:", content);

    // Send the data to the server by put operation for /api/updateTerms/:updateid
    // Use the updataeid to update the data
    const data = {
      title: title,
      content: content,
    };
    try {
      const update = await fetch(`/api/terms/${updateid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!update.ok) {
        console.log("Failed to update terms");
      }
      const response = await update.json();
      console.log(response);
    } catch (error) {
      console.error("Error updating terms:", error);
    }
  };

  const handleSubmitdelete = async (e) => {
    setSubmit(1);
    e.preventDefault();
    // Use the title and content variables as needed
    console.log("Title:", title);
    console.log("Content:", content);

    // Send the data to the server by put operation for /api/updateTerms/:updateid
    // Use the updataeid to update the data
    const data = {
      title: title,
      content: content,
    };
    try {
      const update = await fetch(`/api/terms/${updateid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!update.ok) {
        console.log("Failed to update terms");
      }
      const response = await update.json();
      console.log(response);
    } catch (error) {
      console.error("Error updating terms:", error);
    }
  };

  return (
    <div className="m-20 p-20">
      <div className="bg-green-200">
        <h2 className="md:text-3xl font-bold mb-4">Enter a new Entry</h2>
        <form onSubmit={handlesubmit}>
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
      </div>

      {/* Map over the formdata to display */}

      {formData.map((data) => {
        return (
          <div key={data._id} className="mb-4">
            <Card>
              <h1 className="text-xl font-semibold"> Title --{data.title}</h1>
              <p className="text-gray-700">Content--{data.content}</p>
              <button
                onClick={() => {
                  setupdateid(data._id);
                  setTitle(data.title);
                  setContent(data.content);
                }}
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Edit
              </button>
            </Card>
          </div>
        );
      })}

      {/* //add such a way if updateId is not null then only the remaing should be visible */}

      {/* //add such a way if updateId is not null then only the remaing should be visible */}
      {updateid && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Update Entry</h2>
          <form onSubmit={handleSubmitUpdate}>
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
            <button
              onChange={(e) => handleSubmitUpdate(e)}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              update terms
            </button>
            <button
              onClick={handleSubmitdelete}
              type="submit"
              color="failure"
              className="bg-red-500 "
            >
              delete terms
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
