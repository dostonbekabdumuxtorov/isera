import React from 'react'
import logo from './../../assets/logo.svg'
import './Footer.css'
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import TelegramIcon from '@mui/icons-material/Telegram';





const Footer = () => {
  return (
    <div className='footer-container'>
       <div className='footer-img'>
          <img className='rasm' src={logo} alt="" />
       </div>
     
        <div className='footer-words'>
           <h3>Markazlar</h3>
           <h3> Fanlar</h3>
           <h3>Kitoblar</h3>
           <h3>Filiallar</h3>
           <h3>Education</h3>
        </div>

        <div  className='footer-words2'>
          <p>"ISEARCH MCHJ"</p>
          <p> INN:123456489</p>

        </div>
      
      <div className='icon-img'>
        {/* < InstagramIcon className='insta-img'/>
        < YouTubeIcon className='youtube-img'/>
        < TelegramIcon className='tg-img'/> */}
        
       


      </div>
      <div></div>
    </div>
  )
}

export default Footer