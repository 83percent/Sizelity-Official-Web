import { useRef } from 'react';
import URLModule from '../../contents/js/URL';

let urlModule = null;
const CreateAccountTest = ({setStage, testing}) => {
    // Ref
    const inputTestUrl = useRef(null);
    const caution = useRef(null);
    const event = {
        available : function(url) {
            if(url.length < 2) return;
            if(!urlModule) urlModule = new URLModule();
            const analyzeURL = urlModule.get(url);
            if(analyzeURL === null) {
                this.cautionToggle(true);
            } else {
                testing.current = analyzeURL;
                setStage(1);
            }
        },
        cautionToggle : function(toggle) {
              caution.current.classList.toggle("on",toggle);
        }
    }
    return (
        <>
            <div className="title">
                <h1 className="en">Create Account</h1>
                <p className="ko">서비스 이용가능 여부를 확인합니다.</p>
                <p className="ko">고객님의 쇼핑몰의 상품 URL주소를 입력해주세요.</p>
                <p className="ko">쇼핑몰내에 아무 상품을 누른 뒤, 주소를 복사해서 붙여넣어주세요.</p>
            </div>
            <div id="inputFrame" className="en">
                <div>
                    <h3>Test URL</h3>
                    <div>
                        <input className="inputURL" type="text" ref={inputTestUrl} placeholder="http://example.com?branduid=12345" onKeyPress={(e) => {if(e.key === "Enter") event.available(e.target.value)}}/>
                    </div>
                </div>
                <button className="ko" onClick={() => event.available(inputTestUrl.current.value)}>검토</button>
            </div>
            <div className="caution ko" ref={caution}>
                <i className="material-icons">mood_bad</i>
                <p>저희 서비스에서 아직 지원하지 않는 형식의 주소입니다.</p>    
            </div>
        </>
    )
}

export default CreateAccountTest;