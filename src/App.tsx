import { menuItems } from './data/db';

function App() {

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">
          Calculadora de propinas y consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-14 grid  md:grid-cols-2">
        <div className="">
          <h2>Menú</h2>
        </div>

        <div className="">
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;
