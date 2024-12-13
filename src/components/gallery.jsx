"use client"

import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

export default function Gallery({images, icon}) {
	const [open, setOpen] = useState(false)
	return (
		<>
			<button onClick={() => setOpen(true)}>
				{icon}
			</button>
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={images}
			/>
		</>
	)
}
