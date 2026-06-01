/* ==========================================
   ADARSH SHARMA PORTFOLIO LOGIC
   MODAL CONTROLS & PRINT ACTIONS
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openResumeModal');
    const resumeModal = document.getElementById('resumeModal');
    const closeBtn = document.getElementById('closeModal');
    const printBtn = document.getElementById('printResumeBtn');

    // Ensure hidden state on launch
    if (resumeModal) {
        resumeModal.classList.add('hidden');
    }

    function showModal() {
        if (!resumeModal) return;
        resumeModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        closeBtn?.focus();
    }

    function hideModal() {
        if (!resumeModal) return;
        resumeModal.classList.add('hidden');
        document.body.style.overflow = '';
        openBtn?.focus();
    }

    // Modal Events
    openBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        showModal();
    });

    closeBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal();
    });

    resumeModal?.addEventListener('click', (e) => {
        if (e.target === resumeModal) {
            hideModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !resumeModal.classList.contains('hidden')) {
            hideModal();
        }
    });

    // Print Action
    printBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        window.print();
    });

    // Animate skill progress bars on scroll intersection
    const progressBars = document.querySelectorAll('.bar-fill');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                // Read inline width style and apply it
                const targetWidth = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = targetWidth;
                }, 100);
                observer.unobserve(bar);
            }
        });
    }, observerOptions);

    progressBars.forEach(bar => {
        skillObserver.observe(bar);
    });
});
