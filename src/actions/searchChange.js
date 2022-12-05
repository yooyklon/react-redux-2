export default function searchChange(value) {
  return {
    type: "SEARCH_CHANGE_WIDGET",
    payload: { searchValue: value },
  }
}