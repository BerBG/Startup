import React from "react";
import Hero from "../Hero/Hero";
import Programs from "../Programs/Programs";
import Title from "../Title/Title";
import About from "../About/About";
import Tutors from "../Tutors/Tutors";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
      <Hero id="hero" />
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer' />
        <Programs id="programs" />
        <About id="about" />
        <Title subTitle='Meet Our' title='Tutors' />
        <Tutors id="tutors" />
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimonials id="testimonials" />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact id="contact" />
        <Footer/>
      </div>
    </>
  );
}


export default Home;