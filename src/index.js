export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже добавлен!');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((elem) => this.members.add(elem));
  }

  toArray() {
    return Array.from(this.members);
  }
}
