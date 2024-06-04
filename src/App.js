
import { useState } from 'react';
import './App.css';

function App() {
  // mock data
  const nqn_listTasks = [
    { nqn_taskId:2210900048, nqn_taskName:"Nguyen Quang Nam", nqn_level:"Small" },
    { nqn_taskId:1, nqn_taskName:"Hoc lap trinh frontend", nqn_level:"Small"},
    { nqn_taskId:2, nqn_taskName:"Hoc lap trinh reactjs", nqn_level:"Small" },
    { nqn_taskId:3, nqn_taskName:"Lap trinh voi Frontend - Reactjs", nqn_level:"High"},
    { nqn_taskId:4, nqn_taskName:"Lap trinh Fullstack (PHP, Java, Netcore)", nqn_level:"Small"},
  ];
  // su dung ham useState de luu tru trang thai du lieu
  const [nqnListTasks, setNqnListTasks] = useState(nqn_listTasks);  
  //tao state lieu cho form (add, edit)
  const nqnTasksObj = {
    // doi tuoong task
      nqn_taskId:0,
      nqn_taskName:"NTU",
      nqn_Level:"smal",
  };
  // tao state
  const [nqnTask, setNqnTask] = useState(nqnTasksObj);
const [nqnIsAddOrEdit, setNqnIsAddOrEdit] = useState(true); // mac dinh ban dau
  // nhan du lieu khi sua
  const nqnHandleEdit = (param)=>{
   console.log("App - Edit:", param) ;
   // cap nhat lai nqnatask
   setNqnTask(param);
   // cap naht trang thai form suaa
   setNqnIsAddOrEdit(false);
  };
  const nqnHandleSubmit = (nqnParam)=>{
    console.log("App:",nqnParam);
    if(nqnIsAddOrEdit==true){
      setNqnListTasks((prew)=> {
        return [...prew, nqnParam];
      });
    } else {
      for (let i = 0; i < array.length; i++){
        if(nqnListTasks[i].nqn_taskId==nqnParam.nqn_taskId){
          nqnListTasks[i] = nqnParam;
          break;
        }
      }
    }
    setNqnListTasks(prev=>{
      return[
        ...prev,
        nqnParam
      ]
    });
    
  };
// ham xoa 
const nqnHandleDelete = (param)=>{
  let nqnResult = nqnListTasks.fillter(x=>x.nqn_taskId != param.nqn_taskId);
  setNqnListTasks(nqnResult);
}
  return (
    <div className="container border">
      <h1>Nguyen Quang Nam - K22CNT2</h1>
      <hr/>
      <div>
        {/* danh sach list task */}
        <NqnListTask renderNqnListTasks = {nqnListTasks}
                      onNqntaskEdit = {nqnHandleEdit}
                      onNqnTaskDelete = {nqnHandleDelete}
        />
      </div>
      <div>
        <NqnTaskAddOrEdit
        renderNqnTask = {nqnTask}
        nqnOnSubmit={nqnHandleSubmit} />
      </div>
    </div>
  );
}

export default App;
