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
            <main className="p-8 text-left">
                <h2 className="text-lg">Now viewing stats from:</h2>
                <h1 className="text-5xl font-bold">Cambridge</h1> {/* IF GOOGLE API WORKS: change to reflect detected location */}

                <div className="mt-6 flex justify-center">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Report Sighting
                    </button>
                </div>

                {/* Statistic Boxes */}
                {/* TO XINYI: two flex boxes for the charts, 
                    no need to hardcode image dimensions :3 */}
                <div className="flex justify-center items-center min-h-70">
                    <div className="flex gap-4 w-4/5">
                        <img
                            src="https://sigma-docs-screenshots.s3.us-west-2.amazonaws.com/Workbooks/Visualizations/Build+a+Bar+Chart/bar-chart.png"
                            alt="Image 1"
                            className="w-2/5 rounded-lg shadow-lg"
                        />
                        <img
                            src="https://www.excel-easy.com/examples/images/line-chart/line-chart.png"
                            alt="Image 2"
                            className="w-3/5 rounded-lg shadow-lg"
                        />
                    </div>
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
