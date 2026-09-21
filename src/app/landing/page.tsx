import LandingPageView from "@/features/landing-page/landing-page-view";
import { Suspense } from "react";

export default function LandingPage() {
  return (
    <Suspense fallback={<></>}>
      <LandingPageView />
    </Suspense>
  );
}
