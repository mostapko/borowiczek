import { AuthenticationEffects } from "./authentication.effects";
import { SettingsEffects } from "./settings.effects";
import {PostsEffects} from "./posts.effects";

export const effects: any[] = [
  AuthenticationEffects,
  SettingsEffects,
  PostsEffects
];
