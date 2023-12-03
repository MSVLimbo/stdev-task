import {Navigate, Route, Routes} from 'react-router-dom';

// import { ComponentType, lazy } from 'react';
import {ComponentType, lazy} from 'react';

// import withAuthentication from '../../decorators/withAuthentication';
import withSuspense from '../../decorators/withSuspense';

// import compose from '../../../utils/compose';
import useStyles from './styles';
import IMain from './types';
import {useSelector} from "react-redux";
import compose from "../../../utils/compose.ts";
import withAuthentication from "../../decorators/withAuthentication.tsx";

// /path/:dynamic-pathP
// /path/* all matching routes

const fns = () => [withAuthentication, withSuspense];

const AuthSignIn = withSuspense(lazy(() => import("../../pages/AuthSignIn")));
const Posts = withSuspense(lazy(() => import("../../pages/AllPosts")));
const AuthSignUp = withSuspense(lazy(() => import("../../pages/AuthSignUp")));
const PageNotFound = withSuspense(lazy(() => import("../../pages/PageNotFound")));

// Protected routes
const PostsPage = compose(...fns())(lazy(() => import('../../pages/Posts'))) as ComponentType;

/* eslint-disable no-empty-pattern */

// eslint-disable-next-line sonarjs/cognitive-complexity
function Main({}: IMain) {
    const styles = useStyles();

    // @ts-ignore
    const {profile} = useSelector((state) => state.general)

    return (
        <main className={styles.root}>
            <Routes>
                <>
                    <Route path="/" element={<Navigate to={profile ? '/posts' : '/login'} replace/>}/>
                    <Route path="/login" element={<AuthSignIn/>}/>
                    <Route path="/register" element={<AuthSignUp/>}/>
                    <Route path='/posts' element={<PostsPage/>}>
                        <>
                            <Route index element={<Posts/>}/>
                        </>
                    </Route>
                    <Route path="/page-not-found" element={<PageNotFound/>}/>
                    <Route path="*" element={<Navigate to="/page-not-found"/>}/>
                </>
            </Routes>
        </main>
    );
}

export default Main;
