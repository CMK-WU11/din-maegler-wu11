export default function Energylabel({ label }) {
	switch (label) {
		case "A":
			return <span className="px-2 py-1 font-semibold bg-green-800 text-white">{label}</span>
		case "B":
			return <span className="px-2 py-1 font-semibold bg-yellow-400 text-black">{label}</span>
		case "C":
			return <span className="px-2 py-1 font-semibold bg-orange-500 text-white">{label}</span>
		case "D":
			return <span className="px-2 py-1 font-semibold bg-red-700 text-white">{label}</span>

	}
}