import {useForm, usePage} from "@inertiajs/inertia-react";

import {FilePond, registerPlugin} from 'react-filepond';

import {useState} from 'react'
// Import FilePond styles
import 'filepond/dist/filepond.min.css';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'


// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)


const AddEvent = () => {

    // function later() {
    //     return new Promise(function (resolve) {
    //         setTimeout(resolve, 1000);
    //     });
    // }
    let {categories,errors:validationErrors} = usePage().props

    const [files, setFiles] = useState([]);
    categories = JSON.parse(categories);
    const {data, setData, post, processing, errors} = useForm({
        name: '',
        categorie: '',
        photo_path: ''
    })

    const server = {
        url: "/uploads",
        headers: {
            "X-CSRF-TOKEN": `${document.getElementById('meta_token').getAttribute('content')}`
        }
    }

    // const firstRenderRef = useRef(true)
    // useEffect(async () => {
    //     if (firstRenderRef.current) {
    //         firstRenderRef.current = false;
    //     } else {
    //         try {
    //             await setData('photo_path',$('input[name="myname"]').value)
    //
    //         } catch (e) {
    //             console.log('files changes but no photo path')
    //         }
    //     }
    // }, [files])


    const submit = (e) => {
        e.preventDefault()
        post("/profile/event/add", {
            preserveState: true,
            forceFormData: true,

        })
    }
    return (
        <div className="col-md-9">
            <form onSubmit={submit}>
                <div className="dashboard-title   fl-wrap">
                    <h3>Add Event</h3>
                </div>
                {/* profile-edit-container*/}
                <div className="profile-edit-container fl-wrap block_box">
                    {
                        validationErrors &&
                            <div className="red-bg_color">{validationErrors.name}</div>
                    }
                    <div className="custom-form">
                        <label>
                            Event Title <i className="fal fa-briefcase"/>
                        </label>
                        <input type="text" placeholder="Name of your business" value={data.name}
                               onChange={e => setData('name', e.target.value)}/>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Type / Category</label>
                                <div className="listsearch-input-item">
                                    <select
                                        data-placeholder="Apartments"
                                        className="chosen-select no-search-select"
                                        value={data.categorie} onChange={e => setData('categorie', e.target.value)}
                                    >
                                        <option>All Categories</option>
                                        {
                                            categories.map(cat => <option>{cat["name"]}</option>)
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label>
                                    Keywords <i className="fal fa-dollar-sign"/>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Maximum 15 , should be separated by commas"
                                    defaultValue=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/*/!* profile-edit-container end*!/*/}
                {/*<div className="dashboard-title  dt-inbox fl-wrap">*/}
                {/*    <h3>Location / Contacts</h3>*/}
                {/*</div>*/}
                {/*/!* profile-edit-container*!/*/}
                {/*<div className="profile-edit-container fl-wrap block_box">*/}
                {/*    <div className="custom-form">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-md-6">*/}
                {/*                <label>*/}
                {/*                    Longitude (Drag marker on the map)*/}
                {/*                    <i className="fal fa-long-arrow-alt-right" />*/}
                {/*                </label>*/}
                {/*                <input*/}
                {/*                    type="text"*/}
                {/*                    placeholder="Map Longitude"*/}
                {/*                    id="long"*/}
                {/*                    defaultValue=""*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*            <div className="col-md-6">*/}
                {/*                <label>*/}
                {/*                    Latitude (Drag marker on the map){" "}*/}
                {/*                    <i className="fal fa-long-arrow-alt-down" />{" "}*/}
                {/*                </label>*/}
                {/*                <input*/}
                {/*                    type="text"*/}
                {/*                    placeholder="Map Latitude"*/}
                {/*                    id="lat"*/}
                {/*                    defaultValue=""*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="map-container">*/}
                {/*            <div*/}
                {/*                id="singleMap"*/}
                {/*                className="drag-map"*/}
                {/*                data-latitude="40.7427837"*/}
                {/*                data-longitude="-73.11445617675781"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <label>City / Location</label>*/}
                {/*        <div className="listsearch-input-item">*/}
                {/*            <select*/}
                {/*                data-placeholder="City"*/}
                {/*                className="chosen-select no-search-select"*/}
                {/*            >*/}
                {/*                <option>All Cities</option>*/}
                {/*                <option>New York</option>*/}
                {/*                <option>London</option>*/}
                {/*                <option>Paris</option>*/}
                {/*                <option>Kiev</option>*/}
                {/*                <option>Moscow</option>*/}
                {/*                <option>Dubai</option>*/}
                {/*                <option>Rome</option>*/}
                {/*                <option>Beijing</option>*/}
                {/*            </select>*/}
                {/*        </div>*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-sm-6">*/}
                {/*                <label>*/}
                {/*                    Address*/}
                {/*                    <i className="fal fa-map-marker" />*/}
                {/*                </label>*/}
                {/*                <input*/}
                {/*                    type="text"*/}
                {/*                    placeholder="Address of your business"*/}
                {/*                    defaultValue=""*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*            <div className="col-sm-6">*/}
                {/*                <label>*/}
                {/*                    Email Address*/}
                {/*                    <i className="far fa-envelope" />*/}
                {/*                </label>*/}
                {/*                <input*/}
                {/*                    type="text"*/}
                {/*                    placeholder="JessieManrty@domain.com"*/}
                {/*                    defaultValue=""*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*            <div className="col-sm-6">*/}
                {/*                <label>*/}
                {/*                    Phone*/}
                {/*                    <i className="far fa-phone" />*/}
                {/*                </label>*/}
                {/*                <input type="text" placeholder="+7(123)987654" defaultValue="" />*/}
                {/*            </div>*/}
                {/*            <div className="col-sm-6">*/}
                {/*                <label>*/}
                {/*                    {" "}*/}
                {/*                    Website <i className="far fa-globe" />*/}
                {/*                </label>*/}
                {/*                <input type="text" placeholder="themeforest.net" defaultValue="" />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*/!* profile-edit-container end*!/*/}
                {/*<div className="dashboard-title  dt-inbox fl-wrap">*/}
                {/*    <h3>Header Media</h3>*/}
                {/*</div>*/}
                {/*/!* profile-edit-container*!/*/}
                {/*<div className="profile-edit-container fl-wrap block_box">*/}
                {/*    <div className="custom-form">*/}
                {/*        <div className="row">*/}
                {/*            /!*col *!/*/}
                {/*            <div className="col-md-4">*/}
                {/*                <div className="add-list-media-header" style={{ marginBottom: 20 }}>*/}
                {/*                    <label className="radio inline">*/}
                {/*                        <input type="radio" name="gender" defaultChecked="" />*/}
                {/*                        <span>Background image</span>*/}
                {/*                    </label>*/}
                {/*                </div>*/}
                {/*                <div className="add-list-media-wrap">*/}
                {/*                    <div className="add-list-media-wrap">*/}
                {/*                        <form className="fuzone">*/}
                {/*                            <div className="fu-text">*/}
                {/*      <span>*/}
                {/*        <i className="fal fa-image" /> Click here or drop files to*/}
                {/*        upload*/}
                {/*      </span>*/}
                {/*                            </div>*/}
                {/*                            <input type="file" className="upload" />*/}
                {/*                        </form>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            /!*col end*!/*/}
                {/*            /!*col *!/*/}
                {/*            <div className="col-md-4">*/}
                {/*                <div className="add-list-media-header" style={{ marginBottom: 20 }}>*/}
                {/*                    <label className="radio inline">*/}
                {/*                        <input type="radio" name="gender" />*/}
                {/*                        <span>Carousel</span>*/}
                {/*                    </label>*/}
                {/*                </div>*/}
                {/*                <div className="add-list-media-wrap">*/}
                {/*                    <form className="fuzone">*/}
                {/*                        <div className="fu-text">*/}
                {/*    <span>*/}
                {/*      <i className="fal fa-image" /> Click here or drop files to*/}
                {/*      upload*/}
                {/*    </span>*/}
                {/*                        </div>*/}
                {/*                        <input type="file" className="upload" />*/}
                {/*                    </form>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            /!*col end*!/*/}
                {/*            /!*col *!/*/}
                {/*            <div className="col-md-4">*/}
                {/*                <div className="add-list-media-header" style={{ marginBottom: 20 }}>*/}
                {/*                    <label className="radio inline">*/}
                {/*                        <input type="radio" name="gender" />*/}
                {/*                        <span>Video</span>*/}
                {/*                    </label>*/}
                {/*                </div>*/}
                {/*                <div className="add-list-media-wrap">*/}
                {/*                    <label>*/}
                {/*                        Youtube <i className="fab fa-youtube" />*/}
                {/*                    </label>*/}
                {/*                    <input*/}
                {/*                        type="text"*/}
                {/*                        placeholder="https://www.youtube.com/"*/}
                {/*                        defaultValue=""*/}
                {/*                    />*/}
                {/*                    <label>*/}
                {/*                        Vimeo <i className="fab fa-vimeo-v" />*/}
                {/*                    </label>*/}
                {/*                    <input*/}
                {/*                        type="text"*/}
                {/*                        placeholder="https://vimeo.com/"*/}
                {/*                        defaultValue=""*/}
                {/*                    />*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            /!*col end*!/*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*/!* profile-edit-container end*!/*/}
                {/*<div className="dashboard-title  dt-inbox fl-wrap">*/}
                {/*    <h3>Details</h3>*/}
                {/*</div>*/}
                {/*/!* profile-edit-container*!/*/}
                {/*<div className="profile-edit-container fl-wrap block_box">*/}
                {/*    <div className="custom-form">*/}
                {/*        <label>Text</label>*/}
                {/*        <textarea cols={40} rows={3} placeholder="Datails" defaultValue={""} />*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*/!* profile-edit-container end*!/*/}
                {/*<div className="dashboard-title  dt-inbox fl-wrap">*/}
                {/*    <h3>Facilities</h3>*/}
                {/*</div>*/}
                {/*/!* profile-edit-container*!/*/}
                {/*<div className="profile-edit-container fl-wrap block_box">*/}
                {/*    <div className="custom-form">*/}
                {/*        /!* Checkboxes *!/*/}
                {/*        <ul className="fl-wrap filter-tags no-list-style ds-tg">*/}
                {/*            <li>*/}
                {/*                <input*/}
                {/*                    id="check-aaa5"*/}
                {/*                    type="checkbox"*/}
                {/*                    name="check"*/}
                {/*                    defaultChecked=""*/}
                {/*                />*/}
                {/*                <label htmlFor="check-aaa5">Free WiFi</label>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <input*/}
                {/*                    id="check-bb5"*/}
                {/*                    type="checkbox"*/}
                {/*                    name="check"*/}
                {/*                    defaultChecked=""*/}
                {/*                />*/}
                {/*                <label htmlFor="check-bb5">Parking</label>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <input id="check-dd5" type="checkbox" name="check" />*/}
                {/*                <label htmlFor="check-dd5">Fitness Center</label>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <input id="check-cc5" type="checkbox" name="check" />*/}
                {/*                <label htmlFor="check-cc5">Non-smoking Rooms</label>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <input*/}
                {/*                    id="check-ff5"*/}
                {/*                    type="checkbox"*/}
                {/*                    name="check"*/}
                {/*                    defaultChecked=""*/}
                {/*                />*/}
                {/*                <label htmlFor="check-ff5">Airport Shuttle</label>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <input id="check-c4" type="checkbox" name="check" />*/}
                {/*                <label htmlFor="check-c4">Air Conditioning</label>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*        /!* Checkboxes end *!/*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*/!* profile-edit-container end*!/*/}
                {/*<div className="dashboard-title  dt-inbox fl-wrap">*/}
                {/*    <h3>Content Widgets</h3>*/}
                {/*</div>*/}
                {/*/!* profile-edit-container*!/*/}
                {/*<div className="profile-edit-container fl-wrap block_box">*/}
                {/*    <div className="custom-form">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-md-4">*/}
                {/*                /!* act-widget*!/*/}
                {/*                <div className="act-widget fl-wrap">*/}
                {/*                    <div className="act-widget-header">*/}
                {/*                        <h4>1. Promo video</h4>*/}
                {/*                        <div className="onoffswitch">*/}
                {/*                            <input*/}
                {/*                                type="checkbox"*/}
                {/*                                name="onoffswitch"*/}
                {/*                                className="onoffswitch-checkbox"*/}
                {/*                                id="myonoffswitch5"*/}
                {/*                                defaultChecked=""*/}
                {/*                            />*/}
                {/*                            <label className="onoffswitch-label" htmlFor="myonoffswitch5">*/}
                {/*                                <span className="onoffswitch-inner" />*/}
                {/*                                <span className="onoffswitch-switch" />*/}
                {/*                            </label>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="add-list-media-wrap">*/}
                {/*                        <label>*/}
                {/*                            Video url : <i className="fab fa-youtube" />*/}
                {/*                        </label>*/}
                {/*                        <input*/}
                {/*                            type="text"*/}
                {/*                            placeholder="https://www.youtube.com/"*/}
                {/*                            defaultValue=""*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                /!* act-widget end*!/*/}
                {/*            </div>*/}
                {/*            <div className="col-md-4">*/}
                {/*                /!* act-widget*!/*/}
                {/*                <div className="act-widget fl-wrap">*/}
                {/*                    <div className="act-widget-header">*/}
                {/*                        <h4>2. Gallery Thumbnails</h4>*/}
                {/*                        <div className="onoffswitch">*/}
                {/*                            <input*/}
                {/*                                type="checkbox"*/}
                {/*                                name="onoffswitch"*/}
                {/*                                className="onoffswitch-checkbox"*/}
                {/*                                id="myonoffswitch6"*/}
                {/*                                defaultChecked=""*/}
                {/*                            />*/}
                {/*                            <label className="onoffswitch-label" htmlFor="myonoffswitch6">*/}
                {/*                                <span className="onoffswitch-inner" />*/}
                {/*                                <span className="onoffswitch-switch" />*/}
                {/*                            </label>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="add-list-media-wrap">*/}
                {/*                        <form className="fuzone">*/}
                {/*                            <div className="fu-text">*/}
                {/*      <span>*/}
                {/*        <i className="fal fa-image" /> Click here or drop files to*/}
                {/*        upload*/}
                {/*      </span>*/}
                {/*                            </div>*/}
                {/*                            <input type="file" className="upload" />*/}
                {/*                        </form>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                /!* act-widget end*!/*/}
                {/*            </div>*/}
                {/*            <div className="col-md-4">*/}
                {/*                /!* act-widget*!/*/}
                {/*                <div className="act-widget fl-wrap">*/}
                {/*                    <div className="act-widget-header">*/}
                {/*                        <h4>3. Slider</h4>*/}
                {/*                        <div className="onoffswitch">*/}
                {/*                            <input*/}
                {/*                                type="checkbox"*/}
                {/*                                name="onoffswitch"*/}
                {/*                                className="onoffswitch-checkbox"*/}
                {/*                                id="myonoffswitch7"*/}
                {/*                            />*/}
                {/*                            <label className="onoffswitch-label" htmlFor="myonoffswitch7">*/}
                {/*                                <span className="onoffswitch-inner" />*/}
                {/*                                <span className="onoffswitch-switch" />*/}
                {/*                            </label>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div className="add-list-media-wrap">*/}
                {/*                        <form className="fuzone">*/}
                {/*                            <div className="fu-text">*/}
                {/*      <span>*/}
                {/*        <i className="fal fa-image" /> Click here or drop files to*/}
                {/*        upload*/}
                {/*      </span>*/}
                {/*                            </div>*/}
                {/*                            <input type="file" className="upload" />*/}
                {/*                        </form>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                /!* act-widget end*!/*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*/!* profile-edit-container end*!/*/}
                {/*<div className="dashboard-title  dt-inbox fl-wrap">*/}
                {/*    <h3>Sidebar Widgets</h3>*/}
                {/*</div>*/}
                {/*/!* profile-edit-container*!/*/}
                {/*<div className="profile-edit-container fl-wrap block_box">*/}
                {/*    <div className="custom-form">*/}
                {/*        /!* act-widget*!/*/}
                {/*        <div className="act-widget fl-wrap">*/}
                {/*            <div className="act-widget-header">*/}
                {/*                <h4>1. Booking Form</h4>*/}
                {/*                <div className="onoffswitch">*/}
                {/*                    <input*/}
                {/*                        type="checkbox"*/}
                {/*                        name="onoffswitch"*/}
                {/*                        className="onoffswitch-checkbox"*/}
                {/*                        id="myonoffswitch"*/}
                {/*                        defaultChecked=""*/}
                {/*                    />*/}
                {/*                    <label className="onoffswitch-label" htmlFor="myonoffswitch">*/}
                {/*                        <span className="onoffswitch-inner" />*/}
                {/*                        <span className="onoffswitch-switch" />*/}
                {/*                    </label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        /!* act-widget end*!/*/}
                {/*        /!* act-widget*!/*/}
                {/*        <div className="act-widget fl-wrap">*/}
                {/*            <div className="act-widget-header">*/}
                {/*                <h4>2. Price Range </h4>*/}
                {/*                <div className="onoffswitch">*/}
                {/*                    <input*/}
                {/*                        type="checkbox"*/}
                {/*                        name="onoffswitch"*/}
                {/*                        className="onoffswitch-checkbox"*/}
                {/*                        id="myonoffswitch2"*/}
                {/*                    />*/}
                {/*                    <label className="onoffswitch-label" htmlFor="myonoffswitch2">*/}
                {/*                        <span className="onoffswitch-inner" />*/}
                {/*                        <span className="onoffswitch-switch" />*/}
                {/*                    </label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        /!* act-widget end*!/*/}
                {/*        /!* act-widget*!/*/}
                {/*        <div className="act-widget fl-wrap">*/}
                {/*            <div className="act-widget-header">*/}
                {/*                <h4>3. instagram</h4>*/}
                {/*                <div className="onoffswitch">*/}
                {/*                    <input*/}
                {/*                        type="checkbox"*/}
                {/*                        name="onoffswitch"*/}
                {/*                        className="onoffswitch-checkbox"*/}
                {/*                        id="myonoffswitch3"*/}
                {/*                        defaultChecked=""*/}
                {/*                    />*/}
                {/*                    <label className="onoffswitch-label" htmlFor="myonoffswitch3">*/}
                {/*                        <span className="onoffswitch-inner" />*/}
                {/*                        <span className="onoffswitch-switch" />*/}
                {/*                    </label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <label>*/}
                {/*                Api key*/}
                {/*                <i className="fab fa-mixcloud" />*/}
                {/*            </label>*/}
                {/*            <input type="text" placeholder="Api key" defaultValue="" />*/}
                {/*        </div>*/}
                {/*        /!* act-widget end*!/*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*/!* profile-edit-container end*!/*/}
                {/*<div className="dashboard-title  dt-inbox fl-wrap">*/}
                {/*    <h3>Your Socials</h3>*/}
                {/*</div>*/}
                {/*/!* profile-edit-container*!/*/}
                {/*<div className="profile-edit-container fl-wrap block_box">*/}
                {/*    <div className="custom-form">*/}
                {/*        <label>*/}
                {/*            Facebook <i className="fab fa-facebook" />*/}
                {/*        </label>*/}
                {/*        <input*/}
                {/*            type="text"*/}
                {/*            placeholder="https://www.facebook.com/"*/}
                {/*            defaultValue=""*/}
                {/*        />*/}
                {/*        <label>*/}
                {/*            Twitter*/}
                {/*            <i className="fab fa-twitter" />*/}
                {/*        </label>*/}
                {/*        <input type="text" placeholder="https://twitter.com/" defaultValue="" />*/}
                {/*        <label>*/}
                {/*            Vkontakte*/}
                {/*            <i className="fab fa-vk" />*/}
                {/*        </label>*/}
                {/*        <input type="text" placeholder="https://vk.com" defaultValue="" />*/}
                {/*        <label>*/}
                {/*            {" "}*/}
                {/*            Instagram <i className="fab fa-instagram" />*/}
                {/*        </label>*/}
                {/*        <input*/}
                {/*            type="text"*/}
                {/*            placeholder="https://www.instagram.com/"*/}
                {/*            defaultValue=""*/}
                {/*        />*/}
                {/*        <button className="btn    color2-bg  float-btn">*/}
                {/*            Send Listing*/}
                {/*            <i className="fal fa-paper-plane" />*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*/!* profile-edit-container end*!/*/}
                {/*<input type="file" value={data.avatar} onChange={e => setData('photo_path', e.target.files[0])} />*/}
                <FilePond
                    files={files}
                    onupdatefiles={setFiles}
                    onprocessfiles={() => {
                        setData('photo_path', document.querySelector('input[name="myname"]').getAttribute('value'))
                    }
                    }
                    allowMultiple={false}
                    chunkUploads={true}
                    chuckSize={20000}
                    // maxFiles={3}
                    server={server}
                    name="myname"
                    value=""
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'

                />

                <button onClick={(e) => {
                    e.preventDefault()
                    console.log(data.photo_path)
                }}>click
                </button>
                <button className="btn color2-bg  float-btn" disabled={processing}>
                    Send Listing
                    <i className="fal fa-paper-plane"/>
                </button>
            </form>
        </div>

    )
}


export default AddEvent
