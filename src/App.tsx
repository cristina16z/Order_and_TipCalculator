import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const {addItem} = useOrder()
 
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
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h2>Consumo</h2>
        </div>
        
      </main>
    </>
  ) 
}

export default App
