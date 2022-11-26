import { Injectable } from '@angular/core';
import {from, Observable} from "rxjs";
import {createClient, Session} from "@supabase/supabase-js";
import {environment} from "../../../environments/environment";
import {AuthenticationDataService} from "./authentication-data.service";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  private userId!: string;
  private userName!: string;
  private userFollowing!: string[];

  constructor(private authenticationDataService: AuthenticationDataService) {
    this.authenticationDataService.selectUserAllData().subscribe((i) => {
      this.userId = i.id;
      this.userName = i.username;
      this.userFollowing = i.following;
    })
  }

  // TODO: Enable posting with images
  public createNewPost(content: string): Observable<any> {
    return from(this.supabase
      .from('posts')
      .insert([
        { content: content,
          author: this.userId,
          author_name: this.userName },
      ]));
  }

  public getOwnPosts(): Observable<any> {
    return from(this.supabase
      .from('posts')
      .select('*').eq('author', this.userId));
  }

  public getOwnAndFollowingPosts(): Observable<any> {
    return from(this.supabase
      .from('posts')
      .select('*').in('author', [this.userId, ...this.userFollowing])
      .order('created_at', { ascending: false }));
  }

  public likeAPost(postId: number, likesArray: string[]): Observable<any> {
    // in the future do the validation and appending on the backend
    if (!likesArray.includes(this.userId)) {
      return from(this.supabase
        .from('posts')
        .update({ liked_by: [...likesArray, this.userId] } ).eq('id', postId));
    }
    return from(this.supabase
      .from('already-liked').select(''));
  }
}
