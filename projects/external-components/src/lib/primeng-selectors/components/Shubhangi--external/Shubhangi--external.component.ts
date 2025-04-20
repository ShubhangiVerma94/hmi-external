import { Component } from '@angular/core';
import { CommonExternalComponent } from '../common-external/common-external.component';

@Component({
  selector: 'app-shubhangi',
  template: `
    <div style="text-align:center; padding:24px; background:#f0f8ff; border-radius:16px; box-shadow:0 2px 8px rgba(0,0,0,0.08); max-width:400px; margin:auto;">
      <h2 style="color:#673ab7;">😂 Funny Games 😂</h2>
      <p style="font-size:18px; color:#333;">Guess the number between <b>1</b> and <b>10</b>!</p>
      <input 
        type="number" 
        [(ngModel)]="userGuess" 
        min="1" max="10"
        style="width:60px; font-size:16px; text-align:center; border:1px solid #ccc; border-radius:4px;"
        placeholder="?" />
      <button 
        (click)="checkGuess()"
        style="margin-left:12px; background:#ffeb3b; border:none; border-radius:4px; padding:6px 14px; cursor:pointer; font-weight:bold;">
        Guess!
      </button>
      <div *ngIf="message" style="margin-top:18px; font-size:17px; color:#009688;">
        {{ message }}
      </div>
      <button 
        (click)="resetGame()"
        style="margin-top:20px; background:#e1bee7; border:none; border-radius:4px; padding:5px 12px; cursor:pointer;">
        Play Again
      </button>
    </div>
  `
})
export class ShubhangiComponent extends CommonExternalComponent {
  userGuess: number | null = null;
  secretNumber: number = this.generateSecret();
  message: string = '';

  generateSecret(): number {
    return Math.floor(Math.random() * 10) + 1;
  }

  checkGuess(): void {
    if (this.userGuess == null) {
      this.message = 'Please enter a guess!';
      return;
    }
    if (this.userGuess === this.secretNumber) {
      this.message = '🎉 Correct! You are a funny genius!';
    } else {
      this.message = '😜 Nope! Try again...';
    }
  }

  resetGame(): void {
    this.secretNumber = this.generateSecret();
    this.userGuess = null;
    this.message = '';
  }
}