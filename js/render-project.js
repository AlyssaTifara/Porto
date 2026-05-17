import { getProject } from '../data/projects.js';

function setText(element, value) {
  if (element) {
    element.textContent = value || '';
  }
}

function renderList(container, items, itemClass = 'detail-list') {
  if (!container || !Array.isArray(items)) {
    return;
  }

  container.innerHTML = `
    <ul class="${itemClass}">
      ${items.map((item) => `<li>${item}</li>`).join('')}
    </ul>
  `;
}

function renderKeyValueList(container, pairs) {
  if (!container || !pairs) {
    return;
  }

  container.innerHTML = `
    <ul class="detail-list">
      ${pairs.map(([label, value]) => `<li><strong>${label}:</strong> ${value}</li>`).join('')}
    </ul>
  `;
}

function renderBadges(container, values, className = 'tool-badge-large') {
  if (!container || !Array.isArray(values)) {
    return;
  }

  container.innerHTML = '';
  values.forEach((value) => {
    const badge = document.createElement('span');
    badge.className = className;
    badge.textContent = value;
    container.appendChild(badge);
  });
}

function loadImage(imageElement, skeletonElement, source, alt, onError) {
  if (!imageElement || !source) {
    return;
  }

  imageElement.alt = alt || '';
  imageElement.src = source;

  const reveal = () => {
    imageElement.hidden = false;
    imageElement.classList.add('is-visible');
    if (skeletonElement) {
      skeletonElement.style.display = 'none';
    }
  };

  imageElement.addEventListener('load', reveal, { once: true });
  imageElement.addEventListener('error', () => {
    if (typeof onError === 'function') {
      onError();
    }
  }, { once: true });

  if (imageElement.complete && imageElement.naturalWidth > 0) {
    reveal();
  }
}

function showLoader(loaderEl) {
  if (loaderEl) {
    loaderEl.hidden = false;
    loaderEl.style.display = 'grid';
  }
}

function hideLoader(loaderEl) {
  if (loaderEl) {
    loaderEl.classList.add('is-hiding');
    setTimeout(() => {
      loaderEl.hidden = true;
      loaderEl.style.display = 'none';
    }, 280);
  }
}

function showContent(shellEl) {
  if (!shellEl) {
    return;
  }

  shellEl.hidden = false;
  shellEl.style.display = 'block';
  shellEl.style.opacity = '0';
  setTimeout(() => {
    shellEl.style.transition = 'opacity 0.4s ease';
    shellEl.style.opacity = '1';
  }, 50);
}

function showErrorPage(title, message, loaderEl, shellEl) {
  hideLoader(loaderEl);
  if (shellEl) {
    shellEl.remove();
  }

  const container = document.querySelector('.container');
  if (container) {
    container.insertAdjacentHTML(
      'beforeend',
      `
        <div style="min-height: 50vh; display: grid; place-items: center; text-align: center; color: var(--text-light); margin-top: var(--spacing-xl);">
          <div>
            <h2>${title}</h2>
            <p style="color: var(--text-gray); margin: 1rem 0 2rem;">${message}</p>
            <a href="projects.html" class="btn btn-primary">← Kembali ke Proyek</a>
          </div>
        </div>
      `
    );
  }
}

function renderProjectDetail() {
  const isProjectDetailPage = window.location.pathname.split('/').pop() === 'project-detail.html';
  if (!isProjectDetailPage) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get('id');

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
  const dashboardPreview = document.getElementById('dashboard-preview');
  const dashboardImage = document.getElementById('dashboard-image');
  const dashboardSkeleton = document.getElementById('dashboard-image-skeleton');
  const websitePreview = document.getElementById('website-preview');
  const previewImage = document.getElementById('preview-image');
  const previewImageSkeleton = document.getElementById('preview-image-skeleton');
  const m111DashboardGallery = document.getElementById('m111-dashboard-gallery');
  const m111DashboardGrid = document.getElementById('m111-dashboard-grid');

    const project = getProject(requestedId || '');

  if (!project) {
    showErrorPage('Proyek Tidak Ditemukan', 'Silakan pilih proyek yang tersedia untuk melihat detailnya.', loaderEl, shellEl);
    return;
  }


  if (!titleEl || !toolsEl || !overviewEl) {
    showErrorPage('Kesalahan Halaman', 'Tidak dapat memuat detail proyek.', loaderEl, shellEl);
    return;
  }

  try {
    setText(titleEl, project.title);
    renderBadges(toolsEl, project.tools);
    setText(overviewEl, project.overview);
    renderKeyValueList(problemEl, [['Masalah', project.problem]]);
    renderKeyValueList(dataEl, [
      ['Sumber Data', project.dataTools?.source],
      ['Tools', project.dataTools?.tools],
      ['Variabel Utama', project.dataTools?.variables]
    ]);
    renderList(insightsEl, project.insights);
    renderKeyValueList(recoEl, [
      ['Tindakan', project.recommendation?.actions],
      ['Dampak', project.recommendation?.impact]
    ]);
    renderKeyValueList(reflectionEl, [
      ['Keterbatasan', project.reflection?.limitations],
      ['Yang Saya Pelajari', project.reflection?.learned],
      ['Perbaikan Masa Depan', project.reflection?.future]
    ]);

    if (projectHero && imageEl) {
      if (project.image?.src) {
        loadImage(imageEl, imageSkeleton, project.image.src, project.image.alt, () => {
          projectHero.hidden = true;
          if (imageSkeleton) {
            imageSkeleton.style.display = 'none';
          }
        });
      } else {
        projectHero.hidden = true;
        if (imageSkeleton) {
          imageSkeleton.style.display = 'none';
        }
      }
    }

    if (websitePreview) {
        if (requestedId === 'atm' && project.image?.src && previewImage) {
        loadImage(previewImage, previewImageSkeleton, project.image.src, project.image.alt, () => {
          websitePreview.hidden = true;
        });
        websitePreview.hidden = false;
      } else {
        websitePreview.hidden = true;
      }
    }

    if (mobileShowcase) {
      const screens = project.mobileShowcase?.screens || [];
      const mobileScreens = ['mobile-screen-1', 'mobile-screen-2', 'mobile-screen-3']
        .map((screenId) => document.getElementById(screenId));

      if (screens.length && mobileScreens.every(Boolean)) {
        screens.forEach((screen, index) => {
          const imgEl = mobileScreens[index];
          if (!imgEl || !screen?.src) {
            return;
          }

          imgEl.alt = screen.alt || '';
          imgEl.src = screen.src;
          imgEl.addEventListener('error', () => {
            if (imgEl.parentElement) {
              imgEl.parentElement.style.display = 'none';
            }
          }, { once: true });
        });
        mobileShowcase.hidden = false;
      } else {
        mobileShowcase.hidden = true;
      }
    }

    if (dashboardPreview) {
        if (requestedId === 'airline-pricing-analysis' && project.image?.src && dashboardImage) {
        loadImage(dashboardImage, dashboardSkeleton, project.image.src, project.image.alt, () => {
          dashboardPreview.hidden = true;
        });
        dashboardPreview.hidden = false;
      } else {
        dashboardPreview.hidden = true;
      }
    }

    if (m111DashboardGallery && m111DashboardGrid) {
        const galleryItems = requestedId === 'm111' ? (project.dashboardGallery?.items || []) : [];
      m111DashboardGrid.innerHTML = '';

      galleryItems.forEach((item, index) => {
        if (!item?.src) {
          return;
        }

        const card = document.createElement('div');
        card.className = 'dashboard-gallery-item animate-fade-up';
        card.style.animationDelay = `${0.15 + index * 0.1}s`;
        if (item.width && item.height) {
          card.style.aspectRatio = `${item.width} / ${item.height}`;
        }

        card.innerHTML = `
          <div class="dashboard-gallery-skeleton" aria-hidden="true"></div>
          <img class="dashboard-gallery-image" alt="" loading="lazy" />
        `;

        const imgEl = card.querySelector('.dashboard-gallery-image');
        const skeletonEl = card.querySelector('.dashboard-gallery-skeleton');
        if (imgEl) {
          imgEl.alt = item.alt || `${project.title} preview`;
          imgEl.src = encodeURI(item.src);
          if (item.width && item.height) {
            imgEl.width = item.width;
            imgEl.height = item.height;
          }
          imgEl.addEventListener('load', () => {
            imgEl.classList.add('is-visible');
            imgEl.hidden = false;
            if (skeletonEl) {
              skeletonEl.style.display = 'none';
            }
          }, { once: true });
          imgEl.addEventListener('error', () => {
            card.remove();
            if (m111DashboardGrid.children.length === 0) {
              m111DashboardGallery.hidden = true;
            }
          }, { once: true });
          if (imgEl.complete && imgEl.naturalWidth > 0) {
            imgEl.classList.add('is-visible');
            imgEl.hidden = false;
            if (skeletonEl) {
              skeletonEl.style.display = 'none';
            }
          }
        }

        m111DashboardGrid.appendChild(card);
      });

      m111DashboardGallery.hidden = m111DashboardGrid.children.length === 0;
    }

    if (actionsEl) {
      actionsEl.innerHTML = '';
      const createButton = (href, label, variant) => {
        const button = document.createElement('a');
        button.href = href;
        button.target = '_blank';
        button.rel = 'noopener noreferrer';
        button.className = `btn ${variant}`;
        button.textContent = label;
        return button;
      };

      if (project.links?.github) {
        actionsEl.appendChild(createButton(project.links.github, 'Lihat Kode di GitHub', 'btn-primary'));
      }
      if (project.links?.report) {
        actionsEl.appendChild(createButton(project.links.report, 'Lihat Laporan Lengkap (PDF)', 'btn-secondary'));
      }
    }

    titleEl.classList.add('animate-fade-up', 'delay-1');
    overviewEl.classList.add('animate-fade-up', 'delay-2');
    document.querySelectorAll('.detail-section').forEach((section, index) => {
      section.classList.add('animate-fade-up');
      section.style.animationDelay = `${0.45 + index * 0.1}s`;
    });

    hideLoader(loaderEl);
    showContent(shellEl);
  } catch (error) {
    console.error('Error rendering project details:', error);
    showErrorPage('Kesalahan Pemuatan', 'Terjadi kesalahan saat memuat detail proyek.', loaderEl, shellEl);
  }
}

document.addEventListener('DOMContentLoaded', renderProjectDetail);
