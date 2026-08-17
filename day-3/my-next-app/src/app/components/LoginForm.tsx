"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
    Button,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

export default function LoginForm() {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response = await fetch(
                "/api/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.error ||
                        "Invalid credentials"
                );
                return;
            }

            router.push("/Home");
            router.refresh();
        } catch (error) {
            console.error(error);
            setError(
                "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <Paper
                elevation={4}
                className="w-full max-w-md p-8"
            >
                <Typography
                    variant="h4"
                    className="text-center"
                    sx={{ mb: 1 }}
                >
                    Login
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    className="text-center"
                    sx={{ mb: 4 }}
                >
                    Login to access Omnie Solutions
                </Typography>

                <form onSubmit={handleLogin}>
                    <TextField
                        label="Username"
                        value={username}
                        onChange={(event) =>
                            setUsername(
                                event.target.value
                            )
                        }
                        fullWidth
                        sx={{ mb: 2 }}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(event) =>
                            setPassword(
                                event.target.value
                            )
                        }
                        fullWidth
                        sx={{ mb: 2 }}
                    />

                    {error && (
                        <Typography
                            color="error"
                            sx={{ mb: 2 }}
                        >
                            {error}
                        </Typography>
                    )}

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={loading}
                    >
                        {loading
                            ? "Logging in..."
                            : "Login"}
                    </Button>
                </form>
            </Paper>
        </main>
    );
}