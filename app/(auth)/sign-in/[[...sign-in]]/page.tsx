import { Loader2 } from 'lucide-react'
import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import Image from 'next/image'
import "/app/globals.css";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="h-full lg:flex flex-col items-center justify-center px-4">
            <div className="text-center space-y-4 pt-16">
                <h1 className='font-bold text-3xl text-primary'>Wellcome Back!</h1>
                <p className="text-base text-secondary">Log in or create account to get back to your dashboard!</p>
            </div>
        
            <div className="flex items-center justify-center mt-8">
                <ClerkLoaded>
                    <SignIn />
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className='animate-spin text-muted-foreground'></Loader2>
                </ClerkLoading>
                
            </div>
        </div>

        <div className="h-full  bg-green-800 lg:flex hidden justify-center items-center" >
            <Image src="/favicon.png" alt="logo" width={200} height={200} />
        </div>

    </div>
  
  )
}
