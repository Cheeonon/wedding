import './Web.scss';
import cover from "../../assets/img/cover.jpg";
import dataJson from "../../data/users.json";
import { useState } from 'react';

const Web = () => {
    const [user, setUser] = useState({name: "", phonenumber: "", rsvp: ""});
    const [data, setData] = useState(dataJson);

    let handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value })
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        setData(user)
    }
    
    console.log(data)

    return (
        <main className="web">
            <div className="block">
                <img className="block__img" src={cover} alt="대문" />
            </div>
            <div className="block">
                <div className="block__paragraph">
                    <p className="korean">한성희 정미옥의 장남 <b>한규희</b></p>
                    <p className="korean">박성우 김성희의 장녀 <b>박채린</b></p>
                </div>
                <div className="block__paragraph">
                    <p className="korean">저희 두 사람, 이제는 한 몸을 이루어</p>
                    <p className="korean">오직 여호와를 섬기며 함께 열매 맺겠노라<br></br> 서약하려 합니다.</p>
                    <p className="korean">이 기쁜 순간을 함께하고 싶기에,<br></br> 귀하를 초대합니다.</p>
                </div>
            </div>
            <div className="horizontalLine"></div>
            <div className="block">
                <div className="block__paragraph block">
                    <p>ceremony | 11 : 00 AM</p>
                    <p>"LAWRENCE PARK COMMUNITY CHURCH"</p>
                    <p>2180 BAYVIEW AVE, NORTH YORK</p>
                </div>
                <div className="block__paragraph block">
                    <p>reception | 12 : 30 PM</p>
                    <p>"AUBERGE DU POMMIER"</p>
                    <p>4150 YONGE ST, NORTH YORK</p>
                </div>
            </div>
            <div className="block">
                <form className="block__form" onSubmit={handleSubmit}>
                    <h1 className="block__title">RSVP</h1> <span className='block__title--small'>by <b>20TH OF OCTOBER</b></span>

                    <div className="form__block">
                        <label className="form__label" htmlFor='name'>NAME</label>
                        <input className="form__input" type="text" name="name" required onChange={handleChange}/>
                    </div>
                    <div className="form__block form__block--column">
                        <label className="form__label" htmlFor='rsvp'>Event Attendance Preferences</label>
                        <small>Please indicate which events you plan to attend:</small>
                        <div>
                            <input type="radio" name="rsvp" value="Ceremony" required onChange={handleChange}/>Ceremony
                        </div>
                        <div>
                            <input type="radio" name="rsvp" value="Reception" required onChange={handleChange}/>Reception
                        </div>
                        <div>
                            <input type="radio" name="rsvp" value="Both" required onChange={handleChange}/>Both Ceremony and Reception
                        </div>
                    </div>
                    <div className="form__block form__block--column">
                        <label className="form__label" htmlFor='rsvp'>Guest Information</label>
                        <small>Please provide the following details for additional attendees:</small>

                        <div>
                            <input type="radio" name="rsvp" value="Reception" required onChange={handleChange}/> I will be attending alone.
                        </div>
                        <div>
                            <input type="radio" name="rsvp" value="Both" required onChange={handleChange}/> I will be bringing a guest.
                        </div>
                        <div>
                            If you select the second option, please indicate the number of additional guests (including children, if applicable):
                            <input type="text" name="rsvp" value=""/>
                        </div>
                    </div>
                    <input className="form__submit" type="submit" value="Submit"/>
                </form>
            </div>
        </main>
    )
}

export default Web