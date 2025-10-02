let y = 0;
let x = 0;
let path = "TBLRLRLRLTRLLRBTRLRLTBLRLTRLTRLLBTTRLTRLTRLLBRLTRLTRLBRLTBLTRLBTLLBTRLBTLBTLBTLBTRLLBTRLBTRLBTRLTRLBTRLTRLTRLLTRLBLBLTLRTRLRLBLTRLTRLBRTLTLLRLTRBBRLLBRLRLTLTRTLTRLBLTLRLTRLTRLBLTRLTLBRTLTRLBTLTLLBTLBTRLBTLTLBTRLBTLRBTRLTLRBTLLBTR";

for (let i = 0; i < path.length; i++) {
  if (path[i] === "T") {
    y++;
  } else if (path[i] === "B") {
    y--;
  } else if (path[i] === "L") {
    x--;
  } else if (path[i] === "R") {
    x++;
  }
}

console.log(`Final coordinates: (${x}, ${y})`);

//36.4