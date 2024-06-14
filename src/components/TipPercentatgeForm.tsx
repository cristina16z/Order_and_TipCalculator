import type { Dispatch, SetStateAction } from "react"

const tipOptions = [

    {
        id: 'tip-02',
        value: .02,
        label: '2%'
    },
    {
        id: 'tip-05',
        value: .05,
        label: '5%'
    },

    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
        id: 'tip-15',
        value: .15,
        label: '15%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-25',
      value: .25,
      label: '25%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
      },
  ]


type TipPercentatgeFormProps= {
  setTip: Dispatch<SetStateAction<number>>,
  tip: number
}

export default function TipPercentatgeForm({setTip, tip} : TipPercentatgeFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>
        <form>
            {tipOptions.map(tipOption => (
            <div key={tipOption.id} className="flex gap-2">
                <label htmlFor={tipOption.id}>{tipOption.label}</label>
                <input
                    id={tipOption.id}
                    type="radio"
                    name="tip"
                    value={tipOption.value} /**para que sólo deje seleccionar 1 opción */
                    onChange={ e => setTip(+e.target.value)}
                    checked={tipOption.value === tip } /**en caso de que sean iguales, se habilita */

                />
            </div>
            ))}
        </form>
    </div>
  )
}
