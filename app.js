// ================= SHAWORKOUTS MAIN APPLICATION LOGIC =================

// 1. STATE MANAGEMENT
let userState = {
  completedSkills: [], // Array of skill IDs
  workoutLogs: {},     // { skillId: [ { date: "YYYY-MM-DD", sets: X, reps: Y } ] }
  streak: 0,
  lastActiveDate: ""
};

// Application navigation and active skill states
let activeView = "dashboard";
let activeSkillId = null;
let currentLevelRoadmap = 1;

// Explorer Filter States
let filters = {
  search: "",
  level: "all",
  status: "all",
  category: "all"
};

// Timer State Variables
let timerInterval = null;
// 'stopwatch' or 'countdown'
let timerMode = "stopwatch"; 
let timerDuration = 30;      // default countdown duration in seconds
let timerSecondsElapsed = 0;
let timerIsRunning = false;

// 2. LOCAL STORAGE INTEGRATION
function loadState() {
  let saved = localStorage.getItem("shaworkouts_state");
  if (!saved) {
    // Migrate data from previous name if available
    saved = localStorage.getItem("aerosthenics_state");
  }
  if (saved) {
    try {
      userState = JSON.parse(saved);
      // Ensure nested fields exist
      if (!userState.completedSkills) userState.completedSkills = [];
      if (!userState.workoutLogs) userState.workoutLogs = {};
      if (userState.streak === undefined) userState.streak = 0;
      if (!userState.lastActiveDate) userState.lastActiveDate = "";
    } catch (e) {
      console.error("Error parsing local storage state, resetting.", e);
      resetState();
    }
  } else {
    // Default initial state
    resetState();
  }
  
  updateStreak();
  saveState();
}

function saveState() {
  localStorage.setItem("shaworkouts_state", JSON.stringify(userState));
}

function resetState() {
  userState = {
    completedSkills: [],
    workoutLogs: {},
    streak: 0,
    lastActiveDate: getTodayString()
  };
  saveState();
  initApp();
}

// 3. DATE HELPERS
function getTodayString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getYesterdayString() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function updateStreak() {
  const today = getTodayString();
  const yesterday = getYesterdayString();
  
  if (userState.lastActiveDate === "") {
    userState.streak = 1;
    userState.lastActiveDate = today;
  } else if (userState.lastActiveDate === yesterday) {
    // Active on consecutive day
    userState.streak += 1;
    userState.lastActiveDate = today;
  } else if (userState.lastActiveDate !== today) {
    // Day skipped
    userState.streak = 1;
    userState.lastActiveDate = today;
  }
  // If lastActiveDate is today, streak remains same
}

// 4. APP INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  initApp();
  setupEventListeners();
});

function initApp() {
  // Update header badges
  document.getElementById("header-streak-count").textContent = userState.streak;
  
  const currentRank = calculateUserRank(userState.completedSkills.length);
  document.getElementById("header-user-level").textContent = currentRank.levelLabel;
  
  // Render views depending on state
  renderDashboard();
  renderRoadmap();
  renderExplorer();
}

// 5. VIEW CONTROL & EVENT LISTENERS
function setupEventListeners() {
  // Navigation sidebar item clicks
  document.querySelectorAll(".nav-item").forEach(button => {
    button.addEventListener("click", (e) => {
      // Toggle nav buttons
      document.querySelectorAll(".nav-item").forEach(btn => btn.classList.remove("active"));
      
      const btn = e.currentTarget;
      btn.classList.add("active");
      
      const target = btn.dataset.target;
      activeView = target;
      
      // Update Title Header
      const pageTitle = document.getElementById("page-title");
      const pageSubtitle = document.getElementById("page-subtitle");
      
      // Toggle Views visibility
      document.querySelectorAll(".view-section").forEach(view => view.classList.remove("active"));
      
      if (target === "dashboard") {
        document.getElementById("view-dashboard").classList.add("active");
        pageTitle.textContent = "Dashboard";
        pageSubtitle.textContent = "Track, train, and master bodyweight strength progression.";
        renderDashboard();
      } else if (target === "roadmap") {
        document.getElementById("view-roadmap").classList.add("active");
        pageTitle.textContent = "Skill Roadmap";
        pageSubtitle.textContent = "Visual path mapping from absolute beginner foundation to competition athlete.";
        renderRoadmap();
      } else if (target === "explorer") {
        document.getElementById("view-explorer").classList.add("active");
        pageTitle.textContent = "Skill Explorer";
        pageSubtitle.textContent = "Search, filter, and study exercise requirements, cues, and form guides.";
        renderExplorer();
      }
    });
  });

  // Reset Progress Button click
  document.getElementById("btn-reset-data").addEventListener("click", () => {
    if (confirm("Are you sure you want to reset all of your progress, streaks, and training logs? This cannot be undone.")) {
      resetState();
    }
  });

  // Explorer - Search Input
  const searchInput = document.getElementById("search-input");
  const searchClear = document.getElementById("search-clear-btn");
  
  searchInput.addEventListener("input", (e) => {
    filters.search = e.target.value.toLowerCase().trim();
    searchClear.style.display = filters.search.length > 0 ? "block" : "none";
    renderExplorer();
  });
  
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    filters.search = "";
    searchClear.style.display = "none";
    renderExplorer();
  });

  // Explorer - Select Dropdowns
  document.getElementById("filter-level").addEventListener("change", (e) => {
    filters.level = e.target.value;
    renderExplorer();
  });

  document.getElementById("filter-status").addEventListener("change", (e) => {
    filters.status = e.target.value;
    renderExplorer();
  });

  // Explorer - Category Pills
  document.querySelectorAll(".category-pill").forEach(pill => {
    pill.addEventListener("click", (e) => {
      document.querySelectorAll(".category-pill").forEach(p => p.classList.remove("active"));
      e.currentTarget.classList.add("active");
      
      filters.category = e.currentTarget.dataset.category;
      renderExplorer();
    });
  });

  // Roadmap - Level Filters
  document.querySelectorAll("#roadmap-level-filters .level-pill").forEach(pill => {
    pill.addEventListener("click", (e) => {
      document.querySelectorAll("#roadmap-level-filters .level-pill").forEach(p => p.classList.remove("active"));
      e.currentTarget.classList.add("active");
      
      currentLevelRoadmap = parseInt(e.currentTarget.dataset.level);
      renderRoadmap();
    });
  });

  // Detail Drawer Controls
  const drawerBackdrop = document.getElementById("detail-drawer-backdrop");
  const btnCloseDrawer = document.getElementById("btn-close-drawer");
  
  btnCloseDrawer.addEventListener("click", closeDrawer);
  drawerBackdrop.addEventListener("click", closeDrawer);

  // Drawer Tabs switching
  document.querySelectorAll(".drawer-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
      document.querySelectorAll(".drawer-tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
      
      e.currentTarget.classList.add("active");
      const targetPane = e.currentTarget.dataset.tab;
      document.getElementById(targetPane).classList.add("active");
      
      // Stop timer if switching tabs
      if (targetPane === "tab-overview") {
        stopTimer();
      }
    });
  });

  // Drawer status toggle button (Mastery status)
  document.getElementById("btn-drawer-status-toggle").addEventListener("click", () => {
    if (!activeSkillId) return;
    toggleSkillMastery(activeSkillId);
  });

  // Timer controls
  document.getElementById("btn-mode-stopwatch").addEventListener("click", (e) => {
    setTimerMode("stopwatch");
  });
  document.getElementById("btn-mode-countdown").addEventListener("click", (e) => {
    setTimerMode("countdown");
  });

  document.getElementById("btn-timer-start-pause").addEventListener("click", () => {
    if (timerIsRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  });

  document.getElementById("btn-timer-reset").addEventListener("click", () => {
    resetTimer();
  });

  // Countdown preset pills
  document.querySelectorAll(".preset-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const sec = parseInt(e.currentTarget.dataset.time);
      timerDuration = sec;
      resetTimer();
    });
  });

  // Log session form handler
  document.getElementById("btn-log-session").addEventListener("click", () => {
    if (!activeSkillId) return;
    const sets = parseInt(document.getElementById("log-sets").value);
    const reps = parseInt(document.getElementById("log-reps").value);
    
    if (isNaN(sets) || sets < 1) {
      alert("Please enter a valid number of sets (at least 1)");
      return;
    }
    if (isNaN(reps) || reps < 0) {
      alert("Please enter a valid number of repetitions/seconds");
      return;
    }
    
    logPracticeSession(activeSkillId, sets, reps);
  });
}

// 6. GENERAL UTILITIES / RANK CALCULATOR
const USER_RANKS = [
  { limit: 0.10, title: "Novice", levelLabel: "Foundation (L1)", bgClass: "cyan" },
  { limit: 0.25, title: "Initiate", levelLabel: "Beginner (L2)", bgClass: "cyan" },
  { limit: 0.45, title: "Practitioner", levelLabel: "Intermediate (L3)", bgClass: "purple" },
  { limit: 0.65, title: "Master", levelLabel: "Advanced (L4)", bgClass: "purple" },
  { limit: 0.85, title: "Elite Athlete", levelLabel: "Expert (L5)", bgClass: "green" },
  { limit: 1.00, title: "Legend", levelLabel: "World Class (L6/L7)", bgClass: "green" }
];

function calculateUserRank(masteredCount) {
  const pct = CALISTHENICS_DB.length > 0 ? masteredCount / CALISTHENICS_DB.length : 0;
  let selectedRank = USER_RANKS[0];
  
  for (let rank of USER_RANKS) {
    if (pct <= rank.limit) {
      selectedRank = rank;
      break;
    }
  }
  // Fallback for complete 100%
  if (pct >= 1.0) {
    selectedRank = USER_RANKS[USER_RANKS.length - 1];
  }
  return selectedRank;
}

function getSkillStatus(skillId) {
  if (userState.completedSkills.includes(skillId)) {
    return "mastered";
  }
  if (userState.workoutLogs[skillId] && userState.workoutLogs[skillId].length > 0) {
    return "in_progress";
  }
  return "locked";
}

// 7. VIEW: DASHBOARD RENDERER
function renderDashboard() {
  const total = CALISTHENICS_DB.length;
  const mastered = userState.completedSkills.length;
  const pct = total > 0 ? Math.round((mastered / total) * 100) : 0;
  
  document.getElementById("dashboard-progress-pct").textContent = `${pct}%`;
  document.getElementById("dashboard-progress-count").textContent = `${mastered} / ${total} Skills`;
  document.getElementById("dashboard-progress-bar").style.width = `${pct}%`;
  
  const rank = calculateUserRank(mastered);
  document.getElementById("dashboard-user-rank").textContent = rank.title;
  document.getElementById("dashboard-rank-subtext").textContent = rank.levelLabel;
  document.getElementById("header-user-level").textContent = rank.levelLabel;
  
  const remaining = total - mastered;
  document.getElementById("dashboard-remaining-count").textContent = `${remaining} Locked`;

  // Render Category Breakdown
  renderCategoryBreakdown();

  // Render Recommendation Engine
  renderRecommendations();
}

function renderCategoryBreakdown() {
  const categories = [
    { name: "Push", class: "push" },
    { name: "Pull", class: "pull" },
    { name: "Core", class: "core" },
    { name: "Legs", class: "legs" },
    { name: "Balance", class: "balance" },
    { name: "Static Holds", class: "static_holds" },
    { name: "Dynamic", class: "dynamic" },
    { name: "Ring", class: "ring" },
    { name: "Mobility", class: "mobility" },
    { name: "Freestyle", class: "freestyle" }
  ];

  const container = document.getElementById("category-progress-list");
  container.innerHTML = "";

  categories.forEach(cat => {
    const skillsInCat = CALISTHENICS_DB.filter(s => s.category.toLowerCase() === cat.name.toLowerCase() || (cat.name === "Ring" && s.category === "Ring Skills"));
    const totalCount = skillsInCat.length;
    if (totalCount === 0) return; // skip if empty
    
    const masteredCount = skillsInCat.filter(s => userState.completedSkills.includes(s.id)).length;
    const pct = Math.round((masteredCount / totalCount) * 100);

    const item = document.createElement("div");
    item.className = "category-stat-item";
    item.innerHTML = `
      <div class="cat-stat-meta">
        <span class="cat-name">${cat.name}</span>
        <span class="cat-count">${masteredCount} / ${totalCount} (${pct}%)</span>
      </div>
      <div class="cat-progress-container">
        <div class="cat-progress-fill ${cat.class}" style="width: ${pct}%"></div>
      </div>
    `;
    container.appendChild(item);
  });
}

function renderRecommendations() {
  const container = document.getElementById("recommendations-list");
  container.innerHTML = "";

  // Dynamic recommendations: Locked skills where prerequisites are fully completed.
  const lockedSkills = CALISTHENICS_DB.filter(s => !userState.completedSkills.includes(s.id));
  
  const executableRecommendations = lockedSkills.filter(skill => {
    if (skill.prerequisites.length === 0) return true;
    // Check if ALL prerequisites are mastered
    return skill.prerequisites.every(prereqId => userState.completedSkills.includes(prereqId));
  });

  // Sort recommendations by Level (ascending), then limit to top 3
  executableRecommendations.sort((a, b) => a.level - b.level);
  const topRecommendations = executableRecommendations.slice(0, 3);

  if (topRecommendations.length === 0) {
    container.innerHTML = `
      <div class="history-empty text-center" style="padding: 20px;">
        <i class="fa-solid fa-circle-check" style="font-size: 28px; color: var(--green); margin-bottom: 10px; display: block;"></i>
        All skills unlocked and mastered! You are a world class Calisthenics master.
      </div>
    `;
    return;
  }

  topRecommendations.forEach(skill => {
    const card = document.createElement("div");
    card.className = `skill-card ${getCategoryClass(skill.category)}`;
    card.style.height = "auto";
    card.style.marginBottom = "0";
    
    card.innerHTML = `
      <div class="card-top">
        <div class="card-tags">
          <span class="badge badge-lvl">Level ${skill.level}</span>
          <span class="badge badge-cat">${skill.category}</span>
        </div>
      </div>
      <div class="card-body" style="margin-top: 10px;">
        <h3 style="font-size: 15px;">${skill.name}</h3>
        <p style="-webkit-line-clamp: 1;">${skill.description}</p>
      </div>
      <div class="card-footer" style="margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--border-glass)">
        <span class="muscle-focus-text">${skill.muscleFocus.slice(0, 2).join(", ")}</span>
        <button class="btn-info-circle" style="width: 28px; height: 28px;"><i class="fa-solid fa-arrow-right"></i></button>
      </div>
    `;
    
    card.addEventListener("click", () => {
      openDrawer(skill.id);
    });
    container.appendChild(card);
  });
}

function getCategoryClass(category) {
  const cat = category.toLowerCase();
  if (cat.includes("push")) return "push";
  if (cat.includes("pull")) return "pull";
  if (cat.includes("core")) return "core";
  if (cat.includes("legs")) return "legs";
  if (cat.includes("balance")) return "balance";
  if (cat.includes("static")) return "static_holds";
  if (cat.includes("dynamic")) return "dynamic";
  if (cat.includes("ring")) return "ring";
  if (cat.includes("mobility")) return "mobility";
  return "freestyle";
}

// 8. VIEW: ROADMAP RENDERER (ORGANIZED GRID BY CATEGORIES)
function renderRoadmap() {
  const container = document.getElementById("roadmap-swimlanes");
  container.innerHTML = "";

  const levelSkills = CALISTHENICS_DB.filter(s => s.level === currentLevelRoadmap);
  
  if (levelSkills.length === 0) {
    container.innerHTML = `<div class="history-empty">No skills registered for Level ${currentLevelRoadmap}</div>`;
    return;
  }

  // Group skills by category in this level
  const lanes = {};
  levelSkills.forEach(skill => {
    if (!lanes[skill.category]) {
      lanes[skill.category] = [];
    }
    lanes[skill.category].push(skill);
  });

  // Render each category lane
  Object.keys(lanes).forEach(category => {
    const lane = document.createElement("div");
    lane.className = "category-lane";

    const laneTitleWrapper = document.createElement("div");
    laneTitleWrapper.className = "lane-title-wrapper";
    laneTitleWrapper.innerHTML = `
      <span class="lane-dot" style="background-color: var(--${getCategoryColorVar(category)})"></span>
      <span class="lane-title">${category}</span>
    `;

    const nodesRow = document.createElement("div");
    nodesRow.className = "nodes-row";

    lanes[category].forEach(skill => {
      const status = getSkillStatus(skill.id);
      const node = document.createElement("div");
      
      let stateClass = "locked";
      if (status === "mastered") stateClass = "mastered";
      else if (status === "in_progress") stateClass = "active-state";

      node.className = `node-card ${stateClass}`;
      node.innerHTML = `
        <span class="node-title" title="${skill.name}">${skill.name}</span>
        <div class="node-status-indicator"></div>
      `;

      node.addEventListener("click", () => {
        openDrawer(skill.id);
      });
      nodesRow.appendChild(node);
    });

    lane.appendChild(laneTitleWrapper);
    lane.appendChild(nodesRow);
    container.appendChild(lane);
  });
}

function getCategoryColorVar(category) {
  const cat = category.toLowerCase();
  if (cat.includes("push")) return "cyan";
  if (cat.includes("pull")) return "green";
  if (cat.includes("core")) return "purple";
  if (cat.includes("legs")) return "orange";
  if (cat.includes("balance")) return "yellow";
  if (cat.includes("static")) return "red";
  if (cat.includes("dynamic")) return "cyan";
  if (cat.includes("ring")) return "orange";
  if (cat.includes("mobility")) return "cyan";
  return "purple";
}

// 9. VIEW: EXPLORER RENDERER (GRID W/ FILTERS)
function renderExplorer() {
  const grid = document.getElementById("explorer-skills-grid");
  grid.innerHTML = "";

  // Perform filtration
  const filtered = CALISTHENICS_DB.filter(skill => {
    // 1. Search Query
    if (filters.search !== "") {
      const nameMatch = skill.name.toLowerCase().includes(filters.search);
      const descMatch = skill.description.toLowerCase().includes(filters.search);
      const muscleMatch = skill.muscleFocus.some(m => m.toLowerCase().includes(filters.search));
      if (!nameMatch && !descMatch && !muscleMatch) return false;
    }
    
    // 2. Level Filter
    if (filters.level !== "all") {
      if (skill.level !== parseInt(filters.level)) return false;
    }

    // 3. Category Filter
    if (filters.category !== "all") {
      const matchCat = (filters.category === "Ring") ? "Ring Skills" : filters.category;
      if (skill.category !== matchCat) return false;
    }

    // 4. Status Filter
    if (filters.status !== "all") {
      const status = getSkillStatus(skill.id);
      if (filters.status === "mastered" && status !== "mastered") return false;
      if (filters.status === "in_progress" && status !== "in_progress") return false;
      if (filters.status === "locked" && status !== "locked") return false;
    }

    return true;
  });

  // Update counts
  document.getElementById("results-count").textContent = `Showing ${filtered.length} exercises`;
  
  // Show active filters badge if custom state
  const isFilterActive = (filters.search !== "" || filters.level !== "all" || filters.status !== "all" || filters.category !== "all");
  document.getElementById("results-filter-badge").style.display = isFilterActive ? "inline-block" : "none";

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="history-empty text-center" style="grid-column: 1/-1; padding: 40px;">
        <i class="fa-solid fa-search" style="font-size: 32px; color: var(--text-muted); margin-bottom: 12px; display: block;"></i>
        No matching exercises found. Try widening your filters.
      </div>
    `;
    return;
  }

  // Populate cards
  filtered.forEach(skill => {
    const isMastered = userState.completedSkills.includes(skill.id);
    const card = document.createElement("div");
    
    card.className = `skill-card ${getCategoryClass(skill.category)} ${isMastered ? 'mastered' : ''}`;
    card.innerHTML = `
      <div class="card-top">
        <div class="card-tags">
          <span class="badge badge-lvl">Level ${skill.level}</span>
          <span class="badge badge-cat">${skill.category}</span>
        </div>
        <button class="btn-card-complete" title="Mark as Mastered">
          <i class="${isMastered ? 'fa-solid' : 'fa-regular'} fa-circle-check"></i>
        </button>
      </div>
      <div class="card-body">
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>
      </div>
      <div class="card-footer">
        <span class="muscle-focus-text" title="${skill.muscleFocus.join(', ')}">
          ${skill.muscleFocus.slice(0, 3).join(', ')}
        </span>
        <button class="btn-info-circle" title="View details & guide">
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    `;

    // Complete button click (checkbox)
    card.querySelector(".btn-card-complete").addEventListener("click", (e) => {
      e.stopPropagation(); // prevent opening drawer
      toggleSkillMastery(skill.id);
    });

    // Main card click (opens detail drawer)
    card.addEventListener("click", () => {
      openDrawer(skill.id);
    });

    grid.appendChild(card);
  });
}

// 10. DETAIL DRAWER CONTROLLER
function openDrawer(skillId) {
  const skill = CALISTHENICS_DB.find(s => s.id === skillId);
  if (!skill) return;

  activeSkillId = skillId;
  
  // Populate labels
  document.getElementById("drawer-lbl-level").textContent = `Level ${skill.level}`;
  document.getElementById("drawer-lbl-category").textContent = skill.category;
  document.getElementById("drawer-skill-name").textContent = skill.name;
  document.getElementById("drawer-skill-subcat").textContent = skill.subCategory || skill.category;
  document.getElementById("drawer-description").textContent = skill.description;

  // Set Targets Goal Label
  const targetLabelVal = skill.target.hold !== "" ? skill.target.hold : skill.target.reps;
  document.getElementById("drawer-target-val").textContent = targetLabelVal;
  
  // Adjust logger label
  document.getElementById("lbl-log-reps").textContent = (skill.target.hold !== "") ? "Hold (Sec)" : "Reps";

  // Render muscle tags
  const muscleContainer = document.getElementById("drawer-muscle-tags");
  muscleContainer.innerHTML = "";
  skill.muscleFocus.forEach(muscle => {
    const tag = document.createElement("span");
    tag.className = "muscle-tag";
    tag.textContent = muscle;
    muscleContainer.appendChild(tag);
  });

  // Render steps
  const stepsContainer = document.getElementById("drawer-steps-list");
  stepsContainer.innerHTML = "";
  skill.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsContainer.appendChild(li);
  });

  // Render tips
  const tipsContainer = document.getElementById("drawer-tips-list");
  tipsContainer.innerHTML = "";
  skill.tips.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipsContainer.appendChild(li);
  });

  // Render Prerequisites Section
  const prereqSection = document.getElementById("drawer-prereqs-section");
  const prereqList = document.getElementById("drawer-prereqs-list");
  const prereqWarning = document.getElementById("drawer-prereq-warning");
  
  prereqWarning.style.display = "none";

  if (skill.prerequisites.length === 0) {
    prereqSection.style.display = "none";
  } else {
    prereqSection.style.display = "block";
    prereqList.innerHTML = "";
    
    let hasUnmetPrereq = false;
    
    skill.prerequisites.forEach(prereqId => {
      // Find full prerequisite object
      const prereqSkill = CALISTHENICS_DB.find(s => s.id === prereqId);
      const isMastered = userState.completedSkills.includes(prereqId);
      
      const item = document.createElement("div");
      item.className = "prereq-item";
      
      if (!isMastered) {
        hasUnmetPrereq = true;
      }
      
      const prereqName = prereqSkill ? prereqSkill.name : prereqId.replace(/_/g, ' ');
      item.innerHTML = `
        <span class="prereq-name">${prereqName}</span>
        <span class="prereq-status-badge ${isMastered ? 'mastered' : 'missing'}">
          ${isMastered ? 'Mastered' : 'Locked'}
        </span>
      `;
      
      // Navigate to prerequisite on click!
      item.addEventListener("click", () => {
        if (prereqSkill) {
          openDrawer(prereqSkill.id);
        }
      });
      prereqList.appendChild(item);
    });

    if (hasUnmetPrereq) {
      prereqWarning.style.display = "flex";
    }
  }

  // Update master toggle button
  updateDrawerMasteryButton(skillId);

  // Render Practice logs history
  renderDrawerHistory(skillId);

  // Reset Timers
  resetTimer();

  // Reset tab active state to overview
  document.querySelectorAll(".drawer-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
  document.querySelector('.drawer-tab[data-tab="tab-overview"]').classList.add("active");
  document.getElementById("tab-overview").classList.add("active");

  // Slide Drawer In
  document.getElementById("detail-drawer").classList.add("active");
  document.getElementById("detail-drawer-backdrop").classList.add("active");
}

function closeDrawer() {
  stopTimer();
  document.getElementById("detail-drawer").classList.remove("active");
  document.getElementById("detail-drawer-backdrop").classList.remove("active");
  activeSkillId = null;
}

function updateDrawerMasteryButton(skillId) {
  const isMastered = userState.completedSkills.includes(skillId);
  const btn = document.getElementById("btn-drawer-status-toggle");
  const text = document.getElementById("btn-drawer-status-text");
  
  if (isMastered) {
    btn.className = "btn btn-success btn-block";
    text.textContent = "Mastered (Click to Remove)";
  } else {
    btn.className = "btn btn-secondary btn-block";
    text.textContent = "Mark as Mastered";
  }
}

function toggleSkillMastery(skillId) {
  const index = userState.completedSkills.indexOf(skillId);
  if (index > -1) {
    // Remove mastery
    userState.completedSkills.splice(index, 1);
  } else {
    // Add mastery
    userState.completedSkills.push(skillId);
  }
  
  saveState();
  
  // Refresh views
  updateDrawerMasteryButton(skillId);
  initApp();
}

// 11. ACTIVE PRACTICE LOG ENGINE
function logPracticeSession(skillId, sets, reps) {
  if (!userState.workoutLogs[skillId]) {
    userState.workoutLogs[skillId] = [];
  }
  
  userState.workoutLogs[skillId].unshift({
    date: getTodayString(),
    sets: sets,
    reps: reps
  });
  
  saveState();
  
  // Refresh stats & logs history in drawer
  renderDrawerHistory(skillId);
  initApp();
  
  alert("Session logged successfully!");
}

function renderDrawerHistory(skillId) {
  const historyList = document.getElementById("drawer-session-history");
  historyList.innerHTML = "";
  
  const logs = userState.workoutLogs[skillId] || [];
  
  if (logs.length === 0) {
    historyList.innerHTML = `<li class="history-empty">No logged practices yet</li>`;
    return;
  }
  
  logs.forEach(log => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="log-date">${log.date}</span>
      <span class="log-value">${log.sets} sets × ${log.reps} reps/secs</span>
    `;
    historyList.appendChild(li);
  });
}

// 12. CIRCULAR TRAINING TIMER CONTROLS
function setTimerMode(mode) {
  timerMode = mode;
  document.querySelectorAll(".timer-mode-btn").forEach(btn => btn.classList.remove("active"));
  
  if (mode === "stopwatch") {
    document.getElementById("btn-mode-stopwatch").classList.add("active");
    document.getElementById("countdown-presets-row").style.display = "none";
  } else {
    document.getElementById("btn-mode-countdown").classList.add("active");
    document.getElementById("countdown-presets-row").style.display = "flex";
  }
  
  resetTimer();
}

function startTimer() {
  if (timerIsRunning) return;
  
  timerIsRunning = true;
  document.getElementById("btn-timer-start-pause").innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
  document.getElementById("timer-status-text").textContent = "Training";
  
  timerInterval = setInterval(() => {
    if (timerMode === "stopwatch") {
      timerSecondsElapsed++;
      updateTimerDisplay();
    } else {
      // Countdown mode
      if (timerSecondsElapsed > 0) {
        timerSecondsElapsed--;
        updateTimerDisplay();
      } else {
        // Timer reached 0
        triggerTimerEnd();
      }
    }
  }, 1000);
}

function pauseTimer() {
  if (!timerIsRunning) return;
  stopTimer();
  document.getElementById("timer-status-text").textContent = "Paused";
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerIsRunning = false;
  document.getElementById("btn-timer-start-pause").innerHTML = '<i class="fa-solid fa-play"></i> Start';
}

function resetTimer() {
  stopTimer();
  
  if (timerMode === "stopwatch") {
    timerSecondsElapsed = 0;
  } else {
    timerSecondsElapsed = timerDuration;
  }
  
  document.getElementById("timer-status-text").textContent = "Ready";
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerSecondsElapsed / 60);
  const seconds = timerSecondsElapsed % 60;
  
  document.getElementById("timer-time-display").textContent = 
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
  // Circular Ring Dash offset rendering
  const ring = document.getElementById("timer-ring-bar");
  const maxDashOffset = 552.9; // circumference = 2 * PI * radius (88)
  
  let pct = 0;
  if (timerMode === "stopwatch") {
    // In stopwatch mode, ring fills up dynamically with minutes (maxes out at 60s for visual aesthetic)
    pct = (timerSecondsElapsed % 60) / 60;
  } else {
    // In countdown mode, ring shrinks as time runs out
    pct = timerDuration > 0 ? timerSecondsElapsed / timerDuration : 0;
  }
  
  const offset = maxDashOffset * (1 - pct);
  ring.style.strokeDashoffset = offset;
}

function triggerTimerEnd() {
  stopTimer();
  document.getElementById("timer-status-text").textContent = "Done!";
  
  const soundEnabled = document.getElementById("timer-sound-toggle").checked;
  if (soundEnabled) {
    const chime = document.getElementById("timer-chime");
    if (chime) {
      chime.play().catch(err => console.log("Audio play blocked by browser sandbox policy.", err));
    }
  }
  
  // Flash effect on timer ring
  const progressRing = document.getElementById("timer-ring-bar");
  progressRing.style.stroke = "var(--green)";
  setTimeout(() => {
    progressRing.style.stroke = "var(--cyan)";
  }, 1500);
}
