const cutDescription = (text, number) => {
    if (text) {
      return text.slice(0, number) + "...";
    }
}

export default cutDescription