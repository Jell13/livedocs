import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({children} : HeaderProps) => {
  return (
    <div className='header'>
    <Link href={"/"} className='md:flex-1'>
        <Image src={"/assets/icons/logo.svg"} alt='Logo with name' width={120} height={32} className='hidden md:block'/>
        <Image src={"/assets/icons/logo.svg"} alt='Logo with name' width={32} height={32} className='md:hidden mr-2'/>
    </Link>
    {children}
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
    </div>
  )
}

export default Header
