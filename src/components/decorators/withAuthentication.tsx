import {ComponentType, useCallback} from 'react';
import {Navigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import type {RootState} from '../../store';

import Loading from '../atoms/Loading';
import {getUserInfo} from '../../store/actions/generalActions';
import {setProfileLoading} from '../../store/slices/generalSlice/slice';
import useAsyncMount from '../../hooks/useAsyncMount';

function withAuthentication<P>(Component: ComponentType<P>) {
    return (props: P) => {
        const dispatch = useDispatch();
        const {profile, loading} = useSelector((store: RootState) => ({
            profile: store.general.profile,
            loading: store.general.loading,
        }));

        const getProfileInfo = useCallback(() => {
            if (!profile) {
                // @ts-ignore
                dispatch(getUserInfo());
                return () => dispatch(setProfileLoading(true));
            }
            return null;
        }, [profile, dispatch]);

        useAsyncMount(async () => {
            await getProfileInfo();
        });

        if (loading) {
            return <Loading/>;
        }

        if (profile) {
            return <Component {...props} userInfo={profile}/>;
        }
        return (
            <Navigate
                to={`/sign-in`}
                replace
            />
        );
    };
}

export default withAuthentication;
