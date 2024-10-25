/**
 * Home page
 * @returns Next.js RSC page.
 */
export default async function Home({
  params,
}: {
  params: { username: string }
}) {
  return (
    <main className='container mx-auto p-6'>
      <p>Page for user with username: {params.username}</p>
    </main>
  )
}
