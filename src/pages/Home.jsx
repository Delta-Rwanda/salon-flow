import { useState,useEffect } from 'react'
import { Search, ArrowRightCircle,MapPin,CalendarDaysIcon,Star,Scissors,UsersIcon,ShoppingBag } from 'lucide-react'
import image1 from  '../assets/saloonImage1.jpg'
import image2 from '../assets/saloonImage2.jpg'
import image3 from '../assets/saloonImage3.webp'
import gasabo from '../assets/gasabo.jpg'
import nyarugenge from '../assets/nyarugenge.png'
import kicukiro from '../assets/kicukiroDistrict.webp'
import testimonial from  '../assets/testimonial.jpg'
import SearchInputs from '../components/SearchInputs'

const Home = () => {
  const [isHoverd, setIsHoverd] =  useState(false)
  const [current,setCurrent] = useState(0)
 
  const districtDetails = [
    {
      id:1,
      image: gasabo,
      title: "Gasabo District",
      location: "Kigali, Rwanda",
      TatalSaloons: "45",
    },
    {
      id: 2,
      image: nyarugenge,
      title: "Nyarugenge District",
      location: "Kigali, Rwanda",
      TatalSaloons: "45",
    },
    {
      id: 3,
      image: kicukiro,
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

  const HowDetails = [
    {
      id: 1,
      number: "1",
      icon: <Search />,
      title: "Find Nearby Salons",
      descr: "Search for salons in your area and browse their services, reviews, and availability"
    },
    {
      id: 2,
      number: "2",
      icon: <CalendarDaysIcon />,
      title: "Book Your Appointment",
      descr: "Select your preferred service, date, and time to schedule your appointment."
    },
    {
      id: 1,
      number: "3",
      icon: <Star />,
      title: "Enjoy Your Service",
      descr: "Visit the salon, enjoy your service, and leave a review to help others."
    },
  ]

  const serviceDetails =[
    {
      id:1,
      icon: <Scissors />,
      title: "Hair Cuts & Styling",
    },
    {
      id:2,
      icon: <Star />,
      title: "Colors & Highlights",
    },
    {
      id:3,
      icon: <UsersIcon />,
      title: "Treatment and Care",
    },
    {
      id:4,
      icon: <ShoppingBag />,
      title: "Beauty Product",
    },
  ]


  return (
    <div className='bg-white container p-5 h-screen mx-auto px-4 md:px-8 lg:px-32'>
      <div className='flex flex-col  gap-5 pb-10'>

        {/* Welcome Images */}
        <div className='w-full h-[300px] md:h-[550px] rounded-lg overflow-hidden flex justify-center items-center relative'>
          <div className='w-full h-full bg-gradient-to-r from-[#333333]/60 to-transparent z-30 absolute' />
          {images.map((img, index)=>
            <img 
            key={index}
            src={img} alt={`slide-${index}`} 
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}/>
          )}

          {/* Welcome Message */}
          <div className='flex flex-col justify-center items-center z-50 gap-16'>
          <div className='bg-black/50 w-80 md:w-[400px] rounded-lg flex flex-col items-center p-5'>
              <h1 className='text-white font-bold text-[20px] mb-5'>Style your perfect look</h1>
              <p className='text-white text-sm max-w-72 text-center'>Get personalized salon recommendations tailored to your beauty needs.</p>
          </div>

          {/* Search Inputs */}
          <div className='bg-[#D9D9D9]/50 w-[650px] flex justify-center items-center p-3 rounded-lg gap-4'>
            <SearchInputs placeholder= "Search for salons, services..." Icon={Search}/>
            <SearchInputs placeholder="Location" Icon={MapPin}/>
            <button className='bg-[#DB2777] p-3 w-40 rounded hover:bg-[#be185d] cursor-pointer text-white font-bold'>Search</button>
          </div>
          </div>
        </div>
        {/* How to use salon flow */}
        <div className='mt-5'>
          <h1 className='text-[#333333] text-2xl text-center font-bold mb-3'>How Salon-Flow Works</h1>
          <p className='text-[#333333] font-thin text-center'>Connecting clients with salons has never been easier</p>

          <div className='flex flex-row gap-12 mt-10'>
          {HowDetails.map((how)=>
            <div
            key={how.id}
            className='bg-white w-96 p-4 rounded border-2 border-gray-300 cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#DB2777]'
            >
              <div className='flex flex-col'>
              <div className='flex justify-between'>
                <p className='text-[#DB2777]'>{how.icon}</p>
                <p className='font-bold text-2xl'>{how.number}</p>
              </div>

              <div className='flex flex-col gap-4 mt-3'>
                <h1 className='font-semibold text-xl'>{how.title}</h1>
                <p className='text-[#333333] font-thin text-sm'>{how.descr}</p>
              </div>
              </div>
            </div>
          )}
          </div>
        </div>

        {/* Districts */}
        <div className=' flex flex-col gap-3 mt-5 mb-10'>
          <h1 className='md:text-2xl text-lg text-[#333333] font-bold text-center mb-8'>Where to Style? Choose Your District!</h1>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full'>
          {districtDetails.map((district)=>
          <div 
          key={district.id}
          className='bg-white h-96 overflow-hidden rounded-t-lg rounded-lg border-2 border-gray-300 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:border hover:border-[#be185d] cursor-pointer'
          >
            <div className='w-full h-64 overflow-hidden'>
              <img src={district.image} alt="" className='w-full h-full object-cover hover:opacity-40' />
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

        <div className='mb-10'>
          <h1 className='text-center font-bold text-2xl text-[#333333] mb-3'>Popular Services</h1>
          <p className='text-center font-thin text-[#333333]'>Hear from salon owners and clients who use Salon-Flow</p>
          <div className='mt-10 flex flex-row gap-4'>
          {serviceDetails.map((service)=>
            <div
            key={service.id}
            className='w-96 p-5 flex flex-col justify-center items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer'
            >
              <p className='text-[#DB2777]'>{service.icon}</p>
              <h1 className='text-lg font-medium hover:text-[#DB2777]'>{service.title}</h1>
            </div>
          )}
          </div>
        </div>

        {/* Testimonials */}
        <div 
          className={`bg-[#33313E] h-28 w-full rounded-lg overflow-hidden flex flex-row relative cursor-pointer}`}
          onMouseEnter={()=> setIsHoverd(true)}
          onMouseLeave={()=> setIsHoverd(false)}
        >
          <img src={testimonial} alt="TestimonialImage" className='md:flex hidden object-cover w-1/2 h-full' />
          <div className='absolute right-8 md:right-40 mt-3 flex flex-col justify-center items-center'>
            <h1 className='text-white font-bold text-[20px] mb-2'>What Clients Says ?</h1>
            <p className='text-[13px] max-w-[300px] text-center text-[#FFB6C1]'>Real experiences, real beauty! See what our happy customers have to say</p>
          </div>

          {isHoverd && (
            <div className='bg-[#33313E]/70 h-full w-full absolute z-50 flex justify-center items-center gap-3 cursor-pointer'>
              <h1 className='text-white font-bold text-[20px] text-center'>View Testimonials</h1>
              <ArrowRightCircle className='text-white'/>
            </div>
          )}
        </div>
        
        {/* Common Questions Asked */}
        <div className='flex flex-col gap-3 md:gap-10 mt-3 md:mt-10'>
          <h1 className='text-[25px] text-[#333333] font-bold text-center'>Commonly Asked Questions</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 justify-between gap-5 md:gap-8 mt-3 '>
            {commonlyQuestionAsked.map((quest, index)=>
              <div
              key={index}
              className='flex flex-col gap-2'
              >
                <h1 className='text-[#DB2777] font-semibold text-[20px] '>{quest.Question}</h1>
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
