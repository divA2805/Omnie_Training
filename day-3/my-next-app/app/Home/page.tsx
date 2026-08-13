import axios from 'axios';

type User = {
    id: number;
    username: string;
};

export default async function Page() {
    const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
    );

    return (
        <ul>
            {response.data.map((user) => (
                <li key={user.id}>
                    {user.id}  {user.username}
                </li>
            ))}
        </ul>
    );
}

