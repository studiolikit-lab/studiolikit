import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import './index.css';

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      {/* 
        추후 추가 가능한 섹션:
        <About />
        <Contact />
      */}
    </Layout>
  );
}

export default App;
