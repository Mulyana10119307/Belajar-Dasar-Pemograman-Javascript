// parent class
class MailService {
  constructor(sender) {
    this.sender = sender;
  }
}

//subclass
class WhatsAppService extends MailService {
  //overriding constructor
  constructor(sender, isBusiness) {
    super(sender);

    this.isBusiness = isBusiness;
  }
}

const whatsapp = new WhatsAppService("+6281234567890", true);

console.log(whatsapp);
