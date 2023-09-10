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
        alert("Submission ")
    }
    
    console.log(data)

    return (
        <main className="web">
            <div className="block">
                <img className="block__img" src={cover} alt="대문" />
            </div>
            <div className="block">
                <div className="block__paragraph">
                    <p className="korean">한성희 정미옥의 장남 <b className="fontSize">한규희</b></p>
                    <p className="korean">박성우 김성희의 장녀 <b className="fontSize">박채린</b></p>
                </div>
                <div className="block__paragraph">
                    <p className="korean">저희 두 사람, 이제는 한 몸을 이루어</p>
                    <p className="korean">오직 여호와를 섬기며 함께 열매 맺겠노라<br></br> 서약하려 합니다.</p>
                    <p className="korean">이 기쁜 순간을 함께하고 싶기에,<br></br> 귀하를 초대합니다.</p>
                </div>
            </div>
            <div className="horizontalLine"></div>
            <div className="block">
                <div className="block__paragraph">
                    <p>ceremony | 11 : 00 AM</p>
                    <p>"LAWRENCE PARK <br></br> COMMUNITY CHURCH"</p>
                    <p>2180 BAYVIEW AVE, NORTH YORK</p>
                </div>
                <div className="block__paragraph">
                    <p>reception | 12 : 30 PM</p>
                    <p>"AUBERGE DU POMMIER"</p>
                    <p>4150 YONGE ST, NORTH YORK</p>
                </div>
            </div>
            <div className="block">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form__title">
                        <h1 className="form__title--large">RSVP</h1>
                        <span className='form__title--small'>by <b className='form__title--small'>20TH OF OCTOBER</b></span>
                    </div>

                    <div className="form__body">
                        <div className="form__block form__block--row">
                            <label className="form__label--title" htmlFor='name' autofocus>NAME</label>
                            <input className="form__input" type="text" name="name" required onChange={handleChange}/>
                        </div>
                        <div className="form__block">
                            <h2 className="form__label--title" htmlFor='event'>Event Attendance Preferences</h2>
                            <div>
                                <label>
                                    <input type="radio" name="event" value="Ceremony" required onChange={handleChange}/> Ceremony
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="radio" name="event" value="Reception" required onChange={handleChange}/> Reception
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="radio" name="event" value="Both" required onChange={handleChange}/> Both Ceremony and Reception
                                </label>
                            </div>
                        </div>
                        <div className="form__block">
                            <h2 className="form__label--title" htmlFor='guest'>Guest Information</h2>

                            <div>
                                <label>
                                    <input type="radio" name="guest" value="Reception" required onChange={handleChange}/> I will be attending alone.
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="radio" name="guest" value="Both" required onChange={handleChange}/> I will be bringing guests (adult).
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="radio" name="guest" value="Both" required onChange={handleChange}/> I will be bringing guests (children).
                                </label>
                            </div>
                        </div>

                    </div>
                   
                    <input className="form__submit" type="submit" value="Submit"/>
                </form>
            </div>
        </main>
    )
}

export default Web