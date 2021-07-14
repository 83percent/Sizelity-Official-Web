import { Link } from 'react-router-dom';

// CSS
import '../../contents/css/main/faq.css';

const FAQ = () => {
    return (
        <main className="faq">
            <section>
                <h1>준비중입니다.</h1>
                <Link to="/help">
                    <p>직접 문의 하기</p>
                    <i className="material-icons">chevron_right</i>
                </Link>
            </section>
        </main>
    )
}

export default FAQ;