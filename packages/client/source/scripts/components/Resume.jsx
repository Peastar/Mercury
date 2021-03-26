import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

import style from '../../styles/scss/main.scss';
import en from '../../pdf/resume_e_Mar21.pdf';
import ja from '../../pdf/resume_j_Mar21.pdf';

const Resume = () => {
    const [active, setActive] = useState(0);
    const handleClick = (e) => {
        const index = parseInt(e.target.id, 2);
        if (index !== active) {
            setActive(index);
        }
    };
    return (
        <div className={style.h100}>
            <div className={style.tabs}>
                <div
                    className={
                        active === 0
                            ? [style.tab, style.active].join(' ')
                            : style.tab
                    }>
                    <input
                        type="radio"
                        id="0"
                        name="resume"
                        onClick={handleClick}
                    />
                    <label htmlFor="0">english</label>
                </div>
                <div
                    className={
                        active === 1
                            ? [style.tab, style.active].join(' ')
                            : style.tab
                    }>
                    <input
                        type="radio"
                        id="1"
                        name="resume"
                        onClick={handleClick}
                    />
                    <label htmlFor="1">japanese</label>
                </div>
            </div>
            <div className={style.content}>
                {active === 0 ? (
                    <object
                        data={en}
                        type={'application/pdf'}
                        width={'100%'}
                        height={'100%'}
                    />
                ) : (
                    <object
                        data={ja}
                        type={'application/pdf'}
                        width={'100%'}
                        height={'100%'}
                    />
                )}
            </div>
        </div>
    );
};

export default withRouter(Resume);
