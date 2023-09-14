import './Web.scss';
import cover from "../../assets/img/cover.jpg";
import { submitRsvp } from '../../utils/axios';
import { useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';

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
                <div className="block__paragraph">
                    <p className="korean">한성희 정미옥의 장남 <b className="fontSize">한규희</b></p> 
                    <p className="korean">박성우 김성희의 장녀 <b className="fontSize"><Link to="/list">박채린</Link></b></p>
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
                    <p>CEREMONY | 11 : 00 AM</p>
                    <p>"Lawrence Park <br></br> Community Church"</p>
                    <p>2180 Bayview Ave, North York</p>
                </div>
                <div className="block__paragraph">
                    <p>RECEPTION | 12 : 30 PM</p>
                    <p>"Auberge Du Pommier"</p>
                    <p>4150 Yonge St, North York</p>
                </div>
            </div>
            <div className="block">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form__title">
                        <h1 className="form__title--large">RSVP</h1>
                        <span className='form__title--small'><b className='form__title--small'>Please response by Oct 20th</b></span>
                    </div>

                    <div className="form__body">
                        <div className="form__block">
                            <label className="form__label--title" htmlFor='name'>NAME:
                                <input className="form__input" type="text" id="name" name="name" placeholder="John Doe" required onChange={handleName}/>
                            </label>
                        </div>
                        <div className="form__block">
                            <label className="form__label--title" htmlFor='guest'> Number of guests attending:
                                <input className="form__input form__input--number" type="number" id="guest" name="guest" placeholder="0" required onChange={handleGuest}/>
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