import React, { useEffect } from 'react'

export default function NqnTaskAddOrEdit(enderNqnTask, nqnOnSubmit) {
    // doi tuoong task
    //const nqnTaksObj = {
      //  nqn_taskId:0,
      //  nqn_taskName:"",
      //  nqn_Level:""
 //   }
    const [nqnTask, setNqnTask]= useState(renderNqnTask);
    useEffect(()=>{setNqnTask(renderNqnTask)},[renderNqnTask])
    // tao tieu de form
    const nqnTieuDe = renderNqnIsAddOrEdit==true?"Them moi task":"sua thong tin"
    // ham thay doi tren dieu khien
    const nqnHandlechange = (nqnEvent)=>{
        let name = nqnEvent.target.name;
        let value = nqnEvent.target.value;
        setNqnTask(prev =>{
            return{
                ...prev,
                [name]:value,
            }
        })
    }
    const nqnHandleSubmit = (nqnEvent)=>{
        nqnEvent.preventDefault();
        nqnOnSubmit()
    }
  return (
    <div>
        <h2>{nqnTieuDe}</h2>
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" 
                name='nqn_taskId' value={nqnTask.nqn_taskId} onChange={nqnHandlechange}
                className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <div>
                <label>Task ID</label>
                <input name='nqn_taskId' value={nqnTask.nqn_taskId} onChange={''} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" 
                name='nqn_taskName' value={nqnTask.nqn_taskName} onChange={nqnHandlechange}
                className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <div>
                <label>Task Name</label>
                <input name='nqn_taskName' value={nqnTask.nqn_taskName} onChange={''} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" 
                name='nqn_taskLevel' value={nqnTask.nqn_taskLevel} onChange={nqnHandlechange}
                className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <div>
                <label>Task Level</label>
                <select name='nqn_Level' value={nqnTask.nqn_Level} onChange={''}> 
                    <option value={'smail'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={nqnHandleSubmit}>Ghi lai</button>
        </form>
    </div>
  )
}
