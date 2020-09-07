var judgeCircle = function(moves) {
  // UDLR
  let m = ["U", "D", "L", "R"];
  let v = [-1, 1, -2, 2];

  result = 0;

  for (let i = 0; i < moves.length; i++) {
    result += v[m.indexOf(moves[i])];
  }

  return result === 0;
};

judgeCircle("LRLR");
