// "use client";

import Link from "next/link";

// import { useRouter } from "next/navigation";
// import { useSyncExternalStore, useTransition } from "react";

// import { disableDraftMode } from "./actions";

// const emptySubscribe = () => () => {};

export default function AlertBanner() {
  // const router = useRouter();
  // const [pending, startTransition] = useTransition();

  // const shouldShow = useSyncExternalStore(
  //   emptySubscribe,
  //   () => window.top === window,
  //   () => false,
  // );

  // if (!shouldShow) return null;

  return (
    <div
      className="top-0 left-0 z-50 w-full border-b bg-[#001c55] text-white/90 backdrop-blur text-lg  font-semibold  mb-7 flex items-center justify-between px-4 h-14"
    >
      <div className="py-2 text-center ">
      Tech Blogs.
      </div>

      <nav className="flex space-x-6 text-sm  font-normal">
        <Link href="/" className="hover:text-yellow-300">Home</Link>
        <Link href="/about" className="hover:text-yellow-300">About</Link>
        <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
      </nav>


    </div>
  );
}

