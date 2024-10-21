import React from 'react';
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { BsList } from "react-icons/bs";
import { IoIosShareAlt } from "react-icons/io";

function List({ title = "Explore", list = [1,2,3,4,5] }) {
    return (
        <div className='List'>
            <div className="heading my-3 fw-bold fs-5" style={{}}>{title}</div>
            <div className="list-container d-flex flex-column gap-3">
                {
                    list.map(() => {
                        return (
                            <div className="list-item d-flex align-items-center" style={{ width: '100%', height: '70px', background: 'var(--grey-shade)', borderRadius: '25px' }}>
                                <div className="leftSide w-50 d-flex justify-content-between align-items-center mx-3">
                                    <div className="d-flex justify-content-start align-items-center w-50">
                                        <div className="circle me-4" style={{ height: '50px', width: '50px', borderRadius: '50%', background: 'var(--theme-color)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <PiTelevisionSimpleLight fontSize={'larger'} />
                                        </div>
                                        <span>
                                            Naruto
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center w-50">
                                        Anime
                                    </div>
                                </div>
                                
                                <div className="rightSide w-50 d-flex justify-content-evenly align-items-center">
                                    <div className="d-flex justify-content-center align-items-center w-50">
                                        100 MB
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center w-50">
                                        <IoIosShareAlt fontSize='larger' color='white'cursor='pointer'/>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center w-50">
                                        <BsList  fontSize={'larger'} cursor='pointer'/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List