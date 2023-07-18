import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { ProductProps } from "../home";
import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext";

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps>();
  const { addItemCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      if (id !== undefined) {
        try {
          const response = await api.get<ProductProps>(`/products/${id}`);
          setProduct(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    }

    void getProduct();
  }, [id]);

  function handleAddItem(product: ProductProps) {
    addItemCart(product);
    navigate("/cart");
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto my-6">
        {product && (
          <section className="w-full">
            <div className="flex flex-col lg:flex-row">
              <img
                className="flex-1 w-full max-h-72 object-contain"
                src={product?.cover}
                alt={product?.title}
              />

              <div className="flex-1">
                <p className="font-bold text-2xl mt-4 mb-2">{product?.title}</p>
                <p>{product?.description}</p>
                <strong className="text-zinc-700/90">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  onClick={() => handleAddItem(product)}
                  className="bg-zinc-900 p-1 rounded mt-2 ml-3"
                >
                  <BsCartPlus size={20} color="#FFF" />
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
