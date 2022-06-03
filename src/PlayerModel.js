class PlayerModel {
  constructor(data) {
    if ('player' in data) {
      this.player = data.player;
    }

    if ('stats' in data) {
      this.stats = data.stats;
    }
  }

  _roundTwoDecimals (num) {
    return Math.round(num * 100) / 100
  }

  _capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  infoToCard() {
    const appearances = this.stats.find(item => item.name === 'appearances').value
    const goals = this.stats.find(item => item.name === 'goals').value
    const fwdPass = this.stats.find(item => item.name === 'fwd_pass').value
    const minsPlayed = this.stats.find(item => item.name === 'mins_played').value
  
    return {
      id: this.player.id,
      name: `${this.player.name.first} ${this.player.name.last}`,
      position: this.player.info.positionInfo,
      stats: [
        {name: this._capitalizeFirstLetter('appearances'), value: appearances},
        {name: this._capitalizeFirstLetter('goals'), value: goals},
        {name: this._capitalizeFirstLetter('goals_per_match'), value: this._roundTwoDecimals(goals/appearances)},
        {name: this._capitalizeFirstLetter('passes_per_minute'), value: this._roundTwoDecimals(fwdPass/minsPlayed)}
      ]
    };
  }
}
