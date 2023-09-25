import './style.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomeView from './components/views/HomeView';
import PriceView from './components/views/PriceView';
import AboutView from './components/views/AboutView';
import ContactView from './components/views/ContactView';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Прокручиваем страницу вверх при каждом изменении пути (переходе на новую страницу)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Этот компонент не отображает ничего на экране
}


function App() {
  return (
    <>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="pricing" element={<PriceView />} />
          <Route path="about" element={<AboutView />} />
          <Route path="contact" element={<ContactView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
