import { getServerSession } from 'next-auth'
import React from 'react'
import { redirect } from "next/navigation";

const StarWars = async () => {
    const session = await getServerSession();
    if (!session || !session.user) {
        redirect("/login");
    }
    return (
        <div>StarWars</div>
    )
}

export default StarWars