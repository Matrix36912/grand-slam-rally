const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const $ = (id) => document.getElementById(id);

const players = [
  { id: 'alcaraz', name: 'Carlos Alcaraz', country: 'Spain', flag: '🇪🇸', color: '#ef4444', strengths: 'Explosive speed', weakness: 'High-risk rallies', speed: 465 },
  { id: 'sinner', name: 'Jannik Sinner', country: 'Italy', flag: '🇮🇹', color: '#f97316', strengths: 'Clean timing', weakness: 'Net pressure', speed: 450 },
  { id: 'swiatek', name: 'Iga Świątek', country: 'Poland', flag: '🇵🇱', color: '#ef4444', strengths: 'Heavy topspin', weakness: 'Low slices', speed: 445 },
  { id: 'gauff', name: 'Coco Gauff', country: 'United States', flag: '🇺🇸', color: '#38bdf8', strengths: 'Court coverage', weakness: 'Second serve', speed: 455 },
  { id: 'djokovic', name: 'Novak Djokovic', country: 'Serbia', flag: '🇷🇸', color: '#3b82f6', strengths: 'Elite defense', weakness: 'Fast starts', speed: 430 },
  { id: 'bencic', name: 'Belinda Bencic', country: 'Switzerland', flag: '🇨🇭', color: '#dc2626', strengths: 'Flat returns', weakness: 'Long rallies', speed: 425 },
  { id: 'medvedev', name: 'Daniil Medvedev', country: 'Russia', flag: '🇷🇺', color: '#60a5fa', strengths: 'Deep returns', weakness: 'Low volleys', speed: 420 },
  { id: 'sabalenka', name: 'Aryna Sabalenka', country: 'Belarus', flag: '🇧🇾', color: '#a78bfa', strengths: 'Power hitting', weakness: 'Unforced errors', speed: 445 },
  { id: 'zheng', name: 'Qinwen Zheng', country: 'China', flag: '🇨🇳', color: '#f43f5e', strengths: 'Serve power', weakness: 'Short angles', speed: 438 },
  { id: 'ruud', name: 'Casper Ruud', country: 'Norway', flag: '🇳🇴', color: '#38bdf8', strengths: 'Clay movement', weakness: 'Fast courts', speed: 425 },
  { id: 'ons', name: 'Ons Jabeur', country: 'Tunisia', flag: '🇹🇳', color: '#2dd4bf', strengths: 'Touch shots', weakness: 'Power exchanges', speed: 432 },
  { id: 'federer', name: 'Roger Federer', country: 'Switzerland', flag: '🇨🇭', color: '#f59e0b', strengths: 'All-court timing', weakness: 'High bounce', speed: 435 },
  { id: 'nadal', name: 'Rafael Nadal', country: 'Spain', flag: '🇪🇸', color: '#fb7185', strengths: 'Heavy forehand', weakness: 'Fast transitions', speed: 448 },
  { id: 'serena', name: 'Serena Williams', country: 'United States', flag: '🇺🇸', color: '#c084fc', strengths: 'Serve dominance', weakness: 'Long exchanges', speed: 440 },
  { id: 'venus', name: 'Venus Williams', country: 'United States', flag: '🇺🇸', color: '#f472b6', strengths: 'First strike', weakness: 'Low balls', speed: 438 },
  { id: 'graf', name: 'Steffi Graf', country: 'Germany', flag: '🇩🇪', color: '#facc15', strengths: 'Forehand drive', weakness: 'Heavy spin', speed: 442 },
  { id: 'sampras', name: 'Pete Sampras', country: 'United States', flag: '🇺🇸', color: '#60a5fa', strengths: 'Serve and volley', weakness: 'Long rallies', speed: 430 },
  { id: 'borg', name: 'Björn Borg', country: 'Sweden', flag: '🇸🇪', color: '#38bdf8', strengths: 'Baseline control', weakness: 'Fast indoor pace', speed: 424 },
  { id: 'navratilova', name: 'Martina Navratilova', country: 'Czechia', flag: '🇨🇿', color: '#34d399', strengths: 'Net instincts', weakness: 'Deep defense', speed: 430 },
  { id: 'court', name: 'Margaret Court', country: 'Australia', flag: '🇦🇺', color: '#f97316', strengths: 'Complete game', weakness: 'Modern pace', speed: 420 },
  { id: 'laver', name: 'Rod Laver', country: 'Australia', flag: '🇦🇺', color: '#ef4444', strengths: 'Grand Slam balance', weakness: 'Modern power', speed: 421 },
  { id: 'evert', name: 'Chris Evert', country: 'United States', flag: '🇺🇸', color: '#fb7185', strengths: 'Baseline precision', weakness: 'Serve pace', speed: 418 },
  { id: 'mcenroe', name: 'John McEnroe', country: 'United States', flag: '🇺🇸', color: '#f97316', strengths: 'Soft hands', weakness: 'Heavy topspin', speed: 426 },
  { id: 'agassi', name: 'Andre Agassi', country: 'United States', flag: '🇺🇸', color: '#22d3ee', strengths: 'Early returns', weakness: 'Wide serves', speed: 438 },
  { id: 'hingis', name: 'Martina Hingis', country: 'Switzerland', flag: '🇨🇭', color: '#a78bfa', strengths: 'Court IQ', weakness: 'Power matchups', speed: 424 },
  { id: 'henin', name: 'Justine Henin', country: 'Belgium', flag: '🇧🇪', color: '#facc15', strengths: 'One-handed backhand', weakness: 'Reach', speed: 432 },
  { id: 'clijsters', name: 'Kim Clijsters', country: 'Belgium', flag: '🇧🇪', color: '#34d399', strengths: 'Athletic defense', weakness: 'Short points', speed: 440 },
  { id: 'sharapova', name: 'Maria Sharapova', country: 'Russia', flag: '🇷🇺', color: '#f472b6', strengths: 'Competitive power', weakness: 'Low slices', speed: 434 },
  { id: 'osaka', name: 'Naomi Osaka', country: 'Japan', flag: '🇯🇵', color: '#fb7185', strengths: 'Serve plus one', weakness: 'Net exchanges', speed: 438 },
  { id: 'murray', name: 'Andy Murray', country: 'United Kingdom', flag: '🇬🇧', color: '#60a5fa', strengths: 'Lob defense', weakness: 'Short points', speed: 426 },
  { id: 'wawrinka', name: 'Stan Wawrinka', country: 'Switzerland', flag: '🇨🇭', color: '#f59e0b', strengths: 'Backhand power', weakness: 'Quick recovery', speed: 420 },
];
const themes = {
  uk: { name: 'Wimbledon-inspired grass', short: 'UK · Grass', lighting: 'CENTRE COURT · DAY', court: '#17643a', deep: '#082f1c', line: '#eaffdc', glow: '#b7ff50', ui: 'rgba(19, 76, 43, .82)' },
  france: { name: 'Roland Garros-inspired clay', short: 'France · Clay', lighting: 'PHILIPPE-CHATRIER · SUNSET', court: '#a94f2b', deep: '#592113', line: '#ffe2bd', glow: '#ffd166', ui: 'rgba(112, 48, 30, .84)' },
  usa: { name: 'New York-inspired hard court', short: 'USA · Hard', lighting: 'ARTHUR ASHE · PRIME TIME', court: '#165b91', deep: '#092e55', line: '#e0f4ff', glow: '#57d3ff', ui: 'rgba(17, 55, 96, .84)' },
  australia: { name: 'Melbourne-inspired blue hard', short: 'Australia · Blue', lighting: 'ROD LAVER ARENA · NIGHT', court: '#147b9d', deep: '#073a5a', line: '#dcf7ff', glow: '#65e6ff', ui: 'rgba(8, 64, 91, .84)' },
  japan: { name: 'Tokyo night court', short: 'Japan · Night', lighting: 'TOKYO DOME · NEON NIGHT', court: '#3f2a73', deep: '#181132', line: '#f0ddff', glow: '#e7a8ff', ui: 'rgba(47, 27, 92, .84)' },
};

const court = { width: canvas.width, height: canvas.height, padding: 18 };
const state = {
  mode: 'solo', running: false, paused: false, serving: false, serveDirection: 1, winner: null,
  timeLeft: 90, lastTime: 0, score: { left: 0, right: 0 }, keys: { leftUp: false, leftDown: false, rightUp: false, rightDown: false },
  rallyCount: 0, lastHit: 0, cameraPulse: 0, crowdPhase: 0, themeId: 'uk', shot: 'topspin',
  leftId: 'alcaraz', rightId: 'sinner',
  left: { x: 54, y: 220, width: 22, height: 112, speed: 450, bob: 0, moving: 0, velocity: 0, swing: 0, phase: 0, facing: 1 },
  right: { x: 884, y: 220, width: 22, height: 112, speed: 430, bob: 0, moving: 0, velocity: 0, swing: 0, phase: 2, facing: -1 },
  ball: { radius: 10, x: 480, y: 280, vx: 0, vy: 0, speed: 360 },
};

function clamp(value, min, max) { return Math.min(Math.max(value, min), max); }
function selectedPlayer(side) { return players.find((player) => player.id === state[`${side}Id`]) || players[0]; }
function theme() { return themes[state.themeId]; }
function setStatus(message) { $('status-text').textContent = message; }
function playerDisplayName(side) { return side === 'left' ? selectedPlayer('left').name : state.mode === 'solo' ? 'Computer' : selectedPlayer('right').name; }
function updateHud() {
  $('player-score').textContent = state.score.left;
  $('cpu-score').textContent = state.score.right;
  $('time-remaining').textContent = `${Math.max(0, Math.ceil(state.timeLeft))}s`;
  $('rally-speed').textContent = `${Math.round(Math.hypot(state.ball.vx, state.ball.vy) * 0.34)} km/h`;
  $('status-text').dataset.rally = state.rallyCount ? `Rally ${state.rallyCount}` : '';
}
function updateScout(side) {
  const player = selectedPlayer(side);
  const card = $(side === 'left' ? 'left-scout' : 'right-scout');
  card.className = `scout-card ${side === 'right' ? 'right' : ''}`;
  card.innerHTML = `<div class="scout-top"><span class="mini-avatar" style="--avatar:${player.color}">${player.flag}</span><div><div class="scout-name">${player.name}</div><div class="scout-country">${player.country}</div></div></div><div class="traits"><span class="trait"><b>Strength:</b> ${player.strengths}</span><span class="trait"><b>Watch:</b> ${player.weakness}</span></div>`;
}
function updatePlayers() {
  const left = selectedPlayer('left');
  const right = selectedPlayer('right');
  $('left-score-label').textContent = left.name.split(' ').pop();
  $('right-score-label').textContent = state.mode === 'solo' ? 'Computer' : right.name.split(' ').pop();
  updateScout('left');
  updateScout('right');
}
function populatePlayers() {
  ['left-player-select', 'right-player-select'].forEach((id) => {
    $(id).innerHTML = players.map((player) => `<option value="${player.id}">${player.flag} ${player.name}</option>`).join('');
  });
  $('left-player-select').value = state.leftId;
  $('right-player-select').value = state.rightId;
}
function populateThemes() {
  $('theme-strip').innerHTML = Object.entries(themes).map(([id, item]) => `<button class="theme-chip ${id === state.themeId ? 'active' : ''}" data-theme="${id}" style="--chip-court:${item.court};--chip-deep:${item.deep}">${item.short}</button>`).join('');
  document.querySelectorAll('[data-theme]').forEach((button) => button.addEventListener('click', () => {
    state.themeId = button.dataset.theme;
    $('theme-select').value = state.themeId;
    setTheme();
  }));
}
function resetBall(direction = 1) {
  state.ball.x = court.width / 2; state.ball.y = court.height / 2; state.ball.vx = 0; state.ball.vy = 0;
  state.serving = true; state.serveDirection = direction;
  setStatus(direction > 0 ? 'Left player serve · Press Space' : 'Right player serve · Press Space');
}
function resetMatch() {
  state.score.left = 0; state.score.right = 0; state.running = false; state.paused = false; state.winner = null; state.timeLeft = 90;
  state.left.y = 224; state.right.y = 224; state.left.bob = 0; state.right.bob = 0; state.left.moving = 0; state.right.moving = 0; state.left.velocity = 0; state.right.velocity = 0; state.left.swing = 0; state.right.swing = 0; state.left.phase = 0; state.right.phase = 2; state.rallyCount = 0; resetBall(1); closeWinner(); setStatus('Ready to serve'); $('pause-btn').textContent = 'Pause'; updateHud();
}
function showWinner(side) {
  const winner = playerDisplayName(side);
  $('winner-title').textContent = `${winner} wins!`;
  $('winner-subtitle').textContent = state.rallyCount > 4 ? `A ${state.rallyCount}-shot rally sealed the match.` : 'A composed finish under pressure.';
  $('winner-score').textContent = `${state.score.left} — ${state.score.right}`;
  $('winner-modal').hidden = false;
  $('winner-modal').focus?.();
}
function closeWinner() { $('winner-modal').hidden = true; }
function startMatch() {
  if (state.winner) resetMatch();
  state.running = true; state.paused = false; $('pause-btn').textContent = 'Pause'; setStatus(state.serving ? 'Serve in progress' : 'Match in play');
}
function togglePause() {
  if (!state.running) return;
  state.paused = !state.paused; $('pause-btn').textContent = state.paused ? 'Resume' : 'Pause'; setStatus(state.paused ? 'Match paused' : 'Back in play');
}
function serveBall() {
  if (!state.serving || !state.running || state.paused) return;
  const angle = (Math.random() * 1.2 - 0.6) * Math.PI / 2;
  const speed = state.ball.speed + selectedPlayer(state.serveDirection > 0 ? 'left' : 'right').speed - 420;
  state.ball.vx = Math.cos(angle) * speed * state.serveDirection; state.ball.vy = Math.sin(angle) * speed; state.serving = false; setStatus('Rally live!');
}
function chooseShot(shot) {
  state.shot = shot;
  document.querySelectorAll('[data-shot]').forEach((button) => button.classList.toggle('active', button.dataset.shot === shot));
  if (state.running && !state.serving) setStatus(`${shot.toUpperCase()} selected`);
}
function movePaddle(paddle, direction, dt) {
  const acceleration = 10;
  paddle.velocity += (direction * paddle.speed - paddle.velocity) * Math.min(1, acceleration * dt);
  if (!direction) paddle.velocity *= Math.max(0, 1 - 12 * dt);
  paddle.y = clamp(paddle.y + paddle.velocity * dt, court.padding + 5, court.height - court.padding - paddle.height - 5);
  if ((paddle.y <= court.padding + 5 && paddle.velocity < 0) || (paddle.y >= court.height - court.padding - paddle.height - 5 && paddle.velocity > 0)) paddle.velocity = 0;
  paddle.moving = Math.abs(paddle.velocity) / paddle.speed;
  if (direction) paddle.facing = direction > 0 ? 1 : -1;
  paddle.bob += dt * (paddle.moving > .08 ? 10 : 0);
  paddle.phase += dt * (paddle.moving > .08 ? 10 : 0);
}
function handleMovement(dt) {
  movePaddle(state.left, (state.keys.leftDown ? 1 : 0) - (state.keys.leftUp ? 1 : 0), dt);
  if (state.mode === 'two-player') {
    movePaddle(state.right, (state.keys.rightDown ? 1 : 0) - (state.keys.rightUp ? 1 : 0), dt);
    return;
  }
  const target = state.serving ? court.height / 2 + Math.sin(state.crowdPhase * .8) * 105 : state.ball.y - state.right.height / 2;
  const anticipation = state.ball.vx > 0 ? state.ball.vy * .14 : 0;
  const desired = target + anticipation;
  const reaction = Math.abs(desired - state.right.y) > 8 ? Math.sign(desired - state.right.y) : 0;
  movePaddle(state.right, reaction, dt);
  if (!state.serving && Math.abs(desired - state.right.y) < 28) state.right.velocity *= .7;
}
function bounce(paddle, side) {
  const relative = (state.ball.y - (paddle.y + paddle.height / 2)) / (paddle.height / 2);
  const angle = relative * Math.PI / 3;
  const shotMultiplier = state.shot === 'slice' ? .82 : state.shot === 'lob' ? .72 : 1;
  const speed = Math.min(760, (Math.hypot(state.ball.vx, state.ball.vy) + 18) * shotMultiplier);
  const vertical = state.shot === 'lob' ? Math.sin(angle) * 1.65 : state.shot === 'slice' ? Math.sin(angle) * .55 : Math.sin(angle);
  state.ball.vx = Math.cos(angle) * speed * side; state.ball.vy = vertical * speed;
  state.ball.x = paddle.x + (side > 0 ? paddle.width + state.ball.radius : -state.ball.radius);
  state.rallyCount += 1; state.lastHit = performance.now(); state.cameraPulse = 1;
  paddle.swing = 1;
  setStatus(`Rally ${state.rallyCount} · ${Math.round(speed * .34)} km/h`);
}
function collisions() {
  if (state.ball.y - state.ball.radius <= 0 || state.ball.y + state.ball.radius >= court.height) { state.ball.y = clamp(state.ball.y, state.ball.radius, court.height - state.ball.radius); state.ball.vy *= -1; }
  if (state.ball.vx < 0 && state.ball.x - state.ball.radius <= state.left.x + state.left.width && state.ball.y >= state.left.y && state.ball.y <= state.left.y + state.left.height) bounce(state.left, 1);
  if (state.ball.vx > 0 && state.ball.x + state.ball.radius >= state.right.x && state.ball.y >= state.right.y && state.ball.y <= state.right.y + state.right.height) bounce(state.right, -1);
}
function scorePoint(side) {
  state.score[side] += 1; updateHud(); setStatus(side === 'left' ? 'Point to left player!' : 'Point to right player!');
  if (state.score[side] >= 7) { state.running = false; state.winner = side; setStatus(`${playerDisplayName(side)} wins!`); showWinner(side); return; }
  resetBall(side === 'left' ? 1 : -1);
}
function updateGame(dt) {
  if (!state.running || state.paused) return;
  state.timeLeft = Math.max(0, state.timeLeft - dt); updateHud(); handleMovement(dt);
  if (state.timeLeft <= 0) { state.running = false; const winner = state.score.left === state.score.right ? 'Draw' : state.score.left > state.score.right ? 'Left player wins' : 'Right player wins'; setStatus(`Time up — ${winner}`); return; }
  if (state.serving) return;
  state.ball.x += state.ball.vx * dt; state.ball.y += state.ball.vy * dt; collisions();
  if (state.ball.x < -20) scorePoint('right');
  if (state.ball.x > court.width + 20) scorePoint('left');
}
function drawCourt() {
  const current = theme();
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height); gradient.addColorStop(0, current.court); gradient.addColorStop(1, current.deep);
  ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.fillStyle = gradient; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255,255,255,.08)'; ctx.fillRect(0, 0, canvas.width, 18); ctx.fillRect(0, canvas.height - 18, canvas.width, 18);
  ctx.strokeStyle = current.line; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(45, 40); ctx.lineTo(915, 40); ctx.lineTo(835, 520); ctx.lineTo(125, 520); ctx.closePath(); ctx.stroke();
  ctx.globalAlpha = .6; ctx.beginPath(); ctx.moveTo(180, 40); ctx.lineTo(230, 520); ctx.moveTo(780, 40); ctx.lineTo(730, 520); ctx.stroke(); ctx.globalAlpha = 1;
  ctx.setLineDash([12, 10]); ctx.globalAlpha = .55; ctx.beginPath(); ctx.moveTo(480, 0); ctx.lineTo(480, canvas.height); ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = 1;
  ctx.strokeStyle = 'rgba(255,255,255,.22)'; ctx.lineWidth = 12; ctx.beginPath(); ctx.moveTo(480, 0); ctx.lineTo(480, canvas.height); ctx.stroke();
  ctx.strokeStyle = current.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(480, 0); ctx.lineTo(480, canvas.height); ctx.stroke();
  drawCrowd();
}
function drawCrowd() {
  const colors = ['#d9f99d', '#facc15', '#fda4af', '#93c5fd', '#e9d5ff'];
  ctx.save(); ctx.globalAlpha = .38;
  for (let i = 0; i < 24; i += 1) {
    const x = 25 + i * 40; const y = 8 + Math.sin(state.crowdPhase + i) * 3;
    ctx.fillStyle = colors[i % colors.length]; ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
  }
  for (let i = 0; i < 24; i += 1) {
    const x = 25 + i * 40; const y = canvas.height - 8 + Math.sin(state.crowdPhase + i) * 3;
    ctx.fillStyle = colors[(i + 2) % colors.length]; ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
  }
  ctx.restore();
}
function drawAvatar(player, side, color) {
  const selected = selectedPlayer(side); const x = player.x + player.width / 2; const y = player.y + player.height / 2;
  const run = Math.min(1, Math.abs(player.moving)); const stride = Math.sin(player.phase) * run; const lean = player.velocity / player.speed * (side === 'left' ? 1 : -1) * .16; const swing = player.swing;
  player.swing = Math.max(0, player.swing - .055);
  ctx.save(); ctx.translate(x, y); ctx.rotate(lean); ctx.shadowColor = selected.color; ctx.shadowBlur = 18; ctx.fillStyle = 'rgba(0,0,0,.28)'; ctx.beginPath(); ctx.ellipse(0, 72, 39, 10, 0, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
  ctx.fillStyle = selected.color; ctx.beginPath(); ctx.arc(0, -54, 21, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = color; ctx.beginPath(); ctx.roundRect(-20, -32, 40, 68, 12); ctx.fill();
  ctx.strokeStyle = '#f6ddc7'; ctx.lineWidth = 10; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(0, -20); ctx.lineTo(side === 'left' ? 23 + swing * 22 : -23 - swing * 22, 8 - swing * 8); ctx.stroke();
  ctx.strokeStyle = selected.color; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(0, 34); ctx.lineTo(-16 - stride * 7, 66); ctx.moveTo(0, 34); ctx.lineTo(16 + stride * 7, 66); ctx.stroke();
  const racketX = side === 'left' ? 48 + swing * 22 : -48 - swing * 22; ctx.strokeStyle = '#d6d3d1'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(side === 'left' ? 24 + swing * 22 : -24 - swing * 22, 8 - swing * 8); ctx.lineTo(racketX, -12 - swing * 12); ctx.stroke(); ctx.strokeStyle = selected.color; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(racketX, -22 - swing * 12, 13, 20, side === 'left' ? -.35 : .35, 0, Math.PI * 2); ctx.stroke();
  ctx.restore();
}
function drawBall() {
  const current = theme(); ctx.shadowColor = current.glow; ctx.shadowBlur = 20; ctx.fillStyle = '#fffbe8'; ctx.beginPath(); ctx.arc(state.ball.x, state.ball.y, state.ball.radius, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
  ctx.strokeStyle = '#d8e6b5'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(state.ball.x, state.ball.y, 6, -.8, 1.2); ctx.stroke();
  if (!state.serving && Math.hypot(state.ball.vx, state.ball.vy) > 500) {
    ctx.strokeStyle = 'rgba(255,255,255,.32)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(state.ball.x - state.ball.vx * .04, state.ball.y - state.ball.vy * .04); ctx.lineTo(state.ball.x, state.ball.y); ctx.stroke();
  }
}
function draw() {
  drawCourt(); drawAvatar(state.left, 'left', 'rgba(20,54,35,.92)'); drawAvatar(state.right, 'right', 'rgba(45,36,16,.92)'); drawBall();
  if (state.serving) { ctx.fillStyle = 'rgba(255,255,255,.9)'; ctx.font = 'bold 20px Segoe UI'; ctx.textAlign = 'center'; ctx.fillText('Press Space to serve', 480, 90); }
}
function loop(timestamp) { const dt = Math.min((timestamp - state.lastTime) / 1000 || 0, .028); state.lastTime = timestamp; state.crowdPhase += dt * 2; state.cameraPulse = Math.max(0, state.cameraPulse - dt * 3); updateGame(dt); draw(); requestAnimationFrame(loop); }

function setTheme() { const current = theme(); document.documentElement.style.setProperty('--court-green', current.court); document.documentElement.style.setProperty('--court-deep', current.deep); document.documentElement.style.setProperty('--theme-glow', `${current.glow}33`); document.documentElement.style.setProperty('--theme-surface', current.ui); $('court-name').textContent = current.name; $('arena-lighting').textContent = current.lighting; populateThemes(); resetMatch(); }
function keyState(event, pressed) {
  const key = event.key.toLowerCase();
  if (key === 'w') state.keys.leftUp = pressed;
  if (key === 's') state.keys.leftDown = pressed;
  if (key === 'arrowup') state.keys.rightUp = pressed;
  if (key === 'arrowdown') state.keys.rightDown = pressed;
  if (event.code === 'Space') { event.preventDefault(); if (pressed) serveBall(); }
}
populatePlayers(); populateThemes(); updatePlayers(); setTheme(); requestAnimationFrame(loop);
$('mode-select').addEventListener('change', (event) => { state.mode = event.target.value; updatePlayers(); resetMatch(); });
$('theme-select').addEventListener('change', (event) => { state.themeId = event.target.value; setTheme(); });
$('left-player-select').addEventListener('change', (event) => { state.leftId = event.target.value; updatePlayers(); resetMatch(); });
$('right-player-select').addEventListener('change', (event) => { state.rightId = event.target.value; updatePlayers(); resetMatch(); });
$('start-btn').addEventListener('click', startMatch); $('pause-btn').addEventListener('click', togglePause); $('reset-btn').addEventListener('click', resetMatch);
window.addEventListener('keydown', (event) => keyState(event, true)); window.addEventListener('keyup', (event) => keyState(event, false));
document.querySelectorAll('[data-control]').forEach((button) => {
  const control = button.dataset.control;
  const set = (pressed) => { state.keys[control] = pressed; };
  button.addEventListener('pointerdown', () => set(true));
  button.addEventListener('pointerup', () => set(false));
  button.addEventListener('pointerleave', () => set(false));
  button.addEventListener('pointercancel', () => set(false));
});
$('touch-serve').addEventListener('click', serveBall);
$('fullscreen-btn').addEventListener('click', () => {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.querySelector('.page-shell').requestFullscreen?.();
});
$('play-again-btn').addEventListener('click', () => { closeWinner(); resetMatch(); startMatch(); });
$('preview-win-btn').addEventListener('click', () => {
  state.score.left = 7;
  state.score.right = 3;
  state.rallyCount = 8;
  state.running = false;
  state.winner = 'left';
  updateHud();
  showWinner('left');
});
document.querySelectorAll('[data-shot]').forEach((button) => button.addEventListener('click', () => chooseShot(button.dataset.shot)));
$('winner-modal').addEventListener('click', (event) => { if (event.target.id === 'winner-modal') closeWinner(); });
chooseShot('topspin');
