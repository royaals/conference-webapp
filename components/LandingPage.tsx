// @ts-nocheck
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-gray-950 text-gray-50">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <VideoIcon className="w-6 h-6 text-[#00b4d8]" />
          <span className="font-bold text-lg">Converse</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link  className="text-sm font-medium hover:text-[#00b4d8] transition-colors" prefetch={false} href="#features">
            Features
          </Link>
          <Link href="/sign-in" className="text-sm font-medium hover:text-[#00b4d8] transition-colors" prefetch={false}>
            Login
          </Link>
          <Link
            href="/sign-up"
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#00b4d8] px-4 py-2 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-[#00a0c0] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b4d8] disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get Started
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center gap-12 px-6 py-12 md:py-24 lg:py-32">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Elevate Your Connections</h1>
            <p className="text-lg text-gray-400">
              Converse is a powerful video conferencing platform that brings your team together, no matter where they
              are.
            </p>
            <div className="flex gap-4">
             
              <Link
                href="/sign-up"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#00b4d8] px-6 text-sm font-medium shadow-sm transition-colors hover:bg-[#00b4d8]/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b4d8] disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
            </div>
          </div>
          <Image
            src="/images/hero.png"
            width="600"
            height="400"
            alt="Hero Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
          />
        </section>
        <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          <div className="bg-gray-800 rounded-xl p-6 space-y-4">
            <VideoIcon className="w-8 h-8 text-[#00b4d8]" />
            <h3 className="text-xl font-bold">High-Quality Video</h3>
            <p className="text-gray-400">Experience crystal-clear video calls with advanced compression technology.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 space-y-4">
            <ScreenShareIcon className="w-8 h-8 text-[#00b4d8]" />
            <h3 className="text-xl font-bold">Seamless Screen Sharing</h3>
            <p className="text-gray-400">Effortlessly share your screen with your team for effective collaboration.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 space-y-4">
            <UsersIcon className="w-8 h-8 text-[#00b4d8]" />
            <h3 className="text-xl font-bold">Unlimited Participants</h3>
            <p className="text-gray-400">
              Bring your entire team together with no limits on the number of participants.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 py-6 text-sm text-gray-400">
        <div className="container max-w-6xl mx-auto flex justify-between items-center">
          <p>&copy; 2024 Converse. All rights reserved.</p>
         
        </div>
      </footer>
    </div>
  )
}

function ScreenShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
   
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="m17 8 5-5" />
      <path d="M17 3h5v5" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}