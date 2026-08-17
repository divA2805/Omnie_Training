"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Header from "./Header";
import Footer from "./Footer";
import { UserProvider } from "./UserContext";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();

    const [checkingAuth, setCheckingAuth] = useState(true);
    const [authenticated, setAuthenticated] =
        useState(false);

    const isLoginPage = pathname === "/login";

    useEffect(() => {
        async function checkAuth() {
            if (isLoginPage) {
                setCheckingAuth(false);
                return;
            }

            try {
                const response = await fetch(
                    "/api/auth",
                    {
                        cache: "no-store",
                    }
                );

                if (!response.ok) {
                    router.replace("/login");
                    return;
                }

                setAuthenticated(true);
            } catch (error) {
                console.error(
                    "Authentication check failed:",
                    error
                );

                router.replace("/login");
            } finally {
                setCheckingAuth(false);
            }
        }

        checkAuth();
    }, [isLoginPage, router]);

    // Login page doesn't need Header,
    // Footer or UserProvider.
    if (isLoginPage) {
        return <>{children}</>;
    }

    if (checkingAuth) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                Checking authentication...
            </main>
        );
    }

    if (!authenticated) {
        return null;
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