export default function Footer() {
	return (
		<footer className="gap-4 min-h-[50vh] grid grid-cols-[auto,35em,35em,auto] grid-rows-3 bg-gray-200">
			<section className="col-start-2 col-end-4 pt-4">
				<h2>Din Mægler</h2>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta dolorum asperiores tempore similique saepe omnis atque, voluptas fugit minima laboriosam quod illo voluptates rem itaque odit eveniet recusandae ipsum consectetur.</p>
			</section>
			<section className="col-start-3 col-end-4">
				<h2>Quick Links</h2>
				<ul>
					<li><a href="#">Link 1</a></li>
					<li><a href="#">Link 2</a></li>
					<li><a href="#">Link 3</a></li>
				</ul>
			</section>
			<section className="grid grid-cols-2 bg-white row-start-3 row-end-4 col-start-1 col-end-5">
				<div className="col-start-2">
					<p>Medlem af DMS Dansk Mægler Sammenslutning</p>
				</div>
			</section>
			<section className="ml-4 mr-4 mb-4 bg-white row-start-2 row-end-4 col-start-2 col-end-3 shadow-lg p-4">
				<ul>
					<li>Ring til os</li>
					<li>Send en mail</li>
					<li>Butik</li>
					<p>Din Mægler Roskilde er the shit</p>
				</ul>
			</section>
		</footer>
	)
}