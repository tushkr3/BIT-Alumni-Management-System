import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Events from "./components/Events";
import SignupLogin from "./components/SignupLogin";
import PastEvents from "./components/PastEvents";
import EventDetails from "./components/EventDetails"; // Import EventDetails Page
import Events1 from "./components/Events1";
import Events2 from "./components/Events2";
import UpcomingEvents from "./components/UpcomingEvents";
import InviteBatchmates from "./components/InviteBatchmates";
import Gallery from "./components/Gallery";
import FoundationDay2024 from "./components/FoundationDay2024";
import FoundationDay2022 from "./components/FoundationDay2022";
import ESummit2021 from "./components/E-summit2021";
import AlumniMeet2022 from "./components/AlumniMeet2022";
import AlumniDirectory from "./components/AlumniDirectory";
import NewsStories from "./components/NewsStories";
import Jobs from "./components/Jobs";
import Internships from "./components/Internships";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signup-login" element={<SignupLogin />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/event-details" element={<EventDetails />} /> {/* Event Details Page */}
        <Route path="/events1" element={<Events1 />} />
        <Route path="/events2" element={<Events2 />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/invite-batchmates" element={<InviteBatchmates />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/foundationday2024" element={<FoundationDay2024 />} />
        <Route path="/foundationday2022" element={<FoundationDay2022 />} />
        <Route path="/E-Summit2021" element={<ESummit2021 />} />
        <Route path="/AlumniMeet2022" element={<AlumniMeet2022 />} />
        <Route path="/AlumniDirectory" element={<AlumniDirectory />} />
        <Route path="/NewsStories" element={<NewsStories />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Internships" element={<Internships />} />
      </Routes>
    </Router>
  );
}

export default App;
