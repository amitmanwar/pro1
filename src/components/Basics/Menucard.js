import React from 'react'

const Menucard = ({menuData}) => {
  return (
    <>
    <section className='main-card--cointainer'>
{
    menuData.map((curElem)=>{
        return (
            <>
            <div className='card-container' key={curElem.id}>
      <div className='card'>
        <div className='card-body'>
          <span className='card-number card-circle subtle'>{curElem.id}</span>
          <span className='card-author subtle'>Breakfast</span>
          <h2 className='card-title'>{curElem.name}</h2>
          <span className='card-description subtle'>
            I love maggi realy oo yues lorem  Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public`
          </span>
          <div className='card-read'>Read</div>
        </div>
        <img src={curElem.image} alt="images" className='card-media' />
      </div>
    </div>
    </>
        )
    })
}

</section>
    </>
  )
}

export default Menucard