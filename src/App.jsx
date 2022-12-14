
import './App.css'

// Components
import Card from '../components/card'
// Data
import { cardInfo, someOtherInfo } from '../data/data'
console.log(cardInfo)
// console.log(someOtherInfo)

function handleClick(){
  console.log(event)
}

function simpleClickLogged() {
  console.log("I was clicked")
}


function App() {
  return (
    <>

{/* <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Logo</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div> */}

{/* Page stats */}
<div className="stats shadow flex">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://placeimg.com/128/128/people" />
        </div>
      </div>
    </div>
    <div className="stat-value">86%</div>
    <div className="stat-title">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
  
</div>
    {/* Carousel  */}
<div className="carousel w-full rounded-lg">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
{/* Chat */}
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="https://placeimg.com/192/192/people" />
    </div>
  </div>
  <div className="chat-header">
    Joakim 
    <time className="text-xs opacity-50"> 12:45</time>
  </div>
  <div className="chat-bubble">You were the Chosen One!</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="https://placeimg.com/192/192/people" />
    </div>
  </div>
  <div className="chat-header">
    Kenneth
    <time className="text-xs opacity-50"> 12:46</time>
  </div>
  <div className="chat-bubble">I hate you!</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>
{/* Shopping Content */}
<div className='shoppingContent flex'>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/640/480/tech"/></figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Android Galaxy s20+</h2>
    <p>300$</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div><div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/640/480/tech"/></figure>
  <div className="card-body">
    <h2 className="card-title justify-center">some garbage iPhone</h2>
    <p>FREE + 30$</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div><div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/640/480/tech"/></figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Android Galaxy s8</h2>
    <p>200$</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
{/* Countdown */}
<div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":42}}></span>
    </span>
    sec
  </div>
</div>
{/* Profile Caption */}
<figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
<div className="avatar online">
  <div className="w-44 rounded-full">
    <img src="./images/fb-img.jpg" />
  </div>
</div>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Kenneth Tørhaug
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Frontend Developer, Kodehode
      </div>
    </figcaption>
  </div>
</figure>





    </> 
    )
}

export default App


//** Carousel Snapping **/
//** Fix Countdown Timer **/