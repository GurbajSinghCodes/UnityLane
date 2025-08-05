import React, { useEffect, useState } from 'react'
import '@styles/form.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { toast } from 'react-toastify'
import { Country, State, City } from 'country-state-city';
const backend = import.meta.env.VITE_BACKEND
const Register = () => {
    const { register,
        watch,
        setValue,
        formState: { errors, isSubmitting },
        handleSubmit,
        reset
    } = useForm();
    const selectedCountry = watch('country');
    useEffect(() => {
        setValue('country', 'IN');
    }, []);


    const selectedState = watch('state')
    const countries = Country.getAllCountries();
    const [states, setstates] = useState([])
    const [cities, setcities] = useState([])
    useEffect(() => {
        setstates(State.getStatesOfCountry(selectedCountry))
        setValue('state', "")
        setValue("city", "")

    }, [selectedCountry])

    useEffect(() => {
        if (selectedCountry && selectedState) {

            const cityList = City.getCitiesOfState(selectedCountry, selectedState)
            setcities(cityList)
            setValue('city', "")
        }
    }, [selectedCountry, selectedState])

    const submitData = async (data) => {
        try {
            const res = await axios.post(`${backend}/api/register`, data)
            if (res.data.success) {
                toast.success(res.data.message)
                reset()
            }
            else {
                toast.error(res.data.message)
            }
        }
        catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.message || "Something went wrong")

            }
            else {
                toast.error("Network error")
            }
        }
    }
    return (
        <div className='register'>
            <form onSubmit={handleSubmit(submitData)}>
                <h2>Volunteer Details</h2>

                <div className='inputWrapper'>

                    <input
                        placeholder='Enter fullname'
                        className={`inputs ${errors.fullname ? 'inputError' : ""} `}
                        {...register("fullname", { required: { value: true, message: "This field is required" } })}
                        type="text
                        " />
                    {errors.fullname && <div className='errors'>{errors.fullname.message}</div>}
                </div>
                <div className='inputWrapper'>

                    <select
                        className={`inputs ${errors.country ? 'inputError' : ""} `}
                        {...register("country", {
                            required: {
                                value: true,
                                message: "This field is required"
                            }
                        })} >
                        <option value="">---Select Country---</option>

                        {countries.map((country) => (
                            <option key={country.isoCode} value={country.isoCode}>{country.name}</option>

                        ))}
                    </select>
                    {errors.country && <div className='errors'>{errors.country.message}</div>}
                </div>
                <div className='flex'>

                    <div className='inputWrapper'>

                        <select
                            className={`inputs ${errors.state ? 'inputError' : ""} `} {...register('state', {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                }
                            })}>
                            <option disabled={true} value="">---Select State---</option>
                            {states.map((state) => (
                                <option value={state.isoCode} key={state.isoCode}>{state.name}</option>
                            ))}
                        </select>
                        {errors.state && <div className='errors'>{errors.state.message}</div>}

                    </div>
                    <div className='inputWrapper'>

                        <select
                            className={`inputs ${errors.city ? 'inputError' : ""} `} {...register("city", {
                                required: {
                                    value: true,
                                    message: "This field is required"
                                }
                            })}>
                            <option disabled={true} value="">---Select City---</option>
                            {cities.map((city, index) => (
                                <option value={city.name} key={index}>{city.name}</option>
                            ))}
                        </select>
                        {errors.city && <div className='errors'>{errors.city.message}</div>}
                    </div>
                </div>

                <div className='inputWrapper'>

                    <input
                        type='text'
                        placeholder='Contact number'
                        inputMode="numeric"
                        pattern="[0-9]*"
                        className={`inputs ${errors.phone ? 'inputError' : ""} `}
                        {...register('phone', {
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Enter a valid contact number"
                            }

                        })}
                        onKeyDown={(e) => {
                            if (
                                ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
                            ) {
                                return;
                            }
                            if (!/^[0-9]$/.test(e.key)) {
                                e.preventDefault();
                            }
                        }}
                    />
                    {errors.phone && <div className='errors'>{errors.phone.message}</div>}
                </div>
                <div className='inputWrapper'>

                    <input
                        type='email'
                        placeholder='Enter email'

                        className={`inputs ${errors.email ? 'inputError' : ""} `}
                        {...register('email', {
                            required: {
                                value: true,
                                message: "This field is required"
                            }
                        })}

                    />
                    {errors.email && <div className='errors'>{errors.email.message}</div>}
                </div>
                <div className='buttons flex'>

                    <button type="submit" className='submit' > {isSubmitting ? "Submitting" : "Submit "}</button>
                    <button type='reset' className='reset' onClick={reset}>Reset</button>
                </div>
            </form>

        </div >
    )
}

export default Register