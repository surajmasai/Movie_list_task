
const Show = ({ list }) => {



    // console.log(list, "sd");

    return (
        <div>
            <h1>show data</h1>
            {list.map((e) =>
                <div className="showLists">
                    <h3 className="movie-title">{e.movie} <span className="movie-rating">{e.rating}</span></h3>
                    <p>{e.duration + "hr"}</p>
                </div>
            )}
        </div>
    )
}

export default Show

