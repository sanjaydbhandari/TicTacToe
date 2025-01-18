import { useState,useRef } from 'react'
import './tictactoe.css'

let board = new Array(9).fill("");

function tictactoe () {
    const [lock,setLock] = useState(false);//if game wins by anyone then to make button unclickable
    const [count,setCount] = useState(0);//even for x and odd for O
    const [point,setPoint] = useState([0,0])
    console.log(point)
    const titleRef = useRef(null);
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
    const box4 = useRef(null);
    const box5 = useRef(null);
    const box6 = useRef(null);
    const box7 = useRef(null);
    const box8 = useRef(null);
    const box9 = useRef(null);

    const box_area=[box1,box2,box3,box4,box5,box6,box7,box8,box9];

    function toggle(e,index){
        if(lock)
            return 0;
        else if(count%2===0 && board[index]===""){
            board[index]="X"
            e.target.innerHTML="X"
            setCount(count+1)
        }
        else{
            if(board[index]===""){
                board[index]="O"
                e.target.innerHTML="O"
                setCount(count+1)
            }
        }
        checkWin()
    }

    const checkWin=()=>{
            if(board[0]===board[1] && board[1]===board[2] && board[2]!=="") {
                won(board[2])
            }
            else if(board[3]===board[4] && board[4]===board[5] && board[5]!==""){
                won(board[5])
            }
            else if(board[6]===board[7] && board[7]===board[8] && board[8]!==""){
                won(board[8])
            }
            else if(board[0]===board[3] && board[3]===board[6] && board[6]!==""){
                won(board[6])
            }
            else if(board[1]===board[4] && board[4]===board[7] && board[7]!==""){
                won(board[7])
            }
            else if(board[2]===board[5] && board[5]===board[8] && board[8]!==""){
                won(board[8])
            }
            else if(board[0]===board[4] && board[4]===board[8] && board[8]!==""){
                won(board[8])
            }
            else if(board[2]===board[4] && board[4]===board[6] && board[6]!=="") {
                won(board[6])
            }
            else if(count==8){
                titleRef.current.innerHTML="<span>Match Draw</span>";
                setTimeout(()=>{
                    reset()
                },2000)
            }
    }

    const won = (winner)=>{
        setLock(true);
        if(winner === 'X'){
            titleRef.current.innerHTML="Congratulations: <span>X win</span>"
            setPoint([Number(point[0])+1,point[1]])
        }else{
            titleRef.current.innerHTML="Congratulations: <span>O win</span>"
            setPoint([point[0],Number(point[1])+1])
        }
    }

    function reset(){
        setLock(false);
        setCount(0)
        board = new Array(9).fill("");
        titleRef.current.innerHTML="Tic Tac Toe in <span>React</span>"
        box_area.map((e)=>{
            e.current.innerHTML="";
        })
    }
    return(
        <div className="container">
            <table className='pointstable'>
                <tr>
                    <th>X</th>
                    <th>Total</th>
                    <th>0</th>
                </tr>
                <tr>
                    <td>{point[0]}</td>
                    <td>{Number(point[0])+Number(point[1])}</td>
                    <td>{point[1]}</td>
                </tr>
            </table>
            <p ref={titleRef}>Tic Tac Toe in <span>React</span></p>
            <div className="board">
                <div className="rows">
                    <div className="boxes" ref={box1} onClick={(e)=>toggle(e,0)}></div>
                    <div className="boxes" ref={box2} onClick={(e)=>toggle(e,1)}></div>
                    <div className="boxes" ref={box3} onClick={(e)=>toggle(e,2)}></div>
                </div>
                <div className="rows">
                    <div className="boxes" ref={box4} onClick={(e)=>toggle(e,3)}></div>
                    <div className="boxes" ref={box5} onClick={(e)=>toggle(e,4)}></div>
                    <div className="boxes" ref={box6} onClick={(e)=>toggle(e,5)}></div>
                </div>
                <div className="rows">
                    <div className="boxes" ref={box7} onClick={(e)=>toggle(e,6)}></div>
                    <div className="boxes" ref={box8} onClick={(e)=>toggle(e,7)}></div>
                    <div className="boxes" ref={box9} onClick={(e)=>toggle(e,8)}></div>
                </div>
            </div>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default tictactoe