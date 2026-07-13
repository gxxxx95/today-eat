const STORAGE_KEY = "todayEatMvpStateV1";

const defaultOptions = [
  { id: "malatang", name: "麻辣烫", emoji: "🌶️", active: true },
  { id: "rice", name: "盖浇饭", emoji: "🍛", active: true },
  { id: "noodles", name: "面条", emoji: "🍜", active: true },
  { id: "burger", name: "汉堡炸鸡", emoji: "🍔", active: true },
  { id: "dumpling", name: "饺子馄饨", emoji: "🥟", active: true },
  { id: "bbq", name: "烧烤", emoji: "🍢", active: true },
  { id: "salad", name: "轻食沙拉", emoji: "🥗", active: true },
  { id: "hotpot", name: "火锅", emoji: "🍲", active: true },
  { id: "pizza", name: "披萨", emoji: "🍕", active: false },
  { id: "sushi", name: "寿司", emoji: "🍣", active: false },
  { id: "cantonese", name: "粤式小炒", emoji: "🥘", active: false },
  { id: "dessert", name: "甜品饮料", emoji: "🧋", active: false }
];

const defaultFridge = {
  "鸡蛋": 4,
  "西红柿": 3,
  "土豆": 2,
  "青椒": 2,
  "鸡胸肉": 1
};

const ingredientCatalog = ["鸡蛋", "西红柿", "土豆", "青椒", "鸡胸肉", "豆腐", "茄子", "西兰花", "牛肉", "虾仁", "蘑菇", "面条"];

const recipeData = [
  { name: "番茄炒蛋", emoji: "🍅", ingredients: ["西红柿", "鸡蛋"], method: "炒", time: 12, level: "零难度", steps: ["鸡蛋加一点盐打散，热锅下油炒至刚凝固后盛出。", "番茄切块下锅炒软，加少量糖和盐调味。", "倒回鸡蛋，大火翻匀 30 秒即可出锅。"] },
  { name: "青椒土豆丝", emoji: "🥔", ingredients: ["土豆", "青椒"], method: "炒", time: 15, level: "快手", steps: ["土豆切丝后用清水洗去表面淀粉。", "热锅下油，蒜末爆香后放入土豆丝。", "加入青椒丝、盐和少许醋，大火翻炒至断生。"] },
  { name: "香煎鸡胸肉", emoji: "🍗", ingredients: ["鸡胸肉"], method: "炒", time: 15, level: "高蛋白", steps: ["鸡胸肉片薄，用盐、黑胡椒和少许生抽腌 5 分钟。", "锅中刷薄油，中火两面各煎约 3 分钟。", "关火焖 1 分钟，切块装盘。"] },
  { name: "番茄鸡蛋面", emoji: "🍜", ingredients: ["西红柿", "鸡蛋", "面条"], method: "煮", time: 15, level: "一锅出", steps: ["先炒香番茄，加入清水煮开。", "放入面条煮至喜欢的软硬度。", "淋入蛋液，加入盐、生抽和葱花。"] },
  { name: "家常麻婆豆腐", emoji: "🌶️", ingredients: ["豆腐", "牛肉"], method: "炒", time: 25, level: "下饭", steps: ["豆腐切块后在淡盐水中焯 1 分钟。", "肉末炒散，加入豆瓣酱和蒜末炒出红油。", "加水和豆腐焖煮，最后用水淀粉收汁。"] },
  { name: "蒜蓉西兰花", emoji: "🥦", ingredients: ["西兰花"], method: "炒", time: 10, level: "清爽", steps: ["西兰花切小朵，盐水浸泡后焯至翠绿。", "蒜末小火炒香，放入西兰花。", "加盐和少许蚝油，快速翻匀。"] },
  { name: "肉末蒸蛋", emoji: "🥚", ingredients: ["鸡蛋", "牛肉"], method: "蒸", time: 25, level: "嫩滑", steps: ["鸡蛋与温水按 1:1.5 混合并过筛。", "盖盘子后蒸约 10 分钟。", "铺上炒香的肉末，再蒸 3 分钟。"] },
  { name: "蒜蓉蒸虾", emoji: "🦐", ingredients: ["虾仁"], method: "蒸", time: 15, level: "鲜香", steps: ["虾处理干净，摆入盘中。", "蒜末用热油激香，加生抽调成蒜蓉汁。", "铺在虾上，水开后蒸 6 分钟。"] },
  { name: "土豆炖牛肉", emoji: "🥘", ingredients: ["土豆", "牛肉"], method: "煮", time: 60, level: "暖胃", steps: ["牛肉冷水下锅焯净血沫。", "炒香葱姜和香料，放入牛肉与生抽翻匀。", "加热水炖 40 分钟，放土豆再炖至软烂。"] },
  { name: "烤时蔬鸡胸", emoji: "🥦", ingredients: ["鸡胸肉", "土豆", "西兰花"], method: "烤", time: 35, level: "低脂", steps: ["所有食材切成相近大小。", "加橄榄油、盐、黑胡椒拌匀。", "烤箱 200℃ 烤约 25 分钟，中途翻面。"] },
  { name: "油焖茄子", emoji: "🍆", ingredients: ["茄子", "青椒"], method: "炒", time: 20, level: "下饭", steps: ["茄子切条，撒盐静置后挤去水分。", "少量油将茄子煎软，加入蒜末。", "用生抽、糖和少许水焖至入味，加入青椒。"] },
  { name: "蘑菇豆腐汤", emoji: "🍲", ingredients: ["蘑菇", "豆腐"], method: "煮", time: 20, level: "清淡", steps: ["蘑菇切片炒出香味。", "加热水和豆腐煮 8 分钟。", "用盐、白胡椒调味，撒葱花。"] }
];

const restaurantNames = {
  "麻辣烫": ["张亮麻辣烫", "杨国福麻辣烫", "街角麻辣拌"],
  "盖浇饭": ["米村拌饭", "小碗菜馆", "灶台现炒盖饭"],
  "面条": ["遇见小面", "老街牛肉面", "手工面小馆"],
  "汉堡炸鸡": ["塔斯汀中国汉堡", "华莱士", "脆皮炸鸡社"],
  "饺子馄饨": ["袁记云饺", "吉祥馄饨", "北方手工水饺"],
  "烧烤": ["木屋烧烤", "很久以前羊肉串", "深夜烤串研究所"],
  "轻食沙拉": ["Wagas 轻食", "超级碗健康餐", "沙野轻食"],
  "火锅": ["海底捞火锅", "小龙坎火锅", "一人食小火锅"],
  "披萨": ["达美乐比萨", "尊宝比萨", "手拍窑炉披萨"],
  "寿司": ["N多寿司", "争鲜回转寿司", "山葵家寿司"],
  "粤式小炒": ["点都德", "粤小馆", "广式烧味饭"],
  "甜品饮料": ["书亦烧仙草", "沪上阿姨", "古茗"],
  "default": ["附近人气小店", "口碑家常菜", "今天吃好点"]
};

const palette = ["#FFD45F", "#FF8162", "#9FD7B0", "#FFC48A", "#B8D7F0", "#FFAF9F", "#D7CFEF", "#FFE094", "#9FD9D1", "#F5B8D2", "#C6D89C", "#F2C17D"];

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      options: Array.isArray(stored?.options) ? stored.options : structuredClone(defaultOptions),
      stores: Array.isArray(stored?.stores) ? stored.stores : [],
      fridge: stored?.fridge && typeof stored.fridge === "object" ? stored.fridge : { ...defaultFridge }
    };
  } catch {
    return { options: structuredClone(defaultOptions), stores: [], fridge: { ...defaultFridge } };
  }
}

let state = loadState();
let selectedIngredients = new Set();
let selectedMethod = "不限";
let selectedTime = 15;
let currentRotation = 0;
let spinning = false;
let pendingWheelOptions = [];
let pendingFridge = {};
let toastTimer;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function openModal(id) {
  $("#overlay").hidden = false;
  const modal = $(id);
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  setTimeout(() => modal.querySelector("button, input")?.focus(), 50);
}

function closeModals() {
  $("#overlay").hidden = true;
  $$(".modal").forEach((modal) => { modal.hidden = true; });
  document.body.style.overflow = "";
}

function activeOptions() {
  return state.options.filter((option) => option.active);
}

function renderWheel() {
  const options = activeOptions();
  const count = options.length;
  const slice = 360 / count;
  $("#optionCount").textContent = count;
  $("#wheel").style.background = `conic-gradient(${options.map((_, index) => {
    const start = (index * slice).toFixed(3);
    const end = ((index + 1) * slice).toFixed(3);
    return `${palette[index % palette.length]} ${start}deg ${end}deg`;
  }).join(", ")})`;

  $("#wheelLabels").innerHTML = options.map((option, index) => {
    const angle = (index + .5) * slice;
    const radius = count > 9 ? 38 : count > 7 ? 36 : 34;
    return `<div class="wheel-label" style="transform: rotate(${angle}deg) translateY(-${radius}cqw) rotate(${-angle}deg)">
      <span>${escapeHtml(option.emoji)}</span><small>${escapeHtml(option.name)}</small>
    </div>`;
  }).join("");

  // cqw is not available in some older browsers; use a pixel fallback based on current size.
  requestAnimationFrame(() => {
    const wheelSize = $("#wheel").getBoundingClientRect().width;
    $$(".wheel-label").forEach((label, index) => {
      const angle = (index + .5) * slice;
      const radiusFactor = count > 9 ? .36 : count > 7 ? .34 : .32;
      label.style.transform = `rotate(${angle}deg) translateY(-${wheelSize * radiusFactor}px) rotate(${-angle}deg)`;
    });
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" }[char]));
}

function spinWheel() {
  if (spinning) return;
  const options = activeOptions();
  if (options.length < 2) {
    showToast("至少需要 2 个转盘选项");
    return;
  }
  spinning = true;
  $("#spinButton").disabled = true;
  $("#spinHint").innerHTML = "<span>🎲</span> 正在替你认真挑选…";

  const chosenIndex = Math.floor(Math.random() * options.length);
  const slice = 360 / options.length;
  const chosenCenter = (chosenIndex + .5) * slice;
  const normalized = ((currentRotation % 360) + 360) % 360;
  const alignment = ((-chosenCenter - normalized) % 360 + 360) % 360;
  currentRotation += 1800 + alignment;
  $("#wheel").style.transform = `rotate(${currentRotation}deg)`;

  setTimeout(() => {
    spinning = false;
    $("#spinButton").disabled = false;
    $("#spinHint").innerHTML = "<span>✨</span> 结果出来啦，愿赌服输哦";
    showResult(options[chosenIndex]);
  }, 4500);
}

function buildRestaurants(option) {
  const custom = state.stores
    .filter((store) => option.name.includes(store.category) || store.category.includes(option.name))
    .map((store) => store.name);
  const preset = restaurantNames[option.name] || restaurantNames.default;
  return [...new Set([...custom, ...preset])].slice(0, 3).map((name, index) => ({
    name,
    emoji: option.emoji,
    distance: ["380m", "720m", "1.2km"][index],
    rating: ["4.8", "4.7", "4.6"][index],
    delivery: ["约 28 分钟", "约 35 分钟", "约 42 分钟"][index],
    favorite: custom.includes(name)
  }));
}

function showResult(option) {
  $("#resultTitle").textContent = `${option.emoji} ${option.name}`;
  $("#restaurantList").innerHTML = buildRestaurants(option).map((restaurant) => `
    <article class="restaurant-item">
      <div class="restaurant-logo">${escapeHtml(restaurant.emoji)}</div>
      <div>
        <h3>${escapeHtml(restaurant.name)}${restaurant.favorite ? " · 常点" : ""}</h3>
        <div class="restaurant-meta">
          <span class="rating">★ ${restaurant.rating}</span><span>${restaurant.distance}</span><span>${restaurant.delivery}</span>
        </div>
      </div>
      <button class="platform-button" type="button" data-search-store="${escapeHtml(restaurant.name)}">去下单</button>
    </article>
  `).join("");
  openModal("#resultModal");
}

async function openPlatform(storeName) {
  try { await navigator.clipboard.writeText(storeName); } catch { /* clipboard is optional */ }
  showToast(`已复制“${storeName}”，正在打开外卖平台`);
  setTimeout(() => window.open("https://h5.ele.me/", "_blank", "noopener,noreferrer"), 350);
}

function renderWheelEditor() {
  pendingWheelOptions = state.options.map((option) => ({ ...option }));
  $("#wheelOptionList").innerHTML = pendingWheelOptions.map((option, index) => `
    <div class="option-row">
      <input id="wheelOption${index}" type="checkbox" data-option-index="${index}" ${option.active ? "checked" : ""} />
      <label for="wheelOption${index}"><span class="option-emoji">${escapeHtml(option.emoji)}</span> ${escapeHtml(option.name)}</label>
      <button class="delete-button" type="button" data-delete-option="${index}" aria-label="删除 ${escapeHtml(option.name)}">删除</button>
    </div>
  `).join("");
}

function saveWheelOptions() {
  $$('[data-option-index]', $("#wheelOptionList")).forEach((input) => {
    if (pendingWheelOptions[Number(input.dataset.optionIndex)]) {
      pendingWheelOptions[Number(input.dataset.optionIndex)].active = input.checked;
    }
  });
  if (pendingWheelOptions.filter((option) => option.active).length < 2) {
    showToast("请至少勾选 2 个选项");
    return;
  }
  state.options = pendingWheelOptions;
  saveState();
  renderWheel();
  closeModals();
  showToast("转盘已更新");
}

function renderStores() {
  const list = $("#favoriteStoreList");
  if (!state.stores.length) {
    list.innerHTML = '<div class="empty-state">还没有常点店家，先添加一家吧 🥡</div>';
    return;
  }
  list.innerHTML = state.stores.map((store, index) => `
    <div class="favorite-store-row">
      <span class="favorite-store-icon">❤️</span>
      <div><h3>${escapeHtml(store.name)}</h3><small>主营：${escapeHtml(store.category)}</small></div>
      <button class="delete-button" type="button" data-delete-store="${index}">删除</button>
    </div>
  `).join("");
}

function allIngredients() {
  return [...new Set([...ingredientCatalog, ...Object.keys(state.fridge)])];
}

function renderIngredientChips() {
  $("#ingredientChips").innerHTML = allIngredients().map((name) => {
    const hasIngredient = Number(state.fridge[name]) > 0;
    return `<button class="ingredient-chip${selectedIngredients.has(name) ? " active" : ""}${hasIngredient ? " in-fridge" : ""}" type="button" data-ingredient="${escapeHtml(name)}">
      ${escapeHtml(name)}${hasIngredient ? `<span class="fridge-dot">家里有 ${state.fridge[name]}</span>` : ""}
    </button>`;
  }).join("");
  $("#fridgeCount").textContent = Object.values(state.fridge).filter((amount) => Number(amount) > 0).length;
}

function renderFridgeEditor() {
  pendingFridge = { ...state.fridge };
  updateFridgeList();
}

function updateFridgeList() {
  const entries = Object.entries(pendingFridge);
  $("#fridgeList").innerHTML = entries.length ? entries.map(([name, amount], index) => `
    <div class="fridge-row">
      <div class="fridge-name"><b>${escapeHtml(name)}</b><small>${Number(amount) > 0 ? "库存充足" : "已经吃完"}</small></div>
      <div class="counter">
        <button type="button" data-fridge-action="minus" data-fridge-index="${index}" aria-label="减少">−</button>
        <span>${amount}</span>
        <button type="button" data-fridge-action="plus" data-fridge-index="${index}" aria-label="增加">＋</button>
      </div>
      <button class="delete-button" type="button" data-fridge-action="delete" data-fridge-index="${index}">删除</button>
    </div>
  `).join("") : '<div class="empty-state">冰箱空空的，添加一些食材吧 🧊</div>';
}

function changeFridge(index, action) {
  const name = Object.keys(pendingFridge)[index];
  if (!name) return;
  if (action === "delete") delete pendingFridge[name];
  if (action === "minus") pendingFridge[name] = Math.max(0, Number(pendingFridge[name]) - 1);
  if (action === "plus") pendingFridge[name] = Math.min(99, Number(pendingFridge[name]) + 1);
  updateFridgeList();
}

function saveFridge() {
  state.fridge = { ...pendingFridge };
  saveState();
  renderIngredientChips();
  closeModals();
  showToast("冰箱库存已保存");
}

function findRecipes() {
  const chosen = [...selectedIngredients];
  const scored = recipeData
    .filter((recipe) => selectedMethod === "不限" || recipe.method === selectedMethod)
    .filter((recipe) => recipe.time <= selectedTime)
    .map((recipe) => {
      const explicitMatches = recipe.ingredients.filter((item) => selectedIngredients.has(item));
      const fridgeMatches = recipe.ingredients.filter((item) => Number(state.fridge[item]) > 0);
      const missing = recipe.ingredients.filter((item) => !selectedIngredients.has(item) && !Number(state.fridge[item]));
      return { ...recipe, explicitMatches, fridgeMatches, missing, score: explicitMatches.length * 4 + fridgeMatches.length * 2 - missing.length };
    })
    .filter((recipe) => !chosen.length || recipe.explicitMatches.length)
    .sort((a, b) => b.score - a.score || a.time - b.time)
    .slice(0, 4);

  renderRecipeResults(scored);
}

function renderRecipeResults(recipes) {
  const container = $("#recipeResults");
  if (!recipes.length) {
    container.innerHTML = `<div class="empty-state">暂时没找到完全符合的菜谱。试试增加时间，或者选“随便”做法吧。</div>`;
    container.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  container.innerHTML = `
    <div class="results-heading"><h2>为你找到这些</h2><span>${recipes.length} 道合适的菜</span></div>
    ${recipes.map((recipe, index) => `
      <article class="recipe-card">
        <div class="recipe-visual">${recipe.emoji}</div>
        <div class="recipe-info">
          <h3>${escapeHtml(recipe.name)}</h3>
          <div class="recipe-meta"><span>⏱ ${recipe.time} 分钟</span><span>🍳 ${recipe.method}</span><span>👌 ${recipe.level}</span></div>
          <p class="recipe-match">需要：${recipe.ingredients.map(escapeHtml).join("、")}</p>
          <span class="match-badge">${recipe.missing.length ? `只需再买 ${recipe.missing.length} 样` : "冰箱食材可完成"}</span>
        </div>
        <div class="recipe-detail"><b>简单做法</b><ol>${recipe.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol></div>
        <button class="recipe-expand" type="button" data-recipe-index="${index}" aria-label="展开 ${escapeHtml(recipe.name)} 的做法"></button>
      </article>
    `).join("")}`;
  container.scrollIntoView({ behavior: "smooth", block: "start" });
}

function switchView(viewName) {
  $$(".mode-button").forEach((button) => button.classList.toggle("active", button.dataset.view === viewName));
  const takeaway = viewName === "takeaway";
  $("#takeawayView").hidden = !takeaway;
  $("#cookView").hidden = takeaway;
  $("#takeawayView").classList.toggle("active", takeaway);
  $("#cookView").classList.toggle("active", !takeaway);
}

function bindEvents() {
  $("#spinButton").addEventListener("click", spinWheel);
  $$(".mode-button").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
  $$('[data-close-modal]').forEach((button) => button.addEventListener("click", closeModals));
  $("#overlay").addEventListener("click", closeModals);
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModals(); });

  $("#spinAgainButton").addEventListener("click", () => { closeModals(); setTimeout(spinWheel, 180); });
  $("#restaurantList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-search-store]");
    if (button) openPlatform(button.dataset.searchStore);
  });

  $("#editWheelButton").addEventListener("click", () => { renderWheelEditor(); openModal("#wheelModal"); });
  $("#wheelOptionList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-option]");
    if (!button) return;
    pendingWheelOptions.splice(Number(button.dataset.deleteOption), 1);
    $("#wheelOptionList").innerHTML = "";
    const tempState = state.options;
    state.options = pendingWheelOptions;
    renderWheelEditor();
    state.options = tempState;
  });
  $("#addOptionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = $("#newOptionName").value.trim();
    const emoji = $("#newOptionEmoji").value.trim() || "🍱";
    if (!name) return;
    if (pendingWheelOptions.some((option) => option.name === name)) { showToast("这个选项已经有啦"); return; }
    pendingWheelOptions.push({ id: `custom_${Date.now()}`, name, emoji, active: true });
    const temp = state.options;
    state.options = pendingWheelOptions;
    renderWheelEditor();
    state.options = temp;
    $("#newOptionName").value = "";
  });
  $("#saveWheelButton").addEventListener("click", saveWheelOptions);

  $("#openStoresButton").addEventListener("click", () => { renderStores(); openModal("#storesModal"); });
  $("#addStoreForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.stores.push({ name: $("#storeNameInput").value.trim(), category: $("#storeCategoryInput").value.trim() });
    saveState();
    event.target.reset();
    renderStores();
    showToast("已加入常点店家");
  });
  $("#favoriteStoreList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-store]");
    if (!button) return;
    state.stores.splice(Number(button.dataset.deleteStore), 1);
    saveState();
    renderStores();
  });

  $("#ingredientChips").addEventListener("click", (event) => {
    const chip = event.target.closest("[data-ingredient]");
    if (!chip) return;
    const name = chip.dataset.ingredient;
    selectedIngredients.has(name) ? selectedIngredients.delete(name) : selectedIngredients.add(name);
    chip.classList.toggle("active", selectedIngredients.has(name));
  });
  $("#methodChips").addEventListener("click", (event) => {
    const button = event.target.closest("[data-method]");
    if (!button) return;
    selectedMethod = button.dataset.method;
    $$("[data-method]", $("#methodChips")).forEach((item) => item.classList.toggle("active", item === button));
  });
  $("#timeChips").addEventListener("click", (event) => {
    const button = event.target.closest("[data-time]");
    if (!button) return;
    selectedTime = Number(button.dataset.time);
    $$("[data-time]", $("#timeChips")).forEach((item) => item.classList.toggle("active", item === button));
  });
  $("#findRecipeButton").addEventListener("click", findRecipes);
  $("#recipeResults").addEventListener("click", (event) => {
    const button = event.target.closest("[data-recipe-index]");
    if (button) button.closest(".recipe-card").classList.toggle("open");
  });

  ["#openFridgeButton", "#manageFridgeInline"].forEach((selector) => {
    $(selector).addEventListener("click", () => { renderFridgeEditor(); openModal("#fridgeModal"); });
  });
  $("#fridgeList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-fridge-action]");
    if (button) changeFridge(Number(button.dataset.fridgeIndex), button.dataset.fridgeAction);
  });
  $("#addIngredientForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = $("#newIngredientName").value.trim();
    const amount = Number($("#newIngredientAmount").value);
    if (!name) return;
    pendingFridge[name] = (Number(pendingFridge[name]) || 0) + amount;
    event.target.reset();
    $("#newIngredientAmount").value = 1;
    updateFridgeList();
  });
  $("#saveFridgeButton").addEventListener("click", saveFridge);
}

renderWheel();
renderIngredientChips();
bindEvents();
