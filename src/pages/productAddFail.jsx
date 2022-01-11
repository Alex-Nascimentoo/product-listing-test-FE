import { useLocation } from 'react-router-dom'

function ProductFail() {
  const search = useLocation().search
  const message = new URLSearchParams(search).get('message')

  alert(message)

  document.location = '/add-product'
}

export default ProductFail