import React from 'react'
import Container from '../common/Container'
import NewsCard from '../common/NewsCard'

const MarketUpdatesComp = () => {
    return (
        <section>
            <Container>
                <div>
                    <div>   
                        <h1 className=" py-10 heading-one text-center">
                        সারা বাংলাদেশের বাজার দর সংবাদ
                    </h1>
                    </div>
                    <div className='grid grid-cols-4 gap-12'>
                        {[...new Array(10)].map((_,index) => {
                            return <NewsCard key={index}/>
                        })}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default MarketUpdatesComp
