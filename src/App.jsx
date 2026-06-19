import Call from "./components/Call";
import Footer from "./components/Footer";
import Information from "./components/Information";
import Intro from "./components/Intro";
import Quote from "./components/Quote";

const App = () => {
  return (
    <div className="test">
      <Intro />
      <Information />
      <Quote />
      <Call />
      <Footer />
    </div>
  );
};

export default App;
