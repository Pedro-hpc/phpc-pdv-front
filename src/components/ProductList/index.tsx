import { useState } from "react";
import { Product } from "../../models/product";

interface ProductListProps{
    products: Product[]
} 

export default function ProductList(props: ProductListProps) {

    return (
        <div>
            <table border={2}>
                <thead>
                    <tr>
                        <th>cód Barras</th>
                        <th>Descrição</th>
                        <th>preço</th>
                        <th>imagem</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(p => (
                        <tr key={p.id}>
                            <td>{p.barcode}</td>
                            <td>{p.description}</td>
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

