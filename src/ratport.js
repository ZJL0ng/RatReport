export default function Ratport() {
    return (
      <div className="min-h-screen bg-[#fdfbf3]">
        {/* Header */}
        <header className="bg-orange-600 p-4 flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold">Ratport</h1>
          <nav className="flex gap-4">
            <a href="#" className="text-white">About</a>
            <a href="#" className="text-white">Resources</a>
            <button className="bg-white text-black px-4 py-2 rounded border">Report Sighting</button>
          </nav>
        </header>
  
        {/* Main Content */}
        <main className="p-8 text-center">
          <h2 className="text-lg">Now viewing stats from:</h2>
          <h1 className="text-5xl font-bold">Cambridge</h1> 
  
          <div className="mt-6 flex justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Report Sighting</button>
          </div>
  
          {/* Stat Boxes */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-gray-300 h-40 rounded-lg"></div>
            <div className="bg-gray-300 h-40 rounded-lg"></div>
          </div>
  
          {/* Links */}
          <div className="mt-6 flex justify-center gap-4">
            <button className="border border-blue-600 text-black px-6 py-3 rounded">Your local trash pickup route & schedule</button>
            <button className="border border-blue-600 text-black px-6 py-3 rounded">Learn about local disposal guidelines</button>
            <button className="border border-blue-600 text-black px-6 py-3 rounded">Do more with BOS:311</button>
          </div>
        </main>
      </div>
    );
  }
  