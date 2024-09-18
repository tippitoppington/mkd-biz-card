import '../App2.css'
import qr from '../assets/QR-gr.png'
import pic2 from '../assets/profilePic2.png'
export default function Card2() {
  return (
    <div className='container-card2'>
      <div className='biz-card2'>
        <div className=' qr-section2'>
          <img src={qr} alt='qr-code' width='300' />
          <p>www.zarazenyoga.com</p>
        </div>

        <div className='about2 gradient'>
          <img src={pic2} alt='zara zen profile pic' width='300' />
          <h1>
            Zara Zen <br /> Yoga Instructor
          </h1>
          <p>
            A vibrant yoga instructor who transforms every class into a journey
            of self-discovery. Inspiring students to explore their physical
            limits while nurturing their mental and emotional well-being.
          </p>
        </div>

        <div className='buttons2'>
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
    </div>
  )
}
