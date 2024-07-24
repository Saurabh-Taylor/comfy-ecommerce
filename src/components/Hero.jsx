import { Link } from 'react-router-dom'
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages =[hero1 ,hero2 , hero3 , hero4] 


const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-24 items-center' >
      <div >
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'  >We are changing the way people shop</h1>
        <p className='mt-8 max-w-xl text-lg leading-8' >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam accusamus, quia facilis, aperiam saepe temporibus quae iure nam molestias eum pariatur atque fuga incidunt dicta rem doloremque cupiditate. Consequatur fugiat dolores quisquam rem soluta deserunt consectetur tempora delectus eum nemo.
        </p>
        <div className='mt-10' > <Link className='btn btn-accent' to={"/products"} >Our Products</Link> </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image)=>{
          return(
            <div key={image} className="carousel-item">
              <img src={image} className='rounded-box h-full w-80 object-cover' alt='image' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Hero