import '../css/productCard.css'

function getAttribute(type) {
  if(type === 'book') {
    return ['Weight', 'Kg']
  }else if(type === 'dvd') {
    return ['Size', 'MB']
  }else if(type === 'furniture') {
    return ['Dimentions', '']
  }
}

function ProductCard(props) {

  const attribute = getAttribute(props.prodType)

  return (
      <div className="product-card">
        <input
        type="checkbox"
        className="delete-checkbox"
        name="sku"
        value={ props.sku }
        onChange={ props.onCheckboxChange }
        />

        <div className="product-info">
          <p>{ props.sku }</p>
          <p>{ props.productName }</p>
          <p>{ props.productPrice } $</p>
          <p>{ attribute[0] }: { props.specialInfo } { attribute[1] }</p>


        </div>
      </div>      
  )
}

export default ProductCard