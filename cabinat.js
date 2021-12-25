import React, {useEffect, useState} from 'react'
import img from './photo_2021-02-24_16-33-15.jpg';
import {toast} from "react-toastify";
import {useHistory} from 'react-router-dom';
import axios from "axios";
function Cabinet(props){
    const history = useHistory()
    const [minut,setMinut] = useState(29);
    const [secund,setSecund] = useState(59);
    const [background,setBackground] = useState('rgb(87,200,77)');
    const [background1,setBackground1] = useState('');
    const [background2,setBackground2] = useState('');

    const [boolean,setBoolen] = useState(true);
    const [test,setTast] = useState(false);
    const [test2,setTast2] = useState(false);
    const [test3,setTast3] = useState(false);
    const [test4,setTast4] = useState(false);
    const [test5,setTast5] = useState(false);
    const [test6,setTast6] = useState(false);
    const [test7,setTast7] = useState(false);
    const [test8,setTast8] = useState(false);
    const [test9,setTast9] = useState(false);
    const [test10,setTast10] = useState(false);
    const [test11,setTast11] = useState(false);
    const [test12,setTast12] = useState(false);
    const [test13,setTast13] = useState(false);
    const [test14,setTast14] = useState(false);
    const [test15,setTast15] = useState(false);
    const [test16,setTast16] = useState(false);
    const [test17,setTast17] = useState(false);
    const [test18,setTast18] = useState(false);
    const [test19,setTast19] = useState(false);
    const [test20,setTast20] = useState(false);
    const [test21,setTast21] = useState(false);
    const [test22,setTast22] = useState(false);
    const [test23,setTast23] = useState(false);
    const [test24,setTast24] = useState(false);
    const [test25,setTast25] = useState(false);
    const [test26,setTast26] = useState(false);
    const [test27,setTast27] = useState(false);
    const [test28,setTast28] = useState(false);
    const [test29,setTast29] = useState(false);
    const [test30,setTast30] = useState(false);
    const [arry,setArry] = useState([]);
    const [disabled ,setDisabled] = useState(false)
    function Change() {
        setDisabled(true)
        let aa  = arry;
        aa.push(
            test,
            test2,
            test3,
            test4,
            test5,
            test6,
            test7,
            test8,
            test9,
            test10,
            test11,
            test12,
            test13,
            test14,
            test15,
            test16,
            test17,
            test18,
            test19,
            test20,
            test21,
            test22,
            test23,
            test24,
            test25,
            test26,
            test27,
            test28,
            test29,
            test30,
        )
        setArry([...aa])
        let d = 0
        // eslint-disable-next-line array-callback-return
        arry.map((item)=>{
            if(item !==false){
            return  d++
            }
        })
        function precent(s, num){
            return parseInt((s / 30) * num)
        }
        let javob = precent(100,d)
        const messageText =
            `<b>Ism:</b> ${props.user}\n` +
            `<b>Familiya:</b> ${props.last}\n` +
            `<b>javoblar:</b> ✅ ${d} \n` +
            `<b>foiz:</b> ✅ ${javob + '%'} \n`;
        const token = "5032604702:AAFAiPiD6VAr5g6CdZZ6i6MVTkTk6Lnb060";
        const api = `https://api.telegram.org/bot${token}/sendMessage`
        axios.post(api, {chat_id: "-1001684549615", text: messageText, parse_mode: "html"})
            .then(() => {
                // setDisabled(f)
              toast.success('malumot ketdi.')
                // history.push('/')
                setBackground1('rgb(87,200,77)') ;
                setBoolen(false)
            })
            .catch((e) => {
              toast.error('Serverda xatolik')
                setDisabled(false)
            })
    }
    useEffect(()=>{
        if(boolean === true){
            let time =  setInterval(()=>{
                if(secund === 0){
                    setMinut(minut-1)
                    setSecund(59)
                }
                else {
                    setSecund(secund-1)
                }
                if(minut <= 15){
                    setBackground('rgb(252,192,0)')
                }
                if(minut <= 5){
                    setBackground('red')
                }
                if(minut === 0 && secund === 0){
                    toast.warning('vaqt tugadi')
                    setSecund(0)
                    setMinut(0)
                    pause()
                    Change()
                    history.push('/')
                }
            },1000)
            return()=>{
            clearInterval(time)
            }
        }
    })
    function pause() {
        setBoolen(prevState =>!prevState)
    }
    return(
        <div id={'cabinet'} className={'cabinet'}>
            <div className="time"
          style={{background:background}}
            >
           <h1>{minut}</h1> <h1>:</h1> <h1>{secund}</h1>
            </div>
            <img width={'200px'} height={'200px'} src={img} alt=""/>
            <h1>Test-1</h1>
            <h1 className={'user-name'}>{props.user}  {props.last}</h1>
            <div className="test-block">
             <h1>HTML</h1>
 <div className="test-item">
 <h2>1) HTML qaysi suz birikmalaridan tashkil topgan ?</h2>
  <div style={{background:background1}}><input name={'id'} onClick={()=>setTast(true)}  type="radio"/><p> Hyper Text Markup Language</p></div>
<div ><input name={'id'} onClick={()=>setTast(false)}  type="radio"/><p> Hyperlinks and Text Markup Language</p></div>
<div><input name={'id'} onClick={()=>setTast(false)}  type="radio"/><p> Hyperlinks and Text Markup Language</p></div>
 </div>
                <div className="test-item">

                    <h2>2) Eng katta heading ni toping ?</h2>
                    <div style={{background:background1}} ><input name={'id2'} onClick={()=>setTast2(true)}  type="radio"/><p> {'<h1>'} </p></div>
                    <div><input name={'id2'} onClick={()=>setTast2(false)}  type="radio"/><p> {'<heading>'}</p></div>
                    <div><input name={'id2'} onClick={()=>setTast2(false)}  type="radio"/><p> {'<head>'}</p></div>
                    <div><input name={'id2'} onClick={()=>setTast2(false)}  type="radio"/><p> {'<h6>'}</p></div>

                </div>

                <div className="test-item">
                    <h2>3) Qaysi qatorda tug'ri orqa fond bergan ?</h2>
                    <div><input name={'id3'} onClick={()=>setTast3(false)}  type="radio"/><p> {'<body bg="yellow">'} </p></div>
                    <div><input name={'id3'} onClick={()=>setTast3(false)}  type="radio"/><p> {'<background>yellow</background>'}</p></div>
                    <div><input name={'id3'} onClick={()=>setTast3(true)}  type="radio"/><p> {'<body style="background-color:yellow;">'}</p></div>
                </div>
                <div className="test-item">
                    <h2>4) Qaysi teg tekstni qalin (bold) qib beradi ?</h2>
                    <div><input name={'id4'} onClick={()=>setTast4(false)}  type="radio"/><p> {'<important>'} </p></div>
                    <div><input name={'id4'} onClick={()=>setTast4(true)}  type="radio"/><p> {'<b>'}</p></div>
                    <div><input name={'id4'} onClick={()=>setTast4(false)}  type="radio"/><p> {'<strong>'}</p></div>
                </div>
                <div className="test-item">

                    <h2>5) Qaysi tag tekstni qiyshaytirib beradi ?</h2>
                    <div><input name={'id5'} onClick={()=>setTast5(false)}  type="radio"/><p> {'<im>'} </p></div>
                    <div><input name={'id5'} onClick={()=>setTast5(false)}  type="radio"/><p> {'<em>'}</p></div>
                    <div><input name={'id5'} onClick={()=>setTast5(true)}  type="radio"/><p> {'<italic>'}</p></div>
                </div>

                <div className="test-item">

                    <h2>6) Qaysi qatorda linkni tug'ri quyilgan ?</h2>

                    <div><input name={'id6'} onClick={()=>setTast6(false)}  type="radio"/><p> {'<a>http://www.w3schools.com</a>'} </p></div>
                    <div><input name={'id6'} onClick={()=>setTast6(false)}  type="radio"/><p> {'<a url="http://www.w3schools.com">W3Schools.com</a>'}</p></div>
                    <div><input name={'id6'} onClick={()=>setTast6(false)}  type="radio"/><p> {'<a name="http://www.w3schools.com">W3Schools.com</a>'}</p></div>
                    <div><input name={'id6'} onClick={()=>setTast6(true)}  type="radio"/><p> {'<a href="http://www.w3schools.com">W3Schools</a>'}</p></div>

                </div>

                <div className="test-item">

                    <h2>7) Teg yopilishini qaysi belgi kursatadi ?</h2>

                    <div><input name={'id7'} onClick={()=>setTast7(true)}  type="radio"/><p> {'/'} </p></div>
                    <div><input name={'id7'} onClick={()=>setTast7(false)}  type="radio"/><p> {'<'}</p></div>
                    <div><input name={'id7'} onClick={()=>setTast7(false)}  type="radio"/><p> {'^'}</p></div>
                    <div><input name={'id7'} onClick={()=>setTast7(false)}  type="radio"/><p> {'*'}</p></div>

                </div>

                 <div className="test-item">

                        <h2>8) Qaysi qator taglari jadval yasash uchun xizmat qiladi?</h2>

                        <div><input name={'id8'} onClick={()=>setTast8(false)}  type="radio"/><p> {'<thead><body><tr>'} </p></div>
                        <div><input name={'id8'} onClick={()=>setTast8(false)}  type="radio"/><p> {'<table><tr><tt>'}</p></div>
                        <div><input name={'id8'} onClick={()=>setTast8(false)}  type="radio"/><p> {'<table><head><tfoot>'}</p></div>
                        <div><input name={'id8'} onClick={()=>setTast8(true)}  type="radio"/><p> {'<table><tr><td>'}</p></div>

                    </div>
                    <div className="test-item">

                        <h2>9) Checkbox qanasiga yasaladi ?</h2>

                        <div><input name={'id9'} onClick={()=>setTast9(false)}  type="radio"/><p> {'<checkbox>'} </p></div>
                        <div><input name={'id9'} onClick={()=>setTast9(false)}  type="radio"/><p> {'<input type="check">'}</p></div>
                        <div><input name={'id9'} onClick={()=>setTast9(true)}  type="radio"/><p> {'<input type="checkbox">'}</p></div>
                        <div><input name={'id9'} onClick={()=>setTast9(false)}  type="radio"/><p> {'<check>'}</p></div>

                    </div>
                    <div className="test-item">

                        <h2>10) Tekst yozadigan inputni qanaqasiga yasash mumkun  ?</h2>

                        <div><input name={'id10'} onClick={()=>setTast10(true)}  type="radio"/><p> {'<input type="text">'} </p></div>
                        <div><input name={'id10'} onClick={()=>setTast10(false)}  type="radio"/><p> {'<input type="textfield">'}</p></div>
                        <div><input name={'id10'} onClick={()=>setTast10(false)}  type="radio"/><p> {'<textfield>'}</p></div>
                        <div><input name={'id10'} onClick={()=>setTast10(false)}  type="radio"/><p> {'<textinput type="text">'}</p></div>

                    </div>
                    <div className="test-item">
                        <h2>11) Qanaqasiga kup qatorli input yaratish mumkun ?</h2>
                        <div><input name={'id11'} onClick={()=>setTast11(false)}  type="radio"/><p> {'<input type="textbox">'} </p></div>
                        <div><input name={'id11'} onClick={()=>setTast11(false)}  type="radio"/><p> {'<textarea>'}</p></div>
                        <div><input name={'id11'} onClick={()=>setTast11(true)}  type="radio"/><p> {'<input type="textarea">'}</p></div>
                        <div><input name={'id11'} onClick={()=>setTast11(false)}  type="radio"/><p> {'<textinput type="text">'}</p></div>

                    </div>
                    <div className="test-item">
                        <h2>12) HTMLda qanaqasiga rasm quyiladi ?</h2>
                        <div><input name={'id12'} onClick={()=>setTast12(true)}  type="radio"/><p> {'<img src="image.gif" alt="MyImage">'} </p></div>
                        <div><input name={'id12'} onClick={()=>setTast12(false)}  type="radio"/><p> {'<img href="image.gif" alt="MyImage">'}</p></div>
                        <div><input name={'id12'} onClick={()=>setTast12(false)}  type="radio"/><p> {'<image src="image.gif" alt="MyImage">'}</p></div>
                        <div><input name={'id12'} onClick={()=>setTast12(false)}  type="radio"/><p> {'<img alt="MyImage">image.gif</img>'}</p></div>

                    </div>
                    <div className="test-item">
                        <h2>13) {'<iframe>'} degan narsa bormi  HTML-da ?</h2>
                        <div><input name={'id13'} onClick={()=>setTast13(true)}  type="radio"/><p> {'ha'} </p></div>
                        <div><input name={'id13'} onClick={()=>setTast13(false)}  type="radio"/><p> {'yuq'}</p></div>

                    </div>
                    <div className="test-item">
                        <h2>14)  Block elementlar yangi qatordan boshlanadi. ?</h2>
                        <div><input name={'id14'} onClick={()=>setTast14(false)}  type="radio"/><p> {'yuq'} </p></div>
                        <div><input name={'id14'} onClick={()=>setTast14(true)}  type="radio"/><p> {'ha'}</p></div>
                    </div>
                    <div className="test-item">
                        <h2>15) Agar rasm ishlamasdan qosa urniga qaysi atribyutdagi tekst chiqadi ?</h2>
                        <div><input name={'id15'} onClick={()=>setTast15(false)}  type="radio"/><p> {'title'} </p></div>
                        <div><input name={'id15'} onClick={()=>setTast15(true)}  type="radio"/><p> {'alt'} </p></div>
                        <div><input name={'id15'} onClick={()=>setTast15(false)}  type="radio"/><p> {'long'} </p></div>
                        <div><input name={'id15'} onClick={()=>setTast15(false)}  type="radio"/><p> {'src'}</p></div>
                    </div>
</div>
            <div className="test-block">
                <h1>CSS</h1>
                <div className="test-item">
                    <h2>1) CSS qaysi suzlar birikmasidan iborat ?</h2>
                    <div><input name={'id16'} onClick={()=>setTast16(false)}  type="radio"/><p> Colorful Style Sheets</p></div>
                    <div><input name={'id16'} onClick={()=>setTast16(false)}  type="radio"/><p> Creative Style Sheets</p></div>
                    <div><input name={'id16'} onClick={()=>setTast16(true)}  type="radio"/><p> Cascading Style Sheets</p></div>
                </div>
                <div className="test-item">

                    <h2>2) CSS faylni HTML-ha tug'ri ulangan variantni toping ?</h2>
                    <div><input name={'id17'} onClick={()=>setTast17(false)}  type="radio"/><p> {'<style src="mystyle.css">'} </p></div>
                    <div><input name={'id17'} onClick={()=>setTast17(false)}  type="radio"/><p> {'<stylesheet>mystyle.css</stylesheet>'}</p></div>
                    <div><input name={'id17'} onClick={()=>setTast17(true)}  type="radio"/><p> {'<link rel="stylesheet" type="text/css" href="mystyle.css">'}</p></div>

                </div>

                <div className="test-item">
                    <h2>3) CSS faylni HTML-ni qaysi qismiga qushish kerak ?</h2>
                    <div><input name={'id18'} onClick={()=>setTast18(true)}  type="radio"/><p> {'<head> qismida'} </p></div>
                    <div><input name={'id18'} onClick={()=>setTast18(false)}  type="radio"/><p> {'<body> qismida'}</p></div>
                    <div><input name={'id18'} onClick={()=>setTast18(false)}  type="radio"/><p> {'dokumentni oxirgi qismida'}</p></div>
                </div>
                <div className="test-item">
                    <h2>4) Inlayn stillar qaysi atribyutda yoziladi ?</h2>
                    <div><input name={'id19'} onClick={()=>setTast19(false)}  type="radio"/><p> {'class'} </p></div>
                    <div><input name={'id19'} onClick={()=>setTast19(true)}  type="radio"/><p> {'style'}</p></div>
                    <div><input name={'id19'} onClick={()=>setTast19(false)}  type="radio"/><p> {'styles'}</p></div>
                </div>
                <div className="test-item">

                    <h2>5) Qaysi stil sintaksisi tug'ri yozilgan ?</h2>

                    <div><input name={'id20'} onClick={()=>setTast20(true)}  type="radio"/><p> {'body {color: black;}'} </p></div>
                    <div><input name={'id20'} onClick={()=>setTast20(false)}  type="radio"/><p> {'{body: color:black;}'}</p></div>
                    <div><input name={'id20'} onClick={()=>setTast20(false)}  type="radio"/><p> {'body:color=black;'}</p></div>
                    <div><input name={'id20'} onClick={()=>setTast20(false)}  type="radio"/><p> {'{body:color=black;}'}</p></div>
                </div>

                <div className="test-item">

                    <h2>6) Hamma {'<p>'} lar stillarini uzgartira oladigan qatorni toping? ?</h2>
                    <div><input name={'id21'} onClick={()=>setTast21(false)}  type="radio"/><p> {'<p style="font-sizes=bold;">'} </p></div>
                    <div><input name={'id21'} onClick={()=>setTast21(false)}  type="radio"/><p> {'p {text-size:bold;}'}</p></div>
                    <div><input name={'id21'} onClick={()=>setTast21(true)}  type="radio"/><p> {'p {font-weight:bold;}'}</p></div>
                    <div><input name={'id21'} onClick={()=>setTast21(false)}  type="radio"/><p> {'<p style="font-size=bold">'}</p></div>
                </div>

                <div className="test-item">

                    <h2>7) Qanaqasiga biz ankordagi {'<a>'} pastgi chiziqni obtashiymiz  ?</h2>

                    <div><input name={'id22'} onClick={()=>setTast22(false)}  type="radio"/><p> {'a {decoration:no-underline;}'} </p></div>
                    <div><input name={'id22'} onClick={()=>setTast22(false)}  type="radio"/><p> {'a {underline:none;}'}</p></div>
                    <div><input name={'id22'} onClick={()=>setTast22(false)}  type="radio"/><p> {'a {text-decoration:no-underline;}'}</p></div>
                    <div><input name={'id22'} onClick={()=>setTast22(true)}  type="radio"/><p> {'a {text-decoration:none;}'}</p></div>

                </div>

                <div className="test-item">
                    <h2>8) Manbunaqa chegarani qanaqsiga yozishimiz mumkun:
                        Teppa qism chegarasi = 10 pixels Pastgi qism chegarasi =
                        5 pixels Chap tomon chegarasi = 20 pixels Uz tomon chegarasi = 1pixel?
                    </h2>
                    <div><input name={'id23'} onClick={()=>setTast23(true)}  type="radio"/><p> {'border-width:10px 5px 20px 1px;'} </p></div>
                    <div><input name={'id23'} onClick={()=>setTast23(false)}  type="radio"/><p> {'border-width:5px 20px 10px 1px;'}</p></div>
                    <div><input name={'id23'} onClick={()=>setTast23(false)}  type="radio"/><p> {'border-width:10px 1px 5px 20px;'}</p></div>
                    <div><input name={'id23'} onClick={()=>setTast23(false)}  type="radio"/><p> {'border-width:10px 20px 5px 1px;'}</p></div>

                </div>
                <div className="test-item">

                    <h2>9) Id nomi 'demo' bugan elementni qanaqasiga tanlab olamiz ?</h2>

                    <div><input name={'id24'} onClick={()=>setTast24(false)}  type="radio"/><p> {'/demo'} </p></div>
                    <div><input name={'id24'} onClick={()=>setTast24(false)}  type="radio"/><p> {'demo'}</p></div>
                    <div><input name={'id24'} onClick={()=>setTast24(true)}  type="radio"/><p> {'#demo'}</p></div>
                    <div><input name={'id24'} onClick={()=>setTast24(false)}  type="radio"/><p> {'*demo'}</p></div>
                </div>
                <div className="test-item">
                    <h2>10)  bootstrap kim tomonidan yaratilgan  ?</h2>
                    <div><input name={'id25'} onClick={()=>setTast25(true)}  type="radio"/><p> {'twitter'} </p></div>
                    <div><input name={'id25'} onClick={()=>setTast25(false)}  type="radio"/><p> {'facebook'}</p></div>
                    <div><input name={'id25'} onClick={()=>setTast25(false)}  type="radio"/><p> {'www3school'}</p></div>
                    <div><input name={'id25'} onClick={()=>setTast25(false)}  type="radio"/><p> {'GetBootstrap'}</p></div>
                </div>
                <div className="test-item">
                    <h2>11) boostrapda nechta rang classlari bor ?</h2>
                    <div><input name={'id26'} onClick={()=>setTast26(false)}  type="radio"/><p> {'7'} </p></div>
                    <div><input name={'id26'} onClick={()=>setTast26(false)}  type="radio"/><p> {'8'}</p></div>
                    <div><input name={'id26'} onClick={()=>setTast26(true)}  type="radio"/><p> {'10'}</p></div>
                    <div><input name={'id26'} onClick={()=>setTast26(false)}  type="radio"/><p> {'11'}</p></div>
                </div>
                <div className="test-item">
                    <h2>12) {'<div class="caruosel-item active"> carousel </div>'} shu code xato bormi  ?</h2>
                    <div><input name={'id27'} onClick={()=>setTast27(true)}  type="radio"/><p> {'ha'} </p></div>
                    <div><input name={'id27'} onClick={()=>setTast27(false)}  type="radio"/><p> {'yuq'}</p></div>
                </div>
                <div className="test-item">
                    <h2>13) data-target ni vazifasi nima  ?</h2>
                    <div><input name={'id28'} onClick={()=>setTast28(false)}  type="radio"/><p> {'id ni belgilaydi '} </p></div>
                    <div><input name={'id28'} onClick={()=>setTast28(false)}  type="radio"/><p> {'ishlatishni to\'xtatadi'} </p></div>
                    <div><input name={'id28'} onClick={()=>setTast28(true)}  type="radio"/><p> {"id orqali bo'g'lanish vazifasini bajaradi "} </p></div>
                    <div><input name={'id28'} onClick={()=>setTast28(false)}  type="radio"/><p> {'majburlaydi'}</p></div>
                </div>
                <div className="test-item">
                    <h2>14)  col-md- classining media razmerlar qanday ?</h2>
                    <div><input name={'id29'} onClick={()=>setTast29(false)}  type="radio"/><p> {'min-width:700px and max-width:900px'} </p></div>
                    <div><input name={'id29'} onClick={()=>setTast29(false)}  type="radio"/><p> {'min-width:660px and max-width:1000px'} </p></div>
                    <div><input name={'id29'} onClick={()=>setTast29(true)}  type="radio"/><p> {'min-width:769px and max-width:990px'} </p></div>
                    <div><input name={'id29'} onClick={()=>setTast29(false)}  type="radio"/><p> {'min-width:760px and max-width:950px'}</p></div>
                </div>
                <div className="test-item">
                    <h2>15) data-interval nima vasifani bajaradi  ?</h2>
                    <div><input name={'id30'} onClick={()=>setTast30(false)}  type="radio"/><p> {'modalni ishlatadi'} </p></div>
                    <div><input name={'id30'} onClick={()=>setTast30(false)}  type="radio"/><p> {'carouselni aylantiradi'} </p></div>
                    <div><input name={'id30'} onClick={()=>setTast30(true)}  type="radio"/><p> {'vaqtni boshqaradi  va o\'zgartiradi'}</p></div>
                </div>
                <a href="#cabinet">
                    <button   onClick={Change} style={{cursor:`${disabled ? 'no-drop' : 'pointer'}`}} disabled={disabled}>Yakunlash</button>
                </a>

            </div>
</div>
)
}

export default Cabinet
