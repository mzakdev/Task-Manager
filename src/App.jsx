  import { Plus,Trash2 } from 'lucide-react';
  import { useState } from 'react';


  function App(){
    const [tasks , setTasks] = useState([
      {
        id : 1,
        title : "Learn React Foundamentals",
        description : "Practice Components with JSX",
        completed : false,
      },
      {
        id : 2,
        title : "Mathematical Analysis",
        description : "Practicing on multivariables integrals",
        completed : false,
      }
    ]);
    const [newTasks , setNewTasks] = useState("");
    const [filter , setFilter ] = useState("All");
    return(
      <>
      <div className="bg-black min-h-screen flex items-center justify-center flex-col gap-4">  
        <div className="md:w-[900px] sm:w-[450px] flex flex-col gap-4">
          <div className="border-b border-gray-500 pb-4">
            <h2 className="font-normal text-[var(--color-pistachio)] font-Inter gap-2 flex items-center">
              <Plus size={18}/>
              My Workspace
            </h2>
            <h1 className="text-xl font-bold text-[var(--color-ivory)] font-Inter">
              Task Manager
            </h1>
            <p className="font-normal font-Inter text-gray-500">
              Organize your works and stay focused
            </p>
            <p className="font-normal font-Inter text-[var(--color-pistachio)]">
              Inter .Modern .Minimal
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className='font-Inter'>
              <h1 className='text-white font-bold text-xl'>
                My Tasks
              </h1>
              <p className='text-gray-500'>
                Keep track of your work
              </p>
            </div>
            <button 
              className="font-Inter p-2 rounded bg-[var(--color-pistachio)] text-black font-Inter font-normal flex items-center gap-2"
              onClick={()=>{
                const title = newTasks.trim();
                if(!title) return ;
                setTasks((previousTasks) => [
                  ...previousTasks , 
                  {
                    id : Date.now() ,
                    title : title ,
                    description : 'No Description Yet' , 
                    completed : false ,
                  }
                ]
                )
                setNewTasks("");  
              }
              }
            >
              <Plus size={18}/>
              Add task
              </button>
          </div>
          <div className="flex justify-end gap-4">
            <button className='border cursor-pointer border-[var(--color-pistachio)] text-[var(--color-pistachio)] rounded-xl p-2' onClick={()=> setFilter("all")}>
              All
            </button>
            <button className='border cursor-pointer border-[var(--color-pistachio)] text-[var(--color-pistachio)] rounded-xl p-2' onClick={()=> setFilter("active")}>
              Active
            </button>
            <button className='border cursor-pointer border-[var(--color-pistachio)] text-[var(--color-pistachio)] rounded-xl p-2' onClick={()=> setFilter("completed")}>
              Completed
            </button>
          </div>
          <input 
            type="text" 
            placeholder='Enter your task here'
            value={newTasks}
            onChange={(event) => setNewTasks(event.target.value)}
            className='w-full rounded border border-gray-500 p-4 hover:border-[var(--color-pistachio)] focus:border-[var(--color-pistachio)] focus:outline-none text-white'
          />
          {tasks
          .filter((task) =>{
            if(filter === "completed"){
              return task.completed ;
            }
            else if(filter === "active"){
              return !task.completed;
            }
            return true;
          })
          .map((task) => (
            <div key={task.id}>
              <div className="flex items-center justify-between border border-gray-500 rounded-xl p-4">
                <div className="flex items-center justify-center gap-4">
                  <input 
                  type="checkbox" 
                  className="h-5 w-5 border border-gray-500 rounded cursor-pointer bg-black appearance-none checked:bg-[var(--color-pistachio)] checked:border-[var(--color-pistachio)]" 
                  checked={task.completed}
                  onChange={() =>
                    setTasks((previousTasks) => 
                      previousTasks.map((item)=>
                        item.id === task.id ? {...item , completed : !item.completed } : item
                      )
                    )
                  }
                  />
                  <div className='font-Inter'>
                    <h3 className={`text-white font-bold ${task.completed ? "line-through" : ""}`}>{task.title}</h3>
                    <p className='text-gray-500'>{task.description}</p>
                  </div>
                </div>
                <Trash2 
                  className='text-gray-500 hover:text-red-500 durati transition-colors hover:duration-300 cursor-pointer'
                  onClick={()=>
                    setTasks((previousTasks)=>
                      previousTasks.filter((item) => item.id !== task.id )
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
    )
  }

  export default App