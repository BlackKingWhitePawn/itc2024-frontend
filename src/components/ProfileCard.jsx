import React, { useEffect, useState } from "react";

import avatar from "../assets/icons/i.webp"

export const ProfileCard = ({AccountName}) => {
     return (
          <div className='profile-card' style={{display: "flex", flexDirection:"column", alignItems:"center", gap:"20px"}}>
                  <div className="avatar">
                    
                    <div className="avatar-cont" style={{width:"118px", height:"118px", display:"flex", borderRadius:"100px", border:"1px solid #224D8E", overflow:"hidden"}}>
                        <img src={avatar} className="avatar-photo"></img>
                    </div>
                    
                  </div>
                  <div className="profile-cart-cont">
                    <div className="profile-raw" style={{display:"flex", gap: "30px", justifyContent:"space-between"}}>
                      <p className="profile-chart" style={{fontWeight:"500"}}>Полное имя</p>
                      <p>Василий Татищев</p>
                    </div>

                    <div className="profile-raw" style={{display:"flex", gap: "30px", justifyContent:"space-between"}}>
                      <p className="profile-chart" style={{fontWeight:"500"}}>Дата рождения</p>
                      <p>15.05.1723, 300 лет</p>
                    </div>

                    <div className="profile-raw" style={{display:"flex", gap: "30px", justifyContent:"space-between"}}>
                      <p className="profile-chart" style={{fontWeight:"500"}}>Телефон</p>
                      <p>8 (952) 812 88-69</p>
                    </div>

                    <div className="profile-raw" style={{display:"flex", gap: "30px", justifyContent:"space-between"}}>
                      <p className="profile-chart" style={{fontWeight:"500"}}>Город</p>
                      <p>Пермь</p>
                    </div>

                    <div className="profile-raw" style={{display:"flex", gap: "30px", justifyContent:"space-between"}}>
                      <p className="profile-chart" style={{fontWeight:"500"}}>Должность</p>
                      <p>Аналитик</p>
                    </div>
                  </div>
          </div>
     );
};