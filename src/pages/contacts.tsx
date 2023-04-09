import type { NextPage } from "next";
import { Header, ContactPage, Footer } from "../components";

const Contacts: NextPage = () => {
  return (
    <div>
      <Header />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Contacts;
