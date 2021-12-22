import React, { useState } from 'react'

import { BE_URL, FE_URL } from '../variables'
import Structure from '../components/mainStructure'
import '../css/productAdd.css'

// The component that changes depending on the product type
function SpecialInfo(props) {
  const arr = props.arr

  return (
    <div id={ props.id } className='special-attribute'>
      <hr />

      {
        arr.map(input => {
          return (
            <div key={input.name} className='single-input'>
              <label>{ input.label }</label>
              <input type="number" name={ input.name } id={ input.id } required />
            </div>
          )
        })
      }

      <p id='description'>{ props.description }</p>
    </div>
  )
}

function ProductList() {

  // Reference to the submit button, so it can check all the input fields
  const action = React.createRef()

  const [ specialAttribute, setSpecialAttribute ] = useState([])
  const [ attributeId, setAttributeId ] = useState()
  const [ description, setDescription ] = useState()

  // change the 'special attribute' field depending on the product type
  const changeType = (e) => {
    // Get the product type
    const type = e.target.value

    // Change a state so it can sets the variable form id
    setAttributeId(type)

    // Set all the necessary data for the variable form part
    if(type === 'dvd') {
      setSpecialAttribute([{label: 'Size (MB)', name: 'dvdSize', id: 'size'}])

      setDescription("Please, provide disk size in MB.")
    }else if(type === 'furniture') {
      setSpecialAttribute([
        { label: 'Height (CM)', name: 'height', id: 'height' },
        { label: 'Width (CM)', name: 'width', id: 'width' },
        { label: 'Length (CM)', name: 'length', id: 'length' }
      ])

      setDescription("Please, provide dimensions in Cm.")
    }else if(type === 'book') {
      setSpecialAttribute([{ label: 'Weight (KG)', name: 'weight', id: 'weight' }])

      setDescription("Please, provide product weight in Kg.")
    } 
  }

  // check if all the inputs are fulfilled and then submit the form
  const handleSubmit = (e) => {
    const submit = action.current

    submit.click()
  }

  return (
    <Structure
      pageTitle="Product Add"
      button1="Save"
      button2="Cancel"
      link2={FE_URL}
      onClick1={ handleSubmit }
    >

      <form id="product_form" action={`${BE_URL}/functions.php`} method="post" onSubmit={ handleSubmit }>
        <div className="single-input">
          <label>SKU</label>
          <input type="text" name="sku" id="sku" required  autoComplete='off' />
        </div>

        <div className="single-input">
          <label>Name</label>
          <input type="text" name="name" id="name" required autoComplete='off' />
        </div>

        <div className="single-input">
          <label>Price ($)</label>
          <input type="number" name="price" id="price" required autoComplete='off' />
        </div>

        <div className="single-input">
          <label>Type Switcher</label>
          <select name="productType" id="productType" required onChange={changeType} >
            <option id='disabled' value="" disabled selected>Type Switcher</option>
            <option value="dvd">DVD</option>
            <option value="book">Book</option>
            <option value="furniture">Furniture</option>
          </select>
        </div>

        <SpecialInfo id={ attributeId } arr={ specialAttribute } description={ description } />
        <input type="submit" ref={ action } />
      </form>

    </Structure>
  )
}

export default ProductList