// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { TypeAnimation } from 'react-type-animation';

const slidesData = [
  {
    id: 1,
    image: `https://i.ibb.co/1KCQDT6/photo-small-child-reading-fairy-tale-book-night-his-room-full-enthusiasm-1023475-77.jpg`,
    title: 'Collaborative Learning Platform',
    description: 'Join our online group study sessions and boost your learning with friends. Collaborate on assignments, share knowledge, and grow together!',
  },
  {
    id: 2,
    image: `https://i.ibb.co/0ntWcbx/kids-futuristic-school-classroom-23-2150892818.jpg`,
    title: 'Interactive Study Environment',
    description: 'Experience a dynamic study environment where you can create, complete, and grade assignments with ease. Stay motivated and achieve your goals!',
  },
  {
    id: 3,
    image: `https://i.ibb.co/N6jzYXd/photo-kids-learning-classroom-with-teacher-763111-22890.jpg`,
    title: 'Engaging Study Sessions',
    description: 'Participate in engaging study sessions with your peers. Discuss concepts, ask questions, and explore new ideas together!',
  },
  // Add more data objects for additional slides
];

export default function App() {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="carousel-item relative w-full">
              <img src={slide.image} className="w-full h-[300px] object-cover" alt="vbnm" /> {/* Added object-cover */}
              <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.5)] w-full h-full transform -translate-y-1/2 items-center top-1/2 gap-5">
                <div className='text text-white w-2/4 space-y-7 ml-12'>
                  <h1 className='lg:text-5xl font-bold Postsen text-[#A3FFD6]'><TypeAnimation
                    sequence={[`${slide.title}`, 1000, `${slide.title.slice(0,7)}`, 1000, `${slide.title.slice(7,15)}`, 1000]}
                    
                    repeat={Infinity}
                  /></h1>
                  <p className='text-sm md:text-xl lg:text-xl text-[#7BC9FF]'>{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
