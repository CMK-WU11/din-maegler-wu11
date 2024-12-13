import HomeCard from "@/components/home-card"
import SearchForm from "@/components/search-form"
import TitleBar from "@/components/title-bar"

export default async function Search({ searchParams }) {
	const { q } = await searchParams

	const response = await fetch(`https://dinmaegler.onrender.com/homes?description_contains=${q}`)
	const data = await response.json()

	return (
		<section className="bg-background py-8">
			<TitleBar title="Søgeresultater" />
			<SearchForm />
			<div className="container">
				<ul className="grid grid-cols-2 gap-8 pt-8">
					{data.map(home => <HomeCard key={home.id} home={home} />)}
				</ul>
			</div>
		</section>
	)
}
