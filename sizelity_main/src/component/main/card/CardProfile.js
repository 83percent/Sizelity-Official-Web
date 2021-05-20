const CardProfile = ({sname}) => {
    return (
        <div className="card ko">
            <h1>{sname}</h1>
            <div className="more">
                <p>프로필 수정</p>
            </div>
        </div>
    )
}
export default CardProfile;
