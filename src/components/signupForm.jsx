import { useState } from "react";
import OutPut from "./outputForm";

export default function SignupForm() {
    const [participants, setParticipants] = useState([]);
    const [formData, setFormData] = useState({ name: "", email: "", number: "", birthdate: "" }); 

    const style = {
        formTitle:{
            fontSize: "0.7rem",
            textTransform: "uppercase",
            fontWeight: "bold",
            padding: "2rem 0 0.2rem 2rem"
        },
        eventName:{
            padding: "0.5rem 2rem"
        },
        eventDetails:{
            display: "flex",
            padding: "0.5rem 2rem",
        },
        eventDetailsImg:{
            paddingRight: "0.5rem"
        },
        formWrapper: {
            display: "flex",
            flexDirection: "row",
            position: "fixed",
            height: "35rem",
            width: "95vw",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
            transition: "width 0.5s ease",
        },
        formImage: {
            background: "url(../src/assets/img/2023.png)",
            minWidth: "60%",
            height: "40rem",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        },
        formContent: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            color: "black",
            width: "40%",
            height: "40rem",
            fontFamily: "'Roboto', sans-serif",
        },
        form: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "0.3rem 2rem",
            gap: "1rem",
        },
        formInput: {
            padding: "0.8rem",
            borderRadius: "5px",
            border: "1px solid lightgray",
            backgroundColor: "white",
            color: "black",
            outline: "none",
            fontSize: "1rem",
        },
        formSubmit: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "0.5rem",
            padding: "0.8rem",
            border: "none",
            borderRadius: "25px",
            backgroundColor: "#FF6B00",
            color: "white",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
        },
        formSubmitPlus: {
            width: "1rem",
            height: "1rem",
        },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setParticipants((prev) => [...prev, formData]);
        setFormData({ name: "", email: "", number: "", birthdate: "" });
    };

    const handleDelete = (index) => {
        setParticipants((prev) => prev.filter((_, i) => i !== index)); 
    };

    return (
        <div style={style.formWrapper}>
            {/* 2023 billede */}
            <div style={style.formImage}></div>

            {/* Indhold */}
            <div style={style.formContent}>
                <div>
                    <p style={style.formTitle}>Signup for the event</p>
                    <h3 style={style.eventName}>Orange Rabbit Festival 2023</h3>
                </div>
                <div style={style.eventDetails}>
                    <img
                        style={style.eventDetailsImg}
                        src="../src/assets/icons/calender.svg"
                        alt="calendar icon"
                    />
                    <p>24 June 2025 – 1 July 2025</p>
                </div>
                <div style={style.eventDetails}>
                    <img
                        style={style.eventDetailsImg}
                        src="../src/assets/icons/map.svg"
                        alt="map icon"
                    />
                    <p>Bunny Avenue 22, 2300, Rabbitkilde</p>
                </div>

                {/* Formular */}
                <form style={style.form} onSubmit={handleSubmit}>
                    <input
                        style={style.formInput}
                        placeholder="Full name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        style={style.formInput}
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        style={style.formInput}
                        placeholder="Phone"
                        name="number"
                        type="tel"
                        value={formData.number}
                        onChange={handleChange}
                    />
                    <input
                        style={style.formInput}
                        placeholder="Birthdate"
                        name="birthdate"
                        type="date"
                        value={formData.birthdate}
                        onChange={handleChange}
                    />
                    <button style={style.formSubmit} type="submit">
                        <p>Add participant</p>
                        <img
                            style={style.formSubmitPlus}
                            src="../src/assets/icons/plus.svg"
                            alt="plus icon"
                        />
                    </button>
                </form>
            </div>

            {participants.length > 0 && (
                <OutPut participants={participants} onDelete={handleDelete} />
            )}
        </div>
    );
}
