import './Web.scss';
import cover from "../../assets/img/cover.jpg";
import main from "../../assets/img/main.jpg";
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
        <div className="web">
            <div className="block">
                <img className="block__img" src={cover} alt="대문" />
            </div>
            <div className="block">
                <img className="block__img" src={main} alt="메인" />
            </div>
            <br></br>
            <div className="block block-page">
                <div className="block__paragraph">
                    <p className="block__line">한성희 정미옥의 장남 <b>한규희</b></p>
                    <p className="block__line">박성우 김성희의 장녀 <b>박채린</b></p>
                </div>
                <div className="block__paragraph">
                    <p className="block__line">저희 두 사람, 이제는 한 몸을 이루어</p>
                    <p className="block__line">오직 여호와를 섬기며 함께 열매 맺겠노라 서약하려 합니다.</p>
                    <p className="block__line">이 기쁜 순간을 함께하고 싶기에, 귀하를 초대합니다.</p>
                </div>
            </div>
            <div className="horizontalLine"></div>
            <div className="block block-page">
                <div className="block__paragraph block--english">
                    <p className="block__line">ceremony | 11 : 00 AM</p>
                    <p className="block__line">"LAWRENCE PARK COMMUNITY CHURCH"</p>
                    <p className="block__line">2180 BAYVIEW AVE, NORTH YORK</p>
                </div>
                <div className="block__paragraph block--english">
                    <p className="block__line">reception | 12 : 30 PM</p>
                    <p className="block__line">"AUBERGE DU POMMIER"</p>
                    <p className="block__line">4150 YONGE ST, NORTH YORK</p>
                </div>
            </div>
            <div className="block block-page">
                <form className="block__form" onSubmit={handleSubmit}>
                    <h2 className="block__title">RSVP BY 20TH OF OCTOBER</h2>
                    <div className="form__block">
                        <label className="form__label" htmlFor='name'>Name</label>
                        <input className="form__input" type="text" name="name" required onChange={handleChange}/>
                    </div>
                    <div className="form__block">
                        <label className="form__label" htmlFor='rsvp'>참석 여부</label>
                        <input type="radio" name="rsvp" value="Ceremony" required onChange={handleChange}/>Ceremony
                        <input type="radio" name="rsvp" value="Reception" onChange={handleChange}/>Reception
                        <input type="radio" name="rsvp" value="Both" onChange={handleChange}/>Both
                    </div>
                    <div className="form__block">
                        <label className="form__label" htmlFor='rsvp'>동행인()</label>
                        <input type="radio" name="rsvp" value="Ceremony" required onChange={handleChange}/>O
                        <input type="radio" name="rsvp" value="Reception" onChange={handleChange}/>X
                    </div>
                    <input className="form__submit" type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default Web