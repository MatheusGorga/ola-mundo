import PaginaPadrao from 'componentes/PaginaPadrao/PaginaPadrao';
import Rodape from 'componentes/Rodape/Rodappe';
import NaoEncontrado from 'paginas/NaoEncontrado/NaoEncontrado';
import Post from 'paginas/Post/Post';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './componentes/Menu/Menu';
import Inicio from './paginas/inicio/Inicio';
import SobreMim from './paginas/SobreMim/SobreMim';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path='sobremim' element={<SobreMim />} />
          <Route path='posts/:id' element={<Post />} />
        </Route>

        {/* 
            Na rota '/', a estrutura a ser renderizada é: 
            <PaginaPadrao>
              <Inicio/>
            </PaginaPadrao>

            Na rota '/sobreMim', a estrutura a ser renderizada é: 
            <PaginaPadrao>
              <SobreMim/>
            </PaginaPadrao>
        */}

        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
      <Rodape />

    </BrowserRouter >

  )
}

export default AppRoutes;