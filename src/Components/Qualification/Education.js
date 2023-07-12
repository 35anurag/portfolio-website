import React ,{useEffect}from 'react'
import { SlCalender } from "react-icons/sl";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, [])  
  
  return (
    <div className="q_contents">
          <div className="q_ed_group">
            <div className="q_ed_list1 q_ch" data-Aos="fade-right">
              <h3>Chandigarh University</h3>
              <h4>Punjab, India <br/> Computer Engineering</h4>
              <div className="q_ed_contents1">
                <SlCalender />
                <p>2020 - present</p>
              </div>
            </div>

            <div className="q_ed_list1 q_sky" data-Aos="fade-right">
              <h3>Skyrider H.S.E.B.S</h3>
              <h4>Chitwan, Nepal <br /> upto 10th</h4>
              <div className="q_ed_contents1">
                <SlCalender />
                <p>2008 - 2018</p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="q_circles">
              <div className="q_circle">
                <div className="q_line"></div>
              </div>
              <div className="q_circle">
                <div className="q_line"></div>
              </div>
              <div className="q_circle">
                <div className="q_line"></div>
              </div>
            </div>
          </div>

          <div className="q_ed_group2">
            <div className="q_ed_list2 q_col" data-Aos="fade-left">
              <h3>Skyrider College</h3>
              <h4>Chitwan, Nepal <br /> +2 Science</h4>
              <div className="q_ed_contents2">
                <SlCalender />
                <p>2018 - 2020</p>
              </div>
            </div>

            <div className="q_ed_list2">
              <h3>Chandigarh University</h3>
              <h4>Bachelor's Degree</h4>
              <div className="q_ed_contents2">
                <SlCalender />
                <p>2020 - present</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Education