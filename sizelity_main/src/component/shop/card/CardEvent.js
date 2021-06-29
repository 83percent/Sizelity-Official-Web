const CardEvent = ({events}) => {
    if(events?.length === 0) {
        return (
            <div className="card">
                <div className="emptyCard ko">
                    <p>등록된 이벤트가 없습니다.</p>
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

export default CardEvent;