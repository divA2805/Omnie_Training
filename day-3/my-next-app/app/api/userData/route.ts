// // import { NextResponse } from "next/server";
// // import axios from "axios";

// // type User = {
// //     id: number;
// //     username: string;
// // };

// // export async function GET() {
// //     try {
// //         const response = await axios.get<User[]>(
// //             "https://jsonplaceholder.typicode.com/users"
// //         );

// //         return NextResponse.json(response.data);

// //     } catch (error) {
// //         console.error("Error fetching users:", error);

// //         return NextResponse.json(
// //             { error: "Failed to fetch users" },
// //             { status: 500 }
// //         );
// //     }
// // }


// //import { NextResponse } from "next/server";
// import axios from "axios";

// type User = {
//     id: number;
//     username: string;
// };

// export async function GET() {
//     try {
//         const response = await axios.get<User[]>(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         return Response.json(response.data);

//     } catch (error) {
//         console.error("Error fetching users:", error);

//         return Response.json(
//             { error: "Failed to fetch users" },
//             { status: 500 }
//         );
//     }
// }


import axios from "axios";

type User = {
    id: number;
    username: string;
    name?: string;  
    email?: string;
};

const EXTERNAL_API = "https://jsonplaceholder.typicode.com/users";

export async function GET() {
    try {
        const response = await axios.get<User[]>(EXTERNAL_API);
        return Response.json(response.data);
    } catch (error) {
        console.error("Error fetching users:", error);
        return Response.json(
            { error: "Failed to fetch users" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const response = await axios.post<User>(EXTERNAL_API, body);
        return Response.json(response.data);
    } catch (error) {
        console.error("Error adding user:", error);
        return Response.json(
            { error: "Failed to add user" },
            { status: 500 }
        );
    }
}

export async function PUT(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        
        const body = await request.json();

        if (!id) {
            return Response.json({ error: "User ID is required" }, { status: 400 });
        }

        const response = await axios.put<User>(`${EXTERNAL_API}/${id}`, body);
        return Response.json(response.data);
    } catch (error) {
        console.error("Error updating user:", error);
        return Response.json(
            { error: "Failed to update user" },
            { status: 500 }
        );
    }
}
export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return Response.json({ error: "User ID is required" }, { status: 400 });
        }

        await axios.delete(`${EXTERNAL_API}/${id}`);
        return Response.json({ success: true });
    } catch (error) {
        console.error("Error deleting user:", error);
        return Response.json(
            { error: "Failed to delete user" },
            { status: 500 }
        );
    }
}