export default function OutPut({ participants, onDelete }) {
    const style = {
        formOutput: {
            width: "35rem",
            height: "auto",
            backgroundColor: "white",
            marginLeft: "1rem",
            padding: "1rem",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            overflowY: "scroll",
            overflowX: "hidden",
            position: "relative"
        },
        participant: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.556rem 0",
            borderBottom: "1px solid lightgray",

        },
        deleteButton: {
            backgroundColor: "transparent",
            color: "none",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
        },
        title: {
            fontWeight: "bold",
            paddingBottom: "1rem",

            borderBottom: "1px dotted lightgray",
        },
        partName: {
            fontWeight: "bold"

        },
        partStuff:{
            textAlign: "left"

        },
        partStuffSpan:{
            textAlign: "right"
        },
        paybuttonDiv: {
            display: "flex",
            backgroundColor: "#FF6B00",
            width: "100%",
            height: "3rem",
            color: "white",
            justifyContent: "space-evenly",
            padding: "1rem 1.5rem",
            cursor: "pointer",
            position: "sticky",
            left: "0",
            scale: "1.3",
            translate: "0 1rem",
            gap: "4rem",
            
        },
        flex:{
            display: "flex",
            justifyContent: "space-between"
        }
    };

    return (
        <div style={style.formOutput}>
            <p style={style.title}>Your Participants {participants.amount}</p>
            {participants.map((participant, index) => (
                <div key={index} style={style.participant}>
                    <div>
                    <div style={style.flex}>
                        <p style={style.partName}>{participant.name}</p>
                        <button
                            style={style.deleteButton}
                            onClick={() => onDelete(index)}
                        >
                            <img src="../src/assets/icons/recylebin.svg" alt="" />
                        </button>
                    </div>
                        <p style={style.partStuff}>Birthdate:<span style={style.partStuffSpan}>{participant.birthdate}</span></p>
                        <p style={style.partStuff}>Email:<span style={style.partStuffSpan}>{participant.email}</span></p>
                        <p style={style.partStuff}>Phone Number:<span style={style.partStuffSpan}>{participant.number}</span></p>
                    </div>
                </div>
        ))}
            
                
            <div style={style.paybuttonDiv}>
                <p>Submit</p>
                <img src="../src/assets/icons/arrowright.svg" alt="" />
            </div>
        </div>
        
    );
}
