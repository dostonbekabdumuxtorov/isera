import React, { useEffect, useState } from 'react';
import './centres.css';
import Data1 from '../data/data1.js';
import Oquv from '../../assets/images/img/oquv.png'
const Centres = ({setsearchWord,searchWord}) => {
  const [MyData, setMyData] = useState(Data1)


  function Filtering(params) {
    if(params){
      let filtered = Data1.filter((item,index)=>{
        return item.company?.toLowerCase().includes(params) ||  item.subjects?.includes(params.toLowerCase())
      })
      setMyData(filtered)
    }else{
      let filtered = Data1.filter((item,index)=>{
        return item.company?.toLowerCase().includes(searchWord?.toLowerCase()) ||  item.subjects?.includes(searchWord)
      })
      setMyData(filtered)
    }
  }

  useEffect(()=>{
    Filtering()
  },[searchWord,setsearchWord])


  return (
      <div className='main_wrapper'>
          <div className="categories_cover">
                <div className="accordion_filter">
                    <h2 className='accordion_title'>Saralash</h2>
                    <select name="Eng Mashxur" id="" className='accordion_table'>
                         <option value="100" className='select_option'>Eng Mashxur</option>
                         <option value=""  className='select_option'>Rating Yuqori</option>
                         <option value=""  className='select_option'>Eng Tajribali</option>
                         <option value="200"  className='select_option'>Eng kop o'quvchi</option>
                    </select>
                </div>
                <div className="subject_filter">
                     <h1 className="subject_filter_title">
                         Chet Tillari
                     </h1>
                     <hr  className='subject_hr'/>
                    <div className="checkbox_cover">
                        <input type="checkbox" value={"english"} onChange={(e)=>Filtering(e.target.value)} className='checkbox_tick'/>
                        <p className='checkbox_description'>Ingliz tili</p>
                    </div>
                    <div className="checkbox_cover">
                        <input type="checkbox" value={"rus-tili"} onChange={(e)=>Filtering(e.target.value)} className='checkbox_tick'/>
                        <p className='checkbox_description'>Rus tili</p>
                    </div>
                    <div className="checkbox_cover">
                        <input type="checkbox" value={"arab-tili"} onChange={(e)=>Filtering(e.target.value)} className='checkbox_tick'/>
                        <p className='checkbox_description'>Arab tili</p>
                    </div>
                    <div className="checkbox_cover">
                        <input type="checkbox" value={"nemis-tili"} onChange={(e)=>Filtering(e.target.value)} className='checkbox_tick'/>
                        <p className='checkbox_description'>Nemis tili</p>
                    </div>               
                </div>
                <div className="subject_filter">
                     <h1 className="subject_filter_title">
                         Xalqaro Sertifikatlar
                     </h1>
                     <hr  className='subject_hr'/>
                    <div className="checkbox_cover">
                        <input type="checkbox" value={"intensive-ielts"} onChange={(e)=>Filtering(e.target.value)} className='checkbox_tick'/>
                        <p className='checkbox_description'>Intensive IELTS</p>
                    </div>
                    <div className="checkbox_cover">
                        <input type="checkbox" value={"sat"} onChange={(e)=>Filtering(e.target.value)} className='checkbox_tick'/>
                        <p className='checkbox_description'>SAT</p>
                    </div>
                    <div className="checkbox_cover">
                        <input type="checkbox" value={"gmat"} onChange={(e)=>Filtering(e.target.value)} className='checkbox_tick'/>
                        <p className='checkbox_description'>GMAT</p>
                    </div>
                    <div className="checkbox_cover">
                        <input type="checkbox" value={"miliy-sertifikat"} onChange={(e)=>Filtering(e.target.value)} className='checkbox_tick'/>
                        <p className='checkbox_description'>Milliy sertifikat</p>
                    </div>               
                </div>
                <div className="subject_filter">
                     <h1 className="subject_filter_title">
                         IT
                     </h1>
                     <hr  className='subject_hr'/>
                    <div className="checkbox_cover">
                        <input type="checkbox" value={"front-end"} onChange={(e)=>Filtering(e.target.value)} className='checkbox_tick'/>
                        <p className='checkbox_description'>Front-End</p>
                    </div>
                    <div className="checkbox_cover">
                        <input type="checkbox" value={"back-end"} onChange={(e)=>Filtering(e.target.value)} className='checkbox_tick'/>
                        <p className='checkbox_description'>Back-End</p>
                    </div>
                    <div className="checkbox_cover">
                        <input type="checkbox" value={"android-developer"} onChange={(e)=>Filtering(e.target.value)} className='checkbox_tick'/>
                        <p className='checkbox_description'>Android-Developer</p>
                    </div>
                    <div className="checkbox_cover">
                        <input type="checkbox" value={"python"} onChange={(e)=>Filtering(e.target.value)} className='checkbox_tick'/>
                        <p className='checkbox_description'>Python</p>
                    </div>               
                </div>
          </div>
          <div className='educations_main_cover'>
            {MyData?.map((item,index) => (
              <div className="card_cover">
                  <div className="card_img">
                      <img src={Oquv} alt="" className='card_image'/>
                  </div>
                  <div className="card_description">
                      <h3 className='company_name'>{item.company}</h3>
                      <h6 className='location'>{item.location}</h6>
                      <div className="card_numbers">
                          <h3 className='rating'>{item.rating}</h3>
                          <div className="students_amount">
                            <h4 className='students_number'>Students: {item.students}+</h4>
                        
                          </div>
                              </div>
                      <button className="batafsil">
                          Batafsil
                      </button>
                  </div>
              </div>
            ))}
        </div>

      </div>
        
  )
}

export default Centres