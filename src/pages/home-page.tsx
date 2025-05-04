import { Input } from "@/components/ui/input"

function HomePage() {
    return (
        <div className="grid grid-cols-1 gap-8">
            {/* Sidebar */}
            <aside className="space-y-6">
                {/* Search */}
                <div className="bg-white p-4 border border-gray-200">
                    <h3 className="text-lg font-semibold mb-2">Cari Artikel</h3>
                    <Input />
                </div>
                {/* Kategori */}
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold mb-2">Kategori</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="text-indigo-600 hover:underline">Teknologi</a></li>
                        <li><a href="#" className="text-indigo-600 hover:underline">Tips &amp; Trik</a></li>
                        <li><a href="#" className="text-indigo-600 hover:underline">Review</a></li>
                    </ul>
                </div>
            </aside>
            {/* Blog Posts */}
            <section className="md:col-span-2 space-y-6">
                {/* Post Card */}
                <article className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-2xl font-semibold text-indigo-600 hover:underline">
                        Judul Artikel
                    </h2>
                    <p className="text-sm text-gray-500">Ditulis oleh Admin • 20 April 2025</p>
                    <p className="mt-2 text-gray-700">
                        Ini adalah ringkasan dari artikel blog. Klik untuk membaca selengkapnya.
                    </p>
                    <a href="#" className="inline-block mt-3 text-indigo-500 hover:underline">Baca Selengkapnya →</a>
                </article>
                {/* Tambah lebih banyak post di sini */}
            </section>
        </div>
    )
}

export default HomePage