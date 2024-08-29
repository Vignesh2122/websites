class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    message = message.toLowerCase();
    message = `${message} in Pirai`;
    // if (message.includes("stats") || message.includes("statistics")) {
    //   return [this.actionProvider.handleLocalStats()];
    // }

    // if (message.includes("job openings") || message.includes("career")) {
    //   return this.actionProvider.handleOpenings();
    // }

    // if (
    //   message.includes("about pirai") ||
    //   message.includes("pirai") ||
    //   message.includes("piraiinfo")
    // ) {
    //   return this.actionProvider.handlePirai();
    // }

    // if (message.includes("thanks") || message.includes("thank you")) {
    //   return this.actionProvider.handleThanks();
    // }

    return this.actionProvider.handleAiApi(message);
    // return this.actionProvider.handleOptions({ withAvatar: true });
  }
}

export default MessageParser;
