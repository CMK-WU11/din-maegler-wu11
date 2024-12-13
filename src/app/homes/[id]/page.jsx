import Image from "next/image"
import { CiHeart, CiImageOn } from "react-icons/ci"
import { IoLayersOutline } from "react-icons/io5"
import { FiMapPin } from "react-icons/fi"
import DKK from "@/lib/currency-format"
import Gallery from "@/components/gallery"

export default async function Home({ params }) {
	const { id } = await params
	const response = await fetch(`https://dinmaegler.onrender.com/homes/${id}`)
	const home = await response.json()

	return (
		<section>
			<Image
				src={home.images[0].url}
				width={home.images[0].width}
				height={home.images[0].height}
				alt=""
				className="w-full object-cover h-[70vh]"
			/>
			<div className="container">
				<div className="flex justify-between py-8 border-b mb-8">
					<div>
						<p className="text-ls font-semibold">{home.adress1}</p>
						<p className="text-ls font-semibold">{home.postalcode} {home.city}</p>
					</div>
					<div className="flex gap-4">
						<Gallery images={home.images.map(image => ({ src: image.url }))} icon={<CiImageOn size="2em" color="gray" />} />
						<Gallery images={[{src: home.floorplan.url}]} icon={<IoLayersOutline size="2em" color="gray" />} />
						<button>
							<FiMapPin size="2em" color="gray" />
						</button>
						<button>
							<CiHeart size="2em" color="gray" />
						</button>
					</div>
					<p className="text-xl font-bold">
						{DKK.format(home.price)}
					</p>
				</div>
				<table className="w-full">
					<tbody>
						<tr>
							<td>Sagsnummer:</td>
							<td>-</td>
							<td>Kælder:</td>
							<td>{home.basementsize} m<sup>2</sup></td>
							<td>Udbetaling:</td>
							<td>{DKK.format(home.payment)}</td>
						</tr>
						<tr>
							<td>Boligareal:</td>
							<td>{home.livingspace} m<sup>2</sup></td>
							<td>Byggeår:</td>
							<td>{home.built}</td>
							<td>Brutto ex ejerudgift:</td>
							<td>{DKK.format(home.gross)}</td>
						</tr>
						<tr>
							<td>Grundareal:</td>
							<td>{home.lotsize === 0 ? "-" : home.lotsize}</td>
							<td>Ombygget:</td>
							<td>-</td>
							<td>Netto ex ejerudgift:</td>
							<td>{DKK.format(home.netto)}</td>
						</tr>
						<tr>
							<td>Rum/værelser:</td>
							<td>{home.rooms}</td>
							<td>Energimærke:</td>
							<td>{home.energylabel}</td>
							<td>Ejerudgifter:</td>
							<td>{DKK.format(home.cost)}</td>
						</tr>
						<tr>
							<td>Antal plan:</td>
							<td>-</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
				<div>
					<article>
						<h3>Beskrivelse</h3>
						<p>{home.description}</p>
					</article>
					<article>

					</article>
				</div>
			</div>
		</section>
	)
}