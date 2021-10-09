
const { createToken, createPW } = require("../../jwt");
const { pool } = require('../../pool')
const ws = require('../../websocket')
const request = require('request');

let join_success = async (req, res, next) => {
    let connection;
    connection = await pool.getConnection(async conn => conn);

    const {userid, username, userpw, account} = req.body
    const wallet = ''
    const jwtuserpw = createPW(userpw);

    headers={"Content-type": "application/json"};
    body=`{"method":"getnewaddress","params":["${userid}"]}`;

    const USER='groot1'
    const PASS='U8RcpdNpgSLRnf/9Xe7A5MLvy5a19/bGhjnR4+9qPgE'
    const RPCPORT=3010 
    const options={
        url:`http://${USER}:${PASS}@127.0.0.1:${RPCPORT}`,
        method:"POST",
        headers,
        body
    }
    
    const callback = (err,response,data)=>{
            const body = JSON.parse(data);
            wallet = body.result

    }
    request(options,callback)
    
    let join_success = await connection.query(`insert into user (userid, username, userpw, account, wallet) values ('${userid}', '${username}', '${jwtuserpw}', '${account}', '${wallet}')`)
    
    // ws.join()


}

let login_success = async (req, res, next) => {
    let connection;
    connection = await pool.getConnection(async conn => conn);

    const {userid, userpw} = req.body.data
    console.log(userid,userpw)
    const jwtuserpw = createPW(userpw);
    const Token = createToken(userpw);

        let login_success = await connection.query(`select * from user where userid = '${userid}'`)
        let pw_success = await connection.query(`select * from user where userid = '${userid}' and userpw = '${jwtuserpw}'`)
            console.log(login_success[0][0])
            let content = login_success[0][0]
            if(login_success[0][0] == undefined){
                res.json({msg:'가입되어 있지 않습니다', boolean:false})
            }else if(pw_success[0][0] == undefined){
                res.json({msg:'패스워드가 틀렸습니다', boolean:false})
            }else{
                res.cookie('userid', userid);
                res.cookie('AccessToken', Token);
                res.json({msg:`${userid}님 로그인 되셨습니다`, boolean:true, content:content})
                
            }

}

let login_check = async (req, res, next) => {

    let connection;
    connection = await pool.getConnection(async conn => conn);

    const {userid} = req.query

    let user_table = await connection.query(`select * from user where userid = '${userid}' `)
    console.log('db 작동')
    console.log(user_table[0][0])
    if(user_table[0][0] == undefined){
        res.json('사용 가능한 아이디입니다')
    }else{
        res.json('사용 불가능한 아이디입니다')
    }
}

module.exports = {
    join_success,
    login_success,
    login_check
}