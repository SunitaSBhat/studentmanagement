function addStudent(){
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    if (name.trim() === '' || email.trim() === '') {
        alert("Please enter both name and email.");
        return;
    }

    var table = document.getElementById("Table");
    var newRow = table.insertRow();

    // Insert cells into the new row
    var idCell = newRow.insertCell(0);
    var nameCell = newRow.insertCell(1);
    var emailCell = newRow.insertCell(2);
    var actionsCell = newRow.insertCell(3);

    // Set cell values
    idCell.textContent = table.rows.length - 1; // Adjust for header row
    nameCell.textContent = name;
    var id=table.rows.length - 1;
    emailCell.textContent = email;
    actionsCell.innerHTML = '<button onclick="editStudent(this)" button style="background-color: rgb(60, 167, 197); margin-right:12px; width:50px; height:35px; border-radius:6px 6px; color: white;">Edit</button><button style="background-color: red; color:white; margin-right:12px; width:50px; height:35px; border-radius:6px 6px;" onclick="deleteStudent(id)">Delete</button>';


    // Clear input fields after adding a student
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}
function deleteStudent(id) {
    
    document.getElementById("Table").deleteRow(id); // Remove the row
}
function editStudent(button) {
    var row = button.parentNode.parentNode; // Get the parent row of the button

    // Extract the name and email from the row cells
    var nameCell = row.cells[1];
    var emailCell = row.cells[2];

    // Check if cells are undefined
    if (!nameCell || !emailCell) {
        console.error("Name or email cell not found.");
        return;
    }

    var name = nameCell.textContent;
    var email = emailCell.textContent;

    // Prompt the user to enter new name and email
    var newName = prompt("Enter new name", name);
    var newEmail = prompt("Enter new email", email);

    // If the user cancels, exit the function
    if (newName === null || newEmail === null) {
        return;
    }

    // Update the cell values with the new name and email
    nameCell.textContent = newName;
    emailCell.textContent = newEmail;
}
