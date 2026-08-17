"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Button,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

export default function LoginPage() {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    async function handleLogin(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error);
                return;
            }

            router.push("/Home");
        } catch (error) {
            console.error(error);
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main
            style={{
                padding: "40px",
                maxWidth: "400px",
            }}
        >
            <Paper
                elevation={3}
                style={{
                    padding: "30px",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ mb: 3 }}
                >
                    Login
                </Typography>

                <form onSubmit={handleLogin}>

                    <TextField
                        label="Username"
                        value={username}
                        onChange={(e) =>
                            setUsername(
                                e.target.value
                            )
                        }
                        fullWidth
                        sx={{ mb: 2 }}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(
                                e.target.value
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