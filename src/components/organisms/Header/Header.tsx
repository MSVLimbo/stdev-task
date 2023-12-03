import {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';


import Link from '../../atoms/Link';

import useStyles from './styles';
import {getGeneralState} from "../../../store/slices/generalSlice/slice.ts";
import {ProductConfig} from "../../../config";
import noop from "../../../utils/noop.ts";
import ProfileButton from "../../molecules/ProfileButton";
import {IUserDto} from "../../../types/iUserDto.ts";

function Header() {
    const dispatch = useDispatch<any>();
    const {t} = useTranslation();
    const styles = useStyles();
    const {profile} = useSelector(getGeneralState);

    const handleLogout = async () => {
        const {signOut} = await import('../../../store/actions/generalActions.ts');

        dispatch(signOut())
    }

    return (
        <header className={styles.root}>
            <div className={styles.top}>
                <div className={classNames(styles.topSides, styles.topLeftSides)}>
                    <Link tabIndex={-1} className={styles.logoLink} href="/">
                        <img
                            className={styles.logo}
                            src={'/logo.svg'}
                            alt={`${t(ProductConfig.partnerAlias)} logo`}
                        />
                    </Link>
                </div>
                <div className={classNames(styles.topSides, styles.topRightSides)}>
                    <div className={styles.actions}>
                        <div className={'profile'}>
                            <ProfileButton
                                profileInfo={profile as IUserDto}
                                title={`${profile?.first_name || profile?.email?.[0]} ${
                                    profile?.last_name || '.'
                                }`}
                                onClick={noop}
                            />
                        </div>
                        <div className={styles.link}>
                            <button className={styles.logoLink} onClick={handleLogout}>
                                {t('header.logout.button')}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}

export default memo(Header);
