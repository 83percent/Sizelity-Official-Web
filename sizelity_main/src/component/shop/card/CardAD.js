const CardAD = ({ADs}) => {
    if(ADs?.length == 0) {
        return (
            <div className="card">
                <div className="emptyCard ko">
                    <p>바로 광고를 시작해보세요</p>
                </div>
            </div>
        )
    } else {
        return (
            <ul>

            </ul>
        )
    }
}

export default CardAD;