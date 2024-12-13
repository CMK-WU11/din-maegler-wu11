import Link from "next/link"
import HomeCard from "./home-card"

export default async function FeaturedHomes() {
	let data
  try {
    const response = await fetch("https://dinmaegler.onrender.com/homes")
    data = await response.json()
  } catch (error) {
    
  }

	return (
		<section className="bg-background py-8">
			<div className="container">
				<h2 className="text-center text-2xl font-bold">Udvalgte Boliger</h2>
				<p className="text-center mb-8 max-w-[50rem] mx-auto">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ad hic itaque porro.
					Quasi ullam, fuga numquam id asperiores, quo, eveniet ab inventore ut facilis voluptates nisi sed! Labore, in.
				</p>
				<ul className="grid grid-cols-2 gap-8">
					{data.sort(() => 0.5 - Math.random()).slice(0,4).map(home => <HomeCard key={home.id} home={home} users={home.users} />)}
				</ul>
				<p className="text-center"><Link href="/homes" className="bg-blue-950 text-white px-4 py-2 my-8 inline-block rounded-sm">Se alle boliger</Link></p>
			</div>
		</section>
	)
}
