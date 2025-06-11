import 'antd/dist/reset.css';
import './App.css';
import { Layout } from 'antd';

import HeroSection from './templates/hero';
import Navbar from './templates/navbar';
const { Content } = Layout;

function App() {
  return (
     <Layout>
      <Navbar />
      <Content>
        <HeroSection />
      </Content>
    </Layout>
  );
}

export default App;
