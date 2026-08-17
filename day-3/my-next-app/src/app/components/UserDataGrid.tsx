"use client";

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";

import {DataGrid,GridColDef} from "@mui/x-data-grid";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import Link from "next/link";
import { useState } from "react";

import {
    User,
    useUsers,
} from "./UserContext";

export default function UserDataGrid() {
    const {
        users,
        loading,
        addUser,
        deleteUser,
    } = useUsers();

    const [openAddDialog, setOpenAddDialog] =
        useState(false);

    const [newId, setNewId] = useState("");
    const [newUsername, setNewUsername] =
        useState("");

    function handleAddUser() {
        if (!newId || !newUsername) {
            return;
        }

        const newUser: User = {
            id: Number(newId),
            name: newUsername,
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

    const columns: GridColDef<User>[] = [
        {
            field: "id",
            headerName: "ID",
            width: 100,
        },
        {
            field: "username",
            headerName: "Username",
            flex: 1,
            minWidth: 200,
        },
        {
            field: "actions",
            headerName: "Actions",
            width: 250,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        height: "100%",
                    }}
                >
                    <Button
                        component={Link}
                        href={`/Home/${params.row.id}`}
                        variant="outlined"
                        size="small"
                        title="View"
                    >
                        <VisibilityIcon fontSize="small" />
                    </Button>

                    <Button
                        component={Link}
                        href={`/Home/${params.row.id}/edit`}
                        variant="outlined"
                        size="small"
                        title="Edit"
                    >
                        <EditIcon fontSize="small" />
                    </Button>

                    <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() =>
                            deleteUser(
                                params.row.id
                            )
                        }
                    >
                        <DeleteIcon fontSize="small" />
                    </Button>
                </Box>
            ),
        },
    ];

    return (
        <Box sx={{ width: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                }}
            >
                <h1 className="text-3xl font-semibold">
                    Users Directory
                </h1>

                <Button
                    variant="contained"
                    onClick={() =>
                        setOpenAddDialog(true)
                    }
                >
                    Add User
                </Button>
            </Box>

            <Box
                sx={{
                    height: 600,
                    width: "100%",
                }}
            >
                <DataGrid
                    rows={users}
                    columns={columns}
                    loading={loading}
                    showToolbar
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[
                        5,
                        10,
                        25,
                    ]}
                    disableRowSelectionOnClick
                />
            </Box>

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
                    <TextField
                        label="ID"
                        type="number"
                        fullWidth
                        value={newId}
                        onChange={(event) =>
                            setNewId(
                                event.target.value
                            )
                        }
                        sx={{ mt: 1, mb: 2 }}
                    />

                    <TextField
                        label="Username"
                        fullWidth
                        value={newUsername}
                        onChange={(event) =>
                            setNewUsername(
                                event.target.value
                            )
                        }
                    />
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
        </Box>
    );
}