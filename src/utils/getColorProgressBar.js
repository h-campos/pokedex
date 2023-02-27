export const getColorProgressBar = (value) => {
  if (value >= 65) {
    return '#2ecc71'
  } else if (value >= 30) {
    return '#e67e22'
  } else if (value < 30) {
    return '#e74c3c'
  }
}
