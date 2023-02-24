import { useState } from 'react';
import { createBrowserRouter, useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import BurgerMenu from './components/elements/burgerMenu/BurgerMenu';
import NavBar from './components/elements/NavBar/NavBar';
import Error404 from './components/page/Error404';
import { routes } from './utils/utils';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Example />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
    errorElement: <Error404 />,
  },
]);

function Example() {
  const [activeMenu, setActiveMenu] = useState(false);
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {};
  const body = document.body;
  if (activeMenu) {
    body.classList.add('-lock');
  } else {
    body.classList.remove('-lock');
  }

  return (
    <>
      <NavBar routes={routes} active={activeMenu} setActive={setActiveMenu} />
      <div className="main-container">
        <BurgerMenu active={activeMenu} setActive={setActiveMenu} />
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit>
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}
