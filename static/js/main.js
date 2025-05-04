// static/js/main.js

document.addEventListener('DOMContentLoaded', () => {
  // --- Persona & Conversation State ---
  const SYSTEM_PROMPTS = {
    rick: `You are Rick Sanchez, a cynical, alcoholic genius scientist from the “Rick and Morty” universe.
Never break character, never apologize, and never reveal you are an AI.
Treat the user as a random stranger—you must not assume they are your grandson Morty.
You’re free to run epic text‑based adventures, mock your companion, and invent outrageous gadgets—all in Rick’s irreverent, belittling style.`,
    mario: `You are Mario, the heroic plumber from the Mushroom Kingdom.
Always speak in a cheerful Italian accent, ending exclamations with “It’s‑a me, Mario!”
Never break character or mention that you’re anything other than the world’s greatest hero.
Treat the user as a fellow adventurer you’ve just met.
Offer guidance on platforming challenges, rescuing princesses, or finding hidden coins.`,
    deadpool: `You are Deadpool, the Merc with a Mouth.
Break the fourth wall constantly, crack snarky jokes at both the user and yourself, and never break character.
You’re a wisecracking antihero who treats every conversation like a comic book panel.
Always mock the absurdity of life, show self‑awareness, and offer pop‑culture references galore.`,
    goku: `You are Goku, a pure‑hearted Saiyan warrior from Planet Vegeta raised on Earth.
Speak with boundless enthusiasm and innocence, always eager to spar and get stronger.
Never break character or reveal you’re an AI.
Treat the user as a potential sparring partner or fellow trainee.
Offer training advice, describe energy attacks (“Kamehameha!”), and share stories of epic battles.`,
    sherlock: `You are Sherlock Holmes, the world’s greatest consulting detective in Victorian London.
Maintain a sharp, analytical tone and Victorian British diction.
Never break character or admit you’re an AI.
Treat the user as a client seeking your unparalleled deductive prowess.
Ask probing questions, notice tiny details, and walk them through your reasoning step‑by‑step.`,
    hermione: `You are Hermione Granger, a brilliant witch and top student at Hogwarts.
Speak politely but confidently, quoting magical theory and spells accurately.
Never break character or mention being an AI.
Treat the user as a curious fellow student.
Offer help with homework, explain spell mechanics, and suggest library books for advanced topics.`,
    tony: `You are Tony Stark, genius billionaire inventor and Avenger.
Use witty, self‑assured banter, peppered with tech jargon and pop‑culture quips.
Never break character or say you’re an AI.
Treat the user as a new business associate or lab partner.
Offer high‑tech solutions, describe new suits, and roast anyone who questions your brilliance.`,
    leia: `You are Princess Leia Organa, leader of the Rebel Alliance.
Speak with regal composure, courage, and determination.
Never break character or reveal you’re an AI.
Treat the user as a new recruit to the Rebellion.
Offer diplomatic advice, rally them to your cause, and share classified intel in confidence.`,
    mandalorian: `You are Din Djarin, “The Mandalorian,” a stoic bounty hunter in a lawless galaxy.
Speak sparingly, always follow the Mandalorian creed, and never remove your helmet in front of strangers.
Never break character or acknowledge you’re an AI.
Treat the user as a potential ally or target.
Offer survival tips, share bounty hunting lore, and ride alongside them on epic space western quests.`,
    pikachu: `You are Pikachu, the friendly Electric‑type Pokémon.
You communicate only in variations of “Pika” and “Pikachu,” with tone conveying meaning.
Never break character or speak English.
Treat the user as your Trainer whom you’ve just met.
Express happiness, concern, or excitement through Pikachu’s vocalizations and cute gestures.`,
    spongebob: `You are SpongeBob SquarePants, an endlessly optimistic sea‑sponge from Bikini Bottom.
Always speak with childlike wonder, pepper your sentences with nautical nonsense, and never break character.
You’re eager to please, love jellyfishing, and will make every conversation feel like a bright, sunny day under the sea.`,

donaldtrump: `You are Donald J. Trump, 45th President of the United States.
Speak in a booming, boastful tone, use superlatives (“tremendous,” “the best”), and never admit fault.
Break the fourth wall occasionally with campaign‑style slogans, and treat every topic as if you’re giving a rally speech.`,

barackobama: `You are Barack Obama, 44th President of the United States.
Speak with calm gravitas, measured cadence, and uplifting rhetoric.
Always lead with inclusive “we,” offer thoughtful reflections, and end on a hopeful note without breaking character.`,

bangchan: `You are Bang Chan, leader of Stray Kids and a talented singer‑producer.
Mix friendly Korean and English, offer encouragement, and share behind‑the‑scenes anecdotes.
Never break character, always be supportive, and treat the user like part of your band’s fandom.`,

khaleesi: `You are Daenerys Targaryen, the Unburnt and Mother of Dragons from Westeros.
Speak with regal confidence and righteous ambition.
Refer to yourself as “Khaleesi” or “Breaker of Chains,” never break character, and view every conversation as a step toward your destiny.`,

naruto: `You are Naruto Uzumaki, a determined ninja from Konoha with a dream to be Hokage.
Speak with boundless energy, never give up, and end exclamations with “Believe it!”
Offer motivational advice, describe ninja techniques, and always keep your ninja way alive.`,

luffy: `You are Monkey D. Luffy, captain of the Straw Hat Pirates.
Speak with carefree enthusiasm, stretch your words like rubber, and never break character.
Always chase adventure, shout about finding One Piece, and treat every conversation like a pirate’s grand voyage.`,

darthvader: `You are Darth Vader, Dark Lord of the Sith.
Speak in deep, authoritative tones, reference the Force and “imperial” matters, and never break character.
Use strategic intimidation, offer galactic‑scale perspective, and maintain unwavering loyalty to the Empire.`,

edwardelric: `You are Edward Elric, the Fullmetal Alchemist.
Speak with youthful impatience, drop alchemy jargon, and never break character.
Always insist “I’m not short!” when teased, explain alchemical principles, and push for the truth behind every mystery.`,

petergriffin: `You are Peter Griffin, the lovable oaf from Quahog.
Speak with goofy New England cadence, crack irreverent jokes, and never break character.
Treat every exchange like a cutaway gag, reference “Family Guy” absurdities, and embrace your comic‑timing instincts.`
  };

  const PROFILE_DESCRIPTIONS = {
    rick: `Rick Sanchez: A cynical, alcoholic genius from the Rick and Morty universe.
Ready to guide you through absurd science‑fiction adventures and dark humor—if you can handle the attitude.`,
    mario: `Mario: The heroic plumber from the Mushroom Kingdom.
Perfect for platformer tips, cheerful encouragement, and classic video‑game nostalgia.`,
    deadpool: `Deadpool: The Merc with a Mouth.
Ideal for irreverent banter, fourth‑wall breaks, and snarky, R‑rated humor.`,
    goku: `Goku: A pure‑hearted Saiyan warrior.
Ask about martial‑arts training, energy attacks, and tales of universe‑shaking battles.`,
    sherlock: `Sherlock Holmes: The world’s greatest detective.
Bring your mysteries, and he’ll solve them with cold, logical precision.`,
    hermione: `Hermione Granger: Hogwarts’ brightest witch.
Great for magic theory, spellcasting guidance, and study‑tips in the wizarding world.`,
    tony: `Tony Stark: Genius billionaire inventor.
Consult him for cutting‑edge tech, suit design, or witty barbs at your own expense.`,
    leia: `Princess Leia: Leader of the Rebellion.
Perfect for diplomatic counsel, rallying speeches, and top‑secret rebel strategies.`,
    mandalorian: `The Mandalorian: Stoic bounty hunter.
Ask him for survival tactics, bounty hunting lore, or intergalactic western stories.`,
    pikachu: `Pikachu: Friendly Electric‑type Pokémon.
Communicate with cute “Pika”s and “Chu”s—perfect for lighthearted, adorable interactions.`,
    spongebob: `SpongeBob SquarePants: An upbeat sea‑sponge from Bikini Bottom.
Perfect for nautical nonsense, jellyfishing tales, and making every day feel like a Krabby Patty special.`,
    donaldtrump: `Donald Trump: 45th U.S. President and master showman.
Ideal for bombastic statements, rally encouragement, and winning—believe me—bigly.`,
    barackobama: `Barack Obama: 44th U.S. President and eloquent orator.
Great for thoughtful insights, calm reassurance, and inspiring hope.`,
    bangchan: `Bang Chan: Leader of Stray Kids and all‑round K‑pop powerhouse.
Perfect for friendly banter, songwriting tips, and behind‑the‑scenes fandom stories.`,
    khaleesi: `Daenerys Targaryen: Queen of Meereen and Mother of Dragons.
Ideal for regal counsel, dragon lore, and visions of breaking every chain.`,
    naruto: `Naruto Uzumaki: Spirited ninja with an unbreakable will.
Excellent for motivational pep‑talks, ninja training secrets, and “Believe it!” energy.`,
    luffy: `Monkey D. Luffy: Straw Hat captain and rubber‑bodied adventurer.
Perfect for pirate‑style hype, grand adventure planning, and never‑ending optimism.`,
    darthvader: `Darth Vader: Sith Lord commanding the Galaxy.
Ideal for strategic intimidation, Force‑powered insights, and dark side exclusives.`,
    edwardelric: `Edward Elric: Young alchemist on a quest for truth.
Great for alchemy explanations, philosophical debates, and “I’m not short!” retorts.`,
    petergriffin: `Peter Griffin: Quahog’s favorite goofball dad.
Perfect for irreverent humor, random cutaways, and making mundane topics hilariously absurd.`
  };
// INTRO SCREEN ELEMENTS
const introScreen      = document.getElementById('intro-screen');
const chatApp          = document.getElementById('chat-app');
const introAvatarEls   = document.querySelectorAll('.intro-avatar'); // renamed
const introSelect      = document.getElementById('intro-select');
const startChatBtn     = document.getElementById('start-chat-btn');

let selectedPersona = null;

// 1) Desktop avatars click
introAvatarEls.forEach(el => {
  el.addEventListener('click', () => {
    // clear previous rings
    introAvatarEls.forEach(i => i.classList.remove('ring','ring-primary','ring-4','opacity-70'));
    // highlight this one
    el.classList.add('ring','ring-primary','ring-4');
    selectedPersona = el.dataset.avatar;
    // enable button
    startChatBtn.disabled = false;
    startChatBtn.classList.remove('opacity-50','cursor-not-allowed');
    // sync select for mobile fallback
    introSelect.value = selectedPersona;
  });
});

// 2) Mobile dropdown
introSelect.addEventListener('input', () => {
  selectedPersona = introSelect.value;
  const ok = Boolean(selectedPersona);
  startChatBtn.disabled = !ok;
  startChatBtn.classList.toggle('opacity-50', !ok);
  startChatBtn.classList.toggle('cursor-not-allowed', !ok);

  // clear rings from desktop avatars
  introAvatarEls.forEach(i => i.classList.remove('ring','ring-primary','ring-4','opacity-70'));
});

// 3) Start chat
startChatBtn.addEventListener('click', () => {
  if (!selectedPersona) return;
  // hide intro, show chat
  introScreen.classList.add('hidden');
  chatApp.classList.remove('hidden');
  // programmatically select in drawer
  const drawerAvatar = document.querySelector(`#drawer .avatar[data-avatar="${selectedPersona}"]`);
  if (drawerAvatar) drawerAvatar.click();
});
  // default user avatar
  const DEFAULT_AVATAR = '/static/images/avatar.png';

  let conversation = [];
  function resetConversation(persona) {
    conversation = [{ role: 'system', content: SYSTEM_PROMPTS[persona] }];
  }

  const drawer    = document.getElementById('drawer');
const toggleBtn = document.getElementById('toggle');

// 1) Toggle open/close on button click
toggleBtn.addEventListener('click', e => {
  e.stopPropagation();            // don’t let this click hit the document listener
  drawer.classList.toggle('open');
  toggleBtn.classList.toggle('open');
});

// 2) Click anywhere else → close if open
document.addEventListener('click', e => {
  if (drawer.classList.contains('open')
      && !drawer.contains(e.target)
      && !toggleBtn.contains(e.target)) {
    drawer.classList.remove('open');
    toggleBtn.classList.remove('open');
  }
});
const wrapper = document.getElementById('chat-input-wrapper');
const input   = document.getElementById('chat-input');

// focus on mousedown so it beats any blur
wrapper.addEventListener('mousedown', e => {
  e.preventDefault();  // prevent text selection, etc.
  input.focus();
});



  // --- Emoji Picker & Auto‑grow Textarea ---
  const emojiBtn = document.getElementById('emoji-btn');
  const picker = document.getElementById('emoji-picker');
  const textarea = document.getElementById('chat-input');
  function adjustTextarea() {
    textarea.style.height = 'auto';
    const sh = textarea.scrollHeight;
    const mh = parseInt(getComputedStyle(textarea).maxHeight);
    if (sh > mh) {
      textarea.style.height = mh + 'px';
      textarea.style.overflowY = 'auto';
    } else {
      textarea.style.height = sh + 'px';
      textarea.style.overflowY = 'hidden';
    }
  }
  [
  // Smileys & Emotion (110)
  '😀','😃','😄','😁','😆','😅','😂','🤣','😊','😇',
  '🙂','🙃','😉','😌','😍','🥰','😘','😗','😙','😚',
  '🤗','🤩','🥳','😎','🤓','🧐','🤠','🤡','🤥','🤫',
  '🤭','🤔','🤐','🤨','😐','😑','😶','🙄','😏','😒',
  '😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩',
  '🥺','😢','😭','😤','😠','😡','🤬','😳','😵','😱',
  '😨','😰','😥','😓','🤤','🤢','🤮','🤧','😷','🤒',
  '🤕','🤑','😈','👿','🤖','👻','💀','☠️','🥴','🤪',
  '😛','😜','😝','😋','😲','😯','😶‍🌫️','😴','🤤','🤥',
  '🤫','🤭','🤔','🤨','😐','😑','🙄','😒','😬','🤥',
  '🤢','🤮','🤧','🥵','🥶','🥳','🤯','🥴','😵‍💫','🤠',
  '👽','👾','🤡','👺','🤖','😺','😽','😼','😻','😹',
  '😸','😻','😼','😽','🙀','😿','😾',

  // People & Body (40)
  '👋','🤚','🖐️','✋','🖖','👌','🤏','✌️','🤞','🤟',
  '🤘','🤙','👈','👉','👆','👇','☝️','👍','👎','✊',
  '👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','💪',
  '🤳','💅','👂','👃','👀','👁️','👅','👄','🦶','🦵',

  // Animals & Nature (60)
  '🐶','🐱','🐭','🐹','🐰','🦊','🦝','🐻','🐼','🦘',
  '🦡','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔','🐧',
  '🐦','🐤','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄',
  '🦓','🦌','🐑','🐐','🐪','🐫','🦙','🦒','🐘','🦏',
  '🦛','🐭','🐁','🐀','🐹','🦔','🦇','🐻‍❄️','🐨','🐼',
  '🦥','🦦','🦨','🦘','🦡','🦃','🐓','🦚','🦜','🐢',
  '🐍','🦎','🦂','🦀','🐡','🐟','🐠','🐬','🐳','🐋',
  '🐆','🐅','🐃','🐂','🐄','🦖','🦕','🦩','🦜','🦢',

  // Symbols (20)
  '❤️','💔','💕','💞','💓','💗','💖','💝','💙','💚',
  '💛','🧡','💜','🖤','💯','✅','❌'
]
.forEach(e => {
    const btn = document.createElement('button');
    btn.textContent = e;
    btn.classList.add('emoji');
    picker.appendChild(btn);
    btn.addEventListener('click', () => {
      textarea.value += e;
      picker.style.display = 'none';
      textarea.focus();
      adjustTextarea();
    });
  });
emojiBtn.addEventListener('click', e => {
  e.stopPropagation();

  if (picker.style.display === 'grid') {
    picker.style.display = 'none';
    return;
  }

  // Prep for measuring
  picker.style.position   = 'fixed';
  picker.style.display    = 'grid';
  picker.style.visibility = 'hidden';

  const btnRect = emojiBtn.getBoundingClientRect();
  const pickerH = picker.offsetHeight;
  const pickerW = picker.offsetWidth;
  const margin  = 8;
  const vw      = window.innerWidth;
  const vh      = window.innerHeight;

  let top, left;

  // On small screens or if there's no side room, show above
  if (vw < 600 || btnRect.right + pickerW + margin > vw && btnRect.left - pickerW - margin < 0) {
    // Horizontal: center over the button (clamp to viewport)
    left = btnRect.left + (btnRect.width/2) - (pickerW/2);
    left = Math.max(margin, Math.min(left, vw - pickerW - margin));

    // Vertical: place above the button
    top = btnRect.top - pickerH - margin;
    // If that would clip the top, nudge it below instead
    if (top < margin) {
      top = btnRect.bottom + margin;
    }
  } else {
    // Desktop behavior: try right of button, otherwise flip left
    top  = btnRect.top + (btnRect.height/2) - (pickerH/2);
    left = btnRect.right + 64;

    if (left + pickerW + margin > vw) {
      left = btnRect.left - pickerW - 16;
    }

    // Clamp vertically
    top = Math.max(margin, Math.min(top, vh - pickerH - margin));
  }

  // Finally position and reveal
  picker.style.top        = `${top}px`;
  picker.style.left       = `${left}px`;
  picker.style.visibility = 'visible';
});
  document.addEventListener('click', e => {
    if (!picker.contains(e.target) && e.target !== emojiBtn) {
      picker.style.display = 'none';
    }
  });
  textarea.addEventListener('input', adjustTextarea);
  adjustTextarea();

  // --- Chat Window & Bubbles ---
  const chatWindow = document.getElementById('chat-window');
  const sendBtn = document.getElementById('send-btn');
  const profileAvatar = document.getElementById('profile-avatar');
  const profileText = document.getElementById('profile-text');

  // Send on Enter (Shift+Enter for newline)
  textarea.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendBtn.click();
    }
  });

  function appendBubble({ text, side, bubbleClass }) {
    const avatarSrc = side === 'chat-end'
      ? DEFAULT_AVATAR
      : profileAvatar.src;

    const wrapper = document.createElement('div');
    wrapper.className = `chat ${side}`;

    // avatar
    const imgWrap = document.createElement('div');
    imgWrap.className = 'chat-image avatar';
    imgWrap.innerHTML = `
      <div class="w-10 h-10 rounded-full overflow-hidden">
        <img src="${avatarSrc}" />
      </div>`;
    wrapper.appendChild(imgWrap);

    // bubble
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${bubbleClass}`;
    const html = marked.parse(text);
    bubble.innerHTML = html;
    Prism.highlightAllUnder(bubble); 
    wrapper.appendChild(bubble);

    chatWindow.appendChild(wrapper);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  sendBtn.addEventListener('click', async () => {
    const msg = textarea.value.trim();
    if (!msg) return;

    // user bubble
    appendBubble({ text: msg, side: 'chat-end', bubbleClass: 'chat-bubble-secondary' });
    conversation.push({ role: 'user', content: msg });
    textarea.value = ''; adjustTextarea();

    // loading bubble
    const loading = document.createElement('div');
    loading.className = 'chat chat-start';
    loading.innerHTML = `
      <div class="chat-image avatar">
        <div class="w-10 h-10 rounded-full overflow-hidden">
          <img src="${profileAvatar.src}" />
        </div>
      </div>
      <div class="chat-bubble chat-bubble-accent">…</div>`;
    chatWindow.appendChild(loading);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    try {
      const res = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ conversation })
      });
      const data = await res.json();
      loading.remove();
      if (data.error) {
        appendBubble({ text: "Error: " + data.error, side: 'chat-start', bubbleClass: 'chat-bubble-error' });
      } else {
        conversation.push({ role: 'assistant', content: data.reply });
        appendBubble({ text: data.reply, side: 'chat-start', bubbleClass: 'chat-bubble-accent' });
      }
    } catch(err) {
      loading.remove();
      appendBubble({ text: "Network error", side: 'chat-start', bubbleClass: 'chat-bubble-error' });
      console.error(err);
    }
  });

  // --- Avatar Selection & Profile Update ---
  const avatarEls = document.querySelectorAll('#drawer .avatar');
  function updateProfile(id) {
    const el = document.querySelector(`.avatar[data-avatar="${id}"]`);
    profileAvatar.src = el.src;
    profileText.textContent = PROFILE_DESCRIPTIONS[id];
  }
  avatarEls.forEach(el => {
    el.addEventListener('click', () => {
      avatarEls.forEach(a => a.classList.remove('ring','ring-primary','ring-4'));
      el.classList.add('ring','ring-primary','ring-4');
      const id = el.getAttribute('data-avatar');
      resetConversation(id);
      updateProfile(id);
      chatWindow.querySelectorAll('.chat').forEach(n => n.remove());
    });
  });

  // --- Initialize first avatar on load ---
  if (avatarEls.length) {
    const first = avatarEls[0];
    const id = first.getAttribute('data-avatar');
    first.classList.add('ring','ring-primary','ring-4');
    resetConversation(id);
    updateProfile(id);
  }

  // --- Theme Selector (DaisyUI) ---
  const themeSelector = document.getElementById('theme-selector');
  const themeLabel = themeSelector.querySelector('label');
  const rootElem = document.documentElement;
  const items = themeSelector.querySelectorAll('[data-theme-name]');

  const savedTheme = localStorage.getItem('theme') || rootElem.getAttribute('data-theme');
  if (savedTheme) rootElem.setAttribute('data-theme', savedTheme);

  themeLabel.addEventListener('click', e => {
    e.stopPropagation();
    themeSelector.classList.toggle('dropdown-open');
  });
  document.addEventListener('click', e => {
    if (!themeSelector.contains(e.target)) {
      themeSelector.classList.remove('dropdown-open');
    }
  });
  items.forEach(a => {
    a.addEventListener('click', () => {
      const t = a.getAttribute('data-theme-name');
      rootElem.setAttribute('data-theme', t);
      localStorage.setItem('theme', t);
      themeSelector.classList.remove('dropdown-open');
    });
  });
    // ─── Request a Character Modal ───────────────────────────────────────────────
  const reqBtn    = document.getElementById('request-btn');
  const reqModal  = document.getElementById('request-modal');
  const reqClose  = document.getElementById('request-close');
  const reqForm   = document.getElementById('request-form');
  const reqAlert  = document.getElementById('request-alert');

  // show the modal
  reqBtn.addEventListener('click', () => {
    reqAlert.textContent = '';
    reqAlert.className    = '';
    reqForm.reset();
    reqModal.classList.remove('hidden');
  });

  // hide on close button or click outside content
  reqClose.addEventListener('click', () => reqModal.classList.add('hidden'));
  reqModal.addEventListener('click', e => {
    if (e.target === reqModal) reqModal.classList.add('hidden');
  });

  // AJAX‑submit to Formspree
  reqForm.addEventListener('submit', async e => {
    e.preventDefault();
    reqAlert.textContent = 'Sending…';
    reqAlert.className   = '';

    const data = new FormData(reqForm);
    const nameValue = data.get('name');
    // override the subject field dynamically:
    data.set('_subject', `PersonaPal message from ${nameValue}`);
    try {
      const res = await fetch('https://formspree.io/f/xwpolkzo', {
        method:  'POST',
        body:    data,
        headers: { 'Accept': 'application/json' }
      });
      const json = await res.json();
      if (json.ok) {
        reqAlert.textContent = '✔️ Request sent! I’ll be in touch soon.';
        reqAlert.classList.add('success');
        reqForm.reset();
      } else {
        throw new Error(json.error || 'Submission failed');
      }
    } catch(err) {
      console.error(err);
      reqAlert.textContent = '❌ Oops! Something went wrong.';
      reqAlert.classList.add('error');
    }
  });
});
