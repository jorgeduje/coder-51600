import React, { useEffect, useState } from "react";

import axios from "axios";

const ProductsBack = () => {
  const [products, setProducts] = useState([]);
  const [isCreated, setIsCreated] = useState(false);

  useEffect(() => {
    setIsCreated(false)
    // LA SOLICITUD A LA API
    const data = axios.get("http://localhost:5000/products");

    data.then((res) => setProducts(res.data));
  }, [ isCreated ]);

  const newProduct = {
    title: "new balance",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1d1HFb4mdyKpvzfBbPCc2ShAg0bgp7PjwQ&usqp=CAU",
  };

  const addProduct = () => {
    const create = axios.post("http://localhost:5000/products", newProduct);
    create.then((res) => {
        console.log(res)
        setIsCreated(true)
    }).catch((err) => console.log(err));
  };

  const updateProduct = (id) => {
    const update = axios.patch(`http://localhost:5000/products/${id}`, {
      title: "wilson",
    });
    update.then((res) => console.log(res)).catch((err) => console.log(err));
  };

  const deleteProduct = (id) => {
    const del = axios.delete(`http://localhost:5000/products/${id}`);
    del.then((res) => console.log(res)).catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Productos desde el backend</h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "30px",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "90vh",
        }}
      >
        {products.map((e, i) => {
          return (
            <div
              style={{
                width: "300px",
                height: "300px",
                border: "2px solid black",
                textAlign: "center",
              }}
              key={e.id}
            >
              <h2>{e.title}</h2>
              <img
                src={e.img}
                alt=""
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>

      {/*  AGREGAR UN PRODUCTO */}
      <button onClick={addProduct}>Crear producto</button>

      {/* MODIFICAR UN PRODUCTO */}

      <button onClick={() => updateProduct("2")}>Modificar producto</button>


      {/* ELIMINAR UN PRODUCTO */}
            <button onClick={()=>deleteProduct("4")}>Eliminar producto</button>
    </div>
  );
};

export default ProductsBack;
