export default function NavBar() {
  return (
    <nav className="bg-blue-500 text-3xl sm:text-6xl rounded text-white p-4">
      <div className="text-center flex flex-col sm:flex-row sm:justify-center">
        <span className="sm:mr-4" role="img">
          🌱
        </span>
        <h1 className="font-title mt-2">Wir-Goals 2.0</h1>
      </div>
    </nav>
  );
}
