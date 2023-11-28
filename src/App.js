import './style.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomeView from './components/views/HomeView';
import PriceView from './components/views/PriceView';
import AboutView from './components/views/AboutView';
import ContactView from './components/views/ContactView';
import CoursesView from './components/views/CoursesView';

import EnLayout from './englishSite/EnLayout';
import EnglishHomeView from './englishSite/views/EnglishHomeView';
import EnglishCoursesView from './englishSite/views/EnglishCoursesView/EnglishCoursesView';

import RuLayout from './russianSite/EnLayout';
import RussianHomeView from './russianSite/views/RussianHomeView';
import RussianCoursesView from './russianSite/views/RussianCoursesView/RussianCoursesView';
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
          <Route path="courses" element={<CoursesView />} />
        </Route>

        <Route path="/en" element={<EnLayout />}>
          <Route index element={<EnglishHomeView />} />
          <Route path="courses" element={<EnglishCoursesView />} />
        </Route>

        <Route path="/ru" element={<RuLayout />}>
          <Route index element={<RussianHomeView />} />
          <Route path="courses" element={<RussianCoursesView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
