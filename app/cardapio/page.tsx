import Image from "next/image"

export default function CardapioPage() {

    const produto = [
        {
            id: 1,
            nome: "Hambúrguer Artesanal",
            preco: 29.30,
            imagem: "/hamburguer.jpg"
        },
        {
            id: 2,
            nome: "Pizza Calabresa",
            preco: 49.90,
            imagem: "/pizza.jpg"
        },
        {
            id: 3,
            nome: "Refrigerante Coca-cola 2L",
            preco: 20.00,
            imagem: "/coca.jpg"
        }
    ]

    return (
        <div className="p-8 bg-pink-300 min-h-screen">gi
            <h1 className="mb-6 text-3xl font-bold">Cardapio</h1>

            <div className="grid grid-cols-3 gap-6">
                {
                    produto.map((produto) => (
                        <div key={produto.id}>
                            <Image
                                src={produto.imagem}
                                alt={produto.nome}
                                width={400}
                                height={250}
                                className="h-40 w-full rounded object-contain"
                            />
                            <h2>
                                {produto.nome}
                            </h2>

                            <p className="mt-2 text-lg text-green-600">
                                {produto.preco.toFixed(2)}
                            </p>
                            
                            <button className="mt-4 w-full
                            roudend bg-pink-400 py-2 text-white
                            cursor-pointer hover:bg-amber-700
                            ">
                                Fazer pedido

                            </button>


                        </div>
                    ))
                }
            </div>
        </div>
    )
}