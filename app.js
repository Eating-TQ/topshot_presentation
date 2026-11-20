(() => {
  const slides = window.slides;
  const stage = document.querySelector('.stage');
  const notesPanel = document.querySelector('.notes-panel');
  const notesContent = document.querySelector('.notes-content');
  const notesToggle = document.querySelector('.notes-toggle');
  const case01 = document.querySelector('[data-jump="case01"]');
  const case02 = document.querySelector('[data-jump="case02"]');
  const imageViewer = document.createElement('dialog');
  imageViewer.className = 'image-viewer';
  imageViewer.innerHTML = '<button class="image-viewer-close" type="button" aria-label="Close enlarged image">×</button><img alt="">';
  document.body.append(imageViewer);
  const viewerImage = imageViewer.querySelector('img');
  imageViewer.querySelector('.image-viewer-close').addEventListener('click',()=>imageViewer.close());
  imageViewer.addEventListener('click',e=>{if(e.target===imageViewer)imageViewer.close()});
  const videoViewer = document.createElement('dialog');
  videoViewer.className = 'video-viewer';
  videoViewer.innerHTML = '<button class="video-viewer-close" type="button" aria-label="Close video">×</button><video controls playsinline preload="metadata"></video>';
  document.body.append(videoViewer);
  const viewerVideo = videoViewer.querySelector('video');
  videoViewer.querySelector('.video-viewer-close').addEventListener('click',()=>videoViewer.close());
  videoViewer.addEventListener('click',e=>{if(e.target===videoViewer)videoViewer.close()});
  videoViewer.addEventListener('close',()=>{viewerVideo.pause();viewerVideo.removeAttribute('src');viewerVideo.loop=false;viewerVideo.muted=false;viewerVideo.autoplay=false;viewerVideo.load()});
  const embedViewer=document.createElement('dialog');
  embedViewer.className='embed-viewer';
  embedViewer.innerHTML='<button class="embed-viewer-close" type="button" aria-label="Close video">×</button><iframe title="Studio Space promotional video" src="" width="640" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowfullscreen></iframe>';
  document.body.append(embedViewer);
  const embedFrame=embedViewer.querySelector('iframe');
  embedViewer.querySelector('.embed-viewer-close').addEventListener('click',()=>embedViewer.close());
  embedViewer.addEventListener('click',e=>{if(e.target===embedViewer)embedViewer.close()});
  embedViewer.addEventListener('close',()=>{embedFrame.src=''});
  stage.addEventListener('click',e=>{
    const embedTrigger=e.target.closest('.studio-space-promo-trigger');
    if(embedTrigger){embedFrame.src=embedTrigger.dataset.videoEmbed;embedViewer.showModal();return}
    const trigger=e.target.closest('.module-video-trigger');
    if(!trigger)return;
    viewerVideo.src=trigger.dataset.video;
    viewerVideo.loop=false;
    viewerVideo.muted=false;
    viewerVideo.autoplay=false;
    videoViewer.showModal();
    viewerVideo.play().catch(()=>{});
  });
  stage.addEventListener('click',e=>{
    const trigger=e.target.closest('.zoom-trigger');
    if(!trigger)return;
    const thumb=trigger?.querySelector('img');
    if(thumb){
      viewerImage.src=thumb.src;
      viewerImage.alt=thumb.alt;
      imageViewer.showModal();
      return;
    }
    const video=trigger.querySelector('video');
    if(!video)return;
    viewerVideo.src=video.currentSrc||video.src;
    viewerVideo.loop=true;
    viewerVideo.muted=true;
    viewerVideo.autoplay=true;
    videoViewer.showModal();
    viewerVideo.play().catch(()=>{});
  });
  let current = Math.max(0, Math.min(slides.length - 1, Number(location.hash.match(/slide-(\d+)/)?.[1] || 1) - 1));

  function visual(v, imagePath, imageAlt) {
    if (!v) return '';
    if (imagePath) return `<div class="visual ${imagePath.includes('intro-')?'intro-image':'project-image'}"><img src="${imagePath}" alt="${imageAlt||''}"></div>`;
    return `<div class="visual"><span class="visual-tag">VISUAL PLACEHOLDER</span><div class="placeholder-inner"><span class="placeholder-num">${v[0]}</span><span class="placeholder-name">${v[1]}</span><span class="placeholder-kind">${v[2]}</span></div><span class="visual-caption">PROJECT VISUAL · TO BE ADDED</span></div>`;
  }
  function list(items, cls='bullet-list') {
    return items?.length ? `<ul class="${cls}">${items.map(x=>`<li>${x}</li>`).join('')}</ul>` : '';
  }
  function groups(items) {
    return items?.length ? `<div class="group-grid group-${Math.min(items.length,3)}">${items.map(g=>`<section class="content-card"><h3>${g.title}</h3>${list(g.items)}</section>`).join('')}</div>` : '';
  }
  function mediaGallery(items,className='workflow-gallery') {
    return `<div class="${className}">${items.map(item=>item.type==='video'?`<button class="zoom-trigger" type="button" aria-label="Play and enlarge video: ${item.alt}"><video src="${item.src}" muted autoplay loop playsinline preload="metadata" aria-label="${item.alt}"></video></button>`:`<button class="zoom-trigger" type="button" aria-label="Enlarge image: ${item.alt}"><img src="${item.src}" alt="${item.alt}"></button>`).join('')}</div>`;
  }
  function mediaGroupsSlide(slide) {
    const findMedia=id=>slide.media.find(item=>item.id===id);
    const left=slide.mediaLeft.map(findMedia).filter(Boolean);
    const right=slide.mediaRight.map(findMedia).filter(Boolean);
    return `<div class="slide-content media-groups-content"><div class="media-left-column"><div class="primary-copy"><h1>${slide.title}</h1><p class="subhead">${slide.subtitle}</p>${groups(slide.groups)}</div>${mediaGallery(left,'media-left-gallery')}</div>${mediaGallery(right,'workflow-gallery workflow-gallery-compact')}</div>`;
  }
  function mediaEvolutionSlide(slide) {
    const copy=`<div class="primary-copy"><h1>${slide.title}</h1><p class="subhead">${slide.subtitle}</p><h3 class="minor-title">${slide.heading}</h3>${list(slide.bullets)}<h3 class="minor-title second-heading">How the Workflow Evolved</h3><div class="stage-grid">${slide.stages.map((x,i)=>`<div class="stage-card"><span>0${i+1}</span><b>${x[0]}</b><p>${x[1]}</p></div>`).join('')}</div></div>`;
    return `<div class="slide-content slide-08-content">${copy}${mediaGallery(slide.media,'slide-08-gallery')}</div>`;
  }
  function mediaGroupsVertical(slide) {
    const pageClass=`slide-${slide.number}`;
    const promoButton=slide.promoVideoUrl?`<button class="module-demo-link studio-space-promo-trigger" type="button" data-video-embed="${slide.promoVideoUrl}">Watch Studio Space Promo <span aria-hidden="true">▶</span></button>`:'';
    return `<div class="slide-content ${pageClass}-content"><div class="primary-copy"><h1>${slide.title}</h1><p class="subhead">${slide.subtitle}</p>${groups(slide.groups)}${promoButton}</div>${mediaGallery(slide.media,`${pageClass}-gallery`)}</div>`;
  }
  function flow(steps) {
    return `<div class="flow">${steps.map((x,i)=>`${i?'<span class="flow-arrow">→</span>':''}<div class="flow-step"><span>0${i+1}</span><b>${x}</b></div>`).join('')}</div>`;
  }
  const flowIcons={
    eye:'<path d="M4 24s7-12 20-12 20 12 20 12-7 12-20 12S4 24 4 24Z"/><circle cx="24" cy="24" r="6"/><path d="M24 3v4M7 8l3 3M41 8l-3 3M24 41v4"/>',
    screen:'<rect x="7" y="8" width="34" height="22" rx="2"/><path d="M18 39h12M24 30v9"/><path d="M12 25h24"/>',
    scan:'<path d="M8 17V9h8M32 9h8v8M40 31v8h-8M16 39H8v-8"/><path d="M15 16h7v7h-7zM27 16h6v6h-6zM15 28h6v6h-6zM27 28h3v3h-3zM34 31h2v4h-2z"/>',
    phone:'<rect x="14" y="4" width="20" height="40" rx="4"/><path d="M20 9h8M21 38h6"/><rect x="18" y="14" width="12" height="17" rx="1"/>',
    claim:'<path d="M12 8h24v34H12z"/><path d="M17 8V5h14v3M18 15h12M18 20h12M18 25h7"/><path d="m21 33 4 4 8-9"/>',
    signup:'<circle cx="24" cy="15" r="7"/><path d="M10 42c1-9 6-14 14-14s13 5 14 14z"/><path d="M39 10v10M34 15h10"/>',
    bolt:'<path d="m27 3-17 24h13l-2 18 18-27H26l1-15Z"/>',
    layers:'<path d="m24 5 19 10-19 10L5 15 24 5Z"/><path d="m5 24 19 10 19-10M5 33l19 10 19-10"/>'
  };
  const flowDiagrams={
    screen:'<rect x="5" y="7" width="78" height="37" rx="2"/><path d="M37 44v8m14-8v8M29 52h30"/><circle cx="22" cy="21" r="6"/><path d="M12 37c1-7 5-10 10-10s9 3 10 10zM39 18h33M39 25h25M39 32h28"/>',
    scan:'<path d="M8 17V8h9M73 8h9v9M82 35v9h-9M17 44H8v-9"/><path d="M19 18h16v16H19zM44 18h12v12H44zM61 18h8v8h-8zM44 36h8v8h-8zM57 33h12v11H57z"/>',
    phone:'<rect x="31" y="3" width="27" height="48" rx="5"/><path d="M40 8h9M42 45h5"/><rect x="36" y="15" width="17" height="17" rx="2"/><path d="M36 37h17"/>',
    claim:'<rect x="27" y="6" width="34" height="45" rx="2"/><path d="M34 6V3h20v3M34 16h20M34 22h20"/><path d="m35 37 7 7 13-15"/>',
    signup:'<rect x="15" y="6" width="56" height="45" rx="3"/><circle cx="33" cy="22" r="7"/><path d="M22 41c1-7 5-10 11-10s10 3 11 10zM50 20h14M50 27h14M50 34h14"/>',
    arenaMobile:'<rect x="3" y="11" width="32" height="30" rx="2"/><path d="M13 41v6m12-6v6M9 47h20"/><path d="M9 21h20M9 27h12"/><path d="m46 28 10-8v16l-10-8Zm10-5h9v10h-9"/><path d="m67 26 8 2-8 2"/>',
    mobilePage:'<rect x="30" y="3" width="27" height="48" rx="5"/><path d="M39 8h9m-6 37h4"/><rect x="35" y="15" width="17" height="12" rx="1"/><path d="M36 32h15M36 37h15M36 42h9"/>',
    layers:'<path d="m44 5 19 10-19 10-19-10L44 5Z"/><path d="m25 24 19 10 19-10M25 33l19 10 19-10"/>'
  };
  function userFlow(steps){
    return `<div class="user-flow flow-${steps.length}">${steps.map((step,i)=>`<article class="user-flow-step"><div class="flow-step-heading"><span>${String(i+1).padStart(2,'0')}</span><b>${step.name}</b></div><p>${step.detail}</p><div class="step-icon"><svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">${flowIcons[step.icon]}</svg></div><div class="step-diagram"><svg viewBox="0 0 88 56" aria-hidden="true" focusable="false">${flowDiagrams[step.diagram||step.icon]}</svg></div></article>`).join('')}</div>`;
  }
  function table(slide) {
    return `<div class="content-table"><div class="table-row table-head">${slide.columns.map(x=>`<b>${x}</b>`).join('')}</div>${slide.rows.map(r=>`<div class="table-row">${r.map(x=>`<span>${x}</span>`).join('')}</div>`).join('')}</div>`;
  }
  function meta(items) {
    return `<div class="meta-grid">${items.map(([k,v])=>`<div class="meta-item"><span>${k}</span><b>${v}</b></div>`).join('')}</div>`;
  }
  function content(slide) {
    if (slide.kind === 'intro') return `<div class="slide-content intro-content"><div class="primary-copy"><h1>${slide.title}</h1><p class="role-line">${slide.subtitle}</p><p class="intro-statement">${slide.statement}</p><div class="selected-work"><span class="content-label">SELECTED CASE STUDIES</span>${slide.selected.map((x,i)=>`<p><b>0${i+1}</b>${x}</p>`).join('')}</div><div class="company-grid">${slide.companies.map(c=>`<section class="company-card"><img src="${c[2]}" alt="${c[0]} logo"><h3>${c[0]}</h3><p>${c[1]}</p></section>`).join('')}</div></div>${visual(slide.visual,slide.imagePath,slide.imageAlt)}</div>`;
    if (slide.kind === 'overview') return `<div class="slide-content overview-content"><div class="overview-heading"><h1>${slide.title}</h1><p class="subhead">${slide.subtitle}</p></div><div class="overview-photo">${slide.videoPath?`<div class="visual overview-video"><video src="${slide.videoPath}" autoplay muted loop playsinline preload="metadata" aria-label="${slide.videoAlt||slide.title}"></video></div>`:visual(slide.visual,slide.imagePath,slide.imageAlt)}</div><div class="overview-info">${meta(slide.details)}<section class="overview-summary"><h3>${slide.heading}</h3><p>${slide.body}</p></section></div></div>`;
    if (slide.kind === 'journey') return `<div class="slide-content journey-content"><div class="journey-heading"><h1>${slide.title}</h1><p class="subhead">${slide.subtitle}</p></div>${slide.imagePath?`<div class="journey-image"><img src="${slide.imagePath}" alt="${slide.imageAlt||''}"></div>`:''}<div class="journey-bottom">${slide.initialFlow?`<section class="journey-flow-card"><b>${slide.initialFlowLabel}</b><span>${slide.initialFlow.join(' → ')}</span></section>`:''}<section class="journey-points"><h3 class="minor-title">${slide.secondHeading}</h3>${list(slide.bullets)}</section>${slide.callout?`<div class="decision-callout"><b>${slide.calloutLabel}</b><span>${slide.callout}</span></div>`:''}</div>${!slide.imagePath?`<h3 class="minor-title">${slide.heading}</h3>${userFlow(slide.steps)}${slide.caption?`<p class="flow-caption">${slide.caption}</p>`:''}`:''}</div>`;
    if (slide.kind === 'touchpoints') return `<div class="slide-content touchpoints-content"><div class="touchpoint-copy"><div class="primary-copy"><h1>${slide.title}</h1><p class="subhead">${slide.subtitle}</p></div><div class="touchpoint-list">${slide.touchpoints.map(([number,title,detail])=>`<section class="touchpoint-card"><span class="touchpoint-number">${number}</span><div><b>${title}</b><p>${detail}</p></div></section>`).join('')}</div></div><div class="touchpoint-gallery">${slide.images.map(([src,alt])=>`<button class="zoom-trigger" type="button" aria-label="Enlarge image: ${alt}"><img src="${src}" alt="${alt}"></button>`).join('')}</div></div>`;
    if (slide.kind === 'table') return `<div class="slide-content"><div class="primary-copy"><h1>${slide.title}</h1><p class="subhead">${slide.subtitle}</p>${table(slide)}</div>${visual(slide.visual)}</div>`;
    if (slide.kind === 'modules') return `<div class="slide-content modules-content"><div class="primary-copy"><h1>${slide.title}</h1><p class="subhead">${slide.subtitle}</p><div class="module-grid">${slide.modules.map(m=>`<section class="content-card module-card"><span class="module-number">${m.number} —</span><h3>${m.title}</h3>${list(m.items)}</section>`).join('')}</div>${groups(slide.groups)}${slide.videoPath||slide.demoLink?`<div class="module-demo-actions">${slide.videoPath?`<button class="module-demo-link module-video-trigger" type="button" data-video="${slide.videoPath}">Landing Page Template Prototype <span aria-hidden="true">▶</span></button>`:''}${slide.demoLink?`<a class="module-demo-link" href="${slide.demoLink}" target="_blank" rel="noopener noreferrer">Open Demo <span aria-hidden="true">↗</span></a>`:''}</div>`:''}</div>${slide.images?`<div class="module-gallery">${slide.images.map(([src,alt])=>`<button class="zoom-trigger" type="button" aria-label="Enlarge image: ${alt}"><img src="${src}" alt="${alt}"></button>`).join('')}</div>`:visual(slide.visual)}</div>`;
    if (slide.kind === 'groups') return slide.media?(slide.mediaLayout==='vertical'?mediaGroupsVertical(slide):mediaGroupsSlide(slide)):`<div class="slide-content"><div class="primary-copy"><h1>${slide.title}</h1><p class="subhead">${slide.subtitle}</p>${groups(slide.groups)}</div>${visual(slide.visual)}</div>`;
    if (slide.kind === 'evolution') return slide.media?mediaEvolutionSlide(slide):`<div class="slide-content"><div class="primary-copy"><h1>${slide.title}</h1><p class="subhead">${slide.subtitle}</p><h3 class="minor-title">${slide.heading}</h3>${list(slide.bullets)}<h3 class="minor-title second-heading">How the Workflow Evolved</h3><div class="stage-grid">${slide.stages.map((x,i)=>`<div class="stage-card"><span>0${i+1}</span><b>${x[0]}</b><p>${x[1]}</p></div>`).join('')}</div></div>${visual(slide.visual)}</div>`;
    if (slide.kind === 'tradeoff') return `<div class="slide-content slide-09-content"><div class="primary-copy"><h1>${slide.title}</h1><p class="subhead">${slide.subtitle}</p>${groups(slide.groups)}</div>${slide.media?mediaGallery(slide.media,'slide-09-gallery'):visual(slide.visual)}</div>`;
    if (slide.kind === 'results') return `<div class="slide-content results-content slide-10-content"><div class="primary-copy"><h1>${slide.title}</h1><p class="subhead">${slide.subtitle}</p><div class="results-grid"><section class="metric-card"><span class="content-label">${slide.metricTitle}</span><strong>${slide.metric}</strong><b>${slide.metricLabel}</b><small>${slide.source}</small></section><div class="results-detail-cards"><section class="content-card"><h3>Implemented across multiple NBA events</h3>${list(slide.events)}</section><section class="content-card"><h3>Operational Impact</h3>${list(slide.impact)}</section></div></div></div>${slide.media?mediaGallery(slide.media,'slide-10-gallery'):visual(slide.visual)}</div>`;
    if (slide.kind === 'studio-space') return `<div class="slide-content slide-13-content"><div class="primary-copy"><h1>${slide.title}</h1><p class="subhead">${slide.subtitle}</p><div class="studio-grid"><section class="content-card"><h3>${slide.heading}</h3><p class="body-copy">${slide.intro}</p>${list(slide.opportunity)}</section><section class="content-card"><h3>A Multi-Team Workflow</h3><div class="workflow-list">${slide.workflow.map((x,i)=>`<div><span>0${i+1}</span><b>${x}</b></div>`).join('')}</div></section><section class="content-card evolution-card"><h3>Product Evolution</h3>${list(slide.evolution)}</section></div></div>${slide.media?mediaGallery(slide.media,'slide-13-gallery'):visual(slide.visual)}</div>`;
    if (slide.kind === 'closing') return `<div class="slide-content closing-content"><div class="primary-copy"><h1>${slide.title}</h1><p class="subhead">${slide.subtitle}</p>${groups(slide.groups)}<section class="closing-statement"><span class="content-label">CLOSING STATEMENT</span><p>${slide.closing}</p></section></div><div class="closing-thanks"><img src="assets/slide-15-take-a-bow.gif" alt="Take a bow"></div></div>`;
    return '';
  }
  function render() {
    const slide = slides[current];
    const section = slide.section || '';
    const sectionStart = slide.sectionTitle ? `<div class="section-banner"><span>${slide.sectionTitle}</span><i></i><b>${section.replace(/^CASE STUDY \d\d · /,'')}</b></div>` : '';
    const eyebrow=`<div class="eyebrow">${slide.number.toString().padStart(2,'0')} / 15 <span>${section || 'INTRODUCTION'}</span></div>`;
    const slideContent=content(slide);
    stage.innerHTML = `<article class="slide slide-${slide.number} ${slide.kind}-slide">${slide.number===1?`<div class="intro-page-center">${eyebrow}${slideContent}</div>`:`${eyebrow}${sectionStart}${slideContent}`}</article>`;
    document.querySelector('.counter').innerHTML = `<strong>${String(current+1).padStart(2,'0')}</strong><span> / </span><span>15</span>`;
    const progress = document.querySelector('.progress');
    progress.value = current+1;
    progress.style.setProperty('--progress',`${current/(slides.length-1)*100}%`);
    progress.setAttribute('aria-valuetext',`Slide ${current+1} of ${slides.length}`);
    location.replace(`#slide-${current+1}`);
    notesContent.innerHTML = slide.notes.map(p=>`<p>${p}</p>`).join('');
    document.querySelector('.prev').disabled = current===0;
    document.querySelector('.next').disabled = current===slides.length-1;
    case01.classList.toggle('active',current>=1&&current<=9);
    case02.classList.toggle('active',current>=10&&current<=13);
  }
  function go(n) { current=Math.max(0,Math.min(slides.length-1,n)); render(); }
  document.querySelector('.prev').addEventListener('click',()=>go(current-1));
  document.querySelector('.next').addEventListener('click',()=>go(current+1));
  document.querySelector('.progress').addEventListener('input',e=>go(Number(e.currentTarget.value)-1));
  case01.addEventListener('click',()=>go(1));
  case02.addEventListener('click',()=>go(10));
  document.querySelector('.fullscreen').addEventListener('click',()=>document.fullscreenElement?document.exitFullscreen?.():document.querySelector('.deck').requestFullscreen?.());
  function toggleNotes() {
    const open=!notesPanel.classList.contains('open');
    notesPanel.classList.toggle('open',open);
    notesPanel.setAttribute('aria-hidden',String(!open));
    notesToggle.setAttribute('aria-expanded',String(open));
    notesToggle.innerHTML=`NOTES <span>${open?'−':'＋'}</span>`;
  }
  notesToggle.addEventListener('click',toggleNotes);
  document.querySelector('.notes-close').addEventListener('click',toggleNotes);
  window.addEventListener('keydown',e=>{
    if(imageViewer.open||videoViewer.open){if(e.key==='Escape'){if(imageViewer.open)imageViewer.close();if(videoViewer.open)videoViewer.close()}return}
    if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();go(current+1)}
    else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();go(current-1)}
    else if(e.key==='Home')go(0);
    else if(e.key==='End')go(slides.length-1);
    else if(e.key.toLowerCase()==='n')toggleNotes();
  });
  let touchX=0;
  stage.addEventListener('touchstart',e=>touchX=e.changedTouches[0].clientX,{passive:true});
  stage.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-touchX;if(Math.abs(d)>65)go(current+(d<0?1:-1));},{passive:true});
  render();
})();
