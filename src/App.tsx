import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { HomePage, ProjectsPage, ProjectDetailPage, AboutPage, SkillsPage, ContactPage, NotFoundPage } from './pages';
import { TranslationProvider } from './contexts/TranslationContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <TranslationProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="projetos" element={<ProjectsPage />} />
                <Route path="projeto/:id" element={<ProjectDetailPage />} />
                <Route path="sobre" element={<AboutPage />} />
                <Route path="habilidades" element={<SkillsPage />} />
                <Route path="contato" element={<ContactPage />} />
                <Route path="404" element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TranslationProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
