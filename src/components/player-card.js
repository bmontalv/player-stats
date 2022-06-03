class PlayerCard extends HTMLElement {
  
  connectedCallback() {
    this.render();
}

  disconnectedCallback() {
    this.remove();
  }
  
  get id() {
    return this.getAttribute("id");
  }
  get name() {
    return this.getAttribute("name");
  }
  get position() {
    return this.getAttribute("position");
  }
  get stats() {
    const statsValue = this.getAttribute("stats")
    return JSON.parse(statsValue);
  }
  
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  statsSummary() {
    return this.stats.map((stat, index) => {
      return `
        <li key=${index} class="stats-line">
          <p class="text text--stats">${stat.name.replace(/_/g, ' ')}</p>
          <p class="text text--stats text--stats__bold">${stat.value}</p>
        </li>
      `
    }).join('')
  }
  
  
  render() {
    this.shadowDOM.innerHTML = `
    <link href="styles.css" rel="stylesheet" type="text/css"> 
    <div class="card">
      <div class="img-container">
        <img src=${`assets/p${this.id}.png`} alt="player picture">
      </div>
      <div class="info-container">
        <p class="text text--title">${this.name}</p>
        <p class="text text--subtitle">${this.position}</p>
        <ul class="stats-list">
          ${this.statsSummary()}
        </ul>
      </div>
    </div>
    `;
  }
  
}

customElements.define("player-card", PlayerCard);