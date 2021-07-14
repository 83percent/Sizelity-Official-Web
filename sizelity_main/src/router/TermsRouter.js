import {Terms} from '../contents/js/Terms';
import '../contents/css/main/Viewer.css';
import { Link } from 'react-router-dom';


const TermsRouter = ({match}) => {
    const cateList = ["service", "privacy", "notice"];
    
    if(!cateList.includes(match.params.cate)) {
        return (
            <>
                <header>
                    <h1></h1>
                </header>
                <main>
    
                </main>
            </>
        )
    } else {
        const _t = Terms[match.params.cate];
        console.log(_t)
        return (
            <article className="terms">
                <header>
                    <div>
                        <Link to="/" className="logo">
                            <i className="material-icons">local_offer</i>
                        </Link>
                    </div>
                    <h1>{_t.title}</h1>
                </header>
                <main>
                    {
                        _t.inner.map((e1, i1) => (
                            <div key={i1}>
                                <h2>{e1.title}</h2>
                                {
                                    e1.list.map((e2, i2) => {
                                        if(e2.line !== undefined) {
                                            return (
                                                <div>
                                                    <h2>{e2.subTitle}</h2>
                                                    <p>{e2.line}</p>
                                                </div>
                                            )
                                        } else {
                                                <>
                                                    <h2>{e2.subTitle}</h2>
                                                    
                                                </>
                                        }
                                    })
                                }
                            </div>
                            
                        ))
                    }
                </main>
            </article>
        )
    }
    
    
}

export default TermsRouter;