const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
  menu.textContent = 'Menu +';
}
menu.hidden = false;
document.documentElement.classList.add('js-nav');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
  menu.textContent = open ? 'Close −' : 'Menu +';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});

let topic = 'Bulk books and team learning';
const topicButtons = document.querySelectorAll('[data-topic]');
topicButtons.forEach(button => button.addEventListener('click', () => {
  topic = button.dataset.topic;
  topicButtons.forEach(other => {
    const selected = other === button;
    other.classList.toggle('active', selected);
    other.setAttribute('aria-pressed', String(selected));
  });
}));

const recipient = 'joe@joereismedia.com';
function prepareDraft(form, subject, body) {
  const result = form.querySelector('.form-result');
  result.replaceChildren();
  const note = document.createElement('p');
  note.textContent = 'Your email draft is ready. Nothing has been sent. Open your email app, or copy the draft into webmail.';

  const draftLabel = document.createElement('label');
  draftLabel.textContent = 'Prepared email';
  const draftText = document.createElement('textarea');
  draftText.readOnly = true;
  draftText.rows = 9;
  draftText.value = `To: ${recipient}\nSubject: ${subject}\n\n${body}`;
  draftLabel.append(draftText);

  const actions = document.createElement('div');
  actions.className = 'draft-actions';
  const emailLink = document.createElement('a');
  emailLink.className = 'button' + (form.id === 'business-form' ? ' light' : '');
  emailLink.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  emailLink.textContent = 'Open email app ↗';

  const copy = document.createElement('button');
  copy.type = 'button';
  copy.className = emailLink.className;
  copy.textContent = 'Copy draft';
  const status = document.createElement('p');
  status.className = 'draft-status';
  status.setAttribute('role', 'status');
  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(draftText.value);
      status.textContent = 'Draft copied. Paste it into your email service, review it, and send it to Joe.';
      copy.textContent = 'Copy again';
    } catch {
      draftText.focus();
      draftText.select();
      status.textContent = 'Automatic copying is unavailable. The draft is selected; use your device’s Copy command, then paste it into your email service.';
    }
  });
  actions.append(emailLink, copy);
  result.append(note, draftLabel, actions, status);
  result.hidden = false;
  result.focus();
}

document.getElementById('business-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = 'Practical Data Media: ' + topic;
  const fields = [...data].filter(([, value]) => String(value).trim());
  const body = 'Hi Joe,\n\n' + fields.map(([key, value]) => `${key}:\n${String(value).trim()}`).join('\n\n');
  prepareDraft(form, subject, body);
});
