const calculateScore = (player) => {
  switch (player.position) {
    case 'QB':
      return calculateQBScore(player)
    case 'RB':
      return calculateRBScore(player)
    case 'WR':
      return calculateWRScore(player)
    case 'TE':
      return calculateTEScore(player)
    default:
      return 0
  }
}
const calculateQBScore = (player) => {
  let score = 0
  const passing = player.stats.passing
  const rushing = player.stats.rushing

  score += passing.yards / 25
  score += passing.touchdowns * 6
  score -= passing.interceptions * 3
  score += rushing.yards / 10
  score += rushing.touchdowns * 6
  score -= rushing.fumbles * 3

  return score
}
const calculateRBScore = (player) => {
  let score = 0
  const rushing = player.stats.rushing
  const receiving = player.stats.receiving

  score += rushing.yards / 10
  score += rushing.touchdowns * 6
  score -= rushing.fumbles * 3
  score += receiving.receptions * 1
  score += receiving.yards / 10
  score += receiving.touchdowns * 6
  score -= receiving.fumbles * 3

  return score
}
const calculateWRScore = (player) => {
  let score = 0
  const rushing = player.stats.rushing
  const receiving = player.stats.receiving
  const kickreturn = player.stats.return.kickreturn
  const puntreturn = player.stats.return.puntreturn

  score += rushing.yards / 10
  score += rushing.touchdowns * 6
  score -= rushing.fumbles * 3
  score += receiving.receptions * 1
  score += receiving.yards / 10
  score += receiving.touchdowns * 6
  score -= receiving.fumbles * 3
  score += kickreturn.yards / 15
  score += kickreturn.touchdowns * 1
  score -= kickreturn.fumbles * 3
  score += puntreturn.yards / 15
  score += puntreturn.touchdowns * 6
  score -= puntreturn.fumbles * 3

  return score
}
const calculateTEScore = (player) => {
  let score = 0
  const receiving = player.stats.receiving

  score += receiving.receptions / 1
  score += receiving.yards / 10
  score += receiving.touchdowns * 6
  score -= receiving.fumbles * 3

  return score
}










module.exports = calculateScore


