import './App.css'
import DeleteConfirmer from './components/DeleteConfirmer/DeleteConfirmer'
import EditCard from './components/EditCard/EditCard'
import Table from './components/Table/Table'
import ViewCard from './components/ViewCard/ViewCard'
import { useControlStore } from './stores/useControlStore'

function App() {

  const {selectedDataToView, selectedDataToEdit} = useControlStore()

  return (
    <>
      <Table/>
      <ViewCard data={selectedDataToView}/>
      <EditCard data={selectedDataToEdit}/>
      <DeleteConfirmer/>
    </>
  )
}

export default App
