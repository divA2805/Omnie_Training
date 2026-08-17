import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};

export async function GET(
    request: NextRequest
) {
    const token =
        request.cookies.get("auth_token")?.value;

    if (token !== "logged_in") {
        return NextResponse.json(
            {
                error: "Unauthorized",
            },
            {
                status: 401,
            }
        );
    }

    try {
        const response = await axios.get<User[]>(
            "https://jsonplaceholder.typicode.com/users"
        );

        return NextResponse.json(response.data);
    } catch (error) {
        console.error(
            "Error fetching users:",
            error
        );

        return NextResponse.json(
            {
                error: "Failed to fetch users",
            },
            {
                status: 500,
            }
        );
    }
}