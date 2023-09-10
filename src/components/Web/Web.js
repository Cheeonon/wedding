import './Web.scss';
import cover from "../../assets/img/cover.jpg";
import heart from "../../assets/img/placeholder5050.svg";

const Web = () => {
    
    let handleClick=(e)=>{
        e.preventDefault();
        console.log("I was clicked")
    }

    return (
        <div className="web">
            <div className="block">
                <img classname="block__img" src={cover} alt="대문" />
            </div>
            <div className="block block-page">
                <div className="block__belt">오직 나와 내 집은 여호와를 섬기겠노라 여호수아 24:15</div>
                <img src={heart} alt="" />
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
            {/* onSubmit={handleSubmit(data => saveData(data))} */}
                <form className="block__form">
                    <h2 className="block__title">RSVP BY 20TH OF OCTOBER</h2>
                    <div className="form__block">
                        <label className="form__label">Name</label>
                        <input className="form__input" name="name"/>
                    </div>
                    <div className="form__block">
                        <label className="form__label">Phone Number</label>
                        <input className="form__input" name="phonenumber"/>
                    </div>
                    <div className="form__block">
                        <label className="form__label">참석여부</label>
                        <input type="radio" name="fruit" value="apple" />Ceremony
                        <input type="radio" name="fruit" value="orange" />Reception
                        <input type="radio" name="fruit" value="melon" />Both
                    </div>
                    <input className="form__submit" type="submit" value="Submit" onClick={handleClick}/>
                </form>
            </div>
        </div>
    )
}

export default Web