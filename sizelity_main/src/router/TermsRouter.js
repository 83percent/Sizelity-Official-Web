import { Terms } from '../contents/js/Terms';
import '../contents/css/main/Viewer.css';
import { Link } from 'react-router-dom';


const TermsRouter = ({match}) => {
    const cateList = ["service", "privacy", "notice"];
    
    if(!cateList.includes(match.params.cate)) {
        return (
            <>
                <header>
                    <h1>준비중입니다.</h1>
                </header>
                <main>
    
                </main>
            </>
        )
    } else {
        const _t = Terms[match.params.cate];
        console.log(_t.inner)
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
                        _t.inner.map((inner, i1) => (
                            <section key={i1}>
                                {
                                    Object.entries(inner).map((element, i2) => {
                                        console.log(element);

                                        switch(element[0]) {
                                            case 'title' : {
                                                return (
                                                    <h2 key={i2}>{element[1]}</h2>
                                                )
                                            }
                                            case 'line' : {
                                                console.log(element);
                                                return (
                                                    <p key={i2}>{element[1]}</p>
                                                )
                                            }
                                            case 'number' : {
                                                return (
                                                    <ul key={i2}>
                                                        {
                                                            element[1].map((liElement, i3) => {
                                                                return (
                                                                    <li key={i3}>
                                                                        <p>{i3+1}</p>
                                                                        <div>
                                                                            <h3>{liElement?.title}</h3>
                                                                            <p>{liElement?.text}</p>
                                                                            {
                                                                                liElement?.list?.split('\n').map((line, i4) => (
                                                                                    <p key={i4}>{line}</p>
                                                                                ))
                                                                            }
                                                                        </div>
                                                                        
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                )
                                            }
                                            case 'unnumber' : {
                                                return (
                                                    <ol key={i2}>
                                                        {
                                                            element[1].map((liElement, i3) => {
                                                                return (
                                                                    <li key={i3}>
                                                                        <div>
                                                                            <h3>{liElement?.title}</h3>
                                                                        </div>
                                                                        <p>{liElement?.text}</p>
                                                                        {
                                                                            liElement?.list?.split('\n').map((line, i4) => (
                                                                                <p key={i4}>{line}</p>
                                                                            ))
                                                                        }
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ol>
                                                )
                                            }
                                            default : return null;
                                        }
                                    })
                                }
                            </section>
                        ))
                    }
                </main>
            </article>
        )
    }
    
    
}

export default TermsRouter;