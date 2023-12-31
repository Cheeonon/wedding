import './Web.scss';
import cover from "../../assets/img/cover.png";
import divider from "../../assets/img/divider.png";
import { submitRsvp } from '../../utils/axios';
import { useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';

const Web = () => {
    const [newUser, setNewUser] = useState("");
    const [name, setName] = useState("");
    const [guest, setGuest] = useState("");

    
    useEffect(() => {
        console.log(newUser)
        if(!newUser){
            return
        }

        submitRsvp(newUser)
        .then(resolve => {
            console.log(resolve.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [newUser])


    let handleName=(e)=>{
        setName(e.target.value)
    }

    let handleGuest=(e)=>{
        setGuest(e.target.value)
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        setNewUser({name, guest});
        alert("Thank you for RSVPing. Hope to see you soon.")
        e.target.reset();
    }
    

    return (
        <main className="web">
            <div className="block">
                <img className="block__img" src={cover} alt="대문" />
            </div>
            <div className="block">
                <div className="block__paragraph font--dx">
                    오직 나와 내 집은 여호와를 섬기겠노라<br></br> <span className='joshua'>여호수아 24장 15절</span>
                </div>
                <div className="block__paragraph">
                    <p className="korean">한성희 · 정미옥의 장남 <b className="fontSize">한규희</b></p> 
                    <p className="korean">박성우 · 김성희의 장녀 <b className="fontSize"><Link to="/login" className="linkFont">박</Link>채린</b></p>
                </div>
                <div className="block__paragraph">
                    <p className="korean">저희 두 사람, 이제는 한 몸을 이루어</p>
                    <p className="korean">오직 여호와를 섬기며 함께 열매 맺겠노라<br></br> 서약하려 합니다.</p>
                    <p className="korean">이 기쁜 순간을 함께하고 싶기에,<br></br> 귀하를 초대합니다.</p>
                </div>
            </div>
            <img src={divider} alt="divider" className="divider"></img>
            <div className="block">
                <div className="block__paragraph">
                    <p className="korean korean--date">2023년 11월 11일 토요일</p>
                    <p className='line font--mon korean line__title font--mon-bold'>CEREMONY 세레모니 | 11 : 00 AM</p>
                    <p className='line font--mon line__map'>ST. GEORGE ON YONGE ANGLICAN CHURCH</p>
                    <p className='line font--mon line__map'>5350 Yonge St. North York, Canada</p>
                    <a href="https://www.google.com/maps/place/St.+George+on+Yonge+Anglican+Church/@43.7740929,-79.4145068,17z/data=!4m15!1m8!3m7!1s0x882b2d72a2a70565:0xe083fff7bf433dab!2s5350+Yonge+St,+North+York,+ON+M2N+5R5!3b1!8m2!3d43.7740929!4d-79.4145068!16s%2Fg%2F11c48g9318!3m5!1s0x882b2d729e34b211:0x4eaf084d7533b101!8m2!3d43.7741329!4d-79.4145433!16s%2Fg%2F1th63_nb?entry=ttu" className="map font--mon" target="_blank" rel="noreferrer">GOOGLE MAP</a>
                </div>
                <div className="block__paragraph">
                    <p className="line korean font--mon line__title font--mon-bold">RECEPTION 리셉션 | 12 : 30 PM</p>
                    <p className='line font--mon line__map'>AUBERGE DU POMMIER</p>
                    <p className='line font--mon line__map'>4150 Yonge St, North York</p>
                    <a href="https://www.google.com/maps/place/Auberge+du+Pommier/@43.746904,-79.407782,17z/data=!4m15!1m8!3m7!1s0x882b3299e52a6d9f:0x1e0b65fd1c4ba8a9!2s4150+Yonge+St,+Toronto,+ON+M2P+2C6!3b1!8m2!3d43.746904!4d-79.407782!16s%2Fg%2F11c2grrf3n!3m5!1s0x882b3299fa9b7ea7:0x3645c0488d8067cf!8m2!3d43.7469808!4d-79.4077049!16s%2Fm%2F0526pt9?entry=ttu" className="map font--mon" target="_blank" rel="noreferrer">GOOGLE MAP</a>
                    <p className="korean line__parking">각 건물 내 지하 주차장을 이용하실 수 있습니다.</p>
                    <p className="line__parking line__parking--small">Underground parking is available for both location.</p>
                </div>
            </div>
            <div className="block block__carousel">
                <Carousel />
            </div>
            <div className="block">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form__title">
                        <h1 className="form__title--large">RSVP</h1>
                        <span className='form__title--small'><b className='form__title--small'>Please response by Oct 27th</b></span>
                    </div>

                    <div className="form__body">
                        <div className="form__block">
                            <label className="form__label--title" htmlFor='name'>NAME
                                <input className="form__input" type="text" id="name" name="name" required onChange={handleName}/>
                            </label>
                        </div>
                        <div className="form__block">
                            <label className="form__label--title" htmlFor='guestNum'> NUMBER OF GUESTS 
                                <input className="form__input form__input--number" type="number" id="guestNum" name="guestNum" required onChange={handleGuest}/>
                                <br></br><span className='small'>(Including yourself)</span>
                            </label>
                        </div>
                    </div>
                    <input className="form__submit" type="submit" value="Submit" onSubmit={handleSubmit}/>
                </form>
            </div>
        </main>
    )
}

export default Web