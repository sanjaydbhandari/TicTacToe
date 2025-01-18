import { useState,useRef } from "react"

let data = new Array(9).fill("")
function TicTacToeDemo(){
    const [count,setCount] = useState(0)
    const [lock,setLock] = useState(false)
    const titleRef = useRef(null)
    const box0 = useRef(null)
    const box1 = useRef(null)
    const box2 = useRef(null)
    const box3 = useRef(null)
    const box4 = useRef(null)
    const box5 = useRef(null)
    const box6 = useRef(null)
    const box7 = useRef(null)
    const box8 = useRef(null)
    const box_area=[box0,box1,box2,box3,box4,box5,box6,box7,box8]

    function toggle(e,index){
        if(lock)
            return 0
        else if(data[index] !== "")
            return 0
        else if(count%2===0){
            data[index]="X"
            e.target.innerHTML = "X"
            setCount(count+1)
        }else{
            data[index]="O"
            e.target.innerHTML="O"
            setCount(count+1)
        }
        checkWin()
    }

    function checkWin(){
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            win(data[2])
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            win(data[5])
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            win(data[8])
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            win(data[6])
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            win(data[7])
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            win(data[8])
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            win(data[8])
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            win(data[6])
        }else if(count == 8){
            titleRef.current.innerHTML="<span>Match Draw</span>"
            setTimeout(() => {
                reset()
            }, 2000);
        }
    }

    function win(winner){
        setLock(true)
        if(winner === "X"){
            titleRef.current.innerHTML="Congratulations : <span>X wins</span>"
        }else if(winner ==="O"){
            titleRef.current.innerHTML="Congratulations : <span>O wins</span>"
        }
    }

    function reset(){
        setLock(false);
        setCount(0)
        data = new Array(9).fill("")
        titleRef.current.innerHTML="Tic Tac Toe Game in <span>React</span>"
        box_area.map((e)=>{
            e.current.innerHTML="";
        })
    }

    return (
        <div className="container">
            <p ref={titleRef}>Tic Tac Toe Game in <span>React</span></p>
            <div className="board">
                <div className="rows">
                    <div className="boxes" ref={box0} onClick={(e)=>toggle(e,0)}></div>
                    <div className="boxes" ref={box1} onClick={(e)=>toggle(e,1)}></div>
                    <div className="boxes" ref={box2} onClick={(e)=>toggle(e,2)}></div>
                </div>
                <div className="rows">
                    <div className="boxes" ref={box3} onClick={(e)=>toggle(e,3)}></div>
                    <div className="boxes" ref={box4} onClick={(e)=>toggle(e,4)}></div>
                    <div className="boxes" ref={box5} onClick={(e)=>toggle(e,5)}></div>
                </div>
                <div className="rows">
                    <div className="boxes" ref={box6} onClick={(e)=>toggle(e,6)}></div>
                    <div className="boxes" ref={box7} onClick={(e)=>toggle(e,7)}></div>
                    <div className="boxes" ref={box8} onClick={(e)=>toggle(e,8)}></div>
                </div>
            </div>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

 export default TicTacToeDemo