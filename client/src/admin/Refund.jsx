/* eslint-disable no-unused-vars */
// //black single dot icon
import { LuDot } from "react-icons/lu";

import serviiTerms from "../asset/servii.terms.json";

import {
  getTerms,
  addTerms,
  updateTerms,
  deleteTerms,
} from "../admin/apiFunction.js";
import { useState, useEffect } from "react";

function Privacy() {
  const createMarkup = (text) => ({ __html: text });
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
        className="p-10 mt-20 md:pt-20"
        style={{
          fontFamily: "Abhaya Libre Medium",
          fontSize: "48px",
          fontWeight: 500,
          lineHeight: "56.63px",
          textAlign: "center",
        }}
      >
        Refund
      </div>
      {terms.map((term) =>
        term.refund_title != null && term.refund_content != null ? (
          <div
            key={term._id}
            className="md:ml-20  md:mr-10 m-5 flex flex-col text-[#111111]"
          >
            <div
              className="md:ml-10 md:mr-10  m-5  text-base md:text-2xl "
              style={{
                fontFamily: "Abhaya Libre Medium",

                fontWeight: 600,
                lineHeight: "28.31px",
                textAlign: "left",
              }}
            >
              <LuDot className="inline" />
              {term.refund_title}
            </div>
            <div
              className="mt-5 md:ml-16 md:mr-16 ml-5 mr-5 text-sm md:text-lg
              p-1  text-[#828282]"
              style={{
                fontFamily: "Montserrat",

                fontWeight: 400,
                lineHeight: "21.94px",
                textAlign: "left",
              }}
            >
              <div
                dangerouslySetInnerHTML={createMarkup(term.refund_content)}
              />
              {/* {term.pp_content} */}
            </div>
          </div>
        ) : null
      )}

      <div
        className="md:ml-10 md:mr-10  m-5  text-base md:text-xl pd-20 md:pl-20 pt-5 "
        style={{
          fontFamily: "Abhaya Libre Medium",

          fontWeight: 600,
          lineHeight: "28.31px",
          textAlign: "left",
        }}
      >
        For inquiries, feedback, or concerns related to this Policy, please
        contact us at support@servii.com.
      </div>
    </div>
  );
}

export default Privacy;
