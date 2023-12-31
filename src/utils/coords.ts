// export let coords = [
//     "A1","A2","A3","A4","A5","A6",
//     "B1","B2","B3","B4","B5","B6",
//     "C1","C2","C3","C4","C5","C6",
//     "D1","D2","D3","D4","D5","D6",
//     "E1","E2","E3","E4","E5","E6",
//     "F1","F2","F3","F4","F5","F6",
// ]

export let coords: string[] = [
    "A1","B1","C1","D1","E1","F1",
    "A2","B2","C2","D2","E2","F2",
    "A3","B3","C3","D3","E3","F3",
    "A4","B4","C4","D4","E4","F4",
    "A5","B5","C5","D5","E5","F5",
    "A6","B6","C6","D6","E6","F6",
]

export const getRandomCoord = (prevCoords?: string[]): string | null => {
    
    if (prevCoords == undefined) {
        return coords[Math.floor(Math.random() * coords.length)];
    }

    const availableCoords = coords.filter(coord => !prevCoords.includes(coord));

    if (availableCoords.length === 0) {
      return null;
    }
  
    const randomIndex = Math.floor(Math.random() * availableCoords.length);
    return availableCoords[randomIndex];
}