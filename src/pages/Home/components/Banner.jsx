import React from 'react'

export default function Banner() {
    return (
        <div className="banner jarallax">
            <div className="container">
                <div className="content">
                    <h2 className="title">Thực Chiến</h2>
                    <h2 className="title">Tạo ra sản phẩm có giá trị</h2>
                    <div className="btn main round">KHÓA HỌC</div>
                </div>
            </div>
            <div id="jarallax-container-0" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: -100, transform: 'translateX(0px) translateY(0px) translateZ(0px)' }}><div className="jarallax-img" style={{ objectFit: 'cover', maxWidth: 'none', position: 'absolute', top: 0, left: 0, width: 988, height: '576.2px', overflow: 'hidden', pointerEvents: 'none', marginTop: '88.9px', transform: 'translateY(-106.9px) translateZ(0px)' }}>
                <img data-src="img/bg-cover.jpg" alt className=" lazyloaded" src="img/bg-cover.jpg" />
                <div className="video-bg lazyloaded" data-src="video/CFD-video-bg2.mp4"><video autoPlay loop muted><source src="video/CFD-video-bg2.mp4" type="video/mp4" />Your browser does not support the video tag.</video></div>
            </div>
            </div>
        </div>
    )
}
