import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import LocationPage from './views/LocationPage/LocationPage';
import StaffedEvent from './components/EventTypes/StaffedEvent';
import DropOffEvent from './components/EventTypes/DropOffEvent';
import EventsMain from './views/Events/EventsMain';
import Contact from './views/Contact/Contact';
import Home from './views/Home/Home';
import Error from './components/Error/Error';
import FoodTruckEvent from './components/EventTypes/FoodTruckEvent';

function App() {
    return (
        <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div className="root" style={{ flex: 1 }}>
                <NavBar />
                <Routes>
                    {/* Home */}
                    <Route path="/" element={<Home />} />

                    {/* Location-specific Pages */}
                    <Route path="/scottsdale" element={<LocationPage />} />
                    <Route path="/tempe" element={<LocationPage />} />
                    <Route path="/mesa" element={<LocationPage />} />

                    <Route path="/spokane" element={<LocationPage />} />
                    <Route path="/coeur-d-alene" element={<LocationPage />} />
                    <Route path="/post-falls" element={<LocationPage />} />
                    <Route path="/liberty-lake" element={<LocationPage />} />

                    {/* Hooking up for drawer links */}
                    <Route path="/locations" element={<LocationPage />} />

                    {/* Static Pages */}
                    <Route path="/events" element={<EventsMain />} />
                    <Route path="/staffed-event" element={<StaffedEvent />} />
                    <Route path="/drop-off-event" element={<DropOffEvent />} />
                    <Route path="/food-truck-event" element={<FoodTruckEvent />} />
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
