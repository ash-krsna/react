export function NetflixMain(){
    return(
        <main>
            <P>Ready to watch? Enter your email to create or restart your membership.</P>
            <div className="d-flex justify-content-center">
                <div className="mt-3">
                    <div className="input-group input-group-lg">
                        <input type="email" className="from-control mx-2" placeholder="Your email address" />
                        <button className="btn btn-danger">Get Started <span className="bi bi-chevron-right"></span></button>
                    </div>
                </div>
            </div>
        </main>
    )
}