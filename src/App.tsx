import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import { menuItems } from "./data/db"

import TipPercentatgeForm from "./components/TipPercentatgeForm"
import { useReducer } from "react"
import { initialState, orderReducer } from "./reducers/order-reducer"

function App() {

 const [state, dispatch] = useReducer(orderReducer, initialState)


  return (
    <>
      <header className="bg-teal-400 py-5">
      <h1 className="text-center text-4xl font-black text-white ">Calculadora de propinas y consumo </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2"> 
        {/*max-w-7xl = cómo una tabla, mx-auto es a lo ancho
        py = padding eje Y
        del main en responsive md, se separe en 2 columnas.
        p-5 = padding de 5 */}
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10"> {/*separación del padre a los hijos entre los dif elementos y mt= margin top  */}
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>
        
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">

          {state.order.length ? (
            <>
              <OrderContents 
              order={state.order}
              dispatch={dispatch}
              />


              <TipPercentatgeForm
              dispatch = {dispatch}
              tip = {state.tip}
              />


              <OrderTotals
                order={state.order}
                tip={state.tip}
                dispatch = {dispatch}
              />
          </>
          ) : (
            <p className="text-center">La orden esta vacía</p>
          )}

        </div>
        
      </main>
    </>
  ) 
}

export default App
