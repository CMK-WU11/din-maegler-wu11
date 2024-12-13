import SearchForm from "./search-form"

export default async function Search() {
	const response = await fetch("https://dinmaegler.onrender.com/homes")
	const data = await response.json()

	const images = data.reduce((accumulator, currentValue) => [...accumulator, currentValue.images[0].url], [])
	
	return (
		<section
			style={{backgroundImage: `url(${images[Math.floor(Math.random()*images.length)]})`}}
			className="z-[1] h-[40rem] bg-cover bg-center relative before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-[hsla(0,_0%,_0%,_0.7)] before:z-[2]"
		>
			<div className="container flex flex-col justify-center h-full z-[10] relative">
				<h2 className="text-2xl font-bold text-center text-white mb-10">Søg efter din drømmebolig</h2>
				<SearchForm />
			</div>
		</section>
	)
}
