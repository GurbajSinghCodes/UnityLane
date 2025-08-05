import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
const notFound = () => {
    const navigate = useNavigate()
    const [timer, setTimer] = useState(3)
    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "calc(100vh - 45px)",
        alignItems: "center",
        gap: "20px",
        fontFamily: "Libertinus sans"

    }
    useEffect(() => {
        if (timer === 0) return;
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0
                }
                return prev - 1;
            })
        }, 1000);

        return () => clearInterval(interval)
    }, [])
    useEffect(() => {
        timer === 0 && navigate("/")
    }, [timer])
    return (
        <div style={style}>
            <h2> Broken URL</h2>
            <span>Navigating to Homepage in {timer}s...</span>
            <NavLink style={{ textDecoration: "none" }} to="/">Or click here</NavLink>
        </div>

    )
}

export default notFound