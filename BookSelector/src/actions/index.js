export function selectBook(book) {
  //selectBook is an action creator, needs to return an Action,
  // an object with a type property & payload
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
