import React, { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router';
import Drawer from 'devextreme-react/drawer';
import ScrollView from 'devextreme-react/scroll-view';
import { Template } from 'devextreme-react/core/template';
import Header from '../header/Header';
import SideMenu from '../sideMenu/SideMenu';
import Footer from '../footer/Footer';
import { useScreenSize } from '../../../helpers/utils/media-query';
import { useMenuPatch } from '../../../helpers/utils/patches';
import * as configProvider from 'helpers/providers/configProvider';
import './MenuLayout.scss';

export default function MenuLayout({ children }) {
  const scrollViewRef = useRef(null);
  const navigate = useNavigate();
  const { isXSmall, isLarge } = useScreenSize();
  const [patchCssClass, onMenuReady] = useMenuPatch();
  const [menuStatus, setMenuStatus] = useState(
    isLarge ? MenuStatus.Opened : MenuStatus.Closed
  );

  const toggleMenu = useCallback(({ event }) => {
    setMenuStatus(
      prevMenuStatus => prevMenuStatus === MenuStatus.Closed
        ? MenuStatus.Opened
        : MenuStatus.Closed
    );
    event.stopPropagation();
  }, []);

  const temporaryOpenMenu = useCallback(() => {
    setMenuStatus(
      prevMenuStatus => prevMenuStatus === MenuStatus.Closed
        ? MenuStatus.TemporaryOpened
        : prevMenuStatus
    );
  }, []);

  const onOutsideClick = useCallback(() => {
    setMenuStatus(
      prevMenuStatus => prevMenuStatus !== MenuStatus.Closed && !isLarge
        ? MenuStatus.Closed
        : prevMenuStatus
    );
    return menuStatus === MenuStatus.Closed ? true : false;
  }, [isLarge, menuStatus]);

  const onNavigationChanged = useCallback(({ itemData, event, node }) => {

    if (menuStatus === MenuStatus.Closed || !itemData.path) { // || node.selected - usunięte aby umożliwić wejście w już aktywną ścieżkę
      event.preventDefault();
      return;
    }
    navigate(itemData.path);
    scrollViewRef.current.instance().scrollTo(0);

    if (!isLarge || menuStatus === MenuStatus.TemporaryOpened) {
      setMenuStatus(MenuStatus.Closed);
      event.stopPropagation();
    }
  }, [navigate, menuStatus, isLarge]);

  const title = configProvider.APP_NAME ? configProvider.APP_NAME : "MES";

  return (
    <div className={'side-nav-outer-toolbar'}>
      <Header
        menuToggleEnabled
        toggleMenu={toggleMenu}
        title={title}
      />
      <Drawer
        className={['drawer', patchCssClass].join(' ')}
        position={'before'}
        closeOnOutsideClick={onOutsideClick}
        openedStateMode={isLarge ? 'shrink' : 'overlap'}
        revealMode={isXSmall ? 'slide' : 'expand'}
        minSize={isXSmall ? 0 : 60}
        maxSize={200}
        shading={isLarge ? false : true}
        opened={menuStatus === MenuStatus.Closed ? false : true}
        template={'menu'}
      >
        <div className={'container dx-theme-background-color'}>
          <ScrollView ref={scrollViewRef} className={'layout-body with-footer dx-theme-fade-custom'}>
            <div className={'content'}>
              {children}
            </div>
            <div className={'content-block'}>
              <Footer />
            </div>
          </ScrollView>
        </div>
        <Template name={'menu'}>
          <SideMenu
            compactMode={menuStatus === MenuStatus.Closed}
            selectedItemChanged={onNavigationChanged}
            openMenu={temporaryOpenMenu}
            onMenuReady={onMenuReady}
          />
        </Template>
      </Drawer>
    </div>
  );
}

const MenuStatus = {
  Closed: 1,
  Opened: 2,
  TemporaryOpened: 3
};
