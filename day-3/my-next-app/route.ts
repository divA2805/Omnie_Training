import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    const body = await request.json();

    const { username, password } = body;

    // Demo credentials
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

    const cookieStore = await cookies();

    cookieStore.set(
        "auth_token",
        "logged_in",
        {
            httpOnly: true,
            secure:
                process.env.NODE_ENV ===
                "production",
            sameSite: "lax",
            path: "/",
        }
    );

    return NextResponse.json({
        message: "Login successful",
    });
}