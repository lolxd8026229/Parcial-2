import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ActorModule } from '../actor/actor.module';
import { MovieService } from './movie.service';

@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent],
  imports: [CommonModule, ActorModule],
  exports: [MovieListComponent],
  providers: [MovieService, provideHttpClient(withInterceptorsFromDi())],
})
export class MovieModule {}
