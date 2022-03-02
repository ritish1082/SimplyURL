import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Url from './components/Url';

function App() {
  return (
    <div>
      <div className='row m-2 ' >
        <div className='col-lg-6 mt-4'>
          <span className='logo bg-white p-2 rounded border border-3 '>SimplyURL</span>
          <img className='w-100' src="https://free-url-shortener.rb.gy/open-graph.png" alt="" />
          <p className='lead text-center text-white'>Shorten your URL</p>
        </div>
        <div className='col-lg-6 mt-4'>
          <h3 className='text-white'>Now Make Your Links</h3>
          <h3 className='text-white'><span style={{textDecorationLine: 'line-through',textDecorationStyle:"solid"}}>Longer</span> Shorter</h3>
          <p class="lead text-white"> Shorten your long links from any sites by pasting it in the input below...</p>
          <Url/>
        </div>
      </div>
    </div>
   
      
      
  );
}

export default App;
