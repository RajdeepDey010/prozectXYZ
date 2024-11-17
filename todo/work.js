const taskbox = document.getElementById('todobox');
const addbtn = document.getElementById('addbtn');

let tasks = []//lets keep each task in form of object inide this array

addbtn.addEventListener('click',()=>{
    let tsk = taskbox.value.trim();
    //now lets create an object of new task, each new task should hold details about id,task,complete as true/false
    const newTask = {
        id: Date().substring(16,24),
        task: tsk,
        complete: false
    }
    //lets push this mew task in the arrray
    tasks.push(newTask);
})

