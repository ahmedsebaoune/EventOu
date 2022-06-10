const EventHost = () => {
    return (
        <div className="box-widget-item fl-wrap block_box">
            <div className="box-widget-item-header">
                <h3>Hosted by : </h3>
            </div>
            <div className="box-widget">
                <div className="box-widget-author fl-wrap">
                    <div className="box-widget-author-title">
                        <div className="box-widget-author-title-img">
                            <img src="images/avatar/5.jpg" alt=""/>
                        </div>
                        <div className="box-widget-author-title_content">
                            <a href="user-single.html">Alisa Noory</a>
                            <span>4 Places Hosted</span>
                        </div>
                        <div className="box-widget-author-title_opt">
                            <a
                                href="user-single.html"
                                className="tolt green-bg"
                                data-microtip-position="top"
                                data-tooltip="View Profile"
                            >
                                <i className="fas fa-user"/>
                            </a>
                            <a
                                href="#"
                                className="tolt color-bg cwb"
                                data-microtip-position="top"
                                data-tooltip="Chat With Owner"
                            >
                                <i className="fas fa-comments-alt"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default EventHost
