// Array to store all tasks
let tasks = [];

/* task 1 */
const task1 = document.getElementById("task1");

//add an event listner to trigger the prompts when a task is clicked
task1.addEventListener("click", function() {
    let title1 = prompt("Enter task 1 title:");
    console.log(title1);
    let description1 = prompt("Write the task description:");
    console.log(description1);
    let status = prompt("Enter status:");
    
    // Keep prompting until the status is valid
    while (status.toLowerCase() !== "todo" && status.toLowerCase() !== "doing" && status.toLowerCase() !== "done") {
        status = prompt("Invalid status. Please enter 'todo', 'doing', or 'done':");
    }

    console.log("status:", status.toLowerCase()); //Convert all status inputs to lowercase

     // Store the task
    tasks.push({
        title: title1,
        status: status.toLowerCase()
    });

    checkTasks();
});


/* task 2 */
const task2 = document.getElementById("task2");

task2.addEventListener("click", function() { 
    let title2 = prompt("Enter task 2 title:");
    console.log(title2);
    let description2 = prompt("Write the task description:");
    console.log(description2);
    let status = prompt("Enter status:");

    // Keep prompting until the status is valid
    while (status.toLowerCase() !== "todo" && status.toLowerCase() !== "doing" && status.toLowerCase() !== "done") {
        status = prompt("Invalid status. Please enter 'todo', 'doing', or 'done':");
    }

    console.log("status:", status.toLowerCase()); //Convert all status inputs to lowercase

     // Store the task
    tasks.push({
        title: title2,
        status: status.toLowerCase()
    });

    checkTasks();
});

// Function to check if any task is "done"
function checkTasks() {
    // Only check after both tasks are recorded
    if (tasks.length < 2) return;

    const doneTasks = tasks.filter(task => task.status === "done");

    if (doneTasks.length === 0) {
        console.log("No tasks completed, let's get to work!");
    } else {
        console.log("✅ Completed tasks:");
        doneTasks.forEach(task => {
            console.log(`Title: ${task.title}, Status: ${task.status}`);
        });
    }
}