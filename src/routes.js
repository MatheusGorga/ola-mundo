import Rodape from 'componentes/Rodape/Rodappe';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './componentes/Menu/Menu';
import Inicio from './paginas/inicio/Inicio';
import SobreMim from './paginas/SobreMim/SobreMim';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobremim' element={<SobreMim />} />
        <Route path='*' element={<div> Pagina não encontrada</div>} />
      </Routes>
      <Rodape />

    </BrowserRouter >

  )
}

export default AppRoutes;