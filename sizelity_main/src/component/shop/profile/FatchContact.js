const FatchAccount = ({data}) => {
    console.log(data)
    return (
        <>
            <div>
                <div className="title">
                    <h2>전화번호 변경</h2>
                    <div className="sub">
                        <p>쇼핑몰 및 본인 인증에 사용할 수 있는 연락처를 적어주세요</p>
                    </div>
                </div>
                <input type="text" placeholder={data?.tel} />
            </div>
            <div>
                <div className="title">
                    <h2>이메일 변경</h2>
                    <div className="sub">
                        <p>등록된 이메일로는 청구서 및 각종 정보를 수신받을 수 있어요</p>
                    </div>
                </div>
                <input type="text" placeholder={data?.email} />
            </div>
            <div>
                <div className="title">
                    <h2>주소지 변경</h2>
                    <div className="sub">
                        <p>우편을 받을 수 있는 주소지를 입력해주세요.</p>
                        <p>쇼핑몰이 등록된 사업자 주소지면 좋아요</p>
                    </div>
                </div>
                <input type="text" placeholder={data?.address} />
            </div>
        </>
    )
}

export default FatchAccount;