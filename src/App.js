import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import { ButtonLike } from './component/ButtonLike';

function App() {
  
  let [post] = 'Project practice';
  let [Title,setTitle] =useState(['Noel Market','Alisha Market' , 'Jasper Market']);
  let [like,setlike] = useState([0,0,0])
  let [modal, setModal]= useState(false)
  let [title, seTTitle] = useState(0);
  let [input,setinput] = useState('');

  // let post - 데이터 바인딩
  //데이터베이스에서 받아와서하는거
// state 변경을 도와주는 함수 b

  return (
    <div className="App">
      <div className="black-nav">
        <h4>NOEL's Comment Space</h4>
        </div>
        <button onClick={()=>{setTitle(['Alisha Market','Noel Market' , 'Jasper Market'])}}>SWITCH</button>
        <button onClick={()=>{
          let copy =[...Title];
          copy[0]='a';
          copy[1]='b';
          copy[2]='c';

        }}>NONE</button>
        {/* <div className="list">
          <h4>{Title[0]}<span onClick={()=>{setlike(like+1)}}> 👍</span> {like}</h4>
          <p>Sep.14 2023</p>
      </div>
      <div className="list">
          <h4>{Title[1]}</h4>
          <p>Sep.14 2023</p>
      </div>
      <div className="list">
          <h4 onClick={()=>{setModal(!modal)}}>{Title[2]}</h4>
          <p>Sep.14 2023</p>
      </div> */}
     {
  Title.map(function(a, i){
    return (
      <div className="list" key={i}>
        <h4 onClick={() => {
          setModal(!modal);
          seTTitle(i); // 클릭한 제목의 인덱스를 저장.
        }}>
          {Title[i]}
          <span onClick={(e) => {e.stopPropagation(); 
          let copy =[...like];
          copy[i] = copy[i]+1;
          setlike(copy)
          }}>👍</span>{like[i]}<button onClick={()=>{
            let copy = [...Title];
            copy.splice(i,1);
            setTitle(copy);   


          }}>Delete</button>
        </h4>
        <p>Sep.14 2023</p>
      </div>
    )
  })
}

       <input onChange={(e)=>{setinput(e.target.value);
        console.log(input)
      }}></input><button onClick={()=>{
        let copy =[...Title];
        copy.unshift(input);
        setTitle(copy)

        let copylike =[...like];
        copylike.unshift(0);
        setlike(copylike);
       
      }}>Add</button>


        {
         modal == true? <Modal setTitle={setTitle} Title={Title} title={title}/> : null
        }
    
    </div>     

  );
}

/*
let Modal = ()=>{
  return (
    <div className="modal">
    <h4>Title</h4>
    <p>Date</p>
    <p>Detail</p>  
    </div>
  )

}
// 아래랑 똑같아. 만드는 방법만달라.
*/

function Modal(props){
  return(
    <div className="modal" style={{background:'orange'}}>
    <h4>{props.Title[props.title]}</h4>
    <p>Date</p>
    <p>Detail</p>  
    <button>TitleC</button>
    </div>
  )
}


  

export default App;
