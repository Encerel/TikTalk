import { Component, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { NgOptimizedImage } from '@angular/common';
import { ImageUrlPipe } from '../../helpers/pipes/image-url.pipe';

@Component({
  selector: 'app-profile-card',
  imports: [NgOptimizedImage, ImageUrlPipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}
