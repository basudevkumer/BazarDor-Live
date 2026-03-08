import React from 'react'

const NewsCard = () => {
    return (
        <div className=' rounded-[4px] '>

            <figure>
                <img src="https://eduindex.org/wp-content/uploads/2021/07/1913623.jpg?w=1024" alt="newsimages" className='w-full h-[200px] object-cover' />
            </figure>
            <div className='mt-4 p-2'>
                <p className=''>08 মার্চ ২০২৬</p>
                <h3 className='heading-six mt-5 mb-2' >চট্টগ্রামের মুরাদপুর বাজারে মসুর ডালের দাম কমেছে</h3>
                <p className='line-clamp-[2]'>আজকের বাজারে পল্লবী থানার সবজি বাজারে দাম কিছুটা বৃদ্ধি পেয়েছে। আলু, পেঁয়াজ এবং শাকসবজির দাম গতকের তুলনায় সামান্য বেড়েছে। কৃষক ও বিক্রেতাদের সঙ্গে আলোচনা অনুযায়ী আগামী দিনেও দাম স্থিতিশীল থাকার সম্ভাবনা আছে।</p>
                <div className='mt-5'>
                    <button className=' rounded-md border py-2 px-4'>বিস্তারিত দেখুন</button>
                </div>
            </div>

        </div>
    )
}

export default NewsCard
