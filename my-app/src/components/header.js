import React from 'react';

function header() {
  return (
    <div className='header'>
      <div className='mainNav'>
        <ul className='mobileSecondaryNav'>
            <li className='shop'>
                <img className='storeImage' src={require(`../images/store.gif`)} alt='shop hamburger icon'/>
            </li>
            <li className='search'>
                <img className='searchImage' src={require(`../images/search.gif`)} alt='account icon'/>
            </li>
        </ul>
        <p className='brandLogoContainer'>
            <a href='/'><img className='brandLogo' src={require(`../images/logo.png`)} alt='brand logo'/></a>
        </p>
        <ul className='secondaryNav'>
            <li className='account'>
                <img className='accountImage' src={require(`../images/account.gif`)} alt='account icon'/>
            </li>
            <li className='store'>
                <img className='storeImage' src={require(`../images/store.gif`)} alt='account icon'/>
            </li>
            <li className='search'>
                <img className='searchImage' src={require(`../images/search.gif`)} alt='account icon'/>
            </li>
            <li className='bag'>
                <img className='bagImage' src={require(`../images/bag.gif`)} alt='account icon'/>
            </li>
        </ul>
      </div>
      <div className='shoppingNav'>
          <ul>
              <li>Women</li>
              <li>Men</li>
              <li>Kids</li>
              <li>Accesories</li>
              <li>Clearance</li>
              <li>Brands</li>
          </ul>
      </div>
    </div>
  );
}

export default header;
