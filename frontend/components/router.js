"use client";

import { useRouter } from 'next/navigation';

export default async function RouteAccess(){
    const router = useRouter();
    return (
        router
    )
}