/* eslint-disable no-unused-vars */

import { Companies, Data, Schema } from "@/lib/types";
import { create } from 'zustand'
import { Query } from "./useEditStore";

interface ControlStoreStates{
  
  schema: Schema | null
  data: (Data & {isDeleted: boolean})[]
  companies: Companies | null
  selectedDataToView: Data | null,
  selectedDataToEdit: Data | null,
  selectedDataToDelete: Data | null

  setSelectedDataToView: (input: Data | null) => void
  setSelectedDataToEdit: (input: Data | null) => void
  setSelectedDataToDelete: (input: Data | null) => void
  deleteData: (id: string) => void
  updateData: (id: string, input: Query) => void
  setSchema: (input: Schema) => void
  setData: (input: (Data & {isDeleted: boolean})[]) => void
  setCompanies:  (input: Companies) => void

  resetAllStates: () => void
}

export const useControlStore = create<ControlStoreStates>()((set) => ({
  data: [],
  schema: null,
  selectedDataToView: null,
  selectedDataToEdit: null,
  selectedDataToDelete: null,
  companies: null,

  setSelectedDataToDelete: (input) => set((state) => ({ ...state, selectedDataToDelete: input })),
  setSelectedDataToView: (input) => set((state) => ({ ...state, selectedDataToView: input })),
  setSelectedDataToEdit: (input) => set((state) => ({ ...state, selectedDataToEdit: input })),
  setCompanies: (input) => set((state) => ({ ...state, companies: input })),
  setSchema: (input) => set((state) => ({ ...state, schema: input })),
  setData: (input) => set((state) => ({ ...state, data: input })),
  deleteData: (id) => set((state) => {
    const updatedData = state.data.map((item) => {
      if (item.id === id) {
        return { ...item, isDeleted: true };
      }
      return item;
    });
  
    return {
      ...state,
      data: updatedData,
    };
  }),

  updateData: (id, input) => set((state) => {
    const updatedData = state.data.map((item) => {
      if (item.id === id) {
        return { ...item, ...input };
      }
      return item;
    });
  
    return {
      ...state,
      data: updatedData,
    };
  }),

  resetAllStates: () => set((state) => ({
    ...state,
    selectedDataToView: null,
    selectedDataToEdit: null,
    deletedDatas: []
  })),
}));