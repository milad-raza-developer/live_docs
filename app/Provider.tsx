"use client";

import React, { ReactNode } from 'react'
import { ClientSideSuspense, LiveblocksProvider } from "@liveblocks/react"
import Loader from '@/components/Loader'
import { getClerkUsers } from '@/lib/actions/user.actions';


const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <LiveblocksProvider
            authEndpoint="/api/liveblocks-auth"
            resolveUsers={async ({ userIds }) => {
                const user = await getClerkUsers({ userIds });
                return user;
            }}
        >
            <ClientSideSuspense fallback={<Loader />}>
                {children}
            </ClientSideSuspense>
        </LiveblocksProvider>
    )
}

export default Provider