import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();

    const { username, password } = body;

    if (
        username !== "admin" ||
        password !== "1234"
    ) {
        return NextResponse.json(
            {
                error: "Invalid username or password",
            },
            {
                status: 401,
            }
        );
    }

    const response = NextResponse.json({
        message: "Login successful",
    });

    response.cookies.set(
        "auth_token",
        "logged_in",
        {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            path: "/",
        }
    );

    return response;
}