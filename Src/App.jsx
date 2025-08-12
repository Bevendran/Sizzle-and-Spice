export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 text-gray-900">
      <header className="w-full py-6 bg-red-600 text-white text-center text-3xl font-bold">
        Sizzle & Spice
      </header>
      
      <main className="flex-1 w-full max-w-4xl p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Delicious Street Food</h1>
        <p className="mb-6">Serving mouth-watering flavours right from our mobile kitchen.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4">Menu Item 1</div>
          <div className="bg-white rounded-lg shadow p-4">Menu Item 2</div>
          <div className="bg-white rounded-lg shadow p-4">Menu Item 3</div>
        </div>
      </main>
      
      <footer className="w-full py-4 bg-gray-800 text-white text-center">
        © {new Date().getFullYear()} Sizzle & Spice. All rights reserved.
      </footer>
    </div>
  )
}
