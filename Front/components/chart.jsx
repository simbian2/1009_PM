import { useState, useEffect, useRef, useReducer } from "react"
import axios from "axios";
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import dayjs from 'dayjs'
import { compareDocumentPosition } from "../../Back/node_modules/domutils/lib";

// const timestamp = () => {
//   let localDate = new Date().toLocaleDateString()
//   let unixStartTime = new Date(localDate).getTime()
// }

function reducer(state, action) {
  switch (action.type) {
    case "CLICK":
      // console.log(action.result);
      return {
        ...state,
        data: action.result
      }
    default:
      return state
  }
}
const initialstate = {
  data: []
}


const chart = () => {
  const [state, dispatch] = useReducer(reducer, initialstate)
  const [data, setData] = useState([])

  const [socket, setSocket] = useState(false);
  const ws = useRef(null);
  const [graph, setGraph] = useState([])

  useEffect(() => {
    ws.current= new WebSocket('ws://127.0.0.1:8080');
    ws.current.onopen=()=>{
        setSocket(true)
    }

    return () => {
        ws.current.close();
    };
  }, []);

  useEffect(()=>{
      // setInterval(()=>{
          ws.current.onmessage=e=>{
          setGraph(e.data)
          console.log(JSON.parse(e.data).graph)

      }
  // },1000)
      // const timeoutTEST = setTimeout(()=>{console.log(1)},1000)
      // clearTimeout(timeoutTEST)
  },[socket])


  useEffect(async () => {
    const response = await fetch("http://localhost:3003/api/coin/graph");
    const data = await response.json()
    setData(data.data)
    console.log(data.data.length)
  }, []);

  const chartNum = () => {
    let result = []

    for (let i = 0; i < data.length; i++) {
      const x = new Date(data[i].time * 1000)
      const y = [data[i].half_start, data[i].half_max, data[i].half_min, data[i].half_last]

      let obj = { x, y }
      result.push(obj)
    }

    // console.log(result)

    dispatch({ type: 'CLICK', result })

  }




  // console.log(data.halfhour)
  const series = [{
    name: 'candle',
    data: state.data
  }]

  const options = {
    title: {
      text: 'grootcoin_Chart',
      align: 'left'
    },
    annotations: {
      xaxis: [
        {
          x: 'Oct 06 14:00',
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              fontSize: '12px',
              color: '#fff',
              background: '#00E396'
            },
            orientation: 'horizontal',
            offsetY: 7,
            text: 'Annotation Test'
          }
        }
      ]
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter: function (val) {
          return dayjs(val).format('MMM DD HH:mm')
        }
      }
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  }


  // const a = () =>{
  //   const ingoo = 100;
  // }
  // const view = () => {
  //   console.log(state)
  //   const hello = state.b.map(v=>{
  //     return (
  //       <>{v}</>
  //     )
  //   })
  //   return (
  //     <>
  //     {hello}
  //     </>
  //     // <ReactApexChart key={k}
  //     //       options={options}
  //     //       series={series}
  //     //       type="candlestick"
  //     //       height={600}
  //     //     />
  //   )
  // }
  return (
    <div id="chartBox" >
      <div id="chart">
        <button onClick={chartNum}></button>
        <ReactApexChart
          series={series}
          options={options}
          type="candlestick"
          height={600}
        />
      </div>
    </div>
  )
}



export default chart