import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | null = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovieDetail(+id).subscribe({
        next: (data) => {
          this.movie = data;
        },
        error: (error) => {
          console.error('Error loading movie detail:', error);
        }
      });
    }
  }
}
