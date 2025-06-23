import "antd/dist/reset.css";
import "./App.css";
import { Layout } from "antd";

import HeroSection from "./templates/hero";
import Navbar from "./templates/navbar";
import { Upgrade } from "./templates/upgrade";
import { Simple } from "./templates/simple";
import { Nothing } from "./templates/nothing";
import { Interest } from "./templates/interest";
import { Veelage } from "./templates/veelage";
const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Navbar />
      <Content>
        <HeroSection />
        <Upgrade />
        <Simple/>
        <Nothing/>
        <Interest/>
        <Veelage/>
      </Content>
    </Layout>
  );
}

export default App;
