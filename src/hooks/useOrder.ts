import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder(){

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem ) => {

        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist){
            console.log('Ya existe...')
            /**map genera y retorna  un arreglo mmodificado
             * entonces si ya existe crea una copia y en la propiedad de quantity,
             * crea una copia y la aumenta en 1
             * de lo contrario, devuelve el mismo objeto
             */
            const updateOrder = order.map (orderItem => orderItem.id == item.id ? 
                                {...orderItem, quantity: orderItem.quantity+1} 
                                : orderItem)
                                
            setOrder(updateOrder)
        }else{

        console.log('Agregando....', item)

        const newItem = {...item, quantity: 1}
        setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        console.log('Eliminando...', id)
        /**eliminaremos de forma que filtraremos para mostrar todos menos el que le pasemos */
        setOrder(order.filter(item => item.id !==id))
    }

  

    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem
    }
}