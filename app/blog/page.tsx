import Navbar from '@/components/Navbar';

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-gray-600">
            Coming soon...
          </p>
        </div>
      </main>
    </>
  );
}
