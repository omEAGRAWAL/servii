/* eslint-disable no-unused-vars */
// //black single dot icon
import { LuDot } from "react-icons/lu";
import { getTerms, addTerms, updateTerms, deleteTerms } from "./apiFunction.js";
import { useState, useEffect } from "react";

function Privacy() {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTerms();
      setTerms(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div
        className="p-10 "
        style={{
          fontFamily: "Abhaya Libre Medium",
          fontSize: "48px",
          fontWeight: 500,
          lineHeight: "56.63px",
          textAlign: "center",
        }}
      >
        Privact Policy
      </div>
      {terms.map((term) =>
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
              {term.pp_title}
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
              {term.pp_content}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default Privacy;
