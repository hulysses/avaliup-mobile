import { Slot } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-react";

export default function Layout() {
  const PUBLIC_CLERK_PUBLISHABLE_KEY = process.env
    .EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

  return (
    <ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <Slot />
    </ClerkProvider>
  );
}
