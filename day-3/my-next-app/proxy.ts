import {
    NextRequest,
    NextResponse,
} from "next/server";

export function proxy(request: NextRequest) {

    const pathname = request.nextUrl.pathname;

    // Public login page
    if (pathname === "/login") {
        return NextResponse.next();
    }

    // Login and logout APIs are public
    if (
        pathname === "/api/login" ||
        pathname === "/api/logout"
    ) {
        return NextResponse.next();
    }

    const authToken =
        request.cookies.get("auth_token");

    // User is not logged in
    if (!authToken) {

        // API request
        if (pathname.startsWith("/api/")) {
            return NextResponse.json(
                {
                    error: "Unauthorized",
                },
                {
                    status: 401,
                }
            );
        }

        // Normal page request
        const loginUrl =
            new URL("/login", request.url);

        return NextResponse.redirect(
            loginUrl
        );
    }

    // User is logged in
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico).*)",
    ],
};