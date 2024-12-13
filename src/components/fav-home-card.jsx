"use client"

import DKK from "@/lib/currency-format"
import Image from "next/image"
import Energylabel from "./energylabel"
import favorite from "@/actions/favorite"
import { useRef } from "react"

export default function FavHomeCard({home}) {
	const cardRef = useRef()
	return (
		<li className="rounded-md border p-4 bg-white shadow-md flex gap-4" ref={cardRef}>
			<Image
				src={home.images[0].url}
				width={home.images[0].width}
				height={home.images[0].height}
				alt=""
				className="h-32 w-[16rem] object-cover"
			/>
			<table className="w-full">
				<tbody>
					<tr>
						<td>{home.adress1}</td>
						<td>
							<Energylabel label={home.energylabel} />
							<span className="pl-8">{home.rooms} værelser &#x2022; {home.livingspace} m<sup>2</sup></span>
						</td>
						<td><span className="text-lg font-semibold">{DKK.format(home.price)}</span></td>
					</tr>
					<tr>
						<td>{home.postalcode} {home.city}</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td><span className="text-lg font-semibold">{home.type}</span> &#x2022; Ejerudgift: {DKK.format(home.cost)}</td>
						<td colSpan={2} className="flex justify-end">
							<button
								className="bg-[#162A41] px-8 py-4 text-white"
								onClick={e => {
									e.preventDefault()
									favorite(home.id)
									cardRef.current.remove()
								}}
							>
								Fjern fra favoritter
							</button>
						</td>
					</tr>
				</tbody>
				
			</table>
		</li>
	)
}