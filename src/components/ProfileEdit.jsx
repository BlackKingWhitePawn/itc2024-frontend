import React, { useEffect, useState } from "react";

export const ProfileEdit = ({AccountName}) => {
     return (
          <div className='profile-edit'>
                  <p className="profile-edit-label" style={{fontWeight:"800"}}>Редактирование профиля</p>
                <div className="name-surname">
                    <div className="name-form">
                      <p style={{fontWeight:"500", marginBlock:"10px"}}>Имя</p>
                      <input className="input-form" value={"Василий"}></input>
                    </div>

                    <div className="name-form">
                      <p style={{fontWeight:"500", marginBlock:"10px"}}>Фамилия</p>
                      <input className="input-form" value={"Татищев"}></input>
                    </div>
                </div>

               <div className="date-of-birth">
                    <p style={{marginBottom:"5px"}}>Дата рождения</p>
                    <p style={{marginTop:"5px"}}>15.05.1723</p>
               </div>

              <div className="other-stuff">
                  <div className="name-form">
                          <p style={{marginBlock:"5px"}}>Телефон</p>
                          <input className="input-form" value={"8 (952) 812 88-69"}></input>
                    </div>
                    <div className="name-form">
                          <p style={{marginBlock:"5px"}}>Город</p>
                          <input className="input-form" value={"Пермь"}></input>
                        </div>
              </div>
              <div className="name-form">
                          <p style={{marginBlock:"5px"}}>Должность</p>
                          <input className="input-form" value={"Аналитик"} style={{width:"95%"}}></input>
              </div>
              <button style={{marginTop:"10px", backgroundColor:"#D76223", color:"#FFF", border:"0px", borderRadius:"4px", cursor:"pointer", paddingTop:"5px", paddingBottom:"5px"}}>Сохранить изменения</button>
          </div>
     );
};