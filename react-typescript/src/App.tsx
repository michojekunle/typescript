import './App.css'
import { Greet } from './components/Greet'

function App() {

  return (
    <div className='app'>
        <Greet name="hello" messageCount={20} isLoggedIn={true}/>
    </div>
  )
}

export default App
// BASIC & ADVANCED PROPS
// DISCRIMINATED UNIONS
// COMPONENTS AS PROPS
// GENERICS
// RESTRICTING PROPS
// TEMPLATE LITERALS & EXCLUDE
// WRAPPING HTML & OMIT
// EXTRACTING COMPONENT PROP TYPES
// POLYMORPHIC COMPONENTS