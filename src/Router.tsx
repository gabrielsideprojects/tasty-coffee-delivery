import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout/index.'

export function Router() {7


  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<h1>Teste 2</h1>} />
        <Route path="/cart" element={<h1>Teste 3</h1>} />
      </Route>
    </Routes>
  )
}
