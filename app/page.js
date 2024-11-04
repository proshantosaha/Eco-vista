// import { usePathname, useRouter, useSearchParams } from "next/navigation";
import LocationDetector from "../components/LocationDetector";
// import Image from "next/image";
// import { useEffect, useReducer, useState } from "react";

export default function Home() {
  return (
    <div>
      <LocationDetector />
    </div>
  );
}
