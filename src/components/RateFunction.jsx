export default function RateFunction({ voteaverage }) {
  const vote = Math.ceil(voteaverage / 2);

  const numStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= vote) {
        stars.push(<i className="fa-solid fa-star"></i>);
      } else {
        stars.push(<i className="fa-regular fa-star"></i>);
      }
    }
    return stars;
  };
  return numStars();
}
