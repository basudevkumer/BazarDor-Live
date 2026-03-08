import React from 'react'
import Container from '../../common/Container'
import { categoriesItems, sortOptions } from '../../../helper/projectArryObj'
import HomeProducts from '../../home/product/Index'

const FilterPanel = () => {
    return (
        <div>
            <Container>
                <div>
                    <div className='flex  items-center gap-x-12 justify-center'>
                        <h2 className='heading-two '>পল্লবী থানার আজকের বাজার দর</h2>
                        <p className='text-secondary  '> Date :- 10th ,  2026</p>
                    </div>
                    <div className='grid grid-cols-7 pt-10'>
                        <div className=' space-y-6'>
                            <h3 className='heading-five'>পণ্যের বিভাগসমূহ</h3>
                            <div>
                                {
                                    categoriesItems.map(items => {
                                        return (
                                            <label key={items.id} htmlFor={items.name} className="flex items-center gap-2 cursor-pointer">
                                                <input type="checkbox" id={items.name} />
                                                <span>{items.name}</span>
                                            </label>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='col-span-6'>
                            <div className='flex items-center justify-between'>
                                <h4>৫টি  ফলাফল পাওয়া গেছে</h4>
                                <div className="flex items-center gap-x-2">
                                    <p className="">সাজান:</p>

                                    <select
                                        className=" rounded px-2 py-1"
                                       
                                    >
                                        {sortOptions.map((items, index) => (
                                            <option
                                                value={items.value}
                                                className=""
                                                key={index}
                                            >
                                                {items.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='pt-10'>
                              <HomeProducts />
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FilterPanel
