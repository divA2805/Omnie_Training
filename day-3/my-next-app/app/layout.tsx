// import type { Metadata } from "next";
// import "./globals.css";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { UserProvider } from "./components/UserContext";

// export const metadata: Metadata = {
//     title: "Users",
//     description: "User management app",
// };

// export default function RootLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) {
//     return (
//         <html lang="en">
//             <body className="min-h-screen flex flex-col">

//                 <UserProvider>

//                     <Header />

//                     <main className="flex-1">
//                         {children}
//                     </main>

//                     <Footer />

//                 </UserProvider>

//             </body>
//         </html>
//     );
// }


import type { Metadata } from "next";
import "./globals.css";
import AppWrapper from "./components/AppWrapper";

export const metadata: Metadata = {
    title: "Users",
    description: "User management app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                <AppWrapper>
                    {children}
                </AppWrapper>
            </body>
        </html>
    );
}