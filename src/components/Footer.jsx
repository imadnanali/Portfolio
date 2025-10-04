export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 text-center">
      <hr className="border-gray-700 mx-auto w-11/12 mb-6" />

      <div className="text-sm sm:text-base">
        <p>
          Designed and Developed by{" "}
          <span className="font-semibold text-green-400">Adnan Ali</span>
        </p>
        <p className="mt-1">
          Built with Vite React & Tailwind CSS | Hosted on Render
        </p>
      </div>
    </footer>
  );
}
