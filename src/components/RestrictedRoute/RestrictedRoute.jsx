import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return isLoggedIn ? <Navigate to={redirectTo} replace /> : Component; // replace запрещает возврат на предыдущую страницу. (удаляет из истории и кнопка назад в браузере не сработает)
};
