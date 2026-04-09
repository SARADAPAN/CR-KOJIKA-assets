const reelImagePaths = [
  "./01_画像/数字/1.png",
  "./01_画像/数字/2.png",
  "./01_画像/数字/3.png",
  "./01_画像/数字/4.png",
  "./01_画像/数字/5.png",
  "./01_画像/数字/6.png",
  "./01_画像/数字/7.png",
  "./01_画像/数字/8.png",
  "./01_画像/数字/9.png",
];

const videoPools = {
  normal: "./02_動画/本編/video_normal_01.mp4",
  chance: "./02_動画/本編/video_chance_01.mp4",
  rush: "./02_動画/本編/video_rush_01.mp4",
  rushCount: "./02_動画/本編/video_rush_count_01.mp4",
  freeze: "./02_動画/本編/video_freeze_01.mp4",
  fallingBonus: "./02_動画/本編/video_falling_bonus_01.mp4",
  freezeFx: "./02_動画/エフェクト/effect_freeze_intro_01.mp4",
  fallingSuccessFx: "./02_動画/エフェクト/effect_falling_success_01.mp4",
  jackpot: [
    "./02_動画/本編/video_jackpot_dj_01.mp4",
    "./02_動画/本編/video_jackpot_gunfight_01.mp4",
  ],
};

const audioLibrary = {
  seSpin: new Audio("./03_音声/SE/回転音.mp3"),
  seHit: new Audio("./03_音声/SE/se_slot_bonus_01.mp3"),
  seReach: new Audio("./03_音声/SE/リーチ1.mp3"),
  seExplosion: new Audio("./03_音声/SE/爆発音.mp3"),
  seShakiin: new Audio("./03_音声/SE/シャキーン3.mp3"),
  seRecovery: new Audio("./03_音声/SE/回復音.mp3"),
  seTaiko: new Audio("./03_音声/SE/和太鼓でドドン.mp3"),
  seFreezeDark: new Audio("./03_音声/BGM_短尺/フリーズ暗転.mp3"),
  seFreezeRelease: new Audio("./03_音声/SE/フリーズ解除音.mp3"),
  seFreezeRise: new Audio("./03_音声/SE/se_freeze_release_impact_01.mp3"),
  seFallingTrigger: new Audio("./03_音声/SE/se_falling_trigger_01.mp3"),
  seFallingPush: new Audio("./03_音声/SE/se_falling_push_01.mp3"),
  ambientPayout: new Audio("./03_音声/SE/パチンコ玉排出音.mp3"),
  bgmNormal: new Audio("./03_音声/BGM_長尺/通常時BGM.mp3"),
  bgmReach: new Audio("./03_音声/BGM_長尺/bgm_final_battle_long_01.mp3"),
  seChanceEntry: new Audio("./03_音声/BGM_短尺/kojika_time.mp3"),
  bgmMusouRushIntro: new Audio("./03_音声/BGM_短尺/kojika_musou_rush.mp3"),
  bgmMusouRush: new Audio("./03_音声/BGM_長尺/kojika_musou_rush.mp3"),
  bgmKakuhen: new Audio("./03_音声/BGM_長尺/kakuhen.mp3"),
  bgmFreeze: new Audio("./03_音声/BGM_長尺/フリーズBGM.mp3"),
  bgmFallingBonus: new Audio("./03_音声/BGM_長尺/bgm_falling_bonus_long_01.mp3"),
  bgmChance: new Audio("./03_音声/BGM_長尺/bgm_jackpot_long_01.mp3"),
  bgmNormalHit: new Audio("./03_音声/BGM_短尺/bgm_jackpot_short_01.mp3"),
  bgmJackpotHit: new Audio("./03_音声/BGM_長尺/bgm_club_long_01.mp3"),
  jackpotTracks: [
    new Audio("./03_音声/BGM_長尺/大当たりBGM.mp3"),
    new Audio("./03_音声/BGM_長尺/大当たりBGM2.mp3"),
  ],
};

Object.values(audioLibrary).forEach((value) => {
  if (Array.isArray(value)) {
    value.forEach((audio) => {
      audio.preload = "metadata";
      audio.loop = true;
    });
    return;
  }

  value.preload = "metadata";
});

audioLibrary.ambientPayout.loop = true;
audioLibrary.bgmNormal.loop = true;
audioLibrary.bgmKakuhen.loop = true;
audioLibrary.bgmMusouRush.loop = true;
audioLibrary.bgmFreeze.loop = true;
audioLibrary.bgmFallingBonus.loop = true;
audioLibrary.bgmChance.loop = true;

const TEST_PROBABILITY_MULTIPLIER = 1;
const NORMAL_ODD_HIT_RATE = 1 / 1276.0;
const NORMAL_EVEN_HIT_RATE = 1 / 425.3;
const NORMAL_CHANCE_ENTRY_RATE = 1 / 36;
const CHANCE_ODD_HIT_RATE = 5 / 1276.0;
const CHANCE_EVEN_HIT_RATE = 5 / 425.3;
const CHALLENGE_RUSH_ENTRY_TOTAL_RATE = 0.3;
const CHALLENGE_SUCCESS_TOTAL_RATE = 0.8;
const RUSH_HIT_RATE = 1 / 7;
const RUSH_ODD_HIT_SHARE = 0.9;
const FREEZE_TRIGGER_RATE = 1 / 300;
const BALLS_PER_SPIN = 1;
const INITIAL_BALLS = 2500;
const BALL_REFILL_AMOUNT = 2500;
const NORMAL_SPIN_REEL_WAIT_MS = 500;
const REEL_REACH_SOUND_DELAY_MS = 2200;
const REEL_REACH_EXTRA_STOP_MS = 1000;
const FALLING_TRIGGER_RATE = 0.1;
const FALLING_SUCCESS_RATE = 0.5;
const BALL_LAUNCH_INTERVAL_MS = 220;
const BALL_START_POSITION = { x: 0.165, y: 0.79 };
const BALL_WALL_CONTROL_POSITION = { x: 0.19, y: 0.28 };
const BALL_TOP_CONTROL_POSITION = { x: 0.34, y: 0.08 };
const BALL_APEX_POSITION = { x: 0.56, y: 0.12 };
const BALL_LAUNCH_DURATION_MS = 1550;
const BALL_INITIAL_FALL_VELOCITY = { x: 0.015, y: 0.06 };
const BALL_GRAVITY = 1.3;
const BALL_RADIUS = 0.009;
const BALL_NAIL_COLLISION_Y_RANGE = 0.035;
const BALL_FUNNEL_CENTER_X = 0.5;
const BALL_FUNNEL_ENTRY_Y = 0.74;
const BALL_FUNNEL_PULL = 1.18;
const MAX_PENDING_GATE_SPINS = 4;
const rushCountImagePaths = {
  15: "./01_画像/数字/15回転.png",
  30: "./01_画像/数字/30回転.png",
  60: "./01_画像/数字/60回転.png",
};

const state = {
  balls: INITIAL_BALLS,
  chain: 0,
  audioEnabled: false,
  spinning: false,
  autoSpinsLeft: 0,
  mode: "normal",
  activeJackpotTrack: null,
  phase: "normal",
  challengeSpinsLeft: 0,
  chanceSpinsLeft: 0,
  rushSpinsLeft: 0,
  freezeAwaitingLever: false,
  totalSpins: 0,
  totalHits: 0,
  consecutiveMisses: 0,
  leverHolding: false,
  pendingGateSpins: 0,
};

const stageVideo = document.getElementById("stageVideo");
const fxVideoOverlay = document.getElementById("fxVideoOverlay");
const fallingImageOverlay = document.getElementById("fallingImageOverlay");
const freezeBlackout = document.getElementById("freezeBlackout");
const rushIntro = document.getElementById("rushIntro");
const rushIntroShutter = document.getElementById("rushIntroShutter");
const rushIntroLogo = document.getElementById("rushIntroLogo");
const rushIntroCount = document.getElementById("rushIntroCount");
const machineStage = document.querySelector(".machine-stage");
const pachinkoField = document.getElementById("pachinkoField");
const pachinkoNails = document.getElementById("pachinkoNails");
const pachinkoGate = document.getElementById("pachinkoGate");
const gateStockLamps = Array.from(document.querySelectorAll(".gate-stock-lamp"));
const pachinkoBalls = document.getElementById("pachinkoBalls");
const reelBoard = document.querySelector(".reel-board");
const fallingCompactDisplay = document.getElementById("fallingCompactDisplay");
const fallingCompactSymbols = [
  document.getElementById("fallingCompact0"),
  document.getElementById("fallingCompact1"),
  document.getElementById("fallingCompact2"),
];
const reelWindows = Array.from(document.querySelectorAll(".reel-window"));
let reelElements = [];
reelElements = reelWindows.map((reelWindow, index) => createReelStrip(reelWindow, index + 1));
const machineMode = document.getElementById("machineMode");
const ballCount = document.getElementById("ballCount");
const chainCount = document.getElementById("chainCount");
const fxBadge = document.getElementById("fxBadge");
const kakuhenBadge = document.getElementById("kakuhenBadge");
const timeLogo = document.getElementById("timeLogo");
const rushLogo = document.getElementById("rushLogo");
const jackpotFlash = document.getElementById("jackpotFlash");
const machineSparkle = document.getElementById("machineSparkle");
const forecastOverlay = document.getElementById("forecastOverlay");
const forecastText = document.getElementById("forecastText");
const forecastSubtext = document.getElementById("forecastSubtext");
const fallingItems = document.getElementById("fallingItems");
const spinCount = document.getElementById("spinCount");
const hitCount = document.getElementById("hitCount");
const ceilingCount = document.getElementById("ceilingCount");
const spinBtn = document.getElementById("spinBtn");
const addBallsBtn = document.getElementById("addBallsBtn");
const autoBtn = document.getElementById("autoBtn");
const stopAutoBtn = document.getElementById("stopAutoBtn");
const debugFreezeBtn = document.getElementById("debugFreezeBtn");
const debugFeverBtn = document.getElementById("debugFeverBtn");
const debugRushBtn = document.getElementById("debugRushBtn");
const debugForecastBtn = document.getElementById("debugForecastBtn");
const debugFallingBtn = document.getElementById("debugFallingBtn");
const debugEvenFlowBtn = document.getElementById("debugEvenFlowBtn");
const debugSparkleBtn = document.getElementById("debugSparkleBtn");
const resetBtn = document.getElementById("resetBtn");
const enableAudioBtn = document.getElementById("enableAudioBtn");
const pushLeverBtn = document.getElementById("pushLeverBtn");
const pushLeverImage = document.getElementById("pushLeverImage");
const announcement = document.getElementById("announcement");
const historyList = document.getElementById("history");

const leverImagePaths = [
  "./01_画像/演出/img_lever_01.png",
  "./01_画像/演出/img_lever_02.png",
  "./01_画像/演出/img_lever_03.png",
];

const effectTimeouts = new Set();

const pachinkoNailLayout = [
  { x: 0.47, y: 0.18 }, { x: 0.53, y: 0.17 }, { x: 0.58, y: 0.19 }, { x: 0.62, y: 0.21 },
  { x: 0.36, y: 0.26 }, { x: 0.45, y: 0.24 }, { x: 0.54, y: 0.25 }, { x: 0.63, y: 0.27 },
  { x: 0.34, y: 0.29 }, { x: 0.5, y: 0.29 }, { x: 0.67, y: 0.3 },
  { x: 0.31, y: 0.34 }, { x: 0.4, y: 0.33 }, { x: 0.49, y: 0.35 }, { x: 0.58, y: 0.34 }, { x: 0.67, y: 0.36 },
  { x: 0.35, y: 0.39 }, { x: 0.44, y: 0.39 }, { x: 0.53, y: 0.4 }, { x: 0.62, y: 0.39 }, { x: 0.71, y: 0.4 },
  { x: 0.29, y: 0.43 }, { x: 0.38, y: 0.43 }, { x: 0.47, y: 0.44 }, { x: 0.56, y: 0.43 }, { x: 0.65, y: 0.44 },
  { x: 0.33, y: 0.52 }, { x: 0.42, y: 0.52 }, { x: 0.6, y: 0.52 }, { x: 0.69, y: 0.52 },
  { x: 0.35, y: 0.61 }, { x: 0.43, y: 0.62 }, { x: 0.48, y: 0.65 }, { x: 0.58, y: 0.65 }, { x: 0.66, y: 0.61 },
  { x: 0.38, y: 0.71 }, { x: 0.45, y: 0.745 }, { x: 0.59, y: 0.745 }, { x: 0.66, y: 0.71 },
];

const pachinkoBallsState = [];
let ballLauncherTimer = null;
let pachinkoAnimationFrame = 0;
let lastPachinkoFrameAt = 0;
const pachinkoGateRect = {
  left: 0.466,
  right: 0.534,
  top: 0.792,
  bottom: 0.884,
};

const pachinkoWallSegments = {
  left: [
    { y: 0.0, x: 0.19 },
    { y: 0.64, x: 0.19 },
    { y: 0.76, x: 0.23 },
    { y: 0.84, x: 0.34 },
    { y: 0.9, x: 0.44 },
    { y: 0.95, x: 0.482 },
  ],
  right: [
    { y: 0.0, x: 0.81 },
    { y: 0.3, x: 0.81 },
    { y: 0.64, x: 0.81 },
    { y: 0.76, x: 0.77 },
    { y: 0.84, x: 0.66 },
    { y: 0.9, x: 0.56 },
    { y: 0.95, x: 0.518 },
  ],
};

function wrapReelValue(value) {
  return ((value - 1 + reelImagePaths.length) % reelImagePaths.length) + 1;
}

function getReelImagePath(value) {
  return reelImagePaths[wrapReelValue(value) - 1];
}

function setReelDisplay(reel, centerValue) {
  const symbols = reel.children;
  const normalizedValue = wrapReelValue(centerValue);
  const values = [
    wrapReelValue(normalizedValue - 1),
    normalizedValue,
    wrapReelValue(normalizedValue + 1),
  ];

  values.forEach((value, index) => {
    symbols[index].src = getReelImagePath(value);
  });

  reel.dataset.value = normalizedValue.toString();
  syncFallingCompactDisplay();
}

function createReelStrip(reelWindow, initialValue) {
  const centerSymbol = reelWindow.querySelector(".reel-symbol");
  const reel = document.createElement("div");
  reel.className = "reel-strip";
  reel.id = centerSymbol.id;
  centerSymbol.removeAttribute("id");

  const previousSymbol = centerSymbol.cloneNode();
  previousSymbol.alt = "";
  const nextSymbol = centerSymbol.cloneNode();
  nextSymbol.alt = "";

  reel.append(previousSymbol, centerSymbol, nextSymbol);
  reelWindow.replaceChildren(reel);
  setReelDisplay(reel, initialValue);
  return reel;
}

function renderPachinkoNails() {
  const fragment = document.createDocumentFragment();

  pachinkoNailLayout.forEach((nail) => {
    const nailElement = document.createElement("div");
    nailElement.className = "pachinko-nail";
    nailElement.style.left = `${nail.x * 100}%`;
    nailElement.style.top = `${nail.y * 100}%`;
    fragment.appendChild(nailElement);
  });

  pachinkoNails.replaceChildren(fragment);
}

function renderGateStockLamps() {
  gateStockLamps.forEach((lamp, index) => {
    lamp.classList.toggle("active", index < Math.min(state.pendingGateSpins, gateStockLamps.length));
  });
}

function interpolateWallX(segments, y) {
  if (y <= segments[0].y) {
    return segments[0].x;
  }

  for (let index = 1; index < segments.length; index += 1) {
    const previous = segments[index - 1];
    const current = segments[index];
    if (y <= current.y) {
      const progress = (y - previous.y) / (current.y - previous.y);
      return previous.x + ((current.x - previous.x) * progress);
    }
  }

  return segments[segments.length - 1].x;
}

function getPachinkoWalls(y) {
  return {
    left: interpolateWallX(pachinkoWallSegments.left, y),
    right: interpolateWallX(pachinkoWallSegments.right, y),
  };
}

function constrainBallInsideWalls(ball) {
  const walls = getPachinkoWalls(ball.y);
  const minX = walls.left + BALL_RADIUS;
  const maxX = walls.right - BALL_RADIUS;

  if (ball.x < minX) {
    ball.x = minX;
    ball.vx = Math.abs(ball.vx) * 0.42 + 0.03;
  } else if (ball.x > maxX) {
    ball.x = maxX;
    ball.vx = -(Math.abs(ball.vx) * 0.42 + 0.03);
  }
}

function updateBallElement(ball) {
  ball.element.style.left = `${ball.x * 100}%`;
  ball.element.style.top = `${ball.y * 100}%`;
}

function removePachinkoBall(ball) {
  const index = pachinkoBallsState.indexOf(ball);
  if (index >= 0) {
    pachinkoBallsState.splice(index, 1);
  }
  ball.element.remove();
  if (pachinkoBallsState.length === 0 && pachinkoAnimationFrame) {
    window.cancelAnimationFrame(pachinkoAnimationFrame);
    pachinkoAnimationFrame = 0;
  }
}

function queueGateSpin() {
  if (state.pendingGateSpins < MAX_PENDING_GATE_SPINS) {
    state.pendingGateSpins += 1;
  }
  renderGateStockLamps();

  if (!state.spinning) {
    runQueuedGateSpin();
  }
}

function runQueuedGateSpin() {
  if (state.spinning || state.pendingGateSpins <= 0) {
    return;
  }

  state.pendingGateSpins -= 1;
  renderGateStockLamps();
  runSpin({ consumeBall: false }).catch(() => {
    setBusy(false);
  });
}

function consumeBallForLaunch() {
  if (state.balls < BALLS_PER_SPIN) {
    stopBallLauncher();
    state.leverHolding = false;
    setAnnouncement("持ち玉が不足しています。リセットで再挑戦できます。");
    renderCounters();
    animateLeverFrames([2, 1, 0], 55);
    return false;
  }

  state.balls -= BALLS_PER_SPIN;
  renderCounters();
  return true;
}

function spawnPachinkoBall() {
  if (!consumeBallForLaunch()) {
    return;
  }

  const ballElement = document.createElement("div");
  ballElement.className = "pachinko-ball";
  pachinkoBalls.appendChild(ballElement);

  const ball = {
    x: BALL_START_POSITION.x,
    y: BALL_START_POSITION.y,
    vx: 0,
    vy: 0,
    phase: "launch",
    launchedAt: performance.now(),
    drift: (Math.random() - 0.5) * 0.03,
    enteredGate: false,
    element: ballElement,
  };

  pachinkoBallsState.push(ball);
  updateBallElement(ball);
  if (!pachinkoAnimationFrame) {
    lastPachinkoFrameAt = performance.now();
    pachinkoAnimationFrame = window.requestAnimationFrame(tickPachinkoField);
  }
}

function startBallLauncher() {
  if (ballLauncherTimer !== null) {
    return;
  }

  spawnPachinkoBall();
  ballLauncherTimer = window.setInterval(() => {
    if (!state.leverHolding) {
      stopBallLauncher();
      return;
    }
    spawnPachinkoBall();
  }, BALL_LAUNCH_INTERVAL_MS);
}

function stopBallLauncher() {
  if (ballLauncherTimer !== null) {
    window.clearInterval(ballLauncherTimer);
    ballLauncherTimer = null;
  }
}

function tickPachinkoField(now) {
  pachinkoAnimationFrame = 0;
  if (pachinkoBallsState.length === 0) {
    lastPachinkoFrameAt = now;
    return;
  }

  const deltaSeconds = Math.min(0.033, (now - lastPachinkoFrameAt) / 1000 || 0.016);
  lastPachinkoFrameAt = now;

  pachinkoBallsState.slice().forEach((ball) => {
    if (ball.phase === "launch") {
      const progress = Math.min(1, (now - ball.launchedAt) / BALL_LAUNCH_DURATION_MS);
      const eased = 1 - Math.pow(1 - progress, 3);
      const inverse = 1 - eased;
      ball.x =
        (inverse * inverse * inverse * BALL_START_POSITION.x) +
        (3 * inverse * inverse * eased * BALL_WALL_CONTROL_POSITION.x) +
        (3 * inverse * eased * eased * BALL_TOP_CONTROL_POSITION.x) +
        (eased * eased * eased * BALL_APEX_POSITION.x);
      ball.y =
        (inverse * inverse * inverse * BALL_START_POSITION.y) +
        (3 * inverse * inverse * eased * BALL_WALL_CONTROL_POSITION.y) +
        (3 * inverse * eased * eased * BALL_TOP_CONTROL_POSITION.y) +
        (eased * eased * eased * BALL_APEX_POSITION.y);

      if (progress >= 1) {
        ball.phase = "fall";
        ball.vx = BALL_INITIAL_FALL_VELOCITY.x + (ball.drift * 1.8);
        ball.vy = BALL_INITIAL_FALL_VELOCITY.y;
      }
      updateBallElement(ball);
      return;
    }

    ball.vy += BALL_GRAVITY * deltaSeconds;

    if (ball.y >= BALL_FUNNEL_ENTRY_Y) {
      const centerOffset = BALL_FUNNEL_CENTER_X - ball.x;
      ball.vx += centerOffset * BALL_FUNNEL_PULL * deltaSeconds;
      ball.vx *= 0.985;
    }

    ball.x += ball.vx * deltaSeconds;
    ball.y += ball.vy * deltaSeconds;
    constrainBallInsideWalls(ball);

    pachinkoNailLayout.forEach((nail) => {
      if (Math.abs(ball.y - nail.y) > BALL_NAIL_COLLISION_Y_RANGE) {
        return;
      }

      const dx = ball.x - nail.x;
      const dy = ball.y - nail.y;
      const minDistance = BALL_RADIUS + 0.009;
      const distanceSq = (dx * dx) + (dy * dy);

      if (distanceSq > 0 && distanceSq < minDistance * minDistance) {
        const distance = Math.sqrt(distanceSq);
        const nx = dx / distance;
        const scatterStrength = nail.y < 0.33 ? 0.28 : 0.18;
        const scatter = (Math.random() - 0.5) * scatterStrength;
        ball.x = nail.x + (nx * minDistance);
        ball.y = nail.y + ((dy / distance) * minDistance);
        ball.vx = (nx * (nail.y < 0.33 ? 0.28 : 0.22)) + scatter;
        ball.vy = Math.abs(ball.vy) * 0.62 + 0.12;
      }
    });

    constrainBallInsideWalls(ball);

    if (!ball.enteredGate &&
      ball.x >= pachinkoGateRect.left &&
      ball.x <= pachinkoGateRect.right &&
      ball.y >= pachinkoGateRect.top &&
      ball.y <= pachinkoGateRect.bottom) {
      ball.enteredGate = true;
      queueGateSpin();
      removePachinkoBall(ball);
      return;
    }

    if (ball.y > 0.98) {
      removePachinkoBall(ball);
      return;
    }

    updateBallElement(ball);
  });

  if (pachinkoBallsState.length > 0) {
    pachinkoAnimationFrame = window.requestAnimationFrame(tickPachinkoField);
  }
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function scheduleEffectTimeout(callback, delayMs) {
  const timeoutId = window.setTimeout(() => {
    effectTimeouts.delete(timeoutId);
    callback();
  }, delayMs);
  effectTimeouts.add(timeoutId);
  return timeoutId;
}

function clearEffectTimeouts() {
  effectTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
  effectTimeouts.clear();
}

function setLeverFrame(index) {
  pushLeverImage.src = leverImagePaths[index];
}

function setLeverFreezeReady(isActive) {
  pushLeverBtn.classList.toggle("freeze-ready", isActive);
}

function animateLeverFrames(sequence, intervalMs) {
  sequence.forEach((frameIndex, index) => {
    window.setTimeout(() => {
      setLeverFrame(frameIndex);
    }, intervalMs * index);
  });
}

function setAnnouncement(text) {
  announcement.textContent = text;
}

function addHistory(text) {
  const item = document.createElement("li");
  item.textContent = text;
  historyList.prepend(item);
  while (historyList.children.length > 6) {
    historyList.removeChild(historyList.lastChild);
  }
}

function pauseAudio(audio) {
  audio.pause();
  audio.currentTime = 0;
}

function stopAllAudio() {
  Object.values(audioLibrary).forEach((value) => {
    if (Array.isArray(value)) {
      value.forEach((audio) => pauseAudio(audio));
      return;
    }
    pauseAudio(value);
  });
  state.activeJackpotTrack = null;
}

function stopJackpotBgm() {
  audioLibrary.jackpotTracks.forEach((audio) => {
    pauseAudio(audio);
  });
  state.activeJackpotTrack = null;
}

function stopModeBgm() {
  pauseAudio(audioLibrary.bgmNormal);
  pauseAudio(audioLibrary.bgmChance);
  pauseAudio(audioLibrary.bgmKakuhen);
  pauseAudio(audioLibrary.bgmMusouRush);
  pauseAudio(audioLibrary.bgmFreeze);
  pauseAudio(audioLibrary.bgmFallingBonus);
  pauseAudio(audioLibrary.bgmReach);
}

function playModeBgm(audio) {
  if (!state.audioEnabled) {
    return;
  }

  if (!audio.paused) {
    return;
  }

  stopModeBgm();
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function scaleProbability(rate) {
  return Math.min(1, rate * TEST_PROBABILITY_MULTIPLIER);
}

async function playHitPause(audio, options = {}) {
  const { keepJackpotBgm = false, keepModeBgm = false } = options;

  if (!state.audioEnabled) {
    await wait(5000);
    return;
  }

  if (!keepModeBgm) {
    stopModeBgm();
  }
  if (!keepJackpotBgm) {
    stopJackpotBgm();
  }
  audio.currentTime = 0;
  audio.play().catch(() => {});
  await wait(5000);
  pauseAudio(audio);
  if (!keepJackpotBgm && !keepModeBgm) {
    syncCurrentAudioState();
  }
}

function ensureAmbientPayout() {
  if (!state.audioEnabled) {
    return;
  }
  audioLibrary.ambientPayout.play().catch(() => {});
}

function safePlay(audio) {
  if (!state.audioEnabled) {
    return;
  }
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function loopAudio(audio) {
  if (!state.audioEnabled) {
    return;
  }
  audio.currentTime = 0;
  audio.loop = true;
  audio.play().catch(() => {});
}

function triggerHitVisual(level = "medium") {
  reelWindows.forEach((reelWindow) => {
    reelWindow.classList.remove("hit-pop");
    void reelWindow.offsetWidth;
    reelWindow.classList.add("hit-pop");
  });
  triggerMachineSparkle(level === "strong" ? "strong" : "medium", level === "strong" ? 1800 : 1200);
  spawnFallingItems({
    count: level === "strong" ? 18 : 10,
    tone: level === "strong" ? "rainbow" : "gold",
    durationMs: level === "strong" ? 1800 : 1500,
    minSize: 12,
    maxSize: level === "strong" ? 28 : 20,
  });
}

function resetForecastOverlay() {
  forecastOverlay.className = "forecast-overlay";
}

function resetMachineSparkle() {
  machineSparkle.className = "machine-sparkle";
}

function clearFallingItems() {
  fallingItems.replaceChildren();
}

function resetFallingImageOverlay() {
  fallingImageOverlay.className = "falling-image-overlay";
}

function syncFallingCompactDisplay() {
  reelElements.forEach((reel, index) => {
    const centerSymbol = reel.children[1];
    if (!centerSymbol || !fallingCompactSymbols[index]) {
      return;
    }
    fallingCompactSymbols[index].src = centerSymbol.src;
  });
}

function setFallingCompactDisplayActive(active) {
  if (!fallingCompactDisplay) {
    return;
  }
  syncFallingCompactDisplay();
  fallingCompactDisplay.classList.toggle("active", active);
  reelBoard.classList.toggle("suppressed", active);
}

function resetFallingClashState() {
  resetFallingImageOverlay();
  reelBoard.classList.remove("falling-sync");
  reelBoard.classList.remove("falling-clash");
  reelBoard.classList.remove("falling-resolved");
}

function triggerMachineSparkle(level = "mild", durationMs = 1200) {
  machineSparkle.className = `machine-sparkle active ${level}`;
  scheduleEffectTimeout(() => {
    resetMachineSparkle();
  }, durationMs);
}

function spawnFallingItems(options = {}) {
  const {
    count = 10,
    tone = "gold",
    minSize = 10,
    maxSize = 26,
    durationMs = 1600,
  } = options;

  const fragment = document.createDocumentFragment();

  for (let index = 0; index < count; index += 1) {
    const item = document.createElement("span");
    const size = minSize + (Math.random() * (maxSize - minSize));
    const left = 8 + (Math.random() * 84);
    const drift = `${(Math.random() - 0.5) * 90}px`;
    const spin = `${(Math.random() - 0.5) * 280}deg`;
    const delay = Math.random() * 280;

    item.className = `falling-item ${tone}`;
    item.style.left = `${left}%`;
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
    item.style.setProperty("--drift", drift);
    item.style.setProperty("--spin", spin);
    item.style.setProperty("--duration", `${durationMs + delay}ms`);
    item.style.animationDelay = `${delay}ms`;
    item.addEventListener("animationend", () => item.remove(), { once: true });
    fragment.appendChild(item);
  }

  fallingItems.appendChild(fragment);
}

function getForecastConfig(outcome) {
  if (["freeze_trigger", "rush_entry"].includes(outcome.kind)) {
    return {
      tier: "strong",
      label: outcome.kind === "freeze_trigger" ? "FREEZE" : "RUSH",
      subtext: outcome.kind === "freeze_trigger" ? "フリーズ予告" : "RUSH濃厚予告",
      tone: outcome.kind === "freeze_trigger" ? "cyan" : "rainbow",
      count: outcome.kind === "freeze_trigger" ? 18 : 22,
      durationMs: 1180,
      sparkleMs: 1500,
    };
  }

  if (["ceiling_jackpot", "odd_jackpot", "challenge_success", "fever_odd_hit"].includes(outcome.kind)) {
    return {
      tier: "strong",
      label: "JACKPOT",
      subtext: "大当たり接近",
      tone: "gold",
      count: 20,
      durationMs: 1080,
      sparkleMs: 1400,
    };
  }

  if (["even_hit", "chance_entry", "rush_odd_hit", "rush_even_hit", "fever_even_hit"].includes(outcome.kind)) {
    return {
      tier: "medium",
      label: "CHANCE",
      subtext: outcome.kind === "chance_entry" ? "チャンスタイム突入" : "ざわつく予兆",
      tone: "gold",
      count: 12,
      durationMs: 860,
      sparkleMs: 1100,
    };
  }

  if (state.phase === "normal" && Math.random() < 0.12) {
    return {
      tier: "weak",
      label: "NOTICE",
      subtext: "ざわざわ...",
      tone: "cyan",
      count: 8,
      durationMs: 620,
      sparkleMs: 800,
    };
  }

  return null;
}

async function playForecastSequence(outcome) {
  const config = getForecastConfig(outcome);
  if (!config) {
    return;
  }

  resetForecastOverlay();
  forecastText.textContent = config.label;
  forecastSubtext.textContent = config.subtext;
  forecastOverlay.className = `forecast-overlay active ${config.tier}`;
  triggerMachineSparkle(config.tier === "weak" ? "mild" : config.tier, config.sparkleMs);
  spawnFallingItems({
    count: config.count,
    tone: config.tone,
    durationMs: config.tier === "strong" ? 1800 : 1450,
    minSize: config.tier === "strong" ? 12 : 10,
    maxSize: config.tier === "strong" ? 30 : 22,
  });

  if (config.tier === "strong") {
    safePlay(audioLibrary.seTaiko);
  } else {
    safePlay(audioLibrary.seShakiin);
  }

  await wait(config.durationMs);
  resetForecastOverlay();
}

async function playFallingChanceSequence(options = {}) {
  const { forceSuccess = false } = options;
  pauseAudio(audioLibrary.seFallingTrigger);
  pauseAudio(audioLibrary.seFallingPush);
  resetFallingImageOverlay();
  clearFallingItems();
  reelBoard.classList.add("falling-sync");
  reelBoard.classList.remove("falling-clash");
  fallingImageOverlay.className = "falling-image-overlay active suspense";
  triggerMachineSparkle("medium", 11000);
  spawnFallingItems({
    count: 14,
    tone: "gold",
    durationMs: 11000,
    minSize: 12,
    maxSize: 26,
  });
  safePlay(audioLibrary.seFallingTrigger);
  setAnnouncement("KOJIKA落ち物演出発生... 落ち物が数字を押し込み始めています。");
  addHistory("KOJIKA落ち物演出発生 / 期待演出");

  for (let index = 0; index < 10; index += 1) {
    reelBoard.classList.remove("falling-clash");
    void reelBoard.offsetWidth;
    reelBoard.classList.add("falling-clash");
    safePlay(audioLibrary.seFallingPush);
    await wait(1000);
  }

  const success = forceSuccess || (Math.random() < FALLING_SUCCESS_RATE);

  if (!success) {
    pauseAudio(audioLibrary.seFallingTrigger);
    pauseAudio(audioLibrary.seFallingPush);
    resetFallingClashState();
    setAnnouncement("KOJIKA落ち物演出失敗... 惜しくも落ちきりませんでした。");
    addHistory("KOJIKA落ち物演出失敗 / 通常復帰");
    return false;
  }

  pauseAudio(audioLibrary.seFallingPush);
  reelBoard.classList.remove("falling-clash");
  fallingImageOverlay.className = "falling-image-overlay active success";
  spawnFallingItems({
    count: 26,
    tone: "rainbow",
    durationMs: 1800,
    minSize: 14,
    maxSize: 30,
  });
  triggerMachineSparkle("strong", 3200);
  fxVideoOverlay.src = videoPools.fallingSuccessFx;
  fxVideoOverlay.classList.add("active");
  fxVideoOverlay.currentTime = 0;
  fxVideoOverlay.play().catch(() => {});
  await wait(1200);
  reelBoard.classList.add("falling-resolved");
  fallingImageOverlay.className = "falling-image-overlay active success-hold";
  await wait(3000);
  resetFallingClashState();
  resetFxVideoOverlay();
  pauseAudio(audioLibrary.seFallingTrigger);
  return true;
}

async function playFallingBonusSequence() {
  stopJackpotBgm();
  stopModeBgm();
  setMode("jackpot");
  setVideo(videoPools.fallingBonus);
  if (state.audioEnabled) {
    audioLibrary.bgmFallingBonus.currentTime = 0;
    audioLibrary.bgmFallingBonus.play().catch(() => {});
  }
  setAnnouncement("KOJIKA落ち物演出成功! 特別演出へ突入します。");
  addHistory("KOJIKA落ち物演出成功 / 特別演出突入");
  triggerHitVisual("strong");
  await wait(260);
  setFallingCompactDisplayActive(true);
  await wait(3940);
  pauseAudio(audioLibrary.bgmFallingBonus);
}

async function runHendoChanceUpgrade() {
  const upgradeResult = buildTriple(pickOddSymbol());

  setMode("jackpot");
  syncPhaseDisplay();
  setAnnouncement("変動チャンス発生。数字が揃ったまま大当たりへ昇格していきます...");
  addHistory(`変動チャンス ${describeResult(upgradeResult)} / 大当たり昇格`);
  safePlay(audioLibrary.bgmReach);
  await animateReels(upgradeResult);
  pauseAudio(audioLibrary.bgmReach);

  state.chain += 1;
  state.totalHits += 1;
  state.consecutiveMisses = 0;
  state.balls += 1000;
  state.phase = "challenge";
  state.challengeSpinsLeft = 5;
  state.chanceSpinsLeft = 0;
  renderCounters();
  safePlay(audioLibrary.seHit);
  stopModeBgm();
  setMode("jackpot");
  syncPhaseDisplay();
  setAnnouncement(`変動チャンス成功! ${describeResult(upgradeResult)} で大当たり昇格、確変チャレンジ5回転へ移行。`);
  triggerHitVisual("strong");
  await playHitPause(audioLibrary.bgmJackpotHit);
}

function startRandomJackpotBgm() {
  if (!state.audioEnabled || !["challenge", "fever", "musou_rush", "freeze_rush", "falling_rush"].includes(state.phase)) {
    return;
  }

  if (state.phase === "fever") {
    if (!audioLibrary.bgmKakuhen.paused) {
      return;
    }
    stopJackpotBgm();
    stopModeBgm();
    audioLibrary.bgmKakuhen.currentTime = 0;
    audioLibrary.bgmKakuhen.play().catch(() => {});
    return;
  }

  if (state.phase === "musou_rush") {
    if (!audioLibrary.bgmMusouRush.paused) {
      return;
    }
    stopJackpotBgm();
    stopModeBgm();
    audioLibrary.bgmMusouRush.currentTime = 0;
    audioLibrary.bgmMusouRush.play().catch(() => {});
    return;
  }

  if (state.phase === "freeze_rush") {
    if (!audioLibrary.bgmFreeze.paused) {
      return;
    }
    stopJackpotBgm();
    stopModeBgm();
    audioLibrary.bgmFreeze.currentTime = 0;
    audioLibrary.bgmFreeze.play().catch(() => {});
    return;
  }

  if (state.phase === "falling_rush") {
    if (!audioLibrary.bgmFallingBonus.paused) {
      return;
    }
    stopJackpotBgm();
    stopModeBgm();
    audioLibrary.bgmFallingBonus.currentTime = 0;
    audioLibrary.bgmFallingBonus.play().catch(() => {});
    return;
  }

  if (state.activeJackpotTrack && !state.activeJackpotTrack.paused) {
    return;
  }

  stopJackpotBgm();
  state.activeJackpotTrack = pickRandom(audioLibrary.jackpotTracks);
  state.activeJackpotTrack.play().catch(() => {});
}

function setRushVisualActive(isActive) {
  rushLogo.classList.toggle("active", isActive);
}

function setKakuhenVisualActive(isActive) {
  kakuhenBadge.classList.toggle("active", isActive);
}

function setChanceVisualActive(isActive) {
  timeLogo.classList.toggle("chance-active", isActive);
}

async function playKojikaTimeIntro() {
  timeLogo.classList.remove("active");
  void timeLogo.offsetWidth;
  timeLogo.classList.add("active");
  await wait(2400);
  timeLogo.classList.remove("active");
}

function setFreezeBlackoutActive(isActive) {
  freezeBlackout.classList.toggle("active", isActive);
  reelBoard.classList.toggle("freeze-darkened", isActive);
}

function resetFxVideoOverlay() {
  fxVideoOverlay.classList.remove("active");
  fxVideoOverlay.pause();
  fxVideoOverlay.currentTime = 0;
  fxVideoOverlay.removeAttribute("src");
  fxVideoOverlay.load();
}

function resetRushIntroState() {
  rushIntro.className = "rush-intro";
  rushIntroCount.classList.remove("spinning");
  reelBoard.classList.remove("suppressed");
  pauseAudio(audioLibrary.seRecovery);
  audioLibrary.seRecovery.loop = false;
}

async function getAudioDurationMs(audio, fallbackMs) {
  if (Number.isFinite(audio.duration) && audio.duration > 0) {
    return audio.duration * 1000;
  }

  return new Promise((resolve) => {
    let settled = false;
    const finish = (value) => {
      if (settled) {
        return;
      }
      settled = true;
      resolve(value);
    };

    const onLoaded = () => finish((Number.isFinite(audio.duration) && audio.duration > 0) ? audio.duration * 1000 : fallbackMs);
    audio.addEventListener("loadedmetadata", onLoaded, { once: true });
    window.setTimeout(() => finish(fallbackMs), 1000);
  });
}

function setRushIntroStage(stage) {
  rushIntro.className = `rush-intro active ${stage}`;
}

async function playMusouRushIntro(selectedSpins) {
  const logoDurationMs = await getAudioDurationMs(audioLibrary.bgmMusouRushIntro, 3500);
  const countChoices = [15, 30, 60];

  resetRushIntroState();
  reelBoard.classList.add("suppressed");
  rushIntroLogo.src = "./01_画像/演出/img_logo_kojika_musou_rush_01.png";
  rushIntroCount.src = rushCountImagePaths[15];

  safePlay(audioLibrary.seExplosion);
  safePlay(audioLibrary.bgmMusouRushIntro);
  setRushIntroStage("is-logo");
  await wait(logoDurationMs);

  setRushIntroStage("is-shutter");
  safePlay(audioLibrary.seShakiin);
  window.setTimeout(() => safePlay(audioLibrary.seShakiin), 1100);
  window.setTimeout(() => safePlay(audioLibrary.seShakiin), 2250);
  window.setTimeout(() => safePlay(audioLibrary.seShakiin), 3380);
  await wait(4000);

  setRushIntroStage("is-count");
  setVideo(videoPools.rushCount);
  await wait(550);
  rushIntroCount.classList.add("spinning");
  loopAudio(audioLibrary.seRecovery);

  const countStart = performance.now();
  let index = 0;
  while (performance.now() - countStart < 10000) {
    rushIntroCount.src = rushCountImagePaths[countChoices[index % countChoices.length]];
    index += 1;
    await wait(140);
  }

  pauseAudio(audioLibrary.seRecovery);
  audioLibrary.seRecovery.loop = false;
  rushIntroCount.classList.remove("spinning");
  rushIntroCount.src = rushCountImagePaths[selectedSpins];
  safePlay(audioLibrary.seTaiko);
  await wait(2000);

  resetRushIntroState();
}

async function enterFreezeWait(source = "normal") {
  state.autoSpinsLeft = 0;
  autoBtn.textContent = "オート 100回";
  state.phase = "freeze_wait";
  state.freezeAwaitingLever = true;
  state.challengeSpinsLeft = 0;
  state.chanceSpinsLeft = 0;
  state.rushSpinsLeft = 0;
  stopAllAudio();
  clearEffectTimeouts();
  resetForecastOverlay();
  resetMachineSparkle();
  resetFallingImageOverlay();
  setFallingCompactDisplayActive(false);
  clearFallingItems();
  resetFxVideoOverlay();
  setFreezeBlackoutActive(true);
  setLeverFreezeReady(true);
  safePlay(audioLibrary.seFreezeDark);
  setMode("normal");
  syncPhaseDisplay();
  setBusy(true);
  setAnnouncement(source === "debug" ? "デバッグ: フリーズ待機中。レバーを押してください。" : "フリーズ発生! レバーを押してください。");
  addHistory(source === "debug" ? "デバッグでフリーズ待機へ" : "フリーズ演出待機 / レバー待ち");
}

async function resolveFreezeSequence() {
  if (!state.freezeAwaitingLever) {
    return;
  }

  state.freezeAwaitingLever = false;
  setLeverFreezeReady(false);

  safePlay(audioLibrary.seFreezeRelease);
  await wait(900);
  safePlay(audioLibrary.seFreezeRise);
  await wait(700);

  setVideo(videoPools.freeze);
  fxVideoOverlay.src = videoPools.freezeFx;
  fxVideoOverlay.classList.add("active");
  fxVideoOverlay.currentTime = 0;
  fxVideoOverlay.play().catch(() => {});

  if (state.audioEnabled) {
    audioLibrary.bgmFreeze.currentTime = 0;
    audioLibrary.bgmFreeze.play().catch(() => {});
  }

  await wait(120);
  setFreezeBlackoutActive(false);

  await wait(2400);
  resetFxVideoOverlay();

  state.phase = "freeze_rush";
  state.rushSpinsLeft = 60;
  state.consecutiveMisses = 0;
  renderCounters();
  setMode("freeze");
  syncPhaseDisplay();
  setAnnouncement("フリーズ成功! 60回転のフリーズRUSHへ突入。");
  addHistory("フリーズRUSH突入 / 60回");
  setBusy(false);
}

async function triggerDebugMusouRush() {
  if (state.spinning) {
    return;
  }

  setBusy(true);
  state.autoSpinsLeft = 0;
  autoBtn.textContent = "オート 100回";
  stopJackpotBgm();
  stopModeBgm();
  setMode("jackpot");
  syncPhaseDisplay();
  setAnnouncement("デバッグ: KOJIKA無双RUSH確定演出を再生します。");
  await playMusouRushIntro(30);

  state.phase = "musou_rush";
  state.rushSpinsLeft = 30;
  state.consecutiveMisses = 0;
  renderCounters();
  setMode("rush");
  startRandomJackpotBgm();
  syncPhaseDisplay();
  setAnnouncement("デバッグ: KOJIKA無双RUSHへ直接突入しました。");
  addHistory("デバッグで KOJIKA無双RUSH へ突入 / 30回");
  setBusy(false);
}

async function triggerDebugFreeze() {
  if (state.spinning || state.phase === "freeze_wait") {
    return;
  }
  await enterFreezeWait("debug");
}

function triggerDebugFever() {
  if (state.spinning) {
    return;
  }

  state.autoSpinsLeft = 0;
  autoBtn.textContent = "オート 100回";
  stopJackpotBgm();
  stopModeBgm();
  state.phase = "fever";
  state.challengeSpinsLeft = 0;
  state.chanceSpinsLeft = 0;
  state.rushSpinsLeft = 0;
  state.consecutiveMisses = 0;
  setMode("jackpot");
  playModeBgm(audioLibrary.bgmKakuhen);
  syncPhaseDisplay();
  renderCounters();
  setAnnouncement("デバッグ: 確変状態へ直接突入しました。");
  addHistory("デバッグで KAKUHEN へ突入");
}

async function triggerDebugForecast() {
  if (state.spinning) {
    return;
  }

  clearEffectTimeouts();
  resetForecastOverlay();
  resetMachineSparkle();
  clearFallingItems();
  await playForecastSequence({ kind: "rush_entry" });
  setAnnouncement("デバッグ: 予告演出を再生しました。");
  addHistory("デバッグで予告演出を再生");
}

function triggerDebugFalling() {
  if (state.spinning) {
    return;
  }

  clearEffectTimeouts();
  clearFallingItems();
  spawnFallingItems({
    count: 20,
    tone: "rainbow",
    durationMs: 1900,
    minSize: 12,
    maxSize: 28,
  });
  setAnnouncement("デバッグ: 落ち物演出を再生しました。");
  addHistory("デバッグで落ち物演出を再生");
}

async function triggerDebugEvenFlow() {
  if (state.spinning) {
    return;
  }

  setBusy(true);
  state.autoSpinsLeft = 0;
  autoBtn.textContent = "オート 100回";
  stopJackpotBgm();
  stopModeBgm();
  setMode("hit");
  syncPhaseDisplay();
  safePlay(audioLibrary.seHit);
  setAnnouncement("デバッグ: 偶数当たりから落ち物分岐の流れを再生します。");
  addHistory("デバッグで偶数当たり分岐を再生");
  triggerHitVisual("medium");
  await playHitPause(audioLibrary.bgmNormalHit);

  const fallingSuccess = await playFallingChanceSequence({ forceSuccess: true });
  if (fallingSuccess) {
    await playFallingBonusSequence();
    state.phase = "falling_rush";
    state.challengeSpinsLeft = 0;
    state.chanceSpinsLeft = 0;
    state.rushSpinsLeft = 60;
    state.consecutiveMisses = 0;
    renderCounters();
    setMode("falling");
    playModeBgm(audioLibrary.bgmFallingBonus);
    syncPhaseDisplay();
    setAnnouncement("デバッグ: 偶数当たりからKOJIKA落ち物BONUS 60回転へ突入しました。");
    addHistory("デバッグ偶数当たり成功 / KOJIKA落ち物BONUS 60回");
    setBusy(false);
    return;
  }

  state.phase = "normal";
  state.challengeSpinsLeft = 0;
  state.chanceSpinsLeft = 0;
  state.rushSpinsLeft = 0;
  setMode("normal");
  playModeBgm(audioLibrary.bgmNormal);
  syncPhaseDisplay();
  setAnnouncement("デバッグ: 偶数当たり後の落ち物演出は失敗し、通常へ戻りました。");
  addHistory("デバッグ偶数当たり失敗 / 通常へ復帰");
  setBusy(false);
}

function triggerDebugSparkle() {
  if (state.spinning) {
    return;
  }

  clearEffectTimeouts();
  resetMachineSparkle();
  triggerMachineSparkle("strong", 1800);
  setAnnouncement("デバッグ: 機体ピカピカ演出を再生しました。");
  addHistory("デバッグで機体ピカピカ演出を再生");
}

function setVideo(src) {
  if (stageVideo.dataset.src === src) {
    return;
  }
  stageVideo.dataset.src = src;
  stageVideo.src = src;
  stageVideo.play().catch(() => {});
}

function setMode(mode) {
  state.mode = mode;
  machineMode.textContent = mode.toUpperCase();
  machineMode.className = "";
  machineMode.classList.add(`mode-${mode}`);
  fxBadge.textContent = mode.toUpperCase();

  if (mode === "normal") {
    setVideo(videoPools.normal);
  }
  if (mode === "hit") {
    setVideo(videoPools.chance);
  }
  if (mode === "challenge") {
    setVideo(videoPools.chance);
  }
  if (mode === "rush") {
    setVideo(videoPools.rush);
  }
  if (mode === "falling") {
    setVideo(videoPools.fallingBonus);
  }
  if (mode === "freeze") {
    setVideo(videoPools.freeze);
  }
  if (mode === "jackpot") {
    setVideo(pickRandom(videoPools.jackpot));
    jackpotFlash.classList.remove("active");
    void jackpotFlash.offsetWidth;
    jackpotFlash.classList.add("active");
  }
}

function renderCounters() {
  ballCount.textContent = state.balls.toString();
  chainCount.textContent = state.chain.toString();
  spinCount.textContent = state.totalSpins.toString();
  hitCount.textContent = state.totalHits.toString();
  ceilingCount.textContent = Math.max(0, 101 - state.consecutiveMisses).toString();
}

function pickMusouRushSpins() {
  const roll = Math.random();

  if (roll < 0.35) {
    return 15;
  }
  if (roll < 0.75) {
    return 30;
  }
  return 60;
}

function setBusy(isBusy) {
  state.spinning = isBusy;
  spinBtn.disabled = isBusy;
  addBallsBtn.disabled = isBusy;
  debugFreezeBtn.disabled = isBusy && state.phase !== "freeze_wait";
  debugFeverBtn.disabled = isBusy;
  debugRushBtn.disabled = isBusy;
  debugForecastBtn.disabled = isBusy;
  debugFallingBtn.disabled = isBusy;
  debugEvenFlowBtn.disabled = isBusy;
  debugSparkleBtn.disabled = isBusy;
  resetBtn.disabled = isBusy;
  enableAudioBtn.disabled = isBusy;
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function animateReels(finalValues) {
  const isReach = finalValues[0] === finalValues[1];
  const spinDurations = [1900, 2250, isReach ? 7250 + REEL_REACH_EXTRA_STOP_MS : 2600];
  let reachSeStarted = false;

  const animations = reelElements.map((reel, index) => new Promise((resolve) => {
    const startedAt = performance.now();
    reel.classList.add("spinning");
    const timer = window.setInterval(() => {
      const randomValue = Math.floor(Math.random() * reelImagePaths.length);
      setReelDisplay(reel, randomValue + 1);

      if (index === 2 && isReach && !reachSeStarted && (performance.now() - startedAt >= REEL_REACH_SOUND_DELAY_MS)) {
        reachSeStarted = true;
        reelBoard.classList.add("reach-swap");
        safePlay(audioLibrary.seReach);
      }

      if (performance.now() - startedAt >= spinDurations[index]) {
        window.clearInterval(timer);
        reel.classList.remove("spinning");
        setReelDisplay(reel, finalValues[index]);
        safePlay(audioLibrary.seShakiin);
        resolve();
      }
    }, 120);
  }));

  await Promise.all(animations);
  if (isReach) {
    pauseAudio(audioLibrary.seReach);
    reelBoard.classList.remove("reach-swap");
  }
}

function buildTriple(value) {
  return [value, value, value];
}

function buildLoseResult() {
  const values = [1, 1, 1].map(() => Math.floor(Math.random() * 9) + 1);
  if (values[0] === values[1] && values[1] === values[2]) {
    values[2] = values[2] === 9 ? 1 : values[2] + 1;
  }
  return values;
}

function pickEvenSymbol() {
  return pickRandom([2, 4, 6, 8]);
}

function pickOddSymbol() {
  return pickRandom([1, 3, 5, 7, 9]);
}

function rollNormalPhase() {
  const oddHitRate = scaleProbability(NORMAL_ODD_HIT_RATE);
  const evenHitRate = scaleProbability(NORMAL_EVEN_HIT_RATE);
  const chanceRate = scaleProbability(NORMAL_CHANCE_ENTRY_RATE);
  const freezeRate = FREEZE_TRIGGER_RATE;
  const roll = Math.random();
  const chanceRoll = Math.random() < chanceRate;
  const freezeRoll = Math.random() < freezeRate;

  if (freezeRoll) {
    return {
      kind: "freeze_trigger",
      result: buildLoseResult(),
    };
  }

  if (roll < oddHitRate) {
    return {
      kind: "odd_jackpot",
      result: buildTriple(pickOddSymbol()),
    };
  }

  if (roll < oddHitRate + evenHitRate) {
    return {
      kind: "even_hit",
      result: buildTriple(pickEvenSymbol()),
    };
  }

  if (chanceRoll) {
    return {
      kind: "chance_entry",
      result: buildLoseResult(),
    };
  }

  return {
    kind: "miss",
    result: buildLoseResult(),
  };
}

function rollChallengePhase() {
  const musouRushEntryRate = 1 - Math.pow(1 - CHALLENGE_RUSH_ENTRY_TOTAL_RATE, 1 / 5);

  if (Math.random() < musouRushEntryRate) {
    return {
      kind: "rush_entry",
      result: buildTriple(pickOddSymbol()),
      rushSpins: pickMusouRushSpins(),
    };
  }

  const challengeHitRate = scaleProbability(1 - Math.pow(1 - CHALLENGE_SUCCESS_TOTAL_RATE, 1 / 5));
  const success = Math.random() < challengeHitRate;

  if (success) {
    return {
      kind: "challenge_success",
      result: buildTriple(pickOddSymbol()),
    };
  }

  return {
    kind: "challenge_miss",
    result: buildLoseResult(),
  };
}

function rollMusouRushPhase() {
  const hitRate = scaleProbability(RUSH_HIT_RATE);
  const roll = Math.random();

  if (roll < hitRate) {
    const isOdd = Math.random() < RUSH_ODD_HIT_SHARE;
    return {
      kind: isOdd ? "rush_odd_hit" : "rush_even_hit",
      result: buildTriple(isOdd ? pickOddSymbol() : pickEvenSymbol()),
    };
  }

  return {
    kind: "rush_miss",
    result: buildLoseResult(),
  };
}

function rollChancePhase() {
  const oddHitRate = scaleProbability(CHANCE_ODD_HIT_RATE);
  const evenHitRate = scaleProbability(CHANCE_EVEN_HIT_RATE);
  const roll = Math.random();

  if (roll < oddHitRate) {
    return {
      kind: "odd_jackpot",
      result: buildTriple(pickOddSymbol()),
    };
  }

  if (roll < oddHitRate + evenHitRate) {
    return {
      kind: "even_hit",
      result: buildTriple(pickEvenSymbol()),
    };
  }

  return {
    kind: "chance_miss",
    result: buildLoseResult(),
  };
}

function rollFeverPhase() {
  const hitRate = scaleProbability(RUSH_HIT_RATE);
  const roll = Math.random();

  if (roll < hitRate) {
    const isOdd = Math.random() < RUSH_ODD_HIT_SHARE;
    return {
      kind: isOdd ? "fever_odd_hit" : "fever_even_hit",
      result: buildTriple(isOdd ? pickOddSymbol() : pickEvenSymbol()),
    };
  }

  return {
    kind: "fever_miss",
    result: buildLoseResult(),
  };
}

function spinByPhase() {
  if (state.consecutiveMisses >= 100) {
    return {
      kind: "ceiling_jackpot",
      result: buildTriple(pickOddSymbol()),
    };
  }
  if (state.phase === "chance") {
    return rollChancePhase();
  }
  if (state.phase === "challenge") {
    return rollChallengePhase();
  }
  if (state.phase === "musou_rush") {
    return rollMusouRushPhase();
  }
  if (state.phase === "freeze_rush") {
    return rollMusouRushPhase();
  }
  if (state.phase === "fever") {
    return rollFeverPhase();
  }
  return rollNormalPhase();
}

function describeResult(result) {
  return result.join("-");
}

function getPhaseLabel() {
  if (state.phase === "chance") {
    return `CHANCE ${state.chanceSpinsLeft}`;
  }
  if (state.phase === "challenge") {
    return `CHALLENGE ${state.challengeSpinsLeft}`;
  }
  if (state.phase === "musou_rush") {
    return `RUSH ${state.rushSpinsLeft}`;
  }
  if (state.phase === "falling_rush") {
    return `FALLING ${state.rushSpinsLeft}`;
  }
  if (state.phase === "freeze_wait") {
    return "FREEZE";
  }
  if (state.phase === "freeze_rush") {
    return `FREEZE ${state.rushSpinsLeft}`;
  }
  if (state.phase === "fever") {
    return "KAKUHEN";
  }
  return "NORMAL";
}

function syncPhaseDisplay() {
  machineMode.textContent = getPhaseLabel();
  fxBadge.textContent = getPhaseLabel();
  setKakuhenVisualActive(state.phase === "fever");
  setChanceVisualActive(state.phase === "chance");
  setRushVisualActive(state.phase === "musou_rush");
}

function syncCurrentAudioState() {
  ensureAmbientPayout();

  if (["challenge", "fever", "musou_rush", "freeze_rush", "falling_rush"].includes(state.phase)) {
    if (state.phase === "fever") {
      playModeBgm(audioLibrary.bgmKakuhen);
      return;
    }
    if (state.phase === "musou_rush") {
      playModeBgm(audioLibrary.bgmMusouRush);
      return;
    }
    if (state.phase === "freeze_rush") {
      playModeBgm(audioLibrary.bgmFreeze);
      return;
    }
    if (state.phase === "falling_rush") {
      playModeBgm(audioLibrary.bgmFallingBonus);
      return;
    }
    stopModeBgm();
    startRandomJackpotBgm();
    return;
  }

  stopJackpotBgm();
  if (state.phase === "chance") {
    playModeBgm(audioLibrary.bgmChance);
    return;
  }
  if (state.phase === "normal") {
    playModeBgm(audioLibrary.bgmNormal);
    return;
  }
  stopModeBgm();
}

async function runSpin(options = {}) {
  const { consumeBall = true } = options;

  if (state.phase === "freeze_wait") {
    setAnnouncement("フリーズ待機中です。レバーを押してください。");
    return;
  }

  if (state.spinning || (consumeBall && state.balls < BALLS_PER_SPIN)) {
    if (consumeBall && state.balls < BALLS_PER_SPIN) {
      setAnnouncement("持ち玉が不足しています。リセットで再挑戦できます。");
    }
    return;
  }

  setBusy(true);
  state.totalSpins += 1;
  if (consumeBall) {
    state.balls -= BALLS_PER_SPIN;
  }
  renderCounters();
  safePlay(audioLibrary.seSpin);
  ensureAmbientPayout();
  if (state.phase === "normal") {
    setMode("normal");
    stopJackpotBgm();
    playModeBgm(audioLibrary.bgmNormal);
    setAnnouncement("通常時変動中... KOJIKA無双RUSHを狙って抽選中...");
  } else if (state.phase === "chance") {
    setMode("challenge");
    stopJackpotBgm();
    playModeBgm(audioLibrary.bgmChance);
    setAnnouncement(`チャンスタイム残り ${state.chanceSpinsLeft} 回。チャンス状態で抽選中...`);
  } else if (state.phase === "challenge") {
    setMode("challenge");
    stopModeBgm();
    startRandomJackpotBgm();
    setAnnouncement(`確変チャレンジ残り ${state.challengeSpinsLeft} 回。KOJIKA無双RUSH突入を抽選中...`);
  } else if (state.phase === "musou_rush") {
    setMode("rush");
    startRandomJackpotBgm();
    setAnnouncement(`KOJIKA無双RUSH 残り ${state.rushSpinsLeft} 回。偶数当たりでも継続します。`);
  } else if (state.phase === "falling_rush") {
    setMode("falling");
    playModeBgm(audioLibrary.bgmFallingBonus);
    setAnnouncement(`KOJIKA落ち物BONUS 残り ${state.rushSpinsLeft} 回。60回転の特別継続中です。`);
  } else if (state.phase === "freeze_rush") {
    setMode("freeze");
    playModeBgm(audioLibrary.bgmFreeze);
    setAnnouncement(`フリーズRUSH 残り ${state.rushSpinsLeft} 回。偶数当たりでも継続します。`);
  } else {
    setMode("jackpot");
    playModeBgm(audioLibrary.bgmKakuhen);
    setAnnouncement("確変中変動中... 連チャンとKOJIKA無双RUSHを抽選中...");
  }
  syncPhaseDisplay();

  const outcome = spinByPhase();
  await playForecastSequence(outcome);
  if (state.phase === "normal") {
    await wait(NORMAL_SPIN_REEL_WAIT_MS);
  }
  await animateReels(outcome.result);
  await wait(250);

  if (outcome.kind === "freeze_trigger") {
    await enterFreezeWait();
    return;
  } else if (outcome.kind === "ceiling_jackpot" || outcome.kind === "odd_jackpot") {
    state.chain += 1;
    state.totalHits += 1;
    state.consecutiveMisses = 0;
    state.balls += 1500;
    state.phase = "challenge";
    state.challengeSpinsLeft = 5;
    state.chanceSpinsLeft = 0;
    renderCounters();
    safePlay(audioLibrary.seHit);
    stopModeBgm();
    setMode("jackpot");
    syncPhaseDisplay();
    if (outcome.kind === "ceiling_jackpot") {
      setAnnouncement(`天井到達! ${describeResult(outcome.result)} で大当たり確定。確変チャレンジ5回転へ移行。`);
      addHistory(`天井到達 ${describeResult(outcome.result)} / 確変チャレンジへ`);
    } else {
      setAnnouncement(`奇数図柄 ${describeResult(outcome.result)} 揃いで大当たり! 確変チャレンジ5回転へ移行。`);
      addHistory(`奇数当たり ${describeResult(outcome.result)} / 確変チャレンジへ`);
    }
    triggerHitVisual("strong");
    await playHitPause(audioLibrary.bgmJackpotHit);
  } else if (outcome.kind === "even_hit") {
    state.chain = 0;
    state.totalHits += 1;
    state.consecutiveMisses = 0;
    state.balls += 500;
    state.phase = "normal";
    state.challengeSpinsLeft = 0;
    state.chanceSpinsLeft = 0;
    stopJackpotBgm();
    stopModeBgm();
    renderCounters();
    safePlay(audioLibrary.seHit);
    setMode("hit");
    syncPhaseDisplay();
    setAnnouncement(`偶数図柄 ${describeResult(outcome.result)} 揃いで通常当たり。通常状態へ戻ります。`);
    addHistory(`通常当たり ${describeResult(outcome.result)} / +500玉`);
    triggerHitVisual("medium");
    await playHitPause(audioLibrary.bgmNormalHit);

    if (Math.random() < FALLING_TRIGGER_RATE) {
      const fallingSuccess = await playFallingChanceSequence();
      if (fallingSuccess) {
        await playFallingBonusSequence();
        state.phase = "falling_rush";
        state.rushSpinsLeft = 60;
        state.consecutiveMisses = 0;
        renderCounters();
        setMode("falling");
        playModeBgm(audioLibrary.bgmFallingBonus);
        syncPhaseDisplay();
        setAnnouncement("KOJIKA落ち物演出成功! KOJIKA落ち物BONUS 60回転へ突入。");
        addHistory("KOJIKA落ち物演出成功 / KOJIKA落ち物BONUS 60回");
        setBusy(false);
        return;
      }
    }

    if (Math.random() < 0.5) {
      await runHendoChanceUpgrade();
    }
  } else if (outcome.kind === "challenge_success") {
    state.phase = "fever";
    state.chain += 1;
    state.consecutiveMisses = 0;
    state.challengeSpinsLeft = 0;
    state.chanceSpinsLeft = 0;
    renderCounters();
    setMode("jackpot");
    playModeBgm(audioLibrary.bgmKakuhen);
    syncPhaseDisplay();
    setAnnouncement(`確変チャレンジ成功! ${describeResult(outcome.result)} で確変突入。`);
    addHistory(`確変突入 ${describeResult(outcome.result)} / KAKUHEN開始`);
    triggerHitVisual("strong");
    await playHitPause(audioLibrary.bgmJackpotHit);
  } else if (outcome.kind === "rush_entry") {
    stopJackpotBgm();
    stopModeBgm();
    setMode("jackpot");
    setAnnouncement("KOJIKA無双RUSH確定! 回転数を表示しながら突入演出を再生します...");
    await playMusouRushIntro(outcome.rushSpins);
    state.phase = "musou_rush";
    state.rushSpinsLeft = outcome.rushSpins;
    state.consecutiveMisses = 0;
    renderCounters();
    setMode("rush");
    startRandomJackpotBgm();
    syncPhaseDisplay();
    setAnnouncement(`KOJIKA無双RUSH 突入! ${outcome.rushSpins}回転の継続保証を獲得。終了後は確変チャレンジへ戻ります。`);
    addHistory(`KOJIKA無双RUSH突入 ${describeResult(outcome.result)} / ${outcome.rushSpins}回`);
    triggerHitVisual("strong");
  } else if (outcome.kind === "challenge_miss") {
    state.consecutiveMisses += 1;
    state.challengeSpinsLeft -= 1;
    if (state.challengeSpinsLeft <= 0) {
      state.phase = "normal";
      state.chain = 0;
      stopJackpotBgm();
      playModeBgm(audioLibrary.bgmNormal);
      setMode("normal");
      syncPhaseDisplay();
      setAnnouncement(`チャレンジ失敗 ${describeResult(outcome.result)}。5回転終了で通常へ戻ります。`);
      addHistory(`確変チャレンジ失敗 ${describeResult(outcome.result)} / 通常へ`);
    } else {
      setMode("challenge");
      startRandomJackpotBgm();
      syncPhaseDisplay();
      setAnnouncement(`チャレンジ失敗 ${describeResult(outcome.result)}。残り ${state.challengeSpinsLeft} 回。`);
      addHistory(`チャレンジ失敗 ${describeResult(outcome.result)} / 残り ${state.challengeSpinsLeft} 回`);
    }
  } else if (outcome.kind === "chance_entry") {
    state.consecutiveMisses += 1;
    state.phase = "chance";
    state.chanceSpinsLeft = 10;
    state.chain = 0;
    stopJackpotBgm();
    stopModeBgm();
    safePlay(audioLibrary.seChanceEntry);
    await playKojikaTimeIntro();
    playModeBgm(audioLibrary.bgmChance);
    setMode("challenge");
    syncPhaseDisplay();
    setAnnouncement("チャンスタイム突入! 10回転のあいだ合算 1/63.8 です。");
    addHistory(`チャンスタイム突入 ${describeResult(outcome.result)} / 10回`);
  } else if (outcome.kind === "chance_miss") {
    state.consecutiveMisses += 1;
    state.chanceSpinsLeft -= 1;
    if (state.chanceSpinsLeft <= 0) {
      state.phase = "normal";
      state.chain = 0;
      stopJackpotBgm();
      playModeBgm(audioLibrary.bgmNormal);
      setMode("normal");
      syncPhaseDisplay();
      setAnnouncement(`チャンスタイム終了 ${describeResult(outcome.result)}。通常状態へ戻ります。`);
      addHistory(`チャンスタイム終了 ${describeResult(outcome.result)} / 通常へ`);
    } else {
      setMode("challenge");
      syncPhaseDisplay();
      setAnnouncement(`チャンスタイム中ハズレ ${describeResult(outcome.result)}。残り ${state.chanceSpinsLeft} 回。`);
      addHistory(`チャンスタイム中ハズレ ${describeResult(outcome.result)} / 残り ${state.chanceSpinsLeft} 回`);
    }
  } else if (outcome.kind === "rush_odd_hit" || outcome.kind === "rush_even_hit") {
    const wasFreezeRush = state.phase === "freeze_rush";
    const wasFallingRush = state.phase === "falling_rush";
    state.chain += 1;
    state.totalHits += 1;
    state.consecutiveMisses = 0;
    state.balls += outcome.kind === "rush_odd_hit" ? 1500 : 500;
    state.rushSpinsLeft -= 1;
    const rushEnded = state.rushSpinsLeft <= 0;
    state.phase = rushEnded ? "challenge" : (wasFreezeRush ? "freeze_rush" : (wasFallingRush ? "falling_rush" : "musou_rush"));
    renderCounters();
    safePlay(audioLibrary.seHit);
    if (rushEnded) {
      stopJackpotBgm();
      stopModeBgm();
      if (wasFallingRush) {
        setFallingCompactDisplayActive(false);
      }
    }
    setMode(rushEnded ? "challenge" : (wasFreezeRush ? "freeze" : (wasFallingRush ? "falling" : "rush")));
    syncPhaseDisplay();
    const rushLabel = wasFreezeRush ? "フリーズRUSH" : (wasFallingRush ? "KOJIKA落ち物BONUS" : "KOJIKA無双RUSH");
    const rushSuffix = rushEnded ? `${rushLabel}終了、確変チャレンジへ戻ります。` : `残り ${state.rushSpinsLeft} 回。`;
    if (outcome.kind === "rush_odd_hit") {
      setAnnouncement(`${rushLabel}中奇数揃い ${describeResult(outcome.result)}! +1500玉。${rushSuffix}`);
      addHistory(`${rushLabel}奇数当たり ${describeResult(outcome.result)} / +1500玉`);
    } else {
      setAnnouncement(`${rushLabel}中偶数揃い ${describeResult(outcome.result)}。+500玉。${rushSuffix}`);
      addHistory(`${rushLabel}偶数当たり ${describeResult(outcome.result)} / +500玉`);
    }
    triggerHitVisual(outcome.kind === "rush_odd_hit" ? "strong" : "medium");
    await playHitPause(audioLibrary.bgmJackpotHit, { keepModeBgm: !rushEnded });
  } else if (outcome.kind === "rush_miss") {
    const wasFreezeRush = state.phase === "freeze_rush";
    const wasFallingRush = state.phase === "falling_rush";
    state.consecutiveMisses += 1;
    state.rushSpinsLeft -= 1;
    const rushEnded = state.rushSpinsLeft <= 0;
    state.phase = rushEnded ? "challenge" : (wasFreezeRush ? "freeze_rush" : (wasFallingRush ? "falling_rush" : "musou_rush"));
    setMode(rushEnded ? "challenge" : (wasFreezeRush ? "freeze" : (wasFallingRush ? "falling" : "rush")));
    if (rushEnded) {
      stopJackpotBgm();
      stopModeBgm();
      startRandomJackpotBgm();
      if (wasFallingRush) {
        setFallingCompactDisplayActive(false);
      }
    }
    syncPhaseDisplay();
    const rushLabel = wasFreezeRush ? "フリーズRUSH" : (wasFallingRush ? "KOJIKA落ち物BONUS" : "KOJIKA無双RUSH");
    if (rushEnded) {
      setAnnouncement(`${rushLabel}終了 ${describeResult(outcome.result)}。確変チャレンジへ戻ります。`);
      addHistory(`${rushLabel}終了 ${describeResult(outcome.result)} / CHALLENGEへ`);
    } else {
      setAnnouncement(`${rushLabel}中ハズレ ${describeResult(outcome.result)}。残り ${state.rushSpinsLeft} 回。`);
      addHistory(`${rushLabel}中ハズレ ${describeResult(outcome.result)} / 残り ${state.rushSpinsLeft} 回`);
    }
  } else if (outcome.kind === "fever_odd_hit") {
    state.chain += 1;
    state.totalHits += 1;
    state.consecutiveMisses = 0;
    state.balls += 1500;
    renderCounters();
    safePlay(audioLibrary.seHit);
    setMode("jackpot");
    playModeBgm(audioLibrary.bgmKakuhen);
    syncPhaseDisplay();
    setAnnouncement(`確変中奇数揃い ${describeResult(outcome.result)}! 確変継続。`);
    addHistory(`確変継続当たり ${describeResult(outcome.result)} / +1500玉`);
    triggerHitVisual("strong");
    await playHitPause(audioLibrary.bgmJackpotHit, { keepModeBgm: true });
  } else if (outcome.kind === "fever_even_hit") {
    state.totalHits += 1;
    state.consecutiveMisses = 0;
    state.balls += 500;
    state.phase = "normal";
    state.challengeSpinsLeft = 0;
    state.chanceSpinsLeft = 0;
    stopJackpotBgm();
    playModeBgm(audioLibrary.bgmNormal);
    renderCounters();
    safePlay(audioLibrary.seHit);
    setMode("hit");
    syncPhaseDisplay();
    setAnnouncement(`確変中偶数揃い ${describeResult(outcome.result)}。通常状態へ戻ります。`);
    addHistory(`確変終了当たり ${describeResult(outcome.result)} / +500玉`);
    triggerHitVisual("medium");
    await playHitPause(audioLibrary.bgmNormalHit);
  } else {
    if (state.phase === "fever") {
      state.consecutiveMisses += 1;
      setMode("jackpot");
      playModeBgm(audioLibrary.bgmKakuhen);
      syncPhaseDisplay();
      setAnnouncement(`確変中ハズレ ${describeResult(outcome.result)}。確変継続中。`);
      addHistory(`確変中ハズレ ${describeResult(outcome.result)}`);
    } else if (state.phase === "challenge") {
      state.consecutiveMisses += 1;
      stopModeBgm();
      setMode("challenge");
      startRandomJackpotBgm();
      syncPhaseDisplay();
      setAnnouncement(`確変チャレンジ中ハズレ ${describeResult(outcome.result)}。抽選継続中。`);
      addHistory(`確変チャレンジ中ハズレ ${describeResult(outcome.result)}`);
    } else {
      state.chain = 0;
      state.consecutiveMisses += 1;
      stopJackpotBgm();
      if (state.phase === "normal") {
        playModeBgm(audioLibrary.bgmNormal);
      }
      renderCounters();
      setMode("normal");
      syncPhaseDisplay();
      setAnnouncement(`ハズレ ${describeResult(outcome.result)}。次の変動へ。`);
      addHistory(`ハズレ ${describeResult(outcome.result)} / -100玉`);
    }
  }

  renderCounters();

  setBusy(false);

  if (state.pendingGateSpins > 0) {
    runQueuedGateSpin();
    return;
  }

  if (state.autoSpinsLeft > 0) {
    state.autoSpinsLeft -= 1;
    autoBtn.textContent = `オート 残り ${state.autoSpinsLeft} 回`;
    if (state.autoSpinsLeft > 0) {
      await wait(600);
      runSpin();
      return;
    }
    autoBtn.textContent = "オート 100回";
  }
}

function resetMachine() {
  if (state.spinning) {
    return;
  }

  state.balls = INITIAL_BALLS;
  state.chain = 0;
  state.autoSpinsLeft = 0;
  state.phase = "normal";
  state.challengeSpinsLeft = 0;
  state.chanceSpinsLeft = 0;
  state.rushSpinsLeft = 0;
  state.freezeAwaitingLever = false;
  state.totalSpins = 0;
  state.pendingGateSpins = 0;
  state.leverHolding = false;
  stopBallLauncher();
  pachinkoBallsState.slice().forEach((ball) => removePachinkoBall(ball));
  renderGateStockLamps();
  stopAllAudio();
  clearEffectTimeouts();
  resetForecastOverlay();
  resetMachineSparkle();
  resetFallingImageOverlay();
  clearFallingItems();
  resetFxVideoOverlay();
  setFreezeBlackoutActive(false);
  setLeverFreezeReady(false);
  renderCounters();
  setMode("normal");
  syncPhaseDisplay();
  ensureAmbientPayout();
  playModeBgm(audioLibrary.bgmNormal);
  setAnnouncement("初期化しました。スタートで再開できます。");
  addHistory("マシンをリセット");
  autoBtn.textContent = "オート 100回";
  reelElements.forEach((reel, index) => {
    reel.classList.remove("spinning");
    setReelDisplay(reel, index + 1);
  });
}

function addBalls(amount = BALL_REFILL_AMOUNT) {
  state.balls += amount;
  renderCounters();
  setAnnouncement(`持ち玉を ${amount} 玉追加しました。`);
  addHistory(`持ち玉を ${amount} 玉追加`);
}

async function enableAudio() {
  state.audioEnabled = true;
  enableAudioBtn.textContent = "音声有効";
  enableAudioBtn.disabled = true;

  try {
    await audioLibrary.ambientPayout.play();
    audioLibrary.ambientPayout.pause();
    audioLibrary.ambientPayout.currentTime = 0;
    syncCurrentAudioState();
    setAnnouncement("音声を有効化しました。常時排出音を再生中です。");
  } catch (_) {
    state.audioEnabled = false;
    enableAudioBtn.disabled = false;
    setAnnouncement("ブラウザが音声再生を制限しています。もう一度ボタンを押してください。");
  }
}

spinBtn.addEventListener("click", () => {
  runSpin();
});

addBallsBtn.addEventListener("click", () => {
  addBalls();
});

autoBtn.addEventListener("click", () => {
  if (state.spinning) {
    return;
  }
  state.autoSpinsLeft = 100;
  autoBtn.textContent = `オート 残り ${state.autoSpinsLeft} 回`;
  runSpin();
});

stopAutoBtn.addEventListener("click", () => {
  state.autoSpinsLeft = 0;
  autoBtn.textContent = "オート 100回";
  if (!state.spinning) {
    setAnnouncement("オートを停止しました。");
  }
});

debugFreezeBtn.addEventListener("click", () => {
  triggerDebugFreeze();
});

debugFeverBtn.addEventListener("click", () => {
  triggerDebugFever();
});

debugRushBtn.addEventListener("click", () => {
  triggerDebugMusouRush();
});

debugForecastBtn.addEventListener("click", () => {
  triggerDebugForecast();
});

debugFallingBtn.addEventListener("click", () => {
  triggerDebugFalling();
});

debugEvenFlowBtn.addEventListener("click", () => {
  triggerDebugEvenFlow();
});

debugSparkleBtn.addEventListener("click", () => {
  triggerDebugSparkle();
});

pushLeverBtn.addEventListener("pointerdown", (event) => {
  state.leverHolding = true;
  if (pushLeverBtn.setPointerCapture) {
    try {
      pushLeverBtn.setPointerCapture(event.pointerId);
    } catch (_) {
      // Ignore browsers that reject capture in this state.
    }
  }
  animateLeverFrames([0, 1, 2], 55);
  if (state.phase === "freeze_wait") {
    triggerDebugFreeze().catch(() => {});
    resolveFreezeSequence().catch(() => {
      setBusy(false);
    });
    return;
  }
  startBallLauncher();
});

const releaseLever = () => {
  state.leverHolding = false;
  stopBallLauncher();
  animateLeverFrames([2, 1, 0], 55);
};

pushLeverBtn.addEventListener("pointerup", releaseLever);
pushLeverBtn.addEventListener("pointerleave", releaseLever);
pushLeverBtn.addEventListener("pointercancel", releaseLever);
pushLeverBtn.addEventListener("lostpointercapture", releaseLever);
window.addEventListener("pointerup", releaseLever);

resetBtn.addEventListener("click", () => {
  resetMachine();
});

enableAudioBtn.addEventListener("click", () => {
  enableAudio();
});

window.addEventListener("load", () => {
  renderPachinkoNails();
  renderGateStockLamps();
  renderCounters();
  setMode("normal");
  syncPhaseDisplay();
  addHistory("ブラウザ版プロトタイプ起動");
});

