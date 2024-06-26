import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import SignIn from "../pages/sign-in/SignIn";
import SignUp from "../pages/sign-up/SignUp";
import { AnimatedRoute } from "../shared/Shared";
import ForgotPassword from "../pages/forgot-password/ForgotPassword";


const Navigation = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location}>
                <Route path="/" element={<AnimatedRoute><SignIn /></AnimatedRoute>} />
                <Route path="/sign-in" element={<AnimatedRoute><SignIn /></AnimatedRoute>} />
                <Route path="/sign-up" element={<AnimatedRoute><SignUp /></AnimatedRoute>} />
                <Route path="/forgot-password" element={<AnimatedRoute><ForgotPassword /></AnimatedRoute>} />
            </Routes>
        </AnimatePresence>
    );
};

export default Navigation;
