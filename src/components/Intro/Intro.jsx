/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import heroImage from "../../../public/images/hero-image.jpg"


function Intro() {
    return (
        <section className="intro" id="intro">
            <div className="container">
                <div className="row intro-container">
                    <div className="col-7 text__wrapper">
                        <h2 className="title">Відкрийте ІТ-революцію</h2>
                        <p className="sub-title">Приєднуйтесь до нашої спільноти технологій та розкрийте безмежні можливості!</p>
                        <a href="" className="btn btn-primary">Try for free</a>
                    </div>
                    <div className="col-5">
                        <div className="intro__img__wrapper"><img src={heroImage} alt="intro__img" className="intro__img" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Intro
