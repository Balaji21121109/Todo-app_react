// import React, { useState } from 'react'


// const Todo=()=>{

// const [myTask, setTask]=useState()
// const Some=(event)=>{
//  setTask(event.target.value)

// }
//     return(<>
//     <h1>hello</h1>
//     Enter the task:<input type="text" onChange={Some}/>
//     <button>enter</button>
//     <br/>
//     {myTask}

//     </>)
// }
// export default Todo


import React, { useState } from 'react'




const App = () => {
    const [myData, setData] = useState()
    const [Elltask, setTask] = useState([])

    const Some = (event) => {
        setData(event.target.value)
        

    }
    const Alltask = () => {
        setTask([...Elltask, myData])

        ///Elltask store old data
        //mydata store the new data
    }
    return (<>
        <div>
            <h1>Todo App</h1>
            Enter product name:<input type="text" onChange={Some} />
            <button onClick={Alltask}>Enter</button>
            <div>{
               //map is used to store the data
               //in the map function we have to use function its compulsary
               Elltask.map(function(data){
                     return <h1>{data}</h1>
               })

            }
            </div>
        </div>
    </>)
}
export default App