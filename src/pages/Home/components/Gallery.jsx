import React from 'react'
import { homeService } from '../../../services/home'
import useQuery from '../../../hooks/useQuery'

export default function Gallery() {
    const { data: gallery } = useQuery(() => homeService.gallery())
    // console.log(gallery);

    return (
        <section className="section-gallery">
            <div className="textbox">
                <h2 className="main-title">Chúng ta là một team</h2>
            </div>
            <div className="list flickity-enabled is-draggable" tabIndex={0}>
                <div className="flickity-viewport" style={{ height: 450, touchAction: 'pan-y' }}><div className="flickity-slider" style={{ left: 0, transform: 'translateX(-2.02%)' }}><img alt style={{ position: 'absolute', left: '0%' }} className="flickity-lazyloaded is-selected" src="img/img_team1.png" /><img alt aria-hidden="true" style={{ position: 'absolute', left: '41.68%' }} src="img/img_team2.png" className="flickity-lazyloaded" /><img alt aria-hidden="true" style={{ position: 'absolute', left: '83.36%' }} src="img/img_team3.png" className="flickity-lazyloaded" /><img alt aria-hidden="true" style={{ position: 'absolute', left: '136.78%' }} src="img/img_team4.png" className="flickity-lazyloaded" /><img data-flickity-lazyload="img/img_team3.png" alt aria-hidden="true" style={{ position: 'absolute', left: '168.07%' }} /><img data-flickity-lazyload="img/img_team4.png" alt aria-hidden="true" style={{ position: 'absolute', left: '172.12%' }} /><img data-flickity-lazyload="img/img_team1.png" alt aria-hidden="true" style={{ position: 'absolute', left: '176.17%' }} /><img data-flickity-lazyload="img/img_team2.png" alt aria-hidden="true" style={{ position: 'absolute', left: '180.22%' }} /><img data-flickity-lazyload="img/img_team3.png" alt aria-hidden="true" style={{ position: 'absolute', left: '184.27%' }} /><img data-flickity-lazyload="img/img_team4.png" alt aria-hidden="true" style={{ position: 'absolute', left: '188.31%' }} /><img data-flickity-lazyload="img/img_team3.png" alt aria-hidden="true" style={{ position: 'absolute', left: '192.36%' }} /><div className="item carousel-cell" aria-hidden="true" style={{ position: 'absolute', left: '196.41%' }}>
                    {/* <img data-flickity-lazyload="img/img_team4.png" alt /> */}
                    {
                        gallery?.map((e, i) => {
                            <img data-flickity-lazyload={e} alt key={i} />
                        })
                    }
                </div></div></div><ol className="flickity-page-dots"><li className="dot is-selected" aria-label="Page dot 1" aria-current="step" /><li className="dot" aria-label="Page dot 2" /><li className="dot" aria-label="Page dot 3" /><li className="dot" aria-label="Page dot 4" /><li className="dot" aria-label="Page dot 5" /><li className="dot" aria-label="Page dot 6" /><li className="dot" aria-label="Page dot 7" /><li className="dot" aria-label="Page dot 8" /><li className="dot" aria-label="Page dot 9" /><li className="dot" aria-label="Page dot 10" /><li className="dot" aria-label="Page dot 11" /><li className="dot" aria-label="Page dot 12" /></ol></div>
            <div className="controls">
                <div className="btn_ctr prev" />
                <span>Trượt qua</span>
                <div className="timeline">
                    <div className="process" style={{ width: '5%' }} />
                </div>
                <div className="btn_ctr next" />
            </div>
        </section>
    )
}
