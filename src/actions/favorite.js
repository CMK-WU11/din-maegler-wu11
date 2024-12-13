"use server"
import { cookies } from "next/headers"

export default async function favorite(homeId) {
	const cookieStore = await cookies()
	const token = cookieStore.get("dm_token")
	const userId = cookieStore.get("dm_userid")

	if (!token || !userId) return

	const response = await fetch("https://dinmaegler.onrender.com/users/me", {
		headers: {
			Authorization: "Bearer " + token.value
		}
	})

	const { homes } = await response.json()
	const index = homes.indexOf(homeId)

	if (index === -1) {
		homes.push(homeId)
	} else {
		homes.splice(index, 1)
	}

	const saveFavs = await fetch(`https://dinmaegler.onrender.com/users/${userId.value}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			"Authorization": "Bearer " + token.value
		},
		body: JSON.stringify({ homes })
	})

	return response.status
}
