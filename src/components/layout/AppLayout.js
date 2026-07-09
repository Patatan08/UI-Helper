import { Outlet } from 'react-router-dom';
import Navigator from 'components/navigator/Navigator';
import MenuLayout from './menuLayout/MenuLayout';
import { useScreenSizeClass } from '../../helpers/utils/media-query';
import Spinner from 'components/spinner/Spinner';
import Error from 'components/error/Error';

const AppLayout = () => {
    const screenSizeClass = useScreenSizeClass();
    return (
        <>
            <main className={`app ${screenSizeClass} dx-theme-background-color`}>
                <MenuLayout>
                    <Outlet />
                </MenuLayout>
            </main>
            <Error />
            <Spinner />
            <Navigator />
        </>
    )
}

export default AppLayout