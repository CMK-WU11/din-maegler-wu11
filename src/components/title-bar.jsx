export default function TitleBar({ title }) {
	return (
		<div
			style={{background: "url(/titlebar-bg.png)"}}
			className="flex items-center justify-center mb-8 text-center h-[100px] z-[1] bg-cover bg-center relative before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-[hsla(0,_0%,_0%,_0.7)] before:z-[2]"
		>
			<h2 className="text-2xl font-bold text-white relative z-[10]">{title}</h2>
		</div>
	)
}