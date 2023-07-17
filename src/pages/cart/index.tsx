export function Cart() {
  return (
    <div className="w-full max-w-7xl mx-auto px-2">
      <h1 className="font-medium text-2xl text-center my-4 ">Meu carrinho</h1>

      <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img
          src="https://images.tcdn.com.br/img/img_prod/1053291/fone_de_ouvido_apple_airpods_pro_branco_1424022427_1_6344a9b8cce01b2713385fe41c6c8a2a.jpg"
          alt="Logo produto"
          className="w-28"
        />

        <strong>Preço: R$1.000</strong>
        <div className="flex items-center justify-center gap-3">
            <button className="bg-slate-600 rounded text-white font-mediumitems-center
            flex justify-items-center px-2 ">
                -
            </button>
            1
            <button className="bg-slate-600 rounded text-white font-mediumitems-center
            flex justify-items-center px-2 ">
                +
            </button>
        </div>

        <strong className="float-right">
            SubTotal: R$1.000
        </strong>
      </section>

      <p className="font-bold mt-4">Total: R$1.0000</p>
    </div>
  );
}
