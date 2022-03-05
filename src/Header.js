import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function header() {
  return (
    <div className='header'>
        <img 
        className='header_logo'
         src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
         alt='' />
          <div className='header_search'>
            <input
            className='header_searchInput'
            type="text"
            // logo 
            ></input>
            <SearchIcon
            className='header_searchIcon'></SearchIcon>
            
          </div>

          <div className='header_nav'>
              <div className='header_option'>
                    <span
                    className='header__optionLineOne'>
                        Hello Guest 
                    </span>
                    <span
                    className='header__optionLineTwo'>
                        Sign In 
                    </span>
              </div>
              <div className='header_option'>
              <span
                    className='header__optionLineOne'>
                        Returns
                    </span>
                    <span
                    className='header__optionLineTwo'>
                        & Orders 
                    </span>
              </div>
              <div className='header_option'>
              <span
                    className='header__optionLineOne'>
                        Your 
                    </span>
                    <span
                    className='header__optionLineTwo'>
                        Prime  
                    </span>
              </div>
              <div className='header_optionBasket'>
                    <ShoppingBasketIcon/>

                <span className='header__optionLineTwo  header_basketCount'>0</span>
              </div>
          </div>
    </div>
  )
}

export default header