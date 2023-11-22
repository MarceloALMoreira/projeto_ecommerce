import { useEffect, useState } from "react";
import "./App.css";
import axios, { AxiosResponse } from "axios";

// Vamos definir os tipo para os dados de um post
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  photo: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<{ count: number; products: Product[] }> =
          await axios.get(
            `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=id&orderBy=DESC`
          );
        console.log("Response:", response);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    fetchData();
  }, [page, rows]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <img src={product.photo} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleLoadMore}>Carregar Mais</button>
    </div>
  );
}

export default App;
