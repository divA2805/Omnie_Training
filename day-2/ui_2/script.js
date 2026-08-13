async function getUrl() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    const users = data.map((user) => user.id+" "+user.name+" ");

    document.getElementById("name").innerText = users.join("\n");
}

getUrl();z