import React from 'react'
import img2 from './e.jpg'
import img15 from './food png.webp'

import { Link } from 'react-router-dom';
import { BsChevronRight } from "react-icons/bs";
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return (
    <>
    <div id='a'>
      
      <img src={img2} className='img' alt='/' />

      <div id='b'>
      <div id="pid">

        <div id='dip'>
      <Link to="/Signup" className='c'>SIGN UP</Link>
<Link to="/Login" className='c'>LOGIN IN</Link>
{/* <Link to="/" className='c'>Add Restaurant</Link>  */}
</div>

<br></br> 
<div className='bot'>


      <p ><b>FOOD COURT</b><br></br>
      <h2>Find the best restaurants,<br></br> cafés and bars in India</h2></p></div>
      
      </div>
      </div>
    </div>

    <br></br>
    <br></br><br></br><br></br>
   
   
    <div id='sec'>
    <img src={img15} style={{width:'200px', height:'200px', float:'left',marginRight:'20px'}} />
    <p><h1>Popular locations in {/* <img src={img3} style={{width:'80px',height:'60px'}}/>  */}india</h1>
      <br></br>
      From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, <br></br>Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users <br></br>just like you, to find your next great meal.</p>
    </div>
    <br></br>
    <div id='rc' style={{width:'100%'}}>
        
        <div class="containeru">
          <div class="row ">
            <div class="col-2"><Link to="/Home" className='for'><img src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg" alt='/' className='im' /> 
            </Link></div>
            <div class="col-2"><Link to="/Home" className='for'><img src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg" alt='/' className='im' /> 
            </Link></div>
            <div class="col-2"> <Link to="/Home" className='for'><img src="https://images.picxy.com/cache/2020/7/11/f89ac5e03dec322549d35d881773eae0.jpg" alt='/' className='im' /><br></br>
            </Link></div>
            <div class="col-2"><Link to="/Home" className='for'> <img src="https://cdn-magazine.nutrabay.com/wp-content/uploads/2023/10/cropped-photo-traditional-indian-food-dish-celebrate-diwali-scaled-1.jpg" alt='/' className='im' /><br></br>
           </Link></div>

            <div class="col-2"><Link to="/Home" className='for'> <img src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-hot-delicious-food-wallpaper.jpg" alt='/' className='im' /><br></br>
            </Link></div>

            <div class="col-2"> <Link to="/Home" className='for'><img src="https://cdn.create.vista.com/api/media/small/175058098/stock-photo-pasta" alt='/' className='im' />
            </Link></div>
          </div>
        </div></div> <br></br><br></br><br></br><br></br>
    <div id='e'>
    <div class="container overflow-hidden">
  <div class="row gy-5">
    <div class="col-4">
    <Link to="/Next"> <div class="p-3 border bg-light"> Agra Restaurant<span id='i'><BsChevronRight /> </span></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/Nextb">
      <div class="p-3 border bg-light">Ahmedabad Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/Nextc">
      <div class="p-3 border bg-light">Ajmer Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Alapuzha REstaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Allahabad Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Amaravati Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Amritsar Restaurants <div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Aurangabad Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Bengaluru Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Bhopal Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Bhubaneswar Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Chandigar Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Chennai Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Coimbator Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Cuttack Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Darjeeling Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Dehradun Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Delhi NCR Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Dharamshala Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Gangtok Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Goa Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Gorakhpur Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Guntur Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Guwahati Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Gwalior Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Haridwar Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Hyderabad Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Indore Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Jabalpur Restaurants<div id='i'><BsChevronRight /> </div></div> </Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Jaipur Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Jammu Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Jamnagar Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Jhansi Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Jodhapur Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Kanpur Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Kota Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Madurai Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Ooty Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Puducherry Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Salem Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Srinagar Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Shimla Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Tirupati Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Trichy Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/">
      <div class="p-3 border bg-light">Vellore Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/Nextx">
      <div class="p-3 border bg-light">Varanasi Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/Nexty">
      <div class="p-3 border bg-light">Vijayawada Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>
    <div class="col-4">
    <Link to="/Nextz">
      <div class="p-3 border bg-light">Visakhapatnam Restaurants<div id='i'><BsChevronRight /> </div></div></Link>
    </div>

  </div>
</div>
    </div>
  
   
  
 <br></br><br></br>
    <Footer />
    </>
  )
}

export default Home