import FeaturedHomes from "@/components/featured-homes"
import Search from "@/components/search"
import Subscribe from "@/components/subscribe"

export default async function Home() {
  

  return (
    <>
      <Search />
      <FeaturedHomes />
      <Subscribe />
    </>
  )
}
