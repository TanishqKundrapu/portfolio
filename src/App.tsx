import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Work = lazy(() => import('./pages/Work'));
const WorkDetail = lazy(() => import('./pages/WorkDetail'));
const Experience = lazy(() => import('./pages/Experience'));
const Engineering = lazy(() => import('./pages/Engineering'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function LegacyProjectDetailRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/work/${slug}`} replace />;
}

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={null}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<WorkDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/contact" element={<Contact />} />

            {/* legacy paths from the previous IA */}
            <Route path="/projects" element={<Navigate to="/work" replace />} />
            <Route path="/projects/:slug" element={<LegacyProjectDetailRedirect />} />
            <Route path="/skills" element={<Navigate to="/engineering" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  );
}
