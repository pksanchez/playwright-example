export const Mocks = {
    getLaunches: {
        "data": {
            "launchesPastResult": {
                "result": {
                    "totalCount": 109,
                    "__typename": "Result"
                },
                "data": [{
                    "id": "109",
                    "mission_name": "Starlink-15 (v1.0)",
                    "__typename": "Launch"
                }, {
                    "id": "108",
                    "mission_name": "Sentinel-6 Michael Freilich",
                    "__typename": "Launch"
                }, {
                    "id": "107",
                    "mission_name": "Crew-1",
                    "__typename": "Launch"
                }, {
                    "id": "106",
                    "mission_name": "GPS III SV04 (Sacagawea)",
                    "__typename": "Launch"
                }, {
                    "id": "105",
                    "mission_name": "Starlink-14 (v1.0)",
                    "__typename": "Launch"
                }],
                "__typename": "LaunchesPastResult"
            }
        }
    },
    getRockets: {
        "data": {
            "rocketsResult": {
                "result": {
                    "totalCount": 4,
                    "__typename": "Result"
                },
                "data": [{
                    "id": "falcon1",
                    "name": "Falcon 1",
                    "__typename": "Rocket"
                }, {
                    "id": "falcon9",
                    "name": "Falcon 9",
                    "__typename": "Rocket"
                }, {
                    "id": "falconheavy",
                    "name": "Falcon Heavy",
                    "__typename": "Rocket"
                }, {
                    "id": "starship",
                    "name": "Starship",
                    "__typename": "Rocket"
                }],
                "__typename": "RocketsResult"
            }
        }
    }
}