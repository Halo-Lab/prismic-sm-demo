import { createClient } from '../prismicio'
import Home from '../scenes/Home/Home'

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getByUID('home', 'home')
  return {
    props: { page },
  }
}

function HomePage({ page }) {   
  return (
    <div>
      <Home page={page.data.slices} />
    </div>
  )
}

export default HomePage
