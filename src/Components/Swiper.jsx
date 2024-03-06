import  { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiperStyle.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwiperCard from './SwiperCard';

const userReview = [
  {
    "image": "https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    "name": "Alice Johnson",
    "review": "Using the task management website has greatly improved my productivity. The interface is user-friendly, and I love how it helps me stay organized. Definitely recommend it!"
  },
  {
    "image": "https://as2.ftcdn.net/v2/jpg/05/35/76/27/1000_F_535762779_tnkmGjEQiVjue7wrxuJYzK2mp1VUi9fO.jpg",
    "name": "Bob Smith",
    "review": "The task management website is a game-changer! It has streamlined my workflow, and I can easily track and prioritize tasks. The collaboration features are fantastic for team projects."
  },
  {
    "image": "https://t3.ftcdn.net/jpg/03/02/88/46/240_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg",
    "name": "Charlie Brown",
    "review": "I've tried various task management tools, and this website stands out. The customizable task categories and reminders keep me on top of my work. A must-have for anyone juggling multiple projects."
  },
  {
    "image": "https://as1.ftcdn.net/v2/jpg/02/99/04/20/1000_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    "name": "Diana Miller",
    "review": "As a freelancer, the task management website has been a lifesaver. It helps me organize client projects, set deadlines, and ensures nothing falls through the cracks. So pleased with its functionality!"
  },
  {
    "image": "https://t4.ftcdn.net/jpg/02/92/95/17/240_F_292951705_zv47wnXkjzHzSouYLpYcNgTOOosDv1ml.jpg",
    "name": "Elijah Turner",
    "review": "Efficiency at its best! The task management website has transformed the way I handle tasks. The clean interface, coupled with powerful features, makes it an indispensable tool for my daily workflow."
  },
  {
    "image": "https://t3.ftcdn.net/jpg/02/92/95/16/240_F_292951627_9n1xdGM5rNnRYOIcfmnt9THrAv2YF2xF.jpg",
    "name": "Fiona Davis",
    "review": "The task management website is fantastic for keeping my personal and professional tasks organized. It's intuitive, and the calendar integration is a game-changer for planning my schedule."
  },
  {
    "image": "https://t4.ftcdn.net/jpg/02/92/95/17/240_F_292951705_zv47wnXkjzHzSouYLpYcNgTOOosDv1ml.jpg",
    "name": "George Hernandez",
    "review": "I've tried several task management tools, but this website is by far the most user-friendly. The simplicity combined with powerful features makes it a standout choice for individuals and teams alike."
  },
  {
    "image": "https://neweralive.na/storage/images/2023/may/lloyd-sikeba.jpg",
    "name": "Holly Patel",
    "review": "As a project manager, I rely on the task management website to coordinate team activities. The collaboration features, task dependencies, and progress tracking make it an indispensable tool for project success."
  },
  {
    "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    "name": "Ivan Rodriguez",
    "review": "Using the task management website has made me more organized and focused. The ability to create custom tags and prioritize tasks helps me manage my workload effectively. A great tool for boosting productivity."
  },
  {
    "image": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "name": "Jasmine Lee",
    "review": "I love the simplicity and elegance of the task management website. It has become my go-to tool for personal and work-related tasks. The mobile app is also handy for managing tasks on the go."
  }
]

const SwiperComponent = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {
          userReview?.map((review,idx) => (
            <SwiperSlide key={idx}>
              <SwiperCard review={review}/>
            </SwiperSlide>
          ))
        }

       <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default SwiperComponent;