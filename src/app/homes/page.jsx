"use client"
import HomeCard from "@/components/home-card"
import MultiRangeSlider from "@/components/multi-range-slider"
import TitleBar from "@/components/title-bar"
import useDebounce from "@/hooks/usedebounce"
import { useState, useEffect } from "react"

export default function Homes() {
	const [rangeMaxValue, setRangeMaxValue] = useState(12000000)
	const [rangeMinValue, setRangeMinValue] = useState(0)
	const [selectedType, setSelectedType] = useState("all")
	const [homes, setHomes] = useState([])
	const debouncedMinValue = useDebounce(rangeMinValue, 1500)
	const debouncedMaxValue = useDebounce(rangeMaxValue, 1500)

	useEffect(function() {
		const url = `https://dinmaegler.onrender.com/homes` + `?price_gte=${debouncedMinValue}&price_lte=${debouncedMaxValue}` + (selectedType !== "all" ? `&type_eq=${selectedType}` : "")
		console.log("url", url);
		
		(async function(){
			const response = await fetch(url)
			setHomes(await response.json())
		})()
	}, [debouncedMinValue, debouncedMaxValue, selectedType])

	return (
		<section className="mb-8">
			<TitleBar title="Boliger til salg" />
			<div className="container">
				<form className="flex py-8 justify-between">
					<label className="flex flex-col">
						Ejendomstype
						<select onChange={e => setSelectedType(e.target.value)} className="border rounded-sm p-2 bg-white min-w-[20vw]">
							<option value="all">Vælg boligtype</option>
							<option value="Ejerlejlighed">Ejerlejlighed</option>
							<option value="Villa">Villa</option>
							<option value="Landejendom">Landejendom</option>
							<option value="Byhus">Byhus</option>
						</select>
					</label>
					<label className="flex flex-col">
						Prisinterval
						<MultiRangeSlider
							min={0}
							max={12000000}
							step={500000}
							onChange={({min, max}) => {
								setRangeMinValue(min)
								setRangeMaxValue(max)
							}}
						/>
					</label>
					{/* <input type="range" name="max" min={0} max={12000000} step={500000} value={rangeValue} onChange={e=>setRangeMaxValue(e.target.value)} /> */}
				</form>
				<ul className="grid grid-cols-2 gap-8">
					{homes.map(home => <HomeCard key={home.id} home={home} />)}
				</ul>
			</div>
		</section>
	)
}