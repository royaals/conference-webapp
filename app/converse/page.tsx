import LandingPage from "@/components/LandingPage"

import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
export default function Component() {
    
return (

    <div className="flex flex-col min-h-[100dvh]">
     <LandingPage/>
    </div>
  )
}

