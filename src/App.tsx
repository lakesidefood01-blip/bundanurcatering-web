/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import { SEO } from './components/SEO';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

