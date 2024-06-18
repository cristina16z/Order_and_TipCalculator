import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem, 
    dispatch: Dispatch<OrderActions>
}

export default function MenuItem({item, dispatch}: MenuItemProps) {
  return (
    /**
     * w full = ancho 100%
     * justify between = letra izq y precio derecha del contenedor
     * mb = margin bottom */
    <button className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 mb-5"
            onClick={() => dispatch({type: 'add-item', payload : {item}})}
    >
    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>
    </button>

  )
}
