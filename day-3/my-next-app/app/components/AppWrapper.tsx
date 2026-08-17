"use client";

import { usePathname } from "next/navigation";

import Header from "./Header";
import Footer from "./Footer";
import { UserProvider } from "./UserContext";

export default function AppWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const isLoginPage = pathname === "/login";

    // Login page does not need UserProvider
    if (isLoginPage) {
        return (
            <main className="min-h-screen">
                {children}
            </main>
        );
    }

    return (
        <UserProvider>
            <Header />

            <main className="flex-1">
                {children}
            </main>

            <Footer />
        </UserProvider>
    );
}