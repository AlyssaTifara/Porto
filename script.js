// ========================================
// PROFESSIONAL PORTFOLIO JAVASCRIPT
// Mobile navigation and smooth interactions
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // ----------------------------------------
    // Project detail data (extendable)
    // ----------------------------------------
    const projectsData = {
        'atm': {
            'title': 'Sistem Informasi Akreditasi D4 SIB - Politeknik Negeri Malang',
            'overview': 'Mengembangkan sistem web terintegrasi untuk mengelola proses akreditasi program studi dengan alur validasi bertingkat dari dosen hingga direktur, dilengkapi dengan fitur pengelolaan data dosen, pengisian kriteria, validasi multi-level, dan ekspor dokumen otomatis.',
            'tools': ['Laravel 10', 'Bootstrap 5', 'MySQL', 'Figma', 'DB Diagram'],
            'problem': 'Proses akreditasi manual yang tidak terstruktur menyebabkan kesulitan dalam pengelolaan data, validasi berjenjang, dan pembuatan dokumen borang akreditasi secara efisien dan tepat waktu.',
            'dataTools': {
                'source': 'Data dosen, kriteria akreditasi 1-9, dokumen pendukung, riwayat validasi',
                'tools': 'MySQL, Laravel Eloquent, PHP, Blade Templating',
                'variables': 'Role pengguna, status validasi, komentar revisi, tanggal pengisian, dokumen lampiran'
            },
            'insights': [
                'Struktur validasi bertingkat (Koordinator → KPS/KAJUR → KJM → Direktur/SPI) efektif dalam menjaga kualitas data akreditasi.',
                'Penggunaan notifikasi real-time untuk komentar revisi mempercepat proses perbaikan data oleh dosen pengisi.',
                'Export otomatis ke PDF setelah validasi final menyederhanakan pembuatan dokumen borang akreditasi.'
            ],
            'recommendation': {
                'actions': 'Optimalkan tampilan mobile-responsive, tambahkan fitur penjadwalan otomatis untuk update data periodik, dan integrasi dengan sistem P3M untuk sinkronisasi data penelitian.',
                'impact': 'Proses akreditasi lebih efisien, dokumentasi lebih terstruktur, dan pengalaman pengguna lebih baik di berbagai perangkat.'
            },
            'reflection': {
                'limitations': 'Tampilan belum sepenuhnya responsive untuk mobile, integrasi dengan sistem eksternal masih terbatas.',
                'learned': 'Pentingnya alur bisnis yang jelas dalam sistem multi-role dan value dari validasi bertahap untuk menjaga kualitas data.',
                'future': 'Pengembangan mobile app, integrasi API dengan sistem akademik kampus, dan penambahan dashboard analitik untuk monitoring progres.'
            },
            image: {
                src: 'assets/images/projects/akre/1752500344214.jpg',
                alt: 'Final UI dashboard Sistem Informasi Akreditasi D4 SIB'
            },
            links: {
                github: 'https://github.com/alfinafriansyah/PBL_Akreditasi',
                report: 'assets/documents/projects/akre/Kelompok_4__SIB_2C_Akreditasi.pdf'
            }
        },
        'retention': {
            'title': 'Studify Mobile',
            'overview': 'Mengembangkan sistem web terintegrasi untuk mengelola proses akreditasi program studi dengan alur validasi bertingkat dari dosen hingga direktur, dilengkapi dengan fitur pengelolaan data dosen, pengisian kriteria, validasi multi-level, dan ekspor dokumen otomatis.',
            'tools': ['Laravel 10', 'Bootstrap 5', 'MySQL', 'Figma', 'DB Diagram', 'QA Testing'],
            'problem': 'Proses akreditasi manual yang tidak terstruktur menyebabkan kesulitan dalam pengelolaan data, validasi berjenjang, dan pembuatan dokumen borang akreditasi secara efisien dan tepat waktu.',
            'dataTools': {
                'source': 'Data dosen, kriteria akreditasi 1-9, dokumen pendukung, riwayat validasi',
                'tools': 'MySQL, Laravel Eloquent, PHP, Blade Templating',
                'variables': 'Role pengguna, status validasi, komentar revisi, tanggal pengisian, dokumen lampiran'
            },
            'insights': [
                'Struktur validasi bertingkat (Koordinator → KPS/KAJUR → KJM → Direktur/SPI) efektif dalam menjaga kualitas data akreditasi.',
                'Penggunaan notifikasi real-time untuk komentar revisi mempercepat proses perbaikan data oleh dosen pengisi.',
                'Export otomatis ke PDF setelah validasi final menyederhanakan pembuatan dokumen borang akreditasi.'
            ],
            'recommendation': {
                'actions': 'Optimalkan tampilan mobile-responsive, tambahkan fitur penjadwalan otomatis untuk update data periodik, dan integrasi dengan sistem P3M untuk sinkronisasi data penelitian.',
                'impact': 'Proses akreditasi lebih efisien, dokumentasi lebih terstruktur, dan pengalaman pengguna lebih baik di berbagai perangkat.'
            },
            'reflection': {
                'limitations': 'Tampilan belum sepenuhnya responsive untuk mobile, integrasi dengan sistem eksternal masih terbatas.',
                'learned': 'Pentingnya alur bisnis yang jelas dalam sistem multi-role dan value dari validasi bertahap untuk menjaga kualitas data.',
                'future': 'Pengembangan mobile app, integrasi API dengan sistem akademik kampus, dan penambahan dashboard analitik untuk monitoring progres.'
            },
            image: {
                src: 'assets/images/projects/studify/photo_2025-12-24_22-04-23.jpg',
                alt: 'Final UI Studify Mobile overview screen'
            },
            mobileShowcase: {
                screens: [
                    {
                        src: 'assets/images/projects/studify/mobile-1.png',
                        alt: 'Studify Mobile - Home screen with study features'
                    },
                    {
                        src: 'assets/images/projects/studify/mobile-2.png',
                        alt: 'Studify Mobile - Study session tracking interface'
                    },
                    {
                        src: 'assets/images/projects/studify/mobile-3.png',
                        alt: 'Studify Mobile - User profile and progress dashboard'
                    }
                ]
            },
            links: {
                github: 'https://github.com/zidnafaz/studify_frontend',
                report: 'assets/documents/projects/studify/Manual Book Mobile PBL_Kel 7.pdf'
            }
        },
        'order-delay': {
            title: 'Strategic Market Entry',
            overview: 'Root-cause snapshot of afternoon shift delays; delivered a simple ops checklist to stabilize throughput.',
            tools: ['Power BI', 'Python'],
            problem: 'Afternoon shift orders were consistently late, hurting SLA and customer satisfaction.',
            dataTools: {
                source: 'Order logs, staffing roster, incident notes',
                tools: 'Python, Power BI',
                variables: 'Order timestamps, queue depth, staff coverage, incident flags'
            },
            insights: [
                'Delays spike when staffing dips after lunch and queue depth passes threshold.',
                'Most rework stems from incomplete handoff notes between shifts.',
                'Simple checklists reduced re-opened tickets in pilot runs.'
            ],
            recommendation: {
                actions: 'Align staffing to peak windows, enforce checklist at handoff, and monitor queue threshold alerts.',
                impact: 'Shorter cycle times, fewer reopens, and steadier SLA compliance.'
            },
            reflection: {
                limitations: 'Limited to 4 weeks of logs; no seasonality view.',
                learned: 'Operational guardrails (checklists, staffing cues) beat tooling alone.',
                future: 'Add lightweight dashboard to track queue and handoff compliance.'
            },
            image: null,
            links: {
                // github: 'https://github.com/igaramadana/PWD_PBLSITatib',
                report: 'assets/documents/projects/kecbis/UAS Kecbis_Kel 7.pdf'
            }
        },
        // 'qa-dashboard': {
        //     title: 'QA Dashboard Starter',
        //     overview: 'Lightweight QA dashboard to surface defect trends, reopen rates, and cycle time for faster triage.',
        //     tools: ['SQL', 'Tableau', 'QA'],
        //     problem: 'QA leads lacked a single view of defect trends and reopen patterns.',
        //     dataTools: {
        //         source: 'Issue tracker exports, test cycle logs',
        //         tools: 'SQL, Tableau',
        //         variables: 'Severity, component, reopen status, cycle time'
        //     },
        //     insights: [
        //         'Reopen spikes cluster in two components after minor releases.',
        //         'Cycle time improves when pairing testers with component experts.',
        //         'Severity mix shifts toward medium in the weeks after large releases.'
        //     ],
        //     recommendation: {
        //         actions: 'Add release-specific QA checklists and pair testers with component owners.',
        //         impact: 'Lower reopen rates and steadier release quality.'
        //     },
        //     reflection: {
        //         limitations: 'Historical data lacks consistent labels.',
        //         learned: 'Clear ownership plus minimal dashboards accelerate QA feedback loops.',
        //         future: 'Normalize labels and add alerts for reopen surges.'
        //     },
        //     links: {
        //         github: '#',
        //         report: '#'
        //     }
        // }
    };

    
    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = menuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when clicking on a link
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    const spans = menuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
    }
    
    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only smooth scroll if it's not just "#" (which might be a placeholder)
            if (href !== '#' && href !== '') {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ========================================
    // ACTIVE NAVIGATION HIGHLIGHT
    // ========================================
    // Highlights the current page in navigation
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(item => {
        const itemPath = item.getAttribute('href');
        if (itemPath === currentLocation) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

// ========================================
    // PROJECT DETAIL DYNAMIC RENDERING
    // ========================================
    if (currentLocation === 'project-detail.html') {
        // ===== 1. AMBIL PARAMETER URL =====
        const params = new URLSearchParams(window.location.search);
        const projectId = params.get('id');
        
        // ===== 2. AMBIL DOM ELEMENTS =====
        const loaderEl = document.getElementById('detail-loader');
        const shellEl = document.getElementById('detail-shell');
        const titleEl = document.querySelector('.project-detail-title');
        const toolsEl = document.getElementById('detail-tools');
        const overviewEl = document.getElementById('detail-overview');
        const problemEl = document.getElementById('detail-problem');
        const dataEl = document.getElementById('detail-data');
        const insightsEl = document.getElementById('detail-insights');
        const recoEl = document.getElementById('detail-recommendation');
        const reflectionEl = document.getElementById('detail-reflection');
        const actionsEl = document.getElementById('detail-actions');
        const imageEl = document.getElementById('detail-image');
        const imageSkeleton = document.getElementById('detail-image-skeleton');
        const projectHero = document.getElementById('project-hero');
        const mobileShowcase = document.getElementById('mobile-showcase');

        // ===== 3. HELPER FUNCTIONS =====
        
        // Fungsi untuk menyembunyikan loader dan menampilkan konten
        const hideLoader = () => {
            if (loaderEl) {
                loaderEl.style.opacity = '0';
                setTimeout(() => {
                    loaderEl.hidden = true;
                }, 300);
            }
        };

        const showContent = () => {
            if (shellEl) {
                shellEl.hidden = false;
                shellEl.style.opacity = '0';
                setTimeout(() => {
                    shellEl.style.transition = 'opacity 0.4s ease';
                    shellEl.style.opacity = '1';
                }, 50);
            }
        };

        // Fungsi untuk menampilkan error page
        const showErrorPage = (title, message) => {
            hideLoader();
            if (shellEl) shellEl.remove();
            const container = document.querySelector('.container');
            if (container) {
                container.innerHTML += `
                    <div style="min-height: 50vh; display: grid; place-items: center; text-align: center; color: var(--text-light); margin-top: var(--spacing-xl);">
                        <div>
                            <h2>${title}</h2>
                            <p style="color: var(--text-gray); margin: 1rem 0 2rem;">${message}</p>
                            <a href="projects.html" class="btn btn-primary">← Back to Projects</a>
                        </div>
                    </div>
                `;
            }
        };

        // ===== 4. VALIDASI PROJECT ID =====
        if (!projectId) {
            showErrorPage('No Project Selected', 'Please select a project to view its details.');
            return;
        }

        const project = projectsData[projectId];
        if (!project) {
            showErrorPage('Project Not Found', 'The project you are looking for does not exist or has been removed.');
            return;
        }

        // Validasi elemen DOM yang diperlukan
        if (!titleEl || !toolsEl || !overviewEl) {
            console.error('Required DOM elements not found');
            showErrorPage('Page Error', 'Unable to load project details. Please try again.');
            return;
        }

        // ===== 5. RENDER PROJECT DATA =====
        try {
            // Title
            titleEl.textContent = project.title;

            // Tools badges
            toolsEl.innerHTML = '';
            project.tools.forEach(tool => {
                const span = document.createElement('span');
                span.className = 'tool-badge-large';
                span.textContent = tool;
                toolsEl.appendChild(span);
            });

            // Overview
            overviewEl.textContent = project.overview;

            // Problem & Importance
            if (problemEl) {
                problemEl.innerHTML = `<p>${project.problem}</p>`;
            }

            // Data & Tools list
            if (dataEl) {
                dataEl.innerHTML = `
                    <ul class="detail-list">
                        <li><strong>Data Source:</strong> ${project.dataTools.source}</li>
                        <li><strong>Tools:</strong> ${project.dataTools.tools}</li>
                        <li><strong>Key Variables:</strong> ${project.dataTools.variables}</li>
                    </ul>
                `;
            }

            // Insights list
            if (insightsEl) {
                insightsEl.innerHTML = `
                    <ul class="detail-list">
                        ${project.insights.map(i => `<li>${i}</li>`).join('')}
                    </ul>
                `;
            }

            // Recommendation & Impact
            if (recoEl) {
                recoEl.innerHTML = `
                    <ul class="detail-list">
                        <li><strong>Actions:</strong> ${project.recommendation.actions}</li>
                        <li><strong>Impact:</strong> ${project.recommendation.impact}</li>
                    </ul>
                `;
            }

            // Reflection
            if (reflectionEl) {
                reflectionEl.innerHTML = `
                    <ul class="detail-list">
                        <li><strong>Limitations:</strong> ${project.reflection.limitations}</li>
                        <li><strong>What I Learned:</strong> ${project.reflection.learned}</li>
                        <li><strong>Future Improvement:</strong> ${project.reflection.future}</li>
                    </ul>
                `;
            }

            // ===== 6. HANDLE PROJECT HERO IMAGE =====
            if (projectHero && imageEl) {
                const hasImage = project.image && project.image.src;

                if (hasImage) {
                    const altText = project.image.alt || `${project.title} final UI`;
                    imageEl.alt = altText;
                    imageEl.src = project.image.src;

                    const revealImage = () => {
                        imageEl.hidden = false;
                        imageEl.classList.add('is-visible');
                        if (imageSkeleton) imageSkeleton.style.display = 'none';
                    };

                    imageEl.addEventListener('load', revealImage, { once: true });
                    
                    // Error handling untuk gambar
                    imageEl.addEventListener('error', () => {
                        console.warn(`Failed to load image: ${project.image.src}`);
                        projectHero.hidden = true;
                        if (imageSkeleton) imageSkeleton.style.display = 'none';
                    }, { once: true });

                    // Jika gambar sudah di-cache
                    if (imageEl.complete && imageEl.naturalWidth > 0) {
                        revealImage();
                    }
                } else {
                    projectHero.hidden = true;
                    if (imageSkeleton) imageSkeleton.style.display = 'none';
                }
            }

            // ===== 7. HANDLE WEBSITE PREVIEW (SIAkre only) =====
            const websitePreview = document.getElementById('website-preview');
            const previewImage = document.getElementById('preview-image');
            const previewImageSkeleton = document.getElementById('preview-image-skeleton');

            if (websitePreview) {
                if (projectId === 'atm' && project.image && project.image.src) {
                    const altText = project.image.alt || `${project.title} final UI`;
                    previewImage.alt = altText;
                    previewImage.src = project.image.src;

                    const revealPreviewImage = () => {
                        previewImage.classList.add('is-visible');
                        previewImage.hidden = false;
                        if (previewImageSkeleton) previewImageSkeleton.style.display = 'none';
                    };

                    previewImage.addEventListener('load', revealPreviewImage, { once: true });
                    
                    // Error handling untuk preview image
                    previewImage.addEventListener('error', () => {
                        console.warn(`Failed to load preview image: ${project.image.src}`);
                        websitePreview.hidden = true;
                        if (previewImageSkeleton) previewImageSkeleton.style.display = 'none';
                    }, { once: true });

                    // Jika gambar sudah di-cache
                    if (previewImage.complete && previewImage.naturalWidth > 0) {
                        revealPreviewImage();
                    }

                    websitePreview.hidden = false;
                } else {
                    websitePreview.hidden = true;
                }
            }

            // ===== 8. HANDLE MOBILE SHOWCASE (Studify only) =====
            if (mobileShowcase) {
                if (project.mobileShowcase && project.mobileShowcase.screens) {
                    const screens = project.mobileShowcase.screens;
                    const screen1 = document.getElementById('mobile-screen-1');
                    const screen2 = document.getElementById('mobile-screen-2');
                    const screen3 = document.getElementById('mobile-screen-3');

                    const loadMobileScreen = (imgEl, screenData) => {
                        if (imgEl && screenData) {
                            imgEl.src = screenData.src;
                            imgEl.alt = screenData.alt;
                            // Error handling untuk mobile screens
                            imgEl.addEventListener('error', () => {
                                console.warn(`Failed to load mobile screen: ${screenData.src}`);
                                imgEl.parentElement.style.display = 'none';
                            }, { once: true });
                        }
                    };

                    loadMobileScreen(screen1, screens[0]);
                    loadMobileScreen(screen2, screens[1]);
                    loadMobileScreen(screen3, screens[2]);

                    mobileShowcase.hidden = false;
                } else {
                    mobileShowcase.hidden = true;
                }
            }

            // ===== 9. RENDER ACTION BUTTONS =====
            if (actionsEl) {
                actionsEl.innerHTML = '';
                const makeBtn = (href, text, variant) => {
                    const a = document.createElement('a');
                    a.href = href || '#';
                    a.target = '_blank';
                    a.rel = 'noopener noreferrer';
                    a.className = `btn ${variant}`;
                    a.textContent = text;
                    return a;
                };
                
                if (project.links.github) {
                    actionsEl.appendChild(makeBtn(project.links.github, 'View Code on GitHub', 'btn-primary'));
                }
                if (project.links.report) {
                    actionsEl.appendChild(makeBtn(project.links.report, 'View Full Report (PDF)', 'btn-secondary'));
                }
            }

            // ===== 10. ADD ANIMATIONS =====
            titleEl.classList.add('animate-fade-up', 'delay-1');
            overviewEl.classList.add('animate-fade-up', 'delay-2');

            // Animate all detail sections
            const detailSections = document.querySelectorAll('.detail-section');
            detailSections.forEach((section, index) => {
                section.classList.add('animate-fade-up');
                section.style.animationDelay = `${0.45 + (index * 0.1)}s`;
            });

            // ===== 11. SHOW CONTENT & HIDE LOADER =====
            hideLoader();
            showContent();

        } catch (error) {
            console.error('Error rendering project details:', error);
            showErrorPage('Loading Error', 'An error occurred while loading the project details. Please try again.');
        }
    }
    
    // ========================================
    // SCROLL TO TOP BUTTON (OPTIONAL)
    // Uncomment this section if you want a "back to top" button
    // ========================================
    /*
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.setAttribute('id', 'scrollToTop');
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
    `;
    document.body.appendChild(scrollBtn);
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    // Scroll to top when button is clicked
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.backgroundColor = 'var(--primary-dark)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.backgroundColor = 'var(--primary-color)';
    });
    */
    
    // ========================================
    // FADE-IN ANIMATION ON SCROLL (OPTIONAL)
    // Uncomment this section for fade-in effects
    // ========================================
    /*
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Add fade-in class to elements you want to animate
    const fadeElements = document.querySelectorAll('.card, .skill-category, .certificate-item');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    */
    
    // ========================================
    // CONSOLE MESSAGE (OPTIONAL - FOR FUN)
    // ========================================
    console.log('%c👋 Hello! Thanks for checking out the code!', 
                'color: #4A90E2; font-size: 16px; font-weight: bold;');
    console.log('%cThis portfolio was built with HTML, CSS, and vanilla JavaScript.',
                'color: #5A6C7D; font-size: 12px;');
    
});

// ========================================
// FORM VALIDATION (IF YOU ADD A CONTACT FORM)
// ========================================
/*
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[name="name"]').value.trim();
        const email = this.querySelector('input[name="email"]').value.trim();
        const message = this.querySelector('textarea[name="message"]').value.trim();
        
        // Basic validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        
        // If validation passes, you can submit to your backend
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}
*/
