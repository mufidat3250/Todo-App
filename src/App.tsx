import "./App.css";
import AppContent from "./components/Molecules/AppContent";
import AppHeader from "./components/Molecules/AppHeader";
import TodoModal from "./components/Molecules/TodoModal";
function App() {
  return (
    <div className="app">
      <h1>TODO LIST</h1>
      <div className="main">
        <AppHeader/>
        <AppContent/>
          <TodoModal >
            <form className="">
            <h1>Add Task</h1>
            </form>
          </TodoModal>
      </div>
    </div>
  );
}

export default App;
