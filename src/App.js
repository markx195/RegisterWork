import './App.css';
import './component/Booking/booking'
import RegisterBooking from "./component/Booking/booking";

function App() {
    return (
        <div className="App">
            <div className="flex justify-center content-center pt-9">
                <h1 className="text-2xl font-bold text-lime-700 absolute">
                    Opening hours
                </h1>
                <RegisterBooking/>
            </div>
        </div>
    );
}

export default App;
