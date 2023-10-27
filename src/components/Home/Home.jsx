import React from 'react'
import button from '../../assets/button.svg'
import latestboy from '../../assets/latestboy.png'
import './home.css'
import lorem from '../../assets/lorem.svg'
import statistic from '../../assets/STATISTIC.svg'
import latestgirl from '../../assets/latestgirl.png'
import education from '../../assets/education.svg'
import education2 from '../../assets/education2.svg'
import kitoblar from '../../assets/kitoblar.svg'
import butn from '../../assets/butn.svg'
// import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
    return (
        <div className='home-big'>
            <div className='home-div'>
                <div className='imgtwo' >
                    <img className='button' src={button} alt="" />
                    <img className='boy' src={latestboy} alt="" />
                </div>
                <div className='home-div2'>
                    <img className='lorem-img' src={lorem} alt="" />
                    <p className='home-p'>Lorem Ipsum is simply dummy text of </p>
                    <div className="home-input-div">
                        <input className='input' type="text" placeholder='Education  events?...' />
                        {/* <SearchIcon className='search-icon' /> */}
                    </div>
                    <div className='three-div'>
                        <img src={butn} alt="" />
                    </div>
                </div>
                <div className='home-div3'>
                    <img className='statistic' src={statistic} alt="" />
                    <img className='girl' src={latestgirl} alt="" />
                </div>
            </div>
            <div>
                <div className='rasmlar'>
                    <div>
                        <img className='education' src={education} alt="" />
                    </div>
                    <div className='ikkitali'>
                        <div>
                            <img className='education2' src={education2} alt="" />

                        </div>
                        <div>
                            <img className='education3' src={kitoblar} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home