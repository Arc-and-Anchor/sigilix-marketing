import type { Metadata } from "next"
import { LoginScreen } from "@/components/auth/LoginScreen"

export const metadata: Metadata = {
  title: "Sign in · Sigilix",
  description:
    "Sign in to Sigilix with GitHub, Google, or email. Authentication is handled securely at app.sigilix.ai.",
}

export default function SignupPage() {
  return <LoginScreen />
}
