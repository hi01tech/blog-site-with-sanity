// "use client";

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
      className="top-0 left-0 z-50 w-full border-b bg-[#001c55] text-white/90 backdrop-blur p-4 text-lg  font-semibold text-center   mb-7"
    >
      <div className="py-2 text-center ">
      Tech's Blogs Site!
      </div>
    </div>
  );
}
