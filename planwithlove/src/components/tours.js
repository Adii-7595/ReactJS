import Card from "./Card";

function Tours({ tours, removeTour }) { // Destructure props

    return (
        <div>
            <div>
                <h2>Plan With Love</h2>
            </div>
            <div>
                {
                    tours.map((tour) => { // Ensure tours is an array
                        return <Card key={tour.id} {...tour} removeTour={removeTour} /> // Use `key` prop for unique identification
                    })
                }
            </div>
        </div>
    )
}

export default Tours;
