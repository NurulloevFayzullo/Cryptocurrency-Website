
import './App.css';
import logo2 from "./img/Illustration.png";
import logo  from "./img/Logo.png";
import logo3 from "./img/Arrow Right.png";
function App() {
  
  return (
    <div>
      <div className='header'>
      <div className='text-white flex items-center py-10 justify-between w-4/5 m-auto'>
        <div className='flex items-center'>
        <img src={logo}  alt="Logo" />
        <h1>CRAPPO</h1>
        </div>
        <div className='flex justify-end items-center  w-3/4'>

        <div className=' mr-12'>
          <a href="">Products</a>
          <a href="" className='px-8'>Features</a>
          <a href="" className='pr-8'>About</a>
          <a href="">Contact</a>
        </div>
        <div >
         <a href="" className='pr-8 border-r-4 text-lg'>Login</a>
         <a href="" className='ml-8 p-5 px-14 text-lg rounded-full register'>Register</a>
        </div>
        </div>
      </div>

         <div className='flex items-center flex-wrap mt-10  justify-between w-4/5 m-auto'>
          <div className='text-white '>
           <div className='flex items-center save rounded-full'>
            <div className='bg-white text-black rounded-full  font-bold px-3 py-1'>
              <p>75% SAVE</p>
            </div>
            <div className='m-auto'>
          <p>For the Black Friday weekend</p>
           </div>
           </div>
           <h1 className='text-6xl my-5 font-bold leading-tight '>Fastest & secure <br />
            platform to invest <br />
             in crypto</h1>
             <p className=''>Buy and sell cryptocurrencies, trusted by 10M wallets <br />
              with over $30 billion in transactions.</p>
           <div className='a1 flex items-center p-5 w-1/2 rounded-full mt-5'>
           <a href="" className='m-auto text-lg'>Try for FREE </a>
           <img src={logo3} alt="" className='ml-3' />
           </div>


          </div>
          <div className=' w-1/2'>
            <img src={logo2} alt="" />
          </div>
         </div>
      </div>
    </div>
  );
}

export default App;
