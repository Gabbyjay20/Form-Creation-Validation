// Step 1: Define async function
async function fetchUserData() {
    // Step 2: Define API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data asynchronously
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 6: Create a <ul> element
        const userList = document.createElement('ul');

        // Step 7: Loop through users and append names
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 8: Append userList to container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 9: Handle fetch errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Step 10: Run when DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
