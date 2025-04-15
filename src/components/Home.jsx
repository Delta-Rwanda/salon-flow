import { useState,useEffect } from 'react'
import { Search, ArrowRightCircle } from 'lucide-react'
import image1 from  '../assets/saloonImage1.jpg'
import image2 from '../assets/SaloonImage2.jpg'
import image3 from '../assets/SaloonImage3.webp'
import Gasabo from '../assets/Gasabo.jpg'
import Nyarugenge from '../assets/Nyarugenge.png'
import Kicukiro from '../assets/Kicukiro District.webp'
import testimonial from  '../assets/testimonial.jpg'



const Home = () => {
  const [isHoverd, setIsHoverd] =  useState(false)
  const [current,setCurrent] = useState(0)
 

  const districtDetails = [
    {
      id:1,
      image: Gasabo,
      title: "Gasabo District",
      location: "Kigali, Rwanda",
      TatalSaloons: "45",
    },
    {
      id: 2,
      image: Nyarugenge,
      title: "Nyarugenge District",
      location: "Kigali, Rwanda",
      TatalSaloons: "45",
    },
    {
      id: 3,
      image: Kicukiro,
      title: "Kicukiro District",
      location: "Kigali, Rwanda",
      TatalSaloons: "45",
    },
  ]

  const images = [image1,image2,image3]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((previous) => (previous + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [current])

  const commonlyQuestionAsked = [
    {
      Question: "Do salons offer home service?",
      Answer: "Some salons do! Look for the Home Service Available tag on the salon’s profile"
    },
    {
      Question: " Can I cancel or reschedule my appointment?",
      Answer: "Yes! You can cancel or reschedule your appointment through your account before the scheduled time."
    },
    {
      Question: "How do I find salons near me?",
      Answer: "Use our search feature to find salons by district or location and choose the one that fits your needs."
    },
    {
      Question: "What types of beauty services are available?",
      Answer: "Our partnered salons offer haircuts, styling, coloring, manicures, pedicures, facials, and more!"
    },
  ]



  return (
    <div className='bg-white container p-5 h-screen mx-auto px-4 md:px-8 lg:px-32'>
      <div className='flex flex-col  gap-5 pb-10'>
        {/* Search Box */}
        <div className='flex justify-center items-center'>
          <div className='flex flex-row items-center relative'>
            <Search className= "absolute ml-2 text-gray-500 " />
            <input type="text" name="" id="" className='md:text-[15px] text-[12px] border-2 border-gray-300 w-[350px] md:w-[500px] h-10 pl-10 rounded-lg outline-none focus:ring-1 focus:ring-[#FFB6C1]' placeholder ="Search nearby salon or your favorite" />
            <button className="absolute right-1 bg-[#FFB6C1] h-8 md:w-28 w-20 rounded-md cursor-pointer hover:bg-[#b7848c] hover:text-white">Search</button>
          </div>
        </div>

        {/* Welcome Images */}
        <div className='w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden flex justify-center items-center relative'>
          {images.map((img, index)=>
            <img 
            key={index}
            src={img} alt={`slide-${index}`} 
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}/>
          )}

          <div className='bg-black/50 w-[300px] md:w-[400px] absolute rounded-lg flex flex-col items-center p-8 z-30'>
              <h1 className='text-white font-bold text-[20px] mb-5'>Style your perfect look</h1>
              <p className='text-white text-[15px] max-w-[250px] text-center'>Get personalized salon recommendations tailored to your beauty needs.</p>
          </div>
        </div>

        {/* Districts */}
        <div className=' flex flex-col gap-3'>
          <h1 className='md:text-[25px] text-[18px] text-[#333333] font-bold'>Where to Style? Choose Your District!</h1>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full'>
          {districtDetails.map((district)=>
          <div 
          key={district.id}
          className='bg-white h-96 overflow-hidden rounded-t-lg rounded-lg border-2 border-gray-300 shadow-xl transition-transform duration-300 hover:scale-105 hover:border hover:border-[#FFB6C1] cursor-pointer'
          >
            <div className='w-full h-64 overflow-hidden'>
              <img src={district.image} alt="" className='w-full h-full object-cover' />
            </div>

            <div className='flex flex-col gap-3 p-3 overflow-y-auto'>
              <h1 className='text-[15px] font-black text-[#333333]'>{district.title}</h1>
              <p className='text-[12px] font-thin text-[#333333]'>{district.location}</p>
              <p className='text-[15px] text-[#333333] font-semibold'>Total Saloons: {district.TatalSaloons}</p>
            </div>
          </div>
          )}
        </div>
        </div>

        {/* Testimonials */}
        <div 
          className={`bg-[#33313E] h-28 w-full rounded-lg overflow-hidden flex flex-row relative cursor-pointer }`}
          onMouseEnter={()=> setIsHoverd(true)}
          onMouseLeave={()=> setIsHoverd(false)}
        >
          <img src={testimonial} alt="TestimonialImage" className='md:flex hidden object-cover w-1/2 h-full' />
          <div className='absolute right-8 md:right-40 mt-3 flex flex-col justify-center items-center'>
            <h1 className='text-white font-bold text-[20px] mb-2'>What Clients Says ?</h1>
            <p className='text-[13px] max-w-[300px] text-center text-[#FFB6C1]'>Real experiences, real beauty! See what our happy customers have to say</p>
          </div>

          {isHoverd && (
            <div className='bg-[#33313E]/70 h-full w-full absolute z-50 flex justify-center items-center gap-3'>
              <h1 className='text-white font-bold text-[20px] text-center'>View Testimonials</h1>
              <ArrowRightCircle className='text-white'/>
            </div>
          )}
        </div>
        
        {/* Common Questions Asked */}
        <div className='flex flex-col gap-3 md:gap-5 mt-3 md:mt-5'>
          <h1 className='text-[25px] text-[#333333] font-bold '>Commonly Asked Questions</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 justify-between gap-5 md:gap-8 mt-3 '>
            {commonlyQuestionAsked.map((quest, index)=>
              <div
              key={index}
              className='flex flex-col gap-2'
              >
                <h1 className='text-[#333333] font-bold text-[20px] '>{quest.Question}</h1>
                <p className='text-[#555555]'>{quest.Answer}</p>
              </div>
            )}
            </div>
        </div>

        {/* Leave Comment */}

        <div className='flex flex-col justify-start md:justify-center items-start md:items-center mt-8 gap-2'>
            <h1 className='text-[#333333] font-bold text-[20px]'>Feel free to leave comment☺️</h1>
            <textarea name="" id="" className='w-80 md:w-1/2 p-4 bg-[#D9D9D9] text-[15px] h-28 resize-none border-2 border-[#33313E] rounded-lg outline-amber-800' placeholder='Leave Your Comment Here...'/>

        </div>
      </div>
    </div>
  )
}

export default Home
