import FavHomeCard from "@/components/fav-home-card"
import TitleBar from "@/components/title-bar"
import { cookies } from "next/headers"

export default async function MyFavorites() {
	const cookieStore = await cookies()
	const token = cookieStore.get("dm_token")

	const response = await fetch("https://dinmaegler.onrender.com/homes")
	const allHomes = await response.json()

	const user = await fetch("https://dinmaegler.onrender.com/users/me", {
		headers: {
			Authorization: "Bearer " + token.value
		}
	})
	const {homes} = await user.json()

	const filteredList = allHomes.filter(home => homes.includes(home.id))

	return (
		<section className="bg-gray-100 pb-8">
			<TitleBar title="Mine favoritter" />
			<div className="container">
				<ul className="flex flex-col gap-4">
					{filteredList.map(home => <FavHomeCard home={home} key={home.id} />)}
				</ul>
			</div>
		</section>
	)
}
