// Отправка данных формы в Телеграм
const TOKEN = "7703848769:AAG_m1epbfxmF4FNrcWrmCXumpKoedZdLuc";
const CHAT_ID = "-1002250783806";
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

const forms = document.querySelectorAll("form.form");
if (forms) {
  forms.forEach(form => form.addEventListener("submit", sendMessageTelegram));
}

function sendMessageTelegram (evt) {
  evt.preventDefault();


  const successFormMessage = document.querySelector('#formMessageSuccess');
  const errorFormMessage = document.querySelector('#formMessageError');

  function formSuccess () {
    successFormMessage.showModal();
  }

  function formError () {
    errorFormMessage.showModal();
  }


  //let message = `<b>Заявка с сайта Е.Китаевой:</b>\n`;
  let message = "";

  if (this.classList.contains("feedback__form")) {
    message += `<b>Имя:</b> ${this.name.value}\n`;
    message += `<b>Телефон:</b> ${this.phone.value}\n`;
    if (this.message.value) {
      message += `<b>Сообщение:</b> ${this.message.value}\n`;
    }
  }

  if (this.classList.contains("mailing__form")) {
    message += `<b>Подписка на почту:</b> ${this.email.value}\n`;
  }


  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: message,
  })
    .then( () => {
      console.log("Заявка отправлена");
      formSuccess();
    })
    .catch(err => {
      console.warn(err);
      formError();
    })
    .finally(() => {
      console.log("Конец");
    });
  this.reset();

};