import { useState } from "react";

export default function ProductList() {

    const [products, setProducts] = useState([
        {
            id: 1,
            barcode: "002178",
            descripition: "achocolatado nescal 400g",
            price: 7.60,
            image: "https://a-static.mlcdn.com.br/1500x1500/achocolatado-nescau-2-0-actigen-e-370g-nestle/mercadotemdetudo/3dd3fa382de611ec9fda4201ac185049/9dd30e6b98697cc14b35a40d9e0cb9e1.jpeg"
        },
        {
            id: 2,
            barcode: "002178",
            descripition: "café damasco 300g",
            price: 9.30,
            image: "https://a-static.mlcdn.com.br/1500x1500/achocolatado-nescau-2-0-actigen-e-370g-nestle/mercadotemdetudo/3dd3fa382de611ec9fda4201ac185049/9dd30e6b98697cc14b35a40d9e0cb9e1.jpeg"
        },
        {
            id: 3,
            barcode: "002178",
            descripition: "pão francês 600g",
            price: 3.10,
            image: "https://a-static.mlcdn.com.br/1500x1500/achocolatado-nescau-2-0-actigen-e-370g-nestle/mercadotemdetudo/3dd3fa382de611ec9fda4201ac185049/9dd30e6b98697cc14b35a40d9e0cb9e1.jpeg"
        }
    ])

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>cód Barras</th>
                        <th>Descrição</th>
                        <th>preço</th>
                        <th>imagem</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => (
                        <tr>
                            <td>{p.barcode}</td>
                            <td>{p.descripition}</td>
                            <td>R$ {p.price.toFixed(2).replace(".",",")}</td>
                            <td>
                                <img src={p.image} width="60" alt="" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    )
}

