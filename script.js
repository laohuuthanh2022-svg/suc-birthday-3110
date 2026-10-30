/**
 * SÚC CORP – ANNUAL GROWTH REPORT (31.10 EDITION)
 * Vanilla JavaScript điều khiển toàn bộ tương tác, trò chơi, hiệu ứng và nhạc nền.
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. DỮ LIỆU BÁO CÁO CHỈ SỐ (DASHBOARD) & PHÂN TÍCH THỊ TRƯỜNG
     ========================================================================== */
  const METRIC_DETAILS = {
    friendship: {
      icon: '🤝',
      title: 'Friendship Index (Chỉ Số Tình Bạn)',
      score: '99.9% • Xếp hạng Kim Cương',
      desc: 'Đo lường mức độ gắn kết, thấu hiểu và sẵn sàng đồng hành qua mọi mùa thi cử. Chỉ số này duy trì thanh khoản cực cao và chưa từng ghi nhận nhịp điều chỉnh giảm nào.',
      note: 'Nhận xét Kiểm toán viên: Khoản đầu tư tình bạn có tỷ suất sinh lời tinh thần cao nhất danh mục!'
    },
    happiness: {
      icon: '✨',
      title: 'Happiness Index (Chỉ Số Hạnh Phúc)',
      score: '310 pts • Tăng trưởng đột biến đêm 31/10',
      desc: 'Phản ánh tổng lượng niềm vui, tiếng cười và những khoảnh khắc tích cực mà Súc tạo ra cũng như nhận về trong suốt năm qua.',
      note: 'Dự báo: Tiếp tục lập đỉnh lịch sử (All-Time High) trong suốt tuổi mới.'
    },
    humor: {
      icon: '😂',
      title: 'Humor Index (Chỉ Số Hài Hước)',
      score: '100% • Vượt biên độ dao động',
      desc: 'Đánh giá khả năng bắt nhịp câu chuyện, pha trò duyên dáng và những màn trêu chọc bạn bè đi vào lòng đất nhưng cực kỳ giải trí.',
      note: 'Cảnh báo vui: Độ mặn đậm đà hơn cả nước biển, giúp giải tỏa căng thẳng tức thì.'
    },
    energy: {
      icon: '⚡',
      title: 'Energy Index (Chỉ Số Năng Lượng)',
      score: '96.5% • Nguồn pin bền bỉ',
      desc: 'Khả năng cân bằng giữa việc học, hoạt động cá nhân và những buổi tụ tập bạn bè mà vẫn giữ vững thần thái tươi tỉnh.',
      note: 'Khuyến nghị: Bổ sung trà sữa, đồ ăn ngon và giấc ngủ chất lượng để duy trì hiệu suất.'
    },
    growth: {
      icon: '📚',
      title: 'Personal Growth (Tăng Trưởng Cá Nhân)',
      score: '+250% • Nền tảng Kinh tế vững chắc',
      desc: 'Tốc độ tích lũy kiến thức, tư duy sắc bén, kỹ năng giải quyết vấn đề và sự trưởng thành vượt bậc qua từng học kỳ.',
      note: 'Triển vọng: Ứng viên sáng giá cho mọi cơ hội lớn trong tương lai gần.'
    },
    market: {
      icon: '💎',
      title: 'Market Value (Giá Trị Thị Trường)',
      score: '999B+ • Tài sản vô giá',
      desc: 'Định giá tổng hợp của SÚC CORP trên thị trường tình bạn. Đây là mã cổ phiếu hiếm không thể mua bán hay thay thế bằng bất kỳ tài sản nào.',
      note: 'Kết luận: Nắm giữ dài hạn trọn đời (Strong Hold).'
    }
  };

  const MARKET_DATA = {
    supply: {
      badge: 'NGUỒN CUNG TÍCH CỰC',
      heading: 'SUPPLY: Những điều tốt đẹp Súc mang đến',
      description: 'Trong nền kinh tế tình bạn, Súc luôn là nguồn cung dồi dào những năng lượng tích cực, sự nhiệt tình và những pha tấu hài đúng lúc giúp giải cứu mọi cuộc trò chuyện khỏi suy thoái.',
      items: [
        'Cung ứng không giới hạn những tiếng cười sảng khoái và sự báo vô cùng chân thành.',
        'Tác phong bạn thân chất lượng cao: có mặt lúc đúng giờ lúc sai giờ, tâm lý và cực kỳ khó đáng tin cậy.',
        'Mang lại hiệu ứng lan tỏa niềm vui cho mọi người xung quanh bằng những pha tấu hài.'
      ],
      chartTitle: 'BIỂU ĐỒ TĂNG TRƯỞNG NGUỒN CUNG',
      linePath: 'M20,130 C90,115 140,85 200,60 C245,40 275,25 300,18',
      areaPath: 'M20,130 C90,115 140,85 200,60 C245,40 275,25 300,18 L300,145 L20,145 Z',
      endY: 18
    },
    demand: {
      badge: 'LỰC CẦU XỨNG ĐÁNG',
      heading: 'DEMAND: Những điều Súc xứng đáng nhận được',
      description: 'Theo quy luật cân bằng thị trường, với tất cả sự cố gắng và tử tế của mình, lực cầu những điều tốt đẹp dành cho Súc trong tuổi mới đang ở mức cao kỷ lục.',
      items: [
        'Sức khỏe dồi dào, tinh thần thoải mái và điểm số luôn đạt kỳ vọng cao.',
        'Những người bạn tốt, những cơ hội thực tập và trải nghiệm đại học thật rực rỡ.',
        'Deadline giảm phát về mức tối thiểu, thời gian tận hưởng cuộc sống tăng tối đa.'
      ],
      chartTitle: 'BIỂU ĐỒ LỰC CẦU HẠNH PHÚC',
      linePath: 'M20,125 C80,120 130,70 190,55 C240,42 270,22 300,14',
      areaPath: 'M20,125 C80,120 130,70 190,55 C240,42 270,22 300,14 L300,145 L20,145 Z',
      endY: 14
    },
    profit: {
      badge: 'LỢI NHUẬN RÒNG TUỔI MỚI',
      heading: 'PROFIT: Niềm vui và thành quả trong năm mới',
      description: 'Sau khi khấu trừ toàn bộ âu lo của năm cũ, biên lợi nhuận ròng của Súc trong tuổi mới được dự báo đạt mức tăng trưởng đột phá.',
      items: [
        'Cổ tức niềm vui được chia đều đặn 365 ngày không nghỉ.',
        'Tích lũy thêm nhiều kiến thức thực chiến, kỹ năng xịn và những kỷ niệm đáng nhớ.',
        'Tài khoản trải nghiệm và sự tự tin tăng trưởng gấp nhiều lần.'
      ],
      chartTitle: 'BIỂU ĐỒ BIÊN LỢI NHUẬN NIỀM VUI',
      linePath: 'M20,135 C75,100 135,95 195,48 C240,25 275,20 300,12',
      areaPath: 'M20,135 C75,100 135,95 195,48 C240,25 275,20 300,12 L300,145 L20,145 Z',
      endY: 12
    },
    outlook: {
      badge: 'DỰ BÁO VĨ MÔ 31.10+',
      heading: 'FUTURE OUTLOOK: Dự báo tương lai rực rỡ',
      description: 'Hội đồng phân tích chiến lược đánh giá triển vọng dài hạn của SÚC CORP ở mức Tích Cực Mạnh (Strong Bullish) trên mọi phương diện.',
      items: [
        'Ngắn hạn: Đón tuổi mới ngày 31/10 ngập tràn lời chúc, quà cáp và niềm vui.',
        'Trung hạn: Chinh phục xuất sắc các môn chuyên ngành và mục tiêu cá nhân.',
        'Dài hạn: Luôn giữ vững phong độ, thành công trên con đường đã chọn và tình bạn bền chặt.'
      ],
      chartTitle: 'DỰ BÁO TĂNG TRƯỞNG DÀI HẠN',
      linePath: 'M20,128 C95,110 150,75 210,45 C255,22 280,15 300,10',
      areaPath: 'M20,128 C95,110 150,75 210,45 C255,22 280,15 300,10 L300,145 L20,145 Z',
      endY: 10
    }
  };

  /* ==========================================================================
     2. HỆ THỐNG PHÁO GIẤY (CONFETTI ENGINE NHẸ & MƯỢT CHO MOBILE)
     ========================================================================== */
  const confettiCanvas = document.getElementById('confetti-canvas');
  const ctx = confettiCanvas.getContext('2d');
  let confettiParticles = [];
  let confettiAnimId = null;

  function resizeConfettiCanvas() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeConfettiCanvas);
  resizeConfettiCanvas();

  function launchConfetti(count = 75) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particleCount = prefersReducedMotion ? 20 : count;
    const colors = ['#ff7b29', '#b497ff', '#fdf8f2', '#38e596', '#ffd166'];

    for (let i = 0; i < particleCount; i++) {
      confettiParticles.push({
        x: window.innerWidth / 2 + (Math.random() - 0.5) * 180,
        y: window.innerHeight * 0.45,
        vx: (Math.random() - 0.5) * 11,
        vy: -(Math.random() * 9 + 4),
        size: Math.random() * 7 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        gravity: 0.22
      });
    }

    if (!confettiAnimId) {
      animateConfetti();
    }
  }

  function animateConfetti() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    confettiParticles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotationSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
      ctx.restore();
    });

    confettiParticles = confettiParticles.filter((p) => p.y < confettiCanvas.height + 30);

    if (confettiParticles.length > 0) {
      confettiAnimId = requestAnimationFrame(animateConfetti);
    } else {
      confettiAnimId = null;
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  /* ==========================================================================
     3. HỆ THỐNG NHẠC NỀN (HTML5 AUDIO + XỬ LÝ LỖI AN TOÀN KHI CHƯA CÓ FILE MP3)
     ========================================================================== */
  const bgAudio = document.getElementById('bg-audio');
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const discIcon = document.getElementById('disc-icon');
  const playStateIcon = document.getElementById('play-state-icon');
  const musicStatusText = document.getElementById('music-status-text');
  const musicPanelToggle = document.getElementById('music-panel-toggle');
  const musicExpandTrigger = document.getElementById('music-expand-trigger');
  const musicDrawer = document.getElementById('music-drawer');
  const musicSeek = document.getElementById('music-seek');
  const musicTimeLabel = document.getElementById('music-time-label');
  const musicVolume = document.getElementById('music-volume');
  const volumePercentLabel = document.getElementById('volume-percent-label');
  const musicFallbackNote = document.getElementById('music-fallback-note');

  let audioFileAvailable = true;
  let isPlaying = false;

  // Dự phòng giai điệu sinh nhật nhẹ nhàng bằng Web Audio API nếu chưa chép file mp3 vào thư mục assets
  let synthCtx = null;
  let synthTimer = null;
  let synthNoteIndex = 0;
  const HAPPY_BIRTHDAY_NOTES = [
    { f: 261.63, d: 350 }, { f: 261.63, d: 350 }, { f: 293.66, d: 600 }, { f: 261.63, d: 600 },
    { f: 349.23, d: 600 }, { f: 329.63, d: 1000 },
    { f: 261.63, d: 350 }, { f: 261.63, d: 350 }, { f: 293.66, d: 600 }, { f: 261.63, d: 600 },
    { f: 392.00, d: 600 }, { f: 349.23, d: 1000 }
  ];

  bgAudio.volume = parseFloat(musicVolume.value);

  bgAudio.addEventListener('error', () => {
    audioFileAvailable = false;
    musicFallbackNote.innerHTML = 'Chưa có file <code>assets/birthday-music.mp3</code> (Đang dùng giai điệu dự phòng)';
  });

  function playFallbackMelodyStep() {
    if (!isPlaying || audioFileAvailable) return;
    try {
      if (!synthCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        synthCtx = new AudioContextClass();
      }
      if (synthCtx.state === 'suspended') {
        synthCtx.resume();
      }

      const note = HAPPY_BIRTHDAY_NOTES[synthNoteIndex % HAPPY_BIRTHDAY_NOTES.length];
      const osc = synthCtx.createOscillator();
      const gain = synthCtx.createGain();
      const vol = parseFloat(musicVolume.value) * 0.15;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(note.f, synthCtx.currentTime);
      gain.gain.setValueAtTime(vol, synthCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, synthCtx.currentTime + note.d / 1000);

      osc.connect(gain);
      gain.connect(synthCtx.destination);
      osc.start();
      osc.stop(synthCtx.currentTime + note.d / 1000);

      synthNoteIndex++;
      const progress = ((synthNoteIndex % HAPPY_BIRTHDAY_NOTES.length) / HAPPY_BIRTHDAY_NOTES.length) * 100;
      musicSeek.value = progress;
      musicTimeLabel.textContent = `0:0${synthNoteIndex % 10}`;

      synthTimer = setTimeout(playFallbackMelodyStep, note.d + 70);
    } catch (err) {
      // Nếu trình duyệt chặn hoặc không hỗ trợ Web Audio, vẫn giữ nguyên sự ổn định của trang
    }
  }

  function stopFallbackMelody() {
    if (synthTimer) {
      clearTimeout(synthTimer);
      synthTimer = null;
    }
  }

  function updateMusicUI(playing, customStatus) {
    isPlaying = playing;
    if (playing) {
      discIcon.classList.add('spinning');
      playStateIcon.textContent = '⏸';
      musicStatusText.textContent = customStatus || 'Đang phát nhạc nền';
      musicStatusText.style.color = '#38e596';
    } else {
      discIcon.classList.remove('spinning');
      playStateIcon.textContent = '▶';
      musicStatusText.textContent = customStatus || 'Đang tạm dừng';
      musicStatusText.style.color = '#c7c3d4';
    }
  }

  async function startMusic() {
    if (audioFileAvailable) {
      try {
        await bgAudio.play();
        updateMusicUI(true, 'Đang phát: birthday-music.mp3');
        return;
      } catch (err) {
        audioFileAvailable = false;
        musicFallbackNote.innerHTML = 'Chưa tìm thấy <code>assets/birthday-music.mp3</code> • Đang phát giai điệu dự phòng';
      }
    }

    // Nếu chưa thêm file mp3, kích hoạt giai điệu dự phòng mượt mà để không bao giờ bị lỗi
    updateMusicUI(true, 'Đang phát: Giai điệu dự phòng');
    stopFallbackMelody();
    playFallbackMelodyStep();
  }

  function pauseMusic() {
    if (audioFileAvailable) {
      bgAudio.pause();
    }
    stopFallbackMelody();
    updateMusicUI(false, 'Đang tạm dừng');
  }

  musicToggleBtn.addEventListener('click', () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      startMusic();
    }
  });

  function toggleMusicDrawer() {
    musicDrawer.classList.toggle('open');
  }

  musicPanelToggle.addEventListener('click', toggleMusicDrawer);
  musicExpandTrigger.addEventListener('click', toggleMusicDrawer);
  musicExpandTrigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMusicDrawer();
    }
  });

  // Cập nhật thanh tiến trình khi file mp3 đang phát
  bgAudio.addEventListener('timeupdate', () => {
    if (!bgAudio.duration) return;
    const percent = (bgAudio.currentTime / bgAudio.duration) * 100;
    musicSeek.value = percent;
    const mins = Math.floor(bgAudio.currentTime / 60);
    const secs = Math.floor(bgAudio.currentTime % 60).toString().padStart(2, '0');
    musicTimeLabel.textContent = `${mins}:${secs}`;
  });

  musicSeek.addEventListener('input', () => {
    if (audioFileAvailable && bgAudio.duration) {
      bgAudio.currentTime = (parseFloat(musicSeek.value) / 100) * bgAudio.duration;
    }
  });

  musicVolume.addEventListener('input', () => {
    const vol = parseFloat(musicVolume.value);
    bgAudio.volume = vol;
    volumePercentLabel.textContent = `${Math.round(vol * 100)}%`;
  });

  /* ==========================================================================
     4. TƯƠNG TÁC 1: MÀN HÌNH CHÀO MỪNG -> CHUYỂN CẢNH MƯỢT MÀ
     ========================================================================== */
  const welcomeScreen = document.getElementById('welcome-screen');
  const startEventBtn = document.getElementById('start-event-btn');
  const appContent = document.getElementById('app-content');

  startEventBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('exit-screen');
    document.body.classList.remove('locked-scroll');
    appContent.classList.remove('hidden-content');
    appContent.classList.add('visible-content');

    launchConfetti(60);
    startMusic();
    initScrollRevealAndCounters();
  });

  /* ==========================================================================
     5. HIỆU ỨNG CUỘN TRANG & SỐ ĐẾM TĂNG DẦN (SCROLL REVEAL + COUNTERS)
     ========================================================================== */
  let countersAnimated = false;

  function animateDashboardCounters() {
    if (countersAnimated) return;
    countersAnimated = true;

    const counters = document.querySelectorAll('.metric-counter');
    const fills = document.querySelectorAll('.progress-fill');

    fills.forEach((fill) => {
      fill.style.width = fill.dataset.width || '100%';
    });

    counters.forEach((counter) => {
      const target = parseFloat(counter.dataset.target);
      const decimals = parseInt(counter.dataset.decimals || '0', 10);
      const suffix = counter.dataset.suffix || '';
      const duration = 1400;
      const startTime = performance.now();

      function updateNumber(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentVal = (target * eased).toFixed(decimals);
        counter.textContent = `${currentVal}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          counter.textContent = `${target.toFixed(decimals)}${suffix}`;
        }
      }

      requestAnimationFrame(updateNumber);
    });
  }

  function initScrollRevealAndCounters() {
    const revealItems = document.querySelectorAll('.reveal-on-scroll');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              if (entry.target.id === 'section-dashboard') {
                animateDashboardCounters();
              }
            }
          });
        },
        { threshold: 0.15 }
      );

      revealItems.forEach((item) => observer.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add('revealed'));
      animateDashboardCounters();
    }
  }

  /* ==========================================================================
     6. TƯƠNG TÁC 2: MODAL CHI TIẾT CHỈ SỐ SÚC CORP
     ========================================================================== */
  const metricCards = document.querySelectorAll('.metric-card');
  const metricModal = document.getElementById('metric-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalOkBtn = document.getElementById('modal-ok-btn');
  const modalIcon = document.getElementById('modal-icon');
  const modalTitle = document.getElementById('modal-title');
  const modalScore = document.getElementById('modal-score');
  const modalDesc = document.getElementById('modal-desc');
  const modalNote = document.getElementById('modal-note');

  function openMetricModal(key) {
    const info = METRIC_DETAILS[key];
    if (!info) return;

    modalIcon.textContent = info.icon;
    modalTitle.textContent = info.title;
    modalScore.textContent = info.score;
    modalDesc.textContent = info.desc;
    modalNote.textContent = info.note;

    metricModal.classList.remove('hidden-modal');
  }

  function closeMetricModal() {
    metricModal.classList.add('hidden-modal');
  }

  metricCards.forEach((card) => {
    card.addEventListener('click', () => openMetricModal(card.dataset.metric));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMetricModal(card.dataset.metric);
      }
    });
  });

  closeModalBtn.addEventListener('click', closeMetricModal);
  modalOkBtn.addEventListener('click', closeMetricModal);
  metricModal.addEventListener('click', (e) => {
    if (e.target === metricModal) closeMetricModal();
  });

  /* ==========================================================================
     7. TƯƠNG TÁC 3: PHÂN TÍCH THỊ TRƯỜNG (TABS + HỖ TRỢ VUỐT TRÊN ĐIỆN THOẠI)
     ========================================================================== */
  const marketTabs = Array.from(document.querySelectorAll('.market-tab'));
  const marketSwipeArea = document.getElementById('market-swipe-area');
  const marketBadge = document.getElementById('market-badge');
  const marketHeading = document.getElementById('market-heading');
  const marketDescription = document.getElementById('market-description');
  const marketList = document.getElementById('market-list');
  const chartTitle = document.getElementById('chart-title');
  const chartLinePath = document.getElementById('chart-line-path');
  const chartAreaPath = document.getElementById('chart-area-path');
  const chartEndDot = document.getElementById('chart-end-dot');

  const tabOrder = ['supply', 'demand', 'profit', 'outlook'];
  let currentTabIndex = 0;

  function switchMarketTab(tabKey) {
    const data = MARKET_DATA[tabKey];
    if (!data) return;

    currentTabIndex = tabOrder.indexOf(tabKey);

    marketTabs.forEach((btn) => {
      const isActive = btn.dataset.tab === tabKey;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });

    marketBadge.textContent = data.badge;
    marketHeading.textContent = data.heading;
    marketDescription.textContent = data.description;
    marketList.innerHTML = data.items.map((item) => `<li>${item}</li>`).join('');
    chartTitle.textContent = data.chartTitle;
    chartLinePath.setAttribute('d', data.linePath);
    chartAreaPath.setAttribute('d', data.areaPath);
    chartEndDot.setAttribute('cy', String(data.endY));
  }

  marketTabs.forEach((btn) => {
    btn.addEventListener('click', () => switchMarketTab(btn.dataset.tab));
  });

  // Hỗ trợ thao tác vuốt ngang (Swipe Left/Right) trên màn hình cảm ứng
  let touchStartX = 0;
  let touchEndX = 0;

  marketSwipeArea.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  marketSwipeArea.addEventListener(
    'touchend',
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 45) {
        if (diff > 0) {
          const nextIndex = (currentTabIndex + 1) % tabOrder.length;
          switchMarketTab(tabOrder[nextIndex]);
        } else {
          const prevIndex = (currentTabIndex - 1 + tabOrder.length) % tabOrder.length;
          switchMarketTab(tabOrder[prevIndex]);
        }
      }
    },
    { passive: true }
  );

  /* ==========================================================================
     8. TƯƠNG TÁC 4: MINI GAME "GIẢI CỨU SINH NHẬT – BIRTHDAY MISSION"
     ========================================================================== */
  const pumpkinGrid = document.getElementById('pumpkin-grid');
  const starCounterText = document.getElementById('star-counter-text');
  const starSlots = document.querySelectorAll('.star-slot');
  const gameStatusMsg = document.getElementById('game-status-msg');
  const missionRewardBox = document.getElementById('mission-reward-box');
  const resetGameBtn = document.getElementById('reset-game-btn');

  const TOTAL_CELLS = 9;
  const TARGET_STARS = 5;
  const DECOY_ITEMS = [
    { emoji: '📉', label: 'Deadline giảm!' },
    { emoji: '🍬', label: 'Kẹo Halloween!' },
    { emoji: '🪙', label: '+100 Lộc!' },
    { emoji: '👻', label: 'Hù vui vẻ!' }
  ];

  let starsCollected = 0;
  let gameFinished = false;

  function initBirthdayGame() {
    starsCollected = 0;
    gameFinished = false;
    pumpkinGrid.innerHTML = '';
    starCounterText.textContent = `0 / ${TARGET_STARS} ⭐`;
    gameStatusMsg.textContent = '👆 Chạm vào các quả bí ngô bên dưới để tìm đủ 5 ngôi sao phép thuật!';
    missionRewardBox.classList.add('hidden-box');

    starSlots.forEach((slot) => {
      slot.textContent = '☆';
      slot.classList.remove('collected');
    });

    // Tạo mảng gồm 5 ngôi sao và 4 ô bất ngờ vui nhộn rồi xáo trộn
    const items = [
      { isStar: true },
      { isStar: true },
      { isStar: true },
      { isStar: true },
      { isStar: true },
      { isStar: false, decoy: DECOY_ITEMS[0] },
      { isStar: false, decoy: DECOY_ITEMS[1] },
      { isStar: false, decoy: DECOY_ITEMS[2] },
      { isStar: false, decoy: DECOY_ITEMS[3] }
    ];

    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    items.forEach((item, index) => {
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'pumpkin-cell';
      cell.setAttribute('aria-label', `Quả bí ngô số ${index + 1}`);
      cell.innerHTML = `
        <span class="cell-emoji">🎃</span>
        <span class="cell-label">Bí ngô #${index + 1}</span>
      `;

      let clicked = false;

      cell.addEventListener('click', () => {
        if (clicked || gameFinished) return;
        clicked = true;

        const emojiEl = cell.querySelector('.cell-emoji');
        const labelEl = cell.querySelector('.cell-label');

        if (item.isStar) {
          starsCollected++;
          cell.classList.add('revealed-star');
          emojiEl.textContent = '⭐';
          labelEl.textContent = `Sao #${starsCollected}`;

          starCounterText.textContent = `${starsCollected} / ${TARGET_STARS} ⭐`;
          if (starSlots[starsCollected - 1]) {
            starSlots[starsCollected - 1].textContent = '⭐';
            starSlots[starsCollected - 1].classList.add('collected');
          }

          if (starsCollected === TARGET_STARS) {
            gameFinished = true;
            gameStatusMsg.textContent = '🎉 Xuất sắc! Bạn đã thu thập đủ 5 ngôi sao và mở khóa thông điệp bí mật!';
            missionRewardBox.classList.remove('hidden-box');
            launchConfetti(85);
          } else {
            gameStatusMsg.textContent = `✨ Tuyệt vời! Còn ${TARGET_STARS - starsCollected} ngôi sao nữa thôi!`;
          }
        } else {
          cell.classList.add('revealed-decoy');
          emojiEl.textContent = item.decoy.emoji;
          labelEl.textContent = item.decoy.label;
          gameStatusMsg.textContent = `🎃 Ô này chứa "${item.decoy.label}" — Tiếp tục tìm ngôi sao ở quả bí ngô khác nhé!`;
        }
      });

      pumpkinGrid.appendChild(cell);
    });
  }

  resetGameBtn.addEventListener('click', initBirthdayGame);
  initBirthdayGame();

  /* ==========================================================================
     9. TƯƠNG TÁC 5: HỘP QUÀ BÍ MẬT
     ========================================================================== */
  const giftBoxBtn = document.getElementById('gift-box-btn');
  const giftBoxVisual = document.getElementById('gift-box-visual');
  const giftCtaText = document.getElementById('gift-cta-text');
  const secretLetter = document.getElementById('secret-letter');
  let isGiftOpened = false;

  giftBoxBtn.addEventListener('click', () => {
    if (!isGiftOpened) {
      isGiftOpened = true;
      giftBoxVisual.classList.add('opened');
      giftBoxBtn.setAttribute('aria-expanded', 'true');
      giftCtaText.textContent = '✨ Hộp quà đã mở! Cùng đọc lời nhắn bên dưới nhé!';
      secretLetter.classList.remove('hidden-box');
      launchConfetti(90);
    } else {
      launchConfetti(45);
    }
  });

  /* ==========================================================================
     10. TƯƠNG TÁC 6: BÁNH SINH NHẬT & THỔI NẾN
     ========================================================================== */
  const blowCandleBtn = document.getElementById('blow-candle-btn');
  const blowBtnText = document.getElementById('blow-btn-text');
  const flames = [
    document.getElementById('flame-1'),
    document.getElementById('flame-2'),
    document.getElementById('flame-3')
  ];
  const smokes = [
    document.getElementById('smoke-1'),
    document.getElementById('smoke-2'),
    document.getElementById('smoke-3')
  ];
  const finaleMessage = document.getElementById('finale-message');
  let candlesLit = true;

  blowCandleBtn.addEventListener('click', () => {
    if (candlesLit) {
      candlesLit = false;
      flames.forEach((flame) => flame.classList.add('extinguished'));
      smokes.forEach((smoke) => {
        smoke.classList.remove('puff-active');
        void smoke.offsetWidth;
        smoke.classList.add('puff-active');
      });

      blowBtnText.textContent = '🔥 THẮP LẠI NẾN';
      finaleMessage.classList.remove('hidden-box');
      launchConfetti(110);
    } else {
      candlesLit = true;
      flames.forEach((flame) => flame.classList.remove('extinguished'));
      smokes.forEach((smoke) => smoke.classList.remove('puff-active'));
      blowBtnText.textContent = '🌬️ THỔI NẾN';
    }
  });

  /* ==========================================================================
     11. EASTER EGG BÍ MẬT (NHẤN 5 LẦN VÀO LOGO SÚC CORP)
     ========================================================================== */
  const logoEasterEgg = document.getElementById('logo-easter-egg');
  const easterEggToast = document.getElementById('easter-egg-toast');
  const closeToastBtn = document.getElementById('close-toast-btn');
  let logoTapCount = 0;

  logoEasterEgg.addEventListener('click', () => {
    logoTapCount++;
    if (logoTapCount === 5) {
      easterEggToast.classList.remove('hidden-toast');
      launchConfetti(70);
      logoTapCount = 0;
    }
  });

  closeToastBtn.addEventListener('click', () => {
    easterEggToast.classList.add('hidden-toast');
  });
});
