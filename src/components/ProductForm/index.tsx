import { useState } from "react"
import styles from "./styles.module.scss"
import {v4 as uuid} from "uuid"
import { Product } from "../../models/product";

interface ProductFormProps {
    onSave: (product: Product) => void
}

export default function ProductForm(props: ProductFormProps) {

    const [barcode, setBarcode] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [price, setPrice] = useState<number>()
    const [image, setImage] = useState<string>() 
    
    function save(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()
        const newProduct: Product = {
            id: uuid(),
            barcode: barcode!,
            description: description!,
            price: price!,
            image:image!
        }
        props.onSave(newProduct)
    }

    return (
        <form action="">
            <div>
                <label>Cód Barras:</label>
                <input required value={barcode} onChange={event => setBarcode(event.target.value)} type="number" />
            </div>
            <div>
                <label>Descrição:</label>
                <input required value={description} onChange={event => setDescription(event.target.value)} type="text" />
            </div>
            <div>
                <label>Preço:</label>
                <input required value={price} onChange={event => setPrice(Number(event.target.value))} type="number"/>
            </div>
            <div>
                <label>URL Imagem:</label>
                <input required value={image} onChange={event => setImage(event.target.value)} type="text"/>
            </div>
            <button onClick={e => save(e)}>Enviar</button>
        </form>
    )
}
