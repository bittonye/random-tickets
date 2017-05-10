/***
 * Tickets reducer
 * used to reduce ticket action in-order to change the application state
 *
 * @author: Yehonatan Bitton
 *
 */
export const tickets = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_TICKETS':
      return payload;
    case 'CREATE_TICKET':
      return [...state, payload];
    case 'UPDATE_TICKET':
      return state.map(ticket => {
        return ticket.id === payload.id ? Object.assign({}, ticket, payload) : ticket;
      });
    case 'DELETE_TICKET':
      return state.filter(ticket => {
        return ticket.id !== payload.id;
      });
    default:
      return state;
  }
};