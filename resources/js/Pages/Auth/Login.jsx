import { InertiaLink, useForm, usePage } from "@inertiajs/inertia-react";
import AuthenticationCard from "@/Jetstream/AuthenticationCard";
import Label from "@/Jetstream/Label";
import Input from "@/Jetstream/Input";
import Checkbox from "@/Jetstream/Checkbox";
import Button from "@/Jetstream/Button";
import AuthenticationCardLogo from "@/Jetstream/AuthenticationCardLogo";
import ValidationErrors from "@/Jetstream/ValidationErrors";
import Register from "@/Pages/Auth/Register";

const Login = () => {

    const { status, canResetPassword } = usePage().props

    const { data, setData, post, processing } = useForm({ email: '', password: '', remember: false });

    const submit = () => post(route('login'))

    return (
        // <AuthenticationCard logo={ <AuthenticationCardLogo/> }>
        //     { status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div> }
        //
        //     <ValidationErrors className="mb-4"/>
        //
        //     <form onSubmit={ event => { event.preventDefault(); submit() } }>
        //         <div>
        //             <Label value="Email" htmlFor="email"/>
        //             <Input className="mt-1 block w-full" id="email" type="email" value={ data.email } required={ true } autoFocus autoComplete="username" callback={ value => setData("email", value) }/>
        //         </div>
        //
        //         <div className="mt-4">
        //             <Label value="Password" htmlFor="password"/>
        //             <Input className="mt-1 block w-full" id="password" type="password" value={ data.password } required={ true } autoComplete="current-password" callback={ value => setData("password", value) }/>
        //         </div>
        //
        //         <div className="block mt-4">
        //             <Label className="flex items-center">
        //                 <Checkbox checked={ data.remember } name="remember" callback={ value => setData("remember", value) }/>
        //                 <span className="ml-2 text-sm text-gray-600">Remember me</span>
        //             </Label>
        //         </div>
        //
        //         <div className="flex items-center justify-end mt-4">
        //             {
        //                 canResetPassword &&
        //                 <InertiaLink href={route('password.request')} className="underline text-sm text-gray-600 hover:text-gray-900">
        //                     Forgot your password?
        //                 </InertiaLink>
        //             }
        //
        //             <Button className={ `ml-4 ${ processing && 'opacity-25' }` } disabled={ processing }>
        //                 Login
        //             </Button>
        //         </div>
        //     </form>
        // </AuthenticationCard>
        <div className="main-register-wrap modal">
            <div className="reg-overlay"/>
            <div className="main-register-holder tabs-act">
                <div className="main-register fl-wrap  modal_main">
                    <div className="main-register_title">Welcome
                        to <span><strong>Town</strong>Hub<strong>.</strong></span></div>
                    <div className="close-reg"><i className="fal fa-times"/></div>
                    <ul className="tabs-menu fl-wrap no-list-style">
                        <li className="current"><a href="#tab-1"><i className="fal fa-sign-in-alt"/> Login</a>
                        </li>
                        <li><a href="#tab-2"><i className="fal fa-user-plus"/> Register</a></li>
                    </ul>
                    {/*tabs */}
                    <div className="tabs-container">
                        <div className="tab">
                            <div id="tab-1" className="tab-content first-tab">
                                <div className="custom-form">
                                    {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                                    <ValidationErrors className="mb-4"/>

                                    <form onSubmit={event => {
                                        event.preventDefault();
                                        submit()
                                    }} name="registerform">
                                        <label>Username or Email Address <span>*</span> </label>
                                        <Input name="email" type="text" id="email" value={data.email} required={true}
                                               autoFocus autoComplete="username"
                                               callback={value => setData("email", value)}/>

                                        <label>Password <span>*</span> </label>
                                        <Input name="password" type="password"
                                               id="password" value={data.password} required={true}
                                               autoComplete="current-password"
                                               callback={value => setData("password", value)}/>
                                        <button className="btn float-btn color2-bg" disabled={processing}> Log In <i
                                            className="fas fa-caret-right"/></button>

                                        <div className="clearfix"/>
                                        <div className="filter-tags">
                                            <Input id="check-a3" type="checkbox" checked={data.remember} name="remember"
                                                   callback={value => setData("remember", value)}/>
                                            <label htmlFor="check-a3">Remember me</label>
                                        </div>
                                    </form>
                                    {
                                        canResetPassword &&

                                        <div className="lost_password">
                                            <InertiaLink href={route('password.request')}>Lost Your
                                                Password?</InertiaLink>
                                        </div>
                                    }
                                </div>
                            </div>
                            {/*tab end */}
                            {/*tab */}
                            <Register/>
                            {/*tabs end */}
                            <div className="log-separator fl-wrap"><span>or</span></div>
                            <div className="soc-log fl-wrap">
                                <p>For faster login or register use your social account.</p>
                                <a href="#" className="facebook-log"> Facebook</a>
                            </div>
                            <div className="wave-bg">
                                <div className="wave -one"/>
                                <div className="wave -two"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;
