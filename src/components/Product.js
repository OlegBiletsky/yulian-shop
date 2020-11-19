import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title, img }) => (
  <div>
      <img src={img} style={{width: "200px", height: "200px"}}/>{title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
