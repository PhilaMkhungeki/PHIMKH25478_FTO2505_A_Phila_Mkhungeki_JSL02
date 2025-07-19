/* task 1 */
const task1 = document.getElementById("task1");

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

});


/* task 2 */
const task2 = document.getElementById("task2");

task2.addEventListener("click", function() {
    let title2 = prompt("Enter task 2 title:");
    console.log(title2);
    let description2 = prompt("Write the task description:");
    console.log(description2);
    let status = prompt("Enter status:");
    console.log(status.toLowerCase());
});

