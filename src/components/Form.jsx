import { useState } from "react"

import { Alert } from "./Alert"


const Form = ({ sendData }) => {

    const [movie, setMovie] = useState("");

    const [rating, setRating] = useState("");

    const [duration, setDuration] = useState("");

    const [alert, setAlert] = useState(null);


    // const [allEntry, setAllEntry] = useState([]);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {

            setAlert(null);

        }, 2000)
    }

    const SubmitForm = (e) => {
        e.preventDefault();
        var decimal = /^[-+]?[0-9]+\.[0-9]+$/;

        if (duration.match(decimal)) {
            const newEntry = {
                movie: movie,
                rating: rating,
                duration: duration,
            }

            showAlert("movie added in the list", "success")

            sendData(newEntry);
        }
        else {
            // setAlert("input atleast 5 digit long")
            showAlert("please put duration in decimal number", "danger")
        }

        // setAllEntry({ ...allEntry, newEntry });

    }
    // console.log(allEntry)

    return (
        <>
            <div>
                <Alert alert={alert} />
                <h2>Movie</h2>
                <form onSubmit={SubmitForm}>
                    <input type="text" placeholder="movie name" name="movie" id="movie" value={movie} onChange={(e) => setMovie(e.target.value)} /> <br /><br />

                    <input type="number" maxlength="2" min="0" max="99" placeholder="rating" name="rating" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} /> <br /><br />

                    <input type="text" placeholder="duration" name="duration" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} /><br /><br />

                    <button type="submit">Add Movie</button>
                </form>

            </div>
            {/* <div className="right">
                <Show data={allEntry} />
            </div> */}
        </>

    )
}

export default Form