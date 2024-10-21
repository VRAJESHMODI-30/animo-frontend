import React from 'react'
import Card_Carousel from '../../Components/Cards Carousel/Card_Carousel'
import List from '../../Components/List/List'

function Explore() {
    return (
        <div className='w-100 my-3'>
            <div className="left d-flex flex-column w-75">
                <div className='mb-3'><Card_Carousel title='Latest Releases' /></div>
                <div className='my-3'><Card_Carousel title='Wishlist' star={false} bg='grey' cardHeight={110} cardWidth={150} cardlist={[1,2,3,4,5]} /></div>
                <div className="my-3"><List /></div>
            </div>
            <div className="right">

            </div>
        </div>
    )
}

export default Explore