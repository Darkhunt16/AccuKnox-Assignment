import Dashboard from "./components/Dashboard";
import { DashboardProvider } from "./context/DashboardContext";

function App() {
  return (
    <DashboardProvider>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4">
        {/* Header */}
        <header className="w-full bg-white shadow-md py-6 mb-6">
          <h1 className="text-3xl font-bold text-center text-blue-600 tracking-tight">
            Dynamic Dashboard
          </h1>
        </header>

        {/* Dashboard */}
        <main className="w-full max-w-6xl">
          <Dashboard />
        </main>
      </div>
      
    </DashboardProvider>
  );
}

export default App;
