import React from 'react';
import './FaqPage.css';
import GradientText from '../components/GradientText';
import ShinyText from '../components/ShinyText';

const faqs = [
    {
        question: "What's Synex, exactly?",
        answer: "Synex is all about protecting your system's data. It creates a virtualized space where your hardware stays fully shielded from outside software, giving you peace of mind that your information is locked down tight."
    },
    {
        question: "Is Synex a one-time deal, or can I keep using it?",
        answer: "Once you've got Synex, you're set for life. There's no need to purchase it again use it as much as you want, for as long as you want, without limits."
    },
    {
        question: "Can Synex be permanent, or is it just for short-term use?",
        answer: "It's totally up to you. Synex is flexible. Whether you need it for a short project or want to integrate it long term into your system, it's designed to handle both without any hassle."
    },
    {
        question: "Do I need to be tech-savvy to use Synex?",
        answer: "Not at all! Synex is designed to be super user friendly. If you can handle a few clicks, you can set it up and start using it in no time, no technical expertise needed."
    },
    {
        question: "What kind of systems work with Synex?",
        answer: "Synex plays nice with nearly every system. Whether you're on an Acer, Lenovo, HP, or pretty much any major brand, it'll work seamlessly with your setup."
    },
    {
        question: "What happens after I purchase Synex?",
        answer: "Once you've bought it, you'll just need to submit a support ticket. The system is fully automated, so you'll get quick, easy instructions from our bot to get started."
    },
    {
        question: "Do I need special configurations like RAID or anything?",
        answer: "Nope, not required. Synex doesn't need RAID or anything extra if you aren't using permanent option! It'll work perfectly with your existing SSD or HDD setup without the need for any complex adjustments."
    }
];

const FaqPage = () => {
    return (
        <div className="faq-container">
            <h1 className="faq-title">
                <GradientText
                    colors={['#FFF200', '#FFFFFF', '#FFF200']}
                    className="faq-title-gradient"
                >
                    Frequently Asked Questions
                </GradientText>
            </h1>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div className="faq-item" key={index}>
                        <h2 className="faq-question">
                            <ShinyText text={faq.question} />
                        </h2>
                        <p className="faq-answer">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqPage; 