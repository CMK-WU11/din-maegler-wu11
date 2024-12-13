"use client"
import login from "@/actions/login"
import TitleBar from "@/components/title-bar"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useActionState, useEffect } from "react"

export default function Page() {
	const [formState, formAction] = useActionState(login, null)

	useEffect(function() {
		if (!formState || formState?.success !== true) return

		redirect("/")
	}, [formState])

	return (
		<>
			<TitleBar title={"Log ind"} />
			<div className="container">
				<form action={formAction} className="border shadow-sm w-[40%] p-8 mx-auto rounded-sm">
					<p className="text-center font-bold text-lg">Log ind på din konto</p>
					<div className="mb-4">
						<label className="flex flex-col">
							Email
							<input type="email" name="identifier" className="border px-1 py-1 rounded-sm" />
						</label>
						<span>{formState?.identifier?._errors.map(error => error)}</span>
					</div>
					<div className="mb-4">
						<label className="flex flex-col">
							Adgangskode
							<input type="password" name="password" className="border px-1 py-1 rounded-sm" />
						</label>
						<span>{formState?.password?._errors.map(error => error)}</span>
					</div>
					<button type="submit" className="bg-[#162A41] w-full text-white py-1">Log ind</button>
					<p className="my-2 text-center">Har du ikke en konto? <Link href="/register" className="text-blue-500">Opret konto</Link></p>
				</form>
			</div>
		</>
	)
}
