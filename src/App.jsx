
import './App.css';
import logo  from "./img/Logo.png";
function App() {
  
  return (
    <div>
      <div className='header'>
      <div className='text-white flex items-center py-10 justify-between w-4/5 m-auto'>
        <div className='flex items-center'>
        <img src={logo}  alt="Logo" />
        <h1>CRAPPO</h1>
        </div>
        <div className='flex justify-around items-center  w-2/4'>

        <div className='text-lg mr-12'>
          <a href="">Products</a>
          <a href="" className='px-8'>Features</a>
          <a href="" className='pr-8'>About</a>
          <a href="">Contact</a>
        </div>
        <div >
         <a href="" className='pr-8 border-r-4 text-lg'>Login</a>
         <a href="" className='ml-8 p-5 px-10 text-lg rounded-full register'>Register</a>
        </div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
