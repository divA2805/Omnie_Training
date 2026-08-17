"use client";

import {
    Box,
    Button,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

import { useParams, useRouter } from "next/navigation";

import { useUsers } from "./UserContext";

export default function UserDetails() {
    const params = useParams<{ id: string }>();
    const router = useRouter();

    const { users } = useUsers();

    const user = users.find(
        (item) => item.id === Number(params.id)
    );

    if (!user) {
        return (
            <Box sx={{ p: 4 }}>
                <Typography variant="h5">
                    User not found
                </Typography>

                <Button
                    sx={{ mt: 2 }}
                    variant="contained"
                    onClick={() =>
                        router.push("/Home")
                    }
                >
                    Back to Users
                </Button>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 4 }}>
            <Typography
                variant="h4"
                sx={{ mb: 3 }}
            >
                User Details
            </Typography>

            <Paper sx={{ p: 4, maxWidth: 900 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <TextField
                        label="ID"
                        value={user.id}
                        disabled
                        fullWidth
                    />

                    <TextField
                        label="Name"
                        value={user.name}
                        disabled
                        fullWidth
                    />

                    <TextField
                        label="Username"
                        value={user.username}
                        disabled
                        fullWidth
                    />

                    <TextField
                        label="Email"
                        value={user.email}
                        disabled
                        fullWidth
                    />

                    <TextField
                        label="Phone"
                        value={user.phone}
                        disabled
                        fullWidth
                    />

                    <TextField
                        label="Website"
                        value={user.website}
                        disabled
                        fullWidth
                    />

                    <Typography
                        variant="h6"
                        sx={{ mt: 2 }}
                    >
                        Address
                    </Typography>

                    <TextField
                        label="Street"
                        value={user.address.street}
                        disabled
                        fullWidth
                    />

                    <TextField
                        label="Suite"
                        value={user.address.suite}
                        disabled
                        fullWidth
                    />

                    <TextField
                        label="City"
                        value={user.address.city}
                        disabled
                        fullWidth
                    />

                    <TextField
                        label="Zipcode"
                        value={user.address.zipcode}
                        disabled
                        fullWidth
                    />

                    <Typography
                        variant="h6"
                        sx={{ mt: 2 }}
                    >
                        Company
                    </Typography>

                    <TextField
                        label="Company"
                        value={user.company.name}
                        disabled
                        fullWidth
                    />

                    <TextField
                        label="Catch Phrase"
                        value={
                            user.company.catchPhrase
                        }
                        disabled
                        fullWidth
                    />

                    <TextField
                        label="Business"
                        value={user.company.bs}
                        disabled
                        fullWidth
                    />

                    <Button
                        variant="contained"
                        sx={{ mt: 2 }}
                        onClick={() =>
                            router.push("/Home")
                        }
                    >
                        Back to Users
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}