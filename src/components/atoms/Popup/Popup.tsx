import classNames from 'classnames';

import useStyles from './styles';
import IPopup from './types';

function Popup({
                   head,
                   body,
                   foot,
                   tabIndex = 0,
                   ariaLabel,
                   onClose,
                   handleSubmit,
                   className,
               }: IPopup) {
    const viewHeight = window.innerHeight;

    const styles = useStyles({hasHead: head, height: viewHeight <= 889 ? viewHeight : 889} as any);

    return (
        <div
            className={classNames(styles.root, className)}
            onKeyPress={handleSubmit}
            role="presentation"
        >
            {onClose && (
                <button
                    className={classNames(styles.button, styles.close)}
                    type="button"
                    tabIndex={tabIndex}
                    aria-label={ariaLabel}
                    onClick={onClose}
                >
                    <i className={classNames(styles.icon, 'ic-close-remove')}/>
                </button>
            )}
            <div className={styles.head}>{head}</div>
            {body && <div className={styles.body}>{body}</div>}
            <div className={styles.foot}>{foot}</div>
        </div>
    );
}

export default Popup;
