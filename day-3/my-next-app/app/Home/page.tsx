// import axios from 'axios';           //server side rendering

// type User = {
//     id: number;
//     username: string;
// };

// export default async function Page() {
//     const response = await axios.get<User[]>(
//         "https://jsonplaceholder.typicode.com/users"
//     );

//     return (
//         <ul>
//             {response.data.map((user) => (
//                 <li key={user.id}>
//                     {user.id}  {user.username}
//                 </li>
//             ))}
//         </ul>
//     );
// }


//cleint side rendering
// "use client";

// import axios from "axios";
// import { useEffect, useState } from "react";

// type User = {
//     id: number;
//     username: string;
// };

// export default function Page() {
//     const [users, setUsers] = useState<User[]>([]);

//     useEffect(() => {
//         axios
//             .get<User[]>("http://localhost:3000/api")
//             .then((response) => {
//                 setUsers(response.data);
//             });
//     }, []);

//     return (
//         <ul>
//             {users.map((user) => (
//                 <li key={user.id}>
//                     {user.id} {user.username}
//                 </li>
//             ))}
//         </ul>
//     );
// }


// import axios from 'axios';
// type User={
//     id: number;
//     username: string;
//     website: string;
//     address: Address;
// };
// type Address={
//     street: string;
// };
// export default async function Page(){
//     const response=await axios.get<User[]>("http://localhost:3000/api");
//     return (
//         <ul>
//             {response.data.map((user) => (
//                 <li key={user.id}>
//                     {user.id} {user.username} {user.address.street}
//                 </li>
//             ))}
//         </ul>
//     );
// }


// "use client";

// import axios from "axios";
// import { useEffect, useState } from "react";

// type User = {
//     id: number;
//     username: string;
// };

// export default function Page() {

//     const [users, setUsers] = useState<User[]>([]);

//     const [deleteUsername, setDeleteUsername] = useState("");

//     const [newId, setNewId] = useState("");

//     const [newUsername, setNewUsername] = useState("");

//     useEffect(() => {
//         async function getUsers() {
//             try {
//                 const response = await axios.get<User[]>(
//                     "/api/userData"
//                 );

//                 setUsers(response.data);

//             } catch (error) {
//                 console.error("Error fetching users:", error);
//             }
//         }

//         getUsers();
//     }, []);

//     function deleteUser() {

//         setUsers(
//             users.filter(
//                 (user) => user.username !== deleteUsername
//             )
//         );

//         setDeleteUsername("");
//     }

//     function addUser() {

//         const newUser: User = {
//             id: Number(newId),
//             username: newUsername
//         };

//         setUsers([...users, newUser]);

//         setNewId("");
//         setNewUsername("");
//     }


//     return (
//         <main>

//             <h1>Users</h1>
//             <h2>Add User</h2>

//             <input
//                 type="number"
//                 placeholder="Enter ID"
//                 value={newId}
//                 onChange={(e) => setNewId(e.target.value)}
//             />

//             <input
//                 type="text"
//                 placeholder="Enter username"
//                 value={newUsername}
//                 onChange={(e) => setNewUsername(e.target.value)}

//             />

//             <button onClick={addUser}>
//                 Add User
//             </button>
//             <h2>Delete User</h2>

//             <input
//                 type="text"
//                 placeholder="Enter username"
//                 value={deleteUsername}
//                 onChange={(e) => setDeleteUsername(e.target.value)}
//             />

//             <button onClick={deleteUser}>
//                 Delete User
//             </button>


//             {/* DISPLAY USERS */}

//             <h2>User List</h2>
//             <hr/>

//             <ul>
//                 {users.map((user) => (
//                     <li key={user.id}>
//                         {user.id} - {user.username}
//                     </li>
//                 ))}


//             </ul>


//         </main>
//     );
// }



// "use client";

// import axios from "axios";
// import { useEffect, useState } from "react";

// type User = {
//     id: number;
//     username: string;
// };

// export default function Page() {

//     const [users, setUsers] = useState<User[]>([]);

//     const [newId, setNewId] = useState("");
//     const [newUsername, setNewUsername] = useState("");

//     useEffect(() => {
//         async function getUsers() {
//             try {
//                 const response = await axios.get<User[]>(
//                     "/api/userData"
//                 );

//                 setUsers(response.data);

//             } catch (error) {
//                 console.error("Error fetching users:", error);
//             }
//         }

//         getUsers();
//     }, []);

//     function addUser() {

//         const newUser: User = {
//             id: Number(newId),
//             username: newUsername
//         };

//         setUsers([...users, newUser]);

//         // Clear inputs
//         setNewId("");
//         setNewUsername("");
//     }


//     // Delete user
//     function deleteUser(id: number) {

//         setUsers(
//             users.filter((user) => user.id !== id)
//         );
//     }


//     return (
//         <main style={{ padding: "20px" }}>

//             <h1>Users</h1>


//             {/* ADD USER */}

//             <h2>Add User</h2>

//             <div style={{ marginBottom: "30px" }}>

//                 <input
//                     type="number"
//                     placeholder="Enter ID"
//                     value={newId}
//                     onChange={(e) => setNewId(e.target.value)}
//                     style={{
//                         marginRight: "10px",
//                         padding: "8px"
//                     }}
//                 />

//                 <input
//                     type="text"
//                     placeholder="Enter username"
//                     value={newUsername}
//                     onChange={(e) => setNewUsername(e.target.value)}
//                     style={{
//                         marginRight: "10px",
//                         padding: "8px"
//                     }}
//                 />

//                 <button
//                     onClick={addUser}
//                     style={{
//                         padding: "8px 15px",
//                         cursor: "pointer"
//                     }}
//                 >
//                     Add User
//                 </button>

//             </div>


//             {/* USER LIST */}

//             <h2>User List</h2>

//             <div style={{ width: "600px" }}>

//                 {users.map((user) => (

//                     <div key={user.id}>

//                         <div
//                             style={{
//                                 display: "flex",
//                                 justifyContent: "space-between",
//                                 alignItems: "center",
//                                 padding: "12px 0"
//                             }}
//                         >

//                             <span>
//                                 {user.id} - {user.username}
//                             </span>

//                             <button
//                                 onClick={() => deleteUser(user.id)}
//                                 style={{
//                                     padding: "6px 12px",
//                                     cursor: "pointer"
//                                 }}
//                             >
//                                 Delete
//                             </button>

//                         </div>

//                         <hr />

//                     </div>

//                 ))}

//             </div>

//         </main>
//     );
// }


//latest edit button but in half screen

// "use client";

// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// export default function Home() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // 1. Read the active editing ID directly from the URL (?id=X)
//   const editId = searchParams.get("id");

//   const [users, setUsers] = useState<User[]>([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Form states specifically for editing
//   const [editName, setEditName] = useState("");
//   const [editEmail, setEditEmail] = useState("");

//   // 2. FIXED: Removed hardcoded localhost. Replaced with safe relative endpoint path.
//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const response = await axios.get<User[]>("/api/userData");
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Failed to load initial data stream:", error);
//       }
//     };
//     getUsers();
//   }, []);

//   // 3. Automatically fill the edit inputs when an ID appears in the URL
//   useEffect(() => {
//     if (editId) {
//       const userToEdit = users.find((u) => u.id === Number(editId));
//       if (userToEdit) {
//         setEditName(userToEdit.name);
//         setEditEmail(userToEdit.email);
//       }
//     }
//   }, [editId, users]);

//   // Add User
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!name || !email) return;
//     try {
//       setLoading(true);
//       const response = await axios.post<User>("/api/userData", { name, email });
//       setUsers((prevUsers) => [...prevUsers, response.data]);
//       setName("");
//       setEmail("");
//     } catch (error) {
//       console.error("Error adding user:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete User
//   const handleDelete = async (id: number) => {
//     try {
//       // 4. FIXED: Changed to query parameters (/api?id=X) to match a single root route.ts file structure
//       await axios.delete(`/api/userData?id=${id}`);
//       setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

//   // Update User (Edit Submit)
//   const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!editId) return;
//     try {
//       setLoading(true);

//       // 5. FIXED: Changed to query parameters to match standard backend parsing pipelines securely
//       await axios.put(`/api/userData?id=${editId}`, { name: editName, email: editEmail });

//       // Update the local array directly in memory (zero re-fetch delay)
//       setUsers((prevUsers) =>
//         prevUsers.map((user) =>
//           user.id === Number(editId) ? { ...user, name: editName, email: editEmail } : user
//         )
//       );

//       // 6. FIXED: Drops parameters completely without triggering a component refresh cycle.
//       router.replace("?"); 
//     } catch (error) {
//       console.error("Error updating user:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main style={{ display: "flex", gap: "40px", padding: "20px" }}>

//       {/* VIEW PANEL 1: DASHBOARD & USER LIST */}
//       <div style={{ flex: 1 }}>
//         <h1>Users</h1>
//         <hr />

//         <h2>Add User</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="NAME" value={name} onChange={(e) => setName(e.target.value)} />
//           <input type="email" placeholder="EMAIL ID" value={email} onChange={(e) => setEmail(e.target.value)} />
//           <button type="submit" disabled={loading}>add user</button>
//         </form>

//         <hr />

//         <h2>User List</h2>
//         {users.map((user) => (
//           <div key={user.id} style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}>
//             <p>Name - {user.name}</p>
//             <p>Email - {user.email}</p>

//             {/* Triggers conditional render without changing pages or files */}
//             <button type="button" onClick={() => router.push(`?id=${user.id}`)}>
//               Edit
//             </button>

//             <button type="button" onClick={() => handleDelete(user.id)} style={{ marginLeft: "10px" }}>
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* VIEW PANEL 2: CONDITIONAL EDIT PANEL */}
//       {editId && (
//         <div style={{ flex: 1, borderLeft: "2px solid #ccc", paddingLeft: "20px" }}>
//           <h2>Edit User (ID: {editId})</h2>
//           <hr />
//           <form onSubmit={handleUpdate}>
//             <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="EDIT NAME" />
//             <br /><br />
//             <input type="email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} placeholder="EDIT EMAIL ID" />
//             <br /><br />
//             <button type="submit" disabled={loading}>Update User</button>
//             <button type="button" onClick={() => router.replace("?")} style={{ marginLeft: "10px" }}>Cancel</button>
//           </form>
//         </div>
//       )}

//     </main>
//   );
// }


// "use client";

// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// export default function Home() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const editId = searchParams.get("id");

//   const [users, setUsers] = useState<User[]>([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   const [editName, setEditName] = useState("");
//   const [editEmail, setEditEmail] = useState("");

//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const response = await axios.get<User[]>("/api/userData");
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Failed to load initial data:", error);
//       }
//     };
//     getUsers();
//   }, []);

//   useEffect(() => {
//     if (editId) {
//       const userToEdit = users.find((u) => u.id === Number(editId));
//       if (userToEdit) {
//         setEditName(userToEdit.name);
//         setEditEmail(userToEdit.email);
//       }
//     }
//   }, [editId, users]);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!name || !email) return;
//     try {
//       setLoading(true);
//       const response = await axios.post<User>("/api/userData", { name, email });
//       setUsers((prevUsers) => [...prevUsers, response.data]);
//       setName("");
//       setEmail("");
//     } catch (error) {
//       console.error("Error adding user:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     try {
//       await axios.delete(`/api/userData?id=${id}`);
//       setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
//     } catch (error) {
//       console.error("Error deleting user:", error);
//     }
//   };

//   // Update User (Edit Submit)
//   const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!editId) return;
//     try {
//       setLoading(true);
//       await axios.put(`/api/userData?id=${editId}`, { name: editName, email: editEmail });

//       // Update the local array directly in memory (zero re-fetch delay)
//       setUsers((prevUsers) =>
//         prevUsers.map((user) =>
//           user.id === Number(editId) ? { ...user, name: editName, email: editEmail } : user
//         )
//       );

//       // Clears URL query parameter to toggle back to the main list
//       router.replace("?"); 
//     } catch (error) {
//       console.error("Error updating user:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (editId) {
//     return (
//       <main style={{ padding: "20px" }}>
//         <h1>Edit User (ID: {editId})</h1>
//         <hr />

//         <form onSubmit={handleUpdate}>
//           <p>Update Name:</p>
//           <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="EDIT NAME" />

//           <p>Update Email:</p>
//           <input type="email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} placeholder="EDIT EMAIL ID" />

//           <br /><br />
//           <button type="submit" disabled={loading}>
//             {loading ? "Updating..." : "Update User"}
//           </button>

//           <button type="button" onClick={() => router.replace("?")} style={{ marginLeft: "10px" }}>
//             Cancel
//           </button>
//         </form>
//       </main>
//     );
//   }

//   return (
//     <main style={{ padding: "20px" }}>
//       <h1>Users</h1>
//       <hr />

//       <h2>Add User</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="NAME" value={name} onChange={(e) => setName(e.target.value)} />
//         <input type="email" placeholder="EMAIL ID" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <button type="submit" disabled={loading}>add user</button>
//       </form>

//       <hr />

//       <h2>User List</h2>
//       {users.map((user) => (
//         <div key={user.id} style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}>
//           <p>Name - {user.name}</p>
//           <p>Email - {user.email}</p>

//           {/* Clicking this switches to the edit view instantly with NO state loss */}
//           <button type="button" onClick={() => router.push(`?id=${user.id}`)}>
//             Edit
//           </button>

//           <button type="button" onClick={() => handleDelete(user.id)} style={{ marginLeft: "10px" }}>
//             Delete
//           </button>
//         </div>
//       ))}
//     </main>
//   );
// }



"use client";

import {
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    TextField,
    Typography,
} from "@mui/material";

import Link from "next/link";
import { useMemo, useState } from "react";
import { User, useUsers } from "../components/UserContext";
import { Style } from "util";

type SortField = "id" | "username";
type SortOrder = "asc" | "desc";

export default function HomePage() {
    const {
        users,
        loading,
        addUser,
        deleteUser,
    } = useUsers();

    const [search, setSearch] = useState("");

    const [sortField, setSortField] =
        useState<SortField>("id");

    const [sortOrder, setSortOrder] =
        useState<SortOrder>("asc");

    const [openAddDialog, setOpenAddDialog] =
        useState(false);

    const [newId, setNewId] = useState("");
    const [newUsername, setNewUsername] = useState("");


    function handleSort(field: SortField) {
        if (sortField === field) {
            setSortOrder(
                sortOrder === "asc"
                    ? "desc"
                    : "asc"
            );
        } else {
            setSortField(field);
            setSortOrder("asc");
        }
    }


    const filteredAndSortedUsers = useMemo(() => {
        const filtered = users.filter((user) => {
            const searchValue = search.toLowerCase();

            return (
                user.id
                    .toString()
                    .includes(searchValue) ||
                user.username
                    .toLowerCase()
                    .includes(searchValue)
            );
        });

        return [...filtered].sort((a, b) => {
            let result = 0;

            if (sortField === "id") {
                result = a.id - b.id;
            }

            if (sortField === "username") {
                result = a.username.localeCompare(
                    b.username
                );
            }

            return sortOrder === "asc"
                ? result
                : -result;
        });
    }, [
        users,
        search,
        sortField,
        sortOrder,
    ]);



    function handleAddUser() {
        if (!newId.trim() || !newUsername.trim()) {
            return;
        }

        const newUser: User = {
            id: Number(newId),
            name: "",
            username: newUsername,
            email: "",

            address: {
                street: "",
                suite: "",
                city: "",
                zipcode: "",

                geo: {
                    lat: "",
                    lng: "",
                },
            },

            phone: "",
            website: "",

            company: {
                name: "",
                catchPhrase: "",
                bs: "",
            },
        };

        addUser(newUser);

        setNewId("");
        setNewUsername("");

        setOpenAddDialog(false);
    }



    if (loading) {
        return (
            <main
                style={{
                    padding: "24px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                    }}
                >
                    <CircularProgress size={24} />

                    <Typography>
                        Loading users...
                    </Typography>
                </div>
            </main>
        );
    }


    return (
        <main
            style={{
                padding: "24px",
                width: "100%",
                boxSizing: "border-box",
            }}
        >
            <Typography
                variant="h4"
                sx={{ mb: 3 }}
            >
                Users Directory
            </Typography>

            {/* SEARCH + ADD BUTTON */}

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "24px",
                }}
            >
                <TextField
                    label="Search ID or Username"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    size="small"
                    sx={{
                        width: "300px",
                        backgroundColor: "White",

                        "& .MuiInputBase-input": {
                            color: "black",
                        },

                        "& .MuiInputLabel-root": {
                            color: "black",
                        },

                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "#999",
                            },

                            "&:hover fieldset": {
                                borderColor: "#555",
                            },

                            "&.Mui-focused fieldset": {
                                borderColor: "#1976d2",
                            },
                        },
                    }}
                />

                <Button
                    variant="contained"
                    onClick={() =>
                        setOpenAddDialog(true)
                    }
                >
                    Add User
                </Button>
            </div>

            {/* USER TABLE */}

            <TableContainer
                component={Paper}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel
                                    active={
                                        sortField === "id"
                                    }
                                    direction={
                                        sortField === "id"
                                            ? sortOrder
                                            : "asc"
                                    }
                                    onClick={() =>
                                        handleSort("id")
                                    }
                                >
                                    ID
                                </TableSortLabel>
                            </TableCell>

                            <TableCell>
                                <TableSortLabel
                                    active={
                                        sortField ===
                                        "username"
                                    }
                                    direction={
                                        sortField ===
                                            "username"
                                            ? sortOrder
                                            : "asc"
                                    }
                                    onClick={() =>
                                        handleSort(
                                            "username"
                                        )
                                    }
                                >
                                    Username
                                </TableSortLabel>
                            </TableCell>

                            <TableCell>
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {filteredAndSortedUsers.map(
                            (user) => (
                                <TableRow
                                    key={user.id}
                                    hover
                                >
                                    {/* ID */}

                                    <TableCell>
                                        <Link
                                            href={`/Home/${user.id}`}
                                            style={{
                                                textDecoration:
                                                    "none",
                                            }}
                                        >
                                            {user.id}
                                        </Link>
                                    </TableCell>

                                    {/* USERNAME */}

                                    <TableCell>
                                        <Link
                                            href={`/Home/${user.id}`}
                                            style={{
                                                textDecoration:
                                                    "none",
                                            }}
                                        >
                                            {user.username}
                                        </Link>
                                    </TableCell>

                                    {/* ACTIONS */}

                                    <TableCell>
                                        <div
                                            style={{
                                                display:
                                                    "flex",
                                                gap: "8px",
                                            }}
                                        >
                                            <Button
                                                component={
                                                    Link
                                                }
                                                href={`/Home/${user.id}`}
                                                variant="outlined"
                                                size="small"
                                            >
                                                Edit
                                            </Button>

                                            <Button
                                                variant="contained"
                                                color="error"
                                                size="small"
                                                onClick={() =>
                                                    deleteUser(
                                                        user.id
                                                    )
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* ADD USER DIALOG */}

            <Dialog
                open={openAddDialog}
                onClose={() =>
                    setOpenAddDialog(false)
                }
            >
                <DialogTitle>
                    Add User
                </DialogTitle>

                <DialogContent>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            paddingTop: "8px",
                            minWidth: "350px",
                        }}
                    >
                        <TextField
                            label="ID"
                            type="number"
                            value={newId}
                            onChange={(e) =>
                                setNewId(
                                    e.target.value
                                )
                            }
                            fullWidth
                        />

                        <TextField
                            label="Username"
                            value={newUsername}
                            onChange={(e) =>
                                setNewUsername(
                                    e.target.value
                                )
                            }
                            fullWidth
                        />
                    </div>
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={() =>
                            setOpenAddDialog(false)
                        }
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="contained"
                        onClick={handleAddUser}
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </main>
    );
}