/* eslint-disable no-unused-vars */

import { create } from 'zustand'

export interface Query {
  company: string;
  roles: string[];
  gender: string;
  fullname: string;
  mobile: string;
  description: string;
}

export const initialQuery: Query = {
  fullname:'',
  company:'',
  roles:[],
  gender:'',
  mobile:'',
  description:'',
}

export interface InputQuery{
  company?: string;
  roles?: string[];
  gender?: string;
  fullname?: string;
  mobile?: string;
  description?: string;
}


export type Queuer = (input: InputQuery) => void

interface EditStoreStates{
  
  query: Query,
  setQuery: (input: Query) => void
  queueQuery: Queuer

  resetAllStates: () => void
}

export const useEditStore = create<EditStoreStates>()((set) => ({
  
  query: initialQuery,
  setQuery: (input) => set((current) => ({ ...current, query: input })),
  queueQuery: (input) => set((current)=>{
    const { query } = current
    return ({  ...current,  query: {...query, ...input} })
  }),

  resetAllStates: () => set((state) => ({
    ...state,
    query: initialQuery,
  })),

}));