import NavbarMain from "@/components/Navbar";

const dummyData = [
    { rank: 1, name: "Alice", score: 1200 },
    { rank: 2, name: "Bob", score: 1150 },
    { rank: 3, name: "Charlie", score: 1100 },
    { rank: 4, name: "David", score: 1050 },
    { rank: 5, name: "Eve", score: 1000 },
];

export default function Leaderboard() {
    return (
        <div className="min-h-screen bg-black ">
            <NavbarMain />
            <div className="max-w-4xl mx-auto py-16">
                <h1 className="text-center text-4xl font-bold mb-8">Leaderboard</h1>
                <div className="bg-gray-900 shadow-md rounded-lg p-6">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b text-white">
                                <th className="p-3">Rank</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyData.map((entry) => (
                                <tr key={entry.rank} className="border-b hover:bg-gray-800">
                                    <td className="p-3">{entry.rank}</td>
                                    <td className="p-3">{entry.name}</td>
                                    <td className="p-3">{entry.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}