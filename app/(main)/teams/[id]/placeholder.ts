// This would normally come from your API
export const getTeamById = async (id: string) => {
  // Placeholder data - in a real app, fetch from your API
  return {
    id,
    name: "ONIC Esports",
    logo: "/logo/ONIC.jpg",
    country: "Indonesia",
    founded: "2018",
    description:
      "ONIC Esports is one of the most successful Mobile Legends teams in Indonesia, known for their aggressive playstyle and strategic execution.",
    achievements: [
      "MPL Indonesia Season 9 Champions",
      "M4 World Championship Runner-up",
      "MPL Indonesia Season 8 Champions",
      "MSC 2022 Runner-up",
    ],
    players: [
      {
        id: "p1",
        name: "CW",
        role: "Gold Lane",
        image: "/placeholder.svg?height=100&width=100",
        country: "Indonesia",
        joinDate: "2021-03-15",
        signature: ["Beatrix", "Brody", "Claude"],
      },
      {
        id: "p2",
        name: "Kairi",
        role: "Jungler",
        image: "/placeholder.svg?height=100&width=100",
        country: "Philippines",
        joinDate: "2022-08-10",
        signature: ["Lancelot", "Ling", "Hayabusa"],
      },
      {
        id: "p3",
        name: "Sanz",
        role: "Mid Lane",
        image: "/placeholder.svg?height=100&width=100",
        country: "Indonesia",
        joinDate: "2021-05-20",
        signature: ["Lylia", "Yve", "Pharsa"],
      },
      {
        id: "p4",
        name: "Butsss",
        role: "Exp Lane",
        image: "/placeholder.svg?height=100&width=100",
        country: "Indonesia",
        joinDate: "2022-01-15",
        signature: ["Esmeralda", "Thamuz", "Yu Zhong"],
      },
      {
        id: "p5",
        name: "Kiboy",
        role: "Roamer",
        image: "/placeholder.svg?height=100&width=100",
        country: "Indonesia",
        joinDate: "2021-02-28",
        signature: ["Khufra", "Atlas", "Franco"],
      },
    ],
    recentMatches: [
      {
        id: "m1",
        opponent: "RRQ Hoshi",
        result: "Win",
        score: "3-1",
        date: "2023-10-15",
        tournament: "MPL Indonesia Season 12",
      },
      {
        id: "m2",
        opponent: "Evos Legends",
        result: "Loss",
        score: "1-3",
        date: "2023-09-30",
        tournament: "MPL Indonesia Season 12",
      },
      {
        id: "m3",
        opponent: "Bigetron Alpha",
        result: "Win",
        score: "2-0",
        date: "2023-09-22",
        tournament: "MPL Indonesia Season 12",
      },
    ],
    stats: {
      winRate: 68,
      totalMatches: 245,
      totalWins: 167,
      totalLosses: 78,
      avgGameDuration: "18:45",
      mostPlayedHeroes: ["Beatrix", "Esmeralda", "Lancelot", "Lylia", "Khufra"],
    },
  };
};
