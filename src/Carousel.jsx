import { useState } from "react";
function Carousel()
{
    const[slide,setSlide]=useState(0);

    const carouselCards=[
        {
            link:"",
            image:"\carousel1_1.jpg"
        },
        {
            link:"",
            image:"\carousel1_2.jpg"
        },
        {
            link:"",
            image:"\carousel1_3.jpg"
        },
        {
            link:"",
            image:"\carousel1_4.jpg"
        },
        {
            link:"",
            image:"\carousel1_5.jpg"
        },
        {
            link:"",
            image:"\carousel1_6.jpg"
        },
        {
            link:"",
            image:"\carousel2_1.jpg"
        },
        {
            link:"",
            image:"\carousel2_2.jpg"
        },
        {
            link:"",
            image:"\carousel2_3.jpg"
        },
        {
            link:"",
            image:"\carousel2_4.jpg"
        },
        {
            link:"",
            image:"\carousel2_5.jpg"
        },
        {
            link:"",
            image:"\carousel2_6.jpg"
        }
    ]


return(
    <>
        <div className="overflow-hidden mx-12 mt-10">
            <div className={`flex transition-transform duration-500 ${slide===1?"-translate-x-full":""}`}>
                {carouselCards.map((card)=>(
                    <a href={card.link} className="w-1/6 shrink-0">
                        <img src={card.image} alt="" />
                    </a>    
                ))}
            </div>
        </div>
       <div className="flex items-center justify-center gap-1 my-1">
            <button onClick={()=>setSlide(0)} className={slide===0?"text-black":"text-gray-500"}>●</button>
            <button onClick={()=>setSlide(1)} className={slide===1?"text-black":"text-gray-500"}>●</button>
        </div>
    </>
)
}

export default Carousel;