import { genres, platforms, publishers, years } from "@/data";

export default async function AddPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 to-blue-200 p-4">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Agregar juego</h1>
        <form>
          <label className="block mb-2 text-gray-700" htmlFor="Name">
            Nombre del juego
          </label>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="text"
            id="Name"
            name="Name"
            placeholder="Ingrese nombre del juego"
          />

          <label className="block mb-2 text-gray-700" htmlFor="Platform">
            Plataforma
          </label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            id="Platform"
            name="Platform"
          >
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="Year">
            Año
          </label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            id="Year"
            name="Year"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="Genre">
            Género
          </label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            id="Genre"
            name="Genre"
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="Publisher">
            Desarrollador
          </label>
          <select
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            id="Publisher"
            name="Publisher"
          >
            {publishers.map((publisher) => (
              <option key={publisher} value={publisher}>
                {publisher}
              </option>
            ))}
          </select>

          <label className="block mb-2 text-gray-700" htmlFor="NA_Sales">
            Ventas en Norteamérica
          </label>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="number"
            id="NA_Sales"
            name="NA_Sales"
            placeholder="Ingrese el total de ventas"
          />

          <label className="block mb-2 text-gray-700" htmlFor="EU_Sales">
            Ventas en Europa
          </label>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="number"
            id="EU_Sales"
            name="EU_Sales"
            placeholder="Ingrese el total de ventas"
          />

          <label className="block mb-2 text-gray-700" htmlFor="JP_Sales">
            Ventas en Japón
          </label>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="number"
            id="JP_Sales"
            name="JP_Sales"
            placeholder="Ingrese el total de ventas"
          />

          <label className="block mb-2 text-gray-700" htmlFor="Other_Sales">
            Otras ventas
          </label>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="number"
            id="Other_Sales"
            name="Other_Sales"
            placeholder="Ingrese el total de ventas"
          />

          <button
            className="w-full p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            type="submit"
          >
            Agregar juego
          </button>
        </form>
      </div>
    </div>
  );
}
