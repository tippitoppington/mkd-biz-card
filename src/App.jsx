import './App.css'
import qr from './assets/QR.png'
import pic from './assets/profilePic.png'
function App() {
  return (
    <div className='biz-card'>
      <div className='bg-card qr-section'>
        <img src={qr} alt='qr-code' width='300' />
        <p>www.headcloudsnowdesign.com</p>
      </div>

      <div className='bg-card about'>
        <img src={pic} alt='meredith duncan profile pic' width='300' />
        <h1>
          Meredith Duncan <br /> UX/UI Designer & Developer
        </h1>
        <p>
          A unique creative and analytical thinker, looking for mission-driven
          work, and collaborating with like-minded do-gooders to make the world
          a better place through human-centered design.
        </p>
      </div>

      <div className='buttons'>
        <a href='https://www.headcloudsnowdesign.com' target='_blank'>
          <button>Portfolio</button>
        </a>
        <a
          href='https://https://www.linkedin.com/in/meredithkduncan/'
          target='_blank'>
          <button>LinkedIn</button>
        </a>
        <a href='https://www.headcloudsnowdesign.com' target='_blank'>
          <button>GitHub</button>
        </a>
        <a
          href='https://www.headcloudsnowdesign.com/contact-hcnd'
          target='_blank'>
          <button>Contact</button>
        </a>
      </div>
    </div>
  )
}

export default App
