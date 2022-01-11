import { useLocation } from 'react-router-dom'
import '../css/failPage.css'

function ProductFail() {
  const search = useLocation().search
  const message = new URLSearchParams(search).get('message')

  return (
    <main className="container row">
      <h1>An error ocurred</h1>
      <h3>{ message }</h3>

      <div className="buttons">
        <a href="/add-product" className="route-button">Try again</a>
        
        <a href="/" className="route-button">Home page</a>
      </div>
    </main>
  )
}

export default ProductFail