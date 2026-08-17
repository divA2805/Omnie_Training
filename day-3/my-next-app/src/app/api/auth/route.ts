import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest
) {
    const token =
        request.cookies.get("auth_token")?.value;

    if (token !== "logged_in") {
        return NextResponse.json(
            {
                authenticated: false,
            },
            {
                status: 401,
            }
        );
    }

    return NextResponse.json({
        authenticated: true,
    });
}