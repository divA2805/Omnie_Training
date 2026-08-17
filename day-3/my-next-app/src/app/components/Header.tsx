// import Link from "next/link";
 
// export default function Header() {
//   return (
//     <header className="w-full border-b bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-4 text-center">
//         <Link href="/" className="text-xl font-semibold text-gray-900">
//           Omnie Solutions
//         </Link>
//       </div>
//     </header>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function Header() {
//     const router = useRouter();

//     async function handleLogout() {
//         await fetch("/api/logout", {
//             method: "POST",
//         });

//         router.push("/login");
//     }

//     return (
//         <header className="w-full border-b bg-white">
//             <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//                 {/* Logo / Website Name */}

//                 <Link
//                     href="/Home"
//                     className="text-xl font-semibold text-gray-900"
//                 >
//                     Omnie Solutions
//                 </Link>


//                 {/* Logout Button */}

//                 <button
//                     onClick={handleLogout}
//                     className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
//                 >
//                     Logout
//                 </button>

//             </div>
//         </header>
//     );
// }



"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function Header() {
    const router = useRouter();

    async function handleLogout() {
        try {
            await fetch("/api/logout", {
                method: "POST",
            });

            router.push("/login");
            router.refresh();
        } catch (error) {
            console.error(
                "Logout failed:",
                error
            );
        }
    }

    return (
        <header className="w-full border-b bg-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link
                    href="/Home"
                    className="text-xl font-semibold text-gray-900"
                >
                    Omnie Solutions
                </Link>

                <Button
                    variant="contained"
                    color="error"
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </div>
        </header>
    );
}