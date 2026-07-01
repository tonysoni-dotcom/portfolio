interface PageProps {
    params: Promise<{id: string}>
}

export default async function DetailedPageScreen({params} : PageProps) {
    const {id} = await params;
    return (
        <main className="min-h-screen bg-black flex justify-center items-center">
            this is detailed page screen
        </main>
    )
}