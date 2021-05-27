import SignIn from "./component/signIn";
import Register from "./component/register";

export default function AuthHtml() {
    return (
        <section className="py-12">
            <div className="container">
                <div className="row">

                    <SignIn />
                    <Register />
                </div>
            </div>
        </section>
    )
}