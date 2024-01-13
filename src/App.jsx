import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TaskBoard from "./components/Task/TaskBoard";

function App() {
  return (
    <>
      <Header/>
      <div className="flex flex-col items-center justify-center">
      <Hero/>
      <TaskBoard/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
