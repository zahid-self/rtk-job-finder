import React from 'react'
import sumitImg from "../../assets/images/avatars/sumit.png"
import sadhImg from "../../assets/images/avatars/sadh.png"
import akashImg from "../../assets/images/avatars/akash.png"
import salahuddinImg from "../../assets/images/avatars/salahuddin.png"
import riyadhImg from "../../assets/images/avatars/riyadh.png"
import ferdousImg from "../../assets/images/avatars/ferdous.png"
import almasImg from "../../assets/images/avatars/almas.png"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <h3 className="text-xl font-bold">Projects</h3>
        <div className="mt-3 space-y-4">
          <div className="checkbox-container">
            <input type="checkbox" className="color-scoreboard" checked />
            <p className="label">Scoreboard</p>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="color-flight" checked />
            <p className="label">Flight Booking</p>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="color-productCart" checked />
            <p className="label">Product Cart</p>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="color-bookstore" checked />
            <p className="label">Book Store</p>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className="color-blog" checked />
            <p className="label">Blog Application</p>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className="color-jobFinder" checked />
            <p className="label">Job Finder</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold">Team Members</h3>
        <div className="mt-3 space-y-4">
          <div className="checkbox-container">
            <img src={sumitImg} className="team-avater" alt='Sumit'/>
            <p className="label">Sumit Saha</p>
          </div>

          <div className="checkbox-container">
            <img src={sadhImg} className="team-avater" alt='Saad'/>
            <p className="label">Sadh Hasan</p>
          </div>

          <div className="checkbox-container">
            <img src={akashImg} className="team-avater" alt='Akash Ahmed'/>
            <p className="label">Akash Ahmed</p>
          </div>

          <div className="checkbox-container">
            <img src={salahuddinImg} className="team-avater" alt='Salahuddin'/>
            <p className="label">Md Salahuddin</p>
          </div>

          <div className="checkbox-container">
            <img src={riyadhImg} className="team-avater" alt='Riyadh'/>
            <p className="label">Riyadh Hassan</p>
          </div>

          <div className="checkbox-container">
            <img src={ferdousImg} className="team-avater" alt='Ferdous'/>
            <p className="label">Ferdous Hassan</p>
          </div>

          <div className="checkbox-container">
            <img src={almasImg} className="team-avater" alt='Arif'/>
            <p className="label">Arif Almas</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar