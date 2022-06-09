// 1. API URL
const url = "https://jsonplaceholder.typicode.com/users";

// 2. Fetch users from API
function fetchUsers(){
    // 2.1 Make use of the browser fetch API
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // 2.2 Passing user data to renderUsers function
        renderUsers(data);
    });
}

// 3 Render users to DOM
function renderUsers(usersData){
    const ul = document.getElementById("user-list-container");

    // 3.1 Render an li tag for each user
    usersData.forEach((user, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${index + 1}.</span>
        <span class="name">${user.name}</span>
        <span>-</span>
        <span class="username">${user.username}</span>
        `;

        // 3.2 Append current user li tag to ul
        ul.appendChild(li);
    });
}

// 4. Add a search function to the DOM
function searchUsersByName(){
    const input = document.getElementById("search");
    const ul = document.getElementById("user-list-container");
    const inputValue = input.value.toLowerCase();
    const usersList = ul.querySelectorAll("li"); //array of all li tags []

    // 4.1 Loop through all users and render the ones that match the search(Name)
    for(let index = 0; index < usersList.length; index++){
        const nameSpanTag = usersList[index].querySelector(".name");
        const nameSpanTagValue = nameSpanTag.innerText.toLowerCase();
        const isMatch = nameSpanTagValue.indexOf(inputValue) > -1;
        if(isMatch){
            // 4.2 If match, highlight with dark green
            usersList[index].style.backgroundColor = "#255B50";
        }
        else{
            // 4.3 If no match, highlight with red
            usersList[index].style.backgroundColor = "red";
        }
        if (inputValue === ""){
            usersList[index].style.backgroundColor = "#FFF";
        }
    }

}


// Calling fetchUsers function
fetchUsers();