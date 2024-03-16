import React from "react";
import Product from "../product/Product.jsx";

const DUMMY_PRODUCTS = [
    {
        id: 1,
        name: "MacBook",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
    },
    {
        id: 2,
        name: "Lenovo Yoga",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
    },
    {
        id: 3,
        name: "Dell Latitude",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
    },

    {
        id: 4,
        name: "HP Pavilion",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
    },
    {
        id: 5,
        name: "Acer Aspire",
        imgURL: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        price: 25,
    },
];

const Products = () => {
    return (
        <div>
            <ul className="products-container">
                {DUMMY_PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Product
                            id={product.id}
                            name={product.name}
                            imgURL={product.imgURL}
                            price={product.price}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
