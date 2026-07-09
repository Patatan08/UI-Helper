import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectRedirect } from 'features/application/selectors';
import { setRedirect } from 'features/application/slice';

const Navigator = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const route = useSelector(selectRedirect);

    useEffect(() => {
        if (route === -1)
            navigate(-1);
        else if (route !== "")
            navigate(route);
        setTimeout(() => { dispatch(setRedirect("")); }, 500)
    }, [route])


    return null;
};

export default Navigator;