import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem, 
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    /**
     * w full = ancho 100%
     * justify between = letra izq y precio derecha del contenedor
     * mb = margin bottom */
    <button className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 mb-5"
            onClick={() => addItem(item)}
    >
    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>
    </button>

  )
}
