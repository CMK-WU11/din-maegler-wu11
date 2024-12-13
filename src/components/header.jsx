import Link from "next/link"
import { IoIosSend, IoMdPerson } from "react-icons/io"
import { BsFillTelephoneFill } from "react-icons/bs"
import Image from "next/image"

export default function Header() {
	return (
		<header>
			<div className="bg-[#162A41] text-white">
				<div className="container flex justify-between">
					<div className="flex gap-8">
						<a href="mailto:4000@dinmaegler.com" className="flex items-center leading-[4rem] gap-2"><IoIosSend /> 4000@dinmaegler.com</a>
						<a href="tel:004570704000" className="flex items-center leading-[4rem] gap-2"><BsFillTelephoneFill /> +45 7070 4000</a>
					</div>
					<Link href="/login" className="flex items-center gap-2"><IoMdPerson />Log ind</Link>
				</div>
			</div>
			<div className="bg-white">
				<div className="container py-4 flex justify-between items-center">
					<Link href="/">
						<Image src="/logo.svg" width={296} height={49} alt="Din Mægler" />
					</Link>
					<nav>
						<ul className="flex gap-16">
							<li>
								<Link href="/homes">Boliger til salg</Link>
							</li>
							<li>
								<Link href="/agents">Mæglere</Link>
							</li>
							<li>
								<Link href="/my-favorites">Mine favoritter</Link>
							</li>
							<li>
								<Link href="/contact">Kontakt os</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}
