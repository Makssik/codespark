import './style.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomeView from './components/views/HomeView';
import PriceView from './components/views/PriceView';
import AboutView from './components/views/AboutView';
import ContactView from './components/views/ContactView';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="pricing" element={<PriceView />} />
        <Route path="about" element={<AboutView />} />
        <Route path="contact" element={<ContactView />} />
      </Route>
    </Routes>
  );
}

export default App;
