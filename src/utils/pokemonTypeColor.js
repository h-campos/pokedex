export const getPokemonTypeColor = (type) => {
  switch (type) {
    case 'normal':
      return '#95a5a6'
    case 'fighting':
      return '#d35400'
    case 'flying':
      return '#2980b9'
    case 'poison':
      return '#9b59b6'
    case 'ground':
      return '#e17055'
    case 'rock':
      return '#cd6133'
    case 'bug':
      return '#63cdda'
    case 'ghost':
      return '#aaa69d'
    case 'steel':
      return '#81847a'
    case 'fire':
      return '#ff5252'
    case 'water':
      return '#34ace0'
    case 'grass':
      return '#44bd32'
    case 'electric':
      return '#fbc531'
    case 'psychic':
      return '#8c7ae6'
    case 'ice':
      return '#67e6dc'
    case 'dragon':
      return '#706fd3'
    case 'dark':
      return '#2c2c54'
    case 'fairy':
      return '#f78fb3'
    case 'shadow':
      return '#303952'
    default:
      break
  }
}
