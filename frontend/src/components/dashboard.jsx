import React, { useState, useEffect, use } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import style from "@/styles/dashboard.module.css"
import { toast } from 'react-toastify'
import { City, State, Country } from 'country-state-city'
const backend = import.meta.env.VITE_BACKEND
const Dashboard = () => {
    const [volunteers, setVolunteers] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("adminToken")
                if (!token) {
                    navigate("/admin")
                    return
                }
                const res = await axios.get(`${backend}/api/admin/data`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                if (!res.data.success) {
                    toast.error("Access denied")
                }
                else {
                    setVolunteers(res.data.volunteersData)
                }
            }
            catch (err) {

                toast.error(err.response.data.message || "Something went wrong")
                if (err.response?.status === 401) {
                    localStorage.removeItem("adminToken");
                    navigate("/admin");
                }
            }

        }
        fetchData();
    }, [])
    const handleLogout = () => {
        localStorage.removeItem("adminToken")
        navigate("/admin")
    }
    return (
        <>
            <div className={style.logout}>
                <button onClick={handleLogout} className={style.logoutBtn}>Logout</button>
            </div>
            <div className={style.volunteerCards} >
                {volunteers.map((volunteer) => (
                    <div key={volunteer._id} className={style.volunteerCard}>
                        <div className={style.fullname}>{volunteer.fullname}</div>
                        <span className={style.address}>{volunteer.city}, {State.getStateByCodeAndCountry(volunteer.state, volunteer.country)?.name}, {Country.getCountryByCode(volunteer.country)?.name}</span>
                        <section className={style.contact}> Contact No. - {volunteer.phone}</section>
                        <section className={style.contact}>Email - {volunteer.email}</section>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Dashboard