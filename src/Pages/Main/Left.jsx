import React from 'react'
import {AiFillCaretDown} from 'react-icons/ai'
import lists from "../../lists.json"
import { Link } from 'react-router-dom'
import './Left.scss'

const Left = () => {
  return (
    <div className='mainLeftContainer'>
        <div className="mainLeft">
            {/* left Name */}
            <div className="mainLeftName">
                <img src="https://images.pexels.com/photos/6390058/pexels-photo-6390058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h2>Anvarov Asadbek</h2>
                <AiFillCaretDown/>
            </div>
            {/* line */}
            <div className="line"></div>

            {/* Recent Repo */}
            <div className="reacentRepo">
                <div className="reacentRepos">
                    <h2>Recent Repositories</h2>
                    <button>New</button>
                </div>
                <div className="inputBox">
                    <input type="search" placeholder='Find a reposition' />
                </div>
            </div>

            {/* lists */}
            <div className="leftList">
                {lists.map((item , idx) => (
                    <div key={idx} className="item">
                        <img src="https://images.pexels.com/photos/6390058/pexels-photo-6390058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                        <div>
                            <h2>{`${item.name}/${item.repo}`}</h2>
                        </div>
                    </div>
                ))}
                <Link className='more' to='more' >Show more</Link>
            </div>
        </div>
    </div>
  )
}

export default Left