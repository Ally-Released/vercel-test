import React, { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onClick }) => (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
        <h3 className="accordion-header" onClick={onClick}>
            {title}
            <span className="accordion-icon">{isOpen ? '-' : '+'}</span>
        </h3>
        {isOpen && <div className="accordion-content">{children}</div>}
    </div>
);

const PolicyPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const policies = [
        {
            title: 'Privacy Policy',
            content: 'Your privacy is important to us. It is Synex\'s policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.'
        },
        {
            title: 'Terms of Service',
            content: 'By accessing the website at Synex, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.'
        },
        {
            title: 'Cookie Policy',
            content: 'We use cookies to help improve your experience of our website. This cookie policy is part of Synex\'s privacy policy, and covers the use of cookies between your device and our site.'
        }
    ];

    return (
        <section className="policy-section">
            <div className="container">
                <h2>Policies</h2>
                <div className="accordion">
                    {policies.map((policy, index) => (
                        <AccordionItem
                            key={index}
                            title={policy.title}
                            isOpen={openIndex === index}
                            onClick={() => toggleItem(index)}
                        >
                            <p>{policy.content}</p>
                        </AccordionItem>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PolicyPage; 