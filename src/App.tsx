import Navbar from './components/organisms/navbar';
import CreateEvent from './components/organisms/createEvent';
import EventListing from './components/organisms/eventListing';


function App() {
  return (
    <div>
      <Navbar/>
      <CreateEvent/>
      {/* <EventListing/> */}
    </div>
  );
}

export default App;
