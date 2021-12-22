import { useEffect, useState } from 'react'
import axios from 'axios'

import { BE_URL } from '../variables'
import { Structure, ProductCard } from '../components'
import '../css/productList.css'


function ProductList() {

  // List of products to list
  const [products, setProducts] = useState([])

  // List of all the SKUs for deleting route
  let deleteProdList = []

  // Get all existent products from database
  useEffect(() => {
    axios.get(`${BE_URL}/functions.php`)
    .then(res => {
      // Fetch the list of products with all the products
      setProducts(res.data)
    })
  }, [])

  // Put or remove product from delete list
  const handleCheckbox = (e) => {
    if(e.target.checked === true) {

      // Put the SKU from selected checkbox inside the delete list
      deleteProdList.push(e.target.value)

    }else if(e.target.checked === false) {

      // Remove the SKU from deselected checkbox inside the delete list
      const index = deleteProdList.indexOf(e.target.value)
      deleteProdList.splice(index, 1)
    }
  }

  // Delete product and reload page
  const DeleteProducts = () => {

    // Go through each item of the delete list
    deleteProdList.map(prod => {

      // Access the route for deleting the product according to its SKU code
      axios.get(`${BE_URL}/delete.php?sku=${prod}`)
      .then(res => {

        // Reload page after deleting product
        window.location.reload()
      })
    })
  }

  return (
    <Structure
      pageTitle="Product List"
      button1="ADD"
      link1="/add-product"
      button2="MASS DELETE"
      id="delete-product-btn"
      onClick2={ DeleteProducts }
    >

      
      <section className=" grid product-listing">
        {

          // Go through each item from products list and return a card for each one
          products.map(prod => {
            return (
              <ProductCard
                prodType={ prod.type }
                key={ prod.sku }
                sku={ prod.sku }
                productName={ prod.name }
                productPrice={ prod.price }
                specialInfo={ prod.attribute }
                onCheckboxChange={ handleCheckbox }
              />
            )
          })
        }
        
      </section>

    </Structure>
  )
}

export default ProductList