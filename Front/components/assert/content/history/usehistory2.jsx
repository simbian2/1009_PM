const usehistory2 = () =>{
    return(
        <>
        <div className = "grey2">최대 조회 가능 기간은 1개월 입니다</div>
        <div className = "top70"> 
            <div className = "float_left firstselect">
                <select>
                    <option>7일</option>
                </select>
                <input className = "select" type = "date"/>
                <input className = "select" type = "date"/>
            </div>
            <div className = "float_right">
                <select>
                    <option>전체마켓</option>
                </select>
                <select>
                    <option>전체코인</option>
                </select>
                <select>
                    <option>전체내역</option>
                </select>                
            </div>
        </div>
        <div className = "">
            <table className = "Grey2">
                <tr className = "">
                    <td className = "width_120"> 
                        시간
                    </td>
                    <td className = "width_120">
                        코인
                    </td>
                    <td className = "width_120">
                        입출금
                    </td>
                    <td className = "width_120"> 
                        체결량
                    </td>
                    <td className = "width_120">
                        거래 금액
                    </td>
                    <td className = "width_120">
                        수수료
                    </td>
                </tr>
            </table>
        </div>
        </>
    )
}

export default usehistory2;