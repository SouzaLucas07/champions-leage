import { PlayerModel } from "../models/player-model";

const database: PlayerModel[]=[
        {
          id: 1,
          name: "Lionel Messi",
          team: "Inter Miami",
          nationality: "Argentina",
          position: "Forward",
          ststistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65
          }
        },
        {
          id: 2,
          name: "Kylian Mbappé",
          team: "PSG",
          nationality: "France",
          position: "Forward",
          ststistics: {
            Overall: 92,
            Pace: 97,
            Shooting: 89,
            Passing: 80,
            Dribbling: 92,
            Defending: 36,
            Physical: 78
          }
        },
        {
          id: 3,
          name: "Erling Haaland",
          team: "Manchester City",
          nationality: "Norway",
          position: "Forward",
          ststistics: {
            Overall: 91,
            Pace: 89,
            Shooting: 94,
            Passing: 76,
            Dribbling: 80,
            Defending: 45,
            Physical: 88
          }
        },
        {
          id: 4,
          name: "Kevin De Bruyne",
          team: "Manchester City",
          nationality: "Belgium",
          position: "Midfielder",
          ststistics: {
            Overall: 91,
            Pace: 74,
            Shooting: 86,
            Passing: 94,
            Dribbling: 87,
            Defending: 64,
            Physical: 78
          }
        },
        {
          id: 5,
          name: "Karim Benzema",
          team: "Al-Ittihad",
          nationality: "France",
          position: "Forward",
          ststistics: {
            Overall: 90,
            Pace: 79,
            Shooting: 92,
            Passing: 83,
            Dribbling: 87,
            Defending: 39,
            Physical: 78
          }
        },
        {
          id: 6,
          name: "Robert Lewandowski",
          team: "Barcelona",
          nationality: "Poland",
          position: "Forward",
          ststistics: {
            Overall: 91,
            Pace: 78,
            Shooting: 93,
            Passing: 77,
            Dribbling: 85,
            Defending: 45,
            Physical: 82
          }
        },
        {
          id: 7,
          name: "Mohamed Salah",
          team: "Liverpool",
          nationality: "Egypt",
          position: "Forward",
          ststistics: {
            Overall: 90,
            Pace: 90,
            Shooting: 86,
            Passing: 82,
            Dribbling: 90,
            Defending: 45,
            Physical: 75
          }
        },
        {
          id: 8,
          name: "Neymar Jr",
          team: "Al-Hilal",
          nationality: "Brazil",
          position: "Forward",
          ststistics: {
            Overall: 89,
            Pace: 87,
            Shooting: 83,
            Passing: 87,
            Dribbling: 93,
            Defending: 38,
            Physical: 60
          }
        },
        {
          id: 9,
          name: "Virgil van Dijk",
          team: "Liverpool",
          nationality: "Netherlands",
          position: "Defender",
          ststistics: {
            Overall: 90,
            Pace: 78,
            Shooting: 60,
            Passing: 71,
            Dribbling: 72,
            Defending: 91,
            Physical: 86
          }
        },
        {
          id: 10,
          name: "Luka Modrić",
          team: "Real Madrid",
          nationality: "Croatia",
          position: "Midfielder",
          ststistics: {
            Overall: 89,
            Pace: 74,
            Shooting: 76,
            Passing: 89,
            Dribbling: 89,
            Defending: 72,
            Physical: 68
          }
        },
        {
          id: 11,
          name: "Cristiano Ronaldo",
          team: "Al-Nassr",
          nationality: "Portugal",
          position: "Forward",
          ststistics: {
            Overall: 89,
            Pace: 84,
            Shooting: 93,
            Passing: 78,
            Dribbling: 85,
            Defending: 35,
            Physical: 77
          }
        },
        {
          id: 12,
          name: "Thibaut Courtois",
          team: "Real Madrid",
          nationality: "Belgium",
          position: "Goalkeeper",
          ststistics: {
            Overall: 90,
            Pace: 43,
            Shooting: 25,
            Passing: 41,
            Dribbling: 32,
            Defending: 18,
            Physical: 82
          }
        },
        {
          id: 13,
          name: "Harry Kane",
          team: "Bayern Munich",
          nationality: "England",
          position: "Forward",
          ststistics: {
            Overall: 90,
            Pace: 72,
            Shooting: 93,
            Passing: 83,
            Dribbling: 83,
            Defending: 48,
            Physical: 82
          }
        },
        {
          id: 14,
          name: "Jude Bellingham",
          team: "Real Madrid",
          nationality: "England",
          position: "Midfielder",
          ststistics: {
            Overall: 87,
            Pace: 82,
            Shooting: 80,
            Passing: 82,
            Dribbling: 86,
            Defending: 78,
            Physical: 84
          }
        },
        {
          id: 15,
          name: "Casemiro",
          team: "Manchester United",
          nationality: "Brazil",
          position: "Midfielder",
          ststistics: {
            Overall: 89,
            Pace: 63,
            Shooting: 72,
            Passing: 75,
            Dribbling: 73,
            Defending: 88,
            Physical: 87
          }
        },
        {
          id: 16,
          name: "Joshua Kimmich",
          team: "Bayern Munich",
          nationality: "Germany",
          position: "Midfielder",
          ststistics: {
            Overall: 88,
            Pace: 68,
            Shooting: 74,
            Passing: 89,
            Dribbling: 84,
            Defending: 83,
            Physical: 78
          }
        },
        {
          id: 17,
          name: "Marc-André ter Stegen",
          team: "Barcelona",
          nationality: "Germany",
          position: "Goalkeeper",
          ststistics: {
            Overall: 89,
            Pace: 42,
            Shooting: 25,
            Passing: 40,
            Dribbling: 34,
            Defending: 18,
            Physical: 83
          }
        },
        {
          id: 18,
          name: "Rúben Dias",
          team: "Manchester City",
          nationality: "Portugal",
          position: "Defender",
          ststistics: {
            Overall: 88,
            Pace: 70,
            Shooting: 50,
            Passing: 73,
            Dribbling: 68,
            Defending: 88,
            Physical: 85
          }
        },
        {
          id: 19,
          name: "Vinícius Jr.",
          team: "Real Madrid",
          nationality: "Brazil",
          position: "Forward",
          ststistics: {
            Overall: 89,
            Pace: 95,
            Shooting: 83,
            Passing: 77,
            Dribbling: 90,
            Defending: 36,
            Physical: 70
          }
        },
        {
          id: 20,
          name: "Pedri",
          team: "Barcelona",
          nationality: "Spain",
          position: "Midfielder",
          ststistics: {
            Overall: 87,
            Pace: 79,
            Shooting: 72,
            Passing: 85,
            Dribbling: 88,
            Defending: 65,
            Physical: 68
          }
        },
        {
          id: 21,
          name: "Rodri",
          team: "Manchester City",
          nationality: "Spain",
          position: "Midfielder",
          ststistics: {
            Overall: 89,
            Pace: 66,
            Shooting: 75,
            Passing: 85,
            Dribbling: 80,
            Defending: 85,
            Physical: 84
          }
        },
        {
          id: 22,
          name: "Bruno Fernandes",
          team: "Manchester United",
          nationality: "Portugal",
          position: "Midfielder",
          ststistics: {
            Overall: 88,
            Pace: 74,
            Shooting: 83,
            Passing: 88,
            Dribbling: 85,
            Defending: 65,
            Physical: 76
          }
        },
        {
          id: 23,
          name: "Jan Oblak",
          team: "Atlético Madrid",
          nationality: "Slovenia",
          position: "Goalkeeper",
          ststistics: {
            Overall: 88,
            Pace: 45,
            Shooting: 24,
            Passing: 42,
            Dribbling: 35,
            Defending: 20,
            Physical: 84
          }
        },
        {
          id: 24,
          name: "João Cancelo",
          team: "Barcelona",
          nationality: "Portugal",
          position: "Defender",
          ststistics: {
            Overall: 87,
            Pace: 84,
            Shooting: 68,
            Passing: 82,
            Dribbling: 84,
            Defending: 79,
            Physical: 76
          }
        },
        {
          id: 25,
          name: "Bernardo Silva",
          team: "Manchester City",
          nationality: "Portugal",
          position: "Midfielder",
          ststistics: {
            Overall: 88,
            Pace: 78,
            Shooting: 79,
            Passing: 88,
            Dribbling: 91,
            Defending: 61,
            Physical: 70
          }
        }
      ];

export const findAllPlayers = async(): Promise<PlayerModel[]> =>{
    return database;
}

export const findPlayerById = async(id: number): Promise<PlayerModel | undefined> =>{
    return database.find( player => player.id ===id);
}