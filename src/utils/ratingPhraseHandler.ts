export default function ratingPhraseHandler(rating: number): string {
  // Takes in the score number and returns the correct phrase
  // The allowed range is minimum: 1, maximum: 5

  switch (rating) {
    case 1:
      return 'Not Good';
    case 2:
      return 'Work To Do';
    case 3:
      return 'OK';
    case 4:
      return 'Great';
    case 5:
      return 'Excellent';
    default:
      return '';
  }
}
