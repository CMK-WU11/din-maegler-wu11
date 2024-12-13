"use client"
import { FaRegHeart, FaHeart } from "react-icons/fa"

import favorite from "@/actions/favorite"
import { getCookie } from "cookies-next"
import { useEffect, useState } from "react"

export default function AddToFavs({ homeId, users }) {
	const [isFavd, setIsFavd] = useState(false)
	const userId = getCookie("dm_userid")
	
	useEffect(function() {
		users.filter(user => user.id === userId).length ? setIsFavd(true) : setIsFavd(false)
	}, [])

	return (
		<button
			onClick={(e) => {
				e.preventDefault()
				favorite(homeId)
				setIsFavd(!isFavd)
			}}
			className="rounded-full bg-gray-200 p-2 absolute top-4 right-4"
		>
			{isFavd ? <FaHeart /> : <FaRegHeart />}
		</button>
	)
}
