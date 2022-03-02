import Header from "./components/Header";
import WelcomeContent from "./components/Welcome";
import BottomSection from "./components/BottomSection";
import TicketSection from "./components/TickectSection";
import ComingSoon  from "./components/ComingSoon";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TimerProvider } from "./context/TicketTimerContext";

function App() {

  return (
    <Router>
      <div className="App">
        <div className="bg-1">
        <Header/>
        </div>
        <Switch>
          <Route exact path = "/">
            <div className="bg-1">
              <WelcomeContent />
              <BottomSection />
            </div>
          </Route>

          <TimerProvider>
            <Route path="/basic">
              <TicketSection title="Basic" amount = {1} lotteryCategory = {0}/>
            </Route>

            <Route path="/investor">
              <TicketSection title="Investor" amount = {10} lotteryCategory = {1}/>
            </Route>

            <Route path="/whale">
              <TicketSection title="Whale" amount = {100} lotteryCategory = {2}/>
            </Route>
          </TimerProvider>

          <Route path="/coming">
            <ComingSoon />
          </Route>
        </Switch>
        <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
