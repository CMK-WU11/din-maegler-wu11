"use client"
import login from "@/actions/login"
import { redirect } from "next/navigation"
import { useActionState, useEffect } from "react"

export default function Page() {
	const [formState, formAction] = useActionState(login, null)

	useEffect(function() {
		if (!formState) return

		if (formState?.success !== true ) return

		redirect("/")
	}, [formState])

	return (
		<>
			<h2>Log ind</h2>
			<form action={formAction} method="POST">
				<div>
					<label>
						Email
						<input type="email" name="identifier" />
					</label>
					<span>{formState?.identifier?._errors.map(error => error)}</span>
				</div>
				<div>
					<label>
						Adgangskode
						<input type="password" name="password" />
					</label>
					<span>{formState?.password?._errors.map(error => error)}</span>
				</div>
				<button type="submit">Log ind</button>
			</form>
		</>
	)
}
