import { createContext } from 'react';

const CurrentUser = createContext({ _id: '', name: '', email: '' });
export default CurrentUser;
