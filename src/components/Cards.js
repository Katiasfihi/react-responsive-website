import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return(
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='/img-9.jpg'
                                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                                label='Adventure'
                                path='/services'
                            />
                            <CardItem
                                src='/img-4.jpg'
                                text='Travel through the Islands of Bali in a Private Cruise'
                                label='Luxury'
                                path='/services'
                            />                       
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                src='/img-3.jpg'
                                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                                label='Adventure'
                                path='/services'
                            />
                            <CardItem
                                src='/img-6.jpg'
                                text='Travel through the Islands of Bali in a Private Cruise'
                                label='Luxury'
                                path='/services'
                            />
                            <CardItem
                                src='/img-12.jpg'
                                text='Travel through the Islands of Bali in a Private Cruise'
                                label='Luxury'
                                path='/services'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                src='/img-11.jpg'
                                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                                label='Adventure'
                                path='/services'
                            />
                            <CardItem
                                src='/img-10.jpg'
                                text='Explore the hidden waterfall deep inside the Amazon Jungle'
                                label='Adventure'
                                path='/services'
                            />            
                        </ul>
                        
                    </div>
                </div>
        </div>
    )
}

export default Cards 