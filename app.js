/*
  =========================================
  GAMIN — MINIMALIST APP & CLERK AUTH LOGIC
  =========================================
*/

// --- 1. CORE APPLICATION STATE & MINIMALIST SEED DATA ---
const DEFAULT_POSTS = [
  {
    id: "post_1",
    title: "Minimalism in Game Design: The Elegance of Less",
    category: "review",
    content: "Minimalism isn't just about white space; it is about absolute mechanics precision. In games like 'Gris' and 'Monument Valley', every screen frame is a balanced design layout, and the lack of UI clutter creates deep immersion.\n\nBy stripping away unnecessary menus and glowing HUDs, developers force gamers to focus on clean auditory cues and responsive physical feel. Highly recommended read for anyone wanting to design peaceful, calm, yet challenging indie projects. My rating: 9.2/10.",
    author: "MinimalistGamer",
    authorRole: "gamer",
    authorAvatar: "Aero",
    image: "cozy-setup",
    likes: 38,
    likedBy: [],
    views: 245,
    timestamp: "3 hours ago",
    comments: [
      { id: "c1", author: "RetroStudio", role: "dev", avatar: "RetroStudio", text: "Spot on review. We took heavy inspiration from architectural minimalism for our upcoming puzzle controls.", timestamp: "2 hours ago" },
      { id: "c2", author: "PixelCozy", role: "gamer", avatar: "Volt", text: "Yes! Visual silence in modern gaming is such a breath of fresh air.", timestamp: "1 hour ago" }
    ]
  },
  {
    id: "post_2",
    title: "Guide: Perfecting Tactile Controls in Isometric Puzzles",
    category: "tip",
    content: "When designing isometric grids, clean touch/click input feedback is essential. Here is our checklist:\n\n1. Buffer input arrays to avoid parry misalignments during frame drops.\n2. Apply extremely subtle scale offsets on hover to give tactile click assurance.\n3. Make sure pathfinding logic takes into account player speed deceleration curves.\n\nKeep controls flat, responsive, and predictable. Simple guidelines, huge impact!",
    author: "RetroStudio",
    authorRole: "dev",
    authorAvatar: "RetroStudio",
    image: "clean-desk",
    likes: 64,
    likedBy: [],
    views: 412,
    timestamp: "6 hours ago",
    comments: [
      { id: "c3", author: "DesignCore", role: "gamer", avatar: "Alpha", text: "This deceleration tip saved my pathfinder prototype! Thanks for sharing developer insights.", timestamp: "4 hours ago" }
    ]
  },
  {
    id: "post_3",
    title: "LFG: chill cooperative strategy runs",
    category: "squad",
    content: "Recruiting a cozy team for strategy challenges next weekend! I am looking for two players to coordinate peaceful multiplayer co-op sessions.\n\nRequirements:\n- Calm attitude, anti-toxic gameplay.\n- Available Saturday morning at 15:00 UTC.\n- Loves puzzle strategies.\n\nLeave a comment below with your tag to apply!",
    author: "PixelCozy",
    authorRole: "gamer",
    authorAvatar: "Volt",
    image: "indie-gaming",
    likes: 12,
    likedBy: [],
    views: 110,
    timestamp: "2 days ago",
    comments: [
      { id: "c4", author: "DesignCore", role: "gamer", avatar: "Alpha", text: "Definitely down for this. Count me in!", timestamp: "1 day ago" }
    ]
  },
  {
    id: "post_4",
    title: "Elden Ring: The Art of Shield Parrying",
    category: "tip",
    content: "Shield parrying in Elden Ring is all about rhythm. Instead of watching the boss's sword tip, watch their right elbow. Right as the hand starts to accelerate forward from the peak of their backswing, hit the parry button!\n\nThis simple shift in visual focus will raise your success rate from 20% to 90% instantly. Try it on Crucible Knights first — they have the most telegraphic swings.",
    author: "OnyxRider",
    authorRole: "gamer",
    authorAvatar: "Storm",
    image: "cozy-setup",
    likes: 89,
    likedBy: [],
    views: 520,
    timestamp: "1 day ago",
    comments: [
      { id: "c5", author: "CS_Marshal", role: "gamer", avatar: "Echo", text: "This visual cue works perfectly! Finally beat that dual knight fight.", timestamp: "18 hours ago" }
    ]
  },
  {
    id: "post_5",
    title: "Review: Why 'Dorfromantik' is the ultimate calm strategy game",
    category: "review",
    content: "If you want a strategy game that relaxes you instead of spiking your cortisol, Dorfromantik is the gold standard. By stacking hexagonal tiles to build forests, railways, and rivers, the game rewards quiet forward-thinking without time constraints.\n\nThe acoustic score is soothing, the visual landscape is stunning, and the high-score feedback is pure dopamine. A masterpiece of cozy strategic planning. My rating: 9.5/10.",
    author: "CozyIndieDev",
    authorRole: "dev",
    authorAvatar: "Volt",
    image: "indie-gaming",
    likes: 104,
    likedBy: [],
    views: 820,
    timestamp: "3 days ago",
    comments: [
      { id: "c6", author: "MinimalistGamer", role: "gamer", avatar: "Aero", text: "Dorfromantik is my absolute go-to while programming or unwinding. Pure peace.", timestamp: "2 days ago" }
    ]
  },
  {
    id: "post_6",
    title: "Squad LFG: Looking for serious tactical FPS support",
    category: "squad",
    content: "Forming a tactical team for competitive FPS league trials next month. We need an experienced support player who coordinates utility and understands deceleration curves.\n\nOur current ranks are Immortal/Ascendant. Schedule: Tue/Thu 19:00 EST. Let's build a squad and level up our passport score!",
    author: "CS_Marshal",
    authorRole: "gamer",
    authorAvatar: "Echo",
    image: "clean-desk",
    likes: 47,
    likedBy: [],
    views: 310,
    timestamp: "4 days ago",
    comments: [
      { id: "c7", author: "RetroStudio", role: "dev", avatar: "RetroStudio", text: "Hit me up in the DMs! I'd love to consult on crosshair spacing configurations.", timestamp: "3 days ago" }
    ]
  }
];

const DEFAULT_CHALLENGES = [
  {
    id: "chal_1",
    title: "Cozy Strategy Speedrun",
    description: "Complete the initial 5 levels of any recommended indie puzzle game in under 6 minutes. Submission requires a video proof.",
    difficulty: "Medium",
    xp: 900,
    progress: 0,
    status: "Available"
  },
  {
    id: "chal_2",
    title: "The Zero UI Quest",
    description: "Complete any tactical strategy match with the HUD display completely turned off. Requires clean control mastery.",
    difficulty: "Hard",
    xp: 1200,
    progress: 0,
    status: "Available"
  },
  {
    id: "chal_3",
    title: "Community Design Critic",
    description: "Submit a feedback application on the Contact tab proposing minimalist UI optimizations for GAMIN network.",
    difficulty: "Easy",
    xp: 300,
    progress: 0,
    status: "Available"
  }
];

const DEFAULT_ACHIEVEMENTS = [
  {
    id: "ach_1",
    title: "Founding Member",
    description: "Joined the GAMIN social community platform during its initial beta launch.",
    unlocked: true,
    date: "May 2026",
    icon: "🧭"
  },
  {
    id: "ach_2",
    title: "Tactical Strategist",
    description: "Formed a tactical squad containing at least 4 active community members.",
    unlocked: false,
    date: "Locked",
    icon: "🛡️"
  },
  {
    id: "ach_3",
    title: "Community Supporter",
    description: "Successfully submitted verified feedback or signed up for tournament lists using the web forms.",
    unlocked: false,
    date: "Locked",
    icon: "🤝"
  },
  {
    id: "ach_4",
    title: "Dev Approved Gamer",
    description: "Received an official upvote or direct comment reply from a verified game developer.",
    unlocked: false,
    date: "Locked",
    icon: "👑"
  }
];

const DEFAULT_SQUAD = [
  { username: "PixelWarrior", role: "Squad Leader", avatar: "Aero" },
  { username: "RetroStudio", role: "Dev-Consultant", avatar: "RetroStudio" }
];

const DEFAULT_QUESTIONS = [
  {
    id: "q_1",
    title: "What is the single most important rule when designing clean user interfaces in Unity?",
    content: "I'm trying to refactor my game's HUD to make it extremely minimalist. What are your golden rules for spacing, font sizes, and feedback scales? Do you recommend using standard screen-space overlays or world-space canvases?",
    author: "UnityBeginner",
    avatar: "Aero",
    role: "gamer",
    flair: "gamedev",
    upvotes: 24,
    downvotes: 2,
    upvotedBy: [],
    downvotedBy: [],
    savedBy: [],
    views: 142,
    timestamp: "4 hours ago",
    answers: [
      { id: "ans_1", author: "RetroStudio", role: "dev", avatar: "RetroStudio", text: "Always maintain consistent grid paddings (we stick to multiples of 4px/8px). For minimalist games, screen-space overlays are usually best because they scale uniformly, but disable pixel-perfect on elements that transition scales to avoid jagged edges.", upvotes: 12, upvotedBy: [], timestamp: "2 hours ago" },
      { id: "ans_2", author: "MinimalistGamer", role: "gamer", avatar: "Volt", text: "Also, keep color palettes restricted. A primary highlight (like our sage green) and 2 grayscale tones are all you need for 90% of UI components.", upvotes: 7, upvotedBy: [], timestamp: "1 hour ago" }
    ]
  },
  {
    id: "q_2",
    title: "Gamers, what indie game soundtracks do you listen to while programming or designing?",
    content: "Looking to build a chill, cozy programming playlist. Synthwave is cool, but peaceful ambient soundtracks help me concentrate the most. What are your absolute favorites?",
    author: "CodeCraft",
    avatar: "Alpha",
    role: "dev",
    flair: "discussion",
    upvotes: 45,
    downvotes: 1,
    upvotedBy: [],
    downvotedBy: [],
    savedBy: [],
    views: 290,
    timestamp: "8 hours ago",
    answers: [
      { id: "ans_3", author: "PixelCozy", role: "gamer", avatar: "Volt", text: "The soundtracks for 'Gris' by Berlinist and 'Stardew Valley' are pure gold. Highly recommend Berlinist for deep focus sessions!", upvotes: 19, upvotedBy: [], timestamp: "6 hours ago" }
    ]
  },
  {
    id: "q_3",
    title: "Best budget gaming monitors under $300 for competitive FPS in 2026?",
    content: "I'm upgrading from a 60Hz IPS to something faster. Looking for 165Hz+ with good pixel response and low input lag. Any experience with the newer MSI or AOC budget options?",
    author: "FPSNerd",
    avatar: "Blaze",
    role: "gamer",
    flair: "hardware",
    upvotes: 62,
    downvotes: 4,
    upvotedBy: [],
    downvotedBy: [],
    savedBy: [],
    views: 518,
    timestamp: "1 day ago",
    answers: [
      { id: "ans_4", author: "TechGuildGamer", role: "gamer", avatar: "Echo", text: "The AOC Q27G2S is insanely underrated at $279. 165Hz IPS, great colors, 1ms GTG — honestly competes with monitors double the price. Highly recommended.", upvotes: 28, upvotedBy: [], timestamp: "22 hours ago" },
      { id: "ans_5", author: "RetroStudio", role: "dev", avatar: "RetroStudio", text: "For competitive play, response time matters more than refresh above 144Hz. I'd pick any 1080p 240Hz TN over a 165Hz IPS if you're playing CS2 or Valorant.", upvotes: 11, upvotedBy: [], timestamp: "20 hours ago" }
    ]
  },
  {
    id: "q_4",
    title: "Why do most mobile ports of PC games feel so clunky?",
    content: "I've been ranting about this for a while. Every time a great PC game gets ported to mobile, the touch controls feel like an afterthought. Why don't devs invest in proper mobile-native control schemes?",
    author: "MobileGameCritic",
    avatar: "Storm",
    role: "gamer",
    flair: "rant",
    upvotes: 88,
    downvotes: 9,
    upvotedBy: [],
    downvotedBy: [],
    savedBy: [],
    views: 742,
    timestamp: "2 days ago",
    answers: [
      { id: "ans_6", author: "CodeCraft", role: "dev", avatar: "Alpha", text: "Honest dev answer: mobile ports are usually done by small teams under tight budgets with 2-3 month deadlines. There's rarely time to redesign core mechanics from scratch. The economics just don't support it for mid-tier games.", upvotes: 44, upvotedBy: [], timestamp: "2 days ago" }
    ]
  },
  {
    id: "q_5",
    title: "Tips for improving reaction time in FPS games? Tried everything but still slow.",
    content: "I've used aim trainers like Aimlabs for 3 months, I eat well, sleep 7-8h. My reaction time in kovaak is around 220ms avg. I can't get below 200ms. Is this a hardware issue or am I missing something?",
    author: "SlowPoke_FPS",
    avatar: "Drift",
    role: "gamer",
    flair: "tips",
    upvotes: 34,
    downvotes: 0,
    upvotedBy: [],
    downvotedBy: [],
    savedBy: [],
    views: 385,
    timestamp: "3 days ago",
    answers: [
      { id: "ans_7", author: "MinimalistGamer", role: "gamer", avatar: "Volt", text: "220ms is actually very solid — average human reaction is 250ms. At this point you're likely being bottlenecked by game sense, crosshair placement, and pre-aim rather than raw reaction speed. Focus on those.", upvotes: 31, upvotedBy: [], timestamp: "3 days ago" },
      { id: "ans_8", author: "FPSNerd", role: "gamer", avatar: "Blaze", text: "Check your polling rate — if you're on a 125Hz mouse, upgrade to 1000Hz+. Also make sure you have no mouse acceleration. These hidden factors can add 15-20ms of perceived input lag.", upvotes: 22, upvotedBy: [], timestamp: "2 days ago" }
    ]
  }
];

// Initialize Helper utilities
const getStorage = (key, fallback) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : fallback;
};

const setStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Data Migration: clear stale question schema missing new reddit-style flairs and refresh posts cache
(function migrateAppData() {
  // 1. Questions migration
  const storedQ = localStorage.getItem("gamin_questions");
  if (storedQ) {
    try {
      const parsedQ = JSON.parse(storedQ);
      if (Array.isArray(parsedQ) && parsedQ.length > 0 && parsedQ[0].flair === undefined) {
        localStorage.removeItem("gamin_questions");
      }
    } catch (e) {
      localStorage.removeItem("gamin_questions");
    }
  }

  // 2. Posts migration (forces reloading the new rich posts if cache has only old 3 posts)
  const storedP = localStorage.getItem("gamin_posts");
  if (storedP) {
    try {
      const parsedP = JSON.parse(storedP);
      if (Array.isArray(parsedP) && parsedP.length <= 3) {
        localStorage.removeItem("gamin_posts");
      }
    } catch (e) {
      localStorage.removeItem("gamin_posts");
    }
  }
})();

// Global reactive State (Clerk User defaults to NULL representing Logged Out state)
let appState = {
  posts: getStorage("gamin_posts", DEFAULT_POSTS),
  challenges: getStorage("gamin_challenges", DEFAULT_CHALLENGES),
  questions: getStorage("gamin_questions", DEFAULT_QUESTIONS), // Simulated Q&A state
  achievements: getStorage("gamin_achievements", DEFAULT_ACHIEVEMENTS),
  squad: getStorage("gamin_squad", DEFAULT_SQUAD),
  clerkUser: getStorage("gamin_clerk_user", null) // Simulated Clerk Auth Session
};

// --- 2. SINGLE PAGE APPLICATION ROUTING ---
const routes = {
  home: { viewId: "home-view", navId: "nav-home", sbId: "sb-link-home" },
  challenges: { viewId: "challenges-view", navId: "nav-challenges", sbId: "sb-link-challenges" },
  ask: { viewId: "ask-view", navId: "nav-ask", sbId: "sb-link-ask" },
  achievements: { viewId: "achievements-view", navId: "nav-achievements", sbId: "sb-link-achievements" },
  profile: { viewId: "profile-view", navId: "nav-profile", sbId: "sb-link-profile" },
  contact: { viewId: "contact-view", navId: "nav-contact", sbId: "sb-link-contact" }
};

function router() {
  const hash = window.location.hash.slice(1) || "home";
  const activeRoute = routes[hash] || routes.home;

  // Toggle active view sections
  document.querySelectorAll(".page-view").forEach(view => {
    view.classList.remove("active");
  });
  const activeView = document.getElementById(activeRoute.viewId);
  if (activeView) activeView.classList.add("active");

  // Reset active navigation highlights
  document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
  document.querySelectorAll(".sb-link").forEach(link => link.classList.remove("active"));

  const navBtn = document.getElementById(activeRoute.navId);
  if (navBtn) navBtn.classList.add("active");

  const sbBtn = document.getElementById(activeRoute.sbId);
  if (sbBtn) sbBtn.classList.add("active");

  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Close mobile hamburger menu/sidebar
  const sidebarLeft = document.getElementById("sidebar-left");
  const hamburger = document.getElementById("hamburger-btn");
  if (sidebarLeft && hamburger) {
    sidebarLeft.classList.remove("active");
    hamburger.classList.remove("active");
  }

  // Refresh dynamic content matching view
  renderCurrentView(hash);
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", () => {
  // ---- SPLASH SCREEN CONTROLLER ----
  const splashEl = document.getElementById("splash-screen");
  if (splashEl) {
    // Lock body scroll during splash
    document.body.classList.add("splash-active");

    // Remove splash from DOM after CSS fade-out (2.4s delay + 0.5s duration = 2.9s)
    splashEl.addEventListener("animationend", () => {
      splashEl.remove();
      document.body.classList.remove("splash-active");
    });

    // Safety fallback: remove after 11s in case animationend doesn't fire
    setTimeout(() => {
      if (splashEl && splashEl.parentNode) {
        splashEl.remove();
        document.body.classList.remove("splash-active");
      }
    }, 11000);
  }
  // ---- END SPLASH SCREEN CONTROLLER ----

  syncClerkAuthStateUI();
  router();
  initTheme();
  
  // Initialize Instagram Feed, Stories, and Social Chat systems
  initStoriesSystem();
  initPostExpansionModal();
  initSocialChatHub();
});

function renderCurrentView(hash) {
  switch (hash) {
    case "home":
      renderFeed();
      break;
    case "challenges":
      renderChallenges();
      break;
    case "ask":
      renderQuestions();
      break;
    case "achievements":
      renderAchievements();
      break;
    case "profile":
      renderSquad();
      break;
    default:
      break;
  }
}


// --- 3. CLERK AUTHENTICATION CONTROLLER (UI SIMULATION) ---

// Synchronize clerk authentication status across widgets, links, sidebars, and gateways
function syncClerkAuthStateUI() {
  const authSection = document.getElementById("clerk-auth-section");
  const sidebarProfile = document.getElementById("sidebar-profile-card");
  const passportAuthGate = document.getElementById("passport-auth-gate");
  const passportMainContent = document.getElementById("passport-main-content");
  const passportGalleryDivider = document.getElementById("passport-gallery-divider");
  const profileAuthGate = document.getElementById("profile-auth-gate");
  const profileMainContent = document.getElementById("profile-main-content");

  const user = appState.clerkUser;

  // A. NAVBAR CLERK WIDGET RENDERING
  if (authSection) {
    if (user) {
      // Authenticated Clerk Button (UserButton)
      authSection.innerHTML = `
        <div class="clerk-user-button" id="clerk-user-btn" title="${user.username} account">
          <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.seed}" alt="${user.username}">
          <span class="clerk-user-dot"></span>
        </div>
      `;

      // Bind UserButton Dropdown Toggle
      document.getElementById("clerk-user-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        toggleClerkDropdown();
      });
    } else {
      // Unauthenticated Clerk Buttons
      authSection.innerHTML = `
        <button class="clerk-auth-link" id="clerk-signin-trigger">Sign In</button>
        <button class="btn btn-primary" id="clerk-signup-trigger" style="padding: 6px 12px; font-size: 0.82rem;">Sign Up</button>
      `;

      // Bind Modal Launchers
      document.getElementById("clerk-signin-trigger").addEventListener("click", () => openClerkModal("signin"));
      document.getElementById("clerk-signup-trigger").addEventListener("click", () => openClerkModal("signup"));
    }
  }

  // B. SIDEBAR CARD RENDERING (Gated)
  if (sidebarProfile) {
    if (user) {
      sidebarProfile.style.display = "block";
      sidebarProfile.innerHTML = `
        <div class="user-card-header">
          <div class="avatar-container">
            <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.seed}" alt="Avatar">
            <span class="status-indicator online"></span>
          </div>
          <div class="user-card-info">
            <h4>${user.username}</h4>
            <p class="badge-role ${user.role}">${user.role === "dev" ? "GAME DEV" : "Gamer"}</p>
          </div>
        </div>
        <div class="user-card-stats">
          <div>
            <span class="stat-num">${user.xp.toLocaleString()}</span>
            <span class="stat-label">Total XP</span>
          </div>
          <div>
            <span class="stat-num">#${user.rank}</span>
            <span class="stat-label">Rank</span>
          </div>
        </div>
      `;
    } else {
      // Beautiful minimal logged out placeholder in sidebar
      sidebarProfile.style.display = "block";
      sidebarProfile.innerHTML = `
        <div style="text-align: center; padding: 10px 0;">
          <p class="small-text text-muted" style="margin-bottom: 10px;">Sign in with Clerk to view gamer statistics.</p>
          <button class="btn btn-secondary btn-full" style="padding: 5px;" onclick="openClerkModal('signin')">Sign In</button>
        </div>
      `;
    }
  }

  // C. PAGE GATING LOCKS
  // Achievements Page Gate
  if (passportAuthGate && passportMainContent && passportGalleryDivider) {
    if (user) {
      passportAuthGate.style.display = "none";
      passportMainContent.style.display = "grid";
      passportGalleryDivider.style.display = "block";

      // Sync Passport preview card
      document.getElementById("pass-avatar").src = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.seed}`;
      document.getElementById("pass-username").textContent = user.username;
      
      const badge = document.getElementById("pass-role-badge");
      badge.textContent = user.role === "dev" ? "GAME DEV" : "PRO GAMER";
      badge.className = `badge-role ${user.role}`;

      document.querySelector(".passport-tagline").textContent = `“${user.tagline}”`;
      document.getElementById("pass-level").textContent = Math.floor(user.xp / 250);
      document.querySelector(".level-xp").textContent = `${user.xp.toLocaleString()} / ${((Math.floor(user.xp / 250) + 1) * 250).toLocaleString()} XP`;
      document.querySelector(".passport-level-section .progress-bar-fill").style.width = `${((user.xp % 250) / 250) * 100}%`;

      // Stats inside passport
      document.getElementById("pass-stat-completed").textContent = appState.challenges.filter(c => c.status === "Completed").length;
      document.getElementById("pass-stat-comments").textContent = appState.posts.filter(p => p.author === user.username).length;
      document.getElementById("pass-stat-likes").textContent = appState.posts.filter(p => p.author === user.username).reduce((s,c)=>s+c.likes, 0) + 148;
    } else {
      passportAuthGate.style.display = "block";
      passportMainContent.style.display = "none";
      passportGalleryDivider.style.display = "none";
    }
  }

  // Profile Edit Page Gate
  if (profileAuthGate && profileMainContent) {
    if (user) {
      profileAuthGate.style.display = "none";
      profileMainContent.style.display = "block";

      // Sync form values
      document.getElementById("prof-avatar").src = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.seed}`;
      document.getElementById("prof-username-display").textContent = user.username;
      
      const profRoleBadge = document.getElementById("prof-role-badge");
      profRoleBadge.textContent = user.role === "dev" ? "GAME DEV" : "PRO GAMER";
      profRoleBadge.className = `badge-role ${user.role}`;

      document.getElementById("profile-username-input").value = user.username;
      document.getElementById("profile-role-input").value = user.role;
      document.getElementById("profile-bio-input").value = user.tagline;
      document.getElementById("profile-avatar-seed").value = user.seed;
    } else {
      profileAuthGate.style.display = "block";
      profileMainContent.style.display = "none";
    }
  }

  // D. CLERK FLOATING DROPDOWN CARD SYNC
  if (user) {
    const dAvatar = document.getElementById("clerk-dropdown-avatar");
    const dUser = document.getElementById("clerk-dropdown-username");
    const dEmail = document.getElementById("clerk-dropdown-email");
    
    if (dAvatar) dAvatar.src = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.seed}`;
    if (dUser) dUser.textContent = user.username;
    if (dEmail) dEmail.textContent = user.email;
  }

  // Refresh widgets
  renderRightSidebarWidget();
  renderAchievements();
}

// Open simulated Clerk modals
const clerkModal = document.getElementById("clerk-auth-modal");
const clerkCloseBtn = document.getElementById("clerk-close-btn");

window.openClerkModal = function(view = "signin") {
  if (clerkModal) {
    clerkModal.classList.add("active");
    toggleClerkView(view);
  }
};

window.closeClerkModal = function() {
  if (clerkModal) {
    clerkModal.classList.remove("active");
    document.getElementById("clerk-signin-form")?.reset();
    document.getElementById("clerk-signup-form")?.reset();
  }
};

if (clerkCloseBtn) {
  clerkCloseBtn.addEventListener("click", closeClerkModal);
}

// Toggle Modal view between Sign-In and Sign-Up
window.toggleClerkView = function(view) {
  const signinView = document.getElementById("clerk-signin-view");
  const signupView = document.getElementById("clerk-signup-view");

  if (view === "signin") {
    if (signinView) signinView.style.display = "block";
    if (signupView) signupView.style.display = "none";
  } else {
    if (signinView) signinView.style.display = "none";
    if (signupView) signupView.style.display = "block";
  }
};

// Simulate Social Logins SSO (Displays realistic 800ms loaders)
window.simulateClerkSSO = function(provider) {
  closeClerkModal();
  showToast(`Redirecting to Clerk ${provider} SSO...`, "info");

  setTimeout(() => {
    // Generate clean username from provider
    const randNum = Math.floor(Math.random() * 80) + 10;
    const name = `${provider}Gamer_${randNum}`;
    const email = `${name.toLowerCase()}@clerk.${provider.toLowerCase()}`;

    const newUser = {
      username: name,
      email: email,
      role: "gamer",
      tagline: `Connecting strategy via Clerk ${provider} Auth.`,
      seed: name,
      xp: 450,
      rank: 78
    };

    appState.clerkUser = newUser;
    setStorage("gamin_clerk_user", newUser);
    
    // Default dynamic tactical squad setup sync
    appState.squad[0].username = name;
    appState.squad[0].avatar = name;
    setStorage("gamin_squad", appState.squad);

    syncClerkAuthStateUI();
    renderFeed();
    renderSquad();
    showToast(`Logged in successfully as ${name} via Clerk!`, "success");
  }, 1000);
};

// Sign-In Form Submissions handler
const clerkSigninForm = document.getElementById("clerk-signin-form");
if (clerkSigninForm) {
  clerkSigninForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailVal = document.getElementById("clerk-signin-email").value.trim();
    
    // Create clean username from email string
    const parsedName = emailVal.split("@")[0].substring(0, 14);
    const capitalizedName = parsedName.charAt(0).toUpperCase() + parsedName.slice(1);

    const activeUser = {
      username: capitalizedName || "GaminMember",
      email: emailVal,
      role: "gamer",
      tagline: "Aim precise, speak little, execute perfectly.",
      seed: capitalizedName || "GaminGamer",
      xp: 2450,
      rank: 48
    };

    appState.clerkUser = activeUser;
    setStorage("gamin_clerk_user", activeUser);

    appState.squad[0].username = activeUser.username;
    appState.squad[0].avatar = activeUser.seed;
    setStorage("gamin_squad", appState.squad);

    closeClerkModal();
    syncClerkAuthStateUI();
    renderFeed();
    renderSquad();
    showToast(`Welcome back, ${activeUser.username}!`, "success");
  });
}

// Sign-Up Form Submissions handler
const clerkSignupForm = document.getElementById("clerk-signup-form");
if (clerkSignupForm) {
  clerkSignupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameVal = document.getElementById("clerk-signup-name").value.trim();
    const emailVal = document.getElementById("clerk-signup-email").value.trim();

    if (nameVal.length < 3) {
      showToast("Username must be at least 3 characters.", "error");
      return;
    }

    const newUser = {
      username: nameVal,
      email: emailVal,
      role: "gamer",
      tagline: "Aim precise, speak little, execute perfectly.",
      seed: nameVal,
      xp: 250, // Starting XP reward
      rank: 99
    };

    appState.clerkUser = newUser;
    setStorage("gamin_clerk_user", newUser);

    appState.squad[0].username = nameVal;
    appState.squad[0].avatar = nameVal;
    setStorage("gamin_squad", appState.squad);

    closeClerkModal();
    syncClerkAuthStateUI();
    renderFeed();
    renderSquad();
    showToast(`Account successfully registered! Welcome ${nameVal}!`, "success");
  });
}

// Toggle User Button Dropdown popup card
const clerkDropdown = document.getElementById("clerk-dropdown");

function toggleClerkDropdown() {
  if (clerkDropdown) {
    clerkDropdown.classList.toggle("active");
  }
}

// Close Dropdown when clicking outside
document.addEventListener("click", () => {
  if (clerkDropdown) clerkDropdown.classList.remove("active");
});

if (clerkDropdown) {
  clerkDropdown.addEventListener("click", (e) => e.stopPropagation());
}

// Manage Account drop link routes direct to edit tab
const manageDropBtn = document.getElementById("clerk-drop-manage");
if (manageDropBtn) {
  manageDropBtn.addEventListener("click", () => {
    clerkDropdown.classList.remove("active");
  });
}

// Sign-Out controller
const clerkSignoutBtn = document.getElementById("clerk-signout-btn");
if (clerkSignoutBtn) {
  clerkSignoutBtn.addEventListener("click", () => {
    appState.clerkUser = null;
    localStorage.removeItem("gamin_clerk_user");

    // Reset default squad leader
    appState.squad = DEFAULT_SQUAD;
    setStorage("gamin_squad", DEFAULT_SQUAD);

    if (clerkDropdown) clerkDropdown.classList.remove("active");
    
    // Redirect to home feed immediately to avoid gated viewport issues
    window.location.hash = "#home";
    
    syncClerkAuthStateUI();
    renderFeed();
    showToast("Successfully logged out of Clerk.", "info");
  });
}

// Clerk Authentication Action Gate (Auth wall to prompt sign in on actions)
function clerkAuthenticationGuard(actionLabel) {
  if (!appState.clerkUser) {
    showToast(`Authentication Required! Please Sign In to ${actionLabel}.`, "warning");
    openClerkModal("signin");
    return false;
  }
  return true;
}


// --- 4. DYNAMIC VIEWS RENDERING ENGINE ---

// 1. HOME FEED VIEW
let currentFeedCategory = "all";
let currentSearchQuery = "";

function renderFeed() {
  const container = document.getElementById("feed-container");
  if (!container) return;

  const filteredPosts = appState.posts.filter(post => {
    const categoryMatch = currentFeedCategory === "all" || post.category === currentFeedCategory;
    const query = currentSearchQuery.toLowerCase();
    const keywordMatch = !query || 
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query);

    return categoryMatch && keywordMatch;
  });

  if (filteredPosts.length === 0) {
    container.innerHTML = `
      <div class="glass-panel" style="padding: 30px; text-align: center; color: var(--text-secondary);">
        <p>No matching feed items found. Try searching something else or publish a new tip!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredPosts.map(post => {
    const loggedInUser = appState.clerkUser ? appState.clerkUser.username : "";
    const userLiked = post.likedBy.includes(loggedInUser);
    const likeActive = userLiked ? "upvote-active" : "";

    let mediaSection = "";
    if (post.image) {
      let imageUrl = "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=70";
      if (post.image === "cozy-setup") imageUrl = "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=70";
      if (post.image === "clean-desk") imageUrl = "https://images.unsplash.com/photo-1586227740562-205a679e55a2?w=800&auto=format&fit=crop&q=70";
      if (post.image === "indie-gaming") imageUrl = "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=70";

      // If user typed custom image seed keyword during additions
      const isCustomKeyword = !["cozy-setup", "clean-desk", "indie-gaming"].includes(post.image);

      mediaSection = `
        <div class="card-media">
          <img src="${isCustomKeyword ? 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format' : imageUrl}" 
               alt="${post.title}" 
               onerror="this.src='https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format'">
        </div>
      `;
    }

    const commentsList = post.comments.map(c => `
      <div class="comment-item">
        <div class="comment-avatar">
          <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=${c.avatar}" alt="${c.author}">
        </div>
        <div class="comment-details">
          <div class="comment-user-row">
            <span class="comment-user-name">${c.author}</span>
            <span class="badge-role ${c.role}">${c.role === "dev" ? "Dev" : "Gamer"}</span>
            <span class="meta-time">${c.timestamp}</span>
          </div>
          <p class="comment-text">${c.text}</p>
        </div>
      </div>
    `).join("");

    return `
      <article class="feed-card glass-panel" id="${post.id}">
        <!-- Header -->
        <div class="card-user-header">
          <div class="header-user-info">
            <div class="header-user-avatar">
              <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=${post.authorAvatar}" alt="${post.author}">
            </div>
            <div class="header-name-meta">
              <h5>
                ${post.author}
                <span class="badge-role ${post.authorRole}">${post.authorRole === "dev" ? "DEV" : "Gamer"}</span>
              </h5>
              <span class="meta-time">${post.timestamp}</span>
            </div>
          </div>
          <span class="badge-tag ${post.category}">${post.category}</span>
        </div>

        <!-- Description -->
        <div class="card-description">
          <h3>${post.title}</h3>
          <p>${post.content}</p>
        </div>

        <!-- Media Display (Instagram visual feature) -->
        ${mediaSection}

        <!-- Card Action Footer -->
        <div class="card-action-bar">
          <div class="action-group">
            <button class="action-btn ${likeActive}" onclick="toggleUpvote('${post.id}')">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>${post.likes} Likes</span>
            </button>
            <button class="action-btn" onclick="toggleCommentsSection('${post.id}')">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <span>${post.comments.length} Comments</span>
            </button>
          </div>
          <div class="action-view-counter">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
            <span>${post.views} views</span>
          </div>
        </div>

        <!-- Collapsible Comments Area -->
        <div class="card-comments-section" id="comments-${post.id}" style="display: none;">
          <div class="comments-feed" id="comments-feed-${post.id}">
            ${commentsList}
          </div>
          
          <div class="comment-input-row">
            <input type="text" id="comment-input-${post.id}" placeholder="Write strategy reply..." onkeydown="handleCommentSubmit(event, '${post.id}')">
            <button class="btn btn-primary" style="padding: 6px 12px; font-size: 0.8rem;" onclick="addComment('${post.id}')">Reply</button>
          </div>
        </div>

      </article>
    `;
  }).join("");
}

// 2. CHALLENGES ARENA VIEW
let currentChallengeDiff = "all";

function renderChallenges() {
  const container = document.getElementById("challenges-grid");
  if (!container) return;

  const filteredChallenges = appState.challenges.filter(chal => {
    const diffMatch = currentChallengeDiff === "all" || chal.difficulty === currentChallengeDiff;
    const query = currentSearchQuery.toLowerCase();
    const keywordMatch = !query || 
      chal.title.toLowerCase().includes(query) ||
      chal.description.toLowerCase().includes(query);

    return diffMatch && keywordMatch;
  });

  if (filteredChallenges.length === 0) {
    container.innerHTML = `
      <div class="glass-panel" style="grid-column: 1 / -1; padding: 30px; text-align: center; color: var(--text-secondary);">
        <p>No active quests match your criteria.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredChallenges.map(chal => {
    let buttonText = "Accept Quest";
    let btnClass = "btn-secondary";
    
    if (chal.status === "Joined") {
      buttonText = "Submit Proof";
      btnClass = "btn-primary";
    } else if (chal.status === "Completed") {
      buttonText = "Completed ✓";
      btnClass = "btn-secondary";
    }

    return `
      <div class="challenge-card glass-panel">
        <div class="chal-card-header">
          <span class="diff-badge ${chal.difficulty.toLowerCase()}">${chal.difficulty}</span>
          <span class="chal-xp-reward">+${chal.xp} XP</span>
        </div>
        
        <h3>${chal.title}</h3>
        <p>${chal.description}</p>
        
        <div class="chal-progress-area">
          <div class="progress-label-row">
            <span>Progress</span>
            <span>${chal.progress}%</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${chal.progress}%;"></div>
          </div>
        </div>

        <button class="btn ${btnClass} btn-full" onclick="interactChallenge('${chal.id}')" ${chal.status === 'Completed' ? 'disabled' : ''}>
          ${buttonText}
        </button>
      </div>
    `;
  }).join("");
}

// 2.5 ASK GAMERS Q&A — REDDIT-STYLE STATE
let askCurrentSort = "hot";
let askCurrentFlair = "all";

const FLAIR_LABELS = {
  all: "🌐 All Topics",
  gameplay: "🎮 Gameplay",
  gamedev: "⚙️ Game Dev",
  tips: "💡 Tips",
  hardware: "🖥️ Hardware",
  rant: "🔥 Rant",
  discussion: "💬 Discussion"
};

function sortedFilteredQuestions() {
  const query = currentSearchQuery.toLowerCase();
  let list = appState.questions.filter(q => {
    const matchSearch = !query ||
      q.title.toLowerCase().includes(query) ||
      (q.content && q.content.toLowerCase().includes(query)) ||
      q.author.toLowerCase().includes(query);
    const matchFlair = askCurrentFlair === "all" || q.flair === askCurrentFlair;
    return matchSearch && matchFlair;
  });

  if (askCurrentSort === "hot") {
    list = list.slice().sort((a, b) => {
      const scoreA = a.upvotes * 2 + a.answers.length * 3 + a.views * 0.01;
      const scoreB = b.upvotes * 2 + b.answers.length * 3 + b.views * 0.01;
      return scoreB - scoreA;
    });
  } else if (askCurrentSort === "new") {
    list = list.slice().sort((a, b) => b.id.localeCompare(a.id));
  } else if (askCurrentSort === "top") {
    list = list.slice().sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes));
  }
  return list;
}

function getFlairColor(flair) {
  const map = {
    gameplay: "#3b82f6",
    gamedev: "#8b5cf6",
    tips: "#eab308",
    hardware: "#06b6d4",
    rant: "#ef4444",
    discussion: "#10b981"
  };
  return map[flair] || "var(--primary)";
}

function renderQuestions() {
  const container = document.getElementById("ask-container");
  if (!container) return;

  const list = sortedFilteredQuestions();

  // Update count badge
  const countEl = document.getElementById("ask-thread-count");
  if (countEl) countEl.textContent = `${list.length} post${list.length !== 1 ? "s" : ""}`;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="ask-empty-state glass-panel">
        <svg viewBox="0 0 24 24" width="48" height="48" style="opacity:0.3; margin-bottom:14px;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>
        <p>No posts found for this topic.</p>
        <p style="font-size:0.85rem; margin-top:4px;">Be the first to start a discussion!</p>
        <button class="btn btn-primary" style="margin-top:16px;" onclick="document.getElementById('open-ask-modal-btn').click()">+ New Post</button>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(q => {
    const loggedInUser = appState.clerkUser ? appState.clerkUser.username : "";
    const userUpvoted = (q.upvotedBy || []).includes(loggedInUser);
    const userDownvoted = (q.downvotedBy || []).includes(loggedInUser);
    const userSaved = (q.savedBy || []).includes(loggedInUser);
    const netScore = (q.upvotes || 0) - (q.downvotes || 0);
    const flairColor = getFlairColor(q.flair);
    const flairLabel = FLAIR_LABELS[q.flair] || q.flair || "discussion";

    const answersList = (q.answers || []).map(ans => {
      const ansUpvoted = (ans.upvotedBy || []).includes(loggedInUser);
      return `
        <div class="reddit-answer-item">
          <div class="reddit-answer-vote">
            <button class="ans-vote-btn ${ansUpvoted ? 'ans-vote-active' : ''}" onclick="upvoteAnswer('${q.id}', '${ans.id}')">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 4l-8 8h5v8h6v-8h5z"/></svg>
            </button>
            <span class="ans-vote-count">${ans.upvotes || 0}</span>
          </div>
          <div class="reddit-answer-body">
            <div class="reddit-answer-meta">
              <div class="answer-avatar-mini">${ans.author.charAt(0).toUpperCase()}</div>
              <span class="answer-author">${ans.author}</span>
              <span class="badge-role ${ans.role}">${ans.role === "dev" ? "Dev" : "Gamer"}</span>
              <span class="meta-time">${ans.timestamp}</span>
            </div>
            <p class="reddit-answer-text">${ans.text}</p>
          </div>
        </div>
      `;
    }).join("");

    const answersSection = q.answers.length > 0 ? `
      <div class="reddit-answers-list" id="answers-feed-${q.id}">${answersList}</div>
    ` : `<p class="no-answers-hint">No answers yet. Be the first to help!</p>`;

    return `
      <article class="reddit-thread-card glass-panel" id="${q.id}">
        <!-- LEFT: Vote Column -->
        <div class="reddit-vote-col">
          <button class="reddit-upvote-btn ${userUpvoted ? 'vote-active-up' : ''}" onclick="toggleQuestionUpvote('${q.id}')" title="Upvote">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 4l-8 8h5v8h6v-8h5z"/></svg>
          </button>
          <span class="reddit-vote-score ${userUpvoted ? 'score-up' : userDownvoted ? 'score-down' : ''}">${netScore >= 1000 ? (netScore/1000).toFixed(1)+'k' : netScore}</span>
          <button class="reddit-downvote-btn ${userDownvoted ? 'vote-active-down' : ''}" onclick="toggleQuestionDownvote('${q.id}')" title="Downvote">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 20l8-8h-5V4H9v8H4z"/></svg>
          </button>
        </div>

        <!-- RIGHT: Content Column -->
        <div class="reddit-content-col">
          <!-- Thread Meta Row -->
          <div class="reddit-thread-meta">
            <div class="thread-author-info">
              <div class="thread-avatar">${q.author.charAt(0).toUpperCase()}</div>
              <span class="thread-subreddit">r/AskGamers</span>
              <span class="thread-dot">•</span>
              <span class="thread-author">Posted by u/${q.author}</span>
              <span class="badge-role ${q.role}" style="font-size:0.62rem;">${q.role === "dev" ? "Dev" : "Gamer"}</span>
              <span class="thread-dot">•</span>
              <span class="meta-time">${q.timestamp}</span>
            </div>
            <span class="thread-flair-badge" style="background: ${flairColor}22; color: ${flairColor}; border: 1px solid ${flairColor}44;">${flairLabel}</span>
          </div>

          <!-- Title -->
          <h3 class="reddit-thread-title">${q.title}</h3>

          <!-- Body (collapsed if long) -->
          ${q.content ? `<p class="reddit-thread-body">${q.content}</p>` : ""}

          <!-- Thread Action Bar -->
          <div class="reddit-action-bar">
            <button class="reddit-action-btn" onclick="toggleAnswersSection('${q.id}')">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              ${q.answers.length} ${q.answers.length === 1 ? "Answer" : "Answers"}
            </button>
            <button class="reddit-action-btn" onclick="shareQuestion('${q.id}')">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              Share
            </button>
            <button class="reddit-action-btn ${userSaved ? 'saved-active' : ''}" onclick="saveQuestion('${q.id}')">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="${userSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              ${userSaved ? "Saved" : "Save"}
            </button>
            <span class="reddit-view-count">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              ${q.views} views
            </span>
          </div>

          <!-- Collapsible Answers Panel -->
          <div class="reddit-answers-panel" id="answers-${q.id}" style="display:none;">
            <div class="reddit-answers-header">
              <span>${q.answers.length} ${q.answers.length === 1 ? "Answer" : "Answers"}</span>
              <span style="color:var(--text-muted); font-size:0.8rem;">sorted by votes</span>
            </div>
            ${answersSection}
            <!-- Answer Input -->
            <div class="reddit-answer-input-row">
              <div class="answer-input-avatar">${loggedInUser ? loggedInUser.charAt(0).toUpperCase() : "?"}</div>
              <div class="answer-input-wrapper">
                <textarea id="answer-input-${q.id}" class="reddit-answer-textarea" rows="2" placeholder="What's your answer? Be helpful and specific..."></textarea>
                <div class="answer-input-actions">
                  <span class="answer-input-hint">Press Ctrl+Enter to submit</span>
                  <button class="btn btn-primary" style="padding: 5px 14px; font-size: 0.8rem;" onclick="addAnswer('${q.id}')">Post Answer</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </article>
    `;
  }).join("");

  // Re-attach Ctrl+Enter shortcuts for answer inputs
  list.forEach(q => {
    const ta = document.getElementById(`answer-input-${q.id}`);
    if (ta) {
      ta.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && e.ctrlKey) addAnswer(q.id);
      });
    }
  });
}

// --- REDDIT-STYLE VOTING ACTIONS ---
window.toggleQuestionUpvote = function(qId) {
  if (!clerkAuthenticationGuard("upvote community questions")) return;
  const q = appState.questions.find(item => item.id === qId);
  if (!q) return;
  const me = appState.clerkUser.username;
  q.upvotedBy = q.upvotedBy || [];
  q.downvotedBy = q.downvotedBy || [];
  const upIdx = q.upvotedBy.indexOf(me);
  const downIdx = q.downvotedBy.indexOf(me);
  if (upIdx === -1) {
    q.upvotedBy.push(me);
    q.upvotes = (q.upvotes || 0) + 1;
    if (downIdx !== -1) { q.downvotedBy.splice(downIdx, 1); q.downvotes = Math.max(0, (q.downvotes || 0) - 1); }
    showToast("Upvoted!", "success");
  } else {
    q.upvotedBy.splice(upIdx, 1);
    q.upvotes = Math.max(0, (q.upvotes || 0) - 1);
    showToast("Upvote removed.", "info");
  }
  setStorage("gamin_questions", appState.questions);
  renderQuestions();
};

window.toggleQuestionDownvote = function(qId) {
  if (!clerkAuthenticationGuard("downvote community questions")) return;
  const q = appState.questions.find(item => item.id === qId);
  if (!q) return;
  const me = appState.clerkUser.username;
  q.upvotedBy = q.upvotedBy || [];
  q.downvotedBy = q.downvotedBy || [];
  const upIdx = q.upvotedBy.indexOf(me);
  const downIdx = q.downvotedBy.indexOf(me);
  if (downIdx === -1) {
    q.downvotedBy.push(me);
    q.downvotes = (q.downvotes || 0) + 1;
    if (upIdx !== -1) { q.upvotedBy.splice(upIdx, 1); q.upvotes = Math.max(0, (q.upvotes || 0) - 1); }
    showToast("Downvoted.", "info");
  } else {
    q.downvotedBy.splice(downIdx, 1);
    q.downvotes = Math.max(0, (q.downvotes || 0) - 1);
    showToast("Downvote removed.", "info");
  }
  setStorage("gamin_questions", appState.questions);
  renderQuestions();
};

window.upvoteAnswer = function(qId, ansId) {
  if (!clerkAuthenticationGuard("upvote answers")) return;
  const q = appState.questions.find(item => item.id === qId);
  if (!q) return;
  const ans = q.answers.find(a => a.id === ansId);
  if (!ans) return;
  const me = appState.clerkUser.username;
  ans.upvotedBy = ans.upvotedBy || [];
  const idx = ans.upvotedBy.indexOf(me);
  if (idx === -1) {
    ans.upvotedBy.push(me);
    ans.upvotes = (ans.upvotes || 0) + 1;
  } else {
    ans.upvotedBy.splice(idx, 1);
    ans.upvotes = Math.max(0, (ans.upvotes || 0) - 1);
  }
  setStorage("gamin_questions", appState.questions);
  renderQuestions();
  // Keep the answers panel open
  setTimeout(() => {
    const panel = document.getElementById(`answers-${qId}`);
    if (panel) panel.style.display = "block";
  }, 10);
};

window.toggleAnswersSection = function(qId) {
  const section = document.getElementById(`answers-${qId}`);
  if (section) {
    const isHidden = section.style.display === "none" || section.style.display === "";
    section.style.display = isHidden ? "block" : "none";
    if (isHidden) {
      // Increment view count
      const q = appState.questions.find(item => item.id === qId);
      if (q) { q.views = (q.views || 0) + 1; setStorage("gamin_questions", appState.questions); }
    }
  }
};

window.shareQuestion = function(qId) {
  const url = `${window.location.origin}${window.location.pathname}#ask`;
  navigator.clipboard.writeText(url).then(() => {
    showToast("Link copied to clipboard!", "success");
  }).catch(() => {
    showToast("Copy: " + url, "info");
  });
};

window.saveQuestion = function(qId) {
  if (!clerkAuthenticationGuard("save posts")) return;
  const q = appState.questions.find(item => item.id === qId);
  if (!q) return;
  const me = appState.clerkUser.username;
  q.savedBy = q.savedBy || [];
  const idx = q.savedBy.indexOf(me);
  if (idx === -1) {
    q.savedBy.push(me);
    showToast("Post saved!", "success");
  } else {
    q.savedBy.splice(idx, 1);
    showToast("Removed from saved.", "info");
  }
  setStorage("gamin_questions", appState.questions);
  renderQuestions();
};

window.addAnswer = function(qId) {
  if (!clerkAuthenticationGuard("submit answers to community questions")) return;
  const input = document.getElementById(`answer-input-${qId}`);
  if (!input || !input.value.trim()) return;
  const q = appState.questions.find(item => item.id === qId);
  if (!q) return;
  const newAnswer = {
    id: "ans_" + Date.now(),
    author: appState.clerkUser.username,
    role: appState.clerkUser.role,
    avatar: appState.clerkUser.seed,
    text: input.value.trim(),
    upvotes: 1,
    upvotedBy: [appState.clerkUser.username],
    timestamp: "Just now"
  };
  q.answers.push(newAnswer);
  setStorage("gamin_questions", appState.questions);
  input.value = "";
  renderQuestions();
  showToast("Answer posted!", "success");
  setTimeout(() => {
    const panel = document.getElementById(`answers-${qId}`);
    if (panel) panel.style.display = "block";
  }, 10);
};

// 3. ACHIEVEMENTS CATALOG VIEW
function renderAchievements() {
  const strip = document.getElementById("pass-badges-strip");
  const gallery = document.getElementById("achievements-gallery");

  // Sync pass strip
  if (strip) {
    const unlockedAchievements = appState.achievements.filter(a => a.unlocked);
    strip.innerHTML = unlockedAchievements.map(a => `
      <div class="pass-badge-icon" title="${a.title}: ${a.description}">
        <span style="font-size: 1.15rem;">${a.icon}</span>
      </div>
    `).join("");
  }

  // Populate catalog list if element exists
  if (gallery) {
    gallery.innerHTML = appState.achievements.map(a => `
      <div class="achievement-gal-card glass-panel ${a.unlocked ? 'unlocked' : 'locked'}">
        <div class="gal-card-icon">
          <span style="font-size: 1.5rem;">${a.unlocked ? a.icon : '🔒'}</span>
        </div>
        <h4>${a.title}</h4>
        <p>${a.description}</p>
        ${a.unlocked ? `<span class="unlock-date">Unlocked ${a.date}</span>` : '<span class="unlock-date" style="color: var(--text-muted);">Locked</span>'}
      </div>
    `).join("");
  }
}

// 4. SQUAD LIST VIEW
function renderSquad() {
  const container = document.getElementById("squad-members-list");
  if (!container) return;

  container.innerHTML = appState.squad.map((member, idx) => `
    <div class="squad-member-item">
      <div class="member-info">
        <div class="avatar-xs">
          <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=${member.avatar}" alt="${member.username}">
        </div>
        <div>
          <span class="member-name">${member.username}</span>
          <span class="member-role">${member.role}</span>
        </div>
      </div>
      ${appState.clerkUser && member.username !== appState.clerkUser.username ? `
        <button class="remove-member-btn" onclick="removeSquadMember(${idx})" title="Remove member">&times;</button>
      ` : ""}
    </div>
  `).join("");
}

// 5. ACTIVE QUESTS SIDEBAR WIDGET
function renderRightSidebarWidget() {
  const widget = document.getElementById("quick-challenges-widget");
  if (!widget) return;

  const activeChals = appState.challenges.filter(c => c.status === "Joined");
  if (activeChals.length === 0) {
    widget.innerHTML = `
      <p class="small-text text-muted" style="text-align: center; padding: 10px 0;">No active quests. Browse the Arena to accept one!</p>
    `;
    return;
  }

  widget.innerHTML = activeChals.map(c => `
    <div class="quick-chal-item">
      <span class="quick-chal-title">${c.title}</span>
      <div class="quick-chal-row">
        <span style="color: var(--primary); font-weight: 500;">+${c.xp} XP</span>
        <span class="text-muted">${c.progress}% done</span>
      </div>
    </div>
  `).join("");
}


// --- 5. INTERACTIVE EVENT HANDLERS ---

// A. Theme Switcher Manager
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem("gamin_theme") || "dark";
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    const activeTheme = document.body.classList.contains("light-theme") ? "light" : "dark";
    localStorage.setItem("gamin_theme", activeTheme);
    showToast(`Theme changed to ${activeTheme}.`, "info");
  });
}

// B. Mobile Hamburger menu trigger (Toggles left sidebar menu)
const hamburger = document.getElementById("hamburger-btn");
const sidebarLeft = document.getElementById("sidebar-left");
if (hamburger && sidebarLeft) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sidebarLeft.classList.toggle("active");
  });
}

// C. Search Operations
const searchInput = document.getElementById("global-search");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value;
    const currentHash = window.location.hash.slice(1);
    
    if (!["home", "challenges"].includes(currentHash)) {
      window.location.hash = "#home";
    } else {
      renderCurrentView(currentHash);
    }
  });
}

// D. Category Filters
document.querySelectorAll(".community-pill, .filter-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const target = e.currentTarget;
    const cat = target.dataset.filter || target.dataset.category;
    
    currentFeedCategory = cat;
    
    // Sync active states
    document.querySelectorAll(".community-pill, .filter-btn").forEach(b => {
      b.classList.remove("active");
      if (b.dataset.filter === cat || b.dataset.category === cat) {
        b.classList.add("active");
      }
    });

    if (window.location.hash !== "#home" && window.location.hash !== "") {
      window.location.hash = "#home";
    } else {
      renderFeed();
    }
  });
});

// Challenges filter
document.querySelectorAll(".filter-challenge-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".filter-challenge-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    currentChallengeDiff = e.target.dataset.diff;
    renderChallenges();
  });
});

// E. Feed Upvote click handler (Auth Gated)
window.toggleUpvote = function(postId) {
  if (!clerkAuthenticationGuard("like posts")) return;

  const post = appState.posts.find(p => p.id === postId);
  if (!post) return;

  const myUsername = appState.clerkUser.username;
  const userIdx = post.likedBy.indexOf(myUsername);

  if (userIdx === -1) {
    post.likedBy.push(myUsername);
    post.likes += 1;
    showToast("Strategy upvoted!", "success");
  } else {
    post.likedBy.splice(userIdx, 1);
    post.likes -= 1;
    showToast("Upvote retracted.", "info");
  }

  setStorage("gamin_posts", appState.posts);
  renderFeed();
  syncClerkAuthStateUI();
};

// F. Collapsible Comments (Gate free to read, Auth Gated to write)
window.toggleCommentsSection = function(postId) {
  const section = document.getElementById(`comments-${postId}`);
  if (section) {
    const isHidden = section.style.display === "none";
    section.style.display = isHidden ? "flex" : "none";
  }
};

window.handleCommentSubmit = function(e, postId) {
  if (e.key === "Enter") {
    addComment(postId);
  }
};

window.addComment = function(postId) {
  if (!clerkAuthenticationGuard("reply to comments")) return;

  const input = document.getElementById(`comment-input-${postId}`);
  if (!input || !input.value.trim()) return;

  const post = appState.posts.find(p => p.id === postId);
  if (!post) return;

  const newComment = {
    id: "c_" + Date.now(),
    author: appState.clerkUser.username,
    role: appState.clerkUser.role,
    avatar: appState.clerkUser.seed,
    text: input.value.trim(),
    timestamp: "Just now"
  };

  post.comments.push(newComment);
  setStorage("gamin_posts", appState.posts);
  input.value = "";
  
  renderFeed();
  showToast("Strategy reply added!", "success");
  
  const section = document.getElementById(`comments-${postId}`);
  if (section) section.style.display = "flex";
};

// G. Challenges Quests Actions (Auth Gated)
window.interactChallenge = function(chalId) {
  if (!clerkAuthenticationGuard("accept arena challenges")) return;

  const chal = appState.challenges.find(c => c.id === chalId);
  if (!chal) return;

  if (chal.status === "Available") {
    chal.status = "Joined";
    chal.progress = 20;
    showToast(`Quest '${chal.title}' accepted!`, "success");
  } else if (chal.status === "Joined") {
    chal.status = "Completed";
    chal.progress = 100;
    
    // Reward XP
    appState.clerkUser.xp += chal.xp;
    setStorage("gamin_clerk_user", appState.clerkUser);
    
    showToast(`Accomplished! Gained +${chal.xp} XP points!`, "success");

    // Dynamic Achievements check
    const compCount = appState.challenges.filter(c => c.status === "Completed").length;
    if (compCount >= 3) {
      unlockAchievement("ach_4"); // Unlock Dev Approved Gamer / Complete Quest Badge
    }
  }

  setStorage("gamin_challenges", appState.challenges);
  syncClerkAuthStateUI();
  renderChallenges();
};

function unlockAchievement(achId) {
  const ach = appState.achievements.find(a => a.id === achId);
  if (ach && !ach.unlocked) {
    ach.unlocked = true;
    ach.date = "23 May 2026";
    setStorage("gamin_achievements", appState.achievements);
    showToast(`✨ NEW TROPHY UNLOCKED: ${ach.title}!`, "warning");
    
    // Reward bonus XP
    appState.clerkUser.xp += 500;
    setStorage("gamin_clerk_user", appState.clerkUser);
    syncClerkAuthStateUI();
  }
}


// --- 6. OVERLAYS & MODALS CREATION CONTROLLERS ---

// A. Post Creator Modal (Auth Gated)
const postCreatorModal = document.getElementById("post-creator-modal");
const openPostBtn = document.getElementById("open-post-creator-btn");
const closePostBtn = document.getElementById("close-post-modal-btn");
const cancelPostBtn = document.getElementById("cancel-post-modal-btn");
const createPostForm = document.getElementById("create-post-form");

if (openPostBtn) {
  openPostBtn.addEventListener("click", () => {
    if (clerkAuthenticationGuard("create strategy articles")) {
      postCreatorModal.classList.add("active");
    }
  });
}

const hidePostModal = () => {
  if (postCreatorModal) postCreatorModal.classList.remove("active");
  if (createPostForm) createPostForm.reset();
};

if (closePostBtn) closePostBtn.addEventListener("click", hidePostModal);
if (cancelPostBtn) cancelPostBtn.addEventListener("click", hidePostModal);

// B. Ask Question Modal Controllers (Auth Gated)
const askModal = document.getElementById("ask-modal");
const closeAskBtn = document.getElementById("close-ask-modal-btn");
const cancelAskBtn = document.getElementById("cancel-ask-modal-btn");
const askQuestionForm = document.getElementById("ask-question-form");

const openAskModalFn = () => {
  if (clerkAuthenticationGuard("post to r/AskGamers")) {
    if (askModal) askModal.classList.add("active");
  }
};

// Both banner button and sidebar button open the modal
const openAskBtn = document.getElementById("open-ask-modal-btn");
const openAskBtn2 = document.getElementById("open-ask-modal-btn-2");
if (openAskBtn) openAskBtn.addEventListener("click", openAskModalFn);
if (openAskBtn2) openAskBtn2.addEventListener("click", openAskModalFn);

const hideAskModal = () => {
  if (askModal) askModal.classList.remove("active");
  if (askQuestionForm) askQuestionForm.reset();
};

if (closeAskBtn) closeAskBtn.addEventListener("click", hideAskModal);
if (cancelAskBtn) cancelAskBtn.addEventListener("click", hideAskModal);
if (askModal) askModal.addEventListener("click", (e) => { if (e.target === askModal) hideAskModal(); });

if (askQuestionForm) {
  askQuestionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("ask-title").value.trim();
    const content = document.getElementById("ask-content")?.value.trim() || "";
    const flairEl = document.getElementById("ask-flair-select");
    const flair = flairEl ? flairEl.value : "discussion";

    if (!title) return;

    const newQuestion = {
      id: "q_" + Date.now(),
      title,
      content,
      flair,
      author: appState.clerkUser.username,
      avatar: appState.clerkUser.seed,
      role: appState.clerkUser.role,
      upvotes: 1,
      downvotes: 0,
      upvotedBy: [appState.clerkUser.username],
      downvotedBy: [],
      savedBy: [],
      views: 1,
      timestamp: "Just now",
      answers: []
    };

    appState.questions.unshift(newQuestion);
    setStorage("gamin_questions", appState.questions);
    hideAskModal();
    // Switch sort to "new" so the freshly posted question appears at top
    askCurrentSort = "new";
    document.querySelectorAll(".sort-tab").forEach(btn => btn.classList.remove("active"));
    const newTab = document.querySelector('.sort-tab[data-sort="new"]');
    if (newTab) newTab.classList.add("active");
    renderQuestions();
    showToast("🎮 Your post is live on r/AskGamers!", "success");
  });
}

// Sort Tabs
document.addEventListener("click", (e) => {
  const sortBtn = e.target.closest(".sort-tab");
  if (sortBtn && sortBtn.dataset.sort) {
    document.querySelectorAll(".sort-tab").forEach(b => b.classList.remove("active"));
    sortBtn.classList.add("active");
    askCurrentSort = sortBtn.dataset.sort;
    renderQuestions();
  }

  // Flair filter chips (banner bar)
  const flairBtn = e.target.closest(".flair-chip");
  if (flairBtn && flairBtn.dataset.flair) {
    document.querySelectorAll(".flair-chip").forEach(b => b.classList.remove("active"));
    flairBtn.classList.add("active");
    askCurrentFlair = flairBtn.dataset.flair;
    renderQuestions();
  }

  // Hot tag sidebar clicks
  const hotTag = e.target.closest(".hot-tag");
  if (hotTag && hotTag.dataset.flair) {
    document.querySelectorAll(".flair-chip").forEach(b => {
      b.classList.toggle("active", b.dataset.flair === hotTag.dataset.flair);
    });
    askCurrentFlair = hotTag.dataset.flair;
    renderQuestions();
  }
});

if (createPostForm) {
  createPostForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("post-title").value.trim();
    const category = document.getElementById("post-category").value;
    const content = document.getElementById("post-content").value.trim();
    const imageSeed = document.getElementById("post-image-seed").value.trim();

    if (!title || !content) return;

    const newPost = {
      id: "post_" + Date.now(),
      title,
      category,
      content,
      author: appState.clerkUser.username,
      authorRole: appState.clerkUser.role,
      authorAvatar: appState.clerkUser.seed,
      image: imageSeed || null,
      likes: 0,
      likedBy: [],
      views: 5,
      timestamp: "Just now",
      comments: []
    };

    appState.posts.unshift(newPost);
    setStorage("gamin_posts", appState.posts);
    
    hidePostModal();
    renderFeed();
    syncClerkAuthStateUI();
    showToast("Minimalist gamer article published!", "success");
  });
}

// B. Feedback Form Validation Loops (Can be submitted anonymously, but rewards authenticated Clerk members!)
const feedbackForm = document.getElementById("feedback-form");
if (feedbackForm) {
  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nameIn = document.getElementById("contact-name");
    const emailIn = document.getElementById("contact-email");
    const msgIn = document.getElementById("contact-message");
    const termsIn = document.getElementById("contact-terms");

    // Clear previous errors
    document.querySelectorAll(".error-msg").forEach(el => el.classList.remove("visible"));
    document.querySelectorAll(".form-input").forEach(el => el.classList.remove("input-error"));

    let isValid = true;

    // Validate Name
    if (!nameIn.value.trim() || nameIn.value.trim().length < 3) {
      showInputError("err-contact-name", "contact-name", "Provide at least 3 characters.");
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailIn.value.trim())) {
      showInputError("err-contact-email", "contact-email", "Provide a valid email.");
      isValid = false;
    }

    // Validate Message
    if (!msgIn.value.trim() || msgIn.value.trim().length < 10) {
      showInputError("err-contact-message", "contact-message", "Details must be at least 10 characters.");
      isValid = false;
    }

    // Validate Terms
    if (!termsIn.checked) {
      const errBox = document.getElementById("err-contact-terms");
      if (errBox) {
        errBox.textContent = "You must agree to Community Guidelines.";
        errBox.classList.add("visible");
      }
      isValid = false;
    }

    if (isValid) {
      showToast("Submitting details to GAMIN network...", "info");
      
      setTimeout(() => {
        showToast("Feedback submitted successfully!", "success");
        feedbackForm.reset();
        
        // Rewards logged in Clerk members by unlocking a Supporter Badge!
        if (appState.clerkUser) {
          unlockAchievement("ach_3");
        }
      }, 1500);
    }
  });
}

function showInputError(errId, inputId, msg) {
  const errText = document.getElementById(errId);
  const inputEl = document.getElementById(inputId);
  
  if (errText) {
    errText.textContent = msg;
    errText.classList.add("visible");
  }
  if (inputEl) {
    inputEl.classList.add("input-error");
    inputEl.animate([
      { transform: "translateX(-2px)" },
      { transform: "translateX(2px)" },
      { transform: "translateX(0)" }
    ], { duration: 150 });
  }
}

// C. Profile Edits Form Handler (Gate secured by routing, but double-checked)
const profileForm = document.getElementById("profile-edit-form");
if (profileForm) {
  profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!appState.clerkUser) return;

    const userVal = document.getElementById("profile-username-input").value.trim();
    const roleVal = document.getElementById("profile-role-input").value;
    const bioVal = document.getElementById("profile-bio-input").value.trim();
    const seedVal = document.getElementById("profile-avatar-seed").value.trim();

    if (userVal.length < 3) {
      showToast("Gamer tag must be at least 3 characters.", "error");
      return;
    }

    appState.clerkUser.username = userVal;
    appState.clerkUser.role = roleVal;
    appState.clerkUser.tagline = bioVal;
    appState.clerkUser.seed = seedVal || "GaminGamer";

    setStorage("gamin_clerk_user", appState.clerkUser);
    
    // Sync tactical squad
    appState.squad[0].username = userVal;
    appState.squad[0].avatar = seedVal || "GaminGamer";
    setStorage("gamin_squad", appState.squad);

    syncClerkAuthStateUI();
    renderSquad();
    showToast("Clerk profile updated!", "success");
  });
}

// Randomize avatar seed button
const randomAvatarBtn = document.getElementById("randomize-avatar-btn");
if (randomAvatarBtn) {
  randomAvatarBtn.addEventListener("click", () => {
    const seeds = ["Lumina", "Zero", "Onyx", "Volt", "Nexus", "Shadow", "Rogue", "Aero", "Alpha", "Zenith"];
    const randomSeed = seeds[Math.floor(Math.random() * seeds.length)] + Math.floor(Math.random() * 99);
    
    const seedInput = document.getElementById("profile-avatar-seed");
    if (seedInput) {
      seedInput.value = randomSeed;
      showToast(`Avatar seed set: ${randomSeed}. Save to apply.`, "info");
    }
  });
}

// D. Squad Invites Form Handler (Auth Gated)
const inviteSquadForm = document.getElementById("invite-squad-form");
if (inviteSquadForm) {
  inviteSquadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!clerkAuthenticationGuard("manage tactical squads")) return;

    const userIn = document.getElementById("invite-squad-username");
    const uName = userIn.value.trim();

    if (!uName) return;

    if (appState.squad.length >= 6) {
      showToast("Tactical squad slots full! Max 6 members.", "error");
      return;
    }

    const alreadyMember = appState.squad.some(m => m.username.toLowerCase() === uName.toLowerCase());
    if (alreadyMember) {
      showToast("Gamer is already in squad.", "error");
      return;
    }

    const newMember = {
      username: uName,
      role: "Strategist",
      avatar: uName
    };

    appState.squad.push(newMember);
    setStorage("gamin_squad", appState.squad);
    userIn.value = "";
    
    renderSquad();
    syncClerkAuthStateUI();
    showToast(`Squad recruit added: ${uName}!`, "success");

    // Unlock Tactical Achievement
    if (appState.squad.length >= 4) {
      unlockAchievement("ach_2");
    }
  });
}

window.removeSquadMember = function(idx) {
  if (!appState.clerkUser) return;
  const member = appState.squad[idx];
  if (member.username === appState.clerkUser.username) return;

  appState.squad.splice(idx, 1);
  setStorage("gamin_squad", appState.squad);
  renderSquad();
  syncClerkAuthStateUI();
  showToast("Member detached.", "info");
};

// Tagline preview card updates
const cardTaglineIn = document.getElementById("custom-card-tagline");
if (cardTaglineIn) {
  cardTaglineIn.addEventListener("input", (e) => {
    const textVal = e.target.value;
    const previewEl = document.querySelector(".passport-tagline");
    if (previewEl) previewEl.textContent = `“${textVal}”`;
  });
}


// --- 7. DYNAMIC SIDEBAR COLLAPSIBLE TO GAMIN LOGO CLICK ---
const logoLink = document.getElementById("logo-link");
const leftSidebar = document.getElementById("sidebar-left");

if (logoLink && leftSidebar) {
  // Load initial collapsed state if saved
  const sidebarCollapsed = localStorage.getItem("gamin_sidebar_collapsed") === "true";
  if (sidebarCollapsed) {
    leftSidebar.classList.add("collapsed");
    logoLink.classList.add("logo-trigger-active");
  }

  logoLink.addEventListener("click", () => {
    leftSidebar.classList.toggle("collapsed");
    logoLink.classList.toggle("logo-trigger-active");
    const isCollapsed = leftSidebar.classList.contains("collapsed");
    localStorage.setItem("gamin_sidebar_collapsed", isCollapsed);
    showToast(isCollapsed ? "Sidebar collapsed" : "Sidebar expanded", "info");
  });
}


// --- 8. HTML5 CANVAS PORTFOLIO EXPORTER (MINIMALIST CODE CODES) ---
const downloadBtn = document.getElementById("download-passport-btn");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    generatePassportCardImage();
  });
}

function generatePassportCardImage() {
  if (!appState.clerkUser) return;
  showToast("Compiling passport canvas...", "info");

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 800;
  canvas.height = 480;

  const width = canvas.width;
  const height = canvas.height;

  const user = appState.clerkUser;
  const taglineText = document.getElementById("custom-card-tagline")?.value || user.tagline;

  // A. Render Obsidian Solid Flat Background (Minimalist)
  ctx.fillStyle = document.body.classList.contains("light-theme") ? "hsl(140, 15%, 97%)" : "hsl(140, 10%, 4%)";
  ctx.fillRect(0, 0, width, height);

  // B. Draw Ultra-thin Charcoal outline borders (No glows)
  ctx.strokeStyle = document.body.classList.contains("light-theme") ? "hsl(140, 10%, 88%)" : "hsl(140, 6%, 14%)";
  ctx.lineWidth = 1;
  ctx.strokeRect(20, 20, width - 40, height - 40);

  // C. Fallback Crest Vector Graphic (Bypasses browser CORS tainted canvas errors)
  const drawMinimalistCrest = () => {
    // Outer circle
    ctx.strokeStyle = "hsl(142, 45%, 42%)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(90, 95, 40, 0, Math.PI * 2);
    ctx.stroke();

    // Solid inner fill
    ctx.fillStyle = document.body.classList.contains("light-theme") ? "hsl(140, 10%, 93%)" : "hsl(140, 8%, 12%)";
    ctx.beginPath();
    ctx.arc(90, 95, 38, 0, Math.PI * 2);
    ctx.fill();

    // Star icon vector
    ctx.fillStyle = "hsl(142, 45%, 42%)";
    ctx.beginPath();
    ctx.arc(90, 95, 4, 0, Math.PI * 2);
    ctx.fill();
  };

  const avatarImg = new Image();
  avatarImg.crossOrigin = "anonymous";
  avatarImg.src = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.seed}`;

  const renderTextAndStats = () => {
    const primaryColor = document.body.classList.contains("light-theme") ? "#1e293b" : "#f1f5f9";
    const secondaryColor = document.body.classList.contains("light-theme") ? "#475569" : "#94a3b8";
    const accentColor = document.body.classList.contains("light-theme") ? "hsl(142, 50%, 34%)" : "hsl(142, 45%, 42%)";

    // Gamer Tag
    ctx.fillStyle = primaryColor;
    ctx.font = "bold 24px 'Roboto', sans-serif";
    ctx.fillText(user.username, 160, 85);

    // Role Box
    const roleText = user.role === "dev" ? "GAME DEVELOPER" : "PRO GAMER";
    ctx.font = "bold 10px 'Roboto', sans-serif";
    const textWidth = ctx.measureText(roleText).width;
    
    ctx.fillStyle = document.body.classList.contains("light-theme") ? "hsl(140, 10%, 93%)" : "hsl(140, 8%, 12%)";
    ctx.strokeStyle = document.body.classList.contains("light-theme") ? "hsl(140, 10%, 88%)" : "hsl(140, 6%, 14%)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(160, 96, textWidth + 12, 16, 3);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = accentColor;
    ctx.fillText(roleText, 166, 108);

    // Tagline text
    ctx.fillStyle = secondaryColor;
    ctx.font = "italic 14px 'Roboto', sans-serif";
    ctx.fillText(`“${taglineText}”`, 160, 140);

    // Level progress
    const levelVal = Math.floor(user.xp / 250);
    ctx.fillStyle = accentColor;
    ctx.font = "bold 12px 'Roboto', sans-serif";
    ctx.fillText(`Level ${levelVal}`, 480, 84);

    ctx.fillStyle = secondaryColor;
    ctx.font = "11px 'Roboto', sans-serif";
    ctx.fillText(`${user.xp} / ${((levelVal + 1) * 250)} XP`, 710, 84);

    // Flat Progress Bar
    ctx.fillStyle = document.body.classList.contains("light-theme") ? "hsl(140, 10%, 88%)" : "hsl(140, 10%, 16%)";
    ctx.beginPath();
    ctx.roundRect(480, 96, 270, 4, 2);
    ctx.fill();

    const xpCurrent = user.xp % 250;
    const barWidth = Math.min(270, Math.floor((xpCurrent / 250) * 270));
    ctx.fillStyle = accentColor;
    ctx.beginPath();
    ctx.roundRect(480, 96, barWidth, 4, 2);
    ctx.fill();

    // Divider Line
    ctx.strokeStyle = document.body.classList.contains("light-theme") ? "hsl(140, 10%, 88%)" : "hsl(140, 6%, 14%)";
    ctx.beginPath();
    ctx.moveTo(40, 175);
    ctx.lineTo(760, 175);
    ctx.stroke();

    // Statistics Boxes (Flat)
    const stats = [
      { num: appState.challenges.filter(c => c.status === "Completed").length.toString(), lbl: "WINS" },
      { num: appState.posts.filter(p => p.author === user.username).length.toString(), lbl: "POSTS" },
      { num: (appState.posts.filter(p => p.author === user.username).reduce((s,c)=>s+c.likes,0)+148).toString(), lbl: "UPVOTES" },
      { num: "98.4%", lbl: "TRUST" }
    ];

    const blockWidth = 160;
    const startX = 50;
    const startY = 200;
    const gap = 20;

    stats.forEach((st, index) => {
      const bx = startX + index * (blockWidth + gap);
      
      // Flat card background
      ctx.fillStyle = document.body.classList.contains("light-theme") ? "#fff" : "hsl(140, 8%, 8%)";
      ctx.strokeStyle = document.body.classList.contains("light-theme") ? "hsl(140, 10%, 88%)" : "hsl(140, 6%, 14%)";
      ctx.lineWidth = 1;
      
      ctx.beginPath();
      ctx.roundRect(bx, startY, blockWidth, 70, 6);
      ctx.fill();
      ctx.stroke();

      // Number
      ctx.fillStyle = accentColor;
      ctx.font = "bold 22px 'Roboto', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(st.num, bx + blockWidth/2, startY + 34);

      // Label
      ctx.fillStyle = secondaryColor;
      ctx.font = "bold 9px 'Roboto', sans-serif";
      ctx.fillText(st.lbl, bx + blockWidth/2, startY + 54);
    });

    ctx.textAlign = "left";

    // Badges gallery showcase
    ctx.fillStyle = secondaryColor;
    ctx.font = "bold 10px 'Roboto', sans-serif";
    ctx.fillText("SPECIALTY TROPHIES & BADGES", 50, 310);

    const badges = appState.achievements.filter(a => a.unlocked);
    const badgeStartY = 330;
    
    badges.forEach((bd, idx) => {
      const bdx = 50 + idx * 56;
      
      // Flat circles
      ctx.fillStyle = document.body.classList.contains("light-theme") ? "hsl(140, 10%, 88%)" : "hsl(140, 10%, 16%)";
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.arc(bdx + 20, badgeStartY + 20, 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = primaryColor;
      ctx.font = "18px 'Roboto', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(bd.icon, bdx + 20, badgeStartY + 26);
      ctx.textAlign = "left";
    });

    // Date Watermark
    ctx.fillStyle = secondaryColor;
    ctx.font = "bold 9px 'Roboto', sans-serif";
    ctx.fillText("GAMIN PASSPORT CREDENTIAL", 50, 435);

    ctx.textAlign = "right";
    ctx.fillText("JOINED MAY 2026", 750, 435);
    ctx.textAlign = "left";

    // Download PNG
    try {
      const link = document.createElement("a");
      link.download = `gamin_passport_${user.username.toLowerCase()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      showToast("Gaming passport downloaded!", "success");
    } catch (err) {
      showToast("Download limits blocked canvas save.", "error");
    }
  };

  avatarImg.onload = () => {
    ctx.save();
    ctx.beginPath();
    ctx.arc(90, 95, 40, 0, Math.PI * 2);
    ctx.clip();
    
    ctx.fillStyle = "hsl(140, 10%, 12%)";
    ctx.fillRect(50, 55, 80, 80);
    ctx.drawImage(avatarImg, 50, 55, 80, 80);
    ctx.restore();
    
    ctx.strokeStyle = "hsl(142, 45%, 42%)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(90, 95, 40, 0, Math.PI * 2);
    ctx.stroke();

    renderTextAndStats();
  };

  avatarImg.onerror = () => {
    drawMinimalistCrest();
    renderTextAndStats();
  };
}


// --- 8. FLOATING TOAST SYSTEMS ---
function showToast(msg, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  // Custom theme-colored glow highlights
  let typeIcon = "✔️";
  if (type === "error") typeIcon = "❌";
  if (type === "info") typeIcon = "ℹ️";
  if (type === "warning") typeIcon = "⚠️";

  toast.innerHTML = `
    <span style="margin-right: 8px;">${typeIcon}</span>
    <span style="flex: 1;">${msg}</span>
    <button class="toast-close" style="font-weight: bold; margin-left: 8px; font-size: 1.1rem; line-height: 1;">&times;</button>
  `;

  container.appendChild(toast);

  // Bind Close Button
  toast.querySelector(".toast-close").addEventListener("click", () => {
    toast.style.animation = "toastFlyOut 0.2s ease forwards";
    setTimeout(() => toast.remove(), 200);
  });

  // Auto-Dismiss after 4 seconds
  setTimeout(() => {
    if (toast && toast.parentNode) {
      toast.style.animation = "toastFlyOut 0.2s ease forwards";
      setTimeout(() => toast.remove(), 200);
    }
  }, 4000);
}


/* ====================================================
   GAMIN HIGH-TECH SOCIAL AND STORIES CORE LOGIC
   ==================================================== */

// --- 1. INSTAGRAM-STYLE STORIES STATE & CONTROLLER ---
const STORIES_DATA = [
  {
    id: "story_self",
    username: "My Story",
    avatar: "GaminGamer",
    type: "self",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop",
    caption: "Setting up tactical gameplay profiles! Add your strategy cards.",
    timestamp: "Just now",
    unviewed: false
  },
  {
    id: "story_dev1",
    username: "AuraGames",
    avatar: "AuraGames",
    type: "dev",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop",
    caption: "Testing cozy strategy controls. FPS speedrun quest goes live soon! ☕🎮",
    timestamp: "1h ago",
    unviewed: true
  },
  {
    id: "story_dev2",
    username: "RetroStudio",
    avatar: "RetroStudio",
    type: "dev",
    image: "https://images.unsplash.com/photo-1586227740562-205a679e55a2?w=800&auto=format&fit=crop",
    caption: "New minimalist UI components render test. Pixel-perfect canvas!",
    timestamp: "2h ago",
    unviewed: true
  },
  {
    id: "story_vip1",
    username: "MinimalistGamer",
    avatar: "Aero",
    type: "vip",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop",
    caption: "Rate my calm green cyber desktop build. Ultimate zero distraction setup! 🟢⚫",
    timestamp: "4h ago",
    unviewed: true
  },
  {
    id: "story_usr1",
    username: "PixelCozy",
    avatar: "Volt",
    type: "user",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop",
    caption: "Looking for strategy squads! Direct message me to join cooperative multiplayer runs.",
    timestamp: "6h ago",
    unviewed: true
  },
  {
    id: "story_usr2",
    username: "SpeedRunner99",
    avatar: "Blaze",
    type: "user",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop",
    caption: "Elden Ring boss speedrun record! 5:58 is locked. Submit your quests!",
    timestamp: "8h ago",
    unviewed: true
  }
];

let activeStoryIndex = 0;
let storyTimer = null;
let storyProgress = 0;
const STORY_DURATION = 5000; // 5 seconds per story

function initStoriesSystem() {
  renderStoriesBar();
  
  // Bind close viewer
  const closeBtn = document.getElementById("close-story-modal-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeStoryViewer);
  }
  
  // Story Nav
  const prevBtn = document.getElementById("story-nav-prev");
  const nextBtn = document.getElementById("story-nav-next");
  if (prevBtn) prevBtn.addEventListener("click", () => shiftStory(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => shiftStory(1));

  // Reply Sender
  const sendBtn = document.getElementById("story-reply-send-btn");
  if (sendBtn) {
    sendBtn.addEventListener("click", sendStoryDMReply);
  }
  
  const replyInput = document.getElementById("story-reply-input");
  if (replyInput) {
    replyInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendStoryDMReply();
    });
  }
}

// Render horizontal circular circles
function renderStoriesBar() {
  const container = document.getElementById("stories-carousel-inner");
  if (!container) return;

  const user = appState.clerkUser;
  
  container.innerHTML = STORIES_DATA.map((st, idx) => {
    let unviewedClass = st.unviewed ? "unviewed" : "";
    let customAvatar = st.type === "self" && user ? `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.seed}` : `https://api.dicebear.com/7.x/pixel-art/svg?seed=${st.avatar}`;
    let customName = st.type === "self" && user ? "My Story" : st.username;

    return `
      <div class="story-circle-item ${unviewedClass} ${st.type}" onclick="launchStoryViewer(${idx})">
        <div class="story-ring-wrapper">
          <img src="${customAvatar}" alt="${customName} Story">
        </div>
        <span class="story-user-tag">${customName}</span>
      </div>
    `;
  }).join("");
}

// Open Story Viewer Modal
function launchStoryViewer(index) {
  const viewerModal = document.getElementById("story-viewer-modal");
  if (!viewerModal) return;

  activeStoryIndex = index;
  viewerModal.classList.add("active");
  
  // Set story as viewed in local state
  STORIES_DATA[activeStoryIndex].unviewed = false;
  renderStoriesBar();

  renderStoryContent();
}

function renderStoryContent() {
  const story = STORIES_DATA[activeStoryIndex];
  const user = appState.clerkUser;

  const authorAvatar = document.getElementById("story-author-avatar");
  const authorName = document.getElementById("story-author-name");
  const timeBadge = document.getElementById("story-time-badge");
  const contentImg = document.getElementById("story-content-image");
  const captionOverlay = document.getElementById("story-caption-overlay");
  const replyInput = document.getElementById("story-reply-input");

  if (authorAvatar) authorAvatar.src = story.type === "self" && user ? `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.seed}` : `https://api.dicebear.com/7.x/pixel-art/svg?seed=${story.avatar}`;
  if (authorName) authorName.textContent = story.type === "self" && user ? user.username : story.username;
  if (timeBadge) timeBadge.textContent = story.timestamp;
  if (contentImg) contentImg.src = story.image;
  if (captionOverlay) captionOverlay.textContent = story.caption;
  if (replyInput) replyInput.value = "";

  // Reset Progress Indicators
  buildStoryProgressIndicator();
  startStoryTimer();
}

// Build progress segment bars at top of story modal
function buildStoryProgressIndicator() {
  const container = document.getElementById("story-progress-bar");
  if (!container) return;

  container.innerHTML = STORIES_DATA.map((st, idx) => {
    return `
      <div class="story-progress-segment">
        <div class="story-progress-fill" id="story-progress-fill-${idx}"></div>
      </div>
    `;
  }).join("");
}

// Start 5 second story playback
function startStoryTimer() {
  if (storyTimer) clearInterval(storyTimer);
  
  storyProgress = 0;
  const fillEl = document.getElementById(`story-progress-fill-${activeStoryIndex}`);
  
  // Fill all previous progress segments
  for (let i = 0; i < activeStoryIndex; i++) {
    const prevFill = document.getElementById(`story-progress-fill-${i}`);
    if (prevFill) prevFill.style.width = "100%";
  }

  const intervalTime = 100;
  const progressIncrement = (intervalTime / STORY_DURATION) * 100;

  storyTimer = setInterval(() => {
    storyProgress += progressIncrement;
    if (fillEl) fillEl.style.width = `${Math.min(100, storyProgress)}%`;

    if (storyProgress >= 100) {
      clearInterval(storyTimer);
      // Auto advance
      if (activeStoryIndex < STORIES_DATA.length - 1) {
        shiftStory(1);
      } else {
        closeStoryViewer();
      }
    }
  }, intervalTime);
}

function shiftStory(direction) {
  clearInterval(storyTimer);
  
  activeStoryIndex += direction;
  if (activeStoryIndex < 0) {
    activeStoryIndex = 0;
  }
  
  if (activeStoryIndex >= STORIES_DATA.length) {
    closeStoryViewer();
    return;
  }

  STORIES_DATA[activeStoryIndex].unviewed = false;
  renderStoriesBar();
  renderStoryContent();
}

function closeStoryViewer() {
  clearInterval(storyTimer);
  const viewerModal = document.getElementById("story-viewer-modal");
  if (viewerModal) viewerModal.classList.remove("active");
}

// Forward Story reply as a Direct Message in our DM Chat Hub!
function sendStoryDMReply() {
  const replyInput = document.getElementById("story-reply-input");
  if (!replyInput) return;
  const text = replyInput.value.trim();
  if (!text) return;

  if (!clerkAuthenticationGuard("send replies to stories")) return;

  const story = STORIES_DATA[activeStoryIndex];
  
  // Skip sending DM to yourself
  if (story.type === "self") {
    showToast("You replied to your own story! Nice.", "info");
    replyInput.value = "";
    return;
  }

  // Inject story context as a first quote, then user reply
  const formattedMsg = `💬 *Replied to your story: "${story.caption}"*\n\n"${text}"`;
  
  // Forward to DM logic
  forwardMessageToDM(story.username, formattedMsg);
  
  showToast(`Reply sent to ${story.username}! Opened in Direct Chats.`, "success");
  replyInput.value = "";

  // Auto close story viewer and open Chat Hub direct message to show results!
  setTimeout(() => {
    closeStoryViewer();
    expandSocialHub();
    openDirectChatRoom(story.username);
  }, 1000);
}


// --- 2. INSTAGRAM-STYLE DETAIL POST EXPANSION MODAL ---
let activePostId = null;

function initPostExpansionModal() {
  // Bind close detail post modal
  const closeBtn = document.getElementById("close-post-expansion-btn");
  if (closeBtn) closeBtn.addEventListener("click", closePostExpansionModal);

  // Bind Submit Comment Inside Expansion
  const submitBtn = document.getElementById("post-exp-comment-submit-btn");
  if (submitBtn) submitBtn.addEventListener("click", addExpansionPostComment);

  const commentInput = document.getElementById("post-exp-comment-input-field");
  if (commentInput) {
    commentInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") addExpansionPostComment();
    });
  }

  // Bind Like Button inside detailed view
  const likeBtn = document.getElementById("post-exp-like-btn");
  if (likeBtn) {
    likeBtn.addEventListener("click", () => {
      if (activePostId) {
        toggleUpvote(activePostId);
        // Refresh details modal counters
        renderPostExpansionDetails(activePostId);
      }
    });
  }
}

// Hook card titles and card image media click to expand!
// Overriding core renderFeed() by making elements clickable:
// We intercept this by patching the onclick inside renderFeed dynamic string.
window.openPostExpansionModal = function(postId) {
  const modal = document.getElementById("post-expansion-modal");
  if (!modal) return;

  activePostId = postId;
  modal.classList.add("active");

  // Increment views counter by default when clicking
  const post = appState.posts.find(p => p.id === postId);
  if (post) {
    post.views = (post.views || 0) + 1;
    setStorage("gamin_posts", appState.posts);
  }

  renderPostExpansionDetails(postId);
  renderFeed(); // redraw main feed to sync view count
};

window.closePostExpansionModal = function() {
  const modal = document.getElementById("post-expansion-modal");
  if (modal) modal.classList.remove("active");
  activePostId = null;
};

// Render detailed post information inside expansion panel
function renderPostExpansionDetails(postId) {
  const post = appState.posts.find(p => p.id === postId);
  if (!post) return;

  const loggedInUser = appState.clerkUser ? appState.clerkUser.username : "";
  const userLiked = post.likedBy.includes(loggedInUser);

  // Image Url mapping
  let imageUrl = "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format";
  if (post.image === "cozy-setup") imageUrl = "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format";
  if (post.image === "clean-desk") imageUrl = "https://images.unsplash.com/photo-1586227740562-205a679e55a2?w=800&auto=format";
  if (post.image === "indie-gaming") imageUrl = "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format";
  const isCustomKeyword = !["cozy-setup", "clean-desk", "indie-gaming"].includes(post.image);

  // Fill Details
  document.getElementById("post-exp-img").src = isCustomKeyword ? 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format' : imageUrl;
  document.getElementById("post-exp-author-avatar").src = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${post.authorAvatar}`;
  document.getElementById("post-exp-author-name").textContent = post.author;
  
  const roleBadge = document.getElementById("post-exp-author-role");
  roleBadge.textContent = post.authorRole === "dev" ? "DEV" : "PRO GAMER";
  roleBadge.className = `badge-role ${post.authorRole}`;

  // Location display
  let locationText = "GAMIN Online Hub";
  if (post.category === "review") locationText = "👾 Game Critique Arena";
  if (post.category === "tip") locationText = "💡 Strategy War Room";
  if (post.category === "squad") locationText = "⚔️ Clans Recruitment Center";
  document.getElementById("post-exp-location").textContent = locationText;

  const catBadge = document.getElementById("post-exp-category");
  catBadge.textContent = post.category;
  catBadge.className = `badge-tag ${post.category}`;

  document.getElementById("post-exp-title").textContent = post.title;
  document.getElementById("post-exp-content").innerHTML = post.content.replace(/\n/g, "<br>");
  document.getElementById("post-exp-time").textContent = post.timestamp;
  
  // Likes & Views
  document.getElementById("post-exp-likes-count").textContent = `${post.likes} Likes`;
  document.getElementById("post-exp-views-count").textContent = `${post.views} views`;

  // Like Button Highlight
  const likeBtn = document.getElementById("post-exp-like-btn");
  if (likeBtn) {
    if (userLiked) {
      likeBtn.classList.add("upvote-active");
    } else {
      likeBtn.classList.remove("upvote-active");
    }
  }

  // Comments feed
  const commentsFeed = document.getElementById("post-exp-comments-feed");
  if (commentsFeed) {
    if (post.comments.length === 0) {
      commentsFeed.innerHTML = `<p style="color:var(--text-muted); font-size:0.78rem; text-align:center; padding: 20px 0;">No strategy replies yet. Post your insight!</p>`;
    } else {
      commentsFeed.innerHTML = post.comments.map(c => `
        <div class="comment-item" style="border-bottom: 1px solid var(--border-color); padding-bottom: 8px;">
          <div class="comment-avatar">
            <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=${c.avatar}" alt="${c.author}">
          </div>
          <div class="comment-details">
            <div class="comment-user-row">
              <span class="comment-user-name" style="font-size:0.75rem; font-weight:600;">${c.author}</span>
              <span class="badge-role ${c.role}" style="font-size:0.55rem; padding:0 4px;">${c.role === "dev" ? "Dev" : "Gamer"}</span>
              <span class="meta-time" style="font-size:0.6rem;">${c.timestamp}</span>
            </div>
            <p class="comment-text" style="font-size:0.76rem; color:var(--text-secondary); margin-top:2px;">${c.text}</p>
          </div>
        </div>
      `).join("");
    }
  }
}

// Add comments inside expansion modal
function addExpansionPostComment() {
  if (!activePostId) return;
  const inputEl = document.getElementById("post-exp-comment-input-field");
  if (!inputEl) return;
  const text = inputEl.value.trim();
  if (!text) return;

  if (!clerkAuthenticationGuard("post comments")) return;

  const post = appState.posts.find(p => p.id === activePostId);
  if (!post) return;

  const me = appState.clerkUser;
  const newComment = {
    id: `c_${Date.now()}`,
    author: me.username,
    role: me.role,
    avatar: me.seed,
    text: text,
    timestamp: "Just now"
  };

  post.comments.push(newComment);
  setStorage("gamin_posts", appState.posts);
  
  inputEl.value = "";
  renderPostExpansionDetails(activePostId);
  renderFeed();
  showToast("Comment published!", "success");
}

// --- Dynamic Feed Render Click Bind Patch ---
// Overrides the default renderFeed to inject onclick expansion triggers on headers/media!
const originalRenderFeed = renderFeed;
renderFeed = function() {
  originalRenderFeed();
  
  // Attach Expansion Modal triggers to titles and media grids
  document.querySelectorAll(".feed-card").forEach(card => {
    const postId = card.id;
    
    // Clicking card titles expands post
    const titleEl = card.querySelector(".card-description h3");
    if (titleEl) {
      titleEl.setAttribute("onclick", `openPostExpansionModal('${postId}')`);
    }

    // Clicking card images expands post
    const mediaEl = card.querySelector(".card-media");
    if (mediaEl) {
      mediaEl.setAttribute("onclick", `openPostExpansionModal('${postId}')`);
    }
  });

  // Inject Infinite Scroll button at the bottom of feed list!
  const container = document.getElementById("feed-container");
  if (container && !document.getElementById("infinite-scroll-trigger-btn")) {
    const scrollBtnWrap = document.createElement("div");
    scrollBtnWrap.style.cssText = "text-align: center; padding: 15px 0 30px 0;";
    scrollBtnWrap.innerHTML = `
      <button class="btn btn-secondary" id="infinite-scroll-trigger-btn" style="box-shadow: var(--glow-shadow);">
        🔄 Load 100+ More Strategy Posts
      </button>
    `;
    container.appendChild(scrollBtnWrap);

    document.getElementById("infinite-scroll-trigger-btn").addEventListener("click", simulateInfiniteScrollPosts);
  }
};

// Simulate Infinite Scroll Posts: appends 5 randomly generated gaming articles!
const RANDOM_TITLES = [
  "VALORANT: Perfecting Crosshair Placement on Breeze A-site",
  "Review: Why 'Hades II' Redefines Rogue-like Progression Systems",
  "DevLog: Crafting Ambient Lighting in Cozy Forest Simulator",
  "Tip: Zero Input Latency Optimization for competitive OLED monitors",
  "Recruiting: Chill RPG Guild for upcoming MMO dungeon raids",
  "Elden Ring: Complete shield parry spacing guide",
  "Minimalist HUD design guidelines for unity projects"
];

const RANDOM_CONTENTS = [
  "Always keep crosshairs anchored at neck level. On breeze, the massive sight lines reward absolute precision and micro-scale movements. Zero recoil sprays work best here.",
  "The addition of Melinoe's hex arrays changes everything. High-tier magic runs feel heavy, tactile, and rewarding, while maintaining extremely snappy controls.",
  "We used subtle radial light filters on grass objects. By dynamically fading down HSL values as players approach trees, we mimic atmospheric cloud shading perfectly.",
  "Ensure G-sync is activated with V-sync forced in driver panel, combined with a frame lock 3fps below refresh. This achieves zero tearing with minimal input lag.",
  "Forming a friendly and calm team of dungeon crawlers. Requirements are simple: 18+, cozy attitude, and available Sunday evenings at 18:00 UTC. Join!",
  "Shield parrying requires you to analyze the enemy's elbow movement, not their weapon's tip. Trigger the swing right as the hand accelerates forward.",
  "Strip down indicators. A single health indicator, thin stamina bar, and clean ammo counts are all gamers need for complete tactical immersion."
];

const RANDOM_AUTHORS = ["VoltGamer", "CozyIndieDev", "OnyxRider", "AuraDesigner", "Puzzler_Pro", "CS_Marshal"];
const RANDOM_AVATARS = ["Storm", "Echo", "Alpha", "Drift", "Blaze", "Volt"];

function simulateInfiniteScrollPosts() {
  const loadBtn = document.getElementById("infinite-scroll-trigger-btn");
  if (loadBtn) {
    loadBtn.textContent = "🔄 Querying community database...";
    loadBtn.disabled = true;
  }

  showToast("Querying community gaming database...", "info");

  setTimeout(() => {
    // Generate 5 new random items
    for (let i = 0; i < 5; i++) {
      const idx = Math.floor(Math.random() * RANDOM_TITLES.length);
      const authIdx = Math.floor(Math.random() * RANDOM_AUTHORS.length);
      const isReview = idx === 1 || idx === 6;
      const isSquad = idx === 4;
      const cat = isReview ? "review" : isSquad ? "squad" : "tip";
      
      const newPost = {
        id: `post_rand_${Date.now()}_${i}`,
        title: RANDOM_TITLES[idx],
        category: cat,
        content: RANDOM_CONTENTS[idx],
        author: RANDOM_AUTHORS[authIdx],
        authorRole: authIdx === 1 || authIdx === 3 ? "dev" : "gamer",
        authorAvatar: RANDOM_AVATARS[authIdx],
        image: i % 2 === 0 ? "cozy-setup" : "", // random header image
        likes: Math.floor(Math.random() * 80) + 10,
        likedBy: [],
        views: Math.floor(Math.random() * 300) + 50,
        timestamp: "5 minutes ago",
        comments: []
      };

      appState.posts.push(newPost);
    }
    
    setStorage("gamin_posts", appState.posts);
    renderFeed();
    showToast("Successfully loaded 5 new strategy posts to feed!", "success");
    
    // Award +5 XP to Clerk User for active exploration
    if (appState.clerkUser) {
      appState.clerkUser.xp += 5;
      setStorage("gamin_clerk_user", appState.clerkUser);
      syncClerkAuthStateUI();
    }
  }, 1200);
}


// --- 3. FLOATING DM & FRIENDS & SQUADS CHAT HUB ---
// In-Memory state for Social System
let socialState = {
  friends: [
    { username: "PixelWarrior", avatar: "Aero", online: true, statusText: "Playing: CS2" },
    { username: "AuraGames", avatar: "AuraGames", online: true, statusText: "Dev: Coding strategy" },
    { username: "RetroStudio", avatar: "RetroStudio", online: true, statusText: "In Visual Studio" },
    { username: "TechGuild", avatar: "Alpha", online: false, statusText: "Offline" }
  ],
  dms: {
    "PixelWarrior": [
      { sender: "PixelWarrior", text: "Yo! Down for some strategy co-op matches later tonight?", time: "11:20 AM" },
      { sender: "me", text: "Def down! I've been optimizing my Unity control scheme, ready to test.", time: "11:22 AM" }
    ],
    "AuraGames": [
      { sender: "AuraGames", text: "Hey! Loved your recent strategy feedback. We will launch the Zero UI speedrun quest!", time: "09:40 AM" }
    ]
  },
  squads: {
    fps: [
      { user: "PixelWarrior", text: "CS2 tournament signups close in 2 hours. Who is in?", time: "12:05 PM" },
      { user: "RetroStudio", text: "I'll join as Dev-Consultant, let's optimize squad latency first.", time: "12:08 PM" }
    ],
    cozy: [
      { user: "AuraGames", text: "Just completed level designs for our cozy isometric puzzle game! Look at this screen visual.", time: "10:14 AM" }
    ],
    dev: [
      { user: "RetroStudio", text: "Consistent grid paddings at 8px increments solve scaling issues on high-DPI displays.", time: "08:30 AM" }
    ]
  },
  activeChatUser: null,
  activeSquadTab: "fps"
};

const GAMER_REPLIES = [
  "GG! That is a solid tactic, u absolute legend! Let's party up. 🎮",
  "Nice setup! I'm down for that. Let's conquer the Daily Quests in GAMIN.",
  "GLHF! Are you online tonight? Let's hop on the voice server.",
  "Spot on! Just added that controller tip to my strategy checklist. Thanks!",
  "Cozy games are life. Let's form a co-op strategy squad for next weekend! ⚔️☕",
  "Haha nice! What FPS rate are you getting on your OLED monitor?",
  "Awesome play. I'm actually coding a puzzle game clone right now, let's test it!"
];

function initSocialChatHub() {
  const toggleBar = document.getElementById("social-hub-toggle");
  if (toggleBar) {
    toggleBar.addEventListener("click", toggleSocialHubCollapse);
  }

  // Bind Tab Switchers
  document.querySelectorAll(".social-tab").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const tabName = e.target.dataset.tab;
      switchSocialTab(tabName);
    });
  });

  // Add Friend Button
  const addBtn = document.getElementById("add-friend-btn");
  if (addBtn) addBtn.addEventListener("click", addNewFriend);

  const addInput = document.getElementById("add-friend-name");
  if (addInput) {
    addInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") addNewFriend();
    });
  }

  // Chat Send Message
  const sendBtn = document.getElementById("active-chat-send-btn");
  if (sendBtn) sendBtn.addEventListener("click", sendDirectMessage);
  
  const chatInput = document.getElementById("active-chat-input-field");
  if (chatInput) {
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendDirectMessage();
    });
  }

  // Squad Message Sender
  const squadSendBtn = document.getElementById("squad-chat-send-btn");
  if (squadSendBtn) squadSendBtn.addEventListener("click", sendSquadMessage);
  
  const squadInput = document.getElementById("squad-chat-input-field");
  if (squadInput) {
    squadInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendSquadMessage();
    });
  }

  // Squad Channel Switchers
  document.querySelectorAll(".squad-channel-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".squad-channel-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      
      const channel = e.target.dataset.squad;
      socialState.activeSquadTab = channel;
      renderSquadChatRoom();
    });
  });

  // Load Initial Social Renderings
  renderFriendsList();
  renderDirectChatsList();
  renderSquadChatRoom();
  updateOnlineCountBadge();
}

function toggleSocialHubCollapse() {
  const hub = document.getElementById("social-chat-hub");
  if (!hub) return;
  hub.classList.toggle("collapsed");
}

function expandSocialHub() {
  const hub = document.getElementById("social-chat-hub");
  if (hub) hub.classList.remove("collapsed");
}

function switchSocialTab(tabName) {
  document.querySelectorAll(".social-tab").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".social-tab-content").forEach(c => c.classList.remove("active"));

  const targetTab = document.querySelector(`.social-tab[data-tab="${tabName}"]`);
  if (targetTab) targetTab.classList.add("active");

  const targetContent = document.getElementById(`social-tab-${tabName}`);
  if (targetContent) targetContent.classList.add("active");

  // If opening chats and there's an active room, focus input
  if (tabName === "chats" && socialState.activeChatUser) {
    document.getElementById("active-chat-input-field")?.focus();
  }
}

function updateOnlineCountBadge() {
  const badge = document.getElementById("social-online-count");
  if (!badge) return;

  const onlineCount = socialState.friends.filter(f => f.online).length;
  badge.textContent = `${onlineCount} Online`;
}

// Render Tab 1: Friends List
function renderFriendsList() {
  const container = document.getElementById("social-friends-list");
  if (!container) return;

  if (socialState.friends.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); text-align:center; font-size:0.75rem; padding: 20px 0;">No friends found. Add one below!</p>`;
    return;
  }

  container.innerHTML = socialState.friends.map(f => {
    const statusDot = f.online ? `<span class="pill-dot" style="background-color: var(--success); width:6px; height:6px; margin-right:4px;"></span>` : `<span class="pill-dot" style="background-color: var(--text-muted); width:6px; height:6px; margin-right:4px;"></span>`;
    
    return `
      <div class="friend-item-row">
        <div class="friend-card-left">
          <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=${f.avatar}" alt="${f.username}">
          <div class="friend-text-info">
            <span>${f.username}</span>
            <span style="display:flex; align-items:center;">${statusDot} ${f.statusText}</span>
          </div>
        </div>
        <button class="friend-chat-action-btn" onclick="openDirectChatRoom('${f.username}')">Chat</button>
      </div>
    `;
  }).join("");
}

// Add Friend dynamically
function addNewFriend() {
  const inputEl = document.getElementById("add-friend-name");
  if (!inputEl) return;
  const name = inputEl.value.trim();
  if (!name) return;

  if (socialState.friends.some(f => f.username.toLowerCase() === name.toLowerCase())) {
    showToast("That user is already in your friends list!", "warning");
    return;
  }

  const newFriend = {
    username: name,
    avatar: name,
    online: true,
    statusText: "Idle in lobby"
  };

  socialState.friends.push(newFriend);
  renderFriendsList();
  updateOnlineCountBadge();
  inputEl.value = "";
  
  showToast(`Added ${name} as a new online friend!`, "success");
}

// Tab 2: Direct Messages Rooms List
function renderDirectChatsList() {
  const container = document.getElementById("chat-rooms-list");
  if (!container) return;

  // Compile list of chats (anyone with DM history)
  const dmUsers = Object.keys(socialState.dms);
  
  container.innerHTML = dmUsers.map(username => {
    const friend = socialState.friends.find(f => f.username === username) || { avatar: username };
    const isActive = socialState.activeChatUser === username ? "active" : "";

    return `
      <button class="chat-room-tab-btn ${isActive}" onclick="openDirectChatRoom('${username}')">
        <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=${friend.avatar}" alt="${username}">
        <span>${username}</span>
      </button>
    `;
  }).join("");
}

window.openDirectChatRoom = function(username) {
  socialState.activeChatUser = username;
  
  // Ensure chat history array exists
  if (!socialState.dms[username]) {
    socialState.dms[username] = [];
  }

  // Switch to Chats Tab
  switchSocialTab("chats");
  renderDirectChatsList();
  renderActiveDMThread();
};

// Render DM Conversation bubbles
function renderActiveDMThread() {
  const placeholder = document.getElementById("chat-no-active-placeholder");
  const container = document.getElementById("chat-active-container");

  if (!socialState.activeChatUser) {
    if (placeholder) placeholder.style.display = "flex";
    if (container) container.style.display = "none";
    return;
  }

  if (placeholder) placeholder.style.display = "none";
  if (container) container.style.display = "flex";

  const username = socialState.activeChatUser;
  const friend = socialState.friends.find(f => f.username === username) || { online: true };

  document.getElementById("active-chat-username").textContent = username;
  
  const statusBadge = document.getElementById("active-chat-status");
  statusBadge.textContent = friend.online ? "online" : "offline";
  statusBadge.style.color = friend.online ? "var(--success)" : "var(--text-muted)";

  const messagesFeed = document.getElementById("active-chat-messages");
  if (messagesFeed) {
    const chatLogs = socialState.dms[username];
    if (chatLogs.length === 0) {
      messagesFeed.innerHTML = `<p style="color:var(--text-muted); font-size:0.72rem; text-align:center; margin-top:20px;">No messages. Send a message to start direct chat!</p>`;
    } else {
      messagesFeed.innerHTML = chatLogs.map(m => {
        const sideClass = m.sender === "me" ? "sent" : "received";
        return `
          <div class="chat-bubble ${sideClass}">
            <span>${m.text.replace(/\n/g, "<br>")}</span>
            <span class="chat-bubble-time">${m.time}</span>
          </div>
        `;
      }).join("");
    }

    // Scroll to bottom smoothly
    setTimeout(() => {
      messagesFeed.scrollTop = messagesFeed.scrollHeight;
    }, 50);
  }
}

// Send Direct Message
function sendDirectMessage() {
  const inputEl = document.getElementById("active-chat-input-field");
  if (!inputEl) return;
  const text = inputEl.value.trim();
  if (!text) return;

  if (!clerkAuthenticationGuard("send direct messages")) return;

  const username = socialState.activeChatUser;
  if (!username) return;

  // Append Sent Message
  const now = new Date();
  const timeText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  const sentMsg = { sender: "me", text: text, time: timeText };
  socialState.dms[username].push(sentMsg);
  
  inputEl.value = "";
  renderActiveDMThread();

  // Award +10 XP to Clerk User for active social networking!
  if (appState.clerkUser) {
    appState.clerkUser.xp += 10;
    setStorage("gamin_clerk_user", appState.clerkUser);
    syncClerkAuthStateUI();
  }

  // Trigger simulated typing reply
  const typingIndicator = document.getElementById("active-chat-typing");
  const messagesFeed = document.getElementById("active-chat-messages");

  if (typingIndicator) {
    typingIndicator.style.display = "flex";
    if (messagesFeed) messagesFeed.scrollTop = messagesFeed.scrollHeight;
  }

  setTimeout(() => {
    if (typingIndicator) typingIndicator.style.display = "none";

    // Random gamer response
    const replyIdx = Math.floor(Math.random() * GAMER_REPLIES.length);
    const receivedMsg = { sender: username, text: GAMER_REPLIES[replyIdx], time: timeText };
    
    socialState.dms[username].push(receivedMsg);
    renderActiveDMThread();

    showToast(`New message from ${username}`, "info");
  }, 1000);
}

// Hook used by Stories replies to automatically start DM
function forwardMessageToDM(username, msgText) {
  // Add user to DM rooms lists
  if (!socialState.dms[username]) {
    socialState.dms[username] = [];
  }

  const now = new Date();
  const timeText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const storyMsg = { sender: "me", text: msgText, time: timeText };
  socialState.dms[username].push(storyMsg);
}

// Tab 3: Squad Channels Group chat
function renderSquadChatRoom() {
  const container = document.getElementById("squad-chat-messages");
  if (!container) return;

  const activeChannel = socialState.activeSquadTab;
  const logs = socialState.squads[activeChannel] || [];

  container.innerHTML = logs.map(msg => {
    const isMe = msg.user === "me";
    const sideClass = isMe ? "self" : "";
    const nameLabel = isMe && appState.clerkUser ? appState.clerkUser.username : msg.user;
    const initialAvatar = nameLabel.charAt(0).toUpperCase();

    return `
      <div class="squad-chat-msg-row ${sideClass}">
        ${!isMe ? `<img class="squad-chat-msg-avatar" src="https://api.dicebear.com/7.x/pixel-art/svg?seed=${msg.user}" alt="${nameLabel}">` : ""}
        <div class="squad-chat-msg-content">
          <div class="squad-chat-msg-header">
            <span class="squad-chat-msg-user">${nameLabel}</span>
            <span class="squad-chat-msg-time">${msg.time}</span>
          </div>
          <p class="squad-chat-msg-text">${msg.text}</p>
        </div>
      </div>
    `;
  }).join("");

  setTimeout(() => {
    container.scrollTop = container.scrollHeight;
  }, 50);
}

function sendSquadMessage() {
  const inputEl = document.getElementById("squad-chat-input-field");
  if (!inputEl) return;
  const text = inputEl.value.trim();
  if (!text) return;

  if (!clerkAuthenticationGuard("post to squad rooms")) return;

  const now = new Date();
  const timeText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const activeChannel = socialState.activeSquadTab;

  const newMsg = {
    user: "me",
    text: text,
    time: timeText
  };

  socialState.squads[activeChannel].push(newMsg);
  inputEl.value = "";
  renderSquadChatRoom();
}

