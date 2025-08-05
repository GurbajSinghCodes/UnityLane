import React from 'react'
import { toast } from 'react-toastify'
import style from "@/styles/admin.module.css"
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { use } from 'react'
const backend = import.meta.env.VITE_BACKEND

const Admin = () => {
    const {
        reset,
        handleSubmit,
        register,
        formState: { isSubmitting, errors }
    } = useForm();
    const navigate = useNavigate();
    const verifyCredentials = async (data) => {
        try {
            const res = await axios.post(`${backend}/api/admin`, data)
            if (res.data.success) {
                toast.success(res.data.message)
                localStorage.setItem("adminToken", res.data.token)
                setTimeout(() => {
                    navigate('dashboard')
                }, 1000);
            }
            else {
                toast.error(res.data.message)
            }
        }
        catch (error) {
            toast.error("Internal server error")
        }


    }
    return (
        <div className="admin">

            <form onSubmit={handleSubmit(verifyCredentials)}>
                <h2>Admin Login</h2>
                <div className="inputWrapper">
                    <input
                        className={`inputs ${errors.username ? "inputError" : ""}`}
                        {...register('username',
                            {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                }
                            })}
                        type="text"
                        placeholder='Enter username' />
                    {errors.username && <div className='errors'>{errors.username.message}</div>}
                </div>
                <div className="inputWrapper">
                    <input
                        className={`inputs ${errors.password ? "inputError" : ""}`}
                        {...register('password',
                            {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                }
                            })}
                        type="text"
                        placeholder='Enter password' />
                    {errors.password && <div className='errors'>{errors.password.message}</div>}
                </div>
                <div className="buttons flex">

                    <button disabled={isSubmitting} className='submit' type="submit">{(isSubmitting) ? "Submitting" : "Submit"}</button>
                    <button className='reset' type="reset" onClick={reset}>Reset</button>
                </div>
            </form >
            <p style={{ position: "fixed", bottom: "10px", right: "10px", fontSize: "14px", color: "#888" }}>
                <strong>Demo Admin Login:</strong> <br />
                Email: <code>admin@demo</code> <br />
                Password: <code>admin123</code>
            </p>

        </div >

    )
}

export default Admin