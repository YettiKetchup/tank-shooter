export class HealthComponent {
  public value: number = 0;
  public maxHealth: number = 0;

  constructor(maxHealth: number = 100) {
    this.maxHealth = this.value = maxHealth;
  }
}
