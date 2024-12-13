export default function SearchForm() {
	return (
		<form className="bg-white py-6 px-6 w-[60%] mx-auto" action="/search" method="GET">
			<p className="text-lg font-semibold mb-4">Søg blandt X boliger til salg i X butikker</p>
			<label className="flex flex-col" htmlFor="keyword">
				Hvad skal din næste bolig indeholde?
			</label>
			<input
				type="search"
				id="keyword"
				name="q"
				placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
				className="border rounded-sm py-1 px-4 w-[85%]"
				defaultValue=""
			/>
			<button type="submit" className="bg-[#162A41] text-white ml-[1%] py-1 w-[14%] rounded-sm">Søg</button>
		</form>
	)
}