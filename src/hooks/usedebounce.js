"use client"

import { useEffect, useState } from "react"

export default function useDebounce(value, delay) {
	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(function() {
		const timeoutHandlerDingenot = setTimeout(function() {
			setDebouncedValue(value)
		}, delay)

		return () => clearTimeout(timeoutHandlerDingenot)
	}, [value])

	return debouncedValue
}