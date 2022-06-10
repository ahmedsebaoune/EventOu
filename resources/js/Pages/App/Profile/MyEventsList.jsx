import {usePage} from "@inertiajs/inertia-react";

const MyEventList = () => {
    let {events} = usePage().props
    events = JSON.parse(events)
    return (
        <div className="col-md-9">
            <div className="dashboard-title   fl-wrap">
                <h3>Your Listings</h3>
            </div>
            {/* dashboard-list-box*/}
            <div className="dashboard-list-box  fl-wrap">
                {events.map(event =>
                    <div className="dashboard-list fl-wrap">
                        <div className="dashboard-message">
                            <div className="booking-list-contr">
                                <a
                                    href="#"
                                    className="color-bg tolt"
                                    data-microtip-position="left"
                                    data-tooltip="Edit"
                                >
                                    <i className="fal fa-edit"/>
                                </a>
                                <a
                                    href="#"
                                    className="red-bg tolt"
                                    data-microtip-position="left"
                                    data-tooltip="Delete"
                                >
                                    <i className="fal fa-trash"/>
                                </a>
                            </div>
                            <div className="dashboard-message-text">
                                <img src="images/all/1.jpg" alt=""/>
                                <h4>
                                    <a href="listing-single.html">{event.name}</a>
                                </h4>
                                <div className="geodir-category-location clearfix">
                                    <a href="#"> 40 Journal Square Plaza, NJ, USA</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
            {/* dashboard-list-box end*/}
            <div className="pagination">
                <a href="#" className="prevposts-link">
                    <i className="fas fa-caret-left"/>
                    <span>Prev</span>
                </a>
                <a href="#">1</a>
                <a href="#" className="current-page">
                    2
                </a>
                <a href="#">3</a>
                <a href="#">...</a>
                <a href="#">7</a>
                <a href="#" className="nextposts-link">
                    <span>Next</span>
                    <i className="fas fa-caret-right"/>
                </a>
            </div>
        </div>

    )
}


export default MyEventList
