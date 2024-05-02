import Layout from "../layout/Layout";
import "./App.css";
import SectionHeader from "./components/sectionHeader/SectionHeader";

function App() {

  return (
    <>
    <div className="flex w-full h-full justify-center items-center">
    <Layout/>
    <SectionHeader text="Welcome to Our Site!" />
    </div>
    </>
  );
}

export default App;
