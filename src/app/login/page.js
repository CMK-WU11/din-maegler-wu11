"use client"
import login from "@/actions/login"
import { redirect } from "next/navigation"
import { useActionState, useEffect } from "react"

export default function Page() {
	const [formState, formAction] = useActionState(login, null)

	useEffect(function() {
		if (!formState) return

		if (!formState.success) {
			alert("FEJL!!")
		}

		if (formState.success) {
			redirect("/")
		}
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
					<span></span>
				</div>
				<div>
					<label>
						Adgangskode
						<input type="password" name="password" />
					</label>
					<span></span>
				</div>
				<button type="submit">Log ind</button>
			</form>
		</>
	)
}
