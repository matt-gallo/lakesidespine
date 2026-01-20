// Lakeside Spine & Injury - Main JavaScript

// FAQ Toggle Functionality (Legacy - for accordion style)
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-toggle').textContent = '+';
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
                question.querySelector('.faq-toggle').textContent = '−';
            }
        });
    });

    // New FAQ Navigation with Numbered Buttons
    const faqNavButtons = document.querySelectorAll('.faq-nav-btn');
    const faqCards = document.querySelectorAll('.faq-card');

    faqNavButtons.forEach(button => {
        button.addEventListener('click', () => {
            const faqNumber = button.getAttribute('data-faq');

            // Remove active class from all buttons
            faqNavButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Hide all FAQ cards
            faqCards.forEach(card => card.classList.remove('active'));

            // Show the selected FAQ card
            const selectedCard = document.querySelector(`.faq-card[data-faq-id="${faqNumber}"]`);
            if (selectedCard) {
                selectedCard.classList.add('active');
            }
        });
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#book' && href !== '#booking') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
