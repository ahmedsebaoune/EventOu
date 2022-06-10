const RegisterEvent = ()=> {
    return (
        <div className="box-widget-item fl-wrap block_box">
            <div className="box-widget-item-header">
                <h3>Register Now</h3>
            </div>
            <div className="box-widget">
                <div className="box-widget-content">
                    <form className="add-comment custom-form">
                        <fieldset>
                            <label>
                                <i className="fal fa-user"/>
                            </label>
                            <input type="text" placeholder="Your Name *" defaultValue=""/>
                            <div className="clearfix"/>
                            <label>
                                <i className="fal fa-envelope"/>
                            </label>
                            <input type="text" placeholder="Email Address *" defaultValue=""/>
                            <div className="clearfix"/>
                            <label>
                                <i className="fal fa-phone"/>
                            </label>
                            <input type="text" placeholder="Phone *" defaultValue=""/>
                            <div className="quantity fl-wrap">
            <span>
              <i className="fal fa-user-plus"/>
              Persons :{" "}
            </span>
                                <div className="quantity-item">
                                    <input type="button" defaultValue="-" className="minus"/>
                                    <input
                                        type="text"
                                        name="quantity"
                                        title="Qty"
                                        className="qty color-bg"
                                        data-min={1}
                                        data-max={3}
                                        data-step={1}
                                        defaultValue={1}
                                    />
                                    <input type="button" defaultValue="+" className="plus"/>
                                </div>
                            </div>
                            <textarea
                                cols={40}
                                rows={3}
                                placeholder="Additional Information:"
                                defaultValue={""}
                            />
                        </fieldset>
                        <button
                            className="btn color2-bg url_btn float-btn"
                            onClick="window.location.href='booking.html'"
                        >
                            Register Now <i className="fal fa-bookmark"/>
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default RegisterEvent
