import React from 'react'

function Header() {
  return (
    <div className='headSection'>
        <div className='left'>
            <div className='title'>
                <h1>Shopping Hubb</h1>  
            </div>
        </div>
        <div className='center'>
            <ul>
                <li>
                    Men
                </li>
                <li>
                    Women
                </li>
                <li>
                    Children
                </li>
                <li>
                    Beauty
                </li>
            </ul>
        </div>
        <div className='search'>
            <input type="text" placeholder='Search....'></input>
        </div>
        <div className='right'>
            <div className='signIn'>
                SignIn/SignUp
            </div>
            <div className='cart'>
                Cart
            </div>
        </div>
    </div>
  )
}

export default Header