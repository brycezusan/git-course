//Función para formatear a a moneda local
const formatCurrency = amount => Number(amount).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
})
