import './FAQ.css';

const FAQ = () => {
  const faqs = [
    { id: 1, question: 'Question', answer: 'Answer' },
    { id: 2, question: 'Question', answer: 'Answer' },
  ];

  return (
    <section className="faq" style={{ position: 'relative', zIndex: 10 }}>
      <h2>FAQ</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;