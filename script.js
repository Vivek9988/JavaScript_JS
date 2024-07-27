async function getAllUsers() {
    try {
        const response = await fetch('https://http.dog/')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()