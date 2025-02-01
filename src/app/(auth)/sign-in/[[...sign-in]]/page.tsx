"use client"
import { SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function SignInPage() {
	const searchParams = useSearchParams();
	const redirectUrl = searchParams.get("redirect_url") || "/dashboard";

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<SignIn
				appearance={{
					elements: {
						rootBox: "mx-auto",
						card: "shadow-xl",
					},
				}}
				redirectUrl={redirectUrl}
			/>
		</div>
	);
} 