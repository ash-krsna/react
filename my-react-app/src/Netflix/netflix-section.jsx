import { NetflixMain } from "./netflix-main";
import './netflix-section.css';

export function NetflixSection(){
    return(
        <section className="text-white section text-center mt-4">
            <div className="section-title">Unlimited Movies, TV<br/>shows and more</div>
            <div className="sectioin-subtitle">Starts at &#8377;149. Cancel at any time. </div>
            <NetflixMain />
        </section>
    )
}
