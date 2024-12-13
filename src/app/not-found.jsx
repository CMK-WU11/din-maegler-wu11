import Link from "next/link"

export default async function NotFound() {
	return (
		<section className="bg-[#EEF7FF] min-h-[60vh]">
			<div className="container">
				<h2 className="text-center text-[13rem] font-bold text-white drop-shadow-[0_0_1.2px_#162A41] relative before:absolute before:w-[30rem] before:h-20 before:bg-[#162A41] before:bottom-10 before:mx-auto before:z-[-1]">Hov!</h2>
				<p className="text-center font-semibold text-xl">Du er havnet på en side som ikke findes!</p>
				<p className="text-center">Det er vi kede af! Vi har sendt en besked til vores internetbureau, og bedt dem se på fejlen.</p>
				<Link href="/" className="block bg-[#162A41] text-white w-fit mx-auto p-4 mt-4">Tilbage til forsiden</Link>
			</div>
		</section>
	)
}
