import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import * as events from 'devextreme/events';
import { useLocation } from 'react-router';
import TreeView from 'devextreme-react/tree-view';
import { useScreenSize } from '../../../helpers/utils/media-query';
import './SideMenu.scss';
import SideMenuFooter from 'components/layout/sideMenu/sideMenuFooter/SideMenuFooter';

const navigation = [
  {
    text: 'Strona główna',
    path: '/index',
    icon: 'fa-solid fa-house',
    className: 'nav-main side-menu-row'
  },
  {
    text: 'Widok 1',
    path: '/view1',
    icon: 'fa-solid fa-address-card',
    className: 'nav-main side-menu-row'
  },
  {
    text: 'Widok 2',
    path: '/view2',
    icon: 'fa-solid fa-clipboard-list',
    className: 'nav-main side-menu-row'
  }
];


export default function SideMenu(props) {

  const {
    children,
    selectedItemChanged,
    openMenu,
    compactMode,
    onMenuReady
  } = props;

  const { isLarge } = useScreenSize();
  function normalizePath() {
    return navigation.map((item) => {
      const normalizedPath = item.path && !(/^\//.test(item.path)) ? `/${item.path}` : item.path;

      return {
        ...item,
        expanded: isLarge,
        path: normalizedPath
      };
    });
  }

  // rozwinięte wszystkie sekcje
  // function normalizePath() {
  //   return navigation.map((item) => (
  //     { ...item, expanded: isLarge, path: item.path && !(/^\//.test(item.path)) ? `/${item.path}` : item.path }
  //   ))
  // }

  const items = useMemo(
    normalizePath,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const location = useLocation();

  const treeViewRef = useRef(null);
  const wrapperRef = useRef();
  const getWrapperRef = useCallback((element) => {
    const prevElement = wrapperRef.current;
    if (prevElement) {
      events.off(prevElement, 'dxclick');
    }

    wrapperRef.current = element;
    events.on(element, 'dxclick', (e) => {
      openMenu(e);
    });
  }, [openMenu]);


  useEffect(() => {
    const treeView = treeViewRef.current && treeViewRef.current.instance();
    if (!treeView) {
      return;
    }

    if (location.pathname !== undefined) {
      const itemExists = items.some(item => item.path === location.pathname ||
        (item.items && item.items.some(subItem => subItem.path === location.pathname))
      );

      if (itemExists) {
        treeView.selectItem(location.pathname);
        treeView.expandItem(location.pathname);
      } else {
        treeView.unselectAll();
      }
    }

    if (compactMode) {
      treeView.collapseAll();
    }
  }, [location.pathname, compactMode, items]);

  const onItemRender = useCallback((item) => {
    return (
      <div className={item.className}>
        <i className={`${item.icon} col-4`}></i>
        <h3 className="col-8">{item.text}</h3>
      </div>
    )
  }, [])


  return (
    <div
      className={'dx-swatch-additional side-navigation-menu'}
      ref={getWrapperRef}
    >
      {children}
      <div className={'menu-container'}>
        <TreeView
          ref={treeViewRef}
          items={items}
          keyExpr={'path'}
          selectionMode={'single'}
          focusStateEnabled={false}
          expandEvent={'click'}
          onItemClick={selectedItemChanged}
          onContentReady={onMenuReady}
          width={'100%'}
          itemRender={onItemRender}
        />
        <div>
        </div>
        <SideMenuFooter />
      </div>
    </div>
  );
}
