import { BsCartPlus } from "react-icons/bs";

export function Home() {
  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em alta
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          <section className="w-full">
            <img
              className="w-full rounded-lg max-h-70 mb-2"
              src="https://images.tcdn.com.br/img/img_prod/1053291/fone_de_ouvido_apple_airpods_pro_branco_1424022427_1_6344a9b8cce01b2713385fe41c6c8a2a.jpg"
              alt="Logo do produto"
            />
            <p className="font-medium mb-2 mt-1">Airpods Pro</p>

            <div className="flex gap-3 items-center">
              <strong className="text-zinc-700/90">R$ 1000</strong>

              <button className="bg-zinc-900 p1 rounded">
                <BsCartPlus size={20} color="#FFF" />
              </button>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
