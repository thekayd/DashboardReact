import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ThemeContextProvider from "./context/ThemeContextProvider";

function App() {
  return (
    <>
    <ThemeContextProvider>
      <div className="flex">
        <Sidebar />
      </div>
      <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Navbar />
        <Dashboard />
      </div>
      </ThemeContextProvider>
    </>
  );
}
export default App;
