import {Coder} from './pages/editor'
import {Previewer} from './pages/previewer'

function App() {

  return (
<div
className="d-flex flex-column justify-content-center align-items-center"

  style={{
    backgroundColor: '#81A684',
    height: '100vh',
    width: '100vw',
  }}
>
  <div style={{ flex: 0.28 }}>
    <Coder />
  </div>
  <div style={{ flex: 1 }}>
    <Previewer />
  </div>
</div>
  )
}

export default App
