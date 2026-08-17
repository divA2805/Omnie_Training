"use client";

import { useEffect, useState } from "react";
import {
    Box,
    Button,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

import { useParams, useRouter } from "next/navigation";

import {
    User,
    useUsers,
} from "./UserContext";

export default function UserEditForm() {
    const params = useParams<{ id: string }>();
    const router = useRouter();

    const { users, updateUser } = useUsers();

    const [formData, setFormData] =
        useState<User | null>(null);

    const user = users.find(
        (item) => item.id === Number(params.id)
    );

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    if (!user || !formData) {
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

    function handleChange(
        field: keyof User,
        value: string
    ) {
        setFormData((previous) => {
            if (!previous) return previous;

            return {
                ...previous,
                [field]: value,
            };
        });
    }

    function handleAddressChange(
        field: keyof User["address"],
        value: string
    ) {
        setFormData((previous) => {
            if (!previous) return previous;

            return {
                ...previous,
                address: {
                    ...previous.address,
                    [field]: value,
                },
            };
        });
    }

    function handleGeoChange(
        field: "lat" | "lng",
        value: string
    ) {
        setFormData((previous) => {
            if (!previous) return previous;

            return {
                ...previous,
                address: {
                    ...previous.address,
                    geo: {
                        ...previous.address.geo,
                        [field]: value,
                    },
                },
            };
        });
    }

    function handleCompanyChange(
        field: keyof User["company"],
        value: string
    ) {
        setFormData((previous) => {
            if (!previous) return previous;

            return {
                ...previous,
                company: {
                    ...previous.company,
                    [field]: value,
                },
            };
        });
    }

    function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        if (!formData) {
            return;
        }

        updateUser(formData);

        router.push("/Home");
    }

    return (
        <Box sx={{ p: 4 }}>
            <Typography
                variant="h4"
                sx={{ mb: 3 }}
            >
                Edit User
            </Typography>

            <Paper
                sx={{
                    p: 4,
                    maxWidth: 900,
                }}
            >
                <form onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <TextField
                            label="ID"
                            value={formData.id}
                            disabled
                        />

                        <TextField
                            label="Name"
                            value={formData.name}
                            onChange={(event) =>
                                handleChange(
                                    "name",
                                    event.target.value
                                )
                            }
                        />

                        <TextField
                            label="Username"
                            value={
                                formData.username
                            }
                            onChange={(event) =>
                                handleChange(
                                    "username",
                                    event.target.value
                                )
                            }
                        />

                        <TextField
                            label="Email"
                            value={formData.email}
                            onChange={(event) =>
                                handleChange(
                                    "email",
                                    event.target.value
                                )
                            }
                        />

                        <TextField
                            label="Phone"
                            value={formData.phone}
                            onChange={(event) =>
                                handleChange(
                                    "phone",
                                    event.target.value
                                )
                            }
                        />

                        <TextField
                            label="Website"
                            value={formData.website}
                            onChange={(event) =>
                                handleChange(
                                    "website",
                                    event.target.value
                                )
                            }
                        />

                        <Typography
                            variant="h6"
                            sx={{ mt: 2 }}
                        >
                            Address
                        </Typography>

                        <TextField
                            label="Street"
                            value={
                                formData.address
                                    .street
                            }
                            onChange={(event) =>
                                handleAddressChange(
                                    "street",
                                    event.target.value
                                )
                            }
                        />

                        <TextField
                            label="Suite"
                            value={
                                formData.address.suite
                            }
                            onChange={(event) =>
                                handleAddressChange(
                                    "suite",
                                    event.target.value
                                )
                            }
                        />

                        <TextField
                            label="City"
                            value={
                                formData.address.city
                            }
                            onChange={(event) =>
                                handleAddressChange(
                                    "city",
                                    event.target.value
                                )
                            }
                        />

                        <TextField
                            label="Zipcode"
                            value={
                                formData.address
                                    .zipcode
                            }
                            onChange={(event) =>
                                handleAddressChange(
                                    "zipcode",
                                    event.target.value
                                )
                            }
                        />

                        <TextField
                            label="Latitude"
                            value={
                                formData.address.geo
                                    .lat
                            }
                            onChange={(event) =>
                                handleGeoChange(
                                    "lat",
                                    event.target.value
                                )
                            }
                        />

                        <TextField
                            label="Longitude"
                            value={
                                formData.address.geo
                                    .lng
                            }
                            onChange={(event) =>
                                handleGeoChange(
                                    "lng",
                                    event.target.value
                                )
                            }
                        />

                        <Typography
                            variant="h6"
                            sx={{ mt: 2 }}
                        >
                            Company
                        </Typography>

                        <TextField
                            label="Company Name"
                            value={
                                formData.company.name
                            }
                            onChange={(event) =>
                                handleCompanyChange(
                                    "name",
                                    event.target.value
                                )
                            }
                        />

                        <TextField
                            label="Catch Phrase"
                            value={
                                formData.company
                                    .catchPhrase
                            }
                            onChange={(event) =>
                                handleCompanyChange(
                                    "catchPhrase",
                                    event.target.value
                                )
                            }
                        />

                        <TextField
                            label="Business"
                            value={
                                formData.company.bs
                            }
                            onChange={(event) =>
                                handleCompanyChange(
                                    "bs",
                                    event.target.value
                                )
                            }
                        />

                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                mt: 2,
                            }}
                        >
                            <Button
                                type="submit"
                                variant="contained"
                            >
                                Save Changes
                            </Button>

                            <Button
                                variant="outlined"
                                onClick={() =>
                                    router.push(
                                        "/Home"
                                    )
                                }
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
}