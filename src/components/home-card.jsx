import DKK from "@/lib/currency-format"
import Image from "next/image"
import Link from "next/link"
import AddToFavs from "./add-to-favs"
import Energylabel from "./energylabel"

export default function HomeCard({ home }) {
	return (
		<li className="shadow-lg rounded-md relative">
			<Link href={`/homes/${home.id}`}>
				<Image
					alt=""
					src={home.images[0].url}
					width={home.images[0].width}
					height={home.images[0].height}
					className="object-cover w-full h-56 rounded-t-md"
				/>
				<AddToFavs homeId={home.id} users={home.users} />
				<div className="p-4">
					<p className="text-xl font-semibold">{home.adress1}</p>
					<p>{home.postalcode} {home.city}</p>
					<p><span className="text-lg font-semibold">{home.type}</span> &#x2022; Ejerudgift: {DKK.format(home.cost)}</p>
					<div className="border-b my-4"></div>
					<p className="flex justify-between">
						<Energylabel label={home.energylabel} />
						<span>{home.rooms} værelser &#x2022; {home.livingspace} m<sup>2</sup></span>
						<span className="text-lg font-semibold">{DKK.format(home.price)}</span>
					</p>
				</div>
			</Link>
		</li>
	)
}
