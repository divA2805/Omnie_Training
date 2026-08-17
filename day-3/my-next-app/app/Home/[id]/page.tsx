"use client";
//export const dynamic = "force-dynamic";

import {
    Button,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { User, useUsers } from "../../components/UserContext";

export default function UserDetailsPage() {
    const params = useParams<{ id: string }>();
    const router = useRouter();

    const { users, updateUser } = useUsers();

    const id = Number(params.id);

    const user = users.find(
        (user) => user.id === id
    );

    const [formData, setFormData] = useState<User | null>(
        null
    );

    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    if (!user || !formData) {
        return (
            <main style={{ padding: "24px" }}>
                <Typography variant="h5">
                    User not found
                </Typography>

                <Button
                    sx={{ mt: 2 }}
                    variant="contained"
                    onClick={() => router.push("/Home")}
                >
                    Back to Users
                </Button>
            </main>
        );
    }

    function handleChange(
        field:
            | "name"
            | "username"
            | "email"
            | "phone"
            | "website",
        value: string
    ) {
        setFormData((prev) => {
            if (!prev) {
                return prev;
            }

            return {
                ...prev,
                [field]: value,
            };
        });
    }

    function handleAddressChange(
        field:
            | "street"
            | "suite"
            | "city"
            | "zipcode",
        value: string
    ) {
        setFormData((prev) => {
            if (!prev) {
                return prev;
            }

            return {
                ...prev,

                address: {
                    ...prev.address,
                    [field]: value,
                },
            };
        });
    }

    function handleGeoChange(
        field: "lat" | "lng",
        value: string
    ) {
        setFormData((prev) => {
            if (!prev) {
                return prev;
            }

            return {
                ...prev,

                address: {
                    ...prev.address,

                    geo: {
                        ...prev.address.geo,
                        [field]: value,
                    },
                },
            };
        });
    }

    function handleCompanyChange(
        field: "name" | "catchPhrase" | "bs",
        value: string
    ) {
        setFormData((prev) => {
            if (!prev) {
                return prev;
            }

            return {
                ...prev,

                company: {
                    ...prev.company,
                    [field]: value,
                },
            };
        });
    }

    function handleSubmit() {
        if (!formData) {
            return;
        }

        updateUser(formData);

        router.push("/Home");
    }

    return (
        <main style={{ padding: "24px" }}>
            <Typography
                variant="h4"
                sx={{ mb: 3 }}
            >
                Edit User
            </Typography>

            <Paper sx={{ p: 3 }}>
                <Stack spacing={3}>

                    <TextField
                        label="ID"
                        value={formData.id}
                        disabled
                    />

                    <TextField
                        label="Name"
                        value={formData.name}
                        onChange={(e) =>
                            handleChange(
                                "name",
                                e.target.value
                            )
                        }
                    />

                    <TextField
                        label="Username"
                        value={formData.username}
                        onChange={(e) =>
                            handleChange(
                                "username",
                                e.target.value
                            )
                        }
                    />

                    <TextField
                        label="Email"
                        value={formData.email}
                        onChange={(e) =>
                            handleChange(
                                "email",
                                e.target.value
                            )
                        }
                    />

                    <TextField
                        label="Phone"
                        value={formData.phone}
                        onChange={(e) =>
                            handleChange(
                                "phone",
                                e.target.value
                            )
                        }
                    />

                    <TextField
                        label="Website"
                        value={formData.website}
                        onChange={(e) =>
                            handleChange(
                                "website",
                                e.target.value
                            )
                        }
                    />

                    <Typography variant="h6">
                        Address
                    </Typography>

                    <TextField
                        label="Street"
                        value={formData.address.street}
                        onChange={(e) =>
                            handleAddressChange(
                                "street",
                                e.target.value
                            )
                        }
                    />

                    <TextField
                        label="Suite"
                        value={formData.address.suite}
                        onChange={(e) =>
                            handleAddressChange(
                                "suite",
                                e.target.value
                            )
                        }
                    />

                    <TextField
                        label="City"
                        value={formData.address.city}
                        onChange={(e) =>
                            handleAddressChange(
                                "city",
                                e.target.value
                            )
                        }
                    />

                    <TextField
                        label="Zipcode"
                        value={formData.address.zipcode}
                        onChange={(e) =>
                            handleAddressChange(
                                "zipcode",
                                e.target.value
                            )
                        }
                    />

                    <Typography variant="h6">
                        Location
                    </Typography>

                    <TextField
                        label="Latitude"
                        value={formData.address.geo.lat}
                        onChange={(e) =>
                            handleGeoChange(
                                "lat",
                                e.target.value
                            )
                        }
                    />

                    <TextField
                        label="Longitude"
                        value={formData.address.geo.lng}
                        onChange={(e) =>
                            handleGeoChange(
                                "lng",
                                e.target.value
                            )
                        }
                    />

                    <Typography variant="h6">
                        Company
                    </Typography>

                    <TextField
                        label="Company Name"
                        value={formData.company.name}
                        onChange={(e) =>
                            handleCompanyChange(
                                "name",
                                e.target.value
                            )
                        }
                    />

                    <TextField
                        label="Catch Phrase"
                        value={
                            formData.company.catchPhrase
                        }
                        onChange={(e) =>
                            handleCompanyChange(
                                "catchPhrase",
                                e.target.value
                            )
                        }
                    />

                    <TextField
                        label="Business"
                        value={formData.company.bs}
                        onChange={(e) =>
                            handleCompanyChange(
                                "bs",
                                e.target.value
                            )
                        }
                    />

                    <Stack
                        direction="row"
                        spacing={2}
                    >
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                        >
                            Save Changes
                        </Button>

                        <Button
                            variant="outlined"
                            onClick={() =>
                                router.push("/Home")
                            }
                        >
                            Cancel
                        </Button>
                    </Stack>

                </Stack>
            </Paper>
        </main>
    );
}
