import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Premier Predictor</h1>
      <p className="text-lg mb-6 max-w-xl">Predict every Premier League match, compete with friends in private leagues, and earn bragging rights all season long.</p>
      <div className="flex gap-4">
        <Link href="/login" className="bg-black text-white px-6 py-2 rounded-xl text-lg">Sign In</Link>
        <Link href="/register" className="bg-gray-200 px-6 py-2 rounded-xl text-lg">Sign Up</Link>
      </div>
    </main>
  );
}
