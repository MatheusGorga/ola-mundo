import Banner from 'componentes/Banner/Banner';
import { Outlet } from 'react-router-dom';

function PaginaPadrao() {
  return (
    <main>
      <Banner />
      <Outlet />
      {/* Outlet serve para receber o component inserido no route */}
    </main>
  );
}

export default PaginaPadrao;
