"use client"

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import React, { ReactNode } from 'react'
import Header from './Header'
import { Editor } from './editor/Editor'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <div className='collaborative-room'>
          <Header>
            <div className='flex w-fit items-center justify-center gap-2'>
            <p className='document-title'>
                Share
            </p>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            </div>
        </Header>
        <Editor/>
          </div>
        </ClientSideSuspense>
    </RoomProvider>
  )
}

export default CollaborativeRoom
