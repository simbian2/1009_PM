import { useState,useEffect } from "react"
import Styled from 'styled-components'

const Box = Styled.div`
    margin: 0 auto;
    width:1200px;
    height: 100%;
    
    &>img{
        width:1200px;
    }
    
    &>h1{
        width:100%;
        height:50px;
        font-weight:bold;
        background-color:rgba(32, 201, 150);
        text-align:center;
    }
    &>h1:before{
        content:"ยบ";
    }
    &>.title{
        margin-top:50px;
    }

    &>ul{
    display:inline-block;
    margin-bottom:100px;
    text-align:center;
    }

    &>ul>li{
        font-size: 28px;
        font-weight: bold;
    }

    &>h4{
        text-indent: 20px;
    }
    
`


const coinInfo = () =>{
  
    return(
        <Box >
        <img src="/grooot.jpg"></img>
        <h1>groot coin๐ณ</h1>
        <h4>'K-Digital Training ๋ธ๋ก์ฒด์ธ ๊ธฐ๋ฐ ํํํฌ ๋ฐ ์์ฉ SW ๊ฐ๋ฐ์ ์์ฑ๊ณผ์ '์
        ์ฒซ ๋ฒ์งธ ๋ธ๋ก์ฒด์ธ ํ๋ก์ ํธ์ด๋ฉฐ, BitCoin ๊ธฐ๋ฐ์ผ๋ก ๋ง๋ค์ด์ง ์ฝ์ธ์ด๋ค</h4>

        <h1 className="title">why grootcoin?</h1>
        <h4>๊ฐ์งํ๋๋ง ์์ด๋ ๋ค์ ๋ถํํ๋ ๊ทธ๋ฃจํธ์ ๋์ง๊ธด ์๋ช๋ ฅ์ ์๋ฏธ๋ฅผ ์ด์ด๋ฐ์ ๊ทธ๋ฃจํธ์ฝ์ธ ๋จ์ด์ง๋๋ก ๋จ์ด์ ธ ๋ฐ๋ฅ์ ์น๋๋ผ๋ ์ฃฝ์ง ์๊ณ  ์ด์๋ ์ฑ๊ณตํ  ๊ฒ์ด๋ค.</h4>
        
        <h1 className="title">information</h1>
        <ul>
            <li>grootcoin ์ถ์์ผ : 2021.10 </li>
            <li>์ด grooutcoin ์ : 84,000 qty </li>
            <li>๋ธ๋ก ์์ฑ ์ฃผ๊ธฐ    : 2.5 minute  </li>
            <li>๋์ด๋ ์กฐ์  ์ฃผ๊ธฐ    : 3.5 day  </li>
            <li>๋ฐ๊ฐ๊ธฐ   : 4 year </li>
            <li>์ฑ๊ตด๋ฐฉ์    : POW(์์์ฆ๋ช)  </li>
        </ul>
        </ Box>
    )
}

export default coinInfo