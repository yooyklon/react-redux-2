import { nanoid } from 'nanoid';

const initialState = {
  form: {
    service: '',
    price: '',
    id: ''
  },
  list: [],
  search: '',
  searchList: []
};

export default function widgetReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_WIDGET_FORM_FIELD':
      const { name, value } = action.payload;
      return { ...state, form: { ...state.form, [name]: value } }
    case 'ADD_WIDGET_LIST_ITEM':
      const { service, price } = action.payload;
      if (service.trim() === '' || price.trim() === '') {
        return state;
      }
      state.form.service = '';
      state.form.price = '';

      return { ...state, list: [...state.list, { id: nanoid(), service, price }] };
    case 'REMOVE_WIDGET_LIST_ITEM':
      const { id } = action.payload;
      return { ...state, list: [...state.list.filter(el => el.id !== id)] };
    case 'EDIT_WIDGET_LIST_ITEM':
      const { currentId } = action.payload;
      state.form.id = currentId;
      const currentElement = state.list.find(el => el.id === currentId);
      return { ...state, list: state.list.filter(el => el.id !== currentId), form: { service: currentElement.service, price: currentElement.price } };
    case 'SEARCH_CHANGE_WIDGET':
      const { searchValue } = action.payload;
      return {
        ...state, search: searchValue
      }
    default:
      return state;
  }
}