import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import LocationPage from './views/LocationPage/LocationPage';
import Pricing from './views/Pricing/Pricing';
import Contact from './views/Contact/Contact';
import Home from './views/Home/Home';
import Error from './components/Error/Error';

function App() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="root" style={{ flex: 1 }}>
        <NavBar />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Location-specific Pages */}
          <Route path="/spokane" element={<LocationPage />} />
          <Route path="/liberty-lake" element={<LocationPage />} />
          <Route path="/post-falls" element={<LocationPage />} />
          <Route path="/spokane-valley" element={<LocationPage />} />
          <Route path="/coeur-d-alene" element={<LocationPage />} />
          <Route path="/kootenai-county" element={<LocationPage />} />

          <Route path="/spokane-county" element={<LocationPage />} />
          <Route path="/bellevue" element={<LocationPage />} />
          <Route path="/redmond" element={<LocationPage />} />
          <Route path="/seattle" element={<LocationPage />} />
          <Route path="/bothell" element={<LocationPage />} />
          <Route path="/issaquah" element={<LocationPage />} />
          <Route path="/king-county" element={<LocationPage />} />
          <Route path="/snohomish-county" element={<LocationPage />} />

          {/* Hooking up for drawer links */}
          <Route path="/locations" element={<LocationPage />} />

          {/* Static Pages */}
          <Route path="/pricing" element={<Pricing />} /> 
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
