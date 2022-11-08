import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  imageBaseUrl = environment.images;
  movie = null;
  constructor(private route: ActivatedRoute ,
     private movieService: MovieService) { }

  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  console.log('id = '+id);
    this.movieService.getMovieDetails(id).subscribe((res)=>{
      console.log('res = ',res);
      this.movie = res;
    });
  }

}
