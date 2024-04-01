import { motion } from 'framer-motion';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import cn from 'clsx';
import s from './Shared.module.sass'

export const AnimatedRoute = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();

    const getAnimations = (path: string) => {
        switch (path) {
            case '/sign-in':
                return {
                    initial: { opacity: 0, x: '-100vw', },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: '100vw' },
                };
            case '/sign-up':
            case '/forgot-password':
                return {
                    initial: { opacity: 0, x: '100vw' },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: '-100vw' },
                };
            default:
                return {
                    initial: { opacity: 0, x: 0 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: 0 },
                };
        }
    };

    const animations = getAnimations(location.pathname);

    return (
        <div style={{ overflowX: 'hidden' }}>
            <motion.div
                key={location.pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={animations}
                transition={{
                    when: "beforeChildren",
                    staggerChildren: 0.3,
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
}
export const NavLink = ({ to, children }: NavLinkProps) => (
    <RouterNavLink
        to={to}
        className={({ isActive }) => cn(s.nav_link, isActive && s.active)}>
        {children}
    </RouterNavLink>
);


interface InputProps {
    name: string;
    label: string;
    type: string
}
export const Input = ({ name, label, type }: InputProps) => {
    return (
        <div className={s.inputGroup}>
            <input
                required
                type={type}
                name={name}
                autoComplete="off"
                className={s.input}
            />
            <label className={s.userLabel}>{label}</label>
        </div>
    );
};


interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}>
            {children}
        </button>
    );
};
