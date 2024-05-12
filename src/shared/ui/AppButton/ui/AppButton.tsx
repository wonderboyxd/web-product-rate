import React from 'react';
import cls from './AppButton.scss'
import { classNames } from '@/shared/helpers/classNames/classNames';

interface AppButtonProps {
    className?: string;
}

export const AppButton: React.FC<AppButtonProps> = (props: AppButtonProps) => {
    const { className = '' } = props

    return (
        <div className={classNames(cls.appButton, {}, [className])}>
            
        </div>
    );
};
