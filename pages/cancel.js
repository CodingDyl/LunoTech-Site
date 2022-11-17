import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsCartX } from 'react-icons/bs';


const Cancel = () => {
  

  return (
    <div className="success-wrapper">
      <div className="cancel">
        <p className="icon">
          <BsCartX />
        </p>
        <h2>Order Cancelled!</h2>
        <p className="email-msg">Please continue Shopping</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Cancel