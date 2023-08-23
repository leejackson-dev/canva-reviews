export default function starHandler(rating: number): boolean[] {
  let starsArr: boolean[] = [];
  // Creates an array that reflects if the star should be gold or grey based on the overall score
  // The allowed range is minimum: 1, maximum: 5
  for (let i = 1; i < 6; i++) {
    i <= rating ? starsArr.push(true) : starsArr.push(false);
  }
  return starsArr;
}
