// /* eslint-disable no-unused-vars */
// // //black single dot icon
// import { LuDot } from "react-icons/lu";

// import serviiTerms from "../asset/servii.terms.json";

// import {
//   getTerms,
//   addTerms,
//   updateTerms,
//   deleteTerms,
// } from "../admin/apiFunction.js";
// import { useState, useEffect } from "react";

// function Privacy() {
//   const createMarkup = (text) => ({ __html: text });
//   const [terms, setTerms] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getTerms();
//       setTerms(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div
//         className="p-10 "
//         style={{
//           fontFamily: "Abhaya Libre Medium",
//           fontSize: "48px",
//           fontWeight: 500,
//           lineHeight: "56.63px",
//           textAlign: "center",
//         }}
//       >
//         Frequently Asked Questions (FAQs)
//       </div>
//       {terms.map((term) =>
//         term.faq_title != null && term.faq_content != null ? (
//           <div
//             key={term._id}
//             className="pl-20  pr-10 flex flex-col text-[#111111]"
//           >
//             <div
//               className="pl-10 pr-10 pt-10 "
//               style={{
//                 fontFamily: "Abhaya Libre SemiBold",
//                 fontSize: "24px",
//                 fontWeight: 600,
//                 lineHeight: "28.31px",
//                 textAlign: "left",
//               }}
//             >
//               <LuDot className="inline" />
//               {term.faq_title}
//             </div>
//             <div
//               className="mt-5 ml-16 mr-16 p-1 bg-[#FAFFFA] text-[#595959]"
//               style={{
//                 fontFamily: "Montserrat",
//                 fontSize: "18px",
//                 fontWeight: 400,
//                 lineHeight: "21.94px",
//                 textAlign: "left",
//               }}
//             >
//               <div dangerouslySetInnerHTML={createMarkup(term.faq_content)} />
//               {/* {term.faq_content} */}
//             </div>
//           </div>
//         ) : null
//       )}
//     </div>
//   );
// }

// export default Privacy;
