"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";
import axios from "axios";

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;

    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;

        geo: {
            lat: string;
            lng: string;
        };
    };

    phone: string;
    website: string;

    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};

type UserContextType = {
    users: User[];
    loading: boolean;

    addUser: (user: User) => void;
    updateUser: (user: User) => void;
    deleteUser: (id: number) => void;
};

const UserContext = createContext<UserContextType | undefined>(
    undefined
);

export function UserProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getUsers() {
            try {
                const response = await axios.get<User[]>(
                    "/api/userData"
                );

                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        }

        getUsers();
    }, []);

    function addUser(user: User) {
        setUsers((prevUsers) => [...prevUsers, user]);
    }

    function updateUser(updatedUser: User) {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === updatedUser.id
                    ? updatedUser
                    : user
            )
        );
    }

    function deleteUser(id: number) {
        setUsers((prevUsers) =>
            prevUsers.filter((user) => user.id !== id)
        );
    }

    return (
        <UserContext.Provider
            value={{
                users,
                loading,
                addUser,
                updateUser,
                deleteUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUsers() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error(
            "useUsers must be used inside UserProvider"
        );
    }

    return context;
}