import Link from 'next/link'
import Styled from 'styled-components'
import useInput from '../hooks/useInput'
import {useState} from 'react'
import {join_success} from '../api/api'
import Router from 'next/router'
import { user_url } from '../store/Allurl'

const Box = Styled.div`
    margin: 0 auto;
    width:480px;
    height:1000px;
    padding: 16px 24px 32px;
    margin-top:80px;
    padding-top:40px;
    text-align:center;

    ul,li{
        list-style:none;
        
    }
    a{
        text-decoration:none;
        width:100%;
    }

    &>h1{
        margin-bottom: 24px;
        font-size: 34px;
    }

    &>.bigcheck{
        display:inline-block;
    }

    &>.bigCheck>li{
        display:inline-block;
        font-weight:bold;
        font-size:14px;
    }

    &>.bigCheck>.bigCheck1{
        font-weight:bold;
        color:rgba(32, 201, 150);
    }

    &>.bigCheck>.bigCheck2{
        margin-right:5px;
        margin-left:75px;

    }
    
    &>.a>.margin24{
        margin: 24px 0 5px 0;    
    }
    
    &>.a>.inputFont{
        float:left;
        font-size: 14px;
        font-weight: bold;
        color: #484d55;
        text-align:left;
    }

    &>.a>.inputBox{
        box-sizing: border-box;
        display: block;
        padding-left: 16px;
        padding-right: 16px;
        width: 100%;
        height: 48px;
        border-radius: 3px;
        border: 1px solid #c9ccd2;
        background-color: #fff;
        font-size: 14px;
        color: #18191c;
        -webkit-appearance: none;
        margin-top: 5px;
    }
    
    &>.a>.passwordBox2{
        width: 100%;
        height: 100%;
        margin: 8px 0 24px;
        padding: 12px 16px;
        border: 1px solid #e4e5e8;
        margin-left: 0;
        background-color: #f8f8f9;
    
    }

    &>.a>.passwordBox2{
        display:inline-block;
        text-align:left;
        color: #18191c;
        font-size:12px;
        font-weight:bold;
        box-sizing: border-box;     
        font-size: 12px;
        color: #79818f;
    }

    &>.a>.passwordBox2>li{
      line-height:17px;
    }
    
    &>.a>.passwordBox2>.chk{
        color:rgba(32, 201, 150);
    }
    &>.a>.passwordBox2>.chk:before{
        content:"????"
    }
    
    &>.a>.passwordBox2>li:before{
        content:"*";
    }
    
    &>.a>.bigBtn{
        background-color: #c9ccd2;
        color: #000;
        opacity: .5;
        cursor: not-allowed;
        width: 100%;
        padding: 0 16px;
        height: 48px;
        font-size: 16px;
        display: inline-flex;
        flex: 0 0 auto;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        line-height: normal;
        font-weight: bold;
        font-style: normal;
        transition: background .25s,border .25s;
        text-align: center;
        white-space: nowrap;
        cursor: pointer;
        touch-action: manipulation;
        outline: 0;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    &>.a>.bigBtn:hover{
        background:rgba(32, 201, 150);
        color:#000;
        font-weight:bold;
        }
    &>.a>.bigBtn>a:hover{
        color:#000;
    }

    &>.a>.error{
        text-align:left;
    }

`

const join = () => {

    const userid = useInput('');
    const userpw = useInput('');
    const username = useInput('');
    const accountNo = useInput('');

    const [pwChk, setPwChk] = useState('');
    const [pwError, setPwError] = useState(false);



    const handlePassword = e => {
        const { value } = { ...e.target }
        setPwError(userpw.value !== value) // 1234 === 1234 ture
        setPwChk(value)
    }

    const checkAccountNo = e => {
        if (accountNo.value.length === 11) {
            return true
        } else {
            return false
        }

    }

    const check = e => {
        if (userid.value !== '' && userpw.value !== '' && userpw.value === pwChk && pwChk !== '' && username.value !== '' && accountNo.value !== '' && accountNo.value.length === 11) {
            return true
        } else {
            return false
        }
    }

    const bigChk = () => {
        let big = ["A", "B", "C", "D", "E", "F", "G", 
                        "H", "I", "J","K","L","M","N","O",
                        "P","Q","R","S","T","U","V","W","X","Y","Z"];
        let check_big = 0;
        for (var i = 0; i < big.length; i++) {
            if ({ ...userpw }.value.indexOf(big[i]) != -1) {
                check_big = 1;
            }
        }
        if (check_big !== 0) {
            return true;
        }
    }
    const smallChk = () => {
        let small = ["a", "b", "c", "d", "e", "f", "g", 
                        "h", "i", "j","k","l","m","n","o",
                        "p","q","r","s","t","u","v","w","x","y","z"];
        let check_small = 0;
        for (var i = 0; i < small.length; i++) {
            if ({ ...userpw }.value.indexOf(small[i]) != -1) {
                check_small = 1;
            }
        }
        if (check_small !== 0) {
            return true;
        }
    }
    const numChk = () => {
        let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let check_number = 0;
        for (var i = 0; i < number.length; i++) {
            if ({ ...userpw }.value.indexOf(number[i]) != -1) {
                check_number = 1;
            }
        }
        if (check_number !== 0) {
            return true;
        }
    }
    const stChk = () => {
        let st = ["!", "@", "#", "$", "%", "^", "&", "*"];
        let check_st = 0;
        for (var i = 0; i < st.length; i++) {
            if ({ ...userpw }.value.indexOf(st[i]) != -1) {
                check_st = 1;
            }
        }
        if (check_st !== 0) {
            return true;
        }
    }
    const pw10Chk = () => {
        if ({ ...userpw }.value.length < 10) {
            return true
        }
    }


    const handleSubmit = e => {
        e.preventDefault()

        if (userpw.value !== pwChk) {
            setPwError(true)
            return
        } else {
            setPwError(false)
        }

        join_success({userid:userid.value, username:username.value, userpw:userpw.value, account:accountNo.value, wallet:"info"})
        Router.push('/')
    }

    
    const [LoginCheck, setLoginCheck] = useState('---')

    const handleuseridCheck = async e => {
        e.preventDefault()
        console.log('?????? ??????')
        const options = {
            method:'GET'
        }

        const response = await fetch(`${user_url}/login_check?userid=${userid.value}`,options) //restful api 
        const result = await response.json()
        console.log(response)
        setLoginCheck(result)
        console.log(result.length)
    }

    return (
        <Box>
            <h1>????????????</h1>
            <ul className="bigCheck">
                <li className="bigCheck2">??? ????????????</li><li> ------------- </li> <li className="bigCheck1">??? ????????????</li>
            </ul>

            <form onSubmit={handleSubmit} className="a">
                <label className="margin24 inputFont" label htmlFor="userid" >?????????</label>
                <input type="email" {...userid} onMouseOut = {handleuseridCheck} className="inputBox" name="userid" id="userid" placeholder="???????????? ????????? ????????? ??????" />
                <div>{LoginCheck}</div>
                <label className="margin24 inputFont" label htmlFor="userpw" >????????????</label>
                <input type="password" {...userpw} className="inputBox" name="userpw" id="userpw" placeholder="???????????? ??????" />
                <ul className="passwordBox2">
                    {bigChk() ? <li className="chk">?????? ????????? ??????</li> : <li>?????? ????????? ??????</li>}
                    {smallChk() ? <li className="chk">?????? ????????? ??????</li> : <li>?????? ????????? ??????</li>}
                    {numChk() ? <li className="chk">?????? ??????</li> : <li>?????? ??????</li>}
                    {stChk() ? <li className="chk">???????????? ??????</li> : <li>???????????? ??????</li>}
                    {pw10Chk() ? <li >10??? ??????</li> : <li className="chk">10??? ??????</li>}
                </ul>
                <label className="margin24 inputFont" label htmlFor="pwChk" >???????????? ??????</label>
                <input type="password" value={pwChk} id="pwChk" onChange={handlePassword} className="inputBox" placeholder="???????????? ??????" />
                {pwError && <div className="error" style={{ color: 'red' }}>??????????????? ???????????? ????????????.</div>}

                <label className="margin24 inputFont" label htmlFor="username" >??????<br /></label>
                <input type="text" {...username} id="username" name="username" className="inputBox" placeholder="??????" />

                <label className="margin24 inputFont" label htmlFor="accountNo" >????????????<br /> </label>
                <input type="text" {...accountNo} className="inputBox" name="accountNo" id="accountNo" placeholder="???????????? ??????" maxLength="11" />
                {checkAccountNo() ? '' : <div className="error" style={{ color: 'red' }}>???????????? 11????????? ??????????????????.</div>}

                <br />


                {check() ? <input type = "submit" className="bigBtn" value = "??????" /> : ''}

            </form>
        </Box>
    )
}

export default join