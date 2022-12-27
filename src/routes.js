import PaginaPadrao from 'componentes/PaginaPadrao/PaginaPadrao';
import Rodape from 'componentes/Rodape/Rodappe';
import ScrollToTop from 'componentes/ScrollTop/ScrollTop';
import Inicio from 'paginas/Inicio/Inicio';
import NaoEncontrado from 'paginas/NaoEncontrado/NaoEncontrado';
import Post from 'paginas/Post/Post';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './componentes/Menu/Menu';
import SobreMim from './paginas/SobreMim/SobreMim';

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path='sobremim' element={<SobreMim />} />
        </Route>
        <Route path='posts/:id' element={<Post />} />

        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
      <Rodape />

    </BrowserRouter >

  )
}

export default AppRoutes;