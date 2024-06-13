export function formatCurrency(quantity:number ){
    /**lo que tengo convertirlo en USD. Primero el simbolo
     * y luego la cantidad quantity */
    return new Intl.NumberFormat('en-Us', {
        style: 'currency', currency: 'USD'
    }).format(quantity)
}