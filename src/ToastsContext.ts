import { ToastsHandle } from './types';
import { createContext, type RefObject } from 'react';

const ToastsContext = createContext<RefObject<ToastsHandle> | undefined>(undefined);
export default ToastsContext;
