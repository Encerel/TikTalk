import { Component, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ImageUrlPipe } from '../../helpers/pipes/image-url.pipe';

@Component({
  selector: 'app-profile-card',
  imports: [ImageUrlPipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
  @Input() actionType: 'message' | 'subscribe' = 'subscribe';
  @Input() showInvite = false;

  get primaryActionLabel(): string {
    return this.actionType === 'message' ? 'Написать' : 'Подписаться';
  }

  getSkills(profile: Profile): string[] {
    return profile.stack.slice(0, 5);
  }
}
