/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Card } from "flowbite-react";

export default function Terms() {
  const [formData, setFormData] = useState([]);
  const [updataeid, setupdataeid] = useState("");

  

  useEffect(() => {
    const getTerms = async () => {
      try {
        const data = await fetch("http://localhost:3000/api/terms", {
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
  }, []);

  return (
    <div>
      {/* Map over the formdata to display */}


      <>{formData[0].title}</>
      {formData.map((data) => {
        return (
          <div key={data._id}>
            <Card>
              {" "}
              <h1>{data.title}</h1>
              <p>{data.content}</p>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
