import { useState } from "react"

export default function ProductSearch() {

    const [register, setRegister] = useState<string>()

    return (
        <div>
            <input value={register} onChange={event => setRegister(event.target.value)} type="text" />
                    {register}
                    <input type="submit" value="Enviar" />
        </div>
    )
}

