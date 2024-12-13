"use client"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa6"
import { z } from "zod"

export default function Subscribe() {
	const [status, setStatus] = useState()

	const pattern = z.string().min(1, {message: "Feltet skal udfyldes"}).email({message: "Ugyldig email"})

	async function submitHandler(event) {
		event.preventDefault()
		const email = event.target.email.value

		const validated = pattern.safeParse(email)
		//console.log(validated.error.format()._errors)
		if (!validated.success) return setStatus(validated.error.format()._errors[0])

		const response = await fetch("https://dinmaegler.onrender.com/subscribers", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({
				email
			})
		})

		if (!response.ok) return setStatus("Der er sket en fejl. Prøv igen om lidt.")
		setStatus("Du er tilmeldt vores nyhedsbrev. Tak :)")
	}

	return (
		<section
			
			style={{background: "url(/sub-bg.png)"}}
			className="flex flex-col justify-center h-[284px] z-[1] bg-cover bg-center relative before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-[hsla(0,_0%,_0%,_0.7)] before:z-[2]"
		>
			<div className="container relative z-[10] flex justify-between gap-4">
				<h2 className="text-2xl text-white font-bold flex-1">Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet</h2>
				<form className="flex-1 flex items-center" onSubmit={submitHandler}>
					<input type="email" name="email" className="bg-white text-black p-4 w-[90%] rounded-tl-sm rounded-bl-sm" placeholder="Indtast din email adresse" />
					<button type="submit" className="bg-white p-5 w-[10%] rounded-tr-sm rounded-br-sm">
						<span className="sr-only">Send</span>
						<FaArrowRight />
					</button>
				</form>
				<span className="text-white">{status}</span>
			</div>
		</section>
	)
}
