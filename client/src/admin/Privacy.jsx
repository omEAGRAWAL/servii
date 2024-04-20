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
        Privacy & Policy
      </div>
      <div
        className="mt-5 md:ml-16 md:mr-16 ml-5 mr-5 text-xs md:text-lg p-1
         text-[#828282]"
        style={{
          fontFamily: "Montserrat",

          fontWeight: 400,
          lineHeight: "21.94px",
          textAlign: "left",
        }}
      >
        <p>
          At Servii, we (Servii, We, us, our) hold the utmost respect for the
          privacy of our users (Users, you, your, client), and we aim to ensure
          that you are well-informed about our practices concerning the
          collection, processing, use, and disclosure of information. This
          Privacy Policy (Policy) governs the protocols for data collection,
          processing, and transfers, providing you with a clear understanding of
          how we handle your personal information (as defined by law). This
          Policy specifically pertains to information collected through our
          website and mobile application (Platform) and does not encompass any
          other data collection or processing activities, including offline
          collection or activities not directly linked to this Policy, or those
          conducted by third-party sites to which we may provide links. By
          accessing, downloading, and/or utilizing the Platform, you signify
          your agreement to be bound by the terms outlined in this Policy. We
          recommend that you read this Policy alongside our Terms of Use, as
          these documents together form a legally binding agreement between you
          and us.
        </p>
      </div>

      {terms.map((term) =>
        term.pp_title != null && term.pp_content != null ? (
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
              {term.pp_title}
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
              <div dangerouslySetInnerHTML={createMarkup(term.pp_content)} />
              {/* {term.pp_content} */}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default Privacy;
