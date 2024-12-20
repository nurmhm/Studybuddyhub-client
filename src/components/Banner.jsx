// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { TypeAnimation } from 'react-type-animation';

const slidesData = [
  {
    id: 1,
    image: `https://i.ibb.co/1KCQDT6/photo-small-child-reading-fairy-tale-book-night-his-room-full-enthusiasm-1023475-77.jpg`,
    title: 'Collaborative Learning Platform',
    description:
      'Join online group study sessions and boost your learning by collaborating with friends. Share knowledge and grow together!',
  },
  {
    id: 2,
    image: `https://i.ibb.co/0ntWcbx/kids-futuristic-school-classroom-23-2150892818.jpg`,
    title: 'Interactive Study Environment',
    description:
      'Experience a dynamic study platform to create, complete, and grade assignments effortlessly. Stay focused and achieve your goals!',
  },
  {
    id: 3,
    image: `https://i.ibb.co/N6jzYXd/photo-kids-learning-classroom-with-teacher-763111-22890.jpg`,
    title: 'Engaging Study Sessions',
    description:
      'Participate in vibrant study sessions with peers. Discuss, collaborate, and explore concepts together to excel!',
  },
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
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Background Image Container */}
            <div
              className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#004643] to-[rgba(0, 70, 67, 0.7)]"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-start pl-10 md:pl-20">
                <div className="max-w-lg text-left text-[#FAF3DD] space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    <TypeAnimation
                      sequence={[
                        `${slide.title}`,
                        1000,
                        '',
                        500,
                        `${slide.title}`,
                        1000,
                      ]}
                      repeat={Infinity}
                      speed={50}
                    />
                  </h1>
                  <p className="text-sm md:text-lg lg:text-xl font-medium text-[#FAF3DD]">
                    {slide.description}
                  </p>
                  <button className="bg-[#FAF3DD] text-[#004643] hover:bg-[#004643] hover:text-[#FAF3DD] transition-colors duration-300 font-semibold px-6 py-3 rounded-md shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
