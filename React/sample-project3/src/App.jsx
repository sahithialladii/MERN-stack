import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h2 className="text-2xl font-bold">Welcome to my Tailwind Website!</h2>
        <p className="mt-4 text-red-800">This is a website built with React and Tailwind CSS.</p>
      </main>
    </div>
  );
}

export default App;
