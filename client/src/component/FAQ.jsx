//black single dot icon
import { LuDot } from "react-icons/lu";

function FAQ() {
  return (
    <div id="faq">
      <div
        style={{
          fontFamily: "Abhaya Libre ExtraBold",
          fontSize: "36px",
          fontWeight: 800,
          lineHeight: "42.47px",
          textAlign: "center",
        }}
      >
        Frequently Asked Questions (FAQs)
      </div>

      <div className="p-20 m-10 pt-10">
        <div
          className="text-[#111111]"
          style={{
            fontFamily: "Abhaya Libre Medium",
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "28.31px",
            textAlign: "left",
          }}
        >
          <LuDot className="inline" />
          Does Servii provide the choice for plan subscriptions to be
          automatically renewed?
        </div>

        <div
          className="pt-6 pl-7 text-[#595959]"
          style={{
            fontFamily: "Montserrat",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "28px",
            textAlign: "left",
          }}
        >
          Certainly, the conversation fee is subject to change depending on the
          nationality of the message recipient. If your customer base is
          distributed across different countries, Meta will implement
          conversation charges based on the prescribed WhatsApp chat rates for
          each respective country. For specific information about conversation
          pricing in different countries, kindly refer to the pricing page.
        </div>
      </div>
    </div>
  );
}

export default FAQ;
