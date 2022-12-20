import { useState } from "react"
import styles from "./styles.module.scss"

export default function ProductForm() {

    const [barcode, setBarcode] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [price, setPrice] = useState<string>()
    const [image, setImage] = useState<string>()    

    return (
        <form action="">
            <div>
                <label>Cód Barras:</label>
                <input value={barcode} onChange={event => setBarcode(event.target.value)} type="number" />
            </div>
            <div>
                <label>Descrição:</label>
                <input value={description} onChange={event => setDescription(event.target.value)} type="text" />
            </div>
            <div>
                <label>Preço:</label>
                <input value={price} onChange={event => setPrice(event.target.value)} type="number"/>
            </div>
            <div>
                <label>URL Imagem:</label>
                <input value={image} onChange={event => setImage(event.target.value)} type="text"/>
            </div>
            <input type="submit" value="Enviar" />
            <div>
                {barcode},{description},{price},{image}
            </div>
        </form>
    )
}
