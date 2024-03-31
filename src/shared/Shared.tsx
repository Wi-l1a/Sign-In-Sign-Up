import { motion } from 'framer-motion';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import cn from 'clsx';
import s from './Shared.module.sass'

export const AnimatedRoute = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();

    const animations = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    return (
        <div style={{ overflowX: 'hidden' }}>
            <motion.div
                key={location.pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={animations}
                transition={{ duration: 0.5 }}
                style={{ width: '100vw', overflowX: 'hidden' }}
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

