import type { NextPage } from "next";
import { Layout, HomePage, AboutMePage, ProjectPage, ContactPage } from "../components";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomePage />
      <AboutMePage />
      <ProjectPage />
      <ContactPage />
    </Layout>
  );
};

export default Home;
