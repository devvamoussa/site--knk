import React from 'react';
import { BsArrowDownUp } from 'react-icons/bs';
import '../../css/connectePageCss/BodyConnect.css'
import BodyContentLeft from '../connectPages/BodyContentLeft';
import '../../css/notificationCss/Notification.css'



export default function BodyNotification() {
    const [checked, setChecked] = React.useState(false);

  return (
    <>
        <div className="containerConnect">
          <div className="itermLeft">
            
            <div className="containerNotif">
              <div className="boxDisplayDescrip">
                <div className="titleDescription">
                  <h2>Liste des notifications</h2>
                </div>
                <div className="specification">
                  <div><p>Supprimer</p></div>
                  <div><p>Déjà vu</p></div>
                  <div><i><BsArrowDownUp /></i></div>
                </div>
                <div className="iconModif">
                  <input type="checkbox"
                    defaultChecked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                </div>
              </div>
             
            
            <div className="notificationListe">
              <div className="boxNotif">
                <div className='imgNotification'>
                  <img src={require("../../images/home3.jpg")} alt="" />
                </div>

                <div className="descriptionNotif">
                  <h4>Notification</h4>
                  <p>Faite la promotion de votre page pour maximiser vos gains</p>
                  
                </div>
              </div>
              <div className="NotifSelect">
                <input type="checkbox"
                  defaultChecked={checked}
                  onChange={() => setChecked(!checked)}
                />
              </div>
            </div>


             <div className="notificationListe">
              <div className="boxNotif">
                <div className='imgNotification'>
                  <img src={require("../../images/bacgroungImage2.png")} alt="" />
                </div>

                <div className="descriptionNotif">
                  <h4>Notification</h4>
                  <p>Faite la promotion de votre page pour maximiser vos gains</p>
                  
                </div>
              </div>
              <div className="NotifSelect">
                <input type="checkbox"
                  defaultChecked={checked}
                  onChange={() => setChecked(!checked)}
                />
              </div>
            </div>


             <div className="notificationListe">
              <div className="boxNotif">
                <div className='imgNotification'>
                  <img src={require("../../images/bacgroungImage1.png")} alt="" />
                </div>

                <div className="descriptionNotif">
                  <h4>Confirmation</h4>
                  <p>Faite la promotion de votre page pour maximiser vos gains</p>
                  
                </div>
              </div>
              <div className="NotifSelect">
               <input type="checkbox"
                  defaultChecked={checked}
                  onChange={() => setChecked(!checked)}
                />
              </div>
            </div>


            <div className="notificationListe">
              <div className="boxNotif">
                <div className='imgNotification'>
                  <img src={require("../../images/imageAdd.png")} alt="" />
                </div>

                <div className="descriptionNotif">
                  <h4>Notification</h4>
                  <p>Faite la promotion de votre page pour maximiser vos gains</p>
                  
                </div>
              </div>
              <div className="NotifSelect">
                <input type="checkbox"
                  defaultChecked={checked}
                  onChange={() => setChecked(!checked)}
                />
              </div>
            </div>


            <div className="notificationListe">
              <div className="boxNotif">
                <div className='imgNotification'>
                  <img src={require("../../images/imagesArtisan.jpg")} alt="" />
                </div>

                <div className="descriptionNotif">
                  <h4>Location</h4>
                  <p>Faite la promotion de votre page pour maximiser vos gains</p>
                  
                </div>
              </div>
              <div className="NotifSelect">
                <input type="checkbox"
                  defaultChecked={checked}
                  onChange={() => setChecked(!checked)}
                />
              </div>
            </div>

            <div className="notificationListe">
              <div className="boxNotif">
                <div className='imgNotification'>
                  <img src={require("../../images/home4.jpg")} alt="" />
                </div>

                <div className="descriptionNotif">
                  <h4>Message</h4>
                  <p>Faite la promotion de votre page pour maximiser vos gains</p>
                  
                </div>
              </div>
              <div className="NotifSelect">
                <input type="checkbox"
                  defaultChecked={checked}
                  onChange={() => setChecked(!checked)}
                />
              </div>
            </div>

            
            </div>
            
            
           
          </div>

          
          {/* **********************container left************************************ */}
          <div className="itermRigth">
            <BodyContentLeft/>
          </div>
         
            
        </div>
    </>
  )
}
